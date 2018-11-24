import React from 'react'
import Link from './Link'

const style = {
  small: {
    fontSize: '80%'
  },
  quick: {
    cursor: 'auto',
    position: 'relative',
    overflow: 'hidden',
    verticalAlign: 'middle',
    outline: 'none',
    fontSize: '100%'
  },
  list: {
    paddingLeft: 30
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  }
}

const renderList = linkList => accountList => onDelete => onClickGlobeCircle => {
  const _onDelete = (type, key) => () => onDelete(type, key)
  const _onClickGlobeCircle = (type, key) => () => onClickGlobeCircle(type, key)

  if (
    Object.keys(linkList).length === 0 &&
    Object.keys(accountList).length === 0
  ) {
    return (
      <div
        className="n0"
        style={{fontSize: '100%', textAlign: 'left', cursor: 'auto'}}
      >
        nothing to list: To add one, enter a gmail search and click "Add" to
        create a quick list
      </div>
    )
  } else {
    const linksArray = Object.keys(linkList).map(key => {
      const {urlHash} = linkList[key]
      return (
        <Link
          key={key}
          type="global"
          name={key}
          urlHash={urlHash}
          onDelete={_onDelete('global', key)}
          onClickGlobeCircle={_onClickGlobeCircle('global', key)}
        />
      )
    })

    const accountArray = Object.keys(accountList).map(key => {
      const {urlHash} = accountList[key]
      return (
        <Link
          key={key}
          type="account"
          name={key}
          urlHash={urlHash}
          onDelete={_onDelete('account', key)}
          onClickGlobeCircle={_onClickGlobeCircle('account', key)}
        />
      )
    })

    return linksArray.concat(accountArray)
  }
}

const displayHelp = () => {
  const message = `
To use Quick Links:

1) perform a gmail search
2) click on "Add" to give a name for that search

By default, all quick links are specific to the account where they were created.  If you have multiple gmail accounts logged in simultaneously, creating a quick link would only be visible for that account.

You may choose to have quick links available for multiple gmail accounts by clicking on the yellow sphere which then toggles to a globe icon.  A quick link with a globe icon will now show up in every gmail account you are logged in.  Clicking on the globe again will change that quick link back to a specific account quick link.

If you do not have multiple gmail accounts, toggling between the yellow sphere and the globe does nothing.
`
  alert(message)
}

const LinkList = ({
  linkList = {},
  accountList = {},
  onAdd,
  onDelete,
  onClickGlobeCircle
}) => {
  return (
    <div>
      <div className="r" style={style.titleContainer}>
        <div style={style.quick}>
          <span
            className="glyph info"
            title="info/help"
            onClick={displayHelp}
          />
          <h2 className="pw">Quick Links</h2>
        </div>
        <div
          className="n0"
          style={{textDecoration: 'underline'}}
          title="Add Quick Link"
          onClick={event => onAdd(event)}
        >
          Add Quick Link
        </div>
      </div>

      <div id="listContainer" style={{paddingBottom: '10px'}}>
        <div style={style.list}>
          {renderList(linkList)(accountList)(onDelete)(onClickGlobeCircle)}
        </div>
      </div>
    </div>
  )
}

export default LinkList
