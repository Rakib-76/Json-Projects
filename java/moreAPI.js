

    const handleLoadUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        console.log(data[0]);
        // inside of fetch
        displayUser(data);
    })
    }


    // ****
    // another way fetch call or console.log
    const displayUser = (users) =>{
        console.log(users);
        // outside of fetch
    }

    // here we use anodther way to call data by using another function outside of fetch. Inside fetch we call the outside function where i console.log (users).then API bring the data those i wanted.
    // ****

