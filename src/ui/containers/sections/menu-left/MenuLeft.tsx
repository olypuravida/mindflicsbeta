'use client'

import ListItemIcon from "@mui/material/ListItemIcon"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { MenuLeftItem } from '../menu-left-item/MenuLeftItem';
import { MenuLeftItemBottom } from "../menu-left-item-bottom";


export function MenuLeft() {
    return (
        <> 
            <MenuList>
                <MenuLeftItem />
            </MenuList>
            <MenuList>
                <MenuLeftItemBottom />
            </MenuList>
        </>
    )
}