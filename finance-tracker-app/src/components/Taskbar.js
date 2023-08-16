import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import '../styles/Taskbar.css';

export default function Taskbar() {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 200,
                bgcolor: 'background.paper',
                color: 'white',
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
            }}
        >
            <nav aria-label="">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FlagIcon />
                            </ListItemIcon>
                            <ListItemText primary="Goals" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <div className='bottom_nav'>
                <Divider />
                <nav aria-label="">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemIcon>
                                    <CurrencyYenIcon />
                                </ListItemIcon>
                                <ListItemText primary="Currency" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </div>
        </Box>
    );
}
