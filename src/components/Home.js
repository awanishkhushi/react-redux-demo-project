import React, { useState, useEffect } from "react";

import UserService from "../services/userService";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getDashBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const message = error.response ;

        setContent(message);
      }
    );
  }, []);

  return (
    <div className="homediv">
        {content}
    </div>
  );
};

export default Home;