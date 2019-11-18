<template>
    <div>
        <section class="cadastro-form">
            <form>
                <h2>Sucesso!</h2>
                <p class="hint-text">
                    Este é seu link de convite exclusivo.
                </p>
                <div class="form-group">
                    <input v-model="link" type="text" class="form-control" name="link" placeholder="Link" required="required" />
                </div>
                <div class="form-group">
                    <button type="buton" class="btn btn-success btn-lg btn-block">
                        Copiar
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    name: "Confirmacao",
    data() {
        return {
            link: ""
        };
    },
    mounted() {},
    methods: {
        cadastrar() {}
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
