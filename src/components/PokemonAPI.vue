<template>
    <div>
        <ul>
            <li v-for="user in pokemon" :key="user.id">
                {{ user.name }} - {{ user.email }}
            </li>
        </ul>
    </div>
</template>

<script>
const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000';
export default {
    name: 'Fetch',
    data() {
        return {
            pokemons: [],
        };
    },
    created() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                this.pokemons = data.results
                console.log(this.pokemons)
            })
    }
};
</script>

<style scoped></style>