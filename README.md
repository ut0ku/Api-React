Практика 7-8
Добавлены (реализованы) маршруты: /api/auth/register и /api/auth/login
POST (/api/auth/register)
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/cbf8aa5a-0c70-410d-8f40-cce91c8d2a87" />
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/027bc331-c728-44fd-b1ba-befd63a191b2" />


POST (/api/auth/login)
(с верным паролем)
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/0ad8f7d6-88da-4cb5-85e4-4061103bcefe" />
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/48d6b490-7d74-4303-984b-84cad1ea0075" />

(с неверным паролем)
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/43f5dc19-b33a-488c-8132-03e76f1f4236" />
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/910a63b6-aa36-40e7-a2ca-2453ee70d993" />

Реализована выдача токена при входе в систему, был добавлен защищенный маршрут - GET /api/auth/me, а также были защищены следующие маршруты:
GET /api/products/:id
PUT /api/products/:id
DELETE /api/products/:id

GET /api/auth/me
Без токена
<img width="960" height="504" alt="image_2026-03-03_15-04-01" src="https://github.com/user-attachments/assets/f1025365-cea0-4b29-8f69-071d094ab994" />

С токеном
<img width="960" height="504" alt="image_2026-03-03_15-11-16" src="https://github.com/user-attachments/assets/66817315-e556-41a6-8f00-b6f81b0c07ae" />

GET /api/products/:id
Без токена
<img width="960" height="504" alt="image_2026-03-03_15-21-32" src="https://github.com/user-attachments/assets/c6840e32-a10e-492b-82d4-3500353fad4d" />

С токеном
<img width="960" height="504" alt="image_2026-03-03_15-19-25" src="https://github.com/user-attachments/assets/f87a8ec6-ef61-42e0-b6c9-476e4b0dbe46" />

PUT /api/products/:id
Без токена
<img width="960" height="504" alt="image_2026-03-03_15-22-37" src="https://github.com/user-attachments/assets/0a8c5798-10d7-4416-96a0-1bf5cdd7715e" />

С токеном
<img width="960" height="504" alt="image_2026-03-03_15-23-13" src="https://github.com/user-attachments/assets/6b8dd9e0-3657-4883-8449-fa5621973829" />

DELETE /api/products/:id
Без токена
<img width="960" height="504" alt="image_2026-03-03_15-24-02" src="https://github.com/user-attachments/assets/f8b68efa-3b84-4d99-a9ce-21b67c3edaad" />

С токеном
<img width="960" height="504" alt="image_2026-03-03_15-25-04" src="https://github.com/user-attachments/assets/9580ced8-8796-4fe0-bc40-759226ac3404" />

Были подключены такие библиотеки как swagger-jsdoc и swagger-ui-express
Swagger-документация доступна по адресу /api-docs + работает в интерактивном режими с возможностью отправки тестовых запросов.
С помощью JSDoc-аннотаций была описана схема Product (товар) и ее CRUD-операции, такие как: (GET /api/products, POST /api/products, GET /api/products/{id}, PUT /api/products/{id}, DELETE /api/products/{id}, GET /api/categories)

3 практика находится в этом файле -> [Практическая работа 3](https://github.com/ut0ku/Api-React/blob/main/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%203.pdf)

<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/31562574-17da-4916-8a2f-e786ef3f38ef" />

Каждый запрос по отдельности

GET /api/products
<img width="1420" height="644" alt="image" src="https://github.com/user-attachments/assets/be6fbd5c-16fa-4262-8f2a-af82b938dc3c" />

POST /api/products
<img width="1422" height="884" alt="image" src="https://github.com/user-attachments/assets/cb3d8bd8-d369-41ae-bb46-13abfffc976d" />

GET /api/products/{id}
<img width="1418" height="757" alt="image" src="https://github.com/user-attachments/assets/81cac228-878b-49b6-820f-533d4b1b4c75" />

PUT /api/products/{id}
<img width="1068" height="756" alt="image" src="https://github.com/user-attachments/assets/1b14c2f0-8dba-4de5-be88-2cedf5e4c75f" />

DELETE /api/products/{id}
<img width="1420" height="490" alt="image" src="https://github.com/user-attachments/assets/f55c45bc-e508-4311-8fbc-bdcd4b392ec3" />

GET /api/categories
<img width="1423" height="585" alt="image" src="https://github.com/user-attachments/assets/4adbe9db-97cf-49e6-a29f-3d6a6ce2a8e7" />

Проверка возможности отправки тестовых запросов (POST /api/products)
<img width="1423" height="700" alt="image" src="https://github.com/user-attachments/assets/e88e9ace-a6b6-453e-b115-2940b18735af" />
<img width="1417" height="881" alt="image" src="https://github.com/user-attachments/assets/f21cd885-dfcd-40d8-9352-d63fe28e0645" />
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/3e5c006c-8607-47e2-8c21-b3ee11796651" />
<img width="1916" height="277" alt="image" src="https://github.com/user-attachments/assets/23934bf0-8442-408f-914c-64c98ed15430" />
















