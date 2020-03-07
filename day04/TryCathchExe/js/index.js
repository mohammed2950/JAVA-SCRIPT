


function enter()
{
    let  value = document.querySelector('input')
    Console.log(value)
}

try{
    document.querySelector('button').onclick = () => {
       // Console.log('hi')
        throw new Error('Whoops!')
    }
    
}
catch(error){
    Console.log(error.name,error.message);

}