import React, { useState } from 'react';
import { TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EmojiPicker from 'emoji-picker-react';

const MessagesInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleSendMessage = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleEmojiClick = (event, emojiObject) => {
        setMessage(prevMessage => prevMessage + emojiObject.emoji);
        setShowEmojiPicker(false);
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        // Handle file upload logic here
        console.log('Files selected:', files);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                borderTop: '1px solid #ccc',
                backgroundColor: '#fff',
                position: 'sticky',
                bottom: 0,
                width: '100%',
                boxShadow: '0 -2px 5px rgba(0,0,0,0.2)',
                boxSizing: 'border-box',
            }}
        >
            {/* File and Emoji Icons */}
            <IconButton component="label" sx={{ color: 'primary.main', mr: 1 }}>
                <AddCircleOutlineIcon sx={{color: "#C0A888"}}/>
                <input
                    type="file"
                    accept="image/*,video/*"
                    hidden
                    onChange={handleFileChange}
                />
            </IconButton>
            <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)} sx={{ color: 'primary.main', mr: 1 }}>
                <EmojiEmotionsIcon sx={{color: "#C0A888"}}/>
            </IconButton>

            {/* Message TextField */}
            <TextField
                sx={{ flex: 1 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                variant="outlined"
                size="small"
            />

            {/* Send Icon */}
            <IconButton
                onClick={handleSendMessage}
                sx={{ color: 'primary.main' }}
            >
                <SendIcon sx={{color: "#C0A888"}}/>
            </IconButton>

            {/* Emoji Picker */}
            {showEmojiPicker && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '60px',
                        left: '20px',
                        zIndex: 1000,
                    }}
                >
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </Box>
            )}
        </Box>
    );
};

export default MessagesInput;
