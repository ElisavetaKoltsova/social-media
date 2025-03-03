import { JSX } from "react"

export default function NotificationsPopup(): JSX.Element {
  return (
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
  );
}