import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnAuthenticatedError("Authentication invalid");
  }

  next();
};

export default auth;
