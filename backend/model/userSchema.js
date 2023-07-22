const mongoose = require("mongoose");
const { Schema } = mongoose;
const JWT = require("jsonwebtoken");
const bcrypt = require('bcrypt')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is requried"],
      minLength: [5, "Name must be at least 5 char"],
      maxLength: [50, "Name must ve less than 50 char"],
      trim: true,
    },
    email: {
      type: String,
      requried: [true, "User email is required"],
      lowercase: true,
      unique: [true, "Already registered email"],
    },
    password: {
      type: String,
      select: false,
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordExpiryDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// encryptng the password

// Don't use arrow function here as it changes the defination of this.isModified
userSchema.pre("save", async function(next){
  if (!this.isModified("password")) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 10)
  return next()
});

// making cookies

userSchema.methods = {
  jwtToken() {
    return JWT.sign({ id: this._id, email: this.email }, process.env.SECRET, {
      expiresIn: "24h",
    });
  },
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
