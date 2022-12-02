<template>
    <div class="container card mt-5 p-5">
        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;">
            <h1>Chatbox</h1>
            <div class=" col-8 ms-auto me-auto d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                <h1 class="fs-5 fw-semibold">{{ store.name }}</h1>
            </div>
            <div class="list-group list-group-flush border-bottom scrollarea col-8 ms-auto me-auto">
                <div v-for="message in messages" :key="message" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">{{ store.name }}</strong>
                        <small class="text-muted">{{ message.time }}</small>
                    </div>
                    <div class="col-10 mb-1 small text-start">{{ message.text }}</div>
                </div>
            </div>
            <form @submit.prevent="sendMsg" class="mt-3 col-8 ms-auto me-auto">
                <input v-model="message" class="form-control" placeholder="Write a message..."/>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/store/store';
// import { initializeApp } from '@firebase/app';

const store = useStore();
// const props = defineProps(['name'])
const messages = ref([]);
const message = ref('');

// created(() => {
//     let ref = fb.collection('messages').orderBy('timeStamp');
//     ref.onSnapshot(snapshot => {
//         snapshot.docChanges().forEach(change => {
//             if(change.type === 'added') {
//                 let doc = change.doc;
//                 messages.value.push({
//                     message: doc.data().message,
//                 })
//             }
//         })
//     })
// })
const getTime = () => {
    const date =  ref(new Date());
    const time = ref(date.value.getHours() + ':' + date.value.getMinutes() + ':' + date.value.getSeconds());
    return time
};

const sendMsg = () => {
    // if(message.value) {
    //     fb.collection('messages').add({
    //         message: message.value, 
    //     }).catch(err => {
    //         console.log(err)
    //     });
    //     message.value = null;
        
        messages.value.push({ 
            text: message.value, 
            time: getTime()
        });
    // }
    // db.collection().add(messages)
    // message.value = '';
    // props.name
};



</script>

<style scoped>
.scrollarea {
    min-height: 300px;
}
</style>
