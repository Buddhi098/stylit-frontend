import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import EditOutlined from '@ant-design/icons/EditOutlined';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';
import AuthContext from '../../../../../../context/auth_context/AuthContext';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

export default function ProfileTab() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const {logout} = useContext(AuthContext)

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index);
    if (path) {
      navigate(path);
    }
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0, '/courier/edit_profile')}>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>      
      <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1, '/courier/payment')}>
        <ListItemIcon>
          <WalletOutlined />
        </ListItemIcon>
        <ListItemText primary="Payment" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={()=>logout()}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}

ProfileTab.propTypes = { handleLogout: PropTypes.func };
