import { useState } from "react";
import "../Css/post.css";
import {
  MdVerified,
  MdOutlineChatBubbleOutline,
  MdRepeat,
  MdFavoriteBorder,
  MdPublish,
  MdFavorite,
} from "react-icons/md";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  const [isLiked, setLiked] = useState(false);

  return (
    <div className="post">
      <img className="post__avatar" src={avatar} alt="" />

      <div className="post__body">
        <div className="post__header"></div>

        <div className="post__headerText">
          <h3>
            {displayName || "Unknown"}{" "}
            <span className="post__special">
              {verified && <MdVerified className="post__badge" />} @{username}
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">{text}</div>

        <img className="post__image" src={image} alt="tTweetPost" />

        <div className="post__footer">
          <MdOutlineChatBubbleOutline />
          <MdRepeat />
          <span onClick={() => setLiked(!isLiked)}>
            {isLiked ? (
              <MdFavorite className="MdFavorite" />
            ) : (
              <MdFavoriteBorder />
            )}
          </span>
          <MdPublish />
        </div>
      </div>
    </div>
  );
};

export default Post;
