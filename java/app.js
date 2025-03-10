const person = {
    name: "Hena",
    age : 15,
    status: true,
    freinds: ["hero alom", "bappa" ]
}
const newPerson = JSON.stringify(person);
const convertPerson = JSON.parse(newPerson);
// console.log(newPerson)
// console.log(convertPerson)



fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    // Here res.json is commited to me.it close similar to json.parse;it find data and store using API that i want.   json () is a function

      .then(data => console.log(data))
    //   Here json function bring my data and store data variable, and using arrow function we call console then we get a data by object .


    const handleLoadData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        }) 
    }
    // Up: Here i use a event handler when i click button the fetch will working ;