import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { counterActions } from '../redux/actions/counter.actions';
import { CounterState, CounterAction } from '../types/counterTypes';
import { State } from '../types/appTypes';

export interface IProps {
    readonly title: string;
};

export interface IStateProps {
    counter: CounterState;
};

export interface IDispatchProps extends ReturnType<typeof mapDispatchToProps> {}

const Counter: React.FC<IProps & IStateProps & IDispatchProps> = ({
    title,
    counter,
    increment,
    decrement,
}): JSX.Element => {
    const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => increment();
    const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => decrement();

    return (
        <div>
            <h1>{title}</h1>
            <p>Clicked: {counter.count} times</p>
            <button disabled={counter.isLoading} onClick={handleIncrement}>
                +
            </button>
            <button disabled={counter.isLoading} onClick={handleDecrement}>
                -
            </button>
            {counter.errorMessage && <p>{counter.errorMessage}</p>}
        </div>
    );
};

const mapStateToProps = (state: State): IStateProps => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => bindActionCreators(counterActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
