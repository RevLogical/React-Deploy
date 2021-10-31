import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import "tailwindcss/tailwind.css";

import Counter from './components/Counter';
import configureStore from './redux/store/configureStore';

const store: Store = configureStore();

interface IProps {
    compiler: string;
    framework: string;
};

const App: React.FC<IProps> = () => (
    <Provider store={store}>
        <Counter title="Counter" />
    </Provider>
);

export default App;