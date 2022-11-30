<template>
    <div class="container">
        <div class="row col-12 col-lg-6 ms-auto me-auto">
            <div class="card p-2 mt-5">
                <figure class="p-3 mb-0">
                    <blockquote class="blockquote">
                        <p>Welcome, {{ store.name }} </p>
                        <router-link to="/chat"
                        >
                            <img class="logo" src="@/assets/Chat-Logo-PNG-Free-Download-removebg-preview.png"/>
                        </router-link>
                    </blockquote>
                </figure>
                <button  v-if="isLoggedIn" @click="handlesignOut" class="btn btn-secondary text-light col-3 ms-auto">Sign Out</button>
                <router-link to="/signin" v-else>
                    <button class="col-4 btn btn-secondary text-light col-3 ms-auto">Sign In</button>
                </router-link>
            </div>
        </div>
        <div class="d-flex">
            <button @click="showModal = true" class="btn btn-light m-2 col-3 col-lg-2">
                Gate Pass
            </button>
        </div>
        <CodeModal v-if="showModal"/>

        <h3 class="mt-5 text-start"><i class="ri-draft-line"></i> Guest Information </h3>

        <div class="mt-1">
            <table class="table table-striped table-hover">
            <thead class="bg-secondary text-light">
                <tr>
                <th scope="col">Status</th>
                <th scope="col">Visitor's name</th>
                <th scope="col">Gender</th>
                <th scope="col">Time</th>
                </tr>
            </thead>
            <tbody v-for="visitor in visitors" :key="visitor">
                <tr>
                    <td>{{ visitor.status }}</td>
                    <td>{{ visitor.name }}</td>
                    <td>{{ visitor.gender }}</td>
                    <td>{{ visitor.time}}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    <footer>

    </footer>
</template>

<script setup>
import { useStore } from '@/store/store';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import CodeModal from '@/components/CodeModal.vue'

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

const showModal = ref(false)

const visitors = ref([
    {
        status: 'checked in',
        name: 'Gozie',
        gender: 'Male',
        time: '10:04'
    },
    {
        status: 'checked in',
        name: 'Lizbeth',
        gender: 'Female',
        time: '14:44'
    },
    {
        status: 'checked out',
        name: 'Gozie',
        gender: 'Male',
        time: '11:29'
    },
    
]);

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