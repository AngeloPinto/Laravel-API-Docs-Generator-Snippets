# Laravel API Snippets

![Laravel API Snippets](./img/logo.png)

* [Laravel API JWT](#laravel-api-jwt)
    
    * [Installing JWT](#installing-jwt)

    * [JWT Snippets](#jwt-snippets)

* [Laravel API Documentation Generator](#laravel-api-documentation-generator)

    * [API Docs Snippets](#api-docs-snippets)

## Laravel API JWT

### Installing JWT

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

### JWT Snippets

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


Snippets to improve productivity to documentation Laravel API using the library [https://laravel-apidoc-generator.readthedocs.io/](https://laravel-apidoc-generator.readthedocs.io/)


### API Docs Snippets


COMMAND                                 | ACTION
----------------------------------------|----------------------
<kbd>apidoc_group</kbd>                 |  `@group group_name`
<kbd>apidoc_url_param</kbd>             |  `@urlParam parameter required/opcional description.`
<kbd>apidoc_query_param</kbd>           |  `@queryParam parameter required/opcional description. Example: example`
<kbd>apidoc_body_param</kbd>            |  `@bodyParam parameter type required/opcional description. Example: example`
<kbd>apidoc_response</kbd>              |  `@response http_status_code`
<kbd>apidoc_response_file</kbd>         |  `@response http_status_code file_path`
<kbd>apidoc_setup</kbd>                 |  `Type a comment with the steps to setup`
<kbd>ctrl + n</kbd> <kbd>ctrl + b</kbd> |  `Include "*" before each selected line`


### Enjoy it!
