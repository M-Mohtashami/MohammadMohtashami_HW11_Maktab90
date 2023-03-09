import { RpG, totalPages, updatePages } from '@/App';
import { nextPage, prevPage, DB, renderUi } from '@/library';

export const handlePagination = (searchVal) => {
  let db = DB.getDB();
  const pageNumber = +document.getElementById('page').innerText;

  if (searchVal) {
    db = db.filter((item) => item.taskName.includes(searchVal));
  }
  let rpg = RpG;
  let startRow = 1;
  let endRow = db.length;
  if (rpg === 'All') {
    rpg = db.length;
  } else {
    rpg = +rpg;
    startRow = pageNumber * rpg - rpg + 1;
    endRow = pageNumber * rpg;
    endRow > db.length ? (endRow = db.length) : endRow;
  }
  updatePages(Math.ceil(db.length / rpg));
  renderUi(db, startRow, endRow, pageNumber);
};
