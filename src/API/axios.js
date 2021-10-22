import * as axios from "axios";

export const booksAPI = {
   basicUrl: "https://www.googleapis.com/books/v1",
   token: "&key=AIzaSyC_DfXHcbVQg6iww6bd7OnwZHxRHmIIKk4",
   getBooks(volume) {
      return axios
         .get(`${this.basicUrl}/volumes?q=${volume}${this.token}`)
         .then((res) => res.data);
   }
};
