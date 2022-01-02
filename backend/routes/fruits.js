const router = require("express").Router();
const Fruit = require("../model/fruitModel");
const User = require("../model/userModel");
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
  Fruit.find()
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/general", (req, res) => {
  Fruit.find({type: 'เอกสารทั่วไป'})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/personal", (req, res) => {
  Fruit.find({type: 'เอกสารบุคคล'})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/head", (req, res) => {
  Fruit.find({type: 'เอกสารถึงหัวหน้าสาขา'})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/project", (req, res) => {
  Fruit.find({type: 'เอกสารโครงการต่างๆ'})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/out", (req, res) => {
  Fruit.find({type: 'เอกสารออก'})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec", (req, res) => {
  Fruit.find({$or: [{access1: 'www'},{access2: 'www'},{access3: 'www'},{access4: 'www'},{access5: 'www'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-nut", (req, res) => {
  Fruit.find({$or: [{access1: 'รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร'},{access2: 'รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร'},{access3: 'รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร'},{access4: 'รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร'},{access5: 'รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-yao", (req, res) => {
  Fruit.find({$or: [{access1: 'รศ.ดร. เยาวดี เต็มธนาภัทร'},{access2: 'รศ.ดร. เยาวดี เต็มธนาภัทร'},{access3: 'รศ.ดร. เยาวดี เต็มธนาภัทร'},{access4: 'รศ.ดร. เยาวดี เต็มธนาภัทร'},{access5: 'รศ.ดร. เยาวดี เต็มธนาภัทร'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

///
router.get("/doc-for-lec-sao", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. เสาวลักษณ์ วรรธนาภา'},{access2: 'ผศ.ดร. เสาวลักษณ์ วรรธนาภา'},{access3: 'ผศ.ดร. เสาวลักษณ์ วรรธนาภา'},{access4: 'ผศ.ดร. เสาวลักษณ์ วรรธนาภา'},{access5: 'ผศ.ดร. เสาวลักษณ์ วรรธนาภา'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-wir", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์'},{access2: 'ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์'},{access3: 'ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์'},{access4: 'ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์'},{access5: 'ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-tana", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. ธนาธร ทะนานทอง'},{access2: 'ผศ.ดร. ธนาธร ทะนานทอง'},{access3: 'ผศ.ดร. ธนาธร ทะนานทอง'},{access4: 'ผศ.ดร. ธนาธร ทะนานทอง'},{access5: 'ผศ.ดร. ธนาธร ทะนานทอง'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-song", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช'},{access2: 'ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช'},{access3: 'ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช'},{access4: 'ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช'},{access5: 'ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-onj", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. อรจิรา สิทธิศักดิ์'},{access2: 'ผศ.ดร. อรจิรา สิทธิศักดิ์'},{access3: 'ผศ.ดร. อรจิรา สิทธิศักดิ์'},{access4: 'ผศ.ดร. อรจิรา สิทธิศักดิ์'},{access5: 'ผศ.ดร. อรจิรา สิทธิศักดิ์'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-den", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. เด่นดวง ประดับสุวรรณ'},{access2: 'ผศ.ดร. เด่นดวง ประดับสุวรรณ'},{access3: 'ผศ.ดร. เด่นดวง ประดับสุวรรณ'},{access4: 'ผศ.ดร. เด่นดวง ประดับสุวรรณ'},{access5: 'ผศ.ดร. เด่นดวง ประดับสุวรรณ'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-pak", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย'},{access2: 'ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย'},{access3: 'ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย'},{access4: 'ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย'},{access5: 'ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-mon", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. มนวรรัตน์ ผ่องไพบูลย์'},{access2: 'ผศ.ดร. มนวรรัตน์ ผ่องไพบูลย์'},{access3: 'ผศ.ดร. มนวรรัตน์ ผ่องไพบูลย์'},{access4: 'ผศ.ดร. มนวรรัตน์ ผ่องไพบูลย์'},{access5: 'ผศ.ดร. มนวรรัตน์ ผ่องไพบูลย์'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-pok", (req, res) => {
  Fruit.find({$or: [{access1: 'อ.ดร. ปกป้อง ส่องเมือง'},{access2: 'อ.ดร. ปกป้อง ส่องเมือง'},{access3: 'อ.ดร. ปกป้อง ส่องเมือง'},{access4: 'อ.ดร. ปกป้อง ส่องเมือง'},{access5: 'อ.ดร. ปกป้อง ส่องเมือง'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-vor", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย'},{access2: 'ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย'},{access3: 'ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย'},{access4: 'ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย'},{access5: 'ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-krit", (req, res) => {
  Fruit.find({$or: [{access1: 'อ. กฤตคม ศรีจิรานนท์'},{access2: 'อ. กฤตคม ศรีจิรานนท์'},{access3: 'อ. กฤตคม ศรีจิรานนท์'},{access4: 'อ. กฤตคม ศรีจิรานนท์'},{access5: 'อ. กฤตคม ศรีจิรานนท์'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-wpa", (req, res) => {
  Fruit.find({$or: [{access1: 'อ. ปกรณ์ แววสว่างวงศ์'},{access2: 'อ. ปกรณ์ แววสว่างวงศ์'},{access3: 'อ. ปกรณ์ แววสว่างวงศ์'},{access4: 'อ. ปกรณ์ แววสว่างวงศ์'},{access5: 'อ. ปกรณ์ แววสว่างวงศ์'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-kasi", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. กษิดิศ ชาญเชี่ยว'},{access2: 'ผศ.ดร. กษิดิศ ชาญเชี่ยว'},{access3: 'ผศ.ดร. กษิดิศ ชาญเชี่ยว'},{access4: 'ผศ.ดร. กษิดิศ ชาญเชี่ยว'},{access5: 'ผศ.ดร. กษิดิศ ชาญเชี่ยว'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-wila", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. วิลาวรรณ รักผกาวงศ์'},{access2: 'ผศ.ดร. วิลาวรรณ รักผกาวงศ์'},{access3: 'ผศ.ดร. วิลาวรรณ รักผกาวงศ์'},{access4: 'ผศ.ดร. วิลาวรรณ รักผกาวงศ์'},{access5: 'ผศ.ดร. วิลาวรรณ รักผกาวงศ์'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-parpha", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. ประภาพร รัตนธำรง'},{access2: 'ผศ.ดร. ประภาพร รัตนธำรง'},{access3: 'ผศ.ดร. ประภาพร รัตนธำรง'},{access4: 'ผศ.ดร. ประภาพร รัตนธำรง'},{access5: 'ผศ.ดร. ประภาพร รัตนธำรง'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-wani", (req, res) => {
  Fruit.find({$or: [{access1: 'ผศ.ดร. วนิดา พฤทธิวิทยา'},{access2: 'ผศ.ดร. วนิดา พฤทธิวิทยา'},{access3: 'ผศ.ดร. วนิดา พฤทธิวิทยา'},{access4: 'ผศ.ดร. วนิดา พฤทธิวิทยา'},{access5: 'ผศ.ดร. วนิดา พฤทธิวิทยา'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-nucha", (req, res) => {
  Fruit.find({$or: [{access1: 'อ. นุชชากร งามเสาวรส'},{access2: 'อ. นุชชากร งามเสาวรส'},{access3: 'อ. นุชชากร งามเสาวรส'},{access4: 'อ. นุชชากร งามเสาวรส'},{access5: 'อ. นุชชากร งามเสาวรส'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-siri", (req, res) => {
  Fruit.find({$or: [{access1: 'อ. สิริกันยา นิลพานิช'},{access2: 'อ. สิริกันยา นิลพานิช'},{access3: 'อ. สิริกันยา นิลพานิช'},{access4: 'อ. สิริกันยา นิลพานิช'},{access5: 'อ. สิริกันยา นิลพานิช'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-lumpa", (req, res) => {
  Fruit.find({$or: [{access1: 'อ.ดร. ลัมพาพรรณ พันธุ์ชูจิตร์'},{access2: 'อ.ดร. ลัมพาพรรณ พันธุ์ชูจิตร์'},{access3: 'อ.ดร. ลัมพาพรรณ พันธุ์ชูจิตร์'},{access4: 'อ.ดร. ลัมพาพรรณ พันธุ์ชูจิตร์'},{access5: 'อ.ดร. ลัมพาพรรณ พันธุ์ชูจิตร์'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-thapa", (req, res) => {
  Fruit.find({$or: [{access1: 'อ.ดร. ฐาปนา บุญชู'},{access2: 'อ.ดร. ฐาปนา บุญชู'},{access3: 'อ.ดร. ฐาปนา บุญชู'},{access4: 'อ.ดร. ฐาปนา บุญชู'},{access5: 'อ.ดร. ฐาปนา บุญชู'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-nuji", (req, res) => {
  Fruit.find({$or: [{access1: 'อ.ดร. นุชจรินทร์ อินต๊ะหล้า'},{access2: 'อ.ดร. นุชจรินทร์ อินต๊ะหล้า'},{access3: 'อ.ดร. นุชจรินทร์ อินต๊ะหล้า'},{access4: 'อ.ดร. นุชจรินทร์ อินต๊ะหล้า'},{access5: 'อ.ดร. นุชจรินทร์ อินต๊ะหล้า'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/doc-for-lec-wasit", (req, res) => {
  Fruit.find({$or: [{access1: 'อ.ดร. วสิศ ลิ้มประเสริฐ'},{access2: 'อ.ดร. วสิศ ลิ้มประเสริฐ'},{access3: 'อ.ดร. วสิศ ลิ้มประเสริฐ'},{access4: 'อ.ดร. วสิศ ลิ้มประเสริฐ'},{access5: 'อ.ดร. วสิศ ลิ้มประเสริฐ'}]})
    .then((fruits) => res.json(fruits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Fruit.findById(req.params.id)
    .then((fruits) => res.json(fruits))
    .catch((err) => res.json("Error: +err"));
});

router.post("/", auth, (req, res) => {
  const newFruit = new Fruit({
    no: req.body.no,
    name: req.body.name,
    type: req.body.type,
    date: req.body.date,
    time: req.body.time,
    file: req.body.file,
    access1: req.body.access1,
    access2: req.body.access2,
    access3: req.body.access3,
    access4: req.body.access4,
    access5: req.body.access5,
    addedBy: req.body.addedBy,
  });

  newFruit
    .save()
    .then((fruits) => res.json("New Fruit Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", auth, (req, res) => {
  Fruit.findByIdAndDelete(req.params.id)
    .then(() => res.json("Fruit deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", auth, (req, res) => {
  Fruit.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.json("Fruit updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
