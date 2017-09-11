export const GMAIL_QUICK_LINKS_NAME = {
  name: "Gmail Quick Links",
  divId: "gmailQuickLinks",
  version: "0.1.1"
}

// this should come out of chrome.storage apis
//TODO: how do we sync this in firefox?
export const storage = chrome.storage

export const getGmailLocationToInject = () => {
  // where we want to put the search quick links
  // this has be be defined after the page loads and becomes ready
  return document.querySelector("div.wT")
}

/*
the storage looks something like this:

{
  // this is global for all accounts, universal linkList
  linkList: {
    'unread': {
      urlHash: "#search/label%3Aunread+label%3Ainbox"
    }
  },

  // these are specific to each account, with each account having own linkList
  accountList: {
    'home_account@example.com': {
      family: {
        urlHash: "from:sister OR from:mom"
      },
      friends: {
        urlHash: "from:bestfriend1 OR from:bestfriend2"
    }
    },
    'work_account@example.com': {
      tps: {
        urlHash: "#search/tpsReports"
      },
      boss: {
        urlHash: "from:boss@company.com"
      }
    }
  }
}
*/


export const getQuickLinks = callback => {
  storage.sync.get(null, callback)
}

//TODO: we need to check for chrome.runtime errors, promisify everything?
export const addQuickLink = (accountName, name, urlHash ) => {
  getQuickLinks(dataset => {
    // does the accountName already exist?
    if (dataset.accountList && dataset.accountList[accountName]) {
      // yes, then just add another property to the existing accountName
      storage.sync.set({
        accountList: {
          ...dataset.accountList,
          [accountName]: {
            ...dataset.accountList[accountName],
            [name]: {
              urlHash
            }
          }
        }
      })
    } else {
      // no, create the accountName and add the first property
      storage.sync.set({
        accountList: {
          ...dataset.accountList,
          [accountName]: {
            [name]: {
              urlHash
            }
          }
        }
      })
    }
  })
}

export const removeLink = (accountName, name) => {
  getQuickLinks(dataset => {

    // removes the 'name' ES7 style!
    const { [name]: deleted, ...links } = dataset.accountList[accountName]

    storage.sync.set({
      accountList: {
        ...dataset.accountList,
        [accountName]: links
      }
    })
  })
}
