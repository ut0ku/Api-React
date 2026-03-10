Практика 9-10
Была реализована генерация refresh токенов и добавлен маршрут - Post /api/auth/refresh
Регистрация
<img width="954" height="441" alt="image_2026-03-10_15-17-17" src="https://github.com/user-attachments/assets/6eb1c795-c37a-4944-9663-2d05c460a6e8" />
<img width="954" height="441" alt="image_2026-03-10_15-17-32" src="https://github.com/user-attachments/assets/fbe03aa9-5c23-4a5e-b81e-a9f6dd9dadb4" />

Вход и получение токенов
<img width="954" height="441" alt="image_2026-03-10_15-18-09" src="https://github.com/user-attachments/assets/39989a3b-902d-423e-9286-d9982b750c7b" />
<img width="954" height="441" alt="image_2026-03-10_15-18-23" src="https://github.com/user-attachments/assets/334a1d70-4c1b-4c7e-a83f-b333c062033f" />

Refresh токенов
Токены до обновления - (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0bWFpbEBnbWFpbC5jb20iLCJpYXQiOjE3NzMxNDUwNzUsImV4cCI6MTc3Mzc0OTg3NX0.CaUaskDr0NjI6WEkFfJSOvMOO1u9kI_cVikcYy5u32k)
<img width="954" height="441" alt="image_2026-03-10_15-19-08" src="https://github.com/user-attachments/assets/16bd764c-53b6-489c-915d-33b4ec4023c1" />

Токены после обновления - (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0bWFpbEBnbWFpbC5jb20iLCJpYXQiOjE3NzMxNDUxNTksImV4cCI6MTc3Mzc0OTk1OX0.wsfbFY2R8Nzdpzzv0ItqobBKIqWVhazrENx6Vkc4jf4)
<img width="954" height="441" alt="image_2026-03-10_15-20-25" src="https://github.com/user-attachments/assets/99f50019-c533-428c-a0d7-f59aed5afeb4" />
<img width="954" height="441" alt="image_2026-03-10_15-20-42" src="https://github.com/user-attachments/assets/63fd73c0-dd7b-478a-a107-423703a51bed" />

Также было реализовано хранение токенов в localstorage через встроенную в библиотеку axios утилиту: interceptors
<img width="954" height="441" alt="image_2026-03-10_16-06-21" src="https://github.com/user-attachments/assets/9c226c52-8857-43a5-b4a4-329cac9fda3b" />

Были реализованы страницы входа и регистрации (с валидацией)
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/7bdc470a-dd7a-43d4-b4e3-36d53ad85abc" />
<img width="1908" height="882" alt="image" src="https://github.com/user-attachments/assets/081b62d4-e0f9-4135-874a-488ff73b1df6" />

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
















