<template>
    <q-card class="my-card row fixed-center">
      <q-card-section horizontal>
        <q-card-section class="">
          <div class="text-h5">2019 Atual</div>
          <div class="text-h6">Desenvolvedor full-stack</div>
          <div class="text-h5">Globalbot</div>
        </q-card-section>

          {{paragrafo}}
      </q-card-section>
    </q-card>
</template>

<script setup>
const paragrafo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const props = defineProps({
  dtInit: String
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
