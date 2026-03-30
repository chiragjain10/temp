// window.alert()
// window.prompt()
// window.confirm()
// window.open()


// window.open("https://google.com","","Mohit");

// window.navigator.clipboard.write()

// window.print()

// window.History.toString()

async function CopyElement(button) {
    let parent = button.parentElement;
    let p = parent.querySelector("p");
    try {
        await window.navigator.clipboard.writeText(p.innerText);
        console.log("Content is successfully copied")
    }
    catch (error) {
        console.log(error.message);
    }
}

// const pasteContent = async (button) => {
//     let parent = button.parentElement;
//     let p = parent.querySelector("p");
//     try {
//         p.innerText = await window.navigator.clipboard.readText();
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }


// Synchronous & Asynchronous


// Reqeust -> handle -> optimize -> next



// async
// await


// let a = 5;
// console.log(a);
// console.log(email)
// console.log(a);

// try{
//     let a = 5;
//     console.log(a);
//     console.log(email);
//     console.log(a);
// }
// catch(error){
//     console.log(error.message)
// }