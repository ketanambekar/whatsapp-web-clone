import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import RestApi from './services/RestApi';
function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    RestApi.get('/api/v1/messages/sync').then(response => {
      console.log(response.data)
      setMessages(response.data)
    })
  }, [])


  useEffect(() => {
    var pusher = new Pusher('fb74a2ed5376a1e01661', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])

    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])


  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
