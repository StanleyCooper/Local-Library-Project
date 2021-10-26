function findAuthorById(authors, id) {
  // Use the find method to find matching ID
  const found = idFinder(authors, id);
  return found;
}

function findBookById(books, id) {
  // Use the find method to find matching ID
  const found = idFinder(books, id);
  return found;
}

function idFinder(array, id) {
  return array.find((index) => index.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  // Use filter to find all currently checked books
  const currentlyChecked = books.filter((book)=> book.borrows[0].returned == false);

  // Use filter to find all currently returned books
  const currentlyReturned = books.filter((book) => book.borrows[0].returned == true);

  // Create our array
  let result = [currentlyChecked, currentlyReturned];
  return result;
}

function getBorrowersForBook(book, accounts) {
    
  let result = book.borrows.map(borrower => { 
    let result = accounts.find(account => borrower.id === account.id )
    result.returned = borrower.returned 
    return result
   })
   return result.filter((borrower, index)=> result.findIndex(item => item.id === borrower.id) === index) 
 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
