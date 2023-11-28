import mongoose from "mongoose";

const userShema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      min: 6,
      max: 12,
      required: [true, "please input username"],
    },
    password: {
      type: String,
      required: [true, "please input password"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please input password"],
    },
    role: {
      type: String,
      enum: ["libarian", "reader"],
      default: "libarian",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userShema);
export default User;
