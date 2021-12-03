# Plano de Testes de Software

Este plano de testes tem como objetivo explicar os meios utilizados para assegurar que nossa aplicação, a GestãoMed, faz o que deve fazer. Pra isso realizamos um Teste Funcional, que consiste em listar alguns dos requisitos funcionais como histórias de usuário, criando “casos de teste”, nos quais constam o objetivo do usuário com aquela ação e o resultado esperado, seguidos do resultado obtido.
	Com os resultados em mãos, faremos as correções necessárias e um Teste Regressivo, para garantir que as funções criadas antes do primeiro teste foram preservadas. Por fim, caso haja disponibilidade de tempo, faremos testes de usabilidade, aceitação e acessibilidade, mas a prioridade é assegurar que a aplicação faz o que deve fazer.
 
# Casos de Teste

CT01 – Criar conta – parte 1
Procedimento – Usuário informa dados pessoais e clica em continuar
Resultado esperado – Aplicação direciona para a 2ª parte do cadastro
Resultado obtido: [sucesso]

CT02 – Criar conta – parte 2
Procedimento – Usuário informa se é cuidador ou usuário comum
Resultado esperado – Aplicação cria cadastro independente do tipo de usuário
Resultado obtido: [sucesso]

CT 03 – Fazer login
Procedimento – Usuário informa e-mail e senha 
Resultado esperado – Realização de login e direcionamento para a home da aplicação
Resultado obtido: [sucesso]

CT 04 – Adicionar paciente (assistido)
Procedimento – Usuário informa nome, sobrenome e idade do paciente
Resultado esperado – Armazenar dados do paciente e mostrá-lo na aba “pacientes”
Resultado obtido: [falha] –  Ao clicar em “Adicionar Paciente” nada acontece; O botão de voltar do modal também não responde ao comando

# Registro de Testes de Software

(inserir prints)



## Avaliação

A interface da aplicação apresenta bom funcionamento, permitindo que o usuário navegue com facilidade entre suas seções. Por outro lado, foram observadas falhas cruciais na base da aplicação, citadas abaixo:

    - Na home mostra notificações de exemplo, e não as cadastradas pelo usuário;
    - O mesmo se aplica à aba pacientes, que mostra 3 perfis de exemplo e não perfis cadastrados pelo usuário, além de só permitir acesso ao primeiro perfil da lista;
    - Na aba notificações também são mostrados apenas exemplos, ao invés das notificações cadastradas pelo usuário.      

Considera-se, portanto, que a aplicação não cumpre as funções ela solicitadas, sendo necessário, portanto, construir algumas funcionalidades e aprimorar outras, para que a aplicação passe a ser plenamente utilizável.
