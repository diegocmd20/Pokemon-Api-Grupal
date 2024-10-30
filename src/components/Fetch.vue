<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
            </li>
        </ul>
    </div>
</template>

<script>
const API_URL = 'https://jsonplaceholder.typicode.com/users';
export default {
    name: 'Fetch',
    data() {
        return {
            users: [],
        };
    },
    created() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                this.users = data
                console.log(this.users)
            })
    }
};
</script>

<style scoped></style>

<!-- Crea un componente en Vue que realice una petición GET a la API pública de jsonplaceholder para obtener una lista de usuarios desde el endpoint https://jsonplaceholder.typicode.com/users. Muestra en el componente el nombre y correo electrónico de cada usuario en una lista -->