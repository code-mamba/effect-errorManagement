import { Effect } from "effect";
import { program } from "./error-tracking";

const recovered = program.pipe(
    Effect.catchTag("FooError",(_fooError)=>
        Effect.succeed("Recovering from foo")
    ),
    Effect.catchTag("BarError",(_barErr)=>
        Effect.succeed("Recovering from Bar"))
)

Effect.runPromise(recovered).then(console.log)

const recovered1 =  program.pipe(
    Effect.catchTags({
        FooError:(err)=> Effect.succeed({
            data: `recovering from ${err._tag}`
        }),
        BarError:(err)=> Effect.succeed({
            data: `Recovering from ${err._tag}`
        }
            
        )

    }
        
    )
)

Effect.runPromise(recovered1).then(console.log)