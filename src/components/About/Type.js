import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "class FactSheet:",
            "def __init__(self):",
          ],
          autoStart: true,
          loop: false,
          deleteSpeed: 60,
        }}
      />
    </div>
  );
}

export default Type;
