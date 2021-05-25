import { useState } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import './App.css';
import Message from './Message';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="/images/messenger-logo.png" alt="" width="70px"/>
      <h1>Messenger Clone</h1>
      <h2>Welcome {userName}!</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} userName={userName} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
