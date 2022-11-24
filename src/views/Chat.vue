<template>
    <div class="container">
        <button @click="handlesignOut" v-if="isLoggedIn">Sign Out</button>
        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;">
            <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                <h1 class="fs-5 fw-semibold">{{ store.name }}</h1>
            </div>
            <div class="list-group list-group-flush border-bottom scrollarea">
                <div v-for="message, index in messages" :key="index" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">{{ message.text }}</strong>
                        <small class="text-muted">{{ message.time }}</small>
                    </div>
                    <div class="col-10 mb-1 small text-start">{{ message.text }}</div>
                </div>
            </div>
            <form @submit.prevent="sendMsg">
                <input v-model="message" class="form-control" placeholder="Write a message"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import { useStore } from '@/store/store';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const isLoggedIn = ref(false);
const store = useStore();
const router = useRouter();
const props = defineProps(['name'])
const messages = ref([]);
const message = ref('');

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    })
})
const getTime = () => {
    const date =  ref(new Date());
    const time = ref(date.value.getHours() + ':' + date.value.getMinutes() + ':' + date.value.getSeconds());
    return time
};

const sendMsg = () => {
    messages.value.push({ 
        text: message.value, 
        time: getTime()
    });
    message.value = '';
    props.name
};

const handlesignOut = () => {
    signOut(auth)
    .then(() => {
        router.push('/');
    })
}

</script>

<style scoped>
.scrollarea {
    min-height: 300px;
}
</style>
