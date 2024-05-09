import { Effect, pipe } from "effect";
import { OperationLive, prorgram } from "./service";

const runnable = pipe(prorgram, Effect.provide(OperationLive))
const result = Effect.runSyncExit(runnable)

console.log(result)