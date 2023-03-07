import { navbar, tableOfContents, Form } from '@/layout';
import { El, renderUi } from '@/library';
import { Drawer } from '@/component';

export const app = () => {
  return El({
    element: 'div',
    className: 'relative w-full h-full',
    children: [Drawer(Form()), navbar(), tableOfContents()],
  });
};
