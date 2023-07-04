const createStudent = async (req, res) => {
  res.send("create student");
};
const getAllStudents = async (req, res) => {
  res.send("getAllStudents");
};
const updateStudent = async (req, res) => {
  res.send("updateStudent");
};
const deleteStudent = async (req, res) => {
  res.send("deleteStudent");
};
const showStats = async (req, res) => {
  res.send("showStats");
};

export {
  createStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
  showStats,
};
