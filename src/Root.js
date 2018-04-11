import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './components/TodoList/index';

const Root = () => <TodoList />;

export default hot(module)(Root);
