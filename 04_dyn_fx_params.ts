export type Event =
  | {
      type: "LOG_IN";
      payload: { userId: number };
    }
  | { type: "LOG_OUT" };

const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {};

sendEvent("LOG_IN", { userId: 123 });
sendEvent("LOG_OUT");
