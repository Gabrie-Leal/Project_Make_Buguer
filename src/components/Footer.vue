<template>
    <footer>
        <p>Monte seu hamburguer &copy; 2025</p>
    </footer>
</template>

<script>
    export default{
        name:'Footer',
    }
</script>

<style scoped>
    footer{
        height: 200px;
        width: 100%;

        background-color: #222;
        border-top:4px solid #111;
        color:#FCBA03;

        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;

        position: fixed;
        bottom: 0;
    }
</style>