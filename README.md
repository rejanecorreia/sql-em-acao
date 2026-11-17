# SQL em Ação — da modelagem à consulta

Aula interativa para a segunda avaliação de Educação em Computação, 19/11/2026.

## Publicar no GitHub Pages

1. Crie um repositório **novo** (por exemplo, `sql-em-acao`). Não substitua os arquivos da primeira avaliação.
2. Envie `index.html`, `painel.html`, `style.css`, `config.js`, `app.js` e `painel.js` para a raiz do repositório.
3. Em **Settings > Pages**, escolha **Deploy from a branch**, `main`, `/ (root)`. Aguarde a publicação.
4. No Firebase Console do projeto **aula-modelo-relacional**, em **Authentication > Sign-in method**, confirme que **Anonymous** e **Email/Password** estão ativados.
5. Em **Firestore Database > Rules**, **adicione os dois blocos `match`** do arquivo `firestore.rules` DENTRO do `match /databases/{database}/documents` das regras atuais. **NÃO substitua as regras completas existentes**: a primeira aula tem outras coleções e permissões.
6. Clique em **Publish** nas regras. Em **Authentication > Settings > Authorized domains**, confirme o domínio `SEU_USUARIO.github.io` caso seja solicitado.
7. Entre em `https://SEU_USUARIO.github.io/sql-em-acao/painel.html` com a conta já autorizada da professora. Clique em **Preparar sala**.
8. Compartilhe com os estudantes o `https://SEU_USUARIO.github.io/sql-em-acao/`.
9. Em outra janela anônima ou outro dispositivo, entre como aluno e confira a atribuição de **SELECT**, depois **FROM** e **WHERE**. No painel, clique **Iniciar aula**.

## Funcionalidades atuais

- Abertura e objetivos com 06/08, 22/10 e 19/11/2026, trechos `INSERT` e `SELECT`, continuidade e fundamentação pedagógica.
- Diagrama visual TURMAS, AULAS, PARTICIPANTES e PARTICIPACOES, com indicação de PK/FK e cardinalidades.
- Autenticação anônima, nicknames SQL sequenciais e exclusivos (33 vagas), sincronizados pelo Firestore em transações.
- Painel da professora: preparar sala, mostrar entradas, iniciar aula, avançar/recuar etapas, reiniciar após ensaio.
- Banco SQLite real **local por aluno**; comandos `SELECT` executáveis com os participantes observados no Firestore; o SQL não modifica os registros reais do Firebase.
- Seis desafios, pesquisa em livro e artigo, análise de erro e Missão Caveira.

## Limitações importantes

- **Não há conversão de diagramas por IA** nesta versão. A atividade opcional “O livro voltou?” aparece como retomada conceitual.
- O número exibido é de **alunos que entraram**; não indica necessariamente quem ainda está online. O Firebase não faz monitoramento de presença/desconexão nesta versão.
- O código permite somente `SELECT` no editor; `INSERTs` são exibidos e executados pela aplicação na construção do SQLite local.
- O banco SQLite é reconstruído quando um novo participante entra ou quando a professora muda de etapa. Alterações locais deliberadas não são preservadas.
- Os exemplos dos demais temas usam dados **fictícios**, claramente indicados na interface.
- Dependência de internet para Firebase e o carregamento inicial do SQL.js por CDN.
- O artigo *Implementing CBM: SQL-Tutor After Fifteen Years* é uma fonte científica pertinente, mas a comprovação de JCR na edição exigida pelo professor deve ser verificada institucionalmente.
- A sincronização dos nicknames usa Firebase Auth e Firestore. Não use nome ou e-mail real do aluno na tabela PARTICIPANTES.

## Teste antes do dia 19/11

Faça um ensaio com 2–3 navegadores/perfis diferentes, confirme que apenas a professora controla a etapa, confira as regras publicadas e **reinicie a sala ao fim do teste**. Na data da apresentação, clique Iniciar aula com a turma presente, mesmo que nem todos os 33 matriculados compareçam.

## Referências pedagógicas

- *How People Learn* (National Research Council): conhecimentos prévios, aprendizagem ativa e metacognição.
- Anderson e Krathwohl: Taxonomia de Bloom revisada.
- Watt e Eng, *Database Design*, capítulo 9: https://opentextbc.ca/dbdesign01/chapter/chapter-9-integrity-rules-and-constraints/
- Mitrovic e Ohlsson (2016): https://doi.org/10.1007/s40593-015-0049-9

