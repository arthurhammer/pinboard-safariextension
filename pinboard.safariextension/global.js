safari.application.addEventListener("command", function(event) {
    if (event.command === "pinboardButton") {
        var settings = {quoteSelection: safari.extension.settings.quoteSelection};
        event.target.browserWindow.activeTab.page.dispatchMessage("pin", settings);
    }
}, false);

safari.application.addEventListener("validate", function(event) {
    if (event.command === "pinboardButton") {
        event.target.disabled = ! safari.application.activeBrowserWindow.activeTab.url;
    }
}, false);
