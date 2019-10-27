import React from 'react'

const renderGlobeCircle = type => onClickGlobeCircle => {
  return (
    <span
      className={'glyph ' + (type == 'global' ? 'global' : 'circle')}
      title="toggle global/single"
      onClick={event => onClickGlobeCircle()}
    />
  )
}

const Link = ({
  type,
  name,
  urlHash,
  onClickLink,
  onDelete,
  onRename,
  onClickGlobeCircle
}) => {
  return (
    <div>
      <a
        style={{textDecoration: 'underline'}}
        className="n0"
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
      <span
        className="glyph rename"
        title="rename"
        onClick={event => onRename()}
      />
      {renderGlobeCircle(type)(onClickGlobeCircle)}
      <div className="clear" />
    </div>
  )
}

export default Link
