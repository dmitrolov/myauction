function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function log() {
	console.log(arguments);
}
function timeFormat(date) {
  var options = {
    //era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    //timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  //log(date);
  return date.toLocaleString("en-US", options);
}
function compare( a, b ) {
  if ( a < b ){
    return -1;
  }
  if ( a > b ){
    return 1;
  }
  return 0;
}