<template>

    <div class="q-mt-lg text-h1">
        <h1>Currículo</h1>
    </div>
    <div class="q-pa-md row q-gutter-md justify-center">
        <CardCurriculo
            dtInit='set 2020 - set 2022'
            cargo="Desenvolvedor Full-Stack"
            empresa="Globalbot"
            text="ATIVIDADES:
            Responsável pela implementação de novas
            features e correção de bugs, integração entre o
            sistema da empresa com de terceiros para
            automatização dos bots, manutenção das apis e
            front-end."
            text2="
            TECNOLOGIAS UTILIZADAS
            • NodeJS
            • Express.JS
            • MongoDb
            • Vue.js
            • Quasar
            • CSS
            • JavaScript"
        />
        <CardCurriculo
            dtInit='fev 2020 - ago 2020'
            cargo="Assistente de TI"
            empresa="Academy Class"
            text="ATIVIDADES:
            Responsável pela manutenção dos sistemas
            operacionais Linux, pela rede do call center."
            text2="TECNOLOGIAS UTILIZADAS:
            • Linux
            • Roteador microtik
            • Sistema operacional Windows
            • Hardware"
        />
        <CardCurriculo
            dtInit='mar 2018 - ago 2018'
            cargo="Suporte técnico"
            empresa="Softsystem Engenharia de software"
            text="ATIVIDADE:
            Suporte n1 e n2"
            text2="TECNOLOGIAS UTILIZADAS
            • Software cosmo
            • Firebase
            • SO Windows"
        />

    </div>
</template>

<script setup>
import CardCurriculo from '../components/CardCurriculo.vue'

</script>

<style scoped>

</style>
