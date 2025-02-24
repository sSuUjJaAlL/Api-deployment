import User from "../database/schema/user.schema.js";


async function getEmail (email) {
    return await User.findOne({email : email})
}


async function getUsername (username) {
    return await User.findOne({username : username})
}

async function saveData(content){
    const savedResult = await User.create({
        ...content
    })
    return savedResult
}







async function findUser(s) {
    const ss = await User.findOne({ _id: s });
    return ss;
    
}

export {
    getEmail,
    getUsername,
    saveData,
    findUser
}