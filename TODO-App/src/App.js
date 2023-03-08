import { Drawer } from '@/component';
import { Form, navbar, tableOfContents } from '@/layout';
import { El, renderUi } from '@/library';

export let isEditing = false;
export const changeEditingFlag = () => {
  isEditing = !isEditing;
};
export const app = () => {
  return El({
    element: 'div',
    className: 'relative w-full h-full',
    children: [Drawer(Form()), navbar(), tableOfContents()],
  });
};
