import SideBar from "../components/includes/SideBar";
import { Col } from "react-bootstrap";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);

      updatedUser.profilePic = fileName;

      try {
        await axios.post("/upload", data);
        setSuccess(true);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.put("/user/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="row settings">
      <Col md={9}>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete your account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt=""
              />
              <label htmlFor="fileInput">
                <i class="settingPPIcon far fa-user-circle"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <label>Username :</label>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email :</label>
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password :</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="settingSubmit" type="submit">
              Update
            </button>
            {success && (
              <span
                className="alert alert-success"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                Profile has been Updated .
              </span>
            )}
          </form>
        </div>
      </Col>
      <Col md={3}>
        <SideBar />
      </Col>
    </div>
  );
}
