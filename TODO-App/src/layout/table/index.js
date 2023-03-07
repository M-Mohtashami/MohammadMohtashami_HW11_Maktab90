import { El } from '@/library';
import { Button } from '@/component';
import { trash, edit, view } from '@/assets';

export const tableOfContents = () => {
  return El({
    element: 'table',
    className: 'w-full text-sm text-gray-700',
    children: [
      El({
        element: 'thead',
        children: [
          El({
            element: 'tr',
            children: [
              El({
                element: 'th',
                className: 'border-2 text-left p-4 pl-8',
                innerText: 'Task Name',
              }),
              El({
                element: 'th',
                className: 'border-2',
                innerText: 'Priority',
              }),
              El({
                element: 'th',
                className: 'border-2',
                innerText: 'Status',
              }),
              El({
                element: 'th',
                className: 'border-2',
                innerText: 'Deadline',
              }),
              El({
                element: 'th',
                className: 'border-2',
                innerText: 'Actions',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'tbody',
        id: 'tbody',
        children: [
          El({
            element: 'tr',
            children: [
              El({
                element: 'td',
                className: 'border-2 text-left p-4 pl-8',
                innerText: 'Task Name',
              }),
              El({
                element: 'td',
                className: 'border-2 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'border bg-gray-200 px-4 py-2 rounded-full',
                    innerText: 'Low',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border-2 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'border bg-blue-600 px-4 py-2 rounded-full',
                    innerText: 'ToDo',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border-2 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'border border-blue-600 px-4 py-2 rounded-full',
                    innerText: '1400/12/08',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border-2',
                children: [
                  El({
                    element: 'div',
                    className: 'flex gap-2 items-center justify-center',
                    children: [
                      Button({
                        className:
                          'bg-red-500 rounded-md p-2 [&_svg]:fill-white my-auto',
                        innerHTML: trash,
                      }),
                      Button({
                        className:
                          'bg-blue-500 rounded-md p-2 [&_svg]:fill-white my-auto',
                        innerHTML: edit,
                      }),
                      Button({
                        className:
                          'bg-gray-500 rounded-md p-2 [&_svg]:fill-white my-auto',
                        innerHTML: view,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
