<template>
  <q-page class="column flex-center">
    <q-img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
      v-morph="myMorph"
      height="25vw"
      width="25vw"
      contain
    ></q-img>
    <q-btn label="Go To Other" @click="$router.push('/other')"/>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  computed: {
    myMorph () {
      return {
        name: 'main',
        group: 'morphGroup',
        model: this.morphModel,
        duration: 1000,
        style: 'z-index:20001;',
        tween: true
      }
    },
    morphModel () {
      if (this.$route.meta.logoInTopBar) {
        return 'top'
      } else {
        return 'main'
      }
    }
  }
}
</script>
