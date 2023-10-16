import { ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS } from "./actions"

export default function reducer(state, {action,payload}) {
  const {bookSearchResults, favoriteBooks} = state
  switch (action) {
    case ADD_BOOK:
      saveToLocalStorage([...favoriteBooks, payload])
      return{...state, favoriteBooks: [...favoriteBooks, payload]}
    case REMOVE_BOOK:
      saveToLocalStorage(favoriteBooks.filter(book => book.id != payload))
      return {...state, favoriteBooks: favoriteBooks.filter(book => book.id != payload)}
    case SEARCH_BOOKS:
      return{...state, bookSearchResults: payload}
    default:
      return state
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}