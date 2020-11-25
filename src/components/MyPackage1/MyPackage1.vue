<template>
  <draggable tag="ul" v-model="list" animation="200">
    <li v-for="(item, i) in list" :key="i">
      {{ item }}
    </li>
  </draggable>
</template>

<script src="./MyPackage1.script.js"></script>

<style lang="scss" scoped>
</style>
