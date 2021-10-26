function findAccountById(accounts, id) {
  // Use find to obtain given account
  const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  // Use sort to arrange by last name
  const alphabetical = accounts.sort((nameA,nameB) =>
   nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1); 
  return alphabetical;
}

function getTotalNumberOfBorrows(account, books) {
   // Grab account id
  const userId = account.id;
   
  let accumulator = 0;
  const total = books.reduce((acc, book) => {
    const borrowRecord = book.borrows;
    const mapIds = borrowRecord.map((record) => record.id);
    if (mapIds.includes(userId)) acc++;
    return acc;
  }, accumulator);
  
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
    .map(book => { const author = authors.find(author => author.id === book.authorId)
      book.author = author; 
      return book;         
 })  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
