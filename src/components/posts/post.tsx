import { JSX } from "react";

export default function Post(): JSX.Element {
  return (
    <div className="feed">
      <div className="head"></div>
      <div className="user">
          <div className="profile-pic">
              <img src="https://64.media.tumblr.com/7b28774544438d73ca8c1daad11402e0/88958e5f55a67155-fd/s250x400/a9ef3dad54f6c57a53fdeef1a793f0143a9aea27.jpg" alt="" />
          </div>
          <div className="info">
              <h3>Lana Rose</h3>
              <small>Dubai, 15 MINUTES AGO</small>
          </div>
          <span className="edit"><i className="uil uil-ellipsis-h"></i></span>
      </div>

      <div className="photo">
          <img src="https://png.pngtree.com/background/20230512/original/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-picture-image_2503007.jpg" alt="" />
      </div>

      <div className="action-button">
          <div className="interaction-button">
              <span><i className="uil uil-thumbs-up"></i></span>
              <span><i className="uil uil-comment"></i></span>
              <span><i className="uil uil-share"></i></span>
          </div>
          <div className="bookmark">
              <span><i className="uil uil-bookmark"></i></span>
          </div>
      </div>

      <div className="liked-by">
          <span><img src="https://res.cloudinary.com/freecodez/image/upload/v1698067298/images/fy8azbqxhgdrbbijhipe.webp" /></span>
          <span><img src="https://64.media.tumblr.com/7b28774544438d73ca8c1daad11402e0/88958e5f55a67155-fd/s250x400/a9ef3dad54f6c57a53fdeef1a793f0143a9aea27.jpg" /></span>
          <span><img src="https://64.media.tumblr.com/2d678d77b051ee352d722d1f7fd2c029/88958e5f55a67155-7d/s250x400/74d69559d55329719bb0a50d8e9d77cbf0ec6da0.jpg" /></span>
          ,
          <p>Liked by <b>Enrest Achiever</b>snd <b>220 others</b></p>
      </div>

      <div className="caption">
          <p>
              <b>Lana Rose</b>Lorem ipsum dolor storiesquiquam eius.
              <span className="hash-tag">#lifestyle</span>
          </p>
      </div>
      <div className="comments text-muted">View all 130 comments</div>
  </div>
  );
}
