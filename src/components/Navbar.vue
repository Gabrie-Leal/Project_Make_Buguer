<template>
    <nav>
        <router-link to="/" class="logo_link">
            <img :src="logo" :alt="alt" class="logo_img">
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/Pedidos">Pedidos</router-link>
    </nav>
</template>

<script>   
    export default{
        name:"Navbar",

        props:["logo","alt"],

        data(){
            return{

            }
        }
    }
</script>

<style>

:root{
    --corTextoHover:#ffff;
}
    nav{
        background: #222;
        border: 4px solid #111;
        padding: 15px 50px 15px 10px;
        
        display: flex;
        justify-content: flex-end;
        align-items: center;

        gap:24px;
    }

    .logo_link{
        margin-right: auto;
    }

    #logo_img{
        width: 40px;
        height: 40px;
    }

    nav a{
        color:#fcba03;

        transition: .5s;
    }

    nav a:hover{
        color:var(--corTextoHover);
    }
</style>