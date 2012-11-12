google.load("search", "1", {
    "nocss" : true,
    "nooldnames" : true,
    "language": $("html").attr("lang")
});

$(function() {
    // Place branding
    google.search.Search.getBranding($("#site-search-gg")[0]);
    google.search.Search.getBranding($("#google-branding")[0]);

    // Replace site-search URL with local URL
    $('#site-search').attr('action', $('#site-search').data('url'));
    $('#site-search input[name=sitesearch]').remove();

    // Run a Google Search through the API
    var $sr = $('#search-results'),
        query = getURLParameter('q');
    if (!$sr.length || !query)
        return;

    // branding and query
    $('#sr > h1').text(
        $('#sr > h1').text().replace(/\".*\"/, '"' + query + '"'));
    $('title').text($('title').text().replace(/\".*\"/, '"' + query + '"'));
    $('#q').val(query);

    // restrict to this site only
    var siteSearch = new google.search.WebSearch();
    siteSearch.setUserDefinedLabel("");
    siteSearch.setSiteRestriction("fredericiana.com");
    siteSearch.setLinkTarget(google.search.Search.LINK_TARGET_SELF);
    siteSearch.clearResults();

    var done = function() {
        for (i in siteSearch.results) {
            $sr.append(siteSearch.results[i].html);
        }

        var cursor = siteSearch.cursor;
        if (!cursor && siteSearch.results.length == 0) {
            $sr.html("<p>No results found.</p>");
        } else if (cursor.currentPageIndex < cursor.pages.length - 1) {
            // this is recursive. google.search will re-call its callback, i.e.
            // this function when it gets the next page of result.
            siteSearch.gotoPage(cursor.currentPageIndex + 1);
        }
    }

    // run search
    siteSearch.setSearchCompleteCallback(null, done);
    siteSearch.execute(query);
});

function getURLParameter(name) {
    return decodeURIComponent(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [,null])[1]
    ).replace('+', ' ');
}
