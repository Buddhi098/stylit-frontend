import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, Avatar, Menu, MenuItem,Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageList from './MessageList';
import ChatArea from './ChatArea';
import MessagesInput from './MessageInput';
import initialMessages from './Messages';
import AdsClickIcon from '@mui/icons-material/AdsClick'; 

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
                    messages: [...chat.messages, { text: message, sender: 'courier', time: new Date().toLocaleTimeString() }],
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
            {/* Message List */}
            <Box sx={{ width: '350px', borderRight: '1px solid #e0e0e0', bgcolor: 'white', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <Box sx={{ p: 2}}>
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
                    <Typography variant="h6" sx={{ mt: 2 ,fontWeight:'bold'}}>Direct Messages</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <MessageList 
                        messages={messages.filter(msg => 
                            msg.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )} 
                        onChatClick={handleChatClick}
                        selectedChatId={selectedChat ? selectedChat.id : null}
                    />
                </Box>
            </Box>

            {/* Chat Area */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {selectedChat ? (
                    <>
                        {/* Header */}
                        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: 'white' }}>
                            {/* Profile Picture */}
                            <Avatar src={selectedChat.avatar} sx={{ width: 48, height: 48, border: '1px solid black' }}/> 

                            {/* Customer Name */}
                            <Typography variant="h6" sx={{ flexGrow: 1 ,marginLeft:1}}>
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

                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <ChatArea chat={selectedChat} />
                            <MessagesInput onSendMessage={handleSendMessage} />
                        </Box>
                    </>
                ) : (
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" color="textSecondary" sx={{fontWeight:'bold'}}>
                            Select a Chat to Start Messaging
                            <AdsClickIcon sx={{ ml: 1 }}/>
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ChatData;
