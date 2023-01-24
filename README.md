<h1 style="color:color: #f2f200">iPlanne api</h1>

<p>
Essa api tem por objetivo proporcionar o gerenciamento do cotidiano e rotinas do usuário.
</p>

<h4>features Presentes:</h4>
<ul>
<li>Alarms</li>
<li>finanças</li>
<li>tasks / tasks lists</li>
<li>funções de adm</li>
</ul>

<h2>Rotas sem autenticação</h2>

<h3>create user</h3>
<p>rota utilizada para criação de usuário</p>

<b>parâmetros para requisição</b>

<p>método: POST</p>
<p>caminho: *baseUrl*/users</p>
<p>corpo JSON<p>
<pre>
{
"name": string, até 100 caracteres, não nulo,
"email": string, deve ter formato de e-mail, até 60 caracteres, não nulo,
"birthDate": string, formato: 'mm/dd/aaaa', não nulo,
"password": string, até 60 caracteres, não nulo,
"profileImg" : string, deve ser um link direto para uma imagem, pode ser nulo
}
</pre>

<b>formato da resposta:</b>

<p>status: 201</p>
<pre>
{
    "id": string, formato uuid,
    "name": string,
    "email": string, formato e-mail,
    "birthDate": string no formato Date,
    "profileImg" : string,
    "createdAt": string no formato Date,
    "updatedAt": string no formato Date
}
</pre>

</br>

<h3>login</h3>
<p>rota utilizada para login de usuário</p>

<b>parâmetros para requisição</b>

<p>método: POST</p>
<p>caminho: *baseUrl*/login</p>
<p>corpo JSON<p>
<pre>
{
	"email": string, deve ter formato de e-mail, até 60 caracteres, não nulo,,
	"password": string, até 60 caracteres, não nulo,
}
</pre>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
{
    "token": string no formato token
}
</pre>

</br>

<h2>Rotas com autenticação sem necessidade de ADM</h2>
<p>A autenticação é feita no formato <i>Bearer token</i></p>

<h3>atualização dos dados de usuário</h3>
<p>- rota utilizada para atualizar os dados de um usuário.</p>
<p>- um usuário so pode alterar os próprios dados. </p>
<p>- um administrador poder alterar os dados de qualquer usuário </p>
<p>- pode ser alterados quantos campos se desejar desde que sejam validos.</p>

<b>parâmetros para requisição</b>

<p>método: POST</p>
<p>caminho: *baseUrl*/users/:userId</p>
<p>possíveis parâmetros para o corpo JSON<p>
<pre>
{
"name": string, até 100 caracteres, não nulo,
"email": string, deve ter formato de e-mail, até 60 caracteres, não nulo,
"birthDate": string, formato: 'mm/dd/aaaa', não nulo,
"password": string, até 60 caracteres, não nulo ,
"profileImg" : string, deve ser um link direto para uma imagem, pode ser nulo
}
</pre>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
{
	"updatedAt": string no formato Date,
	"createdAt": string no formato Date,
	"profileImg": string,
	"birthDate": string no formato Date,
	"name": string,
	"email": string no formato e-mail,
	"id": string no formato uuid
}
</pre>

<h3>deleção de usuário</h3>
<p>rota utilizada para excluir um usuário junto com todos os seus dados.</p>

<p>- um usuário só pode alterar os itens que estejam atribuídos a sí mesmo.</p>
<p>- administrador pode alterar qualquer item.</p>

<b>parâmetros para requisição</b>

<p>método: DELETE</p>
<p>caminho: *baseUrl*/users/:userId</p>
<p>corpo JSON<p>
<p>NÃO POSSUI</p>

<b>formato da resposta:</b>

<p>status: 204</p>
<P>NÃO POSSUI CORPO DE RESPOSTA</P>

</br>

<h3>Create Alarme</h3>
<p>rota utilizada para criar um alarme.</p>

<b>parâmetros para requisição</b>

<p>método: POST</p>
<p>caminho: *baseUrl*/alarms</p>
<p>corpo JSON<p>
<pre>
{
	"title": string, até 20 caracteres,
	"time": string no formato "hh:mm", range de 24hrs,
}
</pre>

<b>formato da resposta:</b>

