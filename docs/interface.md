
# Projeto de Interface

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

## User Flow

Para a presente aplicação, temos dois tipos de usuário, desta forma, consideramos dois fluxos:

1. Cuidador: Login > Home > Pacientes + Adicionar paciente >  Perfil paciente + Adicionar medicamento > Lista Medicamentos > Calendário > Notificações;

![Userflow - Cuidador](https://user-images.githubusercontent.com/90875153/135700546-d307009c-ba41-4473-8d84-205eeb709ea3.png)


2. Usuário (que se automedica): Login > Home > Adicionar medicamento > Lista Medicamentos > Perfil usuário > Calendário > Notificações;

![Userflow - Usuário comum](https://user-images.githubusercontent.com/90875153/135729622-b0bb6576-3139-4eaa-8f43-3236eb32ca1a.png)


Ambos podem ser conferidos no nosso projeto no Figma: https://www.figma.com/file/grCcWAJ9sl6WSaA5QnTqXL/APLICAÇÃO-WEB-|-GestãoMed?node-id=0%3A1


## Wireframes

Além dos fluxos, desenvolvemos os protótipos de cada tela, considerando os requisitos funcionais de maior importância. Abaixo estão as telas e seus requisitos correspondentes.

RF-002 - Permitir que o usuário faça login (cuidador e usuário comum)
Imagem 01 - Tela de login (cuidador e usuário comum
![01 login e cadastre-se](https://user-images.githubusercontent.com/90875153/136089495-de8ea4f2-7d8c-4983-9f44-25445784c3e4.jpg)

RF-003 - Permitir gerenciamento de assistidos (apenas cuidador)
Imagem 02 - Tela com lista de assistidos
![03 pacientes](https://user-images.githubusercontent.com/90875153/136089675-2bee8819-dbf4-401c-82d0-6a3ff759d0c2.jpg)

Imagem 03 - Tela para informar dados e adicionar paciente/assistido
![04 adicionar paciente](https://user-images.githubusercontent.com/90875153/136091140-30d1ef24-5bb4-486d-a0de-6c880fc43678.jpg)

RF-004 - Permitir cadastro de medicamentos (cuidador e usuário comum)

Obs: A única diferença aqui é a forma como se acessa a função. O cuidador acessa dentro da página de perfil de um assistido, ao qual ele irá associar o medicamento. O usuário comum acessa a função a partir da página inicial ou da sua página de perfil.

Imagem 04 - Tela para adicionar medicamento
![06 adicionar medicamento cuidador](https://user-images.githubusercontent.com/90875153/136090016-a394235d-b8ce-4541-a99a-2b07758effe7.jpg)

RF-013 - Disponibilizar consulta rápida do cronograma de ingestão diária de medicamentos (é o que já aparece para o cuidador na home; ele pode acessar a lista de cada paciente através de seus perfis)

Imagem 05 - Tela inicial que mostra as medicações do dia de "hoje". Ao clicar em qualquer data no calendário à direita a aplicação mostrará as medicações previstas ou ministradas naquele dia.
![02 home cuidador](https://user-images.githubusercontent.com/90875153/136090583-8ac39f70-2db3-4a71-9692-a478ae655cc7.jpg)

As telas estão no nosso projeto no Figma: https://www.figma.com/file/grCcWAJ9sl6WSaA5QnTqXL/APLICAÇÃO-WEB-|-GestãoMed?node-id=0%3A1
