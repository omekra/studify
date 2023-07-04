import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
  showStats,
} from "../controllers/studentsController.js";

const router = express.Router();

router.route("/").post(createStudent).get(getAllStudents);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteStudent).patch(updateStudent);

export default router;
