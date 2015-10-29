safari.self.addEventListener("message", function(event) {
    if (event.name !== "pin" || window.top !== window || document.hidden) {
        return;
    }

    // `getSelection()` returns a Selection object not a string
    var selection = document.getSelection().toString().trim();
    var settings = event.message;

    if (settings && settings.quoteSelection && selection !== "") {
        selection = "> " + selection.replace(/\n/g, "\n> ");
    }

    location.href = "https://pinboard.in/add?next=same" +
        "&url=" + encodeURIComponent(location.href) +
        "&title=" + encodeURIComponent(document.title) +
        "&description=" + encodeURIComponent(selection);
});
