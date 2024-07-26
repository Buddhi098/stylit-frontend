// courier/pages/customer_chat/MessagesList.jsx
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const MessagesList = ({ messages }) => {
  return (
    <Box>
      {messages.map((msg, index) => (
        <Box key={index} mt={2} mb={2} display="flex" alignItems="center">
          <Avatar src={msg.avatar} />
          <Box ml={2}>
            <Typography variant="body1">{msg.message}</Typography>
            <Typography variant="caption" color="textSecondary">{msg.timestamp}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MessagesList;
