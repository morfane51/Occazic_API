# API Occazic 

Endpoint | HTTP Method |  JSON Body  | Description
-------- | ----------- | ----------- | -----------
`/user/signup` | `POST` | `<pseudo>`; `<password>` | Create new user.
`/user/login` | `POST` | `<pseudo>`; `<password>` | Login in API.
`/user/:id` | `GET` |  | Found one user with id.
`/user` | `GET` |  | Found all user.
`/category` | `POST` | `<name>`; `<function>` | Create category.
`/category/:id` | `PUT` |  | Modify category with id.
`/category/:id` | `GET` |  | Found one category with id.
`/category` | `GET` |  | Found all category.
`/category/:id` | `DELETE` |  | Delete one category with id.
`/category` | `DELETE` |  | Delete all category.
`/calcul` | `POST` | `<catID>` | Calcul function.
`/calcul/:id` | `GET` |  | Found one calcul with id.
`/calcul` | `GET` |  | Found all calcul.
`/calcul/:id` | `DELETE` |  | Delete one calcul with id.
`/calcul` | `DELETE` |  | Delete all calcul.
`/val_func` | `POST` | `<name>`; `<val_func>`; `<catID>` | Create new valeur function for category 
`/val_func/:id` | `PUT` |  | Modify one valeur function.
`/val_func/:id` | `GET` |  | Found on valeur function with id.
`/val_func` | `GET` |  | Found all valeur function.
`/val_func/:id` | `DELETE` |  | Delete one valeur function.
`/val_func` | `DELETE` | Delete all valeur function.


