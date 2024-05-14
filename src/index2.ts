import { Effect } from "effect";

const program = Effect.forEach([1,2,3,4,5,6,7],(n)=>{
    if(n<4){
        return Effect.succeed(n)
    }
    else{
        return Effect.fail(`error occuref ${n}`)
    }

})

Effect.runPromise(program).then(console.log)

// validate

const task1 = Effect.succeed(2)
const task2 = Effect.fail(new Error("oh no"))
const task3 = Effect.succeed("Hi")
const task4 = Effect.fail(new Error("HOo"))

const program1 = task1.pipe(Effect.validate(task3), Effect.validate(task2), Effect.validate(task4))

Effect.runPromise(program1).then(console.log)
const program2 = Effect.validateAll([task1,task2,task3,task4],(n)=>{
    return Effect.fail(n)
})

Effect.runPromise(program2).then(console.log)
