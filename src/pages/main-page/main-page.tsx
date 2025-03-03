import { JSX } from "react";
import LeftMenu from "../../components/left-menu/left-menu";
import MiddleSection from "../../components/middle-section/middle-section";
import RightSection from "../../components/right-section/right-section";
import Navigation from "../../components/navigation/navigation";

export default function MainPage(): JSX.Element {
  return (
    <><Navigation /><main className="main">
      <div className="container">
        <LeftMenu />
        <MiddleSection />
        <RightSection />
      </div>
    </main></>
  );
}