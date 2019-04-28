// 利用する変数をimportする
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from './types';

var nextTodoId = 0;

// タスク追加イベント
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

// フィルターする
export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

// タスクのステータス変更
export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
