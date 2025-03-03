import { JSX, useState } from "react";
import { menuItem } from "../../consts";
import MenuItems from "../menu-items/menu-items";

export default function LeftMenu(): JSX.Element {
  const [activeMenuItem, setActiveMenuItem] = useState<string>('Home');

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
  };

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
        {
          Object.entries(menuItem).map(([key, value]) => (
          <MenuItems
            menuIcon={key}
            menuValue={value}
            isActive={value === activeMenuItem}
            onClick={handleMenuItemClick} 
          />))
        }
        

        <label className="btn btn-primary" htmlFor="create-post">Create Post</label>
      </div>
    </div>
  );
}
