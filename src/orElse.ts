import { Effect } from "effect";

// const success = Effect.succeed("success")
// const failure = Effect.fail("failure")
// const fallback = Effect.succeed("fallback")

// const program1 = Effect.orElse(success,()=> fallback)
// const program2 = Effect.orElse(failure,()=> fallback)
// console.log(Effect.runSync(program1))
// console.log(Effect.runSync(program2))


// orElseFail

class NegativeAgeError {
    readonly _tag = "NegativeAgeError"
    constructor(readonly age:number){}
}
class IllegalAgeError {
    readonly _tag = "IllegalAgeError"
    constructor(readonly age:number){}
}

const validate = (age:number): Effect.Effect<number, NegativeAgeError|IllegalAgeError> =>{
    if(age<0){
     return Effect.fail(new NegativeAgeError(age))
    }
    if(age <18){
        return Effect.fail(new IllegalAgeError(age))
    }
    else{
        return Effect.succeed(age)
    }
}

const program = Effect.orElseFail(validate(13),()=> "Invalid age")
const program2 = Effect.orElseSucceed(validate(3), ()=> 18)
const result = Effect.runSyncExit(program2)
console.log(result)