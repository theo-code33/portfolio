<template>
    <section class="github-project">
        <h2>Mes Repositories</h2>
        <div class="github-project-content">
            <GithubProjectItem/>
        </div>
    </section>
</template>

<script>
import GithubProjectItem from './GithubProjectItem.vue';
export default {
  components: { GithubProjectItem },
    name: "GithubProject",
}
</script>

<style lang="scss">
.github-project{
    width: calc(100% - 280px);
    font-family: 'Mundial', sans-serif;
    background: #FFF;
    margin: auto;
    padding: 150px 0;
    max-width: 1600px;
    h2{
        font-size: 40px;
        font-weight: 600;
        margin: 0;
        line-height: 50px;
    }
}

@media all and (max-width: 1024px) {
    .github-project{
        width: calc(100% - 100px);
        padding: 100px 0;
    }
}

@media all and (max-width: 767px) {
    .github-project{
        width: calc(100% - 50px);
    }
}
</style>