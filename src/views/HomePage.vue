<template>
    <div class="container d-flex">
        <div class="row col-10" style="position: relative; height: 690px;">
            <div class="col-sm-6 col-lg-4 mb-4">
            <div class="card p-2 mt-5">
                <figure class="p-3 mb-0">
                    <blockquote class="blockquote">
                        <p>Welcome, {{ store.name }}</p>
                    </blockquote>
                </figure>
                <button  v-if="isLoggedIn" @click="handlesignOut" type="button" class="btn btn-info text-light">Sign Out</button>
            </div>
            </div>
        </div>
            <div class="col-2 mt-5">
                <p>Chat?</p>
                <router-link to="/chat">
                    <img class="logo" src="@/assets/Chat-Logo-PNG-Free-Download-removebg-preview.png"/>
                </router-link>
                </div>
    </div>
</template>

<script setup>
import { useStore } from '@/store/store';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

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
});

const isLoggedIn = ref(false);
const router = useRouter();
const store = useStore();

const handlesignOut = () => {
    signOut(auth)
    .then(() => {
        router.push('/signin');
    })
}

</script>

<style scoped lang="scss">
.logo {
        width: 50px;
        cursor: pointer;
    }
</style>