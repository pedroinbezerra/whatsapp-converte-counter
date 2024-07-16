# Contador de cliques

O intuito desse projeto obter a quantidade de cliques que foram realizados em um determinado elemento e armazenar para posterior consulta.
Também existe a funcionalidade adicional de inserir e obter informações de alteração das versões do projeto (Changelog).


Esse projeto integra-se com o [whatsapp-converte](https://github.com/pedroinbezerra/whatsapp-converte).

Para rodar o projeto localmente siga os seguintes passos:

```bash
$ npm install
```
> [!IMPORTANT] 
> Configure o arquivo .env de acordo com o arquivo de exemplo .env.example

## Executando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testando

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Headers
```
  {
    ApiKey: API_KEY_HERE
    Origin: WHITELIST
  }
```

## Endpoints

- Health check (GET):
```http://localhost:3036/health```

- Add counter (GET):
```http://localhost:3036/click/add```

- Get total (GET):
```http://localhost:3036/clicks```

- New changelog (POST):
```http://localhost:3036/changelog```

Body:

```json
{
	"version":"1.0.0",
	"changes": [
		"Lorem",
		"Ipsum"
	]
}
```

- Latest changelog (GET):
```http://localhost:3036/latest```

