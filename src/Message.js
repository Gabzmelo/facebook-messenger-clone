import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css';

const Message = forwardRef(({message, userName}, ref) => {
    const isUser = userName === message.userName;

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__questCard"}>
                <CardContent>
                    <Typography color="initial" variant="h6" component="h4">
                        {!isUser && `${message.userName || 'Unknown User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
});

export default Message;
