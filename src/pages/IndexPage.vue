<template>
  <q-card class="my-card fixed-center">
    <q-card-section horizontal>
      <div class="bk-card q-pa-xl">
        <q-avatar size="240px">
          <img src="../assets/profile-filipe.jpg"/>
        </q-avatar>
        <h1>Filipe Matias</h1>
        <hr/>
        <h2>Desenvolvedor web</h2>
        <q-card-actions class="q-mt-md" align="around">
          <q-btn flat size="lg" icon="fa-brands fa-linkedin-in" href="https://www.linkedin.com/in/filipe-matias-227151115/" target="_black"></q-btn>
          <q-btn flat size="lg" icon="fa-brands fa-github" href="https://github.com/filipematiasp" target="_black"></q-btn>
        </q-card-actions>
      </div>
      <q-card-section class="q-px-xl">
        <span class="text-big q-mb-md">Olá</span>
        <h2 class="q-mb-md">Meu perfil e meus projetos</h2>
        <div class="q-gutter-sm q-mb-lg">
          <q-btn rounded  color="primary" label="CURRÍCULO"/>
          <q-btn rounded label="PROJETOS"/>
        </div>
        <h3>Olá sou engenheiro de computação e atuo na área de desenvolvimento web desde 2020
          utilizando as linguagens Javascript, Nodejs, e banco de dados não relacional mongoDB
          e no front com Vue sendo minhas principais stack atualmente que utilizo profissionalmente
          e em projetos pessoais, tenho por objetivo me tornar especialista em desenvolvimento web.
        </h3>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
<style>
  .my-card {
    width: 100%;
    max-width: 1000px;
  }
  .text-big {
    font-weight: bold;
    font-size: 80px;
  }
  .bk-card {
    background-color: #F4ECE6;
  }
  h1, h2, h3, h4 {
    margin: 0;
    line-height: 1.6;
  }
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 35px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 15px;
  }
  hr {
    border: 0;
    width: 80px;
    border-top: 1px solid #094CFA;
  }
</style>
