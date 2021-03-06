const getGmailLocationToInject = () => {
  const node = document.querySelector('div.wT')
  const isFound = node ? true : false
  console.log(`GQL:getGmailLocationToInject = ${isFound.toString()}`)
  // where we want to put the search quick links
  // this has be be defined after the page loads and becomes ready
  return node
}

const gmailAccountName = () => {
  const node = Array.from(document.querySelectorAll('a[aria-label]'))
    .map(n => n.attributes['aria-label'].nodeValue)
    .find(t => /\(.+@.+\)/.test(t))
    .match(/\((.+@.+)\)/)[1]
  const isFound = node ? true : false
  console.log(`GQL:gmailAccountName = ${isFound.toString()} "${node}"`)
  return node
}

//inside gmail controls container - contains labels such as inbox/starred/drafts/etc
const labelControlsContainer = () => {
  const node = document.getElementsByClassName('ajl aib aZ6')[0]
  const isFound = node ? true : false
  console.log(`GQL:labelControlsContainer = ${isFound.toString()}`)
  return node
}

const widgetMainPanel = () => {
  const node = document.querySelector('div.akc.aZ6')
  const isFound = node ? true : false
  console.log(`GQL:widgetMainPanel = ${isFound.toString()}`)  
  return node
}

const widgetInsidePanel = () => {
  const node = document.querySelector('div.T0.pp.saH2Ef')
  const isFound = node ? true : false
  console.log(`GQL:widgetInsidePanel = ${isFound.toString()}`)  
  return node
}

const gmailSideBar = () => {
  const node = document.querySelector('div.nH.oy8Mbf.nn.aeN')
  const isFound = node ? true : false
  console.log(`GQL:gmailSideBar = ${isFound.toString()}`)  
  return node
}

const gmailHoverSideBar = () => {
  const node = document.querySelector('div.nH.oy8Mbf.nn.aeN.bhZ.bym')
  const isFound = node ? true : false
  console.log(`GQL:gmailHoverSideBar = ${isFound.toString()}`)  
  return node
}

const quickLinksContainer = () => {
  const node = document.querySelector('#gmailQuickLinksContainer')
  const isFound = node ? true : false
  console.log(`GQL:quickLinksContainer = ${isFound.toString()}`)  
  return node
}

export {
  gmailSideBar,
  gmailHoverSideBar,
  getGmailLocationToInject,
  gmailAccountName,
  widgetInsidePanel,
  labelControlsContainer,
  quickLinksContainer
}
