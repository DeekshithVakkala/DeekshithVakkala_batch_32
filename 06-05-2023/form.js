function displayDetails(){
    var fname= document.getElementById('firstname').value
    var lname= document.getElementById('lastname').value
    var email= document.getElementById('email').value
    var dob= document.getElementById('dob').value
    var phone= document.getElementById('phoneno').value
    var toDisplay=document.getElementById('text')
    toDisplay.innerHTML=`   The info provided is <br> Fname : ${firstname} <br> Lname: ${lastname}
                            <br> email : ${email} <br> DOB: ${dob} <br> Phone : ${phoneno}` ;