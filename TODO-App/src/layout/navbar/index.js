import { El, searchHandler, newItem } from '@/library';
import { plus, filter, list, search } from '@/assets';
import { Button } from '@/component';
import { filterSection } from '@/layout';

export const navbar = () => {
  return El({
    element: 'div',
    className: 'w-full bg-[#6100E8] p-2 px-8 flex align-center justify-between',
    children: [
      El({
        element: 'div',
        className: 'flex gap-2 align-center',
        children: [
          El({
            element: 'span',
            className: '[&_path]:fill-white my-auto',
            innerHTML: list,
          }),
          El({
            element: 'span',
            className: 'text-white my-auto',
            innerText: 'My To-Do Tasks',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-4 align-center',
        children: [
          El({
            element: 'div',
            className:
              'my-auto flex gap-2 p-2 rounded-sm bg-white bg-opacity-20',
            children: [
              El({
                element: 'span',
                className: '[&_svg]:fill-white my-auto',
                innerHTML: search,
              }),
              El({
                element: 'input',
                id: 'search',
                eventListener: [
                  {
                    event: 'keyup',
                    callback: searchHandler,
                  },
                ],
                className:
                  'bg-transparent focus:border-none focus:outline-none text-white',
                placeholder: 'search',
              }),
            ],
          }),
          Button({
            id: 'filter',
            className: '[&_svg]:fill-white my-auto',
            innerHTML: filter,
            onclick: () => {
              const filterSec = document.getElementById('filterSec');
              filterSec.classList.remove('scale-0');
              filterSec.classList.add('scale-100');
            },
          }),
          Button({
            id: 'add',
            className: '[&_svg]:fill-white my-auto',
            eventListener: [
              {
                event: 'click',
                callback: newItem,
              },
            ],
            innerHTML: plus,
          }),
        ],
      }),
    ],
  });
};
