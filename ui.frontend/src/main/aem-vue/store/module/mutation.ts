export const INCREMENT = (state: { count: number }) => {
    state.count++;
};

export const RESET = (state: { count: number }) => {
    state.count = 1;
};

export const INCREMENTVAL = (state: { counterVal: number}) => {
    state.counterVal++;
};

export const DECREMENTVAL = (state: { counterVal: number}) => {
    state.counterVal--;
};
