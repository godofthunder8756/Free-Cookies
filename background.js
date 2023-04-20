// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'generateCookie') {
        // Generate a random value for the cookie
        var value = Math.random().toString(36).substring(2);
        // Create a new cookie with the generated value
        var cookie = {
            name: 'test_cookie',
            value: value,
            domain: sender.tab.url.split('/')[2], // Extract the domain name
            path: '/',
            httpOnly: false,
            secure: false,
            expirationDate: (new Date().getTime() / 1000 * + (60 * 60 * 24 * 365) // Set the expiration date to one year from now
    };
        // Set the new cookie
        chrome.cookies.set(cookie);
        sendResponse({ message: 'Cookie generated!' });
    }
});