function getJSON(callback) {
  var url = 'https://api.coinmarketcap.com/v1/ticker/unitus/';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      var response = xhr.response;
      chrome.browserAction.setBadgeBackgroundColor({color: "green"});
      chrome.browserAction.setBadgeText({text: response[0].price_usd});
      chrome.browserAction.setTitle({title: "1 UIS = " +response[0].price_usd + " USD"});
    } else {
      chrome.browserAction.setBadgeText({text: 'NaN'});
      chrome.browserAction.setBadgeBackgroundColor({color: "red"});
      chrome.browserAction.setTitle({title: response[0].price_usd});

    }
  };
  xhr.send();
};


setInterval(function() {
  getJSON();
}, 6000);
