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

const start = () => {
  if (document.readyState === "complete") {
    console.info('Loaded Gmail Quick Links')

    // there are cases where the gmail left nav panel isn't loaded yet,
    // so we need to check for it until it exists before we can proceed
    var checkDomElementExist = setInterval(() => {
      if (getGmailLocationToInject()) {
        clearInterval(checkDomElementExist)

        // create a div for our react container to be injected
        const gmailQuickLinksContainer = document.createElement('div')
        gmailQuickLinksContainer.id = "gmailQuickLinksContainer"
        getGmailLocationToInject().append(gmailQuickLinksContainer)

        //load react
        beginReact()
      }
    }, 200)
  }
}

// run when page is ready
document.onreadystatechange = start
