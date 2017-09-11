import React from 'react'

const Link = ({ type, name, urlHash, onClickLink, onDelete }) => {
  return (
    <div className="pm">
      <a
        style={{
          color: getComputedStyle(document.getElementsByClassName("pU")[0]).color
        }}
        className="po"
        href={urlHash}
      >
        {
          (type === "global")
            ? 'g - ' + name
            : name
        }
      </a>
      <span
        className="pl"
        style={{
          float: "right",
          cursor: "pointer",
          color: getComputedStyle(document.getElementsByClassName("pU")[0]).color
        }}
        onClick={event => onDelete(name)}>
        x
      </span>
    </div>
  )
}

export default Link
