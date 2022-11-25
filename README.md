# Acompanhamento de progresso - bootcamp Orange Tech+ na DIO

Repositório criado para fazer anotações do progresso do Bootcamp(Orange Tech+) na DIO.

## Links úteis

[Sintaxe Basica Markdown](https://www.markdownguide.org/basic-syntax)

### Primeiras páginas interativas com JavaScript

Nesta aula aprendi sobre alguns tipos de variáveis, operadores e estruturas condicionais

### Conhecendo funções javascript

O poder das funções na qualidade de seu código

- simplificar o código

- reutilizar blocos de código em outras partes do código

### Criando objetos e classes em JavaScript

Aprendi conceito de classe como definição de um objeto, como instanciar um objeto.

- criar metodos dentro de objetos

- fazer uma chamada de variaveis e recuperar seu valor dentro de uma string desta forma "${pessoa.nome}"

### Arrays e Estruturas de Repetição em JavaScript

Conceitos de listas e arrays

- lista.pop() - remove ultimo item da lista

- lista.shift() - remove primeiro item da lista

- lista.push() - adiciona novos itens na lista

- [Métodos de array no Javascript](https://juliocarneiro.medium.com/m%C3%A9todos-de-array-no-javascript-ef43c8f50c52)

- como percorrer itens em uma lista usando estruturas condicionais

### Introdução ao Desenvolvimento Web com JavaScript

Desenvolvimento Web com JavaScript

* Configuração do ambiente de desenvolvimento

* instalação, node e npm, como rodar um server local "http-server"

* Introdução básica sobre html
  
  * linguagem de marcação

* Introdução básica sobre css
  
  * linguagem de estilo

* Explicação sobre interação com JavaScript 
  
  * interação para as páginas

* [Introdução à Web - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web)

* [GitHub - digitalinnovationone/js-developer-pokedex](https://github.com/digitalinnovationone/js-developer-pokedex)

* [normalize - Libraries - cdnjs - The #1 free and open source CDN built to make life easier for developers](https://cdnjs.com/libraries/normalize)

### Criando um Projeto com HTML/CSS para Listagem de Pokémon

* Normalize nas páginas html

* Organizando o projeto

* Adicionar fontes pesonalizadas

* Estilização CSS

* Tornando layout responsivo

* [Pokedex-js]([GitHub - dev-pedro/pokedex-js](https://github.com/dev-pedro/pokedex-js))

### Dominando o Protocolo HTTP e Integrando coma a PokeAPI

* Como funcionam as requisições

* Url, Path, Method

* Method (GET | POST | PUT | DELETE | PATCH)

* [Padrão REST](https://www.brunobrito.net.br/padrao-rest/)

* Passagem de parametros **2** formas, (1ª direto no path(caminho-url), 2ª pela QueryString)

* Request Headers e Response Headers (configuração da nossa requisição - lado cliente | reposta da requisição - lado servidor)

* Body - Corpo de informação metodos utilizados (POST | PUT | PATH)
  
  * Requisição é composta (URL, Request Method, Request Headers, Response Headers, Request Body)
  
  * Status Code (significa o resultado da requisição) [HTTP: Status Code](https://www.devmedia.com.br/http-status-code/41222)

* Requisição via Fetch (resposta assíncrona)

* Manipulação de lista "ol - html"  via código javascript

### Desafio de projeto

###### Construindo uma Pokédex com JavaScript

[Pokedex](https://dev-pedro.github.io/pokedex-js/)

### Primeiros passos na biblioteca React

* O que é o React
  
  * É uma biblioteca javascript

* Framwork x Biblioteca
  
  * Biblioteca - Coleção de recursos usados para alguma solução por meio de funções. Ex:
    
    * Moment.js
    
    * Chart.js
    
    * Voca
    
    * mo.js
    
    * React.js
  
  * Framwork - Uma ferramenta que padroniza configurações de projetos e você utiliza para seu desenvolvimento em projetos de software . Ex:
    
    * Angular
    
    * Vuex
    
    * Ionic
    
    * Next
    
    * Express
    
    * LoopBack

* Criando um projeto React
  
  * npx create-react-app "nome_do_app" (executar comando no terminal)

* Componentes de classes x Funcionais
  
  * Componentes de classes é uma forma das versões antigas do react de apresentar componentes (escrito dentro de uma function) **NÃO SÃO MAIS UTILIZADOS EM PROJETOS NOVOS**
  
  * Funcional são as formas mais recentes de se usar componentes no react

* Conceitos de componentes e props
  
  * Componentes são formas de centralizar as resposabilidades
  
  * Gera uma facilidade para dar manutenção no código devido à padronização

* Ciclo de vida
  
  * Contructor
  1. getDerivedStateFromProps
  
  2. componentDidMount
  
  3. shouldComponentUpdate
  
  4. render
  
  5. getSnapShotBeforeUpdate
  
  6. componentDidUpdate
  
  7. componentWillUpdate
  * O ciclo de vida dos componentes sofrem mudanças durante a execução app

### Iniciando um Projeto com React CLI e Navegação

##### React CLI

* Ex: npx create-react-app {nome_projeto}

* Uma ferramenta de linha de comando que já traz um modelo de projeto como base

##### Styled-Components

* É uma bilioteca que possibilita escrever código CSS dento do JavaScript
  
  * Basicamente, styled components **é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript**. Com ele, você pode criar websites bonitos e funcionais. Além disso, ganhar mais agilidade e precisão no desenvolvimento web.

##### Hooks

* Para que servem os Hooks?
  
  * **Hooks** são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. **Hooks** não funcionam dentro de classes — eles permitem que você use React sem classes.

* **Existem 4 tipos de **Hooks**:**
  
  * useState **Hook**.
    
    * Serve para manipular o estado dos nossos componentes
  
  * useEffect **Hook**.
    
    * Monitora o ciclo de vida dos componentes 
  
  * useMemo **Hook**.
    
    * Memoriza valores em uma determinada variável para evitar processamentos desnecessários e prejudicar a performance da aplicação (salvar referencias em variáveis - const, var, let)
  
  * useCallback
    
    * Trabalha parecido com o useMemo porém armazena uma função (salvar referencias de funções)

##### Trabalhando com formulários no React

* O que é o React Hook Form

**React Hook Form** é uma biblioteca que auxilia na criação e validação dos formulários, como já mencionado, além de reduzir a quantidade de código desenvolvido, fazendo com que a captura de ações do formulário também seja mais objetiva.

##### Fundamentos do TypeScript

* O que é o TypeScript e para que serve?

**TypeScript** é um superset de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.

* Os Benefícios de usar TypeScript

Uma das maiores **vantagens** da **TypeScript** é possibilitar que os IDEs proporcionem um ambiente mais seguro, ao apontar erros enquanto o código é digitado pelo usuário. A linguagem **TypeScript** adiciona tipagem estática ao JavaScript, que, originalmente, possui tipagem dinâmica.

* Conceitos básicos do TypeScript

[O mínimo que você precisa saber sobre TypeScript](https://medium.com/@matheusmariano/o-m%C3%ADnimo-que-voc%C3%AA-precisa-saber-sobre-typescript-58d1b418f78b)

##### Convertendo o Projeto de JavaScript para TypeScript