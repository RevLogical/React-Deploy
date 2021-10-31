import { counterActions, asyncCounterActions } from '../redux/actions/counter.actions';
import { counterReducer } from '../redux/reducers/counterReducer';

describe('counter actions', () => {
    it('increment should create another counter/INCREMENT action', () => {
        expect(counterActions.increment()).toEqual({
            type: 'counter/INCREMENT',
        });
    });

    it('decrement should create counter/DECREMENT action', () => {
        expect(counterActions.decrement()).toEqual({
            type: 'counter/DECREMENT',
        });
    });
});

describe('counter async actions', () => {
    it('asyncActions.incrementStated should create counter/INCREMENT_ASYNC_STARTED action', () => {
        expect(asyncCounterActions.incrementStarted()).toEqual({
            type: 'counter/INCREMENT_ASYNC_STARTED',
        });
    });

    it('asyncActions.incrementDone should create counter/INCREMENT_ASYNC_DONE action', () => {
    expect(asyncCounterActions.incrementDone()).toEqual({
      type: 'counter/INCREMENT_ASYNC_DONE',
    });
  });

  it('asyncActions.incrementFailed should create counter/INCREMENT_ASYNC_FAILED action', () => {
    expect(asyncCounterActions.incrementFailed()).toEqual({
      type: 'counter/INCREMENT_ASYNC_FAILED',
    });
  });

  it('asyncActions.decrementStarted should create counter/DECREMENT_ASYNC_STARTED action', () => {
    expect(asyncCounterActions.decrementStarted()).toEqual({
      type: 'counter/DECREMENT_ASYNC_STARTED',
    });
  });

  it('asyncActions.decrementDone should create counter/DECREMENT_ASYNC_DONE action', () => {
    expect(asyncCounterActions.decrementDone()).toEqual({
      type: 'counter/DECREMENT_ASYNC_DONE',
    });
  });

  it('asyncActions.decrementFailed should create counter/DECREMENT_ASYNC_FAILED action', () => {
    expect(asyncCounterActions.decrementFailed()).toEqual({
      type: 'counter/DECREMENT_ASYNC_FAILED',
    });
  });
});

describe('counter reducer', () => {
  it('should handle counter/INCREMENT_ASYNC_STARTED', () => {
    expect(
      counterReducer(
        {
          isLoading: false,
          errorMessage: 'Request failed',
          count: 0,
        },
        asyncCounterActions.incrementStarted()
      )
    ).toEqual({
      isLoading: true,
      errorMessage: '',
      count: 0,
    });
  });

  it('should handle counter/INCREMENT_ASYNC_DONE', () => {
    expect(
      counterReducer(
        {
          isLoading: true,
          errorMessage: '',
          count: 0,
        },
        asyncCounterActions.incrementDone()
      )
    ).toEqual({
      isLoading: false,
      errorMessage: '',
      count: 1,
    });
  });

  it('should handle counter/INCREMENT_ASYNC_FAILED', () => {
    expect(
      counterReducer(
        {
          isLoading: true,
          errorMessage: '',
          count: 1,
        },
        asyncCounterActions.incrementFailed()
      )
    ).toEqual({
      isLoading: false,
      errorMessage: 'Request failed',
      count: 1,
    });
  });

  it('should handle counter/DECREMENT_ASYNC_STARTED', () => {
    expect(
      counterReducer(
        {
          isLoading: false,
          errorMessage: 'Request failed',
          count: 1,
        },
        asyncCounterActions.decrementStarted()
      )
    ).toEqual({
      isLoading: true,
      errorMessage: '',
      count: 1,
    });
  });

  it('should handle counter/DECREMENT_ASYNC_DONE', () => {
    expect(
      counterReducer(
        {
          isLoading: true,
          errorMessage: '',
          count: 1,
        },
        asyncCounterActions.decrementDone()
      )
    ).toEqual({
      isLoading: false,
      errorMessage: '',
      count: 0,
    });
  });

  it('should handle counter/DECREMENT_ASYNC_FAILED', () => {
    expect(
      counterReducer(
        {
          isLoading: true,
          errorMessage: '',
          count: 0,
        },
        asyncCounterActions.decrementFailed()
      )
    ).toEqual({
      isLoading: false,
      errorMessage: 'Request failed',
      count: 0,
    });
  });
});