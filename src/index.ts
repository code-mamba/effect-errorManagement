import { Effect } from "effect";

const task1 = Effect.succeed(43)
const task2 = Effect.succeed(2)
const task3 = Effect.fail("oH Huh").pipe(Effect.as(2))
const task4 = Effect.succeed("Hello")
const task5 = Effect.fail("error").pipe(Effect.as(4))

const program = task1.pipe(
    Effect.zip(task2),
    Effect.zip(task3),
    Effect.zip(task4),
    Effect.zip(task5)

)

Effect.runPromise(program).then(console.log)