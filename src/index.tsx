import * as ReactDOM from 'react-dom';
import App from "./App";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById('app') as HTMLElement
);