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
    // Find the last message from the shop
    const lastShopMessageIndex = messages.slice().reverse().findIndex(m => m.sender === 'shop');
    if (lastShopMessageIndex === -1) return 0; // No shop messages found

    const lastShopMessage = messages[messages.length - 1 - lastShopMessageIndex];

    // Count messages from the customer after the last shop message
    return messages.slice(messages.indexOf(lastShopMessage) + 1)
        .filter(m => m.sender === 'customer' && !m.read)
        .length;
};

const MessageList = ({ messages, onChatClick, selectedChatId }) => {
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
                            border: '0.5px solid #e0e0e0',
                            borderTopLeftRadius: 4,
                            borderLeft: chat.id === selectedChatId ? '5px solid rgba(108, 180, 238, 0.9)' : '0.5px solid #e0e0e0',
                            borderBottomLeftRadius: 4,
                            bgcolor: chat.id === selectedChatId ? 'rgba(108, 180, 238, 0.2)' : (unreadCount > 0 ? 'rgba(192, 192, 192, 0.2)' : 'transparent'),
                            '&:hover': {
                                backgroundColor: chat.id === selectedChatId ? 'rgba(108, 180, 238, 0.2)' :'transparent',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
                            }
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar src={chat.avatar}>{chat.name.charAt(0)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
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
                                    bgcolor: '#A68A6C', 
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
