import { DB, renderUi, showModal, handlePagination } from '@/library';
import { isEditing, changeEditingFlag } from '@/App';

export let targetId;
export const handleTable = (e) => {
  console.log(e.target.closest('[data-value]'));
  if (!e.target.closest('[data-value]')) return;

  const action = e.target.closest('[data-value]').dataset.value;
  targetId = +e.target.closest('[data-id]').dataset.id;
  if (action === 'delete') {
    DB.deleteItem(targetId);
    handlePagination();
  } else if (action === 'view') {
    const form = document.getElementById('add-form');
    const targetItem = DB.findItem(targetId);

    form.taskName.value = targetItem.taskName;
    form.taskName.disabled = true;

    form.priority.value = targetItem.priority;
    form.priority.disabled = true;

    form.status.value = targetItem.status;
    form.status.disabled = true;

    form.taskDate.value = targetItem.date;
    form.taskDate.disabled = true;

    form.details.value = targetItem.details;
    form.details.disabled = true;

    const save = form.querySelector('#save-btn');
    save.disabled = true;
    save.classList.add('bg-gray-400', 'text-gray-800', 'border-gray-400');

    showModal();
  } else if (action === 'edit') {
    const form = document.getElementById('add-form');
    const targetItem = DB.findItem(targetId);

    form.taskName.value = targetItem.taskName;
    form.priority.value = targetItem.priority;
    form.status.value = targetItem.status;
    form.taskDate.value = targetItem.date;
    form.details.value = targetItem.details;

    form.taskName.disabled = false;
    form.priority.disabled = false;
    form.status.disabled = false;
    form.taskDate.disabled = false;
    form.details.disabled = false;
    const save = form.querySelector('#save-btn');
    save.disabled = false;
    save.classList.remove('bg-gray-400', 'text-gray-800', 'border-gray-400');

    isEditing || changeEditingFlag();

    showModal();
  }
};
