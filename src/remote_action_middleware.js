export default socket => store => next => action => {
	console.log('inside middleware', action);
	if (action.meta && action.meta.remote) {
		socket.emit('action', action);		
	}
	return next(action);
}

// Above is the same as writing ... 
// export default function(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }