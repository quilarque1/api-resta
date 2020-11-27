# api-resta
Api encargada de restar valores dado un parámetro de entrada.

## Como Usar:

#instalar dependencias
npm install

#correr api
node src/app.js

##Docker
docker-compse up -build

#Url
<span>

*http://localhost:3000*

</span>

#Verificar si la api esta arriba

**GET:**
***``
{url}/health
``***
##

## Como usra


**GET:** 
***``{url}/resta/10-2-3-2
``***

**Where:**

| Parameter    |Descripction   |Example   |
| ------------| ------------ | ---------- |
|  10-2-3-2   |  es la cadena de operaciones a realizar  | **10-2-3-2** |

**Ejemplo respuesta:**

```json
{
    "resta": {
        "operacion": "10-2-3-2",
        "resultado": 3
    }
}
```

**Donde:**

| Parameter         |Descripction         |Example        |
| ------------      | ------------        | ------------  |
|  resta            |  arreglo de operaciones  |  **operacion, resultado**  |
|  operacion        |  cadena de opraciones a realizar | **10-2-3-2**|
|  resultado        |  resultado de la operacion | **3**|

## Si necesitas otra informacion

Escribirme a:

**quilarque1@gmail.com**
