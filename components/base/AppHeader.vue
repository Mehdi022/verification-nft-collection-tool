<template>
</template>

<script>
export default {
  data() {
    return { 
      drawer: false,
      routes: [ 
        { href: "/manage", label: "Manage" },
        { href: "/projects", label: "Leaderboard" },
        { href: this.$config.upgrade_url, label: "Donate!" }
      ],
      mobileRoutes: [
        { icon: "mdi-home", href: "/", label: "Home" },
        { icon: "mdi-cog", href: "/manage", label: "Manage" },
        { icon: "mdi-table", href: "/projects", label: "Leaderboard" },
      ]
    };
  }
};
</script>
<style>
  .title {
    @apply text-white text-lg font-semibold
  }
  .navlink {
    @apply text-white text-base
  }
  .navlink:link{
    @apply text-white text-base
  }
  .navlink:hover{
    @apply text-white text-base underline
  }
  .navlink:visited {
    @apply text-white text-base
  }
  .titleWidth{
  width: 400px !important;
}
</style>