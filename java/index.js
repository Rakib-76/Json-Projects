const loadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    displayUser(data);
})
}
const displayUser = (users) =>{
    const userContainer = document.getElementById("users")
    for(let i=0; i< users.length; i++){
        const user = users[i];
        // console.log(user.name);
        // **
        // Here i get only users name from the users where i use a loop
        // **
        // for(user of users){
        const li = document.createElement("li");
        li.innerText = user.name;
        // Here i get dynamically get all users name 
        userContainer.appendChild(li);
    }

}
