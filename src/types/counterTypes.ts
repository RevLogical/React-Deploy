import { Action as AnyAction } from 'redux';

export type Meta = null | { [key: string]: any };

export interface FSA<Type extends string, Payload = null> extends AnyAction {
    type: Type;
    payload?: Payload;
    error?: boolean;
    meta?: Meta;
};

export enum CounterActionType {
    increment = 'counter/INCREMENT',
    decrement = 'counter/DECREMENT',
};

export enum AsyncCounterActionType {
    incrementStarted = 'counter/INCREMENT_ASYNC_STARTED',
    incrementDone = 'counter/INCREMENT_ASYNC_DONE',
    incrementFailed = 'counter/INCREMENT_ASYNC_FAILED',
    decrementStarted = 'counter/DECREMENT_ASYNC_STARTED',
    decrementDone = 'counter/DECREMENT_ASYNC_DONE',
    decrementFailed = 'counter/DECREMENT_ASYNC_FAILED',
};

export type CounterAction = FSA<CounterActionType.increment> | FSA<CounterActionType.decrement>;

export type AsyncCounterAction = 
    | FSA<AsyncCounterActionType.incrementStarted>
    | FSA<AsyncCounterActionType.incrementDone>
    | FSA<AsyncCounterActionType.incrementFailed>
    | FSA<AsyncCounterActionType.decrementStarted>
    | FSA<AsyncCounterActionType.decrementDone>
    | FSA<AsyncCounterActionType.decrementFailed>;

export interface CounterState {
    readonly isLoading: boolean;
    readonly errorMessage: string;
    readonly count: number;
};