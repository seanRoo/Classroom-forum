const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our user data structure 
const userSchema = new Schema ({
  username: {type: String, required: true},
	firstname: {type: String, required: true},
	lastname: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true}
});
	


// export the user schema
module.exports = mongoose.model("User", userSchema);