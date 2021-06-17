import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="Home">
      <div className="heading__left">
        <Link to="/InfoPage">
          <Button variant="contained" color="primary" size="large">
            Book Now
          </Button>
        </Link>
      </div>
      <img
        className="img"
        // src="https://www.qsstechnosoft.com/wp-content/uploads/2020/09/Travel-App-Development-1.jpg"
        // src="https://www.topdesk.com/en/wp-content/media/sites/30/glossary-what-is-incident-management-itsm.jpg"
        src="https://cms.croit.io/uploads/content/team.svg"
      />
    </div>
  );
}
export default Home;
