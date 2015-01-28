(function() {
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
		this.goat = function(mode) {
			if(!mode) {
				this.mentions.map(function(){ this.innerText = this.innerText.replace("unixrab","g04t"); });
			} else {
				this.mentions.map(function(){ this.innerText = this.innerText.replace("g04t","unixrab"); });
			}
		};
		this.all = function() {
			this.hide();
			this.goat();
		}
		this.off = function() {
			this.show();
			this.goat(true);
		}
	};
	
	window.rabigone = new rabigone();
	window.rabigone.all();
})();
