fetch('http://cangdu.org:8001/v1/cities?type=hot', {
	method : 'GET',
	headers: {
		"Content-Type": "application/json"
	}
})
.then(response => response.json())
.then(res => {
	console.log(res)
})
