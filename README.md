# Porfolio - Lucas Carneiro

Este projeto template com uma arquitetura e algumas tecnologias que eu gosto de utilizar para iniciar meus projetos.

## Tecnologias

### React & Next
O React é uma excelente biblioteca para criar interfaces e controlar estados, eventos e comportamentos de forma reativa. Combinada com NextJs, a aplicação conta com toda a funcionalidade de uma SPA somada à performance e à simplicidade de uma página HTML estática provida por SSR e Bundling.

### Typescript
Utilizar Typescript é uma forma de acelerar, criar e manter padrões de código e melhorar a segurança durante o processo de desenvolvimento prevenindo erros e inconsistências através das tipagens de objetos e procedimentos e a validação do código em tempo de desenvolvimento.

### Styled Components
Com a biblioteca do Styled Components é possível escrever o CSS de forma dinâmica com o CSS-in-JS e gerenciar melhor o escopo das regras CSS através da criação de componentes estilizados.

### Jest & React Testing Library
Para desenvolver testes unitários e de integração estou utilizando uma combinação de Jest para execução e organização dos testes automatizados e RTL para a manibulação do DOM.

### Framer Motion
O Framer Motion é uma biblioteca utilizada para criar animações de forma simples e declarativa. Essa funcionalidade se comporta muito bem com o ciclo de vida dos componentes React

### Figma
Figma é uma ferramenta de prototipação de interfaces online. Costumo utilizá-la para criar wireframes, a responsividade e o design system dos projetos. O arquivo Figma desse projeto pode ser encontrado [nesse link](https://github.com/stlucascarneiro/)

## Arquitetura
### Static Site Generator & Server Side Rendering
A maioria das páginas são geradas estaticamente pelo NextJs no lado do servidor e utilizam pouco ou nenhum processamento Javascript no lado do cliente. Isso garante uma melhor performance e ajuda nas ferramentas de pesquisas (SEO). Para páginas dinâmicas, uma página é gerada no lado do servidor a cada requisição para ser entregue ao cliente as informações prontas para o consumo.

### Test Driven Development (TDD)
Para esta aplicação utilizei a técnica de desenvolvimento guiada por testes. Para cada componente e organismo desenvolvo seu teste automatizado com o comportamento esperado usando o padrão AAA (Arrange, Act, Assert) e em seguida desenvolvo sua composição e comportamento.

### Design System & Design Atômico
Para criar uma identidade, manter padrões da interface e reduzir custos de manutenção optei por desenvolver um design system que é formado por regras e padrões pelos quais a interface se compõe. Dentre essas regras o Design Atômico serve para destacar e classificar das menores unidades da interface até a composição completa de uma página. Essa definição também ajuda a agilizar o processo de desenvolvimento.

### Responsividade
A interface criada se adapta a diferentes dispositivos, tanto desktops quanto mobile. Utilizei o conceito de Mobile-first para a criação visto que ajuda no desenvolvimento da adaptação da interface e dá prioridadade aos dispositivos mais utilizados atualmente.