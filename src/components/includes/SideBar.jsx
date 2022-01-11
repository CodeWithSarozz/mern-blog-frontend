import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category");
      setCats(res.data);
    };

    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://e7.pngegg.com/pngimages/833/38/png-clipart-user-profile-computer-software-internet-bot-user-miscellaneous-service.png"
          alt=""
        />
        <p>
          Irure non esse mollit ea Lorem. Dolore do sit amet minim amet
          excepteur esse exercitation adipisicing. Cupidatat aute in irure qui
          voluptate culpa quis eu consectetur est mollit. Commodo nulla duis
          quis tempor quis voluptate incididunt ut.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">
              <Link to={`/?cat=${c.name}`} className="link">
                <b>{c.name}</b>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
