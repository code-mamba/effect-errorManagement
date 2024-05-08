import { Effect, Option } from "effect";
import { program } from "./error-tracking";

const recovered = program.pipe(
    Effect.catchSome((error)=>{
        if(error._tag === "FooError"){
            return Option.some(Effect.succeed("Recovering from Foo"))
        }
        else{
            return Option.none()
        }
    })
)

Effect.runPromise(recovered).then(console.log)
