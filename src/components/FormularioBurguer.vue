<template>
    <p>Componente de mensagem</p>
    <div>
        <form id="burguer-form">
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite seu nome">
            </div>

            <div class="input-container">
                <label for="pao">Escolha o tipo de pão:</label>
                <select name="pao" id="pao" v-model="pao">
                    <option value="">Selecione o seu pão</option>
                    <option value="Integral">Integral</option>
                </select>
            </div>

            <div class="input-container">
                <label for="carne">Escolha o tipo carne:</label>
                <select name="carne" id="carne" v-model="carne">
                    <option value="">selecione o tipo de carne</option>
                    <option value="Frango">Frango</option>
                </select>
            </div>
            
            <div id="opcionais-container" class="input-container">
                <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
                <div class="checkbox-container">
                    <input type="checkbox" name="opcionais" v-model="opicionais" value="salame">
                    <span>Salame</span>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" name="opcionais" v-model="opicionais" value="salame">
                    <span>Salame</span>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" name="opcionais" v-model="opicionais" value="salame">
                    <span>Salame</span>
                </div>
            </div>

            <div class="input-container">
                <input type="submit" class="submit-btn" value="Criar meu hamburguer">
            </div>
            

        </form>
    </div>
</template>

<script>
    export default{
        name:'FormularioBurguer',
        
    }
</script>

<style scoped>
    #burguer-form{
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin:auto;
    }

    .input-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label{
        font-weight: bold;
        margin-bottom: 15px;
        color:#222;
        padding: 5px 10px;
        border-left:4px solid #fcba03;
    }

    input,select{
        padding: 5px 10px;
        width:300px;
    }

    #opcionais-container{
        flex-direction: now;
        flex-wrap: wrap;
    }

    #opcionais-title{
        width:298px;
    }

    .checkbox-container{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width:50%;
        margin-bottom: 20px;
    }

    .checkbox-container span,
    .checkbox-container input{
        width:auto;
    }

    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn{
        background-color: #222;
        color:#fcba03;
        font-weight: bold;
        border:2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin:0 auto;
        cursor:pointer;

        transition: .5s;
    }

    .submit-btn:hover{
        background: transparent;
        color:#222;
    }
    
</style>