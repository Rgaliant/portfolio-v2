import React from "react";
import { Segment, Image } from "semantic-ui-react";
import resume from "../images/Resume_20201024_1.jpg";

const Resume = () => {
  return (
    <Segment
      inverted
      style={{
        marginTop: "-20px",
        background: "linear-gradient(#1B80BF, #049DD9)",
        height: "30%",
      }}
    >
      <Image centered src={resume} />
    </Segment>
  );
};

export default Resume;
