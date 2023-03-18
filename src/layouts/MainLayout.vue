<template>
  <div class="container" dir="rtl">
    <q-layout view="rHh rpR fFf" container style="height: 100vh">
      <TheSidebar />
      <q-page-container>
        <q-page class="q-px-md">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import TheSidebar from "../components/TheSidebar.vue";
</script>

<style></style>
