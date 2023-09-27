import "../Css/widgets.css";
import { AiOutlineSearch } from "react-icons/ai";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <AiOutlineSearch className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId="1704580980042780796" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MohammedZaino21"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url="https://twitter.com/MohammedZaino21"
          options={{ text: "Check this out!" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
