import { hideModal, renderUi, DB, targetId } from '@/library';
import { isEditing } from '@/App';

export const handleForm = (e) => {
  e.preventDefault();
  console.log(e.submitter.id);
  //   if (e.target.tagName !== 'BUTTON') return;

  if (e.submitter.id === 'cancel-btn') hideModal();
  if (e.submitter.id === 'save-btn') {
    console.log(isEditing, targetId);
    if (isEditing) {
      DB.updateItem({
        id: targetId,
        taskName: e.target.taskName.value,
        priority: e.target.priority.value,
        status: e.target.status.value,
        date: e.target.taskDate.value,
        details: e.target.details.value,
      });
    } else {
      DB.addItem({
        id: Date.now(),
        taskName: e.target.taskName.value,
        priority: e.target.priority.value,
        status: e.target.status.value,
        date: e.target.taskDate.value,
        details: e.target.details.value,
      });
    }
    hideModal();
    renderUi();
  }
};
