import { put, call, cancelled, delay } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { asyncCounterActions } from '../actions/counter.actions';

export function* incrementAsyncWorker(): SagaIterator {
    yield put(asyncCounterActions.incrementStarted());
    try {
        yield call(delay, 1000);
        if (Math.random() > 0.8) {
            throw new Error();
        }
        yield put(asyncCounterActions.incrementDone());
    } catch {
        yield put(asyncCounterActions.incrementFailed());
    } finally {
        if (yield cancelled()) {
            yield put(asyncCounterActions.incrementFailed());
        }
    }
}

export function* decrementAsyncWorker(): SagaIterator {
    yield put(asyncCounterActions.decrementStarted());
    try {
        yield call(delay, 1000);
        if (Math.random() > 0.8) {
            throw new Error();
        }
        yield put(asyncCounterActions.decrementDone());
    } catch {
        yield put(asyncCounterActions.decrementFailed());
    } finally {
        if (yield cancelled()) {
            yield put(asyncCounterActions.decrementDone());
        }
    }
}


