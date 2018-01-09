import React from 'react'
import { Link } from 'react-router'

export default function Header (props) {
  const route = props.route
  let path = ''
  if (route && route.path) {
    path = route.path
  }
  return (
    <header id="header">
      <div className="header-inner">
        <h2>Bisheng-Theme-UI</h2>
        <ul>
          <li><Link to="/"><span>首页</span></Link></li>
          <li><Link className={path.indexOf('articles') === -1 ? '' : 'current'} to="/articles/start">
            <span>快速开始</span></Link>
          </li>
          <li><Link className={path.indexOf('components') === -1 ? '' : 'current'} to="/components/about">
            <span>组件</span></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
