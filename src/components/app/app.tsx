import React, { JSX } from "react";
import Navigation from "../navigation/navigation";
import Main from "../main/main";

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Navigation />
      <Main />
    </React.Fragment>
  );
}
