const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our post data structure 
const postSchema = new Schema ({
  firstname: {type: Schema.Types.ObjectId, ref: 'User'},
	lastname: { type: Schema.Types.ObjectId, ref: 'User'},
	content: {type: String, required: true},
	topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
},
{timestamps: true }
);
	
// export the post schema
module.exports = mongoose.model("Post", postSchema); 