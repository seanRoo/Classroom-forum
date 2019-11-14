const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our topic data structure 
const topicSchema = new Schema ({
  title: {type: String, required: true},
	bodytext: {type: String, required: true},
	category: {type: String, required: true},
},
{timestamps: true }
);
	
// export the topic schema
module.exports = mongoose.model("Topic", topicSchema); 