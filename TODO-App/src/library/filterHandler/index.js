import { handlePagination } from '@/library';

export const filterHandler = (e) => {
  const filter = {
    priority: 'All',
    status: 'All',
    deadline: 'All',
  };
  if (e.target.id === 'priority') {
    filter.priority = e.target.value === 'priority' ? 'All' : e.target.value;
  } else if (e.target.id === 'status') {
    filter.status = e.target.value === 'status' ? 'All' : e.target.value;
  } else if (e.target.id === 'deadline') {
    filter.deadline = e.target.value ? e.target.value : 'All';
  }

  //     priority:
  //       e.target.priority.value === 'priority' ? 'All' : e.target.priority.value,
  //     status: e.target.status.value === 'status' ? 'All' : e.target.status.value,
  //     deadline: e.target.deadline.value ? e.target.deadline.value : 'All',
  //   };
  handlePagination('', filter);
};

export const showFilter = (e) => {
  if (!e.target.closest('form')) {
    const filterSec = document.getElementById('filterSec');
    filterSec.classList.add('scale-0');
    filterSec.classList.remove('scale-100');
  }
};
