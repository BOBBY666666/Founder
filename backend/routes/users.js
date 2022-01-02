const router = require("express").Router();
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/register", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/register", async (req, res) => {
  //validation
  var EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@staff+.tu.ac.th/;
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ msg: "กรุณากรอกข้อมูลให้ครบทุกช่อง" });
  }
  if (req.body.name.length > 50) {
    return res.status(400).json({ msg: "ชื่อ-นามสกุลมีความยาวเกิน 50 ตัวอักษร" });
  }
  if (!req.body.email.match(EmailRegex)) {
    return res.status(400).json({ msg: "รูปแบบอีเมลแอดเดรสไม่ถูกต้อง" });
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ msg: "มีบุคคลอื่นใช้อีเมลแอดเดรสนี้แล้ว" });
  }

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // Store hash in your password DB.
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    });
  });
});

router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    date: user.date,
  });
});

router.delete("/profile", auth, (req, res) => {
  User.findByIdAndDelete(req.user._id)
    .then(() => res.json("ลบบัญชีผู้ใช้"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", async (req, res) => {
  User.findByIdAndDelete(req.user._id)
    .then(() => res.json("ลบบัญชีผู้ใช้"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/login", (req, res) => {
  res.send("GET Login");
});

router.post("/login", async (req, res) => {
  //validation for general
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: "กรุณากรอกข้อมูลให้ครบทุกช่อง" });
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ msg: "ไม่มีบัญชีผู้ใช้นี้" });
  }

  bcrypt.compare(req.body.password, user.password, function (err, response) {
    if (!response) {
      return res.status(400).send({ msg: "เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์การลงชื่อเข้าใช้" });
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.json({
        token: token,
        user: {
          id: user._id,
          name: user.name,
          date: user.date,
        },
      });
    }
  });
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res.json("false");
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.json("false");
    }

    const user = await User.findById(verified._id);
    if (!user) {
      return res.json("false");
    }

    return res.json(true);
  } catch {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
