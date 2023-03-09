import { Drawer } from '@/component';
import {
  Form,
  navbar,
  tableOfContents,
  pagination,
  filterSection,
} from '@/layout';
import { El, handlePagination, DB } from '@/library';

export let isEditing = false;
export const changeEditingFlag = () => {
  isEditing = !isEditing;
};

export let RpG = 'All';
export const rowPerPage = (e) => {
  RpG = e.target.value;
  handlePagination();
};

export let totalPages;
export const updatePages = (pages) => {
  totalPages = pages;
};

export const app = () => {
  return El({
    element: 'div',
    className: 'relative w-full h-full',
    children: [
      Drawer(Form()),
      navbar(),
      filterSection(),
      tableOfContents(),
      pagination(),
    ],
  });
};
