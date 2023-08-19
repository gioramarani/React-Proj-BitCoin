import { storageService } from "./storageService"

export const userService = {
    getUser,
    signup,
    addMove,
    getLoggedInUser,
}

function getUser(name) {
    return  {
        name,
        coins: 100,
        moves: []
    }
}

function getLoggedInUser() {
    const loggedInUser = storageService.load('users')
    console.log(loggedInUser);
    return loggedInUser
}

function signup(name) {
    const user = getUser(name)
    storageService.store('users', user)
}

function addMove(contact, amount) {
    const user = getLoggedInUser()
    // console.log(user);
    user.coins -= amount
    user.moves.push({
        toId: contact._id,
        to: contact.name,
        at: new Date(), 
        amount
    })
    // console.log(user);
    storageService.store('users', user)
}