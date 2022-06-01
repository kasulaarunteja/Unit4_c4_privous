const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, "../uploads"));

    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + "-" + file.originalname);

    },

});

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "text/*" || file.mimetype === "image/png" ||  file.mimetype === "image/jpeg") { 
        callback(null, true);
    } else {
        callback(null, false);
    };

}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 3,
    }
});

const uploadSingle = (fieldName) => {
    return (req, res, next) => {
        const uploadItem = upload.single(fieldName);

        uploadItem(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                res.send({ message: err.message, errorType: "Multer  Error" });
            } else if (err) { 
                res.send({ message: err.message, errorType: "Normal  Error" });

            }
            next();
        })
    }
}
module.exports = uploadSingle;