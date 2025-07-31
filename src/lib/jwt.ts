import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

type PayloadType = {
  userId: string;
};

export function signJWT(payload: PayloadType) {
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }
  return jwt.sign(payload, secret, { expiresIn: "1d" });
}

export function verifyJWT(token: string) {
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}
