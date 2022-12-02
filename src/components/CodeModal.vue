<template>
    <div class="overlay" @click="hideForm"></div>
    <div class="mod shadow-lg card p-3 col-8 col-lg-4 ms-auto me-auto">
        <div class="d-flex mb-2">
            <h6 class="mt-2">Generate guest code</h6>
            <button class="btn btn-danger ms-auto mb-3" @click="close">close</button>
        </div>
        <div class="d-flex">
            <input placeholder="Guest name..." class="col-5 ms-auto me-auto mb-3" v-model="newVisitor.name"/>
            <select v-model="selected" class="col-5 ms-auto me-auto mb-3"> 
                <option value="" disabled selected hidden>Gender</option>
                <option v-for="option in options" :key="option">{{ option.text }}</option>
            </select>
        </div>
        <h3>Code: {{ newVisitor.code }}</h3>
        <button class="shadow btn btn-primary col-3 col-lg-2 mt-3 mb-3 ms-auto me-auto" @click="getCode"><i class="ri-gradienter-fill"></i></button>
    </div> 
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['onSubmit', 'close'])
const code = ref('');

const selected = ref('')
const options = ref([
    {
        id: 1,
        text: 'Male'
    },
    {
        id: 2,
        text: 'Female'
    }
])
const newVisitor = ref({
        // status: '',
        name: '',
        code: '',
        gender: '',
        time: ''
});

const getTime = () => {
    const date =  ref(new Date());
    const time = ref(date.value.getHours() + ':' + date.value.getMinutes() + ':' + date.value.getSeconds());
    return time
};

const getCode = () => {
    if(newVisitor.value.name.length > 2) {
        code.value = Math.ceil(Math.random() * 10000) + 1;

        newVisitor.value.code = code.value;
        newVisitor.value.time = getTime();
        newVisitor.value.gender = selected.value;

        emit('onSubmit', newVisitor.value);
        emit('close')
    }
}

const close = () => {
    emit('close')
}
</script>

<style scoped lang="scss">

.overlay{
    position: fixed;
    background-color:rgba(37, 39, 51, 0.2);
    left: 0;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 1;
    cursor: pointer;
    
}
.mod {
    position: fixed;
    background-color: white;
    z-index: 1;
}
</style>
