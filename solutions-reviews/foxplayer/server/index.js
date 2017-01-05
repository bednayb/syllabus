'use strict';

var fs = require('fs');
var express = require('express');
var mysql = require('mysql');
var async = require('async');
var meta = require('musicmetadata');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/playlists', function(req, res) {
  	res.send([
  		{id:1,name:'Favorites'},
  		{id:2,name:'Good tracks'},
  		{id:3,name:'Ambient'},
  	]);
});

app.post('/playlists', function(req, res) {
  	res.send(
  		{id:666,name:'Ambient'}
  	);
});

app.get('/tracks', function(req, res) {
	fs.readdir('./tracks', function (err, files) {
		var coll = [];
		async.each(
			files, 
			function (file, callback){
				meta(fs.createReadStream('./tracks/' + file), function (err, metadata) {
					metadata.fileName = file;
					coll.push(metadata);
				 	callback();
				});
			},
			function(){
  				res.send(coll);
			}
		);
	});
});

app.listen(3000, function(){
	console.log('SERVER IS UP AND RUNNIN on port: 3000')
});
