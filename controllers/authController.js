import { BadRequestError } from "../errors/index.js";
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
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
