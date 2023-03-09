import { handlePagination } from '@/library';
export const searchHandler = (e) => {
  handlePagination(e.target.value);
};
