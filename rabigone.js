function rabigone() {
	this.posts = $("a.p-nickname[href^='/@unixrab']");
	this.replies = this.posts.closest(".reply");
	this.comments = this.posts.closest(".comment");
	this.mentions = $("*:contains('unixrab'):not(:has(:contains('unixrab')))"),
	this.hide = function() {
		this.replies.hide();
		this.comments.hide();
	};
	this.show = function() {
		this.replies.show();
		this.comments.show();
	};
	this.goat = function() {
		this.mentions.map(function(){ this.innerText = this.innerText.replace("unixrab","goat"); });
	};
	this.all = function() {
		this.hide();
		this.goat();
	}
};
