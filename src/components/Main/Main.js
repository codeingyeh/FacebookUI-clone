import { storyData, postData } from "./data";
import likeIcon from "../../img/emoji/like.svg";

function Story({ userName, avatar, img }) {
  return (
    <div className="story">
      <div className="avatar">
        <img alt="img" src={avatar} />
      </div>
      <img alt="img" className="story__img" src={img} />
      <span className="story__user-name">{userName}</span>
    </div>
  );
}

function PostForm() {
  return (
    <div className="post-form">
      <div className="post-form__top-pannel">
        <div className="avatar">
          <img alt="img" src={require("../../img/user/user.jpg")} />
        </div>
        <input type="text" placeholder="Peter，在想些什麼?" />
      </div>
      <div className="post-form__bottom-pannel">
        <div className="post-form__bottom-pannel__item">
          <i className="fa-solid fa-video"></i>
          <span>直播視訊</span>
        </div>
        <div className="post-form__bottom-pannel__item">
          <i className="fa-solid fa-image"></i>
          <span>相片 / 影片</span>
        </div>
        <div className="post-form__bottom-pannel__item">
          <i className="fa-solid fa-face-laugh-beam"></i>
          <span>感受 / 活動</span>
        </div>
      </div>
    </div>
  );
}

function Post({ avatar, userName, img, textContent, time }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="avatar">
          <img alt="img" src={avatar} />
        </div>
        <div className="post__user-name">
          <div>{userName}</div>
          <div className="post__post-time">{time}</div>
        </div>
        <div className="post__menu-icon">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className="post__content">
        <div className="post__text-content">{textContent}</div>
        {img && (
          <div className="post__post-img">
            <img alt="img" src={img} />
          </div>
        )}
      </div>
      <div className="post__footer">
        <div className="post__footer__info">
          <div className="post__footer__info__like">
            <img alt="img" src={likeIcon} />
            <span>1</span>
          </div>
          <div className="post__footer__info__comment">1 Comments</div>
          <div className="post__footer__info__share">1 Shares</div>
        </div>
        <div className="post__footer__pannel">
          <div className="post__footer__pannel__item">
            <i className="fa-solid fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div className="post__footer__pannel__item">
            <i className="fa-solid fa-message"></i>
            <span>Comment</span>
          </div>
          <div className="post__footer__pannel__item">
            <i className="fa-solid fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <div className="main-content">
      <div className="storys">
        <div className="story-list">
          {storyData.map((x) => (
            <Story
              key={x.id}
              userName={x.userName}
              avatar={x.avatar}
              img={x.img}
            />
          ))}
        </div>
        <div className="next-icon">
          <i class="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>
      <PostForm />
      <div className="posts">
        {postData.map((x) => (
          <Post
            key={x.id}
            userName={x.userName}
            img={x.img}
            textContent={x.textContent}
            time={x.time}
            avatar={x.avatar}
          />
        ))}
      </div>
      <footer>
        <p>FacebookUI Clone Practice</p>
      </footer>
    </div>
  );
}
