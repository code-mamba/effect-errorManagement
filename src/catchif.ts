import { Effect } from "effect";
import { program } from "./error-tracking";

const recovered = program.pipe(
    Effect.catchIf((error)=> error._tag === "FooError",()=> Effect.succeed('Recovering from foo error'))
)

Effect.runPromise(recovered).then(console.log)