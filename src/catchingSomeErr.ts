import { Effect, Either } from "effect";
import { program } from "./error-tracking";

const recovered = Effect.gen(function*(){
    const succesOrFailure = yield* Effect.either(program)

    if(Either.isLeft(succesOrFailure)){
        const error = succesOrFailure.left
        if(error._tag === "FooError"){
            return `This is Foo error`
        }
        else{
            return `This is Bar Error`
        }
    }
    else{
        return succesOrFailure.right
    }
    
})

Effect.runPromise(recovered).then(console.log)