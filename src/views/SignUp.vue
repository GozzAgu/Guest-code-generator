<template>
    <div>
        <form @submit.prevent="signUp">
            <h1>Sign up</h1>
            <input type="text" placeholder="name" v-model="user.name"/>
            <button>Sign Up</button>
            <p v-if="errorText" class="error">{{errorText}}</p>
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
    border: 1px solid black;
    margin: 0 auto;
    padding: 70px;
    width: 300px;
    height: 200px;
    border-radius: 5px;
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