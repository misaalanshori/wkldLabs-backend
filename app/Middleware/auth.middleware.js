const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    try{
        if (!req.headers.authorization){
            res.status(401).send({
                auth: false,
                message: 'Token required'
            })
        }
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err){
                return res.status(403).json({ message: err });
            }
            next();
        })
    }catch (err){
        return res.status(500).json({ message: err });
    }

}