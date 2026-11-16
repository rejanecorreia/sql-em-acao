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
