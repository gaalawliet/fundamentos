const valor = 'global'

function minhaFuncao() {
    console.log(valor)
}

function exece() {
    const valor = 'local'
    minhaFuncao()
}

exec()