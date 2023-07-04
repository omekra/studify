import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

class CustomApiError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomApiError("Please provide all values");
  }

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ name, email, password });
};
const login = async (req, res) => {
  res.send("login user");
};
const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
