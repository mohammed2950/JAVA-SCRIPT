 function readForm() 
 {
     const lastName = document.getElementById('lastName');
     const firstName = document.getElementById('firstName');


     let result = "";
     result += `<p>${lastName.Value}</p>`
                `<p>${firstName.Value}</p>`


    document.getElementById('output').innerHTML += result;
 }
