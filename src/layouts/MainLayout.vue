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
              label="جستوجو پیشرفته"
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
      <q-scroll-area class="fit"></q-scroll-area>
      <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="250"
        :breakpoint="500"
        class="bg-white"
      >
        <q-input
          color="grey-5"
          outlined
          v-model="text"
          label="جستوجو"
          dense
          class="q-px-md q-py-md"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-item clickable class="flex items-center">
          <q-icon
            name="dashboard"
            class="dashboard q-mr-md"
            color="blue"
            size="sm"
          ></q-icon>
          <span class="">پیشخوان</span>
        </q-item>

        <q-list>
          <q-expansion-item
            active-class="tab-active"
            icon="shop_2"
            label="بازرگانی، خرید و فروش"
            class="sub-item"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="content_paste"></q-icon>
              </q-item-section>
              <q-item-section>Proformas</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="receipt_long"></q-icon>
              </q-item-section>
              <q-item-section>Invoices</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="shopping_cart"></q-icon>
              </q-item-section>
              <q-item-section>Purchase</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="turn_left"></q-icon>
              </q-item-section>
              <q-item-section>Return from Sales</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Sales Type</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Purchase Type</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            icon="credit_card"
            label="دریافت و پرداخت"
            class="sub-item"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            icon="receipt_long"
            label="حسابداری"
            class="sub-item"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            icon="account_box"
            label="حقوق و دستمزد"
            class="sub-item"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item icon="home" label="انبارداری" class="sub-item">
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            icon="group"
            label="سازمان، مخاطب، کاربر"
            class="sub-item"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item icon="info" label="اطلاعات پایه" class="sub-item">
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            icon="bar_chart"
            label="گزارش‌ها"
            class="sub-item"
            id="reports"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="accent" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-separator inset />
          <div class="settings-header" @click="whenDashboardClicked">
            <q-item clickable class="flex items-center">
              <q-icon
                name="settings"
                class="settings q-mr-md"
                color="orange"
                size="sm"
              ></q-icon>
              <span class="">پیکربندی سامانه</span>
            </q-item>
          </div>
        </q-list>
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
