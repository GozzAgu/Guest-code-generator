<template>
    <div class="chat">
        <h2>Chat</h2>
    </div>
    <div class="card">
        <div class="card-body">
            <p v-if="messages.length === 0">No messages yet</p>
            <div class="messages">
                <div v-for="message in messages" :key="message.id">
                    <span>{{ message.name }}</span>
                    <span>{{ message.message }}</span>
                    <span>{{ message.timeStamp }}</span>
                </div>
            </div>
        </div>
        <div class="card-action">
            
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([

])
</script>
