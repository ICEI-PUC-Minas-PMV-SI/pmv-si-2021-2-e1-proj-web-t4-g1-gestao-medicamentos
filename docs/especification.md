# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

### Joaquim Cardoso dos Santos,46 anos

Viúvo, tem 3 filhos. Atualmente mora sozinho no subúrbio de São Paulo, trabalha como operador de maquinas pesadas em grandes construções e é portador da **Síndrome de Burnout** (distúrbio psíquico causado pela exaustão extrema). Ultimamente o seu psicólogo recomendou-lhe que utilizasse redes sociais para entretenimento, e praticasse exercícios físicos; então ele passou utilizar frequentemente _WhatsApp_, _Facebook_ e o _Instagram_; e faz uma curta caminhada no final da tarde todos os dias. Ele faz uso diário de ***antidepressivo*** e ***ansiolíticos*** para tratamento de seu distúrbio. Como o horário de sua medicação fica dentro do horário de trabalho ele acaba atrasando ou antecipando o uso dos medicamentos. Tendo isso em mente, ele está procurando por um artifício que possa gerencia-lo, auxilia-lo e o lembra-lo de se medicar no horário correto. 

### Sueli Aparecida

Sueli Aparecida tem 70 anos, é professora aposentada e vive na companhia do marido que também é aposentado. Ela costuma utilizar algumas redes sociais como _WhatsApp_ e _Facebook_ para se relacionar com familiares e amigos. Faz uso regular de medicamentos para controle de **diabetes**, **hipertensão arterial**, **dislipidemia** e **Hipotireoidismo**. Além disso, também toma algumas vitaminas para suplementação nutricional. Procura algum meio para auxiliá-la a organizar as informações, bem como para lembrá-la de tomar o medicamento certo, na hora certa e na dosagem correta, pois tem dificuldades com a bula, esquecimentos de horários, nome dos medicamentos, além de esquecer de verificar quando determinado medicamento está acabando.

### Adriana Pereira Silva

Adriana Pereira Silva, 50 anos é casada mãe de três filhos. Trabalha como cuidadora de idosos há 15 anos e nos últimos cinco anos é responsável pelos cuidados de casal de idosos, Vanda Noranha de 86 anos e seu marido João Noronha de 90 anos. Os idosos fazem tratamento diário a base de remédios controlados, pois Vanda é hipertensa, tem diabetes tipo 2 e osteoporose. Já João é hipertenso e está em tratamento de um Enfisema Pulmonar. 
Em sua rotina, Adriana precisa controlar os horários e as doses dos rémedios, necessitando assim de um auxílio tecnologico que a lembre dos horários e que ela possa ter o controle das doses ministradas no dia. 

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO ...  `PERSONA`| QUERO/ PRECISO ... `FUNCIONALIDADE`| PARA ... `MOTIVO/VALOR`| 
|-----------------|-------------------------------------------------------------|----------------------------------------------------------|
|`Joaquim C. dos Santos`| Notificações do horário de cada remédio| Tomar ciência de quando devo me medicar| 
|`Joaquim C. dos Santos`| Estabelecer auxilio e orientação| Para melhor uso dos medicamentos| 
| `Sueli Aparecida` | Organizar as informações dos vários medicamentos que utilizo | Viabilizar utilização segura e eficiente dos medicamentos |
|`Sueli Aparecida`| Receber lembrete com as instruções na hora de tomar remédio| Proporcionar que eu tome o remédio certo, na hora certa e na dose prescrita|
|`Sueli Aparecida`| Receber lembrete avisando quando determinado medicamento estiver acabando| Evitar interrupções no tratamento e prejuízo à saúde|
|`Adriana Pereira Silva`| Controlar a rotina diária de medicamentos| Possibilitar maior facilidade no controle de horários e doses dos remédios|
|`Adriana Pereira Silva`| Ter um local com todo o histórico dos remédios já ministrados no dia| Manter o tratamento correto e eficiente|

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |
   

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O site atendera ao requisito de **PORTABILIDADE** - deverá executar em qualquer plataforma. |**ALTA**| 
|RNF-002|O site atendera a Lei Geral de Proteção de Dados pessoais nº 13.709/2018|**ALTA**| 
|RNF-003|A `front-end` e `back-end` do site deverá ser desenvolvida em ***CSS***, ***HTML*** e ***JavaScript***|**ALTA**| 
|RNF-004|O site deverá atender ao requisito de **USABILIDADE** - facilidade no uso do sistema|**ALTA**| 
|RNF-005|O site atendera ao requisito de **CONFIABILIDADE** -terá alta disponibilidade 99% do tempo|**ALTA**| 
|RNF-006|O site deverá usar arquitetura em camadas para desacoplamento|**MÉDIA**| 
|RNF-007|Deve usar Design Responsivo, para que renderize bem em qualquer dispositivo|**MÉDIA**| 
|RNF-008| Deve processar requisições do usuário em no máximo 3s|**BAIXA**| 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O projeto não deve extrapolar o orçamento definido    |
|03| Não pode ser desenvolvido um módulo de backend        |
|04| O desevolvimento do projeto estará limitado a 5 colaboradores |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
