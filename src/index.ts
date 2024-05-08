import { Effect, pipe } from "effect";
import { Operations, Random, RandomLive, program1, program2 } from "./service";


const programWithErrors1 = pipe(program2,Effect.map((x)=>({
    data: x
})),
Effect.catchTags({
    zeroAgeError:(err)=>Effect.succeed({
        data:{
            errorName: err._tag,
            errorMessage: err.message
        }
    }),
    //   DivideByZero:
    DivideByZero:(err)=> Effect.succeed({
        data:{
            errorName: err._tag,
            errorMessage: err.message
        }
    })
}),

) 

const runnableProgram = pipe(programWithErrors1,Effect.provide(RandomLive), Effect.provide(Operations.Live))
const age = Effect.runSync(runnableProgram)
console.log(age)
