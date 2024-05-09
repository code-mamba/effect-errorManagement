import { Effect } from "effect";

const divide = (a:number, b:number): Effect.Effect<number, Error> => 
    b === 0 ? Effect.fail(new Error("cannot divide by zero"))
    :Effect.succeed(a/b)

const program = Effect.orDie(divide(1,1))

console.log(Effect.runSync(program)) 

// orDieWith

// const divide = (a:number, b:number): Effect.Effect<number, Error> => 
//     b === 0 ? Effect.fail(new Error("Cannot divide by zero"))
//     : Effect.succeed(a/b)

    const program1 = Effect.orDieWith(
        divide(1,0),
        (error) => new Error (`defects: ${error.message}`)
    )

    console.log(Effect.runSync(program1))