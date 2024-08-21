import React from "react";
import Avatar from "react-avatar";

const Client = ({ userName }) => {
  return (
    <div className="clientInformation">
      <Avatar name={userName} size="40" round=" 18px" />
      <span >{userName}</span>
    </div>
  );
};

export default Client;
