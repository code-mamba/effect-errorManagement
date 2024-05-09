import { Cause, Console, Effect } from "effect"

const program = Effect.catchAllDefect(
    Effect.dieMessage("Boom"),
    (defect)=>{
        if(Cause.isRuntimeException(defect)){
            return Console.log(`RuntimeException defect caught: ${defect.message}`)
        }
        else{
            return Console.log("Unknown defect caught")
        }
    } 
        
)

Effect.runPromiseExit(program).then(console.log)