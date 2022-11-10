<template>
  <q-card class="my-card">
    <q-card-section class="row q-pa-none">
      <q-card-section class="q-pt-xl q-pl-xl col-sm-4">
        <div class="text-h6 text-weight-bold text-primary col">{{dtInit}}</div>
        <div class="text-body1 col">{{cargo}}</div>
        <div class="text-body1 col">{{empresa}}</div>
      </q-card-section>
      <q-card-section class="q-pa-xl col-sm-8">
        <div class="text-body1">{{text}}</div>
        <div class="text-body1">{{text2}}</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  dtInit: String,
  cargo: String,
  empresa: String,
  text: String,
  text2: String
})

</script>

<style scoped>
  .my-card {
    width: 850px;
  }
</style>
