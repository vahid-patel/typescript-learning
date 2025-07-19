let a : number = 34;
console.log(a)

let b : string = 'vahid'
console.log(b)

let isLoggedIn : boolean = true
console.log(isLoggedIn)

//TypeScript can auto-detect types
let message = 'Heloo javascript'
console.log(message)


// 'any' disables type checking — like using plain JS (avoid if possible)
let value : any = 8
value = 'stringvalue'
console.log(value)

//unknown (safer than any)
let newvalue: unknown = "hello";
// newvalue.toUpperCase(); not allowed directly
if (typeof newvalue === "string") {
  console.log(newvalue.toUpperCase()); 
}

function calculatePrice (price : number, isMember : boolean):number{
    if(isMember)
        return price * 0.9
    return price
}

console.log(calculatePrice(100,true))

