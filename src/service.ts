import { Context, Effect, Layer } from "effect";
import { divide } from "effect/BigDecimal";

class zeroError {
    readonly _tag = "ZeroError"
}
class IncrementMoreThanFive {
    readonly _tag = "IncrementMoreThanFive"
}

export class Operations extends Context.Tag("Operations")<Operations,{
    add:(a:number, b:number) => Effect.Effect<number, IncrementMoreThanFive>
    divide:(a:number, b:number) => Effect.Effect<number, zeroError>
}>(){}

export const OperationsLive = Layer.succeed(Operations, Operations.of({
    add:(a,b) =>{
        if(a+b > 5){
            return Effect.fail(new IncrementMoreThanFive())
        }
        else{
            return Effect.succeed(a+b)
        }
    },
    divide:(a,b)=>{
        if(b ===0){
            return Effect.fail(new zeroError())
        }
        else{
            return Effect.succeed(a/b)
        }
    }
}))