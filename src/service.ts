import { Context, Effect, Layer } from "effect";

class Operations extends Context.Tag("Operations")<Operations,{
    readonly divide:(a:number, b:number) => Effect.Effect<number>
}>(){

}

export const OperationLive = Layer.succeed(Operations, Operations.of({
    divide:(a:number, b:number):Effect.Effect<number> => 
        b === 0 ? 
        Effect.die(new Error("Unable to divide by zero"))
        :Effect.succeed(a/b)
})
)

export const prorgram = Effect.gen(function*(){
    const repo = yield* Operations
    const result = yield* repo.divide(12, )
    return result
})