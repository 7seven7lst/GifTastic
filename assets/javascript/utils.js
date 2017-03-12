const renderButtons = (buttonData, $target) => {
	$target.empty();
	_.forEach(buttonData, b=>{
		let $button = $("<button>");
		$button.attr({"class": "btn btn-info col-lg-2 col-sm-3 col-xs-4 giphy-button topic-button", "data-name": b});
		$button.text(b);
		$target.append($button);
	})
}

const fetchGiphys = (topic, GIPHY_API_BASE_URL, GIPHY_PUBLIC_KEY, GIPHY_QUERY_LIMIT) => {
	return $.ajax({
		method: "GET",
		url: `${GIPHY_API_BASE_URL}/search`,
		data: {
			q: topic, 
			rating: GIPHY_RATING,
			limit: GIPHY_QUERY_LIMIT,
			api_key: GIPHY_PUBLIC_KEY
		}
	})
	.fail(error => {
		console.log("error is >>>", _.get(error,"responseJSON.meta", {}));
		throw("Error fetching giphys from Giphy API ", _.get(error,"responseJSON.meta.status", null));
	})
}

const destroyCurrentGiphys = $target => ($target.empty());
