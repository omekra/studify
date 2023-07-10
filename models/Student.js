import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 20,
      default: "last name",
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
    },
    location: {
      type: String,
      required: true,
      maxlength: 20,
      default: "my location",
    },
    status: {
      type: String,
      enum: ["enrolled", "declined", "pending"],
      default: "pending",
    },
    course: {
      type: String,
      enum: [
        "General English",
        "Carpentry",
        "Painting and Decorating",
        "Massage",
      ],
      default: "",
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
