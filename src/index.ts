import { Effect, pipe } from "effect";
import { Operations, OperationsLive } from "./service";

const recovered = Effect.gen(function*(){
    const repo = yield* Operations
    const result = yield* repo.divide(0,0)
    return result

})
const program = pipe(recovered, Effect.provide(OperationsLive))

Effect.runPromise(program).then((val)=>console.log(`The value ${val}`))
.catch((err)=> console.log(`The error is ${err}`))
