import React from "react";
import {
  Grid,
  Menu,
  Segment,
  Header,
  Icon,
  Container,
  Image,
} from "semantic-ui-react";
import BallonImage from "../images/side-image.png";
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
  return (
    <>
      <Segment
        inverted
        style={{
          marginTop: "-20px",
          background: "linear-gradient(#1B80BF, #049DD9)",
          height: "30%",
        }}
      >
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>
            <ScrollAnimation animateIn="fadeIn">
              Welcome to Gale Force Tech Solutions
            </ScrollAnimation>
          </Header.Content>
        </Header>
        <Container fluid text>
          <p>
            Gale Force was founded as a way of connecting and helping new
            software engineers better understand how to code. We are here to
            advance your knowledge not only of specific languages, but to help
            in the development of thinking and working like a programmer.
          </p>
        </Container>
      </Segment>
      <Grid columns={2} inverted>
        <Grid.Row>
          <Grid.Column style={{ paddingLeft: "50px" }}>
            <Image src={BallonImage} />
          </Grid.Column>
          <Grid.Column>
            <h4 style={{ color: "#fff", paddingRight: "10%" }}>
              I am passionate about solving technical problems. I am especially
              interested is SaaS and building out quality of life solutions.
            </h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Home;
