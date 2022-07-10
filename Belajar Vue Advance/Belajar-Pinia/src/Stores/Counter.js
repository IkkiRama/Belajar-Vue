import { defineStore } from "pinia";
export const Store = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    pokemon: "", 
  }),
  getters: {
    getCount: (state) => state.count + 100,
    doubleCount: (state) => state.count * 2,
    devidedBy: (state) => (divider) => state.count / divider,
    mutipleBy: (state) => (multiplier) => state.count * multiplier,
  },
  actions: {
    increment() { 
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementBy(num) {
      this.count += num;
    },
    decrementBy(num) {
      this.count -= num;
    },
    reset() {
      this.count = 0;
    },
    async fetchPokemon(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      this.pokemon = result;
    },
  },
});





