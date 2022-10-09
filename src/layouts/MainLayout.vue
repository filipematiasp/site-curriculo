<template>
  <q-layout view="hhh lpR fff">

    <q-header reveal class="bg-white text-black q-pa-md" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat to="/"><span class="text-bold text-subtitle1">FILIPE MATIAS</span></q-btn>
          <q-btn flat padding="none" to="/">/</q-btn>
          <q-btn flat to="/"><span class="text-subtitle1">DESENVOLVEDOR WEB</span></q-btn>
        </q-toolbar-title>
        <q-tabs align="right">
          <q-route-tab to="/" label="SOBRE MIM" />
          <q-route-tab to="/curriculo" label="CURRÍCULO" />
          <q-route-tab to="/projetos" label="PROJETOS" />
          <q-route-tab to="/contato" label="CONTATO" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style>
  body {
    background: linear-gradient(to right, #E6DACE 0%, #E6DACE 38%, white 0%, white 50%)
  }
</style>
