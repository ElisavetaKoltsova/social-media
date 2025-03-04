import { JSX } from "react";
import Post from "./post";

export default function Posts(): JSX.Element {
  return (
    <div className="feeds">
      <Post />
    </div>
  );
}
