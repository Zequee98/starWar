export const DRAWER_CLOSE = 'DRAWER_CLOSE';
export const DRAWER_OPEN = 'DRAWER_OPEN';
export const CHANGE_DATA = 'CHANGE_DATA';

export const handleDrawerChange = (item, from) => (dispatch, getState) => {
  if (!item) return dispatch({ type: DRAWER_CLOSE });

  const { drawer } = getState();
  
  if (drawer.item && (item.title || item.name) === (drawer.item.title || drawer.item.name)) { 
    return dispatch({ type: DRAWER_CLOSE })
  }

  return dispatch({
    type: "DRAWER_OPEN",
    payload: { item }
  })
};