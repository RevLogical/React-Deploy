import { Reducer } from "redux";
import { State } from "../../types/appTypes";
import { CounterAction, AsyncCounterAction, AsyncCounterActionType, CounterState } from "../../types/counterTypes";

const initialState: CounterState = {
    isLoading: false,
    errorMessage: '',
    count: 0,
};

export const counterReducer: Reducer<State['counter'], CounterAction | AsyncCounterAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case AsyncCounterActionType.incrementStarted:
        case AsyncCounterActionType.decrementStarted: {
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            };
        }
        case AsyncCounterActionType.incrementFailed:
        case AsyncCounterActionType.decrementFailed: {
            return {
                ...state,
                isLoading: false,
                errorMessage: 'Request failed',
            };
        }
        case AsyncCounterActionType.incrementDone: {
            return {
                ...state,
                isLoading: false,
                count: state.count + 2,
            };
        }
        case AsyncCounterActionType.decrementDone: {
            return {
                ...state,
                isLoading: false,
                count: state.count - 3,
            };
        }
        default:
            return state;
    }
};