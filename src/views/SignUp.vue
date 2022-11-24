<template>
    <div class="bg">
        <form @submit.prevent="signUp" class="form">
            <h1 class="h1 mb-3 fw-normal">Welcome</h1>
            <div class="name">
                <input v-model="store.name" placeholder="Your name..." type="text" class="form-control" id="floatingInput">
                <input v-model="store.password" placeholder="Your password..." type="text" class="form-control" id="floatingInput">
            </div>

            <p v-if="errorText" class="error">{{errorText}}</p>
            <button class="w-100 btn btn-sm btn-primary" type="submit">
                Sign Up 
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from '@/store/store';

const router = useRouter()
const store = useStore()

const errorText = ref(false)

const signUp = () => {
    if(store.name.length > 0) {
        router.push({ 
            name: 'chat',
        })
    } else {
        errorText.value = 'Please enter a name in the text field'
    }
}
</script>

<style scoped lang="scss">
.bg {
    background-color: rgb(209, 209, 209);
    height: 1000px;
    form {
        margin: 0 auto;
        padding-top: 200px;
        width: 300px;
        height: 200px;
        input {
            width: 100%;
            margin-bottom: 30px;
            margin-top: 30px
        }
        button {
            width: 100%;
        }
        .error {
            color: red;
        }
    }
}

</style>