import React from 'react'
import Link from './Link'

const renderList = linkList => onDelete => {
  if (Object.keys(linkList).length === 0) {
    return (
      <div>nothing to list, click add to add one</div>
    )
  } else {
    return (
      Object.keys(linkList).map(key => {
        const { urlHash } = linkList[key]
        return (
          <Link
            key={key}
            name={key}
            urlHash={urlHash}
            onDelete={name => onDelete(name)}
          />
        )
      })
    )
  }
}

const LinkList = ({ linkList = [], onAdd, onDelete }) => {
  return (
    <div className="ApVoH">

      <div className="r">
        <div className="py pv">
          <h2 className="pw">Quick Links</h2>
        </div>
      </div>

      <div id="listContainer">
        <div className="pt">
          <div className="pn">
            { renderList(linkList)(onDelete) }
          </div>
          <div
            className="QOxrP pU"
            onClick={event => onAdd(event)}>
            Add Quick Link
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkList
