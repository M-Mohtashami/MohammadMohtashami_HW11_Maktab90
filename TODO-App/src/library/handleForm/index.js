import { hideModal, addTask } from '@/library';
let status;
export const handleForm = (e) => {
  e.preventDefault();
  console.log(e.submitter.id);
  //   if (e.target.tagName !== 'BUTTON') return;

  if (e.submitter.id === 'cancel-btn') hideModal();
  if (e.submitter.id === 'save-btn') {
    switch (status) {
      case 'edit':
        e.currentTarget.reset();
        break;
      case 'view':
        e.currentTarget.reset();
        break;
      default:
        addTask({
          id: Date.now(),
          taskName: e.target.taskName.value,
          priority: e.target.priority.value,
          status: e.target.status.value,
          date: e.target.taskDate.value,
          details: e.target.details.value,
        });
        break;
    }
  }
};
