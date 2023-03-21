<template>
  <q-page class="">
    <div class="" dir="rtl">
      <q-table
        :rows="usersData"
        :columns="columns"
        row-key="name"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
        flat
        no-data-label="اطلاعاتی جهت نمایش وجود ندارد"
        no-results-label="نتیجه ای یافت نشد"
        :filter="filter"
        class="q-pt-xl"
      >
        <!-- <template v-slot:top-left>
          <q-input
            bordered
            dense
            debounce="300"
            v-model="filter"
            placeholder="فیلتر"
            filled
            class=""
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </template> -->
        <template v-slot:bottom-row>
          <q-tr class="">
            <q-td colspan="100%" class="bg-grey-4">۳,۰۰۰,۰۰۰,۰۰۰,۰۰۰,۰۰۰</q-td>
          </q-tr>
          <q-tr>
            <q-td colspan="100%" class="bg-blue">۳,۰۰۰,۰۰۰,۰۰۰,۰۰۰,۰۰۰</q-td>
          </q-tr>
        </template>
        <template v-slot:no-data="{ icon, message, filter }">
          <div
            class="full-width row flex-center text-grey-7 q-gutter-sm q-mt-xl"
          >
            <q-icon size="3em" name="error" />
            <span class="text-h6"> متاسفانه {{ message }} </span>
            <q-icon size="3em" :name="filter ? 'error' : icon" />
          </div>
        </template>
      </q-table>
    </div>
    <q-page-sticky position="top" expand class="toolbar q-mb-md">
      <q-toolbar class="bg-white text-white q-ml-xs">
        <div
          class="toolbar-container flex justify-end q-gutter-md q-py-sm bg-white"
        >
          <div class="">
            <q-btn
              color="white bg-blue-7"
              icon="add_circle"
              label="ایجاد"
              rounded
              flat
              class="add-button q-px-md q-py-sm"
              style="font-size: 12px; font-weight: 600"
            />
          </div>
          <div class="">
            <q-btn
              color="grey-8"
              icon="edit"
              label="ویرایش"
              outline
              rounded
              class="add-button q-px-md q-py-sm"
              style="font-size: 12px; font-weight: 600"
            />
          </div>
          <div class="">
            <q-btn
              color="grey-8"
              icon="delete"
              label="حذف"
              outline
              rounded
              class="add-button q-px-md q-py-sm"
              style="font-size: 12px; font-weight: 600"
            />
          </div>
          <div class="">
            <q-btn
              color="grey-8"
              icon="more_horiz"
              label="بیشتر"
              outline
              rounded
              class="add-button q-px-md q-py-sm"
              style="font-size: 12px; font-weight: 600"
            />
          </div>
        </div>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import { onMounted, onBeforeMount, onBeforeUnmount, onUnmounted } from "vue";

const selected = ref([]);

const getSelectedString = () => {
  selected.value.length === 0
    ? ""
    : `${selected.value.length} record${
        selected.value.length > 1 ? "s" : ""
      } selected of ${rows.length}`;
};

const columns = [
  {
    name: "#",
    required: true,
    label: "#",
    align: "left",
    field: (row) => row.id,
    format: (val) => `${val}`,
  },
  {
    name: "number",
    align: "left",
    label: "شماره",
    field: "number",
    sortable: true,
    align: "left",
  },
  {
    name: "customer",
    label: "مشتری",
    field: "customer",
    sortable: true,
    align: "left",
  },
  { name: "description", label: "شرح", field: "description", align: "left" },
  { name: "totalSum", label: "جمع کل", field: "totalSum", align: "left" },
  { name: "discount", label: "تخفیف", field: "discount", align: "left" },
  {
    name: "type",
    label: "نوع",
    field: "type",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: "left",
  },
  {
    name: "status",
    label: "وضعیت",
    field: "status",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: "left",
  },
];

const usersData = ref([]);
const filter = ref("");

api
  .get("http://localhost:3000/rows")
  .then((responsive) => {
    usersData.value = responsive.data;
    console.log(responsive.data);
  })
  .catch((error) => {
    console.log(error);
  });
</script>
