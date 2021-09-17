# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

### 1) Joaquim Cardoso dos Santos  

Joaquim Cardoso dos Santos ,46 anos, viúvo, tem 3 filhos. Atualmente mora sozinho no subúrbio de São Paulo, trabalha como operador de maquinas pesadas em grandes construções e é portador da **Síndrome de Burnout** (distúrbio psíquico causado pela exaustão extrema). Ultimamente o seu psicólogo recomendou-lhe que utilizasse redes sociais para entretenimento, e praticasse exercícios físicos; então ele passou utilizar frequentemente _WhatsApp_, _Facebook_ e o _Instagram_; e faz uma curta caminhada no final da tarde todos os dias. Ele faz uso diário de ***antidepressivo*** e ***ansiolíticos*** para tratamento de seu distúrbio. Como o horário de sua medicação fica dentro do horário de trabalho ele acaba atrasando ou antecipando o uso dos medicamentos. Tendo isso em mente, ele está procurando por um artifício que possa gerencia-lo, auxilia-lo e o lembra-lo de se medicar no horário correto. 

### 2) Sueli Aparecida 

Sueli Aparecida tem 70 anos, é professora aposentada e vive na companhia do marido que também é aposentado. Ela costuma utilizar algumas redes sociais como _WhatsApp_ e _Facebook_ para se relacionar com familiares e amigos. Faz uso regular de medicamentos para controle de **diabetes**, **hipertensão arterial**, **dislipidemia** e **hipotireoidismo**. Além disso, também toma algumas vitaminas para suplementação nutricional. Procura algum meio para auxiliá-la a organizar as informações, bem como para lembrá-la de tomar o medicamento certo, na hora certa e na dosagem correta, pois tem dificuldades com a bula, esquecimentos de horários, nome dos medicamentos, além de esquecer de verificar quando determinado medicamento está acabando.

### 3) Adriana Pereira da Silva 

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

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir cadastro do usuário | ALTA |
|RF-002| Permitir que o usuário faça login | ALTA |
|RF-003| Permitir cadastro de assistidos | ALTA |
|RF-004| Permitir cadastro de medicamentos | ALTA |
|RF-005| Disparar lembrete no horário de tomar medicamento | ALTA |
|RF-006| Disparar alerta de fim do estoque de medicamentos | ALTA |
|RF-007| Permitir confirmação de que tomou medicamento | ALTA |
|RF-008| Recuperar senha | ALTA |
|RF-009| Redefinir senha | ALTA |
|RF-010| Fornecer dicas e orientações sobre uso dos medicamentos e doenças | MÉDIA |
|RF-011| Disponibilizar consulta ao histórico de ingestões de medicamentos por períodos | MÉDIA |
|RF-012| Permitir cadastrar pessoa para receber alerta quando esquecer de tomar medicamento | MÉDIA |
|RF-013| Permitir registro de medições | BAIXA |
|RF-014| Fornecer dicas e orientações sobre cuidados com a saúde | BAIXA |
|RF-015| Disponibilizar relatório de ingestões de medicamentos por períodos | BAIXA |



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
|04| O desevolvimento do projeto estará limitado a 5 colaboradores |



![sueli](https://user-images.githubusercontent.com/90012621/133790587-69e6a9d5-e504-4abd-a460-99a42f8b0566.jpg)



