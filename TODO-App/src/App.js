import { navbar } from './layout';
import { El } from './library';

export const app = () => {
  return El({
    element: 'div',
    children: [navbar()],
  });
};
