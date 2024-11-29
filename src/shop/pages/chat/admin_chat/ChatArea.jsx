import React, { useEffect, useRef } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

const ChatArea = ({ chat }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat.messages]);

    const formatDate = (date) => {
        return dayjs(date).format('MMM D, YYYY');
    };

    const formatTime = (time) => {
        return dayjs(time).format('h:mm A');
    };

    const groupedMessages = chat.messages.reduce((acc, msg) => {
        const date = dayjs(msg.time).format('YYYY-MM-DD');
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(msg);
        return acc;
    }, {});

    return (
      <Box 
      sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
      }}
  >
      {Object.keys(groupedMessages).map((date, index) => (
          <Box key={index}>
              <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  sx={{
                      mb: 1,
                      mt: 2,
                      textAlign: 'center', // Center the text
                  }}
              >
                  {formatDate(date)}
              </Typography>

              {groupedMessages[date].map((msg, index) => (
                  <Box 
                  key={index} 
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'admin' ? 'flex-start' : 'flex-end',
                    mb: 1.5,
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <Paper 
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: msg.sender === 'admin' ? 'rgba(192, 168, 136,0.2)' : '#6CB4EE',
                      color: msg.sender === 'admin' ? 'black' : 'white',
                      maxWidth: '100%',
                      wordBreak: 'break-word',
                      maxHeight: '32px', 
                      overflowY: 'auto',  
                      display: 'flex',
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      textAlign: 'center',
                      fontSize: '0.85rem', 
                    }}
                  >
                    {msg.text}
                  </Paper>
                  <Typography 
                    variant="caption" 
                    color="textSecondary" 
                    sx={{ 
                      fontSize: '0.65rem',
                      mt: 0.5,
                      alignSelf: msg.sender === 'admin' ? 'flex-start' : 'flex-end',
                    }}
                  >
                    {formatTime(msg.time)}
                  </Typography>
                </Box>
                
              ))}
          </Box>
      ))}
      <div ref={messagesEndRef} />
  </Box>
    );
};

export default ChatArea;
