// ChatInterface.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Badge,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const messages = [
  { name: 'Winlarn Wall', message: "I want to know where's My order is...", time: '11:50', unread: 2, avatar: 'path/to/avatar1.jpg' },
  { name: 'Ross Taylor', message: "I want to know where's My order is...", time: '08:20', unread: 1, avatar: 'path/to/avatar2.jpg' },
  { name: 'Brendon Mccullum', message: "I want to know where's My order is...", time: 'Yesterday', unread: 5, avatar: 'path/to/avatar3.jpg' },
  { name: 'Rossie Anne', message: "I want to know where's My order is...", time: 'Yesterday', unread: 0, avatar: 'path/to/avatar4.jpg' },
  { name: 'Peter Paul', message: "I want to know where's My order is...", time: 'Thu', unread: 0, avatar: 'path/to/avatar5.jpg' },
  { name: 'Threshma', message: "I want to know where's My order is...", time: 'Thu', unread: 0, avatar: 'path/to/avatar6.jpg' },
  { name: 'Ben Cook', message: "I want to know where's My order is...", time: 'Wed', unread: 4, avatar: 'path/to/avatar7.jpg' },
  { name: 'Ben Cook', message: "I want to know where's My order is...", time: 'Wed', unread: 0, avatar: 'path/to/avatar8.jpg' },
];

const SearchField = styled(TextField)({
  marginBottom: '1rem',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '10px 15px',
  borderRadius: '10px',
  marginBottom: '10px',
  backgroundColor: theme.palette.background.paper,
  '&.Mui-selected': {
    backgroundColor: theme.palette.action.selected,
  },
}));

const ChatInterface = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box display="flex" flexDirection="column" p={2}>
      <SearchField
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Typography variant="h6" gutterBottom>
        Direct Messages
      </Typography>
      <List>
        {messages.map((msg, index) => (
          <StyledListItem
            button
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            key={index}
          >
            <ListItemAvatar>
              <Avatar src={msg.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={msg.name}
              secondary={msg.message}
            />
            <Box textAlign="right">
              <Typography variant="body2" color="textSecondary">
                {msg.time}
              </Typography>
              {msg.unread > 0 && (
                <Badge badgeContent={msg.unread} color="primary" />
              )}
            </Box>
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatInterface;
