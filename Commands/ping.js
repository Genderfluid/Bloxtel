module.exports = (message) => { // Function with 'message' parameter
	message.channel.send("Pong!").catch(e => console.log(e));
}
