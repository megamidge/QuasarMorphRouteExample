<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <q-img
          alt="Quasar logo"
          src="~assets/quasar-logo-full.svg"
          v-morph="myMorph"
          height="3rem"
          width="3rem"
          contain
        ></q-img>
        <q-space/>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  computed: {
    myMorph () {
      return {
        name: 'top',
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
