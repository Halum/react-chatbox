import React from 'react';
import { render} from 'react-dom';
import ChatBox from '../../src';

const App = () => (
    <ChatBox />
);

render(<App />, document.getElementById("root"));