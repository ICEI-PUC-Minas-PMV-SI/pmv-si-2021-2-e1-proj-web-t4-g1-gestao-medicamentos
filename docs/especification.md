# Especificações do Projeto

Nesta seção, nos debruçamos em evidenciar e ilustrar os tópicos que norteiam o desenvolvimento desta aplicação Web, a saber: 

- `PERSONAS `- É a representação semi fictícia, baseada em dados reais, do seu cliente ideal. É um modelo construído a partir de características comportamentais e demográficas. 

- `HISTÓRIAS DE USUARIOS` - Que é uma explicação informal e geral sobre um recurso de software escrita a partir da perspectiva do usuário final. Seu objetivo é articular como um recurso de software pode gerar valor para o cliente. 

- `REQUISITOS` 

 > - ***REQUISITOS FUNCIONAIS*** - Representa o que o software faz, em termos de tarefas e serviços. 
 > - ***REQUISITOS NÃO FUNIONAIS*** - Requisitos não funcionais são os requisitos relacionados ao uso da aplicação em termos de desempenho, usabilidade, confiabilidade, segurança, disponibilidade, manutenção e tecnologias envolvidas. 

- `RESTRIÇÕES` - São situações impostas por alguém ou por um contexto que podem afetar o desempenho e até o resultado de um projeto.
## Personas

<span align = "ceter">

### 1) Joaquim Cardoso dos Santos </h2><img src = "https://user-images.githubusercontent.com/90012621/133793202-584aebb8-9a9c-419c-906a-fc70c9ead728.png" width = "180px"> 

</span>



Joaquim Cardoso dos Santos ,46 anos, viúvo, tem 3 filhos. Atualmente mora sozinho no subúrbio de São Paulo, trabalha como operador de maquinas pesadas em grandes construções e é portador da **Síndrome de Burnout** (distúrbio psíquico causado pela exaustão extrema). Ultimamente o seu psicólogo recomendou-lhe que utilizasse redes sociais para entretenimento, e praticasse exercícios físicos; então ele passou utilizar frequentemente _WhatsApp_, _Facebook_ e o _Instagram_; e faz uma curta caminhada no final da tarde todos os dias. Ele faz uso diário de ***antidepressivo*** e ***ansiolíticos*** para tratamento de seu distúrbio. Como o horário de sua medicação fica dentro do horário de trabalho ele acaba atrasando ou antecipando o uso dos medicamentos. Tendo isso em mente, ele está procurando por um artifício que possa gerencia-lo, auxilia-lo e o lembra-lo de se medicar no horário correto.

<span align = "rihgt">

### 2) Sueli Aparecida </h2><img src = "https://user-images.githubusercontent.com/90012621/133808017-ab8d1e1b-474d-4604-aa16-9be4780fc2d7.png" width = "180px"> 

</span>


Sueli Aparecida tem 70 anos, é professora aposentada e vive na companhia do marido que também é aposentado. Ela costuma utilizar algumas redes sociais como _WhatsApp_ e _Facebook_ para se relacionar com familiares e amigos. Faz uso regular de medicamentos para controle de **diabetes**, **hipertensão arterial**, **dislipidemia** e **hipotireoidismo**. Além disso, também toma algumas vitaminas para suplementação nutricional. Procura algum meio para auxiliá-la a organizar as informações, bem como para lembrá-la de tomar o medicamento certo, na hora certa e na dosagem correta, pois tem dificuldades com a bula, esquecimentos de horários, nome dos medicamentos, além de esquecer de verificar quando determinado medicamento está acabando.

<span align = "rihgt">

### 3) Adriana Pereira da Silva </h2><img src = "https://user-images.githubusercontent.com/90012621/133818487-d7211743-4724-4329-a4fe-b0c6b79b0940.png" width = "180px">   

</span>

