import React from "react";
import { Image, Grid } from "semantic-ui-react";
import trelloOne from "../images/Trello1.png";
import trelloTwo from "../images/Trello2.png";
import unityGame from "../images/unityGame1.png";
import dplOne from "../images/dpl1.png";
import dplTwo from "../images/dpl2.png";
import dplThree from "../images/dpl3.png";
import flavorz from "../images/flavorz.png";
import myspace from "../images/myspace1.png";

const Work = () => {
  return (
    <>
      <Grid columns={4}>
        <Grid.Row space="evenly">
          <Grid.Column>
            <Image
              className="zoom_left"
              src={trelloOne}
              style={{ maxWidth: "105%", marginLeft: "3%" }}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="zoom_middle"
              src={trelloTwo}
              style={{ width: "100%" }}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="zoom_middle"
              src={flavorz}
              style={{ width: "97%" }}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="zoom_right"
              src={myspace}
              style={{ width: "98%" }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row space="evenly">
          <Grid.Column>
            <Image src={dplOne} style={{ maxWidth: "94%", marginLeft: "3%" }} />
          </Grid.Column>
          <Grid.Column>
            <Image src={dplTwo} style={{ width: "100%" }} />
          </Grid.Column>
          <Grid.Column>
            <Image src={dplThree} style={{ width: "97%" }} />
          </Grid.Column>
          <Grid.Column>
            <Image src={myspace} style={{ width: "98%" }} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default Work;
