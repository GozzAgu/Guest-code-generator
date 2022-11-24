<template>
    <div class="bg">
        <div>
            <img class="logo" src="@/assets/Chat-Logo-PNG-Free-Download-removebg-preview.png"/>
        </div>
        <form @submit.prevent="signInWithGoogle" class="form">
            <h1 class="h1 mb-3 fw-normal">Welcome</h1>
            <div class="name">
                <input v-model="store.name" placeholder="Your name..." type="text" class="form-control" id="floatingInput">
                <input v-model="store.email" placeholder="Your email @.com..." type="email" class="form-control" id="floatingInput">
                <input v-model="store.password" placeholder="Your password..." type="password" class="form-control" id="floatingInput">
            </div>

            <button @click="signUp" class="w-100 btn btn-sm btn-info text-light" type="submit">
                Sign Up 
            </button>
            <router-link to="/signin">
                <button class="w-100 btn btn-sm btn-secondary" type="submit">
                    Already have an account?
                </button>
            </router-link>
            <p v-if="errorText" class="error">{{errorText}}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from '@/store/store';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const router = useRouter()
const store = useStore()

const errorText = ref(false)

const signUp = () => {
    createUserWithEmailAndPassword(getAuth(), store.email, store.password)
    .then((data) => {
        console.log(data);
        router.push('/chat')
    })
    .catch((e) => {
        console.log(e)
        switch(e.code) {
            default:
                errorText.value = 'Fill in your credentials';
                break;
        }
    })
}
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