function findAccountById(accounts, id) {
  // Use find to obtain given account
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  // Use sort to arrange by last name
  let alphabetical = accounts.sort((nameA,nameB) =>
   nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1); 
  return alphabetical;
}

function getTotalNumberOfBorrows(account, books) {
  // Grab account id
  const userId = account.id;
  let total = 0;
  
  // Cycle through books
  for (let book in books) {
    let borrowRecord = books[book].borrows;
    let mapIds = borrowRecord.map((record) => record.id);

    // Check if borrows includes id
    if (mapIds.includes(userId)) total++;
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  // Grab account id
  const userId = account.id;
  // Filter through books to find book with borrows from the given account
  const borrowedBooks = books.filter((book) =>
    // Filter only if id matches given id and book is not returned
    book.borrows.some((borrow) => borrow.id === userId && borrow.returned === false));
  // Grab author Ids and push into our object
  for (let borrows in borrowedBooks) {
    // current book
    const current = borrowedBooks[borrows];
    // grab the author ID
    const id = authors.find((author) => current.authorId === author.id);
    console.log(id);

    // Push the author info into our object info
    const borrowedBooks = {...borrowedBooks, author: id};
    console.log(result);
  }
  console.log(borrowedBooks);
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
