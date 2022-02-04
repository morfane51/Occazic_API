# API Occazic 
### Classic Installation :


Copy repository and use `npm install` then `npm start`.

### Docker Installation :

Copy repository and use Dockerfile.

#### Docker Compose :

This docker compose gather Occazic API, Occazic Admin, Occazic Front and MongoDB. 





| Endpoint                                  | HTTP Method | JSON Body                                                                 | Description                                                       |
|-------------------------------------------|-------------|---------------------------------------------------------------------------|-------------------------------------------------------------------|
| `/user/signup`                            | `POST`      | `<username>`; `<password>`                                                | Create new user.                                                  |
| `/user/login`                             | `POST`      | `<username>`; `<password>`                                                | Login in API.                                                     |
| `/user/:id`                               | `GET`       |                                                                           | Found one user with id.                                           |
| `/user`                                   | `GET`       |                                                                           | Found all user.                                                   |
| `/user/:id`                               | `DELETE`    |                                                                           | Delete one user with id.                                          |
| `/user`                                   | `DELETE`    |                                                                           | Delete all user.                                                  |
| ---------------------------               |             |                                                                           |                                                                   |
| `/category`                               | `POST`      | `<name>`; `<function>`; `<marge>`; `<image>`; `<sub_category>`            | Create category.                                                  |
| `/category/:id`                           | `PUT`       | `<name>`; `<function>`; `<marge>`; `<image>`; `<sub_category>`            | Modify category with id.                                          |
| `/category/:id`                           | `GET`       |                                                                           | Found one category with id.                                       |
| `/category`                               | `GET`       |                                                                           | Found all category.                                               |
| `/category/root_category/:root_cat`       | `GET`       |                                                                           | Found all category with root category id.                         |
| `/category/:id`                           | `DELETE`    |                                                                           | Delete one category with id.                                      |
| `/category`                               | `DELETE`    |                                                                           | Delete all category.                                              |
| ---------------------------               |             |                                                                           |                                                                   |
| `/sub-category`                           | `POST`      | `<name>`; `<image>`                                                       | Create sub-category.                                              |
| `/sub-category/:id`                       | `PUT`       | `<name>`; `<image>`                                                       | Modify sub-category with id.                                      |
| `/sub-category/:id`                       | `GET`       |                                                                           | Found one sub-category with id.                                   |
| `/sub-category`                           | `GET`       |                                                                           | Found all sub-category.                                           |
| `/sub-category/:id`                       | `DELETE`    |                                                                           | Delete one sub-category with id.                                  |
| `/sub-category`                           | `DELETE`    |                                                                           | Delete all sub-category.                                          |
| ---------------------------               |             |                                                                           |
| `/calcul`                                 | `POST`      | `<price_estimID>`                                                         | Calculate function.                                               |
| `/calcul/:id`                             | `GET`       |                                                                           | Found one calcul with id.                                         |
| `/calcul`                                 | `GET`       |                                                                           | Found all calcul.                                                 |
| `/calcul/:id`                             | `DELETE`    |                                                                           | Delete one calcul with id.                                        |
| `/calcul`                                 | `DELETE`    |                                                                           | Delete all calcul.                                                |
| --------------------------                |             |                                                                           |                                                                   |
| `/val_func`                               | `POST`      | `<name>`; `<array>`; `<catID>`                                            | Create new value function for category. `<array>` is boolean      |
| `/val_func/:id`                           | `PUT`       | `<name>`; `<array>`                                                       | Modify one value function.                                        |
| `/val_func/:id`                           | `GET`       |                                                                           | Found on value function with id.                                  |
| `/val_func`                               | `GET`       |                                                                           | Found all value function.                                         |
| `/val_func/category/:cat_id`              | `GET`       |                                                                           | Found all value function with category Id.                        |
| `/val_func/:id`                           | `DELETE`    |                                                                           | Delete one value function.                                        |
| `/val_func/category/:cat_id`              | `DELETE`    |                                                                           | Delete all value function with category Id.                       |
| `/val_func`                               | `DELETE`    |                                                                           | Delete all value function.                                        |
| --------------------------                |             |                                                                           |                                                                   |
| `/array_val`                              | `POST`      | `<name>`; `<value>`; `<val_func_id>`                                      | Create array value function.                                      |
| `/array_val/:id`                          | `PUT`       | `<name>`; `<value>`; `<val_func_id>`                                      | Modify array value function.                                      |
| `/array_val/:id`                          | `GET`       |                                                                           | Found one array value function with id.                           |
| `/array_val/val_func/:val_func_id`        | `GET`       |                                                                           | Found all array value function with val func id.                  |
| `/array_val`                              | `GET`       |                                                                           | Found all array value function.                                   |
| `/array_val/:id`                          | `DELETE`    |                                                                           | Delete one array value function with id.                          |
| `/array_val/val_func/:val_func_id`        | `DELETE`    |                                                                           | Delete all array value function with val func id.                 |
| `/array_val`                              | `DELETE`    |                                                                           | Delete all array value function.                                  |
| --------------------------                |             |                                                                           |                                                                   |
| `/input_func`                             | `POST`      | `<value>`; `<price_estimate_id>`; `<val_func_id>`                         | Create input value for price estimate.                            |
| `/input_func/:id`                         | `PUT`       | `<value>`; `<price_estimate_id>`; `<val_func_id>`                         | Modify input value for price estimate.                            |
| `/input_func/:id`                         | `GET`       |                                                                           | Found one input value for price estimate with id.                 |
| `/input_func`                             | `GET`       |                                                                           | Found all input value for price estimate.                         |
| `/input_func/:id`                         | `DELETE`    |                                                                           | Delete one input value for price estimate with id.                |
| `/input_func/price_estim/:price_estim_id` | `DELETE`    |                                                                           | Delete one input value for price estimate with price estimate id. |
| `/input_func`                             | `DELETE`    |                                                                           | Delete all input value for price estimate.                        |
| -------------------------                 |             |                                                                           |                                                                   |
| `/price_estim`                            | `POST`      | `<name>`; `<surname>`; `<mail>`; `<product_category_id>`; `<product_ref>` | Create price estimate.                                            |
| `/price_estim/:id`                        | `PUT`       | `<name>`; `<surname>`; `<mail>`; `<product_category_id>`; `<product_ref>` | Modify price estimate.                                            |
| `/price_estim`                            | `GET`       |                                                                           | Found all price estimate.                                         |
| `/price_estim/:id`                        | `GET`       |                                                                           | Found one price estimate with id.                                 |
| `/price_estim/:id`                        | `DELETE`    |                                                                           | Delete one price estimate with id.                                |
| `/price_estim`                            | `DELETE`    |                                                                           | Delete all price estimate.                                        |
| -------------------------                 |             |                                                                           |                                                                   |

Format for the function is : {`var`}`mathematical symbol`{`other var`} etc.... EX: {prix}/{date}+{couleur}.     
Format for the name: `the name is displayed directly to the user`.
