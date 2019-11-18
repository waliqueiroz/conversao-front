<template>
    <div class="cadastro-form">
        <form @submit.prevent="cadastrar()">
            <h2>Registre-se</h2>
            <p class="hint-text">
                Crie sua conta. É de graça e leva apenas um minuto.
            </p>
            <div class="form-group">
                <input v-model="dados.nome" type="text" class="form-control" name="nome" placeholder="Nome" required="required" />
            </div>
            <div class="form-group">
                <input v-model="dados.email" type="email" class="form-control" name="email" placeholder="Email" required="required" />
            </div>
            <div class="form-group">
                <input v-model="dados.telefone" type="text" class="form-control" v-mask="['(##)#####-####', '(##)####-####']" name="telefone" placeholder="Telefone" required="required" />
            </div>
            <div class="form-group">
                <input v-model="dados.cpf" type="text" v-mask="'###.###.###-##'" class="form-control" name="cpf" placeholder="CPF" required="required" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block">
                    Cadastrar
                </button>
            </div>
        </form>
        <div class="text-center">Já tem uma conta? <a href="#">Faça login aqui</a></div>
    </div>
</template>

<script>
import api from "@/services/api";
import { mask } from "vue-the-mask";

export default {
    name: "Formulario",
    components: {},
    directives: {
        mask
    },
    data() {
        return {
            dados: {
                nome: "",
                email: "",
                telefone: "",
                cpf: "",
                hash: ""
            }
        };
    },
    mounted() {},
    methods: {
        cadastrar() {}
    },
    watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
