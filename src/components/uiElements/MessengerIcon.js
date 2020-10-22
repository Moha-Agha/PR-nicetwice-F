import React from "react";

const MessengerIcon = ({ mobile = 'show' }) => {



  return (
    <div className={"messenger-icon " + mobile} >
      <i className="aicon-messenger"></i>
    </div >
  )
};

export default MessengerIcon;
