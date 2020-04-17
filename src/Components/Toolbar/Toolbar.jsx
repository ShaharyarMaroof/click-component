import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { FaFont, FaEllipsisV } from "react-icons/fa";
import { MdCrop, MdHelpOutline, MdContentCopy, MdContentPaste, MdSettings } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { Menu } from 'antd';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import './styles.css'

const { Item, SubMenu } = Menu

const NavIconProps = {
  color: '#FFF',
  size: 24
}

const NavIconSubMenuProps = {
  color: '#000',
  size: 18
}

const MENU_LIST = [
  {
    "_id": "5e99c9e6e2f7bcad31deac8b",
    "index": 0,
    "name": "amet"
  },
  {
    "_id": "5e99c9e62de996c4f9e64cb2",
    "index": 1,
    "name": "dolore"
  },
  {
    "_id": "5e99c9e6f4b29a93946a0200",
    "index": 2,
    "name": "sunt"
  },
  {
    "_id": "5e99c9e6a0053ec1b8164916",
    "index": 3,
    "name": "consectetur"
  },
  {
    "_id": "5e99c9e644226b876f62e33b",
    "index": 4,
    "name": "enim"
  },
  {
    "_id": "5e99c9e63c1a2f8bd3dd92da",
    "index": 5,
    "name": "sunt"
  },
  {
    "_id": "5e99c9e6c46aa2d1b7f1452b",
    "index": 6,
    "name": "mollit"
  },
  {
    "_id": "5e99c9e6867dc0b9aba4b5fa",
    "index": 7,
    "name": "occaecat"
  },
  {
    "_id": "5e99c9e63271e97d0c6e2c1d",
    "index": 8,
    "name": "cillum"
  },
  {
    "_id": "5e99c9e614cf44e0fe3005ec",
    "index": 9,
    "name": "occaecat"
  },
  {
    "_id": "5e99c9e6c8d8524fbb484f69",
    "index": 10,
    "name": "laboris"
  },
  {
    "_id": "5e99c9e670501cb3921db096",
    "index": 11,
    "name": "sit"
  },
  {
    "_id": "5e99c9e6b318158e7bdae714",
    "index": 12,
    "name": "ut"
  },
  {
    "_id": "5e99c9e63246edd5e96948ff",
    "index": 13,
    "name": "nostrud"
  },
  {
    "_id": "5e99c9e663776639381c6da6",
    "index": 14,
    "name": "sit"
  },
  {
    "_id": "5e99c9e6f959b1a69cbca58a",
    "index": 15,
    "name": "quis"
  },
  {
    "_id": "5e99c9e6fd73ca2cf1d73310",
    "index": 16,
    "name": "eu"
  },
  {
    "_id": "5e99c9e6406e29c40974b0d5",
    "index": 17,
    "name": "ut"
  },
  {
    "_id": "5e99c9e6140e7da6652a9ed6",
    "index": 18,
    "name": "proident"
  },
  {
    "_id": "5e99c9e64e421382192be6b0",
    "index": 19,
    "name": "duis"
  },
  {
    "_id": "5e99c9e6f6dbc7617e418050",
    "index": 20,
    "name": "minim"
  },
  {
    "_id": "5e99c9e6f4e79e92ef371534",
    "index": 21,
    "name": "deserunt"
  }
]

const RenderToolbarMenu = (props) => {
  const { menuKey = '' } = props;
  const isMenuClosed = menuKey === ''

  return (
    <div className={`toolbar-menu-container ${isMenuClosed ? 'menu-closed' : 'menu-open'}`}>
      <ScrollMenu 
        data={MENU_LIST.map((menu) => <div className='filter-icon'>{menu.name}</div>)}
      />
    </div>
  )
}

const Toolbar = () => {
  const [activeToolbar, setActiveToolbar] = React.useState('');

  const onMenuClick = React.useCallback((thisMenuItem) => {
    if (activeToolbar === thisMenuItem) setActiveToolbar('')
    else setActiveToolbar(thisMenuItem)
  }, [activeToolbar])

  return (
    <div className='toolbar-container'>
      {/* toolbar menu */}
      <Menu className='menu-container' mode="horizontal">
        <Item className='nav-item' onClick={() => setActiveToolbar('')}>
          <AiOutlineDownload {...NavIconProps} />
        </Item>
        <Item className='nav-item' onClick={() => onMenuClick('menu2')}>
          <FaFont {...NavIconProps} />
        </Item>
        <Item className='nav-item' onClick={() => onMenuClick('menu3')}>
          <MdCrop {...NavIconProps} />
        </Item>
        <Item className='nav-item' onClick={() => onMenuClick('menu4')}>
          <FiLayers {...NavIconProps} />
        </Item>
        <SubMenu
          title={<FaEllipsisV {...NavIconProps} />}
          className='toolbar-submenu'
        >
          <Item className='nav-item'>
            <MdContentPaste {...NavIconSubMenuProps} />&nbsp;Paste Layers
        </Item>
          <Item className='nav-item'>
            <MdContentCopy {...NavIconSubMenuProps} />&nbsp;Copy Layers
        </Item>
          <Item className='nav-item'>
            <MdHelpOutline {...NavIconSubMenuProps} />&nbsp;Tutorials
        </Item>
          <Item className='nav-item'>
            <MdSettings {...NavIconSubMenuProps} />&nbsp; Settings
        </Item>
        </SubMenu>
      </Menu>

      {/* menu container */}
      <RenderToolbarMenu menuKey={activeToolbar} />
    </div>
  )
}

export default Toolbar;