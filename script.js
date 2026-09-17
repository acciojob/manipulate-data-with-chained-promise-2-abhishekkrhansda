//your JS code here. If required.
let output = document.querySelector("#output");

let arr =[1,2,3,4];

let first = ((arr) =>{

	return new Promise((resolve,reject) =>{
        let even = [];
		setTimeout(() =>{
         for(let i=0;i<arr.length;i++){
			if(arr[i] % 2 == 0){
				even.push(arr[i]);
			}
		 }

			resolve(even);
		},1000)
	})
})



first(arr)
.then((response) =>{
	output.innerText = response;
	return second(response);
})
.then((response) =>{
	output.innerText = response;
})
.catch((err) =>{
	console.log(err);
})

let second = ((even) =>{

	return new Promise((resolve,reject) =>{
        let mul = [];
		setTimeout(()=>{
			for(let i=0;i<even.length;i++){
				mul.push(even[i]*2);
			}

		 resolve(mul);
			
		},3000)
	})
})

