import React from 'react'
import { Link } from 'react-router'

export default function Cover () {
  return (
    <div className="cover-wrapper">
      <div>
        <Link className="start" to="/articles/start" >快速开始</Link>
        <a href="https://github.com/lili21/bisheng-theme-ui">GitHub</a>
      </div>
    </div>
  )
}
