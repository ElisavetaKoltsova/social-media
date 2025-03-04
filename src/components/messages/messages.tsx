import { JSX } from "react";
import Message from "./message";

export default function Messages(): JSX.Element {
  return (
    <div className="messages">
      <div className="heading">
          <h4>Messages</h4>
          <span><i className="uil uil-edit"></i></span>
      </div>

      <div className="search-bar">
          <span><i className="uil uil-search"></i></span>
          <input
              type="text"
              placeholder="Search Messages"
              id="message-search"
          />
      </div>

      <div className="category">
          <h6 className="active">Primary</h6>
          <h6>General</h6>
          <h6 className="message-requests">Requests(7)</h6>
      </div>
      <Message />
      <Message />
      <Message />
  </div>
  );
}
