class GiphyElement {
	constructor(d){
		this.stillImgLink = _.get(d,"images.fixed_width_still.url", _.get(d, "images.original_still.url", null));
		this.giphyImgLink = _.get(d,"images.fixed_width.url", _.get(d, "images.original.url", null));
		this.currentImgLink = this.stillImgLink;
		this.$imgDom= this.appendToDom(giphyViewDiv);
		this.$imgDom.on("click", function(){
			this.toggleLink();
		}.bind(this))
	}

	appendToDom($target){
		let $imgDom = $("<img>");
		$imgDom.attr({src: this.currentImgLink});
		$target.append($imgDom);
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
