function makeid(l) {
  // write your code here
	let chars=
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let res=""

	for(let i=0;i<l;i++){
		let randomeindex=Math.floor(Math.random()*chars.length)
		res+=chars[randomeindex]
	}
	return res
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
