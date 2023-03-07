import { DB, hideModal } from '@/library';

export const addTask = (task) => {
  DB.addItem(task);
  hideModal();
};
