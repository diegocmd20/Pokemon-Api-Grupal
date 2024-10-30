<template>
    <div v-if="pokemon">
        <h1>{{ pokemon.name }}</h1> <img :src="pokemon.sprites.front_default" alt="Pokemon Image" />
        <p><strong>Height:</strong> {{ pokemon.height }}</p>
        <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
        <p><strong>Abilities:</strong></p>
        <ul>
            <li v-for="ability in pokemon.abilities" :key="ability.ability.name"> {{ ability.ability.name }} </li>
        </ul>
    </div>
</template>
<script>export default { data() { return { pokemon: null, }; }, created() { const pokemonName = this.$route.params.name; fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response => response.json()).then(data => { this.pokemon = data; }).catch(error => console.error('Error:', error)); }, }; </script>
