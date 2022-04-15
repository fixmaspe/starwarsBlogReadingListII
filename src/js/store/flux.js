import { useParams } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	
	

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			vehicles:[],
			planets:[],
			person:[],
			singleVehicle:[],
			singlePlanet:[],
			favorites:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
				
			},
			getPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" , {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => {
						//return data;
						let dataGathered = data.results.map((item,index) => {
							return {...item,index:index,type:"people",favorite:false};
						}); 

						setStore({people : dataGathered});
					})
				   
			},
			getPerson: (uid) => {
				const store = getStore();
				console.log("uid on flux" , uid)

				fetch("https://www.swapi.tech/api/people/" + uid, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => {
						//return data;
						let dataGathered = data.result.properties;

						setStore({person : dataGathered});
					})
				   
			},
			
			getVehicles: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => {
						//return data;
						let dataGathered = data.results.map((item,index) => {
							return {...item,index:index,type:"vehicles",favorite:false};
						}); 

						setStore({vehicles : dataGathered});
					})
			},

			getSingleVehicle: (uid) => {
				const store = getStore();
				console.log("uid on flux" , uid)

				fetch("https://www.swapi.tech/api/vehicles/" + uid, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => {
						//return data;
						let dataGathered = data.result.properties;

						setStore({singleVehicle : dataGathered});
					})
				   
			},

			getPlanets: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/", {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => {
						//return data;
						let dataGathered = data.results.map((item,index) => {
							return {...item,index:index,type:"planets",favorite:false};
						}); 

						setStore({planets : dataGathered});
					})
			},

			getSinglePlanet: (uid) => {
				const store = getStore();
				console.log("uid on flux" , uid)

				fetch("https://www.swapi.tech/api/planets/" + uid, {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => {
						//return data;
						let dataGathered = data.result.properties;

						setStore({singlePlanet : dataGathered});
					})
				   
			},

			addToFavorites: ( uid, url, name, type, index) => {
				const store = getStore();

				if(type == "people"){
					store.people[index].favorite = true;
					}
				if(type == "vehicles"){
					store.vehicles[index].favorite = true;
				}
				if(type == "planets"){
					store.planets[index].favorite = true;
				}
				//console.log ("index", index)
				//console.log ("teste", store.vehicles[index].favorite = true)
				
				//console.log("função addtofavorites",store.vehicles.uid)

				let temp = store.favorites;
				
				//push the data to a temp var
				temp.push({"index":index, "uid":uid, "url":url, "name":name,"type":type, "favorite": true})
				
				//filter the temp var for duplicates
				const names = temp.map(o => o.name)
				const filtered = temp.filter(({name}, index) => !names.includes(name, index + 1))

				//console.log(filtered);
				
				setStore({favorites : filtered});

			},
			
			removeFromFavorites: (i) => {

				const store = getStore();
							

				if(i.type == "people"){
					store.people[i.index].favorite = false;
					}
				if(i.type == "vehicles"){
					store.vehicles[i.index].favorite = false;
				}
				if(i.type == "planets"){
					store.planets[i.index].favorite = false;
				}

				let temp = store.favorites;
				
				console.log(i)
				

				

				//console.log("i" , i);

				//temp.splice(i, 1);

				let testeVar = temp.filter((objecto)=>{
					return objecto !== i;
				});
				
				//console.log("testevar", testeVar)
				
				setStore({favorites : testeVar});

			}
		}
	};

	
};

export default getState;
