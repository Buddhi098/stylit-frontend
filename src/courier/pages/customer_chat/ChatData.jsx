import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, Avatar, Menu, MenuItem, Fab, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add'; // Import Add Icon
import MessageList from './MessageList';
import ChatArea from './ChatArea';
import MessageInput from './MessageInput';
import initialMessages from './Messages'; // Adjust the path as needed

const ChatData = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState(initialMessages);
    const [searchTerm, setSearchTerm] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
        // Mark the selected chat as read
        setMessages(prevMessages => 
            prevMessages.map(msg => 
                msg.id === chat.id ? { ...msg, unread: false } : msg
            )
        );
    };

    const handleSendMessage = (message) => {
        const updatedMessages = messages.map(chat => {
            if (chat.id === selectedChat.id) {
                return {
                    ...chat,
                    messages: [...chat.messages, { text: message, sender: 'admin', time: new Date().toLocaleTimeString() }],
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

    const handleNewChat = () => {
        // Handle creating a new chat
        console.log('New chat button clicked');
    };

    return (
        <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
            {/* Message List */}
            <Box sx={{ width: '300px', borderRight: '1px solid #e0e0e0', bgcolor: 'white', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search..."
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton edge="start">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Typography variant="h6" sx={{ mt: 2 }}>Direct Messages</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <MessageList 
                        messages={messages.filter(msg => 
                            msg.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )} 
                        onChatClick={handleChatClick}
                        selectedChatId={selectedChat ? selectedChat.id : null} // Pass selectedChatId
                    />
                </Box>
                <Fab
                    aria-label="add"
                    onClick={handleNewChat}
                    sx={{
                        color: "#C0A888",
                        position: 'absolute',
                        bottom: 25,
                        right: 16,
                    }}
                >
                    <AddIcon sx={{ color: '#C0A888' }} /> {/* Icon color */}
                </Fab>
            </Box>

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
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h6" color="textSecondary" sx={{fontWeight:'bold'}}>
                            Select a Chat to Start Messaging
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ChatData;
