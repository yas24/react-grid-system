export const hidden = ({ screenClass, xs, sm, md, lg }) => {
  if (screenClass === 'lg') return lg;
  if (screenClass === 'md') return md;
  if (screenClass === 'sm') return sm;
  return xs;
};

export default hidden;
