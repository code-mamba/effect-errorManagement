import { Effect, Data, Random } from "effect";



class FooError extends Data.TaggedError("Foo")<{
    message: string
}>{}
class BarError extends Data.TaggedError('Bar')<{
    randomNumber:number
}>{}

const program = Effect.gen(function*(){
    const n = yield* Random.next
     return n > 0.5? "yay"
    :n < 0.2? yield* new FooError({message: `random number is less than 0.2`})
    :yield * new BarError({randomNumber:n})
}).pipe(Effect.catchTags({
    Foo:(err) => Effect.succeed(`Foo error occured ${err}`),
    Bar:(err) => Effect.succeed(`Bar error occured ${err}`)
}))

Effect.runPromiseExit(program).then(console.log)

