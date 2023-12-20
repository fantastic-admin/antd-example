<script setup lang="ts">
import antDesignVueLocaleZhCN from 'ant-design-vue/es/locale/zh_CN'
import { theme } from 'ant-design-vue'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <AConfigProvider :locale="antDesignVueLocaleZhCN" :theme="settingsStore.settings.app.colorScheme === 'dark' ? { algorithm: [theme.darkAlgorithm] } : {}">
    <slot />
  </AConfigProvider>
</template>
