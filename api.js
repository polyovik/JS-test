const namesContainer = document.getElementsByClassName('names-container')[0];

const getUsers = async () => {
    try {
        const response = await fetch(`https://reqres.in/api/users`)

        if (response.status !== 200) {
            return 'Something went wrong'
        }

        const data = await response.json()
        
        return data
    } catch (e) {
        console.error(e);
    } 
}

const getFirstNames = async ()  => {
    const users = await getUsers();
    users.forEach((user) => {
        namesContainer.innerHTML = user.first_name
    });
    
}
