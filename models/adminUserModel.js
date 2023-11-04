import mongoose, {Schema, model, models} from "mongoose";

const adminUserSchema = new Schema({   //will be stored in an admin table
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
//   forgotPasswordToken: String,
//   forgotPasswordTokenExpiry: Date,
//   verifyToken: String,
//   verifyTokenExpiry: Date,
});

const adminUser = models.adminuser || model("adminuser", adminUserSchema);

export default adminUser
