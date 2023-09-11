export const INCREMENT = (state: { count: number }) => {
    state.count++;
};

export const RESET = (state: { count: number }) => {
    state.count = 1;
};
