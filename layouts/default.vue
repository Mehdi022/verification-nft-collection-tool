<template>
  <v-app>
    <div class="bg-gray-100 flex-col min-h-screen">
      <AppHeader />
      <Nuxt />
      <AppFooter />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/base/AppHeader.vue";
import AppFooter from "@/components/base/AppFooter.vue";
export default Vue.extend({
  components: {
    AppHeader,
    AppFooter
  }
});
</script>