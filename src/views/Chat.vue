<template>
    <div class="container">
        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;">
            <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                <h1 class="fs-5 fw-semibold">{{ props.name }}</h1>
            </div>
            <div class="list-group list-group-flush border-bottom scrollarea">
                <div class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                    <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">{{ username }}</strong>
                    <small class="text-muted">{{ getTime().value }}</small>
                    </div>
                    <div class="col-10 mb-1 small text-start">{{ message }}</div>
                </div>
                <form @submit.prevent="submit">
                    <input v-model="message" class="form-control" placeholder="Write a message"/>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    name: String
});

const messages = ref([]);
const message = ref('')

const getTime = () => {
    const date =  ref(new Date());
    const time = ref(date.value.getHours() + ':' + date.value.getMinutes() + ':' + date.value.getSeconds());
    return time
};

const submit = () => {
    messages.value.push(message.value);
    getTime();
    message.value = '';
};

</script>

<style scoped>
.scrollarea {
    min-height: 300px;
}
</style>
