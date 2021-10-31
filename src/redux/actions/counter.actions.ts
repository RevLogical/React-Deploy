import { CounterAction, AsyncCounterAction, CounterActionType, AsyncCounterActionType } from "../../types/counterTypes";

const increment = (): CounterAction => {
    return { type: CounterActionType.increment };
};

const decrement = (): CounterAction => {
    return { type: CounterActionType.decrement };
};

const incrementStarted = (): AsyncCounterAction => {
    return { type: AsyncCounterActionType.incrementStarted };
};

const incrementDone = (): AsyncCounterAction => {
    return { type: AsyncCounterActionType.incrementDone };
};

const incrementFailed = (): AsyncCounterAction => {
    return { type: AsyncCounterActionType.incrementFailed };
};

const decrementStarted = (): AsyncCounterAction => {
    return { type: AsyncCounterActionType.decrementStarted };
};

const decrementDone = (): AsyncCounterAction => {
    return { type: AsyncCounterActionType.decrementDone };
};

const decrementFailed = (): AsyncCounterAction => {
    return { type: AsyncCounterActionType.decrementFailed };
}

export const counterActions = { increment, decrement };
export const asyncCounterActions = {
    incrementStarted,
    incrementDone,
    incrementFailed,
    decrementStarted,
    decrementDone,
    decrementFailed,
};