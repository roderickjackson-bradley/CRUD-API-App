// User model

const mongoose = require("mongoose");



// Create Schema
const boxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  }  
});
module.exports = User = mongoose.model("boxes", boxSchema);