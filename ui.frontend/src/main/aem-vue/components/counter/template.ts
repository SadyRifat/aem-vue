const CountTemplate = {
    template: `<div class="counter flex">
                    <button @click="decrementCount" class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-none shadow-sm">-</button>
                    <h4 class="min-w-[50px] text-center"> {{counterNow}} </h4>
                    <button @click="incrementCount" class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-none shadow-sm">+</button>
                </div>`,
    props: ['modelData']
};
export default CountTemplate;
