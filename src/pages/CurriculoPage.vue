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
    <div class="q-mt-lg text-h1">
        <h1>Estágios</h1>
    </div>
    <div class="q-pa-md row q-gutter-md justify-center">
        <CardCurriculo
            dtInit='jan 2016 - dez 2016'
            cargo="Estagiário de TI"
            empresa="Ministério das Comunicações"
            text="ATIVIDADES:
            Apoiei na área de infraestrutura de ti, realizando:
            Atendimentos de suporte nível 2; Manutenção em
            hardware e software"
        />
        <CardCurriculo
            dtInit='jan 2015 - jun 2015'
            cargo="Estagiário"
            empresa="ProdutivaTI"
            text="ATIVIDADES:
            Criação de animações para cursos online"
            text2="TECNOLOGIAS UTILIZADAS
            • Photoshop
            • Pacotes adobe"
        />
    </div>
    <div class="q-mt-lg text-h1">
        <h1>Formação</h1>
    </div>
    <div class="q-pa-md row q-gutter-md justify-center">
        <CardCurriculo
            dtInit='jun 2012 - dez 2017'
            cargo="Engenharia da computação"
            empresa="IESB"
            text="Dissertação sobre 'Estudo comparativo entre
            Docker e Máquinas Virtuais' .Desenvolvimento de
            projetos eletrônicos: Medidor de consumo de
            energia elétrica residencial (arduino); Projeto de
            Tretis com matriz de leds (arduino).Atuação em
            campeonato de guerra de Robôs controlados via
            Xbee."
        />
    </div>
    <div class="q-pa-md row q-gutter-md justify-center">
        <q-card class="my-skills">
            <div class="q-pa-lg text-h5 text-weight-bolder">Competências</div>
            <q-card-section class="q-pt-lg q-pl-lg row justify-around">
                <div>
                    <div class="text-body1">JavaScript</div>
                    <q-rating :model-value="3" size="1.5em" color="primary" readonly />
                </div>
                <div>
                    <div class="text-body1">Noje.js</div>
                    <q-rating :model-value="3" size="1.5em" color="primary" readonly />
                </div>
                <div>
                    <div class="text-body1">MongoDb</div>
                    <q-rating :model-value="3" size="1.5em" color="primary" readonly />
                </div>
                <div>
                    <div class="text-body1">Vue.js</div>
                    <q-rating :model-value="3" size="1.5em" color="primary" readonly />
                </div>
                <div>
                    <div class="text-body1">SQL</div>
                    <q-rating :model-value="2" size="1.5em" color="primary" readonly />
                </div>
            </q-card-section>
            <div class="q-pa-lg text-h5 text-weight-bolder">Idiomas</div>
            <q-card-section class="q-pt-lg q-pl-lg">
                <div class="q-mb-md">
                    <div class="text-body1">Português (Nativo)</div>
                    <q-rating :model-value="5" size="1.5em" color="primary" readonly />
                </div>
                <div>
                    <div class="text-body1">Inglês</div>
                    <q-rating :model-value="3" size="1.5em" color="primary" readonly />
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup>
import CardCurriculo from '../components/CardCurriculo.vue'

</script>

<style scoped>
.my-skills {
    width: 850px;
    height: 430px;
  }
</style>
