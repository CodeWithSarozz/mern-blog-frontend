import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/includes/Header";
import SideBar from "../components/includes/SideBar";
import Posts from "./Posts";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post" + search);
      setPosts(res.data);
    };

    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <div className="clearfix"></div>
        <div className="col-md-9">
          <Posts posts={posts} />
        </div>

        <div className="col-md-3">
          <SideBar />
        </div>
      </div>
    </>
  );
}
