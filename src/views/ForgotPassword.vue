<template>
    <div class="bg">
        <div>
            <img class="logo" src="@/assets/Chat-Logo-PNG-Free-Download-removebg-preview.png"/>
        </div>
        <form @submit.prevent="signIn" class="form">
            <h1 class="h1 mb-3 fw-normal">Forgot Password</h1>
            <div class="name">
                <input v-model="store.email" placeholder="Your email @.com..." type="email" class="form-control" id="floatingInput">
                <input v-model="store.password" placeholder="Your password..." type="password" class="form-control" id="floatingInput">
            </div>

            <p v-if="errorText" class="error">{{errorText}}</p>
            <button class="w-100 btn btn-sm btn-info text-light" type="submit">
                Save 
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/store/store';

const store = useStore()

const errorText = ref(false)

</script>

<style scoped lang="scss">
.bg {
    background-color: rgb(209, 209, 209);
    height: 1000px;
    .logo {
        width: 100px;
        padding-top: 100px;
    }
    form {
        margin: 0 auto;
        padding-top: 50px;
        width: 300px;
        height: 200px;
        input {
            width: 100%;
            margin-bottom: 30px;
            margin-top: 30px
        }
        button {
            width: 100%;
            margin-bottom: 30px;
        }
        .error {
            color: red;
        }
    }
}

</style>