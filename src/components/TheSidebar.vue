<template>
  <nav>
    <q-header bordered class="bg-white" style="padding: 0 9px">
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

    <q-drawer
      side="right"
      v-model="drawerRight"
      show-if-above
      :width="301"
      :breakpoint="500"
      class="drawer bg-white"
      style="font-size: 12px; font-weight: 600"
    >
      <div class="searchbar-sidebar q-mb-md q-pr-lg">
        <q-input
          color="grey-5"
          outlined
          v-model="text"
          label="جستوجو"
          dense
          class=""
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <q-list class="q-px-lg">
        <div class="settings" style="cursor: pointer">
          <q-item class="flex items-center q-mr-sm">
            <q-icon
              name="dashboard"
              class="dashboard q-mr-xs"
              color="blue"
              size="sm"
            ></q-icon>
            <span class="" style="margin-right: 13px">پیشخوان</span>
          </q-item>
        </div>
        <q-expansion-item
          icon="shop_2"
          label="بازرگانی، خرید و فروش"
          class="sub-item text-grey-8"
        >
          <q-item
            clickable
            :active="link === 'content_paste'"
            @click="link = 'content_paste'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
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
            <q-item-section avatar class="item-section q-mr-sm">
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
            <q-item-section avatar class="item-section q-mr-sm">
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
            <q-item-section avatar class="item-section q-mr-sm">
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
            <q-item-section avatar class="item-section q-mr-sm">
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
            <q-item-section avatar class="item-section q-mr-sm">
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
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="arrow_downward"></q-icon>
            </q-item-section>
            <q-item-section>دریافت‌ها</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'arrow_upward'"
            @click="link = 'arrow_upward'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="arrow_upward"></q-icon>
            </q-item-section>
            <q-item-section>پرداخت‌ها</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'attach_money'"
            @click="link = 'attach_money'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="attach_money"></q-icon>
            </q-item-section>
            <q-item-section>هزینه</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'swap_horiz'"
            @click="link = 'swap_horiz'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="swap_horiz"></q-icon>
            </q-item-section>
            <q-item-section>انتقال وجه</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'subject'"
            @click="link = 'subject'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="subject"></q-icon>
            </q-item-section>
            <q-item-section>حساب‌های بانکی</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'inbox'"
            @click="link = 'inbox'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="inbox"></q-icon>
            </q-item-section>
            <q-item-section>صندوق</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="receipt_long"
          label="حسابداری"
          class="sub-item text-grey-8"
        >
          <q-item
            clickable
            :active="link === 'vouchers'"
            @click="link = 'vouchers'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="receipt_long"></q-icon>
            </q-item-section>
            <q-item-section>سند حسابداری</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'accounting-operation'"
            @click="link = 'accounting-operation'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="build"></q-icon>
            </q-item-section>
            <q-item-section>عملیات حسابداری</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'account_chart'"
            @click="link = 'account_chart'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="analytics"></q-icon>
            </q-item-section>
            <q-item-section>سرفصل حساب‌ها</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'category'"
            @click="link = 'category'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="category"></q-icon>
            </q-item-section>
            <q-item-section>گروه حساب‌ها</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'general-ledger'"
            @click="link = 'general-ledger'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="subject"></q-icon>
            </q-item-section>
            <q-item-section>حساب‌های کل</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'menu'"
            @click="link = 'menu'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="menu"></q-icon>
            </q-item-section>
            <q-item-section>حساب‌های معین</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'view_module'"
            @click="link = 'view_module'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="view_module"></q-icon>
            </q-item-section>
            <q-item-section>حساب‌های تفضیلی</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'browse_gallery'"
            @click="link = 'browse_gallery'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="browse_gallery"></q-icon>
            </q-item-section>
            <q-item-section>سال مالی</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="account_box"
          label="حقوق و دستمزد"
          class="sub-item text-grey-8"
        >
          <q-item
            clickable
            :active="link === 'account_box'"
            @click="link = 'account_box'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="account_box"></q-icon>
            </q-item-section>
            <q-item-section>حقوق و دستمزد ماهانه</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item
          icon="home"
          label="انبارداری"
          class="sub-item text-grey-8"
        >
          <q-item
            clickable
            :active="link === 'swap_vert'"
            @click="link = 'swap_vert'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="swap_vert"></q-icon>
            </q-item-section>
            <q-item-section>گزارش موجودی کالا</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'opening-stock'"
            @click="link = 'opening-stock'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="subject"></q-icon>
            </q-item-section>
            <q-item-section>موجودی اول دوره</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'modify-stock'"
            @click="link = 'modify-stock'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="subject"></q-icon>
            </q-item-section>
            <q-item-section>اصلاح موجودی</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item
          icon="group"
          label="سازمان، مخاطب، کاربر"
          class="sub-item text-grey-8"
        >
          <q-item
            clickable
            :active="link === 'organization-unit'"
            @click="link = 'organization-unit'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="subject"></q-icon>
            </q-item-section>
            <q-item-section>واحد سازمانی</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'organization-type'"
            @click="link = 'organization-type'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="subject"></q-icon>
            </q-item-section>
            <q-item-section>نوع واحد سازمانی</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'person'"
            @click="link = 'person'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="person"></q-icon>
            </q-item-section>
            <q-item-section>مخاطب، شخص</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item
          icon="info"
          label="اطلاعات پایه"
          class="sub-item text-grey-8"
        >
          <q-item
            clickable
            :active="link === 'credit_card'"
            @click="link = 'credit_card'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="credit_card"></q-icon>
            </q-item-section>
            <q-item-section>نوع حساب بانکی</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'account_balance'"
            @click="link = 'account_balance'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="account_balance"></q-icon>
            </q-item-section>
            <q-item-section>بانک</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'apps'"
            @click="link = 'apps'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="apps"></q-icon>
            </q-item-section>
            <q-item-section>شعبه بانک</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'monetization_on'"
            @click="link = 'monetization_on'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="monetization_on"></q-icon>
            </q-item-section>
            <q-item-section>ارز</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'location_on'"
            @click="link = 'location_on'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="location_on"></q-icon>
            </q-item-section>
            <q-item-section>محل جغرافیایی</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'view_comfy'"
            @click="link = 'view_comfy'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="view_comfy"></q-icon>
            </q-item-section>
            <q-item-section>گروه کالا و خدمات</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'monitor'"
            @click="link = 'monitor'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="monitor"></q-icon>
            </q-item-section>
            <q-item-section>کالا/خدمت</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'format_list_numbered_rtl'"
            @click="link = 'format_list_numbered_rtl'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="format_list_numbered_rtl"></q-icon>
            </q-item-section>
            <q-item-section>واحدهای سنجش</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'measure-unit-relation'"
            @click="link = 'measure-unit-relation'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="format_list_numbered_rtl"></q-icon>
            </q-item-section>
            <q-item-section>تبدیل واحد سنجش</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'vat'"
            @click="link = 'vat'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="monetization_on"></q-icon>
            </q-item-section>
            <q-item-section>انواع مالیات بر ارزش افزوده</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'contact-type'"
            @click="link = 'contact-type'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="subject"></q-icon>
            </q-item-section>
            <q-item-section>نوع تماس</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'job'"
            @click="link = 'job'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="subject"></q-icon>
            </q-item-section>
            <q-item-section>شغل</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="bar_chart"
          label="گزارش‌ها"
          class="sub-item text-grey-8"
          id="reports"
        >
          <q-item
            clickable
            :active="link === 'pie_chart'"
            @click="link = 'pie_chart'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="pie_chart"></q-icon>
            </q-item-section>
            <q-item-section>گزارش مرور حساب</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'text-fields'"
            @click="link = 'text-fields'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="text_fields"></q-icon>
            </q-item-section>
            <q-item-section>تراز آزمایشی</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'title'"
            @click="link = 'title'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="title"></q-icon>
            </q-item-section>
            <q-item-section>ترازنامه</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'income_statement'"
            @click="link = 'income_statement'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="menu"></q-icon>
            </q-item-section>
            <q-item-section>صورت سود و زیان</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'ledger-books'"
            @click="link = 'ledger-books'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="menu"></q-icon>
            </q-item-section>
            <q-item-section>گزارش دفاتر</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'report_customer_account'"
            @click="link = 'report_customer_account'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="group"></q-icon>
            </q-item-section>
            <q-item-section>گزارش حساب شخص</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'debtors'"
            @click="link = 'debtors'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="group"></q-icon>
            </q-item-section>
            <q-item-section>گزارش بدهکاران</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'creditors'"
            @click="link = 'creditors'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="group"></q-icon>
            </q-item-section>
            <q-item-section>گزارش بستانکاران</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'tax-seasonal-report'"
            @click="link = 'tax-seasonal-report'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="receipt_long"></q-icon>
            </q-item-section>
            <q-item-section>گزارش خرید و فروش فصلی</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'sales-review'"
            @click="link = 'sales-review'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="receipt_long"></q-icon>
            </q-item-section>
            <q-item-section>گزارش مرور فروش</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'purchase-review'"
            @click="link = 'purchase-review'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="shopping_cart"></q-icon>
            </q-item-section>
            <q-item-section>گزارش مرور خرید</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'inventory-report'"
            @click="link = 'inventory-report'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="swap_vert"></q-icon>
            </q-item-section>
            <q-item-section>گزارش موجودی کالا</q-item-section>
          </q-item>
          <q-item
            clickable
            :active="link === 'report-cheque'"
            @click="link = 'report-cheque'"
            active-class="my-menu-link"
          >
            <q-item-section avatar class="item-section q-mr-sm">
              <q-icon color="grey-8" name="receipt_long"></q-icon>
            </q-item-section>
            <q-item-section>گزارش چک</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-separator inset />
        <div class="settings" style="cursor: pointer; margin-bottom: 32px">
          <q-item class="flex items-center q-mt-xs">
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
  </nav>
</template>

<script setup>
import { ref } from "vue";

// For Header Title
const title = ref("دفتر کارگشا - فهرشت پیش فاکتور");

//For Open & Close Drawer
const drawerRight = ref(false);

// Active For Sub-items
const link = ref("active");

// Scroll For Sidebar
const thumbStyle = ref({
  right: "4px",
  borderRadius: "5px",
  backgroundColor: "#027be3",
  width: "5px",
  opacity: 0.75,
});

const barStyle = ref({
  right: "2px",
  borderRadius: "9px",
  backgroundColor: "#027be3",
  width: "9px",
  opacity: 0.2,
});

const contentActiveStyle = ref({
  backgroundColor: "rgb(209 234 255);",
  color: "black",
});
</script>

<style>
.searchbar-sidebar {
  margin-top: 19px;
}

.drawer {
  border-right: 1px solid rgb(219, 219, 219);
  border-left: none;
}
</style>
