<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { ref } from 'vue';

const emit = defineEmits(['cancel', 'success'])
const refForm = ref<FormInstance>()
const form = ref({
    fileName: null
})
const rules = {
    fileName: [
        { required: true, message: '请输入文件夹名称', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
}
const handleSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(valid => {
        if (valid) {
            console.log("🚀 ~ file: LoginView.vue:11 ~ form:", form)

        }
    })
}
</script>
<template>
    <el-dialog width="30%" :close-on-click-modal="false" :close-on-press-escape="false">
        <template #header>
            <div class="text-lg font-bold">添加文件夹</div>
        </template>
        <el-form ref="refForm" :model="form" :rules="rules" label-width="120px" status-icon>
            <el-form-item label="文件夹名称" prop="fileName">
                <el-input v-model="form.fileName" />
            </el-form-item>
            <el-form-item label="可见性" prop="fileName">
                <el-input v-model="form.fileName" />
            </el-form-item>
            <el-form-item label="密码保护" prop="fileName">
                <el-input v-model="form.fileName" />
            </el-form-item>
            <el-form-item label="设置密码" prop="fileName">
                <el-input v-model="form.fileName" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="emit('cancel')">取消</el-button>
                <el-button type="primary" @click="handleSubmit(refForm)">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>