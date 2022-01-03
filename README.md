# Founder CSTU Document management system

## How to setup

```bash
# Step 1 -- install node.js in the root folder and in the /frontend folder.
$ npm install
$ cd frontend
$ npm install
$ cd..
```

```bash
# Step 2 -- install dependencies in the /frontend folder.
$ cd frontend
$ npm install axios bcryptjs concurrently cors crypto dotenv express express-fileupload gridfs jsonwebtoken method-override mongoose morgan multer multer-gridfs-storage nodemon
$ cd..
```

```bash
# Step 3 -- start application from the root directory.
$ npm run dev
```

If you clone from [Founder in Github](https://github.com/BOBBY666666/Founder). you can skip step 2.


## Directory tree
```bash
.
└───Founder
    ├───backend
    │   ├───middleware
    │   ├───model
    │   └───routes
    └───frontend
        ├───public
        │   ├───img
        │   └───uploads
        └───src
            └───components
                ├───auth
                ├───css
                └───TeacherPage
```