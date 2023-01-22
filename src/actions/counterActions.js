export const SET_COUNT = "SET_COUNT";

export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";

export const setCount = (counter) => ({
  type: SET_COUNT,
  payload: counter
});

export const incCount = () => ({
  type: INC_COUNT
});
export const decCount = () => ({
  type: DEC_COUNT
});
