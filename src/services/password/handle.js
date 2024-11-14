async function permittedCharacters(){
   
    let permitted = []

    if (process.env.UPPERCASE_LETERS === true)
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    if (process.env.LOWERCASE_LETTERS === true)
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")

    if (process.env.NUMBER === true)
        permitted.push(..."0123456789")
    
    if (process.env.SPECIAL_CHARACTERS === true)
        permitted.push(..."! @ # $ % ^ & * ")
    
   return permitted;
}


async function handle() {
    let characters = []
    let password = ""

    const passwordLength = process.env.PASSWORD_LENGTH

    

    for (let i = 0; i < passwordLength.length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}
    
export default handle;