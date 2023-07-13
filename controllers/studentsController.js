import { StatusCodes } from "http-status-codes";
import Student from "../models/Student.js";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createStudent = async (req, res) => {
  const { studentName, studentEmail } = req.body;
  if (!studentName || !studentEmail) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  const student = await Student.create(req.body);
  res.status(StatusCodes.CREATED).json({ student });
};
const getAllStudents = async (req, res) => {
  // const students = await Student.find({ createdBy: req.user.userId });
  const students = await Student.find();
  res
    .status(StatusCodes.OK)
    .json({ students, totalStudents: students.length, numOfPages: 1 });
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
