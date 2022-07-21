<template>
  <div>
    <div>
      <div>{{$store.state.msg}}</div>
      <router-link to="/">
        home
      </router-link>
      <router-link to="about">
        about
      </router-link>
    </div>
    <i class="i-bi-apple text-5xl" />
    <div class="logo" />
    <div class="i-logos-vue text-3xl" />
    <div class="i-ph-anchor-simple-thin" />
    <div class="i-ph-anchor-simple-thin" />
    <div class="i-mdi-alarm text-orange-400" />
    <div class="i-logos-vue text-3xl" />
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    <router-view />
  </div>
</template>