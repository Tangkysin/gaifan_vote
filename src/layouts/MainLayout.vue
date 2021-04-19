<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          label="投票记录"
          icon="reorder"
          to="/vote_detail"
        />
        <q-btn
          flat
          label="特色榜单"
          icon="hotel_class"
          to="/vote_rank"
        />
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
  data () {
    return {
    }
  }
}
</script>
