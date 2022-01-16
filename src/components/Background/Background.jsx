import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./particles";

function Background() {
  return (
    <div>
      <Particles params={particleConfig} />
    </div>
  );
}

export default Background;
