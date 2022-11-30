<template>
    <div class="card">
        <textarea v-model="code">
            
        </textarea>
        <button @click="getCode">Generate</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const code = ref('')

const getCode = () => {
    code.value = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
</script>
