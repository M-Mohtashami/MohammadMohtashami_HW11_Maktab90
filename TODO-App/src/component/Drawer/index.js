import { El } from '@/library';

export const Drawer = (child) => {
  return El({
    element: 'div',
    id: 'drawer',
    className:
      'fixed top-[-1000px] h-full w-full backdrop-blur-sm flex items-center justify-center transition ease-linear',
    children: [child],
  });
};
