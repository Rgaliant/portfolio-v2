import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import Home from "./Home";
import Resume from "./Resume";
import Skills from "./Skills";
import Work from "./Work";

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
            <Icon
              name="file alternate outline"
              style={{ animation: "spin linear infinite" }}
            />
            Resume
          </Menu.Item>
          <Menu.Item
            name="services"
            active={activeItem === "services"}
            onClick={this.handleItemClick}
          >
            <Icon name="space shuttle" />
            Skills
          </Menu.Item>
          <Menu.Item
            name="work"
            active={activeItem === "work"}
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
            <Home />
          </>
        )}
        {activeItem === "resume" && (
          <>
            <Resume />
          </>
        )}
        {activeItem === "services" && (
          <>
            <Skills />
          </>
        )}
        {activeItem === "work" && (
          <>
            <Work />
          </>
        )}
      </>
    );
  }
}
