const initialState = {};

export default function (store = initialState, action) {
  switch (action && action.type) {
    case 'CLICK_HANDLER':
      store.message = 'SUCCESS';
      return store;
    case 'SAGA_APP':
    console.log('REDUCR______SAGA_APP', action.data);
      store.message = 'saga reducers';
      return store
    default:
      return store;
  }
}
