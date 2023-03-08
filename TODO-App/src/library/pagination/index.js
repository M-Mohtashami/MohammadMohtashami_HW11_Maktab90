import { totalPages, updatePages } from '@/App';
import { handlePagination } from '@/library';

export const nextPage = () => {
  const page = document.getElementById('page');
  let next = +page.innerText;
  page.innerText = ++next > totalPages ? totalPages : next;
  handlePagination();
};

export const prevPage = () => {
  const page = document.getElementById('page');
  let prev = +page.innerText;
  page.innerText = --prev < 1 ? 1 : prev;
  handlePagination();
};
