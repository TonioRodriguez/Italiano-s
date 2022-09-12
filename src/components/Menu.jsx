import React from 'react';
import MenuItems from './MenuItems';
import menus from '../helpers/items';
import ResponsiveAppBar from './Nav'

const Menu = () => {
  return (
    <div>
        <ResponsiveAppBar />

        <MenuItems items = {menus} />
        
    </div>
  )
}

export default Menu