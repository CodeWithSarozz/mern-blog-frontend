import SideBar from "../components/includes/SideBar";
import { Col } from "react-bootstrap";

export default function Settings() {
  return (
    <div className="row settings">
      <Col md={9}>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete your account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://picsum.photos/id/237/200/300" alt="" />
              <label htmlFor="fileInput">
                <i class="settingPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username :</label>
            <input type="text" placeholder="Username" />
            <label>Email :</label>
            <input type="email" placeholder="email@mail.com" />
            <label>Password :</label>
            <input type="password" />

            <button className="settingSubmit">Update</button>
          </form>
        </div>
      </Col>
      <Col md={3}>
        <SideBar />
      </Col>
    </div>
  );
}
