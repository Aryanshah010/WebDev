let books = [];

function addBook(title, author, year) {
  let book = {
    title: title,
    author: author,
    year: year,
    mark: false,
  };
  books.push(book);
  console.log(`Book Added: ${book.title}`);
}

function removeBook(title) {
  let index = books.findIndex(
    (b) => b.title.toLowerCase() === title.toLowerCase()
  );
  if (index !== -1) {
    console.log(`Removed Book: ${books[index].title}`);
    books.splice(index, 1);
  } else {
    console.log(`⚠️ Book not found: "${title}"`);
  }
}

function mark(title, status) {
  let book = books.find((b) => b.title.toLowerCase() === title.toLowerCase());
  if (book) {
    book.mark = status;
    console.log(`📖 ${book.title} marked as ${status ? "Read" : "Unread"}`);
  } else {
    console.log(`Book not found: ${title}`);
  }
}

function show() {
  if (books.length === 0) {
    console.log("The Library is empty");
    return;
  }

  console.log("Library Books:");
  books.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} by ${book.author} in (${book.year}) - [${
        book.mark ? "Finished" : "Unfinished"
      }]`
    );
  });
}

