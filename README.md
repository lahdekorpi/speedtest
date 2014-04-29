speedtest
=========

Tiny JavaScript Internet Connection Speed Test

Usage
-----

```js
var st = new SpeedTest();

st.test({
	onStart: function() {
		console.log("Testing connection speed");
	},
	onEnd: function(results) {
		alert("Speed: " + results.mbps + " Mbps");
		console.log("Test took " + results.time.run + " seconds");
	}
});
```
