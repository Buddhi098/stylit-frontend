import React, { useState } from 'react';
import { Box, Avatar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatArea from './ChatArea';
import MessageInput from './MessageInput';
import initialMessages from './Messages'; // Adjust the path as needed

const ChatData = () => {
    const [selectedChat, setSelectedChat] = useState(initialMessages[0]); // Assuming the first chat is selected by default
    const [messages, setMessages] = useState(initialMessages);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSendMessage = (message) => {
        const updatedMessages = messages.map(chat => {
            if (chat.id === selectedChat.id) {
                return {
                    ...chat,
                    messages: [...chat.messages, { text: message, sender: 'shop', time: new Date().toLocaleTimeString() }],
                };
            }
            return chat;
        });
        setMessages(updatedMessages);
    };

    const handleCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
            {/* Chat Area */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                {selectedChat ? (
                    <>
                        {/* Header */}
                        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: 'white' }}>
                            {/* Profile Picture */}
                            <Avatar src={selectedChat.avatar} sx={{ mr: 2 }}>
                                {selectedChat.name.charAt(0)}
                            </Avatar>

                            {/* Customer Name */}
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                {selectedChat.name}
                            </Typography>

                            {/* Call Icon */}
                            <IconButton sx={{color: "#C0A888",marginRight:2}} edge="end" aria-label="call" onClick={() => handleCall(selectedChat.phoneNumber)}>
                                <CallIcon />
                            </IconButton>

                            {/* More Options */}
                            <IconButton edge="end" color="default" aria-label="more options" onClick={handleMenuClick}>
                                <MoreVertIcon />
                            </IconButton>

                            {/* Options Menu */}
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                               <MenuItem onClick={handleMenuClose}>Search</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Block</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Setting</MenuItem>
                            </Menu>
                        </Box>

                        <Box sx={{ flex: 1, overflowY: 'auto' }}>
                            <ChatArea chat={selectedChat} />
                        </Box>
                        <MessageInput onSendMessage={handleSendMessage} />
                    </>
                ) : (
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h5" color="textSecondary">
                            Select a chat to start messaging
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ChatData;
