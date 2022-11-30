<template>
    <div class="card p-3 col-8 col-lg-4 ms-auto me-auto">
        <h5>Generate your code</h5>
        <input placeholder="Guest's name" v-model="newVisitor.name"/>
        <h3>code: {{ code }}</h3>
        <button class="btn btn-light col-3 col-lg-2 ms-auto me-auto" @click="getCode"><i class="ri-settings-4-fill"></i></button>
    </div> 
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['new-visitor'])
const code = ref('');

const newVisitor = ref({
    name: ''
});

const getCode = () => {
    code.value = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    emit('new-visitor', newVisitor.value.name)
}
</script>
