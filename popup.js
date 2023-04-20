// popup.js
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('generate-cookie');
    button.addEventListener('click', function () {
        alert('Generating cookie...');
        chrome.runtime.sendMessage({ action: 'generateCookie' }, function (response) {
            alert('Cookie generated!');
        });
    });
});