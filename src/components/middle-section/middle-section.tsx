import { JSX } from "react";
import Stories from "../stories/stories";
import Posts from "../posts/posts";

export default function MiddleSection(): JSX.Element {
    return (
    <div className="middle">
            <Stories />

            <form className="create-post">
                <div className="profile-pic">
                    <img src="https://res.cloudinary.com/freecodez/image/upload/v1698067298/images/fy8azbqxhgdrbbijhipe.webp" alt="" />
                </div>
                <input
                type="text"
                placeholder="What's on your mind Freecodez?"
                id="create-post"
            />
                <input type="submit" value="Post" className="btn btn-primary" />
            </form>

            <Posts />
        </div>
    );
}
