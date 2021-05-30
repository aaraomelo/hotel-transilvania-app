<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-card-title>
    Cadastre um hóspede
    </v-card-title>
    <template >
        <v-container fluid>
            <form>
                <v-text-field
                    v-model="nome"
                    :error-messages="nomeErrors"
                    label="Nome"
                    required
                    @input="$v.nome.$touch()"
                    @blur="$v.nome.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="documento"
                    :error-messages="documentoErrors"
                    label="Documento"
                    required
                    @input="$v.documento.$touch()"
                    @blur="$v.documento.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="telefone"
                    :error-messages="telefoneErrors"
                    label="Telefone"
                    required
                    @input="$v.telefone.$touch()"
                    @blur="$v.telefone.$touch()"
                ></v-text-field>
                <v-btn
                    class="mr-4"
                    @click="submit"
                >
                    Cadastrar
                </v-btn>
                <v-btn @click="clear">
                    Limpar
                </v-btn>
            </form>
        </v-container >
    </template>
  </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      nome: { required },
      documento: { required },
      telefone: { required },
    },

    data: () => ({
      nome: '',
      documento: '',
      telefone: '',
    }),

    computed: {
      nomeErrors () {
        const errors = []
        if (!this.$v.nome.$dirty) return errors
        !this.$v.nome.required && errors.push('Nome is required.')
        return errors
      },
      documentoErrors () {
        const errors = []
        if (!this.$v.documento.$dirty) return errors
        !this.$v.documento.required && errors.push('Documento is required')
        return errors
      },
        telefoneErrors () {
        const errors = []
        if (!this.$v.telefone.$dirty) return errors
        !this.$v.telefone.required && errors.push('Tefone is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.nome = ''
        this.documento = ''
        this.telefone = ''
      },
    },
  }
</script>