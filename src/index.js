import React, { Component } from 'react'
import { render } from 'react-dom'

import AppContainer from './AppContainer'

import { getGmailLocationToInject, widgetInsidePanel } from './config'

const GMAIL_QUICK_LINKS_CONTAINER = 'gmailQuickLinksContainer'

const beginReact = accountName => location => {
  render(
    <AppContainer accountName={accountName} location={location} />,
    document.getElementById(GMAIL_QUICK_LINKS_CONTAINER)
  )
}

const injectReact = location => {
  // create a div for our react container to be injected
  const gmailQuickLinksContainer = document.createElement('div')
  gmailQuickLinksContainer.id = GMAIL_QUICK_LINKS_CONTAINER

  if (location === 'widget') {
    widgetInsidePanel().append(gmailQuickLinksContainer)
  } else {
    getGmailLocationToInject().append(gmailQuickLinksContainer)
  }

  console.log('Loaded Gmail Quick Links')

  //TODO: what is the person isn't signed in?  Does this crash extension?
  const currentAccountName = document
    .querySelectorAll('a[href*="accounts.google.com"]')[0]
    .title.match(/\(([^)]+)\)/)[1]

  //load react
  beginReact(currentAccountName)(location)
}

const checkWidgetPanel = untilStop => {
  const startTime = new Date().getTime()

  const intervalId = setInterval(() => {
    console.log('inside check widget panel')

    if (new Date().getTime() - startTime > untilStop * 1000) {
      clearInterval(intervalId)
    }

    if (widgetInsidePanel()) {
      clearInterval(intervalId)

      console.log('unloading Gmail Quick Links due to presense of widget panel')
      document.getElementById(GMAIL_QUICK_LINKS_CONTAINER).remove()

      injectReact('widget')
    }
  }, 500)
}

// there are cases where the gmail left nav panel isn't loaded yet,
// so we need to check for it until it exists before we can proceed
const checkDomElementExist = setInterval(() => {
  if (getGmailLocationToInject()) {
    clearInterval(checkDomElementExist)

    //check the presense of a widget panel for 20 seconds, then stop checking
    checkWidgetPanel(20)

    injectReact()
  }
}, 200)
