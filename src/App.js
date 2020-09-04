import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import TabularMenuBarOnLeft from "./components/MainApp";
import { Tab } from "semantic-ui-react";

const BigText = styled.p`
  font-family: Roboto;
  font-size: 6em;
  cursor: pointer;
  &:hover {
    color: #cdcdcd;
  }
`;

const BigWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const App = () => {
  const [theme, setTheme] = useState("light");
  const [nextPage, setNextPage] = useState("0");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const goToNext = () => {
    nextPage === "0" ? setNextPage("1") : setNextPage("0");
  };

  return (
    <>
      <div className="App">
        <TabularMenuBarOnLeft />
      </div>
    </>
  );
};

export default App;
