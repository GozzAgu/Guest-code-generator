<template>
    <div>
        <h1>CHAT APP</h1>
        <form @submit.prevent="login">
            <input type="text" placeholder="name" v-model="user.name"/>
            <input type="text" placeholder="password" v-model="user.password"/>
            <button>Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
    name: '',
    password: ''
})

const login = () => {
    if(user.value) {
        console.log(user.value.name, user.value.password)
    }
}
</script>
