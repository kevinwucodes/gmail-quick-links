import React from 'react'
import Link from './Link'

const style = {
  small: {
    fontSize: "80%"
  },
  quick: {
    cursor: "auto",
    position: "relative",
    overflow: "hidden",
    verticalAlign: "middle",
    outline: "none",
    fontSize: "100%"
  },
  list: {
    textAlign: "left",
    fontSize: "100%",
    background: "none",
    margin: 0,
    textDecoration: "none",
    paddingLeft: 30
  }
}

const renderList = linkList => onDelete => {
  if (Object.keys(linkList).length === 0) {
    return (
      <div className="pU" style={{fontSize:"100%", textAlign:"left", cursor: "auto"}}>
        nothing to list: To add one, enter a gmail search and click "Add Quick Link" to create a quick list
      </div>
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
        <div className="pv" style={style.quick}>
          <h2 className="pw">Quick Links</h2>
        </div>
      </div>

      <div id="listContainer">
        <div className="pt">
          <div className="pn" style={style.list}>
            { renderList(linkList)(onDelete) }
          </div>
          <div
            className="QOxrP pU"
            style={{fontSize:"100%"}}
            onClick={event => onAdd(event)}>
            Add Quick Link
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkList
