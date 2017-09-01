import React, { Component } from 'react'
import { render } from 'react-dom'

import AppContainer from './AppContainer'

import { getGmailLocationToInject } from './config'

const beginReact = () => {
  render(
    <AppContainer />,
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

    //load react
    beginReact()
  }
}, 200)
