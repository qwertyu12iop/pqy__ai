document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    changeColorButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0].id) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "changeBackgroundColor"}, 
                    () => chrome.runtime.lastError); // 处理连接错误
            }
        });
    });
});