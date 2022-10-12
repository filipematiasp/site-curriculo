<template>
    <div class="fit column inline justify-center content-center">
        <div class="q-mt-lg self-center">
            <h1>Projetos</h1>
            <div class="text-body1 my-description text-center">
                Fala galera segue aqui alguns de meus projetos que desenvolvo para estudar e
                para brincar com algumas tecnologias desse mundo dev,
                abaixo tem uma breve descrição e o link para poder visualizar o código no github.
            </div>
        </div>
        <div class="q-pa-md q-gutter-md ">
            <CardProjetos
                projectName='Site curriculo'
                img="printsitecurriculo.png"
                text="Site feito em vue.js e quasar, hospedado no serviço S3 da AWS"
            />
        </div>
    </div>

</template>
<script setup>
import CardProjetos from '../components/CardProjetos.vue'

</script>

<style scoped>
.my-description {
    width: auto;
    max-width: 580px;
}

</style>
