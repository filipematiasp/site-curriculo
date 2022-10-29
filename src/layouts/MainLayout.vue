<template>
  <q-layout view="hhh lpR fff">

    <q-header reveal class="bg-white text-black q-pa-md" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat round dense icon="home" to="/" class="q-mr-sm xs" />
          <q-btn flat to="/" class=""><span class="text-bold text-subtitle1 gt-xs">FILIPE MATIAS</span></q-btn>
          <q-btn flat padding="none" to="/" class="gt-xs">/</q-btn>
          <q-btn flat to="/" class=""><span class="text-subtitle1 gt-xs">DESENVOLVEDOR WEB</span></q-btn>
        </q-toolbar-title>
        <q-tabs align="right">
          <q-route-tab to="/" label="SOBRE MIM" class="gt-sm" />
          <q-route-tab to="/curriculo" label="CURRÍCULO" class="gt-sm" />
          <q-route-tab to="/projetos" label="PROJETOS" class="gt-sm" />
          <q-route-tab to="/contato" label="CONTATO" class="gt-sm" />
          <q-btn-dropdown flat round dense icon="menu" class="q-mr-sm lt-md">
            <q-list>
              <q-item clickable to="/">
                <q-item-section>SOBRE MIM</q-item-section>
              </q-item>
              <q-item clickable to="/curriculo">
                <q-item-section>CURRÍCULO</q-item-section>
              </q-item>
              <q-item clickable to="/projetos">
                <q-item-section>PROJETOS</q-item-section>
              </q-item>
              <q-item clickable to="/contato">
                <q-item-section>CONTATO</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
