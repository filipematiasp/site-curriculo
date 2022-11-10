<template>
    <div class="q-mt-lg text-h1">
        <h1>Projetos</h1>
        <div class="row justify-center">
            <div class="text-body1 my-description text-center">
                Fala galera segue aqui alguns de meus projetos que desenvolvo para estudar e
                para brincar com algumas tecnologias desse mundo dev,
                abaixo tem uma breve descrição e o link para poder visualizar o código no github.
            </div>
        </div>
    </div>
    <div class="q-pa-md row q-gutter-md justify-center">
        <CardProjetos
            projectName='Site curriculo'
            img="printsitecurriculo.png"
            text="Site feito em vue.js e quasar, hospedado no serviço S3 da AWS"
            url="https://github.com/filipematiasp/site-curriculo"
            brand="fa-brands fa-github"
            btnName="GITHUB"
        />
        <CardProjetos
            projectName='Desafio Open Food Facts'
            img="openfood.png"
            text="Desafio open food, feita a criação de uma sistema que busca informações no banco e exibe na tela os produtos, foi feito um sistema de paginação para não sobrecarregar a janela, e modal de edição. Back-end: nodejs, express, jest, mongodb. Front-end: Vuejs e bootstrap."
            url="https://github.com/filipematiasp/front-openFoodFacts"
            brand="fa-brands fa-github"
            btnName="GITHUB"
        />
        <CardProjetos
            projectName='Analogic clock'
            img="analogicclock.png"
            text="Relógio feito com html, css, e js"
            url="https://codepen.io/filipematiasp/pen/ZEpjBgY"
            brand="fa-brands fa-codepen"
            btnName="CODEPEN"
        />
        <CardProjetos
            projectName='Roleta'
            img="roleta.png"
            text="Roleta feita com html, css, e js. Clique no girar para ativar a roleta."
            url="https://codepen.io/filipematiasp/details/XWjBMvO"
            brand="fa-brands fa-codepen"
            btnName="CODEPEN"
        />
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
