# Laravel API Snippets

![Laravel API Snippets](./img/logo.png)

## Become more efficient to create APIs with Laravel!

## Menu

* [Api Snippets](#api-snippets)

* [Laravel API JWT](#laravel-api-jwt)
    
    * [Installing JWT](#installing-jwt)
    
    * [Configuring Database](#configuring-database)
    
    * [Testing JWT](#testing-jwt)

    * [JWT Snippets](#jwt-snippets)

* [Laravel API Documentation Generator](#laravel-api-documentation-generator)

    * [Installing Documentation Library](#installing-documentation-library)

    * [API Docs Snippets](#api-docs-snippets)





## Api Snippets

[↑ Menu](#menu)

COMMAND                             | ACTION
------------------------------------|-------------------------------------------
<kbd>api_response</kbd>             |  `Insert json response`





## Laravel API JWT

### Installing JWT

[↑ Menu](#menu)

#### Read library documentation [https://jwt-auth.readthedocs.io/](https://jwt-auth.readthedocs.io/)

1. Install the library - $[prompt]

    ```composer require tymon/jwt-auth```


2. Add the provider in the file [/config/app.php]

    ```php
    ...
    'providers' => [
        ...
        jwt_provider
        ...
    ],
    ```

3. Publish the provider. A file will be created [/config/jwt.php] - $[prompt]

    `php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"`

4. In the [.env] will be generate a secret key of JWT - $[prompt:]

    ```php artisan jwt:secret```

5. Add the Middleware [/App/Http/Kernel.php]

    ```php
    ...
    protected $routeMiddleware = [
        ...
        jwt_middleware
    ];
    ```

6. Add the Routes [routes/api.php]

    ```php
    ...
    jwt_routes
    ```

7. Updating User Model [App/User.php] implements JWTSubject

    ```php
    ...
    jwt_use_subject

    class User extends Authenticatable jwt_user_implements
    {
        ...

        jwt_user_methods
    }
    ```

8. Creating Registration Form Request - $[prompt]

    ```php artisan make:request RegistrationFormRequest```

9. Creating Validations Rules [/App/Http/Requests/RegistrationFormRequest.php]

    ```php
    ...
    public function authorize()
    {
        return true;
    }
    ...
    public function rules()
    {
        return [
            jwt_register_rule
        ];
    }
    ```

10. Creating API Controller for Login and Registration - $[prompt]

    ```php artisan make:controller APIController```

11. Creating methods in API Controller [app/Http/Controllers/APIController.php]

    ```php
    use Illuminate\Http\Request;
    jwt_use_api_controller

    class APIController extends Controller
    {
        jwt_register_method
        jwt_login_method
        jwt_logout_method
        jwt_me_method
    }
    ```





### Configuring Database

[↑ Menu](#menu)

#### Configure SQLite database [optional] or configure any other

1. In the file [.env] remove below rows

    ```
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=root
    DB_PASSWORD=    
    ```

2. Change the database

    ```
    DB_CONNECTION=sqlite
    ```

3. Create a empty file - $[prompt]

    `touch database/database.sqlite`

4. Migrate the tables

    `php artisan migrate`





### Testing JWT    

[↑ Menu](#menu)


1. Run the Server - $[prompt]

    `php artisan serve`

2. With your Client Rest.

    `HTTP POST`

    `Request Body`

    ```json
    {
        "name": "sr smith",
        "email": "smith@email.com",
        "password": "secret"
    }
    ```

    `Response`

    ```json
    {
        "success": true,
        "data": {
            "name": "sr smith",
            "email": "smith@email.com",
            "updated_at": "2020-04-25T14:42:02.000000Z",
            "created_at": "2020-04-25T14:42:02.000000Z",
            "id": 1
        }
    }
    ```

3. Login the user

    `HTTP POST`

    `Resquest Body` 

    ```json
    {
        "email": "smith@email.com",
        "password": "secret"
    }
    ```

    `Response`

    ```json
    {
        "success": true,
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni..."
    }    
    ```

4. Get user by token

    `HTTP GET`

    `Request Header`

    ```json        
    {
        "Authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni..."
    }
    ```

    `Response`

    ```json
    {
        "id": 1,
        "name": "sr smith",
        "email": "smith@email.com",
        "email_verified_at": null,
        "created_at": "2020-04-25T14:42:02.000000Z",
        "updated_at": "2020-04-25T14:42:02.000000Z"
    }
    ```

5. User logout

    `HTTP POST`

    `Request Header`

    ```json        
    {
        "Authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni..."
    }
    ```

    `Response`

    ```json
    {
        "success": true,
        "message": "User logged out successfully"
    }
    ```   




### JWT Snippets

[↑ Menu](#menu)

COMMAND                             | ACTION
------------------------------------|----------------------
<kbd>jwt_setup</kbd>                |  `Insert a comment with steps to intall JWT in Laravel`
<kbd>jwt_provider</kbd>             |  `Insert provider class reference`
<kbd>jwt_middleware</kbd>           |  `Insert middleware class reference`
<kbd>jwt_routes</kbd>               |  `Insert default routes to JWT`
<kbd>jwt_use_subject</kbd>          |  `Insert JWT Subject use reference`
<kbd>jwt_use_api_controller</kbd>   |  `Insert all use references to API Controller`
<kbd>jwt_use_jwt_exception</kbd>    |  `Insert JWT Exception use reference`
<kbd>jwt_use_jwt</kbd>              |  `Insert JWT Auth use reference`
<kbd>jwt_user_implements</kbd>      |  `Insert implementation of Interface to User Class`
<kbd>jwt_user_methods</kbd>         |  `Insert default methods to JWT in User Class`
<kbd>jwt_user_token</kbd>           |  `Insert code to get User by Token`
<kbd>jwt_register_rule</kbd>        |  `Insert default rules to register a user`
<kbd>jwt_register_method</kbd>      |  `Insert method to register new User`
<kbd>jwt_login_method</kbd>         |  `Insert method to login a User`
<kbd>jwt_logout_method</kbd>        |  `Insert method to logout a User`
<kbd>jwt_me_method</kbd>            |  `Insert method to return the User by Token`





## Laravel API Documentation Generator

[↑ Menu](#menu)

Snippets to improve productivity to documentation Laravel API using the library [https://laravel-apidoc-generator.readthedocs.io/](https://laravel-apidoc-generator.readthedocs.io/)





### Installing Documentation Library

[↑ Menu](#menu)

1. Install the library - $[prompt]

`composer require --dev mpociot/laravel-apidoc-generator`

2. Publish the provider. A file will be created [/config/apidoc.php] - $[prompt]
    
`php artisan vendor:publish --provider="Mpociot\ApiDoc\ApiDocGeneratorServiceProvider" --tag=apidoc-config`

3. In the file [/config/apidoc.php], change line below 

```php
...

'base_url' => 'http://127.0.0.1:8000',

```

4. Generate the documentation - $[prompt]

`php artisan apidoc:generate`

5. Open Documentation

`\public\docs\index.html`

6. Import the file below to your [Postman](https://www.postman.com/) as new collection

`\public\docs\collection.json`


### API Docs Snippets 

[↑ Menu](#menu)


COMMAND                                 | ACTION
----------------------------------------|----------------------
<kbd>doc_group</kbd>                    |  `@group group_name`
<kbd>doc_url_param</kbd>                |  `@urlParam parameter required/opcional description.`
<kbd>doc_query_param</kbd>              |  `@queryParam parameter required/opcional description. Example: example`
<kbd>doc_body_param</kbd>               |  `@bodyParam parameter type required/opcional description. Example: example`
<kbd>doc_response</kbd>                 |  `@response http_status_code`
<kbd>doc_response_file</kbd>            |  `@response http_status_code file_path`
<kbd>doc_setup</kbd>                    |  `Type a comment with the steps to setup`
<kbd>ctrl + n</kbd> <kbd>ctrl + b</kbd> |  `Include "*" before each selected line`


### Enjoy it!
