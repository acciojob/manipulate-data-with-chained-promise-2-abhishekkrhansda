//your JS code here. If required.
let output = document.querySelector("#output");

let arr =[1,2,3,4];

let initial = ((arr) =>{

	return new Promise((resolve,reject) =>{
			resolve(arr);
	})
})



initial(arr)
.then((res) =>{
	return first(res);
})
.then((res) =>{
	output.innerText = res;
	return second(res);
})
.then((res) =>{
	output.innerText = res;
})
.catch((err) =>{
	console.log(err);
})



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

let second = ((even) =>{

	return new Promise((resolve,reject) =>{
        let mul = [];
		setTimeout(()=>{
			for(let i=0;i<even.length;i++){
				mul.push(even[i]*2);
			}

		 resolve(mul);
			
		},2000)
	})
})

