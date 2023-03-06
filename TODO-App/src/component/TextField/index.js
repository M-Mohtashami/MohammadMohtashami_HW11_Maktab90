import { El } from '@/library';

export const Textfield = ({ label, name, ...inputProps }) => {
  return El({
    element: 'div',
    className: 'flex text-gray-600 flex-col px-1 relative',
    children: [
      El({
        element: 'label',
        for: name,
        className:
          'text-sm mb-1 px-1 absolute top-3 left-3 bg-white focus:top-1',
        children: label || '',
      }),
      El({
        element: 'input',
        name,
        className: `px-1 py-2 outline-none border rounded-md focus:border-2 focus:border-[#6100E8] focus:placeholder-[#6100E8]`,
        placeholder: 'Tesk Name',
        ...inputProps,
      }),
    ],
  });
};
