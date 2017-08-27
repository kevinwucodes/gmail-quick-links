import React from 'react'
import LinkList from './components/LinkList'

import {
  storage,
  getQuickLinks,
  addQuickLink,
  removeLink,
  GMAIL_QUICK_LINKS_NAME
} from './config'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.buildList = this.buildList.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.state = {
      name: "",
      version: "",
      linkList: {}
    }
  }

  buildList(gql) {
    const {
      name = GMAIL_QUICK_LINKS_NAME.name,
      version = GMAIL_QUICK_LINKS_NAME.version,
      linkList = []
    } = gql

    this.setState((prevState, props) => {
      return {
        name,
        version,
        linkList
      }
    })
  }

  onAdd(event) {
    event.preventDefault()
    //TODO: do we use location.hash?  or something else?
    const urlHash = location.hash
    const name = prompt(`Enter title for current view [${urlHash.substring(1)}]`, urlHash.substring(1))

    if (name) {
      addQuickLink({
        name,
        urlHash
      })
    }
  }

  componentWillMount() {
    // when the storage changes, we should update the list
    storage.onChanged.addListener((changes, areaName) => {
      getQuickLinks(this.buildList)
    })
  }

  componentDidMount() {
    getQuickLinks(this.buildList)
  }

  render() {
    const { linkList } = this.state
    return (
      <div id={GMAIL_QUICK_LINKS_NAME.divId}>
        <LinkList
          linkList={linkList}
          onAdd={this.onAdd}
          onDelete={name => removeLink(name)}
        />
      </div>
    )
  }
}

export default AppContainer
