import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography, Paper } from '@mui/material';

// Dummy data for suggested users
const suggestedUsers = [
  { id: 1, name: 'RPX', status: 'Suggested for you', followed: false },
  { id: 2, name: 'UPS', status: 'Suggested for you', followed: false },
  { id: 3, name: 'Prompt Xpress', status: 'Suggested for you', followed: false },
  { id: 4, name: 'Dreamco Express', status: 'Suggested for you', followed: false },
//   { id: 5, name: 'Antron Express', status: 'Suggested for you', followed: false },
//   { id: 6, name: 'TNT Express', status: 'Suggested for you', followed: false },
//   { id: 7, name: 'Aramex', status: 'Suggested for you', followed: false },
//   { id: 8, name: 'Modern Attire', status: 'Suggested for you', followed: false },
//   { id: 9, name: 'Urban Styles', status: 'Suggested for you', followed: false },
//   { id: 10, name: 'Vogue Collection', status: 'Suggested for you', followed: false }
];

const FollowSuggestions = ({ suggestions }) => {
  return (
    <List>
      {suggestions.map((user) => (
        <ListItem key={user.id} divider>
          <ListItemAvatar>
            <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.name} secondary={user.status} />
          <ListItemSecondaryAction>
            <Button 
              variant="contained" 
              size="small" 
              disabled={user.followed}
              sx={{ 
                backgroundColor: user.followed ? 'grey' : '#6CB4EE', 
                color: '#fff',
                '&:hover': {
                  backgroundColor: user.followed ? 'grey' : '#A8D8F7'
                } 
              }}
            >
              {user.followed ? 'Requested' : 'Connect'}
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

FollowSuggestions.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      followed: PropTypes.bool.isRequired
    })
  ).isRequired
};

const App = () => {
  return (
    <Paper style={{ padding: '10px', backgroundColor: '#fff', color: '#000' }}>
      <Typography variant="h6" gutterBottom>
        Suggested for you
      </Typography>
      <FollowSuggestions suggestions={suggestedUsers} />
    </Paper>
  );
};

export default App;
