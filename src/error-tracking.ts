import { Effect, Random } from "effect";

class FooError {
  readonly _tag = "FooError";
}

class BarError {
  readonly _tag = "BarError";
}

export const program = Effect.gen(function* () {
  const n1 = yield* Random.next;
  const n2 = yield* Random.next;

  const foo = n1 > 0.5 ? "yay" : yield* Effect.fail(new FooError());
  const bar = n2 > 0.5 ? "yay" : yield* Effect.fail(new BarError());

  return foo + bar;
});

Effect.runPromise(program).then(console.log, console.error);