<p>status: 201</p>
<pre>
{
	"weekdays": array de números sendo 0 para domingo 6 para sábado, inicialmente vazio,
	"title": string,
	"time": string no formato "hh:mm", range de 24hrs,
	"isActive": boolean, default true,
	"id": string no formato uuid
}
</pre>

</br>

<h3>Editar Alarme</h3>
<p>rota utilizada para editar os dados de um alarme</p>

<p>- é possível editar quantos campos se desejar desde que sejam validos.</p>
<p>- um usuário só pode alterar os alarmes que estejam atribuídos a sí mesmo.</p>
<p>- administrador pode alterar qualquer alarme.</p>

<b>parâmetros para requisição</b>

<p>método: PATCH</p>
<p>caminho: *baseUrl*/alarms/:alarmId</p>
<p>corpo JSON<p>
<pre>
{
	"weekdays": deve ser array de números sendo 0 para domingo 6 para sábado,
	"title": string máximo de 20 caracteres,
	"time": deve ser uma string no formato "hh:mm", range de 24hrs,
	"isActive": boolean
}
</pre>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
{
	"weekdays": array de números sendo 0 para domingo 6 para sábado, inicialmente vazio,
	"title": string,
	"time": string no formato "hh:mm", range de 24hrs,
	"isActive": boolean, default true,
	"id": string no formato uuid
}
</pre>

</br>

<h3>Delete Alarme</h3>
<p>rota utilizada para deletar um alarme</p>

<p>- um usuário só pode alterar os itens que estejam atribuídos a sí mesmo.</p>
<p>- administrador pode alterar qualquer item.</p>

<b>parâmetros para requisição</b>

<p>método: DELETE</p>
<p>caminho: *baseUrl*/alarms/:alarmeId</p>
<p>corpo JSON</p>
<p>NÃO POSSUI CORPO</p>

<b>formato da resposta:</b>

<p>status: 204</p>
<p>NÃO POSSUI CORPO DE RESPOSTA</p>

</br>

<h3>Criar item de finança</h3>
<p>rota utilizada para criar um item que marca uma transição monetária e seus detalhes</p>

<b>parâmetros para requisição</b>

<p>método: POST</p>
<p>caminho: *baseUrl*/finance</p>
<p>corpo JSON</p>
<pre>
{
	"title": deve ser uma string de até 60 caracteres,
	"isExpense": boolean,
	"value": numérico de ponto flutuante com 12 casas e dois números de precisão,
	"dueDate": string, formato: 'mm/dd/aaaa'
}
</pre>

<b>formato da resposta:</b>

<p>status: 201</p>
<pre>
{
	"id": string no formato uuid,
	"isExpense": boolean,
	"isAccomplished": boolean,
	"dueDate": string no formato Date,
	"value": numérico de ponto flutuante com duas casa de precisão,
	"title": string
}
</pre>

</br>

<h3>Editar item de finança</h3>
<p>rota utilizada para editar um item de finança</p>

<p>- é possível editar quantos campos se desejar desde que sejam validos.</p>
<p>- um usuário só pode alterar os itens que estejam atribuídos a sí mesmo.</p>
<p>- administrador pode alterar qualquer item.</p>

<b>parâmetros para requisição</b>

<p>método: PATCH</p>
<p>caminho: *baseUrl*/finance/finance:id</p>
<p>corpo JSON<p>
<pre>
{
	"id": string no formato uuid de até 60 caracteres,
	"isExpense": boolean,
	"isAccomplished": boolean,
	"dueDate": string, formato: 'mm/dd/aaaa',
	"value": numérico com 12 casa decimais de ponto flutuante com duas casa de precisão,
	"title": string de até 60 caracteres
}
</pre>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
{
	"id": string no formato uuid,
	"isExpense": boolean,
	"isAccomplished": boolean,
	"dueDate": string no formato Date,
	"value": numérico de ponto flutuante com duas casa de precisão,
	"title": string
}
</pre>

</br>

<h3>Deletar item de finança</h3>
<p>rota utilizada para deletar um item de finança</p>

<p>- um usuário só pode deletar os itens que estejam atribuídos a sí mesmo.</p>
<p>- administrador pode deletar qualquer item.</p>

<b>parâmetros para requisição</b>

