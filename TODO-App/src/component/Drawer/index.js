import { El } from '@/library';

export const Drawer = (child) => {
  return El({
    element: 'div',
    id: 'drawer',
    className:
      'fixed h-full w-full backdrop-blur-sm flex items-center justify-center',
    children: [child],
  });
};
