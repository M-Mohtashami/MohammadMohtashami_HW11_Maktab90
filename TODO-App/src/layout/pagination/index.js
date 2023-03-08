import { El, nextPage, prevPage } from '@/library';
import { Formoption, Button } from '@/component';
import { next, prev } from '@/assets';
import { rowPerPage } from '@/App';

export const pagination = () => {
  return El({
    element: 'div',
    className:
      'float-right flex gap-2 items-center text-sm text-gray-600 mx-8 my-2',
    children: [
      El({
        element: 'span',
        className: 'font-semibold',
        innerText: 'Rows per Page :',
      }),
      El({
        element: 'select',
        eventListener: [
          {
            event: 'change',
            callback: rowPerPage,
          },
        ],
        className: 'font-semibold focus:outline-none',
        children: [
          Formoption({
            value: 'All',
          }),
          Formoption({
            value: '5',
          }),
          Formoption({
            value: '10',
          }),
          Formoption({
            value: '20',
          }),
        ],
      }),
      El({
        element: 'span',
        id: 'rows-details',
        className: 'font-semibold',
        innerText: '0-0 of 0',
      }),
      Button({
        id: 'prev',
        className: '[&_svg]:fill-gray-500 my-auto',
        eventListener: [
          {
            event: 'click',
            callback: prevPage,
          },
        ],
        innerHTML: prev,
      }),
      El({
        element: 'span',
        id: 'page',
        className: 'font-semibold',
        innerText: '1',
      }),
      Button({
        id: 'next',
        className: '[&_svg]:fill-gray-500 my-auto',
        eventListener: [
          {
            event: 'click',
            callback: nextPage,
          },
        ],
        innerHTML: next,
      }),
    ],
  });
};
