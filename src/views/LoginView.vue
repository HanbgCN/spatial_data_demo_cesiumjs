<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { ref } from 'vue';

const refForm = ref<FormInstance>()

const form = ref({
    account: null,
    password: null
})
const rules = {
    account: [
        { required: true, message: '请输入账号', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
}
const handleLogin = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(valid => {
        if (valid) {
            console.log("🚀 ~ file: LoginView.vue:11 ~ form:", form)

        }
    })
}
</script>
<template>
    <div class="h-[100vh] w-[100%] bg-sky-300 flex items-center pr-40">
        <div class="_login ml-auto h-100 w-120 p-8 bg-white">
            <div class="font-bold text-3xl italic text-center mb-8">用户登录</div>
            <el-form :model="form" ref="refForm" :rules="rules">
                <el-form-item prop="account" class="!mb-8">
                    <el-input v-model="form.account" size="large" placeholder="请输入账号" />
                </el-form-item>
                <el-form-item prop="password" class="!mb-8">
                    <el-input v-model="form.password" size="large" show-password placeholder="请输入密码" />
                </el-form-item>
                <el-button class="w-[100%] !text-lg !py-5" type="primary" size="large"
                    @click="handleLogin(refForm)">登录</el-button>
            </el-form>
            <div class="text-center mt-6 text-gray-400">Tips here</div>
        </div>
    </div>
</template>