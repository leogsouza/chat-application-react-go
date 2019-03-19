import React, { Component } from 'react';
import classes from './ChatHistory.module.scss';

class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map((msg, index) => (
      <p key={index}>{msg.data}</p>
    ));

    return (
      <div className={classes.ChatHistory}>
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;