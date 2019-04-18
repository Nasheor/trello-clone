<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "assets/styles/tailwind.postcss";

#app {
  background-color: #42f4ee;
  height: 100%;
}

.container {
  @apply mx-auto;
}
</style>
