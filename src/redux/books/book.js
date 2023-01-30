const initialState = [{
  id: 0,
  category: 'Action',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
  chapters: 25,
  currentChapter: 16,
},
{
  id: 1,
  category: 'Science Fiction',
  title: 'Dune',
  author: 'Frank Herbert',
  chapters: 25,
  currentChapter: 2,
},
{
  id: 2,
  category: 'Economy',
  title: 'Capital in the Twenty-First century',
  author: 'Suzanne Collins',
  chapters: 30,
  currentChapter: 13,
}];

const ADD_BOOK = 'BOOK-STORE/books/ADD_BOOK';
const REMOVE_BOOK = 'BOOK-STORE/books/REMOVE_BOOK';

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const AddBook = (book) => ({

  type: ADD_BOOK,
  payload: book,

});

export const removeBook = (id) => ({

  type: REMOVE_BOOK,
  payload: id,

});

export default bookReducer;
