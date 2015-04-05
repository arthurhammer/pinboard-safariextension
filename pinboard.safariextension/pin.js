safari.self.addEventListener("message", function(event) {
    // - Avoid iframes, e.g. embedded YouTube videos. Scripts are injected into
    //   iframes as well.
    // - Avoid hidden documents. In Safari, they might represent pages that are
    //   preloaded e.g. when entering search queries into the navigation bar.
    if (event.name !== "pin" || window.top !== window || document.hidden) {
        return;
    }

    // getSelection() returns a Selection object not a string
    var selection = document.getSelection().toString().trim();
    var settings = event.message;

    if (settings && settings['quoteSelection'] && selection !== "") {
        // 'replace' takes regular expressions, syntax: /pattern/flags
        //  'g': matches globally, i.e. continues after first match
        selection = "> " + selection.replace(/\n/g, "\n> ");
    }

    location.href = "https://pinboard.in/add?next=same"
        + "&url=" + encodeURIComponent(location.href)
        + "&title=" + encodeURIComponent(document.title)
        + "&description=" + encodeURIComponent(selection);
});
