import { JSX } from "react";

export default function Message(): JSX.Element {
  return (
    <div className="message">
      <div className="profile-pic">
          <img src="https://64.media.tumblr.com/2d678d77b051ee352d722d1f7fd2c029/88958e5f55a67155-7d/s250x400/74d69559d55329719bb0a50d8e9d77cbf0ec6da0.jpg" />
          <div className="active"></div>
      </div>
      <div className="message-body">
          <h5>Kareena Joshua</h5>
          <p className="text-muted">Just woke up bruh..</p>
      </div>
    </div>
  );
}
