<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-card-title>
    Hóspedes
    <v-spacer></v-spacer>
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
    ></v-text-field>
    </v-card-title>

    <v-simple-table>

    <template v-slot:top>
        <v-container fluid>
            <v-radio-group
            v-model="select"
            row
            >
            <v-radio
                label="Filtrar por nome"
                value="nome"
            ></v-radio>
            <v-radio
                label="Filtrar por documento"
                value="documento"
            ></v-radio>
            <v-radio
                label="Filtrar por telefone"
                value="telefone"
            ></v-radio>
            </v-radio-group>
        </v-container>

    </template>

    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Documento
          </th>
            <th class="text-left">
            Telefone
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in guests"
          :key="item.nome"
        >
          <td>{{ item.nome }}</td>
          <td>{{ item.documento }}</td>
          <td>{{ item.telefone }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card>
</template>

<script>

  export default {
    data () {
      return {
      }
    },
    computed:{
        search:{
            get(){
                return this.$store.state.search;
            },
            set(value){
              this.$store.commit('setSearch', value)
            }
        },
        select:{
            get(){
                return this.$store.state.select;
            },
            set(value){
              this.$store.commit('setSelect', value)
            }
        },
        guests(){
            return this.$store.state.guests
        }
    }
  }
</script>