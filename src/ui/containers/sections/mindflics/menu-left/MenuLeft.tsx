'use client'

import React from 'react'
import MenuList from '@mui/material/MenuList'


import { MenuLeftItem } from '../menu-left-item/MenuLeftItem'
import { MenuLeftItemBottom } from '../menu-left-item-bottom'


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