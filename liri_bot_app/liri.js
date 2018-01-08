//variables

var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
var keys = require('./keys.js');
var tweetsArray = [];
var input = process.argv[2];
var commandSpecs = process.arg[3];
var movie = 'Forest Gump';
var song = 'Thunder';

var twitterKeys = keys.twitterKeys;
var tmdbKey = keys.tmdbKey;

var client = new Twitter({
  consumer_key: twitterKeys.consumer_key,
  consumer_secret: twitterKeys.consumer_secret,
  access_token_key: twitterKeys.access_token_key,
  access_token_secret: twitterKeys.access_token_secret
});

//input command processing

function command(command, commandSpecs){

	switch(command){

	case 'my-tweets' :
		getTweets();
	case 'spotify-song' :

		if(commandSpecs === undefined){
			commandSpecs = song;
		}
		spotifyThis(commandSpecs);
	
	case 'movie-this':

		if(commandSpecs === undefined){
			commandSpecs = movie;
		}
		movieThis(commandSpecs);
	case 'do-what-it-says' :
		doWhatITsays();
	default:
		console.log('Command not valid.')
	}
}

function getTweets(){

	var specs = {screen-name: "wollenet2", count: 3, trim_user: true};
		client.get('statuses/user_timeline', specs, function(error, tweets, response){
			if (error) {
				tweetsArray = tweets;
			for(i=0; i<tweetsArray.length; i++){
				console.log('created : ' + tweetsArray[i].created_at);
				console.log('Text: ' + tweetsArray[i].text);
			}
			}
			else{
				console.log(error);
			}
		});
}

function spotify(song){

	if(song === ""){
		song = "Thunder";
	}
	spotify.songSearch({type: 'track', query: song}), function(err) {
		if (err) {
			console.log('error occured: ' + err);
			return;
		}
		var song = data.tracks.items[0];
		console.log('artists');
		for(i=0; i<song.artists.length; i++){
			console.log(song.artists[i].name);
		}
		console.log(song.name);
		console.log(zsong.album.name);

	};
}

function movie(movieName){
	console.log(movieName);
	request("https://api.themoviedb.org/3/search/movie?api_key=" + tmdbKey + "&query=" + movieName, function(error, response, body) {
	if(error && response.statusCode) {
		var movie = JSON.parse(body.results[0].id;)

		var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + tmdbKey + "&append_to_response=credits,releases";

		request(queryURL, function(error,response,body) {
			var movie = JSON.parse(body);
		}
	});

	}

function doWhatItSays(){
	fs.readFile('random.txt', 'utf8', function(err, data){
		if(err){
			return console.log(err);
		}
		var dataArr = data.split(',');

		processCommands(dataArr[0], dataArr[1]);
	});
}

