const favoriteBooks = localStorage.getItem("favoriteBooks")

const initialState = {
    bookSearchResults: [],
    favoriteBooks: favoriteBooks ? JSON.parse(favoriteBooks):[]
}

export default initialState