<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="250px" />
</h1>
<p align="center">
  <a href="#-nlw">Next Level Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: O que é a Next Level Week?

O NLW é uma semana com muito código e prática, desafios, redes e um único objetivo: ir para o próximo nível.
Através do nosso método, você aprende novas ferramentas, aprende sobre novas tecnologias e descobre hacks que impulsionam sua carreira.
Um evento online e totalmente gratuito que o ajuda a dar o próximo passo na sua evolução como desenvolvedor.

## 💻 Projeto

Ecoleta é um projeto desenvolvido com base na semana internacional do meio ambiente.
O objetivo é conectar pessoas a empresas que coletam resíduos específicos, como lâmpadas, baterias, óleo de cozinha etc.

<h1 align="center">
    <img alt="Example" title="Example" src=".github/capa.svg" width="500px" />
</h1>


## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## 🔖 Layout

Para acessar o layout, use [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/).

## :information_source: Como usar

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

Na sua linha de comando:

### Instalação Backend

```bash
# Clone this repository
$ git clone https://github.com/victorhugoliziani/ecoleta

# Go into the repository
$ cd ecoleta/server

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev

# running on port 3333
```

### Instalação Front-end

```bash

# Go into the repository
$ cd ecoleta/web

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

### Instalação Mobile

```bash

# Go into the repository
$ cd ecoleta/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page

# If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```


[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
