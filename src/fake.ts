import { Effect } from "effect";

let count = 0

export const effect = Effect.async<string, Error>((resume)=>{
    if(count < 5){
        count++
        console.log("failure")
        resume(Effect.fail(new Error))
    }
    else{
        console.log(count)
        resume(Effect.succeed("Yay!"))
    }
})