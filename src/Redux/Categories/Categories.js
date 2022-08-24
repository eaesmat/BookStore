const CHECK = 'bookstore/categories/CHECK';

export default (state = [], action) => {
  if (action.type === CHECK) {
    return 'Working...';
  }

  return state;
};

export const CheckStatus = () => ({
  type: CHECK,
});
