<template>
    <section class="technologies">
        <h2>Les technologies que je maîtrise</h2>
        <Frameworks/>
        <Cms/>
        <Languages/>
        <Outils/>
    </section>
</template>

<script>
import Frameworks from './Frameworks.vue'
import Cms from './Cms.vue'
import Languages from './Languages.vue'
import Outils from './Outils.vue'

export default {
    name: 'Technologies',
    components: {
    Frameworks,
    Cms,
    Languages,
    Outils,
}
}
</script>

<style lang="scss">
.technologies{
    padding: 160px 140px 50px 140px;
    font-family: 'Mundial', sans-serif;
    background: #FFF;
    height: 200vh;
    z-index: 3;

    h2{
        font-size: 40px;
        font-weight: 600;
        margin: 0;
    }
}
</style>