import {legacy_createStore as createStore} from "redux";

const divToggle=document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션은 항상 TYPE을 가지고 있어야 한다
const TOGGLE_SWITCH_TYPE = 'TOGGLE_SWITCH'
const INCREASE_TYPE = 'INCREASE'
const DECREASE_TYPE = 'DECREASE'

// 액션 생성 함수 (action creator)
const toggleSwitch = () => ({type : TOGGLE_SWITCH_TYPE});
const increase = difference => ({type : INCREASE_TYPE, difference});
const decrease = () => ({type : DECREASE_TYPE})

const initialState = {
    toggle : false,
    counter : 0
}

// 변화를 일으키는 함수
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH_TYPE:
            return {...state, toggle : !state.toggle};
        case INCREASE_TYPE:
            return {...state, counter: state.counter + action.difference};
        case DECREASE_TYPE:
            return {...state, counter : state.counter - 1};
        default :
            return state;
    }
}
// store을 생성하자
const store = createStore(reducer);


const render = () => {
    const state = store.getState(); // 현재 상태를 불러옴
    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('active')
    }
    counter.innerText = state.counter
};
render()

store.subscribe(render)

//dispatch : 액션을 발생시키는것
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
}
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
}
btnDecrease.onclick = () => {
    store.dispatch(decrease());
}