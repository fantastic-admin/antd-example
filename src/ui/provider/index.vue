<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { theme } from 'ant-design-vue'
import antDesignVueLocaleZhCN from 'ant-design-vue/es/locale/zh_CN'

const settingsStore = useSettingsStore()

const themeConfig = computed(() => ({
  algorithm: settingsStore.currentColorScheme === 'dark' ? [theme.darkAlgorithm] : [theme.defaultAlgorithm],
}))
</script>

<template>
  <AConfigProvider :locale="antDesignVueLocaleZhCN" :theme="themeConfig">
    <slot />
  </AConfigProvider>
</template>
