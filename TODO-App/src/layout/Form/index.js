import { El, handleForm } from '@/library';
import { Textfield, Formoption, Button } from '@/component';

export const Form = () => {
  return El({
    element: 'form',
    id: 'add-form',
    className:
      'w-[500px] h-auto border rounded-sm border-gray-200 shadow-sm bg-white relative',
    eventListener: [
      {
        event: 'submit',
        callback: handleForm,
      },
    ],
    children: [
      El({
        element: 'div',
        className:
          'w-full p-2 text-left text-gray-700 bg-gray-100 border-b shadow-b-sm',
        innerText: 'New Task',
      }),
      El({
        element: 'div',
        className: 'w-full p-4 bg-white',
        children: [
          Textfield({
            name: 'taskName',
          }),
          El({
            element: 'div',
            className: 'w-full my-8 flex gap-4',
            children: [
              El({
                element: 'select',
                name: 'priority',
                className:
                  'w-1/3 text-gray-500 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8]',
                children: [
                  Formoption({
                    value: 'Priority',
                    disabled: true,
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
                name: 'status',
                className:
                  'w-1/3 text-gray-500 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8]',
                children: [
                  Formoption({
                    value: 'Status',
                    disabled: true,
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
              Textfield({
                name: 'taskDate',
                type: 'Date',
              }),
            ],
          }),
          El({
            element: 'textarea',
            name: 'details',
            className:
              'w-full text-gray-500 my-4 px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8]',
            placeholder: 'Ditails (optional)',
            rows: 5,
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'w-full p-2 px-4 text-gray-700 bg-gray-100 border-t shadow-t-sm flex flex-row-reverse items-center justify-between',
        children: [
          Button({
            type: 'submit',
            id: 'save-btn',
            className:
              'border-2 border-blue-600 bg-blue-600 text-white py-2 px-4 rounded-md',
            innerText: 'save',
          }),
          Button({
            type: 'submit',
            id: 'cancel-btn',
            className:
              'border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-md',
            innerText: 'cancel',
          }),
        ],
      }),
    ],
  });
};
