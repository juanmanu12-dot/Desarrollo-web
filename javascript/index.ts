function sumar2 (numA: number, numB: number){
     return numA +numB
}


const resultado2 = sumar2 (10,25)
console.log(resultado2)

interface User1 {

    name: string;
    age: number;
    active: boolean;
    dto?: number; 
    subjects: string[]
    rol: Rol ; 
    print: function(){

    }
   
}

// como hacer un .jason apartir de una interfaz

type Rol  = "ADMIN" | "USER"| "GUEST"

const user1: User1 = {

    active: false,
    age: 45,
    name: "Pedro",
    rol : "GUEST"
    subjects: [" dllo", " arquitectura"],
    print : Function(){

    }

}

