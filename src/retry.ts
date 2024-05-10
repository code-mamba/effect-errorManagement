import { Effect, Schedule } from "effect";
import { effect } from "./fake";

const policy = Schedule.fixed("1000 millis")

const repeated = Effect.retry(effect,policy)

Effect.runPromise(repeated).then(console.log)