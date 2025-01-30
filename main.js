$(document).ready(function () {
  // Aplicar máscara no campo de CEP (é necessário o plugin jQuery Mask Plugin)
  $("#cep").mask("00000-000");

  $("#btn-buscar-cep").click(function () {
    const cep = $("#cep").val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json`;
    const botao = $(this);

    // Alterar a aparência do botão durante a requisição
    $(botao).find("i").addClass("d-none");
    $(botao).find("span").removeClass("d-none");

    // requisição AJAX com
    $.ajax({
      url: endpoint,
      method: "GET",
      dataType: "json",
      success: function (json) {
        if (json.erro) {
          alert("CEP não encontrado. Verifique e tente novamente.");
          return;
        }
        const endereco = `${json.logradouro}, ${json.bairro}, ${json.localidade}, ${json.uf}`;
        $("#endereco").val(endereco);
      },
      error: function () {
        alert(
          "Ocorreu um erro ao buscar o endereço, tente novamente mais tarde."
        );
      },
      complete: function () {
        setTimeout(function () {
          $(botao).find("i").removeClass("d-none");
          $(botao).find("span").addClass("d-none");
        }, 3000);
      },
    });
  });
});
