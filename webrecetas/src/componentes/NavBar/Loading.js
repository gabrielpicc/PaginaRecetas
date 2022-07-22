import React from "react";
import { Spinner } from "reactstrap";

function Loading() {
  return(
    <div>
      <br></br>
      <Spinner style={{color: "#f0a500",fontSize: "2rem", textAlign: "center"}}/>
    </div>
  );
}

export default Loading;
