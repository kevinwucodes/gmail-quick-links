console.log('background page loaded from quick links')

// chrome.identity.getProfileUserInfo(function(userInfo) {
//   console.log('userInfo', userInfo)
// })

const messageListener = (message, sender, sendResponse) => {
  // console.log('onMessage message', message);
  // console.log('onMessage sender', sender);

  if (message.query === 'getProfileUserInfo') {
    // chrome.identity.getProfileUserInfo(userInfo => {
    //   sendResponse(userInfo)
    // })
    chrome.identity.getAccounts(accountInfo => {
      sendResponse(accountInfo)
    })
  }

  return true // this function must return true to be async required by Chrome
}

chrome.runtime.onMessage.addListener(messageListener)
