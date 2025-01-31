// iniciar função
// guardar os elementos nas variaveis
// guardar a url da api na variavel
$(document).ready(function () {
  const avatarConst = $("#avatar");
  const nameConst = $("#name");
  const userConst = $("#user_name");
  const repositorioConst = $("#repositorio");
  const seguidoresConst = $("#seguidores");
  const seguindoConst = $("#seguindo");
  const linkConst = $("#link_perfil");
  const endpoint = `https://api.github.com/users/Natan13vinicius`;

  // conexão com a API
  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json(); // Converte a resposta para JSON
    })
    .then(function (dados) {
      console.log("Dados recebidos:", dados); // Exibe os dados no console para verificar
      // inserir dados nos campos
      nameConst.text(dados.name);
      userConst.text(dados.login);
      repositorioConst.text(dados.public_repos);
      seguidoresConst.text(dados.followers);
      seguindoConst.text(dados.following);
      linkConst.attr("href", dados.html_url);
      avatarConst.attr("src", dados.avatar_url);
    })
    .catch(function (erro) {
      console.error("Erro na requisição:", erro); // Exibe o erro caso haja falha
    });
  // Me arruma um emprego EBAC <3
});
