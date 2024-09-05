<script setup lang="ts">
import type { Rule } from 'ant-design-vue/es/form'
import { message } from 'ant-design-vue'

defineOptions({
  name: 'ResetPasswordForm',
})

const props = defineProps<{
  account?: string
}>()

const emits = defineEmits<{
  onLogin: [account: string]
  onResetPassword: [account: string]
}>()

const loading = ref(false)

const formRef = ref()
const form = ref({
  account: props.account ?? localStorage.login_account ?? '',
  captcha: '',
  newPassword: '',
})
const rules = ref<Record<string, Rule[]>>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  captcha: [
    { required: true, trigger: 'blur', message: '请输入验证码' },
  ],
  newPassword: [
    { required: true, trigger: 'blur', message: '请输入新密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
})
function handleReset() {
  message.info('重置密码仅提供界面演示，无实际功能，需开发者自行扩展')
  formRef.value?.validate().then(() => {
    // 这里编写业务代码
    emits('onResetPassword', form.value.account)
  }).catch(() => {
    // 这里编写业务代码
  })
}
</script>

<template>
  <AForm ref="formRef" :model="form" :rules="rules" class="min-h-500px w-full flex-col-stretch-center p-12">
    <h3 class="mb-8 text-xl color-[var(--el-text-color-primary)] font-bold">
      忘记密码了? 🔒
    </h3>
    <div>
      <AFormItem name="account">
        <AInput v-model:value="form.account" size="large" placeholder="用户名" tabindex="1">
          <template #prefix>
            <SvgIcon name="ri:user-3-fill" />
          </template>
        </AInput>
      </AFormItem>
      <AFormItem name="captcha">
        <AInput v-model:value="form.captcha" size="large" placeholder="验证码" tabindex="2">
          <template #prefix>
            <SvgIcon name="ic:baseline-verified-user" />
          </template>
          <template #suffix>
            <AButton size="small">
              发送验证码
            </AButton>
          </template>
        </AInput>
      </AFormItem>
      <AFormItem name="newPassword">
        <AInputPassword v-model:value="form.newPassword" size="large" placeholder="新密码" tabindex="3">
          <template #prefix>
            <SvgIcon name="ri:lock-2-fill" />
          </template>
        </AInputPassword>
      </AFormItem>
    </div>
    <AButton :loading="loading" type="primary" size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleReset">
      确认
    </AButton>
    <div class="mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]">
      <AButton type="link" @click="emits('onLogin', form.account)">
        去登录
      </AButton>
    </div>
  </AForm>
</template>
