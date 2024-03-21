# latihan


## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [API User](#api_user)
- [API Product](#api_product)

## About <a name = "about"></a>

expressjs rest api with clean architecture


### Prerequisites <a name = "prerequisites"></a>

Have latest nodejs installed

```
npm install
```

### Usage <a name = "usage"></a>

```
npm run app
```

### API USER <a name="api_user"></a>
| endpoint | method | parameter | body | authentication |
| ----- | ----- | ----- | ----- | ----- |
| /login | POST | ```null``` | ```email```,```password``` | ```not required``` |
| /register | POST | ```null``` | ```firstName```, ```lastName```,```email```,```password``` | ```not required``` |

### API PRODUCT <a name="api_product"></a>

| endpoint | method | parameter | body | authentication |
| ----- | ----- | ----- | ----- | ----- |
| /products | GET | ```null``` | ```null``` | ```requried``` |
| /products/:id | GET | ```id``` | ```null``` | ```required``` |
| /create | POST | ```null``` | ```name```, ```price```, ```stock``` | ```required``` |
| /products/:id | PATCH | ```id``` | ```null``` | ```required``` |