const multer = require('multer');
const path = require('path');



const storage = multer.memoryStorage({
    destination: function(req, file, cb) {
        cb(null, '');
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 1500000 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|svg/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));


        if (mimetype && extname) {
            return cb(null, true);
        }

        cb();
    }

}).any();

module.exports = upload;