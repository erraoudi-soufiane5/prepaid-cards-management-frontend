import React, { useRef } from "react";
import Xarrow from "react-xarrows";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
};

function ArrowBox() {
  const box1Ref = useRef(null);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
      }}>
      <div ref={box1Ref} style={boxStyle}>
        hey
      </div>
      <p id="elem2" style={boxStyle}>
        hey2
      </p>
      <Xarrow start={box1Ref} end="elem2" />
    </div>
  );
}

export default ArrowBox;
