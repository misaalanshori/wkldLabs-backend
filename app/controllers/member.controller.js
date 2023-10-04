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
    where: { id: req.body.major},
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
        message: err.message || "Some error occurred while creating the Book.",
        data: null,
      });
    });
};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.findAll = (req, res) => {
    Member.findAll()
      .then((member) => {
        res.json({
          message: "Books retrieved successfully.",
          data: member,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while retrieving books.",
          data: null,
        });
      });
  };

