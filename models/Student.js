import mongoose from "mongoose";
import validator from "validator";

const StudentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    studentEmail: {
      type: String,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
    },
    studentLocation: {
      type: String,
      required: true,
      maxlength: 20,
      default: "my location",
    },
    studentStatus: {
      type: String,
      enum: ["enrolled", "declined", "pending"],
      default: "pending",
    },
    studentCourse: {
      type: String,
      enum: [
        "General English",
        "Carpentry",
        "Painting and Decorating",
        "Massage",
      ],
      default: "General English",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", StudentSchema);
