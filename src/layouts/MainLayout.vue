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
          <div class="menu-button q-gutter-xs">
            <q-btn
              flat
              @click="drawerRight = !drawerRight"
              round
              dense
              icon="menu"
              class="text-grey-9"
            />
            <q-btn
              flat
              round
              dense
              color="grey-8"
              icon="search"
              class="text-dark xs"
            />
          </div>
          <div class="search-for-mobile xs"></div>
          <q-toolbar-title
            class="text-subtitle1 text-weight-bold col-5 q-mr-md flex justify-start"
            style="font-size: 13px"
          >
            {{ title }}
          </q-toolbar-title>

          <div class="search-bar col-4 q-mr-xl gt-sm">
            <q-input
              color="grey-5"
              outlined
              v-model="text"
              label="جستوجو پیشرفته"
              dense
              class="q-py-sm"
              style="font-size: 12px"
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
          <div class="round-icons q-gutter-sm col row justify-end">
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
        :width="270"
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
            class="sub-item text-grey-8"
          >
            <q-item
              clickable
              :active="link === 'active'"
              @click="link = 'active'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section q-mr-xs">
                <q-icon color="grey-8" name="content_paste"></q-icon>
              </q-item-section>
              <q-item-section>پیش‌فاکتور‌ها</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'receipt_long'"
              @click="link = 'receipt_long'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section q-mr-xs">
                <q-icon color="grey-8" name="receipt_long"></q-icon>
              </q-item-section>
              <q-item-section>فاکتور‌های فروش</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'shopping_cart'"
              @click="link = 'shopping_cart'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section q-mr-xs">
                <q-icon color="grey-8" name="shopping_cart"></q-icon>
              </q-item-section>
              <q-item-section>فاکتور‌های خرید</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'turn_left'"
              @click="link = 'turn_left'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section q-mr-xs">
                <q-icon color="grey-8" name="turn_left"></q-icon>
              </q-item-section>
              <q-item-section>برگشت از فروش‌ها</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'subject'"
              @click="link = 'subject'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section q-mr-xs">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>انواع فروش</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'subject-2'"
              @click="link = 'subject-2'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section q-mr-xs">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>انواع خرید</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            icon="credit_card"
            label="دریافت و پرداخت"
            class="sub-item text-grey-8"
          >
            <q-item
              clickable
              :active="link === 'arrow_downward'"
              @click="link = 'arrow_downward'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'arrow_upward'"
              @click="link = 'arrow_upward'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'attach_money'"
              @click="link = 'attach_money'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'swap_horiz'"
              @click="link = 'swap_horiz'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'subject'"
              @click="link = 'subject'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'monetization_on'"
              @click="link = 'monetization_on'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            icon="receipt_long"
            label="حسابداری"
            class="sub-item text-grey-8"
          >
            <q-item
              clickable
              :active="link === 'monetization_on'"
              @click="link = 'monetization_on'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'arrow_upward'"
              @click="link = 'arrow_upward'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'attach_money'"
              @click="link = 'attach_money'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'swap_horiz'"
              @click="link = 'swap_horiz'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item
              clickable
              :active="link === 'bank-accounts'"
              @click="link = 'bank-accounts'"
              active-class="my-menu-link"
            >
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            icon="account_box"
            label="حقوق و دستمزد"
            class="sub-item text-grey-8"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            icon="home"
            label="انبارداری"
            class="sub-item text-grey-8"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            icon="group"
            label="سازمان، مخاطب، کاربر"
            class="sub-item text-grey-8"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            icon="info"
            label="اطلاعات پایه"
            class="sub-item text-grey-8"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="monetization_on"></q-icon>
              </q-item-section>
              <q-item-section>Cashs</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            icon="bar_chart"
            label="گزارش‌ها"
            class="sub-item text-grey-8"
            id="reports"
          >
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_downward"></q-icon>
              </q-item-section>
              <q-item-section>Receipts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="arrow_upward"></q-icon>
              </q-item-section>
              <q-item-section>Payments</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="attach_money"></q-icon>
              </q-item-section>
              <q-item-section>Bills</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="swap_horiz"></q-icon>
              </q-item-section>
              <q-item-section>Transfer Money</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="subject"></q-icon>
              </q-item-section>
              <q-item-section>Bank Accounts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar class="item-section">
                <q-icon color="grey-8" name="monetization_on"></q-icon>
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
// Drawer
const drawerRight = ref(false);
const title = ref("دفتر کارگشا - فهرست پیش فاکتور");
// Active
const link = ref("active");
</script>
