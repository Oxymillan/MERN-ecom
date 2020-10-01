## Full Stack ecom app
> Backend: node, express, dotenv, bcryptjs, jsonwebtoken
> Frontend: react, redux, js-cookie
> DB: NoSQL, mongoDB

### Usage
DEV mode
> Run Backend 
```
# cd /amazona
# npm install
# npm start
```
> Run Frontend 
```
# cd /frontend
# npm install
# npm start
```
### Features
Admin console, User login, User sign up, token to authenticate users, cookie throught user shopping cart, add qty of products, db query, 

// To be done:
change db to AWS, add paypal, add stripe, add rating system, 
### Routes
```
GET         /                            -> query products /api/products
POST        /                            -> only admin (!! multer, need fix)
GET         /:id                         -> only admin PUT /api/products
GET         /:id/reviews                 ->
GET         /api/uploads                 -> only admin (for now)
GET         /api/users                   -> only 
GET         /api/users/:id               -> user authentication
POST        /api/users/register          -> user authentication
POST        /api/users/signin            -> user autorization
GET         /api/users/createadmin       ->
GET         /api/products                ->
GET         /api/products/:id            ->
POST        /api/products/:id/reviews    -> anyone as logged in
PUT         /api/products/:id            -> only admin
DELETE      /api/products/:id            -> only admin
GET         /api/orders                  -> user authentication
GET         /api/orders/mine             -> user id confirmation
GET         /api/orders/:id              -> user authentication
DELETE      /api/orders/:id              -> only admin
POST        /                            -> user authentication returns payload
PUT         /api/orders/:id/pay          -> user authentication
GET         /api/config/paypal           -> !! not yet
```

### Bugs to fix!!
total price after order, max 2 decimals