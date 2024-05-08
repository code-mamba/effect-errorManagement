import { Console, Effect } from "effect";

const task1 = Console.log("Task1 running");
const task2 = Effect.fail("Something went wrong!");
const task3 = Console.log("Task3 running");

const program = Effect.gen(function* () {
  yield* task1;
  yield* task2;
  yield* task3;
});

Effect.runPromiseExit(program).then(console.log);

/*
 short cicuiting means if any statement occurs an error it wont allow to the next execution unnneccessary so it will stop execute there

*/
