const db = require("../models");
const Member = db.member;
const Major = db.major;

// CREATE: untuk enambahkan data kedalam tabel book
exports.create = async (req, res) => {
  // validate request
    if (!req.body.nim) {
        return res.status(400).send({
            message: "NIM can not be empty",
        });
    }

    const foundMajor = await Major.findOne({
        here: { id: req.body.major},
    });

    if (!foundMajor) {
        return res.status(404).json({
            message: "Major not found. Make sure the major exists in the database.",
        });
    }


  // daya yang didapatkan dari inputan oleh pengguna
    const member = {
        nim: req.body.nim,
        name: req.body.name,
        majorId: foundMajor.id,
    };

  // proses menyimpan kedalam database
    await Member.create(member)
    .then((data) => {
      res.json({
        message: "Member created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the Member.",
        data: null,
      });
    });
};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.findAll = (req, res) => {
    Member.findAll()
      .then((member) => {
        res.json({
          message: "Member retrieved successfully.",
          data: member,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while retrieving member.",
          data: null,
        });
      });
  };

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
exports.update = async (req, res) => {
    const id = req.params.id;
    const foundMajor = await Major.findOne({
            where: { id: req.body.major},
      });
    
    if (!foundMajor) {
        return res.status(404).json({
            message: "Major not found. Make sure the major exists in the database.",
        });
    }
    const member = {
        nim: req.body.nim,
        name: req.body.name,
        majorId: foundMajor.id,
    };
    Member.update(member, {
        where: { id },
    })
        .then((num) => {
        if (num == 1) {
          res.json({
            message: "Member updated successfully.",
            data: req.body,
          });
        } else {
          res.json({
            message: `Cannot update member with id=${id}. Maybe member was not found or req.body is empty!`,
            data: req.body,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while updating the member.",
            data: null,
         });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
    const id = req.params.id;
    Member.destroy({
      where: { id },
    })
      .then((num) => {
        if (num == 1) {
          res.json({
            message: "Member deleted successfully.",
            data: req.body,
          });
        } else {
          res.json({
            message: `Cannot delete member with id=${id}. Maybe member was not found!`,
            data: req.body,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while deleting the member.",
          data: null,
        });
      });
  };

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = async (req, res) => {
    try {
        const member = await Member.findByPk(req.params.id);
    
        if (!member) {
          return res.status(404).json({
            message: "Member not found.",
            data: null,
          });
        }
    
        return res.json({
          message: "Member retrieved successfully.",
          data: member,
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          message: "An error occurred while retrieving member.",
          error: err.message,
          data: null,
        });
      }
  };