import React from 'react'
import * as Icons from '@lls/lls-ui/../components/Icon/Icons'

export default function IconList () {
  const items = Object.keys(Icons).map(k => {
    const FIcon = Icons[k]
    const _k = k.match(/([A-Z]?[^A-Z]*)/g).slice(0, -1).map(t => t.toLowerCase()).join('-')
    return (
      <div className="icon-item" key={k}>
        <FIcon />
        <span>{_k}</span>
      </div>
    )
  })
  return (
    <div>
      <h2>图标列表</h2>
      <div className="icon-list">
        {items}
      </div>
    </div>
  )
}
