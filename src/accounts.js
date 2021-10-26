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
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
    .map(book => { let author = authors.find(author => author.id === book.authorId)
      book.author = author; return book         
 })  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
