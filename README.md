# Processo seletivo GCB - FMI

## Usage

Basta clonar o repositorio.

```sh
git clone git@github.com:cacobribeiro/medicine-signup.git
```

Logo após, utilizar o seguinte comando na raiz da pasta ``` /back-end ```:

```sh
npm install
```

Todas dependencias serão instaladas.

Então:

```sh
npm start
```

Isso irá iniciar o servidor back-end, criar todas as migrations e seeds.

---

### Front-end

Dentro da pasta `sh ./front-end ` contém os HTML feitos para melhorar a visualização.

---

### Back-end Rotas



- GET
Rota inicial traz todos os registros do banco de dados.

```sh
http://localhost:6124/
```
----

- POST
Rota para registrar um novo médico no banco de dados.

Dados a serem enviados:

```sh
{
"name": "Caio",
"CRM": "12.256.91",
"fixFone": "(11)5562-3284",
"fone": "(11)97651-2702",
"cep": "04651-165",
"andress": "Rua Osmar Fregona",
"numero": 71,
"especialidade": "CARDIOLOGIA INFANTIL",
"especialidade2": "CARDIOLOGIA CLÍNICA"
}
```

```sh
http://localhost:6124/register
```
----

- GET
Rota para trazer os cargos disponiveis de especialização.

```sh
http://localhost:6124/register
```

----

- PUT
Rota para atualizar os dados de um médico existente.

Dados a serem enviados devem ser iguais ao de registro.

```sh
{
"name": "Caio",
"CRM": "12.256.91",
"fixFone": "(11)5562-3284",
"fone": "(11)97651-2702",
"cep": "04651-165",
"andress": "Rua Osmar Fregona",
"numero": 71,
"especialidade": "CARDIOLOGIA INFANTIL",
"especialidade2": "CARDIOLOGIA CLÍNICA"
}
```

```sh
http://localhost:6124/update/1
```

---

- DELETE
Rota para deletar um médico do banco de dados.

```sh
http://localhost:6124/delete/1
```