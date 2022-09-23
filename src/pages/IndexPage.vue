<template>
  <q-card class="my-card fixed-center">
    <q-card-section horizontal>
      <div>
        <q-avatar font-size="150px">
          <img width="150px" src="../assets/profile-filipe.jpg"/>
        </q-avatar>
        <h1>Filipe Matias</h1>
        <hr/>
        <h2>Desenvolvedor web</h2>
        <div>

        </div>
      </div>
      <q-card-section>
        <h1>Olá</h1>
        <h2>Meu perfil e meus projetos</h2>
        <div class="q-gutter-sm">
          <q-btn rounded color="primary" label="CURRÍCULO"/>
          <q-btn rounded label="PROJETOS"/>
        </div>
        <h4>Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.</h4>
      </q-card-section>
    </q-card-section>
    <q-card-action>
      <q-icon size="sm" class="q-pr-lg" name="fa-brands fa-linkedin-in"/>
      <q-icon size="sm" name="fa-brands fa-github"/>
    </q-card-action>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
<style>
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 20px;
  }
  hr {
    border: 0;
    width: 70px;
    border-top: 2px solid #094CFA;
  }
</style>
