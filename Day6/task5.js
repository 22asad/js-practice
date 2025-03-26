// Fetch Api
async function fetchUsers(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let user = await response.json();
        console.log(user);
    }catch(error)
    {
        console.error("Error fetching users",error);
    }
}
fetchUsers();