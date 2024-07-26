
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

const ChatArea = () => {
  const messages = [
    {
      id: 1,
      sender: 'Ross Taylor',
      message: 'I placed an order',
      timestamp: '22 August 2024, 11:28',
      avatar: '/path/to/avatar1.jpg',
    },
    {
      id: 2,
      sender: 'You',
      message: 'My order number is 13096189',
      timestamp: '22 August 2024, 11:28',
      avatar: '/path/to/avatar2.jpg',
    },
    {
      id: 3,
      sender: 'You',
      message: 'okay madam, we received your parcel',
      timestamp: '22 August 2024, 12:10',
      avatar: '/path/to/avatar2.jpg',
    },
    {
      id: 4,
      sender: 'Ross Taylor',
      message: 'I want to know where\'s my order is',
      timestamp: 'Today, 08:20',
      avatar: '/path/to/avatar1.jpg',
    }
  ];

  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Box flexGrow={1} p={2}>
        <Typography variant="h6" gutterBottom>Ross Taylor</Typography>
        <Divider />
        <MessagesList messages={messages} />
      </Box>
      <MessageInput />
    </Box>
  );
};

export default ChatArea;
