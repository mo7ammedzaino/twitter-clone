import { useEffect, useState } from "react";
import "../Css/feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { postsRef } from "../firebase";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(postsRef);

    const unsubscribe = onSnapshot(
      q,
      orderBy("timestamp", "desc"),
      (snapshot) => {
        const updatedRooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(updatedRooms);
      }
    );

    return () => {
      // Cleanup the subscription when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__heading">Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
