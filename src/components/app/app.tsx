import { JSX } from "react";
import Navigation from "../navigation/navigation";
import Main from "../main/main";
import { BrowserRouter } from "react-router";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navigation />
      <Main />
    </BrowserRouter>
  );
}
