const db = require('../models')
const Major = db.major;

exports.create = (req, res) => {
    if (!req.body.name){
        return res.status(400).send({
            message: "Name is empty",
        });
    }

    const major = {
        name: req.body.name,
        description: req.body.description,
    };

    Major.create(major)
        .then((data) => {
            res.json({
                message: "Major created",
                data: data,
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error",
                data: null,
            });
        });
};