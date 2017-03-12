class GiphyElement {
	constructor(d){
		this.stillImgLink = _.get(d,"images.fixed_height_still.url", _.get(d, "images.original_still.url", null));
		this.giphyImgLink = _.get(d,"images.fixed_height.url", _.get(d, "images.original.url", null));
		this.imgRating = _.get(d, "rating");
		this.currentImgLink = this.stillImgLink;
		this.$imgDom= this.appendToDom($giphyViewDiv);
		this.$imgDom.on("click", function(){
			this.toggleLink();
		}.bind(this))
	}

	appendToDom($target){
		let $imgContainerDom = $("<div>").attr({class: "col-lg-3 col-md-3 col-sm-4 col-xs-6 giphy-img-container"})
		let $imgDom = $("<img>").attr({src: this.currentImgLink, class: "giphy-img"});
		let $imgRatingDom = $("<div>").attr({class:"giphy-img-rating"}).text(`Rating: ${this.imgRating}`);
		$imgContainerDom.append($imgDom, $imgRatingDom);
		$target.append($imgContainerDom);
		return $imgDom;
	}

	toggleLink(){
		if (this.currentImgLink === this.stillImgLink){
			this.currentImgLink = this.giphyImgLink;
		} else {
			this.currentImgLink = this.stillImgLink;
		}
		this.$imgDom.attr({src: this.currentImgLink});
	}
}
