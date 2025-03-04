import { JSX } from "react";
import Request from "./request";

export default function FriendRequests(): JSX.Element {
  return (
    <div className="friend-requests">
      <h4>Requests</h4>
      <Request />
    </div>
  );
}
