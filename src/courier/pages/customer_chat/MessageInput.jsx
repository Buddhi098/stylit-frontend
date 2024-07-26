// courier/pages/customer_chat/MessageInput.jsx
import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
  return (
    <Box p={2} borderTop="1px solid #ddd">
      <TextField
        fullWidth
        placeholder="Type your message here..."
        variant="outlined"
        InputProps={{
          endAdornment: (
            <IconButton>
              <SendIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default MessageInput;
