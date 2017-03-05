let renderButtons = (buttonData, $target) => {
	$target.empty();
	_.forEach(buttonData, b=>{
		let $button = $("<button>");
		$button.attr({"class": "topic-button", "data-name": b});
		$button.text(b);
		$target.append($button);
	})
}

let fetchGiphys = (topic, GIPHY_API_BASE_URL, GIPHY_PUBLIC_KEY, GIPHY_QUERY_LIMIT) => {
	return $.ajax({
		method: "GET",
		url: `${GIPHY_API_BASE_URL}/search`,
		data: {
			q: topic, 
			limit: GIPHY_QUERY_LIMIT,
			api_key: GIPHY_PUBLIC_KEY
		}
	})
	.fail(error => {
		console.log("error is >>>", _.get(error,"responseJSON.meta", {}));
		throw("Error fetching giphys from Giphy API ", _.get(error,"responseJSON.meta.status", null));
	})
}

let destroyCurrentGiphys = $target => ($target.empty());
