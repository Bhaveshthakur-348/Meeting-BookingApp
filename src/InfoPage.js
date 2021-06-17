import React from "react";
import "./InfoPage.css";
import Search from "./Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function InfoPage() {
  const history = useHistory();
  return (
    <div className="Info__page">
      <div className="heading__name">
        <label>Meeting Room</label>
        <div className="heading__text">
          <select>
            <option value="volvo">Traning Room</option>
          </select>
        </div>
      </div>
      <div className="heading__name">
        <label>Name</label>
        <div className="heading__text">
          <input type="text" placeholder="Enter Your Name" />
        </div>
      </div>
      <div className="heading__name">
        <label>Meeting Description</label>
        <div className="heading__text">
          <input type="text" placeholder="Enter Meeting Description" />
        </div>
      </div>
      <Search />
      <div className="button__bottom">
        <Button
          onClick={() => history.push("/")}
          variant="contained"
          color="secondary"
        >
          Book Appoinment
        </Button>
      </div>
    </div>
  );
}
export default InfoPage;
