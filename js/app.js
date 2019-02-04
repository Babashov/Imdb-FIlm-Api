// API Key
const apiKey = '9be27fce';
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

// Select Elements
const filmlerId = document.querySelector('#filmler');







let axtarmaq = document.querySelector('#axtarmaq');

axtarmaq.addEventListener('submit',e => {
	let inputVal = document.querySelector('#metnYazmaq');
console.log()
	e.preventDefault();
	
	

// console.log('submit olundu')


if(inputVal.value.length > 0)
{
	axios.get(`${apiUrl}&s=${inputVal.value}`).then(res=>{

		// for(let i = 0; i < res.data.Search.length; i++)
		// {
		// 	console.log(res.data.Search[i])
		// }
	
		let output = '';
	
		res.data.Search.forEach(d=>{
	
			output += `
	
	
			<div class = "col-md-3">
			<div class = "yaxsi text-center">
				<img src = "${d.Poster}">
				<h5>Test</h5>
				<a onclick="" class="btn btn-primary" href="#">Film Detalları</a>
			</div>
			</div>
	
	
	
	`;
	
	filmlerId.innerHTML = output;
	
			
		})
		
	})
}else{
	console.log('Birden Cox herif yazin')
}


}

)