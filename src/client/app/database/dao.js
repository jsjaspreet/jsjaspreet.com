import database from './db.json';

const PAGE_SIZE = 10;

const db = {
  getPage(pageNumber = 0) {
    const startIndex = PAGE_SIZE * pageNumber;
    return database.slice(startIndex, startIndex + PAGE_SIZE);
  },
  getTotalPages() {
    return Math.ceil(database.length / PAGE_SIZE);
  }
};

export default db;
