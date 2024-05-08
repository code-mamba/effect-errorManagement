import { Context, Effect, Layer } from "effect";

export class Random extends Context.Tag("Random")<Random, {
    readonly next:()=> Effect.Effect<number>
}>(){}

export const RandomLive = Layer.succeed(
    Random,
    Random.of({
        next:()=>Effect.succeed(Math.floor(Math.random()*100))
    })
)
class divideByZero {
    readonly _tag = "DivideByZero"
    readonly message = "Unable to divide by zero"
}

const divide = (a:number, b:number) => {
    return Effect.gen(function*(){
        if(b === 0){
            return yield* Effect.fail(new divideByZero())
        }
        return a/b
    })
}

export class Operations extends Context.Tag("Operations")<Operations,{
    readonly divide:(a:number, b:number)=> Effect.Effect<number, divideByZero>
}>(){
    static Live = Layer.succeed(Operations, Operations.of({
        divide: divide
    }))
}


class zeroAgeError{
    readonly _tag = "zeroAgeError"
    readonly message = "zero age is invalid"
}
class numberExceedError{
    readonly _tag = "numberExceedError"
    message = "Number exceeded"
}



export const program1 = Effect.gen(function*(){
    const repo = yield* Random
    const age = yield* repo.next()
    if(age === 0) {
        return yield* Effect.fail(new zeroAgeError()) 
    }
    return age
})

export const program2 = Effect.gen(function*(){
    const num1 = yield* program1
    // const num2 = yield* program1
    const num2 = 0
    console.log(num1, num2)
    const Operation = yield* Operations
    const num3 = yield* Operation.divide(num1, num2)
    return num3

    // if(num3 > 3){
    //     return yield* Effect.fail(new numberExceedError())
    // }
    // return num3
})