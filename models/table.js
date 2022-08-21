const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    bookname: {type:Array},
    authorname:{type: Array},
    list:{type:Array}
    
      
  },
  { collection: "tables" }
);

const model = mongoose.model("UserSchema", UserSchema);
module.exports = model;
