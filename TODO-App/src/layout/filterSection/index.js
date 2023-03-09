import { El, filterHandler, showFilter } from '@/library';
import { Formoption } from '@/component';
export const filterSection = () => {
  return El({
    element: 'div',
    id: 'filterSec',
    eventListener: [
      {
        event: 'click',
        callback: showFilter,
      },
    ],
    className:
      'w-full h-full fixed bg-opacity-0 right-0 scale-0 transition border-l border-gray-200 shadow-sm',
    children: [
      El({
        element: 'div',
        className:
          'w-[300px] px-4 h-full float-right bg-white border border-gray-400 shadow-sm',
        children: [
          El({
            element: 'form',
            id: 'add-form',
            className:
              'w-full h-full bg-white relative flex gap-12 flex-col items-center justify-start mt-16',
            eventListener: [
              {
                event: 'change',
                callback: filterHandler,
              },
            ],
            children: [
              El({
                element: 'select',
                id: 'priority',
                className:
                  'w-full text-gray-500 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8]',
                children: [
                  Formoption({
                    value: 'All',
                    selected: true,
                  }),
                  Formoption({
                    value: 'Low',
                  }),
                  Formoption({
                    value: 'Medium',
                  }),
                  Formoption({
                    value: 'High',
                  }),
                ],
              }),
              El({
                element: 'select',
                id: 'status',
                className:
                  'w-full text-gray-500 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8]',
                children: [
                  Formoption({
                    value: 'All',
                    selected: true,
                  }),
                  Formoption({
                    value: 'ToDo',
                  }),
                  Formoption({
                    value: 'Doing',
                  }),
                  Formoption({
                    value: 'Done',
                  }),
                ],
              }),
              El({
                element: 'input',
                className:
                  'w-full text-gray-500 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8]',
                id: 'deadline',
                type: 'Date',
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
