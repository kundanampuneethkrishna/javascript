function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}

		})
	})
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	basic1(data.details1)
    
})
var child1 = document.querySelector(".child1");
function basic(det){

	var image = document.createElement("img");
	image.src="profile.png";
	child1.appendChild(image);

	var name = document.createElement("h4");
	name.textContent=det.name;
	child1.appendChild(name);

    var rollno = document.createElement("h4");
	rollno.textContent=det.rollno;
	child1.appendChild(rollno);

	var link = document.createElement("a");
	link.href="https://kundanampuneethkrishna.github.io/React-Bootstrap/navbar.html";
	link.textContent=det.link;
	child1.appendChild(link);
}
    var child2 = document.querySelector(".child2");
    function basic1(det1){

    var image = document.createElement("img");
	image.src="profile.png";
	child2.appendChild(image);

	var name = document.createElement("h4");
	name.textContent=det1.name;
	child2.appendChild(name);

    var rollno = document.createElement("h4");
	rollno.textContent=det1.rollno;
	child2.appendChild(rollno);

	var link = document.createElement("a");
	link.href="https://kundanampuneethkrishna.github.io/javascript/project/index.html";
	link.textContent=det1.link;
	child2.appendChild(link);
}