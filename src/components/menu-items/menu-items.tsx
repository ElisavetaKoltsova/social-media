import { JSX } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBell, faEnvelope, faBookmark, faChartLine, faPalette, faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import NotificationsPopup from "../notifications-popup/notifications-popup";
import { Link } from "react-router-dom";

type MenuItemsProps = {
  menuIcon: string;
  menuValue: string;
  isActive: boolean;
  onClick: (item: string) => void;
}

const iconMap: Record<string, IconDefinition> = {
  home: faHome,
  compass: faCompass,
  bell: faBell,
  envelope: faEnvelope,
  bookmark: faBookmark,
  chartline: faChartLine,
  palette: faPalette,
  cog: faCog,
};

export default function MenuItems({menuIcon, menuValue, isActive, onClick}: MenuItemsProps): JSX.Element {
  return (
    <Link className={`menu-item ${isActive ? 'active' : ''}`} id="notifications" to="" onClick={() => onClick(menuValue)}>
      <span>
        <FontAwesomeIcon icon={iconMap[menuIcon.toLowerCase()]} />
        {/* <i className="uil uil-bell">
          <small className="notification-count">9+</small>
        </i> */}
      </span>
      <h3>{menuValue}</h3>
      <NotificationsPopup />
    </Link>
  );
}
