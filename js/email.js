
function sendemail(){

email = document.getElementById("inputEmail").value;
message = 
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "askabhay.info@gmail.com",
    Password : "1D884B3E4A02B33012E4F4B2EEBC39CE74F6",
    To : 'manthanra36@gmail.com',
    From : email,
    Subject : "Inquire",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}