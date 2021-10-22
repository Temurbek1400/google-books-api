import { useState } from "react";
import "./App.css";
import Books from "./components/books/books";
import { booksAPI } from "./API/axios";
import SearchForm from "./components/search-form/search-form";



function App() {
   const [data, setData] = useState({ items: [], totalItems: null });
   const [isFetching, setIsFetching] = useState(false);

   const searchBook = (volume) => {
      setIsFetching(true);
      booksAPI.getBooks(volume).then((data) => {
         setIsFetching(false);
         if (data.totalItems > 0) {
            setData(data)
         }
      });
   };

   console.log("render");
   return (
      <div className="App">
         <h1>Google books</h1>
         <SearchForm searchBook={searchBook} isFetching={isFetching} />
         <Books items={data.items} totalItems={data.totalItems} isFetching={isFetching} />
      </div>
   );
}

export default App;
