import { JSX } from "react";

export default function Stories(): JSX.Element {
  return (
    <div className="stories">
      <div className="story">
          <div className="profile-pic">
              <img src="https://res.cloudinary.com/freecodez/image/upload/v1698067298/images/fy8azbqxhgdrbbijhipe.webp" alt="" />
          </div>
          <p className="name">Your Story</p>
      </div>
      <div className="story">
          <div className="profile-pic">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7jXK7iCNJK_u4XvbwTkXPx140LlR1qh2XoihxvkMgM2ZvViJaIxaPFleTUJ7SBp9xBw&usqp=CAU" alt="" />
          </div>
          <p className="name">Lilla James</p>
      </div>
      <div className="story">
          <div className="profile-pic">
              <img src="https://i.pinimg.com/736x/1f/6f/d7/1f6fd7118d2c870236ef17544fd6f140.jpg" alt="" />
          </div>
          <p className="name">Jasmine Singh</p>
      </div>
      <div className="story">
          <div className="profile-pic">
              <img src="https://i.pinimg.com/236x/95/c4/96/95c496f64dd0e4c6f75f96c0abbbea6b.jpg" alt="" />
          </div>
          <p className="name">Celina Fernandes</p>
      </div>
      <div className="story">
          <div className="profile-pic">
              <img src="https://i.pinimg.com/736x/6d/4b/de/6d4bde9293ac23d4711c828859af20e4.jpg" alt="" />
          </div>
          <p className="name">Mia Addams</p>
      </div>
      <div className="story">
          <div className="profile-pic">
              <img src="https://64.media.tumblr.com/7b28774544438d73ca8c1daad11402e0/88958e5f55a67155-fd/s250x400/a9ef3dad54f6c57a53fdeef1a793f0143a9aea27.jpg" alt="" />
          </div>
          <p className="name">Christy Kahea</p>
      </div>
  </div>
  );
}
