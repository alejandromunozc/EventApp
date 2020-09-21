const { config } = require('../config');
const aws = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const s3Upload = async (req, res, next) => {

    const s3 = new aws.S3({
        accessKeyId: config.awsId,
        secretAccessKey: config.awsSecret
    });

    if (!req.files || !req.files[0].buffer) {
        next();
    } else {
        const fieldName = req.files[0].fieldname;
        const myFile = req.files[0].originalname.split(".")
        const fileType = myFile[myFile.length - 1]

        const params = {
            Bucket: config.awsBucket,
            Key: `${uuidv4()}.${fileType}`,
            Body: req.files[0].buffer
        }

        s3.upload(params, async (error, data) => {
            // Considerar esta logica es probable que sean mas elementos a subir y muchos Ifs no es recomendable.
            if (error) {
                return error;
            };
            if (fieldName === 'banner') {
                req.body.banner_url = await data.Location;
            } else if (fieldName === 'logo') {
                req.body.logo_url = await data.Location;
            } else {
                req.body.img_url = await data.Location;
            }
            next();
        });
    }
}

module.exports = s3Upload;