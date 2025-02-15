<template>
    <p>Componente de mensagem</p>
    <div>
        <form id="burguer-form" @submit="criarHamburguer">
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input type="text" name="nome" id="nome" v-model="nomeCliente" placeholder="Digite seu nome">
            </div>

            <div class="input-container">
                <label for="pao">Escolha o tipo de pão:</label>
                <select name="pao" id="pao" v-model="pao">
                    <option value="">Selecione o seu pão</option>

                    <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                        {{ pao.tipo }}
                    </option>
                    <!--rodando o paes cada elemento chama pao
                    ket é id pq o json tem id, caso n tivesse usava o index msm
                    pao.tipo é pq temos o tipo de pao
                    so olhar o json q vc entede
                    -->
                </select>

            </div>

            <div class="input-container">
                <label for="carne">Escolha o tipo carne:</label>
                <select name="carne" id="carne" v-model="carne">
                    <option value="">Selecione o tipo de carne</option>

                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                        {{ carne.tipo }}
                    </option>

                </select>
            </div>
            
            <div id="opcionais-container" class="input-container">
                <label id="opcionais-title" fora="opcionais">Selecione os opcionais:</label>
                
                <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id">
                    <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                    <span>{{ opcional.tipo }}</span>
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

        data(){
            return{
                //vem do servidor
                paes:null,
                carnes:null,
                opcionaisData:null,

                //enviados, preenchido no formulario
                nomeCliente:null,
                pao:null,
                carne:null,
                opcionais:[],
                msg:null,
            }
        },

        methods:{
            //pegando dados do json
            async getIngredientes(){
                const requisicao = await fetch("http://localhost:3000/ingredientes");
                const data = await requisicao.json();//espera a requisicao, espera transformar p/ json
                console.log(data);
                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaisData = data.opcionais;
            },
            //enviando dados para o json
            //@submit no form
            async criarHamburguer(e){
                e.preventDefault();

                //dados preenchidos, parte Data
                const data = {
                    nomeCliente : this.nomeCliente,
                    carne : this.carne,
                    pao : this.pao,
                    opcionais: Array.from(this.opcionais),
                    status:"solicitado",
                };

                //transformar o objeto em texto json para enviar para o servidor
                const dataJson = JSON.stringify(data);//texto com formato json

                //inserindo o dado no json, enviando a requisicao
                const requisicao = await fetch("http://localhost:3000/burgers",{
                    method:"POST",
                    headers: { "Content-Type":"application/json"},
                    body: dataJson
                    }
                )

                //verificando se foi enviado
                const res = await requisicao.json();
                
                //limpando os campos
                this.nome="";
                this.carne="";
                this.pao="";
                this.opcionais="";
            }
        },

        mounted(){
            this.getIngredientes();
        },
        
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

    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
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