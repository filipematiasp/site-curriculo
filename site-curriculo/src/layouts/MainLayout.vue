<template>
  <q-layout view="hhh lpR fff">

    <q-header reveal class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          FILIPE MATIAS PINTO / DESENVOLVEDOR WEB
        </q-toolbar-title>
        <q-tabs align="right">
          <q-route-tab to="/page1" label="SOBRE MIM" />
          <q-route-tab to="/page2" label="CURRÍCULO" />
          <q-route-tab to="/page3" label="PROJETOS" />
          <q-route-tab to="/page3" label="CONTATO" />
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
    background: linear-gradient(to right, #E6DACE 0%, #E6DACE 50%, white 0%, white 50%)
  }
</style>
