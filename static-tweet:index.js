timport React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import moment from 'moment';

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="button">
          <LikeButton count={tweet.likes}/>  
          <RetweetButton count={tweet.retweets}/>
          <ShareButton />
          <CommentButton />
        </div>
      </div>
    </div>
  );
}

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "LeiWebperson"
  },
  likes: 2,
  retweets: 5,
  timestamp: "2020-09-29 12:15:01"

}

function Avatar({hash}) {
  const url = `https://www.gravatar.com/avatar/${hash}`
  return (
    <img 
    src={url}
    className="avatar"
    alt="avatar"
    />
  );
}

function Message({text}) {
  return(
    <div className="message">
      {text}
    </div>
  );
}

function NameWithHandle({author}) {
  const {name, handle} = author;
  return(
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return(
    <span className="time">{timeString}</span>
    );
};

const LikeButton = ({count}) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
        {count > 0 &&
        <span className="like-count">
          {count}
        </span>
        }
  </span>
  
);

const CommentButton = () => {
  return (
    <span className="reply-button">
    <i className="far fa-comment" />
    </span>
  );
};

const ShareButton = () => {
  return (
    <span className="more-options-button">
    <i className="fas fa-external-link-alt" />
    </span>
  )

};

// const RetweetButton = (count) => {
//   return (
//     <span className="retweet-button">
//       <i className="fa fa-retweet" />
//       {getRetweetCount(count)}
//     </span>
//   );
// };

const RetweetButton = ({count}) => (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
        {count > 0 &&
        <span className="retweet-count">
          {count}
        </span>
        }
      {/* {getRetweetCount(count)} */}
    </span>
);

// function getRetweetCount(count){
//   if(count > 0){
//     return(
//       <span className="retweet-count">
//         {count}
//       </span>
//     )
//   } else {
//     return null;
//   };
// };









ReactDom.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
















