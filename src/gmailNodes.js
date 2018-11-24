const getGmailLocationToInject = () => {
  // where we want to put the search quick links
  // this has be be defined after the page loads and becomes ready
  return document.querySelector('div.wT')
}

//inside gmail controls container - contains labels such as inbox/starred/drafts/etc
const labelControlsContainer = () =>
  document.getElementsByClassName('ajl aib aZ6')[0]

const widgetMainPanel = () => document.querySelector('div.akc.aZ6')

const widgetInsidePanel = () => document.querySelector('div.T0.pp.saH2Ef')

const gmailSideBar = () => document.querySelector('div.nH.oy8Mbf.nn.aeN')
const gmailHoverSideBar = () =>
  document.querySelector('div.nH.oy8Mbf.nn.aeN.bhZ.bym')

export {
  gmailSideBar,
  gmailHoverSideBar,
  getGmailLocationToInject,
  widgetInsidePanel,
  labelControlsContainer
}
