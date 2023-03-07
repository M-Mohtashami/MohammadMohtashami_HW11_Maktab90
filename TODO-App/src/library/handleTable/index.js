import { DB, renderUi } from '@/library';

export const handleTable = (e) => {
  console.log(e.target.closest('[data-value]'));
  if (!e.target.closest('[data-value]')) return;

  const action = e.target.closest('[data-value]').dataset.value;
  if (action === 'delete') {
    const targetId = +e.target.closest('[data-id]').dataset.id;
    DB.deleteItem(targetId);
    renderUi();
  }
};
