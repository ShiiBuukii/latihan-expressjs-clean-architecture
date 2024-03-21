# latihan


## Table of Contents

- [About](#about)
- [Folder Structure](#folder_structure)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [API User](#api_user)
- [API Product](#api_product)

## About <a name = "about"></a>

expressjs rest api with clean architecture

### Folder structure <a name="folder_structure"></a>
```
.
├── index.ts
├── package.json
├── README.md
├── requests.http
└── src
    ├── configs
    │   └── data-source.ts
    ├── core
    │   ├── errors
    │   │   ├── authError.ts
    │   │   ├── middlewareError.ts
    │   │   └── productError.ts
    │   └── middlewares
    │       └── productMiddleware.ts
    ├── features
    │   ├── authentication
    │   │   ├── controllers
    │   │   │   └── authController.ts
    │   │   ├── domains
    │   │   │   └── userDomain.ts
    │   │   ├── entities
    │   │   │   └── userEntity.ts
    │   │   ├── interactors
    │   │   │   └── authInteractor.ts
    │   │   ├── interfaces
    │   │   │   ├── authInteractorInterface.ts
    │   │   │   └── authRepositoryInterface.ts
    │   │   ├── repositories
    │   │   │   └── authRepository.ts
    │   │   └── routes
    │   │       └── authRoute.ts
    │   └── product
    │       ├── controllers
    │       │   └── productController.ts
    │       ├── entities
    │       │   └── productEntity.ts
    │       ├── interactors
    │       │   └── productInteractor.ts
    │       ├── interfaces
    │       │   ├── IProductInterface.ts
    │       │   └── IProductRepositoryInterface.ts
    │       ├── repositories
    │       │   └── productRepository.ts
    │       └── routes
    │           └── productRoute.ts
    └── utils
        └── jwt.ts
```


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
| endpoint | method | parameter | body |
| ----- | ----- | ----- | ----- |
| /login | POST | ```null``` | ```email```,```password``` | 
| /register | POST | ```null``` | ```firstName```, ```lastName```,```email```,```password``` |
| ----- | ----- | ----- |

### API PRODUCT <a name="api_product"></a>

| endpoint | method | parameter | body | authentication |
| ----- | ----- | ----- | ----- | ----- |
| /products | GET | ```null``` | ```null``` | ```requried``` |
| /products/:id | GET | ```id``` | ```null``` | ```required``` |
| /create | POST | ```null``` | ```name```, ```price```, ```stock``` | ```required``` |
| /products/:id | PATCH | ```id``` | ```null``` | ```required``` |