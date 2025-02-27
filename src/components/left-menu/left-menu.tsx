import { JSX } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBell, faEnvelope, faBookmark, faChartLine, faPalette, faCog } from '@fortawesome/free-solid-svg-icons';

export default function LeftMenu(): JSX.Element {
  return (
    <div className="left">
      <a className="profile">
        <div className="profile-pic">
          <img src="https://res.cloudinary.com/freecodez/image/upload/v1698067298/images/fy8azbqxhgdrbbijhipe.webp" />
        </div>
        <div className="handle">
          <h4>Freecodez</h4>
          <p className="text-muted">@freecodez</p>
        </div>
      </a>
      <div className="sidebar">
        <a className="menu-item active">
          <span><FontAwesomeIcon icon={faHome} /></span>
          <h3>Home</h3>
        </a>
        <a className="menu-item">
          <span><FontAwesomeIcon icon={faCompass} /></span>
          <h3>Explore</h3>
        </a>
        <a className="menu-item" id="notifications">
          <span>
            <FontAwesomeIcon icon={faBell} />
            <i className="uil uil-bell">
              <small className="notification-count">9+</small>
            </i>
          </span>
          <h3>Notifications</h3>
          <div className="notifications-popup">
            <div>
              <div className="profile-pic">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
              <div className="notification-body">
                <b>Abigail Willey</b> accepted your friend request
                <small className="text-muted">2 DAYS AGO</small>
              </div>
            </div>
            <div>
              <div className="profile-pic">
                <img src="https://i.pinimg.com/474x/e1/d6/32/e1d632b7d8ba9ffd34318a09ddf1b275.jpg" />
              </div>
              <div className="notification-body">
                <b>Varun Nair</b> commented on your post
                <small className="text-muted">1 HOUR AGO</small>
              </div>
            </div>
            <div>
              <div className="profile-pic">
                <img src="https://i.pinimg.com/280x280_RS/60/72/af/6072af5d0841567c677a9e7597501563.jpg" />
              </div>
              <div className="notification-body">
                <b>Marry Opmong</b> and 210 other liked your post
                <small className="text-muted">4 MINUTES AGO</small>
              </div>
            </div>
            <div>
              <div className="profile-pic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7jXK7iCNJK_u4XvbwTkXPx140LlR1qh2XoihxvkMgM2ZvViJaIxaPFleTUJ7SBp9xBw&usqp=CAU" />
              </div>
              <div className="notification-body">
                <b>Wilson Fisk</b> started following you
                <small className="text-muted"> 11 HOURS AGO</small>
              </div>
            </div>
          </div>
        </a>
        <a className="menu-item" id="messages-notifications">
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            <i className="uil uil-envelope">
              <small className="notification-count">6</small>
            </i>
          </span>
          <h3>Messages</h3>
        </a>
        <a className="menu-item">
          <span><FontAwesomeIcon icon={faBookmark} /></span>
          <h3>Bookmarks</h3>
        </a>
        <a className="menu-item">
          <span><FontAwesomeIcon icon={faChartLine} /></span>
          <h3>Analytics</h3>
        </a>
        <a className="menu-item">
          <span><FontAwesomeIcon icon={faPalette} /></span>
          <h3>Theme</h3>
        </a>
        <a className="menu-item">
          <span><FontAwesomeIcon icon={faCog} /></span>
          <h3>Settings</h3>
        </a>

        <label className="btn btn-primary" htmlFor="create-post">Create Post</label>
      </div>
    </div>
  );
}
