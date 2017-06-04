import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
console.log('Hello World!');

//{"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":7225,"recent":510,"lastUpdate":"2017-05-31T10:27:51.438Z"} - Expected Response Type
// Just setting up global variables here.
var allTimeUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
var last30Days = "https://fcctop100.herokuapp.com/api/fccusers/top/recent"
var allTimeResponse = {}
var recentResponse = {}

function grabData(url, data){
  $.getJSON(url).done(response =>{data = response; console.log(data)})
}
grabData(allTimeUrl, allTimeResponse)
