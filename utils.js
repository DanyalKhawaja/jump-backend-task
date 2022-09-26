import dotenv from "dotenv";

dotenv.config();

const { DOC_TTL } = process.env;

export const genRandValue = () => Math.random().toString(36).slice(2);

export const getCurrDateVal = () => new Date().valueOf();

export const dateVariance = () => getCurrDateVal() - parseInt(DOC_TTL) * 1e3;
