import {Effect} from "effect"

const program = Effect.gen(function*(){
    console.log("start doing something ...")
    yield* Effect.sleep("2 seconds")
    console.log("I'm doing my job")
    return "some result"
})

const main = program.pipe(Effect.uninterruptible,Effect.disconnect, Effect.timeout("1 seconds"))
Effect.runPromise(main).then(console.log, console.error)