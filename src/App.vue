<template>
  <Suspense>
    <template #default>
      <router-view :key="$route.fullPath" />
    </template>
  </Suspense>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: $body-background-color;
  font-family: 'Work Sans';
}
</style>
