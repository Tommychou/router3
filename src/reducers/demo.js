import 'whatwg-fetch';

import Immutable from 'immutable';

const INIT = 'demoINIT';
const FAIL = 'demoFAIL';
const SUCC = 'demoSUCC';


// const initialState = {
//   demo : []
// };

const initialState = Immutable.fromJS({
    demo: []
});


export default function demo(state = initialState, action = {type: INIT}) {
  switch (action.type) {
    case SUCC:
      // return {demo:action.data.data}
      return state.merge({
            demo:action.data.data
        });
    default:
      return state;
  }
}

const Fail = () => ({
  type: FAIL
})

const ajaxSuccess = (info) => {
  return{
    type : SUCC,
    data : info
  }
}

export function fetchData(){
  return async (dispatch,getState) =>{
    const rsp = await fetch('https://cnodejs.org/api/v1/topics');

    const data = await rsp.json();

    dispatch(ajaxSuccess(data));

  }
}







