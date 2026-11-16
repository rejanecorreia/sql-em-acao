// Configuração pública do projeto Firebase já usado na primeira avaliação.
// ATENÇÃO: proteja o acesso às coleções com firestore.rules.
export const firebaseConfig={apiKey:"AIzaSyBjH-rr1UPZGqPZkc7SbiWtGWwbdHsd6gY",authDomain:"aula-modelo-relacional.firebaseapp.com",projectId:"aula-modelo-relacional",storageBucket:"aula-modelo-relacional.firebasestorage.app",messagingSenderId:"415050196421",appId:"1:415050196421:web:986a11fff095003a2697ac"};
export const TEACHER_UID='b38lX9n8wkgYeQZJQavl2ENei6V2';
export const ROOM_ID='sala-2026-11-19';
export const ROLES=[
['🔎','SELECT','Eu escolho as colunas que aparecem no resultado da consulta.'],
['📂','FROM','Eu indico de qual tabela os dados serão consultados.'],
['🎯','WHERE','Eu filtro os registros usando condições.'],
['✨','DISTINCT','Eu elimino linhas duplicadas do resultado.'],
['📊','ORDER BY','Eu organizo os resultados em uma ordem definida.'],
['⬇️','DESC','Eu organizo valores em ordem decrescente.'],
['➕','AND','Eu exijo que duas condições sejam verdadeiras.'],
['🔀','OR','Eu aceito quando pelo menos uma condição é verdadeira.'],
['🚫','NOT','Eu nego uma condição lógica.'],
['🔍','LIKE','Eu procuro textos que seguem determinado padrão.'],
['📋','IN','Eu verifico se um valor está em uma lista.'],
['📏','BETWEEN','Eu verifico se um valor está dentro de um intervalo.'],
['⭕','IS NULL','Eu encontro campos que não possuem valor.'],
['🔗','JOIN','Eu combino informações de tabelas relacionadas.'],
['🧩','ON','Eu defino a condição utilizada para conectar tabelas.'],
['↔️','LEFT JOIN','Eu mantenho todos os registros da tabela à esquerda, mesmo sem correspondência.'],
['🗂️','GROUP BY','Eu agrupo registros com valores em comum.'],
['⚖️','HAVING','Eu filtro grupos depois do agrupamento.'],
['🔢','COUNT','Eu conto linhas ou valores.'],
['➕','SUM','Eu somo valores de uma coluna.'],
['📐','AVG','Eu calculo a média dos valores.'],
['📉','MIN','Eu encontro o menor valor.'],
['📈','MAX','Eu encontro o maior valor.'],
['🏷️','AS','Eu atribuo um apelido a uma coluna ou tabela.'],
['🛑','LIMIT','Eu limito a quantidade de linhas retornadas.'],
['➕','INSERT INTO','Eu indico onde novos registros serão inseridos.'],
['📝','VALUES','Eu informo os valores que serão inseridos.'],
['✏️','UPDATE','Eu indico qual tabela terá registros atualizados.'],
['⚙️','SET','Eu defino os novos valores na atualização.'],
['🗑️','DELETE','Eu removo registros de uma tabela.'],
['🏗️','CREATE TABLE','Eu crio a estrutura de uma tabela.'],
['🔑','PRIMARY KEY','Eu identifico cada registro de maneira única.'],
['🔗','FOREIGN KEY','Eu estabeleço referências entre tabelas.']
];
export const AULAS=[[101,1,'2026-08-06','Entidades e tabelas'],[102,1,'2026-10-22','Chaves primárias e relacionamentos'],[103,1,'2026-11-19','Consultas SQL']];
export const TURMAS=[[1,'Banco de Dados','Compreender como organizar, modelar e manipular dados'],[2,'Conceitos de Inteligência Artificial','Introdução à IA'],[3,'Redes de Computadores','Comunicação entre sistemas'],[4,'Contratos Inteligentes','Aplicações de smart contracts']];
export const ROOM_PATH=['sqlEmAcao','sala-2026-11-19'];
export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const sqlString=v=>"'"+String(v??'').replace(/'/g,"''")+"'";
