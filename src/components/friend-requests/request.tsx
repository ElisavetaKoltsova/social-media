import { JSX } from "react";

export default function Request(): JSX.Element {
  return (
    <div className="request">
      <div className="info">
          <div className="profile-pic">
              <img src="https://i.pinimg.com/736x/6d/4b/de/6d4bde9293ac23d4711c828859af20e4.jpg" />
          </div>
          <div>
              <h5>Wilson Fisk</h5>
              <p className="text-muted">8 mutual friends</p>
          </div>
      </div>
      <div className="action">
          <button className="btn btn-primary">Accept</button>
          <button className="btn">Decline</button>
      </div>
  </div>
  );
}
