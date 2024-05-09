// funçao para consultar endereço e fazer requisiçao
function consultaEndereco() {
  // pegue o valor digitado em 'cep'
  var cep = document.querySelector("#cep").value;
  // nao permita que o codigo continue se a quantidade digitada for diferente que 8
  if (cep.length !== 8) {
    alert("CEP invalido");
  }

  // crie uma variavel com o link da api e o numero digitado já concatenado
  var url = `https://viacep.com.br/ws/${cep}/json/`;
  // Fazer requisição na api para ter a resposta promise
  fetch(url).then(function (response) {
    // console.log(response)
    // converter os dados para json e pegá-los para tratar
    response.json().then(function (data) {
      mostrarEndereco(data);
    });
  });
}

// mostrar endereço
function mostrarEndereco(dados) {
  // pegar os elementos HTML que mostram o resultado
  var resRua = document.querySelector("#resRua");
  var resBairro = document.querySelector("#resBairro");
  var resLocalidade = document.querySelector("#resLocalidade");
  var resUf = document.querySelector("#resUf");

  // tratar o erro

  // imprimir os dados na tela
  resRua.textContent = dados.logradouro;
  resBairro.textContent = dados.bairro;
  resLocalidade.textContent = dados.localidade;
  resUf.textContent = dados.uf;
}
