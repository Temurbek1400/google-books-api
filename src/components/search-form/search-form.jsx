import React, { useState } from "react";
import Button from "@mui/material/Button/index";
import { TextField } from "@mui/material";
import "./form.css";

const SearchForm = ({ searchBook, isFetching }) => {
   const [inputText, setInputText] = useState("");

   const afterSubmission = (e) => {
      e.preventDefault();
      searchBook(inputText);
   }

   return (
      <form onSubmit={(e) => afterSubmission(e)} name="searchForm" id="searchForm" className="form_container">
         <TextField
            required
            onChange={(e) =>   setInputText(e.target.value)}
            value={inputText}
            id="outlined-basic"
            label="volume"
            variant="outlined"
         />
         <Button
            disabled={isFetching}
            variant="contained"
            color="info"
            size="large"
            type="submit"
         >
            search
         </Button>
      </form>
   );
};

export default SearchForm;
