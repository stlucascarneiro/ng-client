# Porfolio - Lucas Carneiro

Esse repositório representa a camada de front end de um teste técnico proposto pela NG Cash para validar meus conhecimentos em engenharia de software.
A Aplicação desenvolvida utiliza ReactJs, NextJS, Typescript, Styled Components e Apollo Client.

## Estrutura

### Pages
Conforme o padrão do NextJs, todas as páginas estão em `/pages` e representam as rotas possíveis da aplicação.
Em `_document` e `_app` estão as configurações do documento HTML assim como contextos e providers.

### Atoms
Seguindo o modelo de design atômico, as menores partes da interface (cores, tipografia, ícones...) estão relacionadas em `/src/atoms` que são passadas para toda a aplicação através de providers.

### Components
Elementos de interface reutilizáveis estão presentes em `/src/components` como botões, inputs e etc. São compostos de um `.tsx` e uma lista de styled components. Existe um setup para o desenvolvimento de testes unitários também.

### Organisms
Alguns elementos mais complexos e compostos por mais componentes são destacados em `/src/organisms` por uma questão de organização e limpeza de código.

### API
Como esta aplicação se conecta com um back-end através de requisições GraphQL, na pasta `/src/api` estão as queries e mutations que são utilizadas.

### Public
Na pasta `/public` estão todos os arquivos estáticos utilizados pela aplicação: imagens, favicons, etc.

### Styles
Em `/styles` estão as estilizações das tags utilizadas diretamente nas páginas assim como estilos e tipos globais