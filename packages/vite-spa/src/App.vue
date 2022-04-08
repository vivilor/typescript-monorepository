<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { ClassFromA, myFunFromA } from '@typescript-monorepository/pack-a/src/my-file'
import {ConsoleLogger} from './lib/logger/ConsoleLogger'

class ViteClass extends ClassFromA {}

const logger = new ConsoleLogger()

logger.log('Hello world')

const viteClass = new ViteClass()
const viteClassInstance = new ViteClass()
const string = myFunFromA('bar')
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  {{ string }}
<!--  {{ viteClass.bar }}-->
  {{ viteClassInstance.bar }}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
