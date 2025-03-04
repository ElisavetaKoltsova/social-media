import { JSX } from "react";
import Messages from "../messages/messages";
import FriendRequests from "../friend-requests/friend-requests";

export default function RightSection(): JSX.Element {
    return (
        <div className="right">
            <Messages />
            <FriendRequests />
        </div>
    );
}
