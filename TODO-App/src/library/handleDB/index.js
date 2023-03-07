export const DB = {
  ToDoDB: [],
  getDB() {
    return JSON.parse(localStorage.getItem('ToDoDB'));
  },
  setDB() {
    localStorage.setItem('ToDoDB', JSON.stringify(this.ToDoDB));
  },
  addItem(item) {
    if (this.getDB()) this.ToDoDB = this.getDB();
    this.ToDoDB.push(item);
    this.setDB();
  },
  deleteItem(id) {
    if (this.getDB()) this.ToDoDB = this.getDB();
    this.ToDoDB = this.ToDoDB.filter((item) => item.id !== id);
    this.setDB();
  },
  findItem(id) {
    return this.getDB().find((item) => item.id === id);
  },
  updateItem(newItem) {
    this.ToDoDB = this.getDB().forEach((item) => {
      if (item.id === newItem.id) item = newItem;
    });
    this.setDB(this.ToDoDB);
  },
};
