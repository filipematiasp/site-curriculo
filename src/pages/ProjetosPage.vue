<template>
    <div class="q-mt-lg">
        <h1>Projetos</h1>
    </div>
    <div class="text-body1">Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto.
        É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim.
        Você também pode alterar a fonte e mais.
        Sou um ótimo lugar para você compartilhar a sua história.
    </div>
    <div class="q-pa-md row q-gutter-md justify-center">
        <CardProjetos
            projectName='Site curriculo'
            img="printsitecurriculo.png"
            text="Site feito em vue.js e quasar, hospedado no serviço S3 da AWS"
        />
    </div>

</template>
<script setup>
import CardProjetos from '../components/CardProjetos.vue'

</script>

<style scoped>

</style>
