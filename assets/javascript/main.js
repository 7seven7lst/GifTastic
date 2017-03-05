$(document).ready(function(){
	renderButtons(topicButtons, $buttonViewsDiv);
	$addTopicButton.on("click", function(event) {
	  event.preventDefault();
	  let topic = $("#topic-input").val().trim();
	  topicButtons.push(topic);
	  renderButtons(topicButtons, $buttonViewsDiv);
	});

	$(document).on("click", ".topic-button", function(){
		let topic = $(this).attr("data-name");
		fetchGiphys(topic, GIPHY_API_BASE_URL, GIPHY_PUBLIC_KEY, GIPHY_QUERY_LIMIT)
		.done(response => {
			destroyCurrentGiphys(giphyViewDiv)
			let data = _.get(response, "data", []);
			_.forEach(data, d=>new GiphyElement(d));
		})
	})
});
