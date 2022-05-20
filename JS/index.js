console.log("Welcome To form Validation Js code")

let inputs = {
    name: document.getElementById('uname'),
    email: document.getElementById('uemail'),
    car: document.getElementById('car'),
    Address: document.getElementById('address'),
    phoneno: document.getElementById('Number'),
    message: document.getElementById('msg')
}
let valadation = {
    name: false,
    email: false,
    car: false,
    Address: false,
    phoneno: false,
}


inputs.name.addEventListener('blur', () => {
    console.log('User name is blured');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}/
    let str = inputs.name.value;
    if (regex.test(str)) {
        console.log(regex, str);
        console.log("name is valid")
        valadation.name = true;
    }
    else {
        console.log(regex, str);
        inputs.name.style.border = '3px solid red';
        let msg = document.getElementById('nameerror');
        msg.innerHTML = "*User name must be started form alphabet and at least 3 charcters in names and avoid symboles";
        console.log(msg);
        msg.style.fontSize = '2rem';
        msg.style.display = 'block';
        msg.style.margin = '10px 20px';
        msg.style.color = 'red';
        console.log("name is not valid")
        inputs.name.addEventListener('click', () => {
            inputs.name.style.border = '3px solid black';
            msg.style.display = 'none'; 
        });
        valadation.name = false;
    }
});

inputs.email.addEventListener('blur', () => {
    console.log('User email is blured');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/

    let str = inputs.email.value;
    if (regex.test(str)) {
        console.log(regex, str);
        console.log("email is valid")
        valadation.email = true;
    }
    else {
        console.log(regex, str);
        inputs.email.style.border = '3px solid red';
        let msg = document.getElementById('emailerror');
        msg.innerHTML = "*Invalid User Email .";
        console.log(msg);
        msg.style.fontSize = '2rem';
        msg.style.display = 'block';
        msg.style.margin = '10px 20px';
        msg.style.color = 'red';

        console.log("email is not valid")
        inputs.email.addEventListener('click', () => {
            inputs.email.style.border = '3px solid black';
            msg.style.display = 'none';
        });
        valadation.email = false;
    }
});

inputs.car.addEventListener('blur', () => {
    console.log('car is blured');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}/
    let str = inputs.car.value;
    if (regex.test(str)) {
        console.log(regex, str);
        console.log("car name is valid")
        valadation.car = true;
    }
    else {
        console.log(regex, str);
        inputs.car.style.border = '3px solid red';
        let msg = document.getElementById('carerror');
        msg.innerHTML = "*Car name is invalid";
        console.log(msg);
        msg.style.fontSize = '2rem';
        msg.style.display = 'block';
        msg.style.margin = '10px 20px';
        msg.style.color = 'red';
        console.log("name is not valid")
        inputs.car.addEventListener('click', () => {
            inputs.car.style.border = '3px solid black';
            msg.style.display = 'none';
        });
        valadation.car = false;
    }
});

inputs.Address.addEventListener('blur', () => {
    console.log('Address is blured');
    let regex = /([a-zA-Z0-9+_\)\(*&\^%$#@!~`/?";:\[\]\{\}<>\./]+){5,120}/
    let str = inputs.Address.value;
    if (regex.test(str)) {
        console.log(regex, str);
        console.log("Address is valid");
        valadation.Address = true;
    }
    else {
        console.log(regex, str);
        inputs.Address.style.border = '3px solid red';
        let msg = document.getElementById('adderror');
        msg.innerHTML = "*invlaid address . ";
        console.log(msg);
        msg.style.fontSize = '2rem';
        msg.style.display = 'block';
        msg.style.margin = '10px 20px';
        msg.style.color = 'red';
        console.log("Address is not valid")
        inputs.Address.addEventListener('click', () => {
            inputs.Address.style.border = '3px solid black';
            msg.style.display = 'none';
        });
        valadation.Address = false;
    }
});

inputs.phoneno.addEventListener('blur', () => {
    console.log('Phone number is blured');
    let regex = /^([0-9]){11}$/
    let str = inputs.phoneno.value;
    if (regex.test(str)) {
        console.log(regex, str);
        console.log("Phone number is valid");
        valadation.phoneno = true;
    }
    else {
        console.log(regex, str);
        inputs.phoneno.style.border = '3px solid red';
        let msg = document.getElementById('numerror');
        msg.innerHTML = "*Phone number is invalid";
        console.log(msg);
        msg.style.fontSize = '2rem';
        msg.style.display = 'block';
        msg.style.margin = '10px 20px';
        msg.style.color = 'red';
        console.log("name is not valid")
        inputs.phoneno.addEventListener('click', () => {
            inputs.phoneno.style.border = '3px solid black';
            msg.style.display = 'none';
        });
        valadation.phoneno = false;
    }
});

inputs.message.addEventListener('blur', () => {
    console.log('message is blured');
    let regex = /([0-9a-zA-Z]){0,220}/
    let str = inputs.message.value;
    if (regex.test(str)) {
        console.log(regex, str);
        console.log("message is valid")
    }
    else {
        console.log(regex, str);
        inputs.name.style.border = '3px solid red';
        let msg = document.getElementById('msgerror');
        msg.innerHTML = "*Message is invalid";
        console.log(msg);
        msg.style.fontSize = '2rem';
        msg.style.display = 'block';
        msg.style.margin = '10px 20px';
        console.log("name is not valid")
        inputs.message.addEventListener('click', () => {
            inputs.message.style.border = '3px solid black';
            msg.style.display = 'none';
        });
    }
});
// when user click in input field again this error will be hide;
function errormsg(msg) {

}







//  Show for submission alert code 
let alertdiv = document.getElementById('alert');
console.log(alertdiv);
let submitbtn = document.getElementById('submit');
console.log(submitbtn);

submitbtn.addEventListener('click', (e) => {

    let success = `<span>Your Form Has been successfully submitted</span><a href="#" class="close">X</a>`;
    let failear = `<span>Your request has not beet sent due to some errors</span><a href="#" class="close">X</a>`;

    if (valadation.name === true && valadation.email == true && valadation.Address === true && valadation.car === true && valadation.phoneno === true) {
        alertdiv.innerHTML = success;
        alertdiv.style.backgroundColor = 'lightgreen';
    }
    else {
        alertdiv.innerHTML = failear;
        alertdiv.style.backgroundColor = ' rgb(246, 148, 148)';
    }
    console.log(valadation.name , valadation.email , valadation.car , valadation.phoneno , valadation.Address);
    console.log(alertdiv.innerHTML)
    alertdiv.style.fontSize = '2.5rem';
    alertdiv.style.padding = '15px';
    alertdiv.style.margin = '10px 0px';
    setTimeout(() => {
        alertdiv.style.display = 'none';
    }, 5000);

    let closebtn = document.getElementsByClassName("close");
    for (let i = 0; i < closebtn.length; i++) {
        closebtn[i].addEventListener('click', function () {
            this.parentElement.style.display = 'none';
        });
    }

    alertdiv.style.display = 'block';
    console.log("successmsg function is executed");

    // onclick = window.location.reload();
    e.preventDefault()
});
// console.log(close);



