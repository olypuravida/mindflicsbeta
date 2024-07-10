'use client'

import ListItemIcon from "@mui/material/ListItemIcon"
import MenuItem from "@mui/material/MenuItem"
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import styles from './styles.module.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SettingsIcon from '@mui/icons-material/Settings';

export function MenuLeftItemBottom() {
    return (
        <>
            <MenuItem className={styles.menu_left_item_bottom} >
                <ListItemIcon>
                    <SettingsIcon className={styles.menu_left_item} fontSize="small" />
                </ListItemIcon>
                <Typography className={styles.menu_left_item} variant="inherit">Settings</Typography>
            </MenuItem>
        </>
        
    )
}