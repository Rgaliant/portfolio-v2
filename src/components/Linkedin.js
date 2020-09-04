import React from "react";
import { Image, Segment } from "semantic-ui-react";
import linkedinImg from "../images/linkedinpic.png";

const Linkedin = () => {
  return (
    <Segment
      inverted
      style={{
        marginTop: "-20px",
        background: "linear-gradient(#1B80BF, #049DD9)",
        height: "30%",
      }}
    >
      <a href="https://www.linkedin.com/in/ryan-wendell-gale/">
        <Image centered src={linkedinImg} size="large" />
      </a>
    </Segment>
  );
};

export default Linkedin;