Adriana Pereira Silva, 50 anos é casada mãe de três filhos. Trabalha como cuidadora de idosos há 15 anos e nos últimos cinco anos é responsável pelos cuidados de casal de idosos, Vanda Noranha de 86 anos e seu marido João Noronha de 90 anos. Os idosos fazem tratamento diário a base de remédios controlados, pois Vanda é hipertensa, tem diabetes tipo 2 e osteoporose. Já João é hipertenso e está em tratamento de um Enfisema Pulmonar. 
Em sua rotina, Adriana precisa controlar os horários e as doses dos rémedios, necessitando assim de um auxílio tecnologico que a lembre dos horários e que ela possa ter o controle das doses ministradas no dia. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO ...  `PERSONA`| QUERO/ PRECISO ... `FUNCIONALIDADE`| PARA ... `MOTIVO/VALOR`| 
|-----------------|-------------------------------------------------------------|----------------------------------------------------------|
|Usuários `1,2 e 3` | Receber notificações com as instruções na hora do uso dos medicamentos| Proporcionar que eu utilize o medicamento certo, na hora certa e na dose prescrita| 
|`Joaquim C. dos santos` | Estabelecer auxilio e orientação| Para melhor uso dos medicamentos| 
|`Sueli Aparecida`| Organizar as informações dos vários medicamentos que utilizo| Viabilizar utilização segura e eficiente dos medicamentos| 
|`Sueli Aparecida` | Receber notificações 2 dias antes avisando quando determinado medicamento está acabando| Evitar interrupções no tratamento e prejuízo à saúde| 
|`Adriana Pereira` | Ter um local com todo o histórico dos medicamentos já ministrados no dia| Manter o tratamento correto e eficiente| 
## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Persona |
|------|-----------------------------------------|----|-----|
|RF-001| Disponibilizar dois perfis para cadastro de usuários (comum ou cuidador) | **ALTA** | 1, 2, 3 |
|RF-002| Permitir que o usuário faça login | **ALTA** | 1, 2, 3 |
|RF-003| Permitir gerenciamento de assistidos | **ALTA** | 3 |
|RF-004| Permitir cadastro de medicamentos | **ALTA** | 1, 2 |
|RF-005| Permitir que, para cada assistido, o usuário possa fazer a vinculação de todas as medicações | **ALTA** | 3 |
|RF-006| Disparar lembrete no horário com orientações para tomar o medicamento | **ALTA** | 1, 2 |
|RF-007| Disparar lembrete no horário com orientações sobre o medicamento a ser ministrado e para qual assistido | **ALTA** | 3 |
|RF-008| Disparar alerta de fim de estoque de medicamentos, onde a quantidade mínima para disparo do alerta pode ser configurada pelo usuário | **ALTA** | 1, 2 |
|RF-009| Permitir que, ao cadastrar o medicamento, o usuário opte por receber notificação quando o estoque estiver acabando | **ALTA** | 1, 2 |
|RF-010| Para cada assistido, disparar alerta de fim de estoque de medicamentos, onde a quantidade mínima para disparo do alerta pode ser configurada pelo usuário | **ALTA** | 3 |
|RF-011| Permitir que, ao vincular medicamentos a cada um dos seus assistidos, o usuário opte por receber notificação quando o estoque estiver acabando | **ALTA** | 3 |
|RF-012| Recuperar senha | **ALTA** | 1, 2, 3 |
|RF-013| Redefinir senha | **ALTA** | 1, 2, 3 |
|RF-014| Disponibilizar consulta rápida do cronograma de ingestão diária de medicamentos | **MÉDIA** | 1, 2, |
|RF-015| Disponibilizar consulta rápida do cronograma de ingestão diária de medicamentos por assistido | **MÉDIA** | 3 |
|RF-016| Disponibilizar consulta ao histórico de ingestões de medicamentos por períodos | **MÉDIA** | 1, 2 |
|RF-017| Disponibilizar consulta ao histórico de ingestões de medicamentos por períodos por assistido | **MÉDIA** | 3 |
|RF-018| Permitir cadastrar pessoa para receber alerta quando esquecer de tomar medicamento | **MÉDIA** | 1, 2 |
|RF-019| Permitir que, ao cadastrar o medicamento, o usuário opte por sempre confirmar a ingestão | **BAIXA** | 1, 2 |
|RF-020| Permitir que, ao vincular medicamentos a cada um dos seus assistidos, o usuário opte por sempre confirmar a ingestão | **BAIXA** | 3 |


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

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O projeto não deve extrapolar o orçamento definido    |
|03| Não pode ser desenvolvido um módulo de backend        |
|04| O desevolvimento do projeto estará limitado a 6 colaboradores |


