import mongoose from "mongoose";

const incomeExpenseSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: [true, "amount is required"] },
    type: { type: String, enum: ["income", "expense"] },
    desc: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

const incomeExpense = mongoose.model(incomeExpenseSchema);
export default incomeExpense;
