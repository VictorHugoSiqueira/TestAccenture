<h1> Teste Accenture </b> </h1>

## <b> ``Introdução`` </b>

**Antes de iniciar o desafio de fato, fiz a leitura de todo o desafio e montei um plano para facilitar o processo. Fazendo isso, tornou-se bem mais simples o desenvolvimento do projeto. Para a execução do projeto, usei a versão mais atual da ferramenta cypress, que tem como base a linguagem de programação JavaScript. Criei alguns metódos cypress para facilitar o meu processo de testes e neles também usei tipagem ( TypeScript )**

<br>

## <b> ``Processo`` </b>

**Antes de iniciar o desafio, fiz um estudo e montei um plano de testes em cima do link que foi passado. Logo após, dei inicio aos arquivos de textos e localizadores de todos os componentes antes de iniciar o processo de automatização de um Fluxo Feliz, pois torna a montagem dos cenários bem mais simples com essa estrutura pronta. Cada teste possui uma validação, o Cypress nomeia essas validações como ASSERTIVAS.**

<br>

## <b> ``Executando os Testes Automatizados`` </b>

- Aplicativo necessário para execução:
    - Node.js ( https://nodejs.org/en/download/ )
- Baixe o projeto TestAccenture no Github
    - https://github.com/VictorHugoSiqueira/TestAccenture
- Entre na pasta do projeto TestAccenture, e na barra de endereços, digite CMD para abrir uma janela em que iremos inserir os comandos para o funcionamento.

**Passos**
- No Prompt de comando digite
    - <i>npm install</i>
- E para executar nosso automatizador cypress, digite o comando abaixo:
    - <i>npm run open</i>
<br>

**Após alguns segundos a tela do cypress será apresentada.**

- Escolha a opção: <b>E2E Testing</b>
- Escolha o browser desejado ( Indico o uso do Electron para não ter problemas com o antivírus)
- Clique em Start E2E Testing in Electron

## <b> ``Escolhendo o teste``</b>

**Duas opções serão apresentadas:**
- <b>registration.cy.js: </b> Esta opção trará o teste "fluxo feliz". É um teste contínuo validando os botões, textos, mensagens, inputs, preenchimentos e validações. 
- <b>testCases.cy.js: </b> Esta opção trará o teste em BDD. Todas as validações citadas acima dentro de casos de teste. As funcionalidades estão separadas por tela e divididas por cenários.

OBS: Ao escolher a opção desejada, o teste iniciará automaticamente. No menu lateral esquerdo será apresentado cada passo realizado nos testes. Sendo possível ver um resumo detalhado passando o mouse sobre cada cenário.
</br>

## <b> ``Considerações Finais``</b>

**Como foi proposto no desafio, Realizei todos os testes que foram impostos usando BDD. Caso tivesse mais tempo teria feito mais validações inclusive teste de backend, pois vi que há uma chamada a uma API no final do processo.**