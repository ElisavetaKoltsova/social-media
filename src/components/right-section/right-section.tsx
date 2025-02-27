import { JSX } from "react";

export default function RightSection(): JSX.Element {
  return (
    <div className="right">
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
              <div className="message">
                  <div className="profile-pic">
                      <img src="https://64.media.tumblr.com/7b28774544438d73ca8c1daad11402e0/88958e5f55a67155-fd/s250x400/a9ef3dad54f6c57a53fdeef1a793f0143a9aea27.jpg" />
                      <div className="active"></div>
                  </div>
                  <div className="message-body">
                      <h5>Dan Smith</h5>
                      <p className="text-bold">2 New Messages</p>
                  </div>
              </div>
              <div className="message">
                  <div className="profile-pic">
                      <img src="https://res.cloudinary.com/freecodez/image/upload/v1698067298/images/fy8azbqxhgdrbbijhipe.webp" />
                  </div>
                  <div className="message-body">
                      <h5>Chris Brown</h5>
                      <p className="text-muted">Lol u right</p>
                  </div>
              </div>
              <div className="message">
                  <div className="profile-pic">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7jXK7iCNJK_u4XvbwTkXPx140LlR1qh2XoihxvkMgM2ZvViJaIxaPFleTUJ7SBp9xBw&usqp=CAU" />
                  </div>
                  <div className="message-body">
                      <h5>Lana Rose</h5>
                      <p className="text-bold">Birthday tomorrow!!</p>
                  </div>
              </div>
              <div className="message">
                  <div className="profile-pic">
                      <img src="https://i.pinimg.com/236x/95/c4/96/95c496f64dd0e4c6f75f96c0abbbea6b.jpg" />
                  </div>
                  <div className="message-body">
                      <h5>Varun Nair</h5>
                      <p className="text-muted">Ssup?</p>
                  </div>
              </div>
              <div className="message">
                  <div className="profile-pic">
                      <img src="https://i.pinimg.com/736x/6d/4b/de/6d4bde9293ac23d4711c828859af20e4.jpg" />
                      <div className="active"></div>
                  </div>
                  <div className="message-body">
                      <h5>Jahnvi Doifode</h5>
                      <p className="text-bold">3 New Messages</p>
                  </div>
              </div>
          </div>
          <div className="friend-requests">
              <h4>Requests</h4>
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
              <div className="request">
                  <div className="info">
                      <div className="profile-pic">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7jXK7iCNJK_u4XvbwTkXPx140LlR1qh2XoihxvkMgM2ZvViJaIxaPFleTUJ7SBp9xBw&usqp=CAU" />
                      </div>
                      <div>
                          <h5>Srishti Tirkey</h5>
                          <p className="text-muted">2 mutual friends</p>
                      </div>
                  </div>
                  <div className="action">
                      <button className="btn btn-primary">Accept</button>
                      <button className="btn">Decline</button>
                  </div>
              </div>
              <div className="request">
                  <div className="info">
                      <div className="profile-pic">
                          <img src="https://i.pinimg.com/550x/91/7b/a7/917ba7b03ab2aa2fab7b1b3a83a00be3.jpg" />
                      </div>
                      <div>
                          <h5>Christ Kahea</h5>
                          <p className="text-muted">1 mutual friend</p>
                      </div>
                  </div>
                  <div className="action">
                      <button className="btn btn-primary">Accept</button>
                      <button className="btn">Decline</button>
                  </div>
              </div>
          </div>
      </div>
  );
}