<p>método: DELETE</p>
<p>caminho: *baseUrl*/alarms/:alarmeId</p>
<p>corpo JSON</p>
<p>NÃO POSSUI CORPO</p>

<b>formato da resposta:</b>

<p>status: 204</p>
<p>NÃO POSSUI CORPO DE RESPOSTA</p>

</br>
</br>

<h2>Rotas com autenticação e cargo de ADM necessário </h2>

<h3>Listar todos os usuários</h3>
<p>Essa rota ira retorna uma lista com todos os usuários da aplicação</p>

<b>parâmetros para requisição</b>

<p>método: GET</p>
<p>caminho: *baseUrl*/users</p>
<p>corpo JSON</p>
<p>NÃO POSSUI CORPO</p>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
[
	{
		"deletedAt": null,
		"updatedAt": string no formato Date,
		"createdAt": string no formato Date,
		"profileImg": string ou null,
		"birthDate": string no formato Date,
		"isActive": boolean,
		"isAdm": boolean,
		"name": string,
		"email": string no formato e-mail,
		"id": string no formato uuid
	},
]
(retorna um array de objetos com os dados de cada usuário)
</pre>

</br>

<h3>Listar um usuário em especifico</h3>
<p>Essa rota ira retorna os dados de usuário em especifico</p>

<b>parâmetro para requisição</b>

<p>método: GET</p>
<p>caminho: *baseUrl*/users/:id</p>
<p>corpo JSON</p>
<p>NÃO POSSUI CORPO</p>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
{
	"deletedAt": null,
	"updatedAt": string no formato Date,
	"createdAt": string no formato Date,
	"profileImg": string ou null,
	"birthDate": string no formato Date,
	"isActive": boolean,
	"isAdm": boolean,
	"name": string,
	"email": string no formato e-mail,
	"id": string no formato uuid
},

</pre>

</br>

<h3>Listar todos os alarmes</h3>
<p>Essa rota ira retorna uma lista com todos os alarmes da aplicação</p>

<b>parâmetros para requisição</b>

<p>método: GET</p>
<p>caminho: *baseUrl*/alarms</p>
<p>corpo JSON</p>
<p>NÃO POSSUI CORPO</p>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
[
	{
		"id": string no formato uuid,
		"title": string,
		"isActive": boolean,
		"time": string no formato "hh:mm:ss",
		"weekdays": array de números sendo 0 para domingo e 6 para sábado
	},
]
</pre>

</br>

<h3>Requisitar dados de um alarme</h3>
<p>Essa rota ira retornar os dados do alarme solicitado</p>

<b>parâmetros para requisição</b>

<p>método: GET</p>
<p>caminho: *baseUrl*/alarms/:alarmeId</p>
<p>corpo JSON</p>
<p>NÃO POSSUI CORPO</p>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
{
	"id": string no formato uuid,
	"title": string,
	"isActive": boolean,
	"time": string no formato "hh:mm:ss",
	"weekdays": array de números sendo 0 para domingo e 6 para sábado
},

</pre>

</br>

<h3>Listar todos os itens de finanças da aplicação</h3>
<p>Essa rota ira retornar um array com os dados de todos os itens de finança</p>

<b>parâmetros para requisição</b>

<p>método: GET</p>
<p>caminho: *baseUrl*/finance</p>
<p>corpo JSON</p>
<p>NÃO POSSUI CORPO</p>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>
[
	{
		"id": string no formato uuid,
		"isExpense": boolean,
		"isAccomplished": boolean,
		"dueDate": string no formato Date,
		"value": number de ponto flutuante com 12 casa decimais e 2 casa de precisão,
		"title": string
	},
]
</pre>

</br>

<h3>Listar um item de finança</h3>
<p>Essa rota ira retornar os dados de um item de finança/p>

<b>parâmetros para requisição</b>

<p>método: GET</p>
<p>caminho: *baseUrl*/finance/:financeId</p>
<p>corpo JSON</p>
<p>NÃO POSSUI CORPO</p>

<b>formato da resposta:</b>

<p>status: 200</p>
<pre>

{
"id": string no formato uuid,
"isExpense": boolean,
"isAccomplished": boolean,
"dueDate": string no formato Date,
"value": number de ponto flutuante com 12 casa decimais e 2 casa de precisão,
"title": string
},

</pre>

</br>
