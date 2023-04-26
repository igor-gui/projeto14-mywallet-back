import db from "./wallet.database.js";

export const users = db.collection("users");
export const sessions = db.collection("sessions");
export const transactions = db.collection("transactions")

