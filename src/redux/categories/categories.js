const CHECK_STATUS = 'BOOK-STORE/books/CHECK_STATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        action.payload,
      ];
    default:
      return state;
  }
};

export const checkStatus = (data) => (
  {
    type: CHECK_STATUS,
    payload: data,
  }
);

export default categoriesReducer;
