
function execute(operation,n1,n2) 
{
    let result=0;

    /*function add(n1,n2)
    {
        return n1+n2;
    }
    function sub(n1,n2)
    {
        return n1-n2;
    }
    function mul(n1,n2)
    {
        return n1*n2;
    }
    function div(n1,n2)
    {
        return n1*n2;
    }*/

    const add = (n1 ,n2) => n1 + n2;
    const sub = (n1 ,n2) => n1 - n2;
    const mul = (n1 ,n2) => n1 * n2;
    const div = (n1 ,n2) => n1 / n2;
    if(typeof(operation) == 'string')
    {
        switch(operation.toUpperCase())
        {
            case "ADD":
            {
                result=add(n1,n2);
                break;
            }
            case "SUB":
            {
                result=sub(n1,n2);
                break;
            }
            case "MUL":
            {
                result=mul(n1,n2);
                break;
            }
            case "DIV":
                {
                    result=div(n1,n2);
                    break;
                }
            default:
                result="Unkown Operation";
              break;
        }
    }
    else if(typeof operation == 'function')
    {
           result=operation(n1,n2); 
    }else{
        result="Unknown Operation";
    }
    return result;
}
console.log(execute('add',6,2));
console.log(execute('sub',6,2));
console.log(execute('mul',6,2));
console.log(execute('div',6,2));
console.log(execute('hello world',20,10));
