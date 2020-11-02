import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';


//main 
function Tweet({tweet}) {
  return (
    <div className="tweet"> 
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <LikeButton count={tweet.likes}/>
          <RetweetButton count={tweet.retweets}/>
          <CommentButton/>
          <ShareButton/>
        </div>
      </div>
    </div>
  );
}

//content
var testTweet = {
  message: "siomai siopao",
  gravatar: "xyz",
  author: {
    handle: "wazowski",
    name: "mikey",
  },
  likes: 2,
  retweets: 5,
  timestamp: "2020-10-08 11:35:45"
};

//profile
function Avatar({hash}) {
  var url= `https://imgur.com/E2vkTh1.png/${hash}`
  return(
    <img
    src={url}
    className="avatar"
    alt="avatar"/>
  );
}

//tweet
function Message({text}) {
  return(
    <div className="message">
      {text}
    </div>
  );
}

//username
function NameWithHandle({author}) {
  const {name, handle} = author;
  return(
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

//timelog
const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return(
    <span className="time">{timeString}</span>
  )
};


//buttons
const LikeButton = ({count}) => (
  <span className="like-button">
      <i className="fa fa-heart"/>
        {count > 0 &&
        <span className="like-count">
          {count}
        </span>}
  </span>

);

function getRetweetCount(count) {
  if(count > 0){
    return(
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const RetweetButton = ({count}) => (
  <span className="retweet-button"> 
      <i className="fa fa-retweet button"/>
      {getRetweetCount(count)}
  </span>
);

const CommentButton = () => (
  <span className="comment-button">
      <i className="far fa-comment button"/>
  </span>

);

const ShareButton = () => (
  <span className="more-options-button">
      <i className="fas fa-external-link-alt"/>
  </span>

);






ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));