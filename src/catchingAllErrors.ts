import { Effect, Either } from "effect";
import { program } from "./error-tracking";

// Error handle using either
const recovered = Effect.gen(function*(){
    const failureOrSuccess = yield * Effect.either(program)
    if(Either.isLeft(failureOrSuccess)){
        const error = failureOrSuccess.left
        return `Recovering from ${error._tag}`
    }
    else{
        return failureOrSuccess.right
    }
})

Effect.runPromise(recovered).then(console.log)


// Error handling using catchAll
const recovered1 = program.pipe(
    Effect.catchAll((err)=> Effect.succeed(`Recovering from ${err._tag}`))
)

Effect.runPromise(recovered1).then(console.log)