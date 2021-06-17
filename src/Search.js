import React, { useState } from "react";
import "./Search.css";
import { Button } from "@material-ui/core";
import SearchDates from "./SearchDates";

function Search() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <SearchDates />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
    </div>
  );
}

export default Search;
