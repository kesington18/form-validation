let firstName = document.getElementById("ftext");
let lastName = document.getElementById("ltext");
let email = document.getElementById("email");
let message = document.getElementById("message");
let checkBox = document.getElementById("checkbox");
let checkEnq = document.getElementById("check-enq");
let checkReq = document.getElementById("check-req");
let error = document.getElementsByClassName("error");
let contactForm = document.getElementById("contactform");

contactForm.addEventListener("submit", handleSubmit);

function printErr(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
  if (firstName.value == "") {
    printErr("firstNameErr", "Please enter your first name");
    return false;
  } else if (lastName.value == "") {
    printErr("lastNameErr", "Please enter your last name");
    return false;
  } else if (email.value == "") {
    printErr("emailErr", "Please enter your email address");
    return false;
  } else if (message.value == "") {
    printErr("messageErr", "Please enter a message");
    return false;
  } else if (checkEnq.checked == false && checkReq.checked == false) {
    printErr("checkErr", "Please select a query type");
    return false;
  } else if (checkBox.checked == false) {
    printErr(
      "checkBoxErr",
      "To submit this form, please consent to being contacted"
    );
    return false;
  } else {
    printErr("firstNameErr", "");
    printErr("lastNameErr", "");
    printErr("emailErr", "");
    printErr("messageErr", "");
    printErr("checkErr", "");
    printErr("checkBoxErr", "");
    return true;
  }
}

// function validateForm() {
//   var firstName = document.Form.firstname.value;
//   var lastName = document.Form.lastname.value;
//   var email = document.Form.email.value;
//   var check = document.Form.check.value;
//   var message = document.Form.message.value;
//   var checkBox = document.Form.checkbox.checked;

//   var firstNameErr =
//     (emailErr =
//     messageErr =
//     lastNameErr =
//     checkErr =
//     checkBoxErr =
//       true);

//   if (firstName == "") {
//     printErr("firstNameErr", "please enter your firstname");
//   } else {
//     var regex = /^[a-zA-Z\s]+$/;
//     if (regex.test(firstName) === false) {
//       printErr("firstNameErr", "please enter a valid firstname");
//     } else {
//       printErr("firstNameErr", "");
//       firstNameErr = false;
//     }
//   }

//   if (lastName == "") {
//     printErr("lastNameErr", "please enter your lastname");
//   } else {
//     var regex = /^[a-zA-Z\s]+$/;
//     if (regex.test(lastName) === false) {
//       printErr("lastNameErr", "please enter a valid lastname");
//     } else {
//       printErr("lastNameErr", "");
//       lastNameErr = false;
//     }
//   }

//   if (email == "") {
//     printErr("emailErr", "please enter your email address");
//   } else {
//     var regex = /^\S+@\S+\.\S+$/;
//     if (regex.test(email) === false) {
//       printErr("emailErr", "please enter a valid email address");
//     } else {
//       printErr("emailErr", "");
//       emailErr = false;
//     }
//   }

//   if (message == "") {
//     printErr("messageErr", "this field is empty");
//   } else {
//     printErr("messageErr", "");
//     messageErr = false;
//   }

//   if (check == "") {
//     printErr("checkErr", "please select a query type");
//   } else {
//     printErr("checkErr", "");
//     checkErr = false;
//   }

//   if (!checkBox) {
//     printErr(
//       "checkBoxErr",
//       "to submit this form, please consent to being contacted"
//     );
//   } else {
//     printErr("checkBoxErr", "");
//     checkErr = false;
//   }

//   if (
//     firstNameErr ||
//     lastNameErr ||
//     emailErr ||
//     messageErr ||
//     checkErr ||
//     checkBoxErr == true
//   ) {
//     return false;
//   }
// }

function handleSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    alert("form submitted");
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
    checkBox.checked = false;
    checkEnq.checked = false;
    checkReq.checked = false;
  }
}
