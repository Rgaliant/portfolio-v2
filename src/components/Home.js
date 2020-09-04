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
              Ryan Fleming-Gale
            </ScrollAnimation>
          </Header.Content>
        </Header>
        <Container fluid text>
          <p>
            Thank you for taking the time to view my portfolio website. This
            site was built using React and is intended to act as a way to show
            off my love for programming. Although I have been an active
            technologist all my life, and wrote HTML back when myspace was
            around, I didn't start programming until after getting a customer
            service job at Tesla Motors.
          </p>
        </Container>
      </Segment>
      <Grid columns={2} inverted>
        <Grid.Row>
          <Grid.Column style={{ paddingLeft: "50px" }}>
            <Image src={BallonImage} size="medium" />
          </Grid.Column>
          <Grid.Column>
            <p style={{ color: "#fff", paddingRight: "10%" }}>
              At Tesla I met a lot of highly successful software engineers, that
              piqued my interest in learing Ruby on Rails. In 2017 I started
              working at Mojomarketplace.com and learning Wordpress and
              Javascript, this only furthered my interest in becoming a
              programmer. In January of 2019 I enrolled in a full-time coding
              bootcamp through the University of Utah continuing eduction
              program. This bootcamp was at Devpoint Labs in Salt Lake City,
              Utah and gave me the boost I needed to become a full-time
              full-stack software engineer.
            </p>
            <p style={{ color: "#fff", paddingRight: "10%" }}>
              I am passionate about solving technical problems and creating
              awesome code. I am especially interested is SaaS and building out
              quality of life solutions. I have most recently enjoyed building
              out API integrated informational websites. I am currently working
              on a Dungeons and Dragons app that is fully integrated to an API
              that will act as a table top companion for DM's and adventurers.
            </p>
            <p style={{ color: "#fff", paddingRight: "10%" }}>
              If anyone looking at this is interested in reaching out, please
              view my resume and find my email and github. Don't hesitate to
              reach out or connect with me on linkedin, I am always open to
              talking tech!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Home;
