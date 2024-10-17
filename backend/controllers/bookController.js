const Book = require("../models/bookModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//create book

exports.createBook = catchAsyncErrors(async (req, res, next) => {
  const book = await Book.create(req.body);
  res.status(201).json({
    success: true,
    book,
  });
});

//get all books

exports.getAllBooks = catchAsyncErrors(async (req, res, next) => {
  resultPerPage = 5;
  const apiFeature = new ApiFeatures(Book.find(), req.query)
    .search()
    .filter()
    .sort()
    .pagination(resultPerPage);

  const books = await apiFeature.query;

  res.status(200).json({
    success: true,
    books,
  });
});

//get single book

exports.getBookDetails = catchAsyncErrors(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return next(new ErrorHandler("Comic Book Not Found", 404));
  }

  res.status(200).json({
    success: true,
    book,
  });
});

//update book

exports.updateBook = catchAsyncErrors(async (req, res, next) => {
  let book = await Book.findById(req.params.id);

  if (!book) {
    return next(new ErrorHandler("Comic Book Not Found", 404));
  }

  book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    book,
  });
});

//delete book

exports.deleteBook = catchAsyncErrors(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return next(new ErrorHandler("Comic Book Not Found", 404));
  }

  await book.deleteOne();

  res.status(200).json({
    success: true,
    message: "Book Deleted Successfully",
  });
});
