import Post from "../components/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
