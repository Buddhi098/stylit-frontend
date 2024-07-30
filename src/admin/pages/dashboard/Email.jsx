import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import SendBox from './SendBox';

export default function Email() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Remy Sharp"
          secondary={
            <React.Fragment>
              
              {"I'm having a trouble resetting my password"}
            </React.Fragment>
          }
        />
        <SendBox/>
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Travis Howard"
          secondary={
            <React.Fragment>
              
              {"Hi, I need help with my account."}
            </React.Fragment>
          }
        />
        <SendBox/>
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Cindy Baker"
          secondary={
            <React.Fragment>
              
              {"I'm having a trouble resetting my password"}
            </React.Fragment>
          }
        />
        <SendBox/>
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Walter White" src="/static/images/avatar/5.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Walter White"
          secondary={
            <React.Fragment>
              
              {"I'm having a trouble resetting my password"}
            </React.Fragment>
          }
        />
        <SendBox/>
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Billy Butcher" src="/static/images/avatar/5.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Billy Butcher"
          secondary={
            <React.Fragment>
              
              {"I'm having a trouble resetting my password"}
            </React.Fragment>
          }
        />
        <SendBox/>
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tony Stark" src="/static/images/avatar/5.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Tony Stark"
          secondary={
            <React.Fragment>
              
              {"I'm having a trouble resetting my password"}
            </React.Fragment>
          }
        />
        <SendBox/>
      </ListItem>

      
    </List>

    
  );
}
