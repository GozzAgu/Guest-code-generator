<template>
    <div class="card p-3 col-8 col-lg-4 ms-auto me-auto">
        <h5>Generate your code</h5>
        <input placeholder="Guest's name" v-model="name"/>
        <h3>code: {{ code }}</h3>
        <button class="btn btn-light col-3 col-lg-2 ms-auto me-auto" @click="getCode"><i class="ri-settings-4-fill"></i></button>
    </div> 
</template>

<script setup>
import { ref } from 'vue'

const code = ref('');

const name = ref('');

const getCode = () => {
    code.value = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
</script>
