import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router'

function getComponentsMenuLink (meta) {
  const filename = meta.filename
  const link = '/' + filename.slice(0, filename.indexOf('index.md') - 1)
  return <Link to={link}>{meta.title}</Link>
}

function getComponentsMenuItem (menus) {
  return menus
    .sort((a, b) => (a.meta.order - b.meta.order))
    .map((item) => {
      return (
        <Menu.Item key={item.meta.filename}>
          { getComponentsMenuLink(item.meta)}
        </Menu.Item>
      )
    })
}

function getComponentsMenuItems (data) {
  const menus = Object.keys(data)
    .filter(k => k !== 'about')
    .map(k => data[k].index)
  return getComponentsMenuItem(menus)
}

export default function ComponentsMenu (props) {
  const { data, defaultSelectedKey } = props
  return (<Menu
    mode={props.mode}
    defaultOpenKeys={['components']}
    selectedKeys={[defaultSelectedKey]}
  >
    <Menu.Item key="about">
      <Link to="/components/about">基本介绍</Link>
    </Menu.Item>
    <Menu.SubMenu key={'components'} title={'组件'}>
      { getComponentsMenuItems(data) }
    </Menu.SubMenu>
  </Menu>)
}
