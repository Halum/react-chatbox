import React from 'react';
import { render} from 'react-dom';
import ChatBox from '../../src';

const App = () => (
    <ChatBox title="Group Chat"/>
);

render(<App />, document.getElementById("root"));