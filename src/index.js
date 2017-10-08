import React, { Component } from 'react'
import { render } from 'react-dom'

import AppContainer from './AppContainer'

import { getGmailLocationToInject } from './config'

const beginReact = accountName => {
  render(
    <AppContainer accountName={accountName}/>,
    document.getElementById('gmailQuickLinksContainer')
  )
}

// there are cases where the gmail left nav panel isn't loaded yet,
// so we need to check for it until it exists before we can proceed
const checkDomElementExist = setInterval(() => {
  if (getGmailLocationToInject()) {
    clearInterval(checkDomElementExist)

    // create a div for our react container to be injected
    const gmailQuickLinksContainer = document.createElement('div')
    gmailQuickLinksContainer.id = "gmailQuickLinksContainer"
    getGmailLocationToInject().append(gmailQuickLinksContainer)

    console.log('Loaded Gmail Quick Links')

    //TODO: what is the person isn't signed in?  Does this crash extension?
    const currentAccountName = document
      .querySelectorAll('a[href*="accounts.google.com"]')[0]
      .title
      .match(/\(([^)]+)\)/)[1]

    //load react
    beginReact(currentAccountName)
  }
}, 200)
