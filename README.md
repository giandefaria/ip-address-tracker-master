<p align="center">
  <image
  src="https://img.shields.io/github/languages/count/giandefaria/ip-address-tracker-master"
  />
  <image
  src="https://img.shields.io/github/languages/top/giandefaria/ip-address-tracker-master"
  />
  <image
  src="https://img.shields.io/github/last-commit/giandefaria/ip-address-tracker-master"
  />
  <image
  src="https://img.shields.io/github/watchers/giandefaria/ip-address-tracker-master"
  />
</p>

# 📋 Índice do projeto


- [Proposta do projeto](#id01)
- [Alerta!](#id02)
- [Visual do projeto](#id03)
- [Feito com](#id04)
- [Procedimento de instalação](#id05)

# Proposta do projeto <a name="id01"></a>

O desafio desse projeto é montar uma pagina que faz uma conexão com uma API responsável por buscar a localização do IP do usuário (ou o IP informado), bem como a localização de algum domínio informado, e mostrar essa localização no mapa renderizado na página.

Esse projeto faz a comunicação com a API https://geo.ipify.org/, a qual retorna a localização do IP ou domínio informado. Para o mapa, foi utilizado o Leaflet (https://react-leaflet.js.org/docs/example-events/).

Após realizarmos a requisição da API e termos retornado a localização do IP/Domínio informado, esses valores são renderizados no mapa logo abaixo.

Para realizar a requisição, basta informar o endereço de IP ou o domínio no input da página e apertar a tecla enter (ou clicar no botão ao lado do input).

# Alerta <a name="id02"> </a>

Um defeito do serviço de localização de IP/Domínio, é que existe um número limmitado de requisições que podem ser realizadas. Cada requisição desconta um "crédito" que o usuário tem na página, e o site oferece 1000 créditos ao novo usuário. 

Caso a página não seja renderizada e dê erro, provavelmente é porque acabou o crédito na key indicada na API e eu ainda não percebi o problema. 



# Visual do projeto <a name="id03"></a>

<p align="center">

* Design no computador
<image
src="./src/assets/design/design-desktop.jpg"
/>

</p>

<p align="center">

* Design no celular
<image
src="./src/assets/design/design-mobile.jpg"
/>
</p>

# 🛠 Feito com <a name="id04"></a>

<br />

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)


<br />

# 📝 Procedimentos de instalação <a name="id05"></a>

<br />

Clone este repositório usando o comando:

```bash
git clone https://github.com/giandefaria/ip-address-tracker-master.git
```

Na pasta do projeto instale as dependências com uso do npm ou yarn

```bash
npm install
ou
yarn install
```

<br />

# Autor <a name="id06"></a>

<br />

- Frontend Mentor - [@giandefaria](https://www.frontendmentor.io/profile/giandefaria)
- Linkedim - [Gian de Faria](www.linkedin.com/in/gianfaria)
- GitHub - [giandefaria](https://github.com/giandefaria)