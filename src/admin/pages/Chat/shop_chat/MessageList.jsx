import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomListItem = styled(ListItem)(({ theme }) => ({
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
    },
}));

const countUnreadMessages = (messages) => {
    // Find the last message from the courier
    const lastCourierMessageIndex = messages.slice().reverse().findIndex(m => m.sender === 'courier');
    if (lastCourierMessageIndex === -1) return 0; // No courier messages found

    const lastCourierMessage = messages[messages.length - 1 - lastCourierMessageIndex];

    // Count messages from the admin after the last courier message
    return messages.slice(messages.indexOf(lastCourierMessage) + 1)
        .filter(m => m.sender === 'shop' && !m.read)
        .length;
};

// In MessageList.jsx
const MessageList = ({ messages, onChatClick, selectedChatId }) => {
    return (
        <List>
            {messages.map(chat => {
                // Only show unread count if the chat's unread status is true
                const unreadCount = chat.unread ? countUnreadMessages(chat.messages) : 0;
                return (
                    <CustomListItem 
                        button 
                        key={chat.id} 
                        onClick={() => onChatClick(chat)}
                        sx={{ 
                            border: '0.5px solid #e0e0e0',
                            borderTopLeftRadius: 4,
                            borderLeft: chat.id === selectedChatId ? `5px solid #C0A888` : '0.5px solid #e0e0e0',
                            borderBottomLeftRadius: 4,
                            bgcolor: chat.id === selectedChatId ? 'rgba(192, 168, 136, 0.2)' : (unreadCount > 0 ? 'rgba(192, 168, 136, 0.1)' : 'transparent'),
                            '&:hover': {
                                backgroundColor: chat.id === selectedChatId ? 'rgba(192, 168, 136, 0.2)' : 'transparent',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
                            }
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar src={chat.avatar} sx={{ width: 50, height: 50, border: `1px solid #C0A888` }}/>
                        </ListItemAvatar>
                        <ListItemText 
                            sx={{marginLeft:1}}
                            primary={
                                <Typography variant="body1" sx={{ fontWeight: unreadCount > 0 ? 'bold' : 'normal' }}>
                                    {chat.name}
                                </Typography>
                            }
                            secondary={
                                <Typography variant="body2" sx={{ fontWeight: unreadCount > 0 ? 'bold' : 'normal' }}>
                                    {chat.messages[chat.messages.length - 1].text}
                                </Typography>
                            }
                        />
                        {unreadCount > 0 && (
                            <Box 
                                sx={{ 
                                    bgcolor: '#C0A888', 
                                    color: 'white', 
                                    borderRadius: '50%', 
                                    width: 20, 
                                    height: 20, 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                }}
                            >
                                <Typography variant="caption">
                                    {unreadCount}
                                </Typography>
                            </Box>
                        )}
                    </CustomListItem>
                );
            })}
        </List>
    );
};

export default MessageList;
