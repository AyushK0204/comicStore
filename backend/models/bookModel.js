const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: [true, "Please Enter Comic Book Name"],
    trim: true,
  },
  authorName: {
    type: String,
    required: [true, "Please Enter Author Name"],
    trim: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Please Enter Comic Book Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  yearPublish: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  pages: {
    type: Number,
    default: 0,
  },
  condition: {
    type: String,
    required: [true, "Please Enter Comic Book Condition"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter Comic Book Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", bookSchema);
