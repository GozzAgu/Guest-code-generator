<template>
    <div>
        <form @submit.prevent="signUp">
            <h1 class="h5 mb-3 fw-normal">Please sign up</h1>
            <div class="form-floating">
                <input v-model="user.name" type="text" class="form-control" id="floatingInput" placeholder="your name">
                <label for="floatingInput">Your name</label>
            </div>
            <p v-if="errorText" class="error">{{errorText}}</p>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const user = ref({
    name: ''
})

const errorText = ref(null)

const signUp = () => {
    if(user.value.name) {
        router.push({ 
            name: 'chat', 
            params: {
                name: user.value.name
            }
        })
    } else {
        errorText.value = 'Please enter a name in the text field'
    }
}
</script>

<style scoped lang="scss">
form {
    margin: 0 auto;
    padding: 70px;
    width: 300px;
    height: 200px;
    input {
        width: 100%;
        margin-bottom: 30px;
    }
    button {
        width: 100%;
    }
    .error {
        color: red;
    }
}
</style>