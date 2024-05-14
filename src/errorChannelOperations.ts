import { Effect } from "effect";

// const simulatedTask = Effect.fail("oh no !")

// const mapped1 = Effect.mapError(simulatedTask,(e)=> new Error(e))

// console.log(Effect.runSyncExit(mapped1))


// // // mapErrorBoth

// const simulatedTask2 = Effect.succeed("oh out")
// const mapped2 = Effect.mapBoth(simulatedTask2,{
//     onFailure:(e) => new Error(`returning error ${e}`),
//     onSuccess:(e) => e
// })
// console.log(Effect.runSyncExit(mapped2))

// const divide = (a:number, b:number) =>
//     b === 0 ? Effect.fail("divide by zero")
//     :Effect.succeed(a/b)

// const program = Effect.gen(function*(){
//     const n1 = yield* divide(1,2)
//     return n1
// })
// const mapped = Effect.mapError(program,(e)=> new Error(e))
// console.log(Effect.runSyncExit(mapped))

// const mapped3 = Effect.mapBoth(program,{
//     onFailure:(err) => new Error(`something went wrong ${err}`),
//     onSuccess:(e)=> e
// })

// console.log(Effect.runSyncExit(mapped3))

const evenOrOdd = (a:number) =>
 a === 0 ? Effect.fail("number is zero")
:Effect.succeed(a)

const program3 = Effect.gen(function*(){
    const result = yield* evenOrOdd(1)
    return result
})

const mapped4 = Effect.mapBoth(program3,{
    onFailure:(err) =>  new Error(err),
    onSuccess:(n) => n%2 == 0
})

console.log(Effect.runSyncExit(mapped4))

