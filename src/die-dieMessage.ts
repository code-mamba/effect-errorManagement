import { Effect } from "effect";

const divide = (a:number, b:number):Effect.Effect<number> =>
    b === 0 ?
    Effect.die(new Error("cannot divide by zero"))
    :Effect.succeed(a/b)

const add = (a:number, b:number) =>
    a+b > 5?
    Effect.dieMessage("it is exceed than 5")
    :Effect.succeed(a+b)

// Effect.runSync(divide(1,0))
Effect.runSync(add(5,1))