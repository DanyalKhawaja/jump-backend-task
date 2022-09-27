import jwt from "jsonwebtoken";
import env from "./env.js";

export const genRandValue = () => Math.random().toString(36).slice(2);

export const getCurrDateVal = () => new Date().valueOf();

export const dateVariance = () => getCurrDateVal() - parseInt(env.DOC_TTL) * 1e3;

export const genToken = () => jwt.sign({ token: "valid" }, env.JWT_SECRET);

export const verifyToken = (token) => jwt.verify(token, env.JWT_SECRET);
