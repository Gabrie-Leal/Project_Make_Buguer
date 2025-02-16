<template>
  <div id="burguer-table">
    <Message :msg="msg" v-show="msg"/>
    <div>
      <div id="burguer-table-heading">
        <div class="order-id">#</div>
        <div>Cliente</div>
        <div>Pão</div>
        <div>Carne</div>
        <div>Opcionais</div>
        <div>Ações:</div>
      </div>

      <div id="burguer-table-rows">
        <div class="burguer-table-row" v-for="burguer in burguers" :key="burguer.id">
          <div class="order-number">{{ burguer.id }}</div>
          <div>{{burguer.nomeCliente}}</div>
          <div>{{burguer.pao}}</div>
          <div>{{ burguer.carne }}</div>
          <div>
            <ul>
              <li v-for="(opcional,index) in burguer.opcionais" :key="index">
                {{ opcional }}
            </li>
            </ul>
          </div>

          <div>
            <select name="status" class="status" @change="updatedBurguer($event,burguer.id)">
              <option value="">Selecione</option>
              <option :value="statusOpc.tipo" v-for="statusOpc in status" :key="statusOpc.id" :selected="burguer.status == statusOpc.tipo">
                {{ statusOpc.tipo }}
            </option>
            <Message :msg="msg" v-show="msg"/>
            </select>
            <button class="delete-btn" @click="deletarBurguer(burguer.id)">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue';
export default {
  name: "Painel",

    components:{
        Message,
    },

  data() {
    return{
        burguers:null,
        burguer_id:null,
        status:[],
        msg:"",
    }
  },

  methods:{
    async getPedidos(){
        const requisicao = await fetch("http://localhost:3000/burgers");//acessando burguers
        const data = await requisicao.json();//transformando a requisicao em json
        
        this.burguers = data;
        console.log(this.burguers);

        //resgatando os status
        this.getStatus();//extraindo os status
    },

    async getStatus(){
        const requisicao = await fetch("http://localhost:3000/status");//acessando os status
        const data = await requisicao.json();//transforma a requisiao em json

        this.status = data;
    },

    async deletarBurguer(id){
        const requisicao = await fetch("http://localhost:3000/burgers/"+id,{
            method: "DELETE",
        });
        const res = await requisicao.json();

        //mensagem de remocao de pedido
        this.msg="Pedido ("+id+") removido com sucesso!";
        setTimeout(()=>this.msg="",3000);

        this.getPedidos();//Atualizando a lista de pedidos
    },

    //atualizando status dos pedidos
    async updatedBurguer(event,id){
        const option = event.target.value;//valor que o usurio colocou
        const dataJson = JSON.stringify({status:option})//transformando o json de status em string

        const requisicao = await fetch("http://localhost:3000/burgers/"+id,{
            method: "PATCH",//atualiza so oq vamos enviar, no caso o status
            headers:{"Content-Type": "application/json"},
            body: dataJson,
        })
        const res = await requisicao.json();

        this.msg="Pedido ("+id+") atualizado para: "+option;
        setTimeout(()=>this.msg="",3000);
    }
  },

  mounted(){
    this.getPedidos();
  }
};
</script>

<style scoped>
#burguer-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burguer-table-heading,
#burguer-table-rows,
.burguer-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burguer-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#burguer-table-heading div,
.burguer-table-row div {
  width: 19%;
}

.burguer-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burguer-table-heading .order-id,
.burguer-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>