export function El({ element, children, eventListener, ...rest }) {
  const elem = document.createElement(element);
  for (const attr in rest) {
    elem[attr] = rest[attr];
  }
  if (children) {
    for (const child of children) {
      elem.append(child);
    }
  }
  if (eventListener) {
    eventListener.map((el) => elem.addEventListener(el.event, el.callback));
  }
  return elem;
}
