first of all we defined out route in api folder under users route.js where we fetched the data from utils folders and gets all the data and then im 
[id] folder we have another router where we are filtering the data with respect to id the id given in the route like /api/users/33 this 33 will be stored in res.params.id and by using this we will filter the id matched with user id.
then we create get users page.js we are fetching api of backend and then calling that stored them and map that. then we add [userid] and here we will have the id added on /api/users/33 will be stored on params. we will simply get that from there and pass that to our function to get that.