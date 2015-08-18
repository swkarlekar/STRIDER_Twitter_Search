<!doctype html>
<html lang="en" ng-app="Twitter">
<head>
  <meta charset="utf-8">
  <title><%= title %></title>

	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
  <link rel='stylesheet' href='/stylesheets/TweetList.css' />
	
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.18/angular.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.18/angular-resource.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.18/angular-sanitize.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/masonry/3.1.5/masonry.pkgd.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js"></script>
	<script src="//platform.twitter.com/widgets.js"></script>
	<script src="/javascripts/TweetList.js"></script>

</head>
<body>

	<!-- the root element of the view assigned to the TweetList javascript controller-->
	<div ng-controller="TweetList">

		<div class="row">
			<div class="col-lg-12">
				<h2><img id="twitter-logo" src="images/United_States_Army_Corps.png" />
				<img id="twitter-logo" src="images/Twitter_logo_white.png" /><%= title %></h2>
			</div>
		</div>

		<div id="search-container" class="row">
			<div class="col-lg-3">

				<!-- this form will trigger the getTweets function in the javascript controller on submit -->
				<form class="input-group" ng-submit="getTweets()" >
	  			<span class="input-group-addon">Search:</span>

					<!-- this text input is binded to a variable in the javascript controller -->
				  <input type="text" class="form-control" placeholder="TwitterDev" ng-model="keyword">

					<span class="input-group-btn">
		        <button class="btn btn-default" type="submit">Get Tweets</button>
		      </span>

				</form>
   		</div>
		</div>

		<div class="row clearfix">
			<div class="col-lg-12">

		    	<div id="tweet-list">

		    		<!-- this div will repeat for every tweet object in the array using a template-expanding directive -->
		    		<div ng-repeat="tweet in tweetsResult" class="tweet-item">

		    			<!-- sanitized HTML binding -->
							<div ng-bind-html="tweet.oEmbed.html"></div>

							<!-- binding to Tweet source property -->
							<div class="tweet-details">
								Tweeted from <span ng-bind-html="tweet.source"></span>

								<!-- play around with rendering different Tweet properties -->
								<!-- <p>{{tweet.user.screen_name}}</p> -->
								<!-- <p>{{tweet.text}}</p> -->
							</div>
		    		</div>

		    	</div>

		  </div>
  	</div>

		<div class="row">
			<div class="col-lg-12">

				<!-- this button will trigger the getMoreTweets function in the javascript controller -->
		  	<button type="button" class="load-more-btn btn btn-default" ng-click="getMoreTweets()">Get More Tweets</button>

	  	</div>
	  </div>

	</div>

</body>
</html>
