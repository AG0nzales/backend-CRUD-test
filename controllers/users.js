import { v4 as uuidv4 } from 'uuid';
let users = []

export const getUser =  (req, res) => {
    
    // displays in the browser
    res.send(users)
}

export const createUser = (req, res) => {

    // this is where tha data is stored awaiting to be pushed.
    const user = req.body;

    users.push({ ...user, id: uuidv4() })

    res.send(`User with the name ${user.firstname} added to the database!`);
}


export const getUserId = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser)
}

export const deleteUser =  (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id)

    res.send(`User with the id ${id} deleted from the database. `)
}



// receives id
//specifies what user id to be updated
// then take all the things that the router receives
// after getting then what to do
// then change
export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user) => user.id == id );

    if(firstname) user.firstname = firstname
    if(lastname) user.lastname = lastname
    if(age) user.age = age

    res.send(`User with the id ${id} has been updated`)
   
}