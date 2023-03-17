<template>
  <div class="container" dir="rtl">
    <q-layout view="lHh lpR fFf" container style="height: 100vh">
      <q-layout-container>
        <TheSidebar />
        <q-page-container>
          <q-page class="q-px-md">
            <router-view />
          </q-page>
        </q-page-container>
      </q-layout-container>
    </q-layout>
  </div>
</template>

<script setup>
import TheSidebar from "../components/TheSidebar.vue";
</script>

<style></style>
