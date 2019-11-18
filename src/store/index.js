import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		temas: {
			default: true,
			dark: false
		}
	},
	mutations: {
		SET_TEMA(state, tema) {
			if (tema == "default") {
				state.temas.default = true;
				state.temas.dark = false;
			} else {
				state.temas.default = false;
				state.temas.dark = true;
			}
		}
	},
	getters: {
	}
});