## Simulação opcional de até 10 participantes

O painel inclui o botão **Simular até 10 usuários** / **Desativar simulação**. Em salas recém-preparadas, a simulação começa habilitada. Quando houver menos de 10 participantes reais, o site completa o exemplo do SQLite com nicknames fictícios claramente sinalizados **(simulado)**. Os personagens simulados **não são contas Firebase, não consomem vagas, não são presenças reais e não entram na contagem de alunos conectados**. Conforme alunos reais entram, os exemplos simulados são substituídos automaticamente. A professora pode desligar a simulação antes da apresentação, se desejar. Os `INSERTs` e resultados SQL exibem os exemplos simulados para fins didáticos.


### Ajuste de apresentação (17/11/2026)
- O objetivo da disciplina apresenta o `INSERT INTO TURMAS` no próprio bloco.
- A continuidade da aprendizagem apresenta três `INSERT INTO AULAS`, cada um após seu encontro.
- A seção recolhível “🎓 Fundamentação pedagógica da sequência didática” fica no rodapé da página, inclusive durante os desafios.
- Firebase, regras, simulação de 10 usuários e painel foram preservados.


### Ajuste do Desafio 2 (17/11/2026)
- Consulta inclui NICKNAME, NOME_COMPLETO, DATA_AULA e TEMA e filtra com `WHERE ... AND ... IN (...)`.
- A simulação garante os personagens SELECT, FROM, WHERE, AND, JOIN e IN, sem duplicar papéis de alunos reais.
- Se menos de 10 pessoas estiverem no banco de demonstração, completa até 10. Com 8–10 alunos reais, pode haver mais de 10 linhas didáticas para incluir JOIN e IN.
- Simulados não são presenças reais nem documentos adicionais do Firebase. Nenhuma mudança em `firestore.rules`.


### Participações históricas fictícias (17/11/2026)
- A partir do Desafio 2, o banco SQLite local inclui oito pessoas com nomes fictícios na turma Banco de Dados, em IDs 201–208.
- São criadas **6 participações simuladas em 06/08/2026** (AULA 101) e **7 em 22/10/2026** (AULA 102), com alguns nomes repetidos entre as datas para permitir comparações SQL.
- Os IDs de participações históricas começam em 1001, separadas das entradas atuais em 19/11 (AULA 103).
- A seção do Desafio 2 permite visualizar os INSERTs fictícios e uma consulta histórica usando `JOIN` e `IN`.
- **Não são registros reais de presença. Não são gravados no Firebase e não modificam as regras do Firestore.**

### Desafio 5 — Avaliar (versão revisada)
- Substituído “A IA errou o SQL!” por **“Qual consulta responde melhor?”**.
- O aluno executa duas consultas sobre presenças anteriores e decide qual exclui quem também participou em 19/11.
- Para as duas alternativas terem resultados distintos, foi inserida uma participação **fictícia** em 22/10 para o personagem SELECT, exclusivamente no SQLite, sem alterar o Firebase.
- Os controles “Executar consulta A/B no editor” executam SQL real e há feedback para a escolha.
- A simulação passa a garantir também LIKE para o Desafio 3, sem duplicar nicknames reais.
- Não houve mudança em regras nem coleções do Firebase.


## Apresentar pelo painel da professora (novo)

Abra `painel.html` e faça login com a conta autorizada. Clique em **Preparar sala** se necessário.
Os controles de etapa ficam acima de **Espelho da aula · visão dos alunos**.
O espelho carrega a mesma `index.html` em uma janela integrada e acompanha automaticamente
a etapa indicada no Firestore. Você pode usar o editor e executar SELECT no espelho.
O botão **Ampliar espelho** aumenta a área visual para projeção.
As listas de participantes e o roteiro de comandos ficam em seções recolhíveis.
A professora não recebe nickname ao abrir a página espelhada.
O espelho usa a mesma origem/site para compartilhar a sessão de autenticação Firebase.
Não altere as regras do Firestore para este recurso.

Arquivos alterados: `painel.html`, `painel.js`, `style.css`, `app.js`.
