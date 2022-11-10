<template>
  <div class="q-pa-lg">
    <q-card>
      <q-card-section class="row q-pa-none">
        <div class="bk-card col-sm-4 col-12 q-px-xl q-py-md">
          <div class="row justify-center">
            <q-avatar size="200px">
              <img src="../assets/profile-filipe.jpg"/>
            </q-avatar>
          </div>
          <h1>Filipe Matias</h1>
          <hr/>
          <h3>Desenvolvedor web</h3>
          <q-card-actions class="q-mt-md" align="center">
            <q-btn flat size="lg" icon="fa-brands fa-linkedin-in" href="https://www.linkedin.com/in/filipe-matias-227151115/" target="_black"></q-btn>
            <q-btn flat size="lg" icon="fa-brands fa-github" href="https://github.com/filipematiasp" target="_black"></q-btn>
          </q-card-actions>
        </div>
        <q-card-section class="col-sm-8 col-12 q-px-xl">
          <div class="">
            <span class="text-big q-mb-md">Olá</span>
            <h2 class="q-mb-md">Meu perfil e meus projetos</h2>
            <div class="q-gutter-sm q-mb-lg">
              <q-btn rounded  color="primary" label="CURRÍCULO" to="/curriculo"/>
              <q-btn rounded label="PROJETOS" to="projetos"/>
            </div>
            <p>Olá sou engenheiro de computação e atuo na área de desenvolvimento web desde 2020
              utilizando as linguagens Javascript, Nodejs, e banco de dados não relacional mongoDB
              e no front com Vue sendo minhas principais stack atualmente que utilizo profissionalmente
              e em projetos pessoais, tenho por objetivo me tornar especialista em desenvolvimento web.
            </p>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
<style>
  .text-big {
    font-weight: bold;
    font-size: 80px;
  }
  .bk-card {
    background-color: #F4ECE6;
  }
  h1, h2, h3, h4 {
    margin: 0;
    line-height: 1.5;
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
    text-align: center;
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
  p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-size : 16px
  }
</style>
