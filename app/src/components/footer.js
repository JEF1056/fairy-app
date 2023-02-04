import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendar, faBook } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function FooterComponent() {
  const location = useLocation();
  const activeClasses = "active bg-base-400";

  const buttons = [
    { icon: faHome, title: "Home", path: "/patient" },
    { icon: faCalendar, title: "Events", path: "/patient/events" },
    { icon: faBook, title: "Log", path: "/patient/log" },
  ];

  return (
    <div className="btm-nav bg-base-300">
      {buttons.map((button) => (
        <a
          href={button.path}
          className={location.pathname === button.path ? activeClasses : ""}
        >
          <FontAwesomeIcon icon={button.icon} />
          {button.title}
        </a>
      ))}
    </div>
  );
}

export default FooterComponent;
