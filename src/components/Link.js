import React from 'react'

const renderGlobeCircle = type => onClickGlobeCircle => {
  return (
    <span
      className={'glyph ' + ((type == 'global') ? 'global' : 'circle')}
      title="toggle global/single"
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
        title={urlHash}
        href={urlHash}
      >
        {name}
      </a>
      <span
        className="glyph delete"
        title="delete"
        onClick={event => onDelete()}
      />
      {
        renderGlobeCircle(type)(onClickGlobeCircle)
      }
      <div className="clear"></div>
    </div>
  )
}

export default Link
