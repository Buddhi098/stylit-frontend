import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, List, ListItem,ListItemSecondaryAction, ListItemText, Typography, Paper } from '@mui/material';
import nolimit from "../../assets/images/stores/nolimit.png"
import carnage from "../../assets/images/stores/carnage.png"
import hameedia from "../../assets/images/stores/hameedia.png"
import coolplanet from "../../assets/images/stores/coolplanet.png"
import tshirtrepublic from "../../assets/images/stores/tshirtrepublic.jpeg"
import street82 from "../../assets/images/stores/street82.png"
import ebony from "../../assets/images/stores/ebony.png"


const suggestedUsers = [
  { id: 1, name: 'Nolimit', status: 'Suggested for you', followed: false ,profilePic: nolimit },
  { id: 2, name: 'Carnage', status: 'Suggested for you', followed: false ,profilePic: carnage,},
  { id: 3, name: 'Hammedia', status: 'Suggested for you', followed: false ,profilePic: hameedia },
  { id: 4, name: 'Cool Planet', status: 'Suggested for you', followed: false ,profilePic: coolplanet},
  { id: 5, name: 'T-Shirt Republic', status: 'Suggested for you', followed: false ,profilePic: tshirtrepublic},
  { id: 6, name: 'Street82', status: 'Suggested for you', followed: false ,profilePic: street82},
  { id: 7, name: 'Ebony', status: 'Suggested for you', followed: false ,profilePic: ebony},
];

const FollowSuggestions = ({ suggestions }) => {
  return (
    <List>
      {suggestions.map((user) => (
        <ListItem key={user.id} divider>
          <Avatar src={user.profilePic} sx={{ width: 50, height: 50, marginRight: 2, border: '1px solid black' }} />
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
      <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold'}}>
        Suggested for you
      </Typography>
      <FollowSuggestions suggestions={suggestedUsers} />
    </Paper>
  );
};

export default App;
