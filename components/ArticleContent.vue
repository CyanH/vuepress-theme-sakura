<template>
  <div>
    <router-link
      :to="$page"
      class="home-link"
    >
      <span
        class="site-name"
        v-if="$site.themeConfig.name"
      >
        {{ $site.themeConfig.name }}
      </span>
    </router-link>
    <Content class="theme-default-content custom" />
  </div>
</template>
