// content.js
chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        // Look for the Set-Cookie header in the response headers
        for (var i = 0; i < details.responseHeaders.length; ++i) {
            var header = details.responseHeaders[i];
            if (header.name.toLowerCase() == 'set-cookie') {
                // Generate a random value for the cookie
                var value = Math.random().toString(36).substring(2);
                // Create a new cookie with the generated value
                var cookie = {
                    name: header.value.split('=')[0], // Extract the cookie name
                    value: value,
                    domain: details.url.split('/')[2], // Extract the domain name
                    path: '/',
                    httpOnly: false,
                    secure: false,
                    expirationDate: (new Date().getTime() / 1000) + (60 * 60 * 24 * 365) // Set the expiration date to one year from now
                };
                // Set the new cookie
                chrome.cookies.set(cookie);
            }
        }
    },
    { urls: ['<all_urls>'] },
    ['responseHeaders']
);