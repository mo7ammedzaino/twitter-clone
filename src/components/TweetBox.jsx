import { useState } from "react";
import "../Css/tweetBox.css";
import { postsRef } from "../firebase"; // استيراد مرجع القاعدة من الملف المناسب
import { addDoc } from "firebase/firestore";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(postsRef, {
        displayName: "MohammedZaino",
        username: "MohdZaino83",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://lh3.googleusercontent.com/a/ACg8ocKD2L_0SdlGEgm168glDybz6Ejvu-zQiy36slcbG-ib7wU=s288-c-no",
      });

      // قم بمسح حقلي tweetMessage و tweetImage بعد إرسال التغريدة بنجاح.
      setTweetMessage("");
      setTweetImage("");

      console.log("تم نشر التغريدة بنجاح!", docRef.id);
    } catch (error) {
      console.error("حدث خطأ أثناء نشر التغريدة: ", error);
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <img
            className="tweetBox__input-avatar"
            src="https://lh3.googleusercontent.com/a/ACg8ocKD2L_0SdlGEgm168glDybz6Ejvu-zQiy36slcbG-ib7wU=s288-c-no"
            alt=""
          />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__image-input"
          type="text"
          placeholder="Optional: Enter image URL"
        />

        <button onClick={sendTweet} className="tweetBox__tweet">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetBox;
/*<svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg> */
