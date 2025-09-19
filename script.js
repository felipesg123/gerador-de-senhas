// const chars = "qwertyuiiopasdfghjklzxcvnm!@#$%¨&*()0123456789<>" ; 

// const passwordlength = 12; 

// let password = "" ; 

// for (let i = 0; i < passwordlength; i++) {

//     let randomindex = Math.floor(Math.random() * chars,length ); 


//     password += chars.charAt(randomindex);

// }


// document.getElementById('password').value = password

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()<>?";
    const passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    document.getElementById('password').value = password;
}
