 import {Effect} from "effect"
import { constVoid } from "effect/Function"

 const success: Effect.Effect<number, Error> = Effect.succeed(42)
 const failure: Effect.Effect<number, Error> = Effect.fail(new Error("Oh no"))

 const program = Effect.match(success,{
    onFailure:(err) =>`failure${err.message}`,
    onSuccess:(value) => `The number is ${value}`
 })

const program1 = Effect.match(failure,{
    onFailure:(err)=> `Failure occures ${err.message}`,
    onSuccess:(value) => `The value is ${value}`
})

const program3 = Effect.match(failure,{
    onFailure: constVoid,
    onSuccess: constVoid
})
 Effect.runPromise(program3).then(console.log)