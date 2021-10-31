import { SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { CounterActionType } from '../../types/counterTypes';
import { decrementAsyncWorker, incrementAsyncWorker } from './counterSaga';

export function* rootSaga(): SagaIterator {
    yield takeEvery(CounterActionType.increment, incrementAsyncWorker);
    yield takeEvery(CounterActionType.decrement, decrementAsyncWorker);
}