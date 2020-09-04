import React from "react";
import { Segment, Grid, Image } from "semantic-ui-react";
import reactImg from "../images/React-icon.svg";
import rubyImg from "../images/kisspng-ruby-on-rails-computer-programming-programming-lan-meppel-5b1c3689153ed5.075223771528575625087.png";
import railsImg from "../images/nextpng.com.png";
import postgresImg from "../images/Postgresql_elephant.svg";

const Skills = () => {
  return (
    <Segment
      inverted
      style={{
        marginTop: "-20px",
        background: "linear-gradient(#1B80BF, #049DD9)",
        height: "30%",
      }}
    >
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Image className="spin" centered size="large" src={reactImg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image centered size="medium" src={rubyImg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image centered size="medium" src={railsImg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image centered size="medium" src={postgresImg} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Skills;
