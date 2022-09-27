import dotenv from "dotenv";

dotenv.config();

const { DOC_TTL } = process.env;

export const genRandValue = () => Math.random().toString(36).slice(2);

export const getCurrDateVal = () => new Date().valueOf();

export const dateVariance = () => getCurrDateVal() - parseInt(DOC_TTL) * 1e3;

// export const log = {
//   dbConnected: () => () => console.log("Database successfully connected"),
//   dbConnClosed: (err) => () => console.log("Database connection closed", err),
//   dbConnFailed: (err) => () => console.log("Fail to connect database", err),
//   unAuthorized: (err) => () => console.log("Unauthorize request", err),
//   cache: (found) => () => `Cache ${found}`,
// };
