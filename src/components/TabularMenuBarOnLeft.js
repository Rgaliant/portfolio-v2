import React, { Component } from "react";
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

export default class TabularMenuBarOnLeft extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Menu
          pointing
          stackable
          icon="labeled"
          inverted
          style={{ background: "#049DD9" }}
        >
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            name="resume"
            active={activeItem === "resume"}
            onClick={this.handleItemClick}
          >
            <Icon name="file alternate outline" />
            Resume
          </Menu.Item>
          <Menu.Item
            name="services"
            active={activeItem === "services"}
            onClick={this.handleItemClick}
          >
            <Icon name="space shuttle" />
            Services
          </Menu.Item>
          <Menu.Item
            name="links"
            active={activeItem === "links"}
            onClick={this.handleItemClick}
          >
            <Icon name="code branch" />
            Work
          </Menu.Item>
          <Menu.Item
            name="subscribe"
            active={activeItem === "subscribe"}
            onClick={this.handleItemClick}
          >
            <Icon name="subscript" />
            Subscribe
          </Menu.Item>
        </Menu>
        {activeItem === "home" && (
          <>
            <Segment
              inverted
              style={{
                marginTop: "-20px",
                background: "linear-gradient(#1B80BF, #049DD9)",
                height: "300px",
              }}
            >
              <Header as="h2" icon textAlign="center">
                <Icon name="users" circular />
                <Header.Content>
                  Welcome to Gale Force Tech Solutions
                </Header.Content>
              </Header>
              <Container fluid text>
                <p>
                  Gale Force was founded as a way of connecting and helping new
                  software engineers better understand how to code. We are here
                  to advance your knowledge not only of specific languages, but
                  to help in the development of thinking and working like a
                  programmer.
                </p>
              </Container>
            </Segment>
            <Grid>
              <Grid.Column>
                <Image src={BallonImage} />
              </Grid.Column>
            </Grid>
          </>
        )}
      </>
    );
  }
}
