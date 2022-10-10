<template>
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xl q-pl-xl col-4">
          <div class="text-h6 text-weight-bold text-primary">{{dtInit}}</div>
          <div class="text-body1">{{cargo}}</div>
          <div class="text-body1">{{empresa}}</div>
        </q-card-section>
        <q-card-section class="q-pa-xl">
          <div class="text-body1">{{text}}</div>
          <div class="text-body1">{{text2}}</div>
        </q-card-section>
      </q-card-section>
    </q-card>
</template>

<script setup>
const props = defineProps({
  dtInit: String,
  cargo: String,
  empresa: String,
  text: String,
  text2: String
})

console.log(props.dtInit)
</script>

<style scoped>
.my-card {
  width: 100%;
  height: 100%;
  max-height: 250px;
  max-width: 850px
}
</style>
