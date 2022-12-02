<template>
    <div class="overlay" @click="hideForm"></div>
    <div class="mod shadow-lg card p-3 col-8 col-lg-4 ms-auto me-auto">
        <button class="btn btn-danger col-2 ms-auto" @click="close">close</button>
        <h5>Generate your code</h5>
        <label>guest's name</label>
        <input class="col-5 ms-auto me-auto mb-3" v-model="newVisitor.name"/>
        <label>gender</label>
        <select v-model="selected" class="col-5 ms-auto me-auto mb-3"> 
            <option v-for="option in options" :key="option">{{ option.text }}</option>
        </select>
        <h3>Code: {{ newVisitor.code }}</h3>
        <button class=" shadow btn btn-light col-3 col-lg-2 mt-3 mb-3 ms-auto me-auto" @click="getCode"><i class="ri-settings-4-fill"></i></button>
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
        status: '',
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
