const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const fatherName = document.getElementById('fatherName');
const schoolName = document.getElementById('schoolName');
const Class = document.getElementById('Class');
const DOB = document.getElementById('DOB');
const address = document.getElementById('address');



// Add Event

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


const sendData = (usernameVal, sRate, count) => {
    if(sRate === count){
        alert('Form Submission Successful');
        swal("Welcome! " + usernameVal, "Registration Successful", "success");
        location.href = `classes.html?username=${usernameVal}`
    }
}

// For final Data validation

const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1
    for (var i = 0; i<formCon.length; i++) {
        if(formCon[i].className == "form-control success"){
            var sRate = 0+ i;
            sendData(usernameVal, sRate, count);
        }else {
            return false;
        }
    }
}

// More Email Validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;

    if (dot === emailVal.length - 1) return false;
    return true;
}


// Define the validate function

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const fatherNameVal = fatherName.value.trim();
    const schoolNameVal = schoolName.value.trim();
    const ClassVal = Class.value.trim();
    const DOBVal = DOB.value.trim();
    const addressVal = address.value.trim();


    // Validate Username

    if(usernameVal === ""){
        setErrorMsg(username, 'Student name cannot be blank');
    }else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username min 3 character');
    }else{
        setSuccessMsg(username);
    }


    // Validate Father Name

    if(fatherNameVal === "") {
        setErrorMsg(fatherName, 'Father name cannot be blank');
    } else if (fatherNameVal.length <= 2) {
        setErrorMsg(fatherName, 'username min 3 character');
    }else{
        setSuccessMsg(fatherName);
    }


        // Validate School Name

        if(schoolNameVal === "") {
            setErrorMsg(schoolName, 'Father name cannot be blank');
        } else if (schoolNameVal.length <= 2) {
            setErrorMsg(schoolName, 'username min 3 character');
        }else{
            setSuccessMsg(schoolName);
        }


                // Validate Class

                if(ClassVal === "") {
                    setErrorMsg(Class, 'Class cannot be blank');
                } else if (ClassVal.length <= 0) {
                    setErrorMsg(Class, 'Class min 1 character');
                }else{
                    setSuccessMsg(Class);
                }

        // Validate D.O.B

        if(DOBVal === "") {
            setErrorMsg(DOB, 'DOB cannot be blank');
        } else if (DOBVal.length <= 0) {
            setErrorMsg(DOB, 'DOB min 1 character');
        }else{
            setSuccessMsg(DOB);
        }
        
        
        // Validate Address

        if(addressVal === "") {
            setErrorMsg(address, 'Address cannot be blank');
        } else if (addressVal.length <= 12) {
            setErrorMsg(address, 'Address min 15 character');
        }else{
            setSuccessMsg(address);
        }


        // Validate Email

        if(emailVal === ""){
            setErrorMsg(email, 'email cannot be blanked');
        }else if (!isEmail(emailVal)) {
            setErrorMsg(email, 'Not a valid Email');
        }else{
            setSuccessMsg(email);
        }


        // Validate Phone

        if(phoneVal === "") {
            setErrorMsg(phone, 'Phone Number cannot be blank');
        } else if (phoneVal.length !== 10) {
            setErrorMsg(phone, 'Not a valid Phone Number');
        }else{
            setSuccessMsg(phone);
        }

        successMsg(usernameVal);
}


function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className= "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className= "form-control success";
}