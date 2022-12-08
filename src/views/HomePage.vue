<template>
    <div class="container">
        <div class="row col-12 col-lg-6 ms-auto me-auto mb-4">
            <div class="card p-2 mt-5 shadow">
                <figure class="p-3 mb-0">
                    <blockquote class="blockquote">
                        <p>Welcome, {{ store.name }} </p>
                    </blockquote>
                </figure>
                <button  v-if="isLoggedIn" @click="handlesignOut" class="btn btn-secondary text-light col-3 ms-auto">Sign Out</button>
                <router-link to="/signin" v-else>
                    <button class="col-3 btn btn-secondary text-light ms-auto mb-3">Sign In</button>
                </router-link>
            </div>
        </div>
        
        <div class="d-flex justify-content-between">
            <button @click="showModal = true" class="shadow-sm btn btn-light mt-3 mb-3 col-5 col-lg-2 text-secondary">
                <i class="ri-user-add-fill"></i> New Guest
            </button>
            <router-link to="/chat" class="mt-4">
                <i class="ri-chat-3-fill"></i>
            </router-link>
        </div>

        <div class="mt-3 border-bottom">
            <h3>Total Guests ({{ visitors.length }}) </h3>
        </div>

        <CodeModal @close="showModal = false" v-if="showModal" @onSubmit="newGuest"/>

        <h3 class="mt-5 mb-4 text-start"><i class="ri-draft-line text-primary"></i> Guest Log </h3>

        <div class="search-div d-flex border">
            <i class="ri-search-2-line ps-2 pe-1 pt-1"></i>
            <input v-model="search" class="search mb-4" placeholder="search for guest..."/>
        </div>

        <div class="mt-1 shadow">
            <table class="table table-striped table-hover">
                <thead class="bg-secondary text-light">
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Time</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody v-for="(visitor, index) in filterVisitors" :key="visitor">
                    <tr class="mb-5">
                        <td class="pt-3"><input type="checkbox"/></td>
                        <td class="pt-3">{{ visitor.name }}</td>
                        <td class="pt-3">{{ visitor.code }}</td>
                        <td class="pt-3">{{ visitor.gender }}</td>
                        <td class="pt-3">{{ visitor.time}}</td>
                        <td> <button class="btn" @click="del(index)"><i class="ri-delete-bin-6-fill fs-9 text-danger"></i></button></td>
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
import { ref, onMounted, computed } from 'vue'
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

const search = ref('');

const visitors = ref([
    {
        name: 'Gozie',
        code: '2480',
        gender: 'Male',
        time: '10:45'
    }
]);

const isLoggedIn = ref(false);
const router = useRouter();
const store = useStore();

const handlesignOut = () => {
    signOut(auth)
    .then(() => {
        router.push('/signin');
    })
};

const newGuest = (newVisitor) => {
    visitors.value.push(newVisitor)
}

const del = (index) => {
    if(index > -1) {
        visitors.value.splice(index, 1);
    }
}

const filterVisitors = computed(() => {
    return visitors.value.filter((visitor) => {
        return visitor.name.match(search.value);
    })
})
</script>

<style scoped lang="scss">
.logo {
    width: 50px;
    cursor: pointer;
}

.search-div {
    height: 32px;
    .search {
        width: 100%;
        border: none;
        height: 30px;
    }
    .search:focus {
        width: 100%;
        outline: none;
        height: 30px;
    }
}

</style>