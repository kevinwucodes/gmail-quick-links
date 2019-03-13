import React, {Component} from 'react'
import {render} from 'react-dom'

import AppContainer from './AppContainer'

import {
  getGmailLocationToInject,
  gmailAccountName,
  widgetInsidePanel,
  labelControlsContainer
} from './gmailNodes'

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
    labelControlsContainer().insertAdjacentElement(
      'beforebegin',
      gmailQuickLinksContainer
    )
  }

  console.log('Loaded Gmail Quick Links')

  //TODO: what is the person isn't signed in?  Does this crash extension?

  //load react
  beginReact(gmailAccountName())(location)
}

const checkWidgetPanel = untilStop => {
  const startTime = new Date().getTime()

  const intervalId = setInterval(() => {
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

    //TODO: if hamburger menu is collapsed, then remove quick links, else show
    // //add event listener to hamburger menu if it exists
    // if (hambugerMenuContainer()) {
    //   document
    //     .getElementsByClassName('gb_jc')[0]
    //     .addEventListener('click', () => {
    //       if (gmailControlsContainer().offsetWidth < 100) {
    //         document.getElementById(GMAIL_QUICK_LINKS_CONTAINER) &&
    //           document.getElementById(GMAIL_QUICK_LINKS_CONTAINER).remove()
    //       } else {
    //         document.getElementById(GMAIL_QUICK_LINKS_CONTAINER) &&
    //           document.getElementById(GMAIL_QUICK_LINKS_CONTAINER).remove()
    //         injectReact()
    //       }
    //     })
    // }

    //check the presense of a widget panel for 20 seconds, then stop checking
    checkWidgetPanel(20)

    injectReact()
  }
}, 200)
