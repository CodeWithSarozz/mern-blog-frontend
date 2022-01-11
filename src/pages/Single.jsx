import SideBar from "../components/includes/SideBar";
import SinglePost from "./SinglePost";
import { Col } from "react-bootstrap";

export default function Single() {
  return (
    <div className="single">
      <Col md={9}>
        <SinglePost />
      </Col>
      <Col md={3}>
        <SideBar />
      </Col>
    </div>
  );
}
