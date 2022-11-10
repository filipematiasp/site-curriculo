<template>
  <q-card class="my-card">
    <q-card-section class="row q-pa-none">
      <q-card-section class="q-pt-xl q-pl-xl col-sm-6">
        <div class="text-h6 text-weight-bold text-primary q-mb-lg">{{projectName}}</div>
        <div class="text-body2">{{text}}</div>
        <div class="text-body2">{{text2}}</div>
        <q-btn color="primary" :label=btnName :icon=brand :href=url target="_black"></q-btn>
      </q-card-section>
      <q-card-section class="q-pa-xl col-sm-6 col-xs-10">
        <q-img :src="require('../assets/' + img)" />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  projectName: String,
  img: String,
  text: String,
  text2: String,
  url: String,
  brand: String,
  btnName: String
})

</script>

<style scoped>
.my-card {
  width: 680px;
}
</style>
