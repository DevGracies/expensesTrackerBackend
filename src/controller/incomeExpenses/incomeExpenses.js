import req from "express/lib/request.js";
import incomeExpense from "../../models/incomeExpense/incomeExpense.js";
import httpStatus from "http-status";
export const createIncomeExpense = async (req, res) => {
  const data = req.body;
  const create = await incomeExpense.create({
    amount: data.amount,
    desc: data.desc,
    type: data.type,
    user: data.user._id,
    category: data.categoryId,
  });
  res.status(httpStatus.CREATED).json({
    status: "Success",
    payload: create,
  });
};

export const getAllIncomeExpense = async (req, res) => {
  const get = await incomeExpense.find({ user: req.user._id });
  res.status(httpStatus.OK).json({
    status: "Success",
    payload: get,
  });
};

export const getIncomeExpense = async (req, res) => {
  const get = await incomeExpense
    .findById(req.params.incomeExpenseId)
    .populate("user category");
  if (!get) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "Error",
      payload: "IncomeExpense not found",
    });

    res.status(httpStatus.OK).json({
      status: "Success",
      payload: get,
    });
  }
};

export const updatedIncomeExpense = async (req, res) => {
  const { incomeExpenseId } = req.params;
  const {} = req.body;
  const IncomeExpense = await incomeExpense.findOne({ category: categoryId });
  if (!IncomeExpense) {
    re;
  }
};
