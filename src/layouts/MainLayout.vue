<template>
  <div class="">
    <q-layout
      dir="rtl"
      view="hHh LpR fFf"
      container
      style="height: 100vh"
      class="float-right"
    >
      <q-header bordered class="bg-white">
        <q-toolbar class="text-dark row">
          <div class="menu-button">
            <q-btn
              flat
              @click="drawerRight = !drawerRight"
              round
              dense
              icon="menu"
              class="text-grey-9 q-ml-md"
            />
          </div>
          <div class="search-for-mobile xs">
            <q-btn
              flat
              round
              dense
              color="grey-8"
              icon="search"
              class="text-dark"
            />
          </div>
          <q-toolbar-title
            class="text-subtitle1 text-weight-bold col-6 q-pl-md q-mr-xs flex justify-start"
            style="font-size: 14px"
          >
            {{ title }}
          </q-toolbar-title>

          <div class="search-bar col-4 q-pl-lg gt-sm">
            <q-input
              color="grey-5"
              outlined
              v-model="text"
              label="جستوجو"
              dense
              class="q-py-sm"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
              <template v-slot:append>
                <q-btn
                  flat
                  round
                  dense
                  color="grey-8"
                  icon="tune"
                  class="text-dark"
                />
              </template>
            </q-input>
          </div>
          <div class="round-icons q-gutter-sm q-pr-sm col flex justify-end">
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
              class="text-dark gt-xs"
            />
          </div>
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
