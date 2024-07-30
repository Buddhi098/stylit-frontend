import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';

const CustomListItem = styled(ListItem)(({ theme }) => ({
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const countUnreadMessages = (messages) => {
    // Find the last message from the shop
    const lastShopMessageIndex = messages.slice().reverse().findIndex(m => m.sender === 'shop');
    if (lastShopMessageIndex === -1) return 0; // No shop messages found

    const lastShopMessage = messages[messages.length - 1 - lastShopMessageIndex];

    // Count messages from the customer after the last shop message
    return messages.slice(messages.indexOf(lastShopMessage) + 1)
        .filter(m => m.sender === 'customer' && !m.read)
        .length;
};

// In MessageList.jsx
const MessageList = ({ messages, onChatClick }) => {
    return (
        <List>
            {messages.map(chat => {
                // Only show unread count if the chat's unread status is true
                const unreadCount = chat.unread ? countUnreadMessages(chat.messages) : 0;
                return (
                    <ListItem 
                        button 
                        key={chat.id} 
                        onClick={() => onChatClick(chat)}
                        sx={{ 
                            borderBottom: '1px solid #e0e0e0',
                            bgcolor: unreadCount > 0 ? '#f0f7ff' : 'transparent'
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar src={chat.avatar}>{chat.name.charAt(0)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={chat.name}
                            secondary={chat.messages[chat.messages.length - 1].text}
                        />
                        {unreadCount > 0 && (
                            <Box 
                                sx={{ 
                                    bgcolor: 'primary.main', 
                                    color: 'white', 
                                    borderRadius: '50%', 
                                    width: 20, 
                                    height: 20, 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center' 
                                }}
                            >
                                {unreadCount}
                            </Box>
                        )}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default MessageList;
