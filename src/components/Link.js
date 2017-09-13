import React from 'react'

const renderGlobeCircle = type => onClickGlobeCircle => {
  return (
    <span
      className={'glyph ' + ((type == 'global') ? 'global' : 'circle')}
      onClick={event => onClickGlobeCircle()}
    />
  )
}

const Link = ({ type, name, urlHash, onClickLink, onDelete, onClickGlobeCircle }) => {
  return (
    <div
      style={{
        paddingBottom: "1px"
      }}
      className="pm">
      <a
        style={{
          color: getComputedStyle(document.getElementsByClassName("pU")[0]).color
        }}
        className="po"
        href={urlHash}
      >
        {name}
      </a>
      <span
        className="glyph delete"
        onClick={event => onDelete()}
      />
      {
        renderGlobeCircle(type)(onClickGlobeCircle)
      }
    </div>
  )
}

export default Link
