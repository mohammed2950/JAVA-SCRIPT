

//      Exercise1           ///
/*const person = {
    name : " ",
    age : 0,
    height :0

}

function isempty(name){
    for (const key in person) {
        
          console.log(key);

          if (key === name){
              return true
          }
        }
        return false
    }
    console.log(isempty("ages"))

    //      exercises 2 //

const products ={
    pro1 :{
        name:"pro1",
        price:200
    },
    pro2 :{
        name:"pro2",
        price:200
    },
    pro3 :{
        name:"pro3",
        price:200
    },
    pro4 :{
        name:"pro4",
        price:200
    },
    pro5 :{
        name:"pro5",
        price:200
    },
    
    total :function(){
        let t = 0;
        for (const key in products) {
            if(!(key === "total")){
         
                t += products[key].price;
        }
    }
        return t
            }
                   
}

    console.log(products.total())


    /// Exercise3 //


    const first ={
        value1 : "value 1",
        value2 : "value 2",
    }
    const second = {}

    for (const key in first) {
        
           second[key] =first[key];
            
        }
        second.value1 ="nul"
        console.log(first,second);

    
       
        // Exercise4 //

        /*function crearteperson(n, a)
        {
             return {
                 name : n,
                 age : a,
             }
        }
        let p = crearteperson("name",22)
        let p1 = crearteperson("name3",23)
        console.log(p,p1);*/

       /* function crearteperson(name, age){
            this.name = name;
            this.age = age;
            console.log(this);
        }

        let p1 = new crearteperson("name" , 22)*/

        //      Exercise5 ///

       /* class Clock{
            
            constructor(format){
              let d = new Date()
              console.log(format.replace("h",d.getHours()).replace("m",d.getMinutes()).replace("s",d.getSeconds()));
            }
            
        }
        let p1 = new Clock("h:m:s");
        let p2 = new Clock("m:h:s");
        let p3 = new Clock("s:m:h");
        console.log(p1);
        */