<template>
  <div class="">
    <q-layout
      view="hHh LpR fFf"
      container
      style="height: 100vh"
      class="float-right"
    >
      <q-header bordered class="bg-white">
        <q-toolbar class="text-dark">
          <q-toolbar-title class="text-subtitle1 text-weight-bold">
            {{ title }}
          </q-toolbar-title>
          <div class="round-icons q-gutter-sm">
            <q-btn
              flat
              round
              dense
              color="grey-8"
              icon="settings"
              class="text-dark"
            />
            <q-btn
              flat
              round
              dense
              color="grey-8"
              icon="account_circle"
              class="text-dark"
            />
            <q-btn
              flat
              round
              dense
              color="grey-8"
              icon="person_search"
              class="text-dark"
            />
          </div>

          <q-btn
            flat
            @click="drawerRight = !drawerRight"
            round
            dense
            icon="menu"
            class="text-grey-9 q-ml-md"
          />
        </q-toolbar>
      </q-header>
      <q-scroll-area class="fit"> </q-scroll-area>

      <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="250"
        :breakpoint="500"
        class="bg-white"
      >
      </q-drawer>

      <q-page-container>
        <q-page> </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";

const drawerRight = ref(false);
const title = ref("دفتر کارگشا - فهرست پیش فاکتور");
</script>
