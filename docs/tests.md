# Plano de Testes de Software

Este plano de testes tem como objetivo explicar os meios utilizados para assegurar que nossa aplicação, a GestãoMed, faz o que deve fazer. Pra isso realizamos um Teste Funcional, que consiste em listar alguns dos requisitos funcionais como histórias de usuário, criando “casos de teste”, nos quais constam o objetivo do usuário com aquela ação e o resultado esperado, seguidos do resultado obtido.
	Com os resultados em mãos, faremos as correções necessárias e um Teste Regressivo, para garantir que as funções criadas antes do primeiro teste foram preservadas. Por fim, caso haja disponibilidade de tempo, faremos testes de usabilidade, aceitação e acessibilidade, mas a prioridade é assegurar que a aplicação faz o que deve fazer.
 
# Casos de Teste

**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, email, senha, Estado e Cidade e clica no botão "Continuar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa gênero, seu tipo de usuário (cuidador ou comum), data de nascimento e clica em criar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Fazer login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa email, senha e clica em "entrar".<br>2) A aplicação verifica se os dados estão corretos informa ao usuário caso não sejam.<br> 3) A aplicação direciona o usuário para a sua página inicial.
**Requisitos associados** | RF-001 e RF-002
**Resultado esperado** | Realização de login e direcionamento para a home da aplicação.
**Dados de entrada** | Login e senha previamente armazenados.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Adicionar paciente (ou assistido)**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome e idade do paciente. Em seguida clica em "cadastrar paciente".
**Requisitos associados** | RF-003
**Resultado esperado** | Armazenar dados do paciente.
**Dados de entrada** | Nome, sobrenome e idade do paciente.
**Resultado obtido** | Sucesso.

# Registro de Testes de Software

(inserir prints)



## Avaliação

A interface da aplicação apresenta bom funcionamento, permitindo que o usuário navegue com facilidade entre suas seções. Por outro lado, foram observadas falhas cruciais na base da aplicação, citadas abaixo:

    - Na home mostra notificações de exemplo, e não as cadastradas pelo usuário;
    - O mesmo se aplica à aba pacientes, que mostra 3 perfis de exemplo e não perfis cadastrados pelo usuário, além de só permitir acesso ao primeiro perfil da lista;
    - Na aba notificações também são mostrados apenas exemplos, ao invés das notificações cadastradas pelo usuário.      

Considera-se, portanto, que a aplicação não cumpre as funções ela solicitadas, sendo necessário, portanto, construir algumas funcionalidades e aprimorar outras, para que a aplicação passe a ser plenamente utilizável.
