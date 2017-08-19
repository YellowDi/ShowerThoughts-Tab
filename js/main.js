var successQuote = false

updateQuote = function(quote, author, source, url) {
	$("p.quote").text(quote)
	$("span.author").text(author)
	if ( source != "") {
		$("span.source").css('display','inline')
		$("a.source-link").text(source)
		$("a.source-link").attr('href',url)
	}
}

var localQuote = function() {
	$.getJSON('./json/quotes.json', function(data) {
		var x = Math.round(Math.random()*(data.length-1))
		var author = data[x][0]
		var quote = data[x][1]
		var source = data[x][2]
		var url = data[x][3]
		updateQuote(quote, author, source, url)
	})
}

setTimeout(function() {
    if ( !successQuote ){
    	localQuote()
        console.log("Load Local Quote")
    }
}, 700)

$(window).load(function() {
	liveCheck()
})
