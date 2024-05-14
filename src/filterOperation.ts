import { Cause, Console, Effect, Random } from "effect";

const task1 = Effect.filterOrFail(
    Random.nextRange(-1,1),
    (n) => n >= 0,
    () => 'Random number is negative'
)

const program = Effect.gen(function*(){
    const n1 = yield* task1
    return n1
})

// console.log(Effect.runSyncExit(program))

const task2 = Effect.filterOrDie(
    Random.nextRange(-1,1),
    (n) => n >= 0,
    ()=> new Cause.IllegalArgumentException("random number is negative")
)

// console.log(Effect.runSyncExit(task2))

const task3 = Effect.filterOrDieMessage(
    Random.nextRange(-1, 1),
    (n) => n >= 0,
    "random number is negative"
  )
   
// console.log("this one",Effect.runSync(task3))

const task = Effect.filterOrFail(
    Random.nextRange(-1,1),
    (n)=> n>=0,
    ()=> 'Random number is negative'
)

const tapping = Effect.tapError(task, (error)=>
    Console.log(`failure ${error}`)
)
console.log(Effect.runSync(tapping))

const tapping2 = Effect.tapBoth(task,{
    onSuccess:(n)=> Console.log(`success value ${n}`),
    onFailure:(err)=> Console.log(`Failure value${err}`)
})

console.log(Effect.runSync(tapping2))

const divide = (a:number, b:number) =>
    b === 0 ? Effect.fail("cannot divide by zero")
    : Effect.succeed(a/b)

const program1 = Effect.gen(function*(){
    const cause = yield* Effect.cause(divide(1,1))
    return cause
})
const result = Effect.runSyncExit(program1)