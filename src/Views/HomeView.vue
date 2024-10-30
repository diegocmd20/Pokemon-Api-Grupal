<template>
    <div>
        <ul>
            <li v-for="(pokemon, index) in pokemons" :key="index">
                <RouterLink :to="`/pokemon/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';
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