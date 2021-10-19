// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: magic;
var unirest = require("unirest");

var req = unirest("GET", "https://email-checker.p.rapidapi.com/verify/v1");

req.query({
	"email": "name@example.com"
});

req.headers({
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"x-rapidapi-host": "email-checker.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

fetch("https://email-checker.p.rapidapi.com/verify/v1?email=name%40example.com", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"x-rapidapi-host": "email-checker.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});