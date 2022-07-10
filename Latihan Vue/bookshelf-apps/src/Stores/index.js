import { defineStore } from "pinia";
export const Store = defineStore({
  id: "BookshelfApps",
  state: () => ({
    title: "this is a title",
    author: "this is a author",
    year: 30,
    books: [],
  }),
  actions: {
    setTitle(title) {
      this.setState({ title });
    },
    setAuthor(author) {
      this.setState({ author });
    },
    setYear(year) {
      this.setState({ year });
    },
    reset(state) {
      this.setState(state);
    },
    addBook(title, author, year, isCompleted) {
      this.books.push({
        id: new Date().getTime(),
        title: title,
        author: author,
        year: parseInt(year),
        isCompleted: isCompleted,
      });
      console.log(this.books);
    },
  },
});
