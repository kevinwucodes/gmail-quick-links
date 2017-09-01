export const GMAIL_QUICK_LINKS_NAME = {
  name: "Gmail Quick Links",
  divId: "gmailQuickLinks",
  version: "0.1.0"
}

// this should come out of chrome.storage apis
//TODO: how do we sync this in firefox?
export const storage = chrome.storage

export const getGmailLocationToInject = () => {
  // where we want to put the search quick links
  // this has be be defined after the page loads and becomes ready
  return document.querySelector("div.wT")
}

export const getQuickLinks = callback => {
  storage.sync.get(null, callback)
}

//TODO: we need to check for chrome.runtime errors, promisify everything?
export const addQuickLink = ({ name, urlHash }) => {
  getQuickLinks(item => {
    storage.sync.set({
      linkList: {
        ...item.linkList,
        [name]: {
          urlHash
        }
      }
    })
  })
}

export const removeLink = name => {
  getQuickLinks(item => {
    // removes the 'name' ES7 style!
    const { [name]: deleted, ...links } = item.linkList
    storage.sync.set({
      linkList: links
    })
  })
}
