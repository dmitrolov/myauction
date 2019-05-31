function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function log() {
	console.log(arguments);
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