
var url = 'https://api.coinmarketcap.com/v1/ticker/unitus/';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
  var status = xhr.status;
  if (status === 200) {
    var response = xhr.response[0];
    document.getElementById('btcprice').innerHTML = Sanitizer.unwrapSafeHTML(response.price_btc + ' BTC');
    document.getElementById('usdprice').innerHTML = Sanitizer.unwrapSafeHTML(response.price_usd + ' USD');
    document.getElementById('marketcap').innerHTML = Sanitizer.unwrapSafeHTML(response.market_cap_usd + ' USD');
    document.getElementById('1percentage').innerHTML = Sanitizer.unwrapSafeHTML(response.percent_change_1h + '%');
    document.getElementById('24percentage').innerHTML = Sanitizer.unwrapSafeHTML(response.percent_change_24h + '%');
    document.getElementById('7dpercentage').innerHTML = Sanitizer.unwrapSafeHTML(response.percent_change_7d + '%');
    
  } else {
    console.log (response);
  }
};
xhr.send();


var anchors = document.querySelectorAll('a');

for (var i = 0; i <= anchors.length; anchors++) {
  anchors[i].addEventListener('click', function (e){
    e.preventDefault();
    browser.tabs.create({
      url: this.href
    });
  });

}