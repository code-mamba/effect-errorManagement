import { Effect } from "effect";

const fail = Effect.fail("oh no")
const die = Effect.dieMessage("Boom")

// const program = Effect.all([fail,die], {concurrency: "unbounded"}).pipe(
//     Effect.asVoid
// )

// Effect.runPromiseExit(program).then(console.log)

const fail1 = Effect.fail("oh no")
const fail2 = Effect.fail("oh uh")
const die1 = Effect.dieMessage("died")

const program1 = Effect.all([fail1,fail2,die1],{
    concurrency: "unbounded"
}).pipe(Effect.asVoid, Effect.parallelErrors)

Effect.runPromiseExit(program1).then(console.log)
