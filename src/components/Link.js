import React from 'react'

const Link = ({ name, urlHash, onClickLink, onDelete }) => {
  return (
    <div className="pm">
      <a className="po" href={urlHash}>
        {name}
      </a>
      <span
        className="pl"
        onClick={event => onDelete(name)}>
        x
      </span>
    </div>
  )
}

export default Link
