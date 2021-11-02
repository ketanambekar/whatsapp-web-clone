import { Avatar, IconButton } from '@mui/material'
import React, {useState} from 'react'
import './Chat.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicNoneIcon from '@mui/icons-material/MicNone';
import RestApi from '../../services/RestApi';
function Chat({messages}) {
    const [input, setinput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault();
        RestApi.post('/api/v1/messages/new', {
            message: input,
            name: "ketan",
            timestamp: (new Date().toUTCString()).toString(),
            received: true
        })
        setinput('')
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>room name</h3>
                    <p>last seen at...</p>

                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">

                {messages.map((message) => (
                    <p key={message._id} className={`chat__message ${message.received && 'chat__reciever'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamps}
                        </span>
                    </p>
                ))}
                {/* {messages.map((message) => (
                <p key={message._id} className={`chat__message ${message.received && 'chat__reciever'}`}>
                <span className="chat__name">{message.name}</span>
                {message.message}
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
            ))} */}
                {/* {messages.map(message => {
                    <p key={message._id} className={`chat__message ${message.received && 'chat__reciever'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}

                        <span className="chat__timestamp">
                            {new Date().toUTCString()}
                        </span>
                    </p>
                })} */}



                {/* <p className="chat__message chat__reciever">
                    <span className="chat__name">Ketan</span>
                    this is msg right...

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}

            </div>


            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                        placeholder="Type a message"
                        type="text" />
                    <button
                         onClick={sendMessage}
                        type="submit">
                        Send a message
                    </button>
                </form>
                <MicNoneIcon />
            </div>
        </div>
    )
}

export default Chat
