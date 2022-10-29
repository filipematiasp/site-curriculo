<template>
  <q-card class="my-card">
    <q-card-section horizontal class="justify-between">
      <q-card-section class="q-pt-xl q-pl-xl">
        <div class="text-h6 text-weight-bold text-primary q-mb-lg">{{projectName}}</div>
        <div class="text-body2">{{text}}</div>
        <div class="text-body2">{{text2}}</div>
        <q-btn color="primary" :label=btnName :icon=brand :href=url target="_black"></q-btn>
      </q-card-section>
        <q-img class="col-5 " :src="require('../assets/' + img)"  style="height: auto; max-height: 350px"/>
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
  height: 350px;
}
</style>
