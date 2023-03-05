import { navbar, tableOfContents } from './layout';
import { El } from './library';

export const app = () => {
  return El({
    element: 'div',
    children: [navbar(), tableOfContents()],
  });
};
