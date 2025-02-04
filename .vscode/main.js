// criando a classe
function Veiculo(modelo, marca, ano) {
  this.modelo = modelo;
  this.marca = marca;
  this.ano = ano;

  // metodo para exibir informaçoes
  this.exibeInfo = function () {
    return `${this.modelo}, ${this.marca},${this.ano}`;
  };
}

// criar objeto que herda de veiculo

function Carro(modelo, marca, ano, portas) {
  // Chamar função que traz Veiculo como pai
  Veiculo.call(this, modelo, marca, ano);

  // adicionar um atributo especifico do carro
  this.portas = portas;

  // metodo para exibir informações
  this.exibeInfo = function () {
    return `${this.modelo} ${this.marca}, Ano:${this.ano} - ${this.portas} portas`;
  };
}

// criar segundo objeto que herda de veiculos

function Moto(modelo, marca, ano, cilindradas) {
  this.modelo = modelo;
  this.marca = marca;
  this.ano = ano;

  // chamar função que traz veiculo como pai
  Veiculo.call(this, modelo, marca, ano);

  // adicionar um atributo exclusivo de motos
  this.cilindradas = cilindradas;

  // metodo para exibir resultados
  this.exibeInfo = function () {
    return `${this.modelo} ${this.marca}, Ano:${this.ano} - ${this.cilindradas} cc`;
  };
}

// criar instancias
const carro1 = new Carro("Hb20", "Hyundai", "2020", 4);
const carro2 = new Carro("Camaro", "Chevrolet", "2020", 4);
const moto1 = new Moto("Hornet", "Honda", "2020", 600);

// exibir informações
console.log(carro1.exibeInfo());
console.log(carro2.exibeInfo());
console.log(moto1.exibeInfo());
