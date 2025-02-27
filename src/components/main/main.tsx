import { JSX } from "react";
import LeftMenu from "../left-menu/left-menu";
import MiddleSection from "../middle-section/middle-section";
import RightSection from "../right-section/right-section";

export default function Main(): JSX.Element {
  return (
    <main className="main">
      <div className="container">
        <LeftMenu />
        <MiddleSection />
        <RightSection />
      </div>
    </main>
  );
}
