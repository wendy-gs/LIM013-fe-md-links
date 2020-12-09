<br />
<p align="center">
  <a href="https://github.com/wendy-gs/LIM013-fe-md-links/blob/master/README.md">
    <img src="src/img/logo.png" alt="Logo" width="140" height="120">
  </a>
  <h1 align="center">&#60wendy-gs&#62/md-links</h1>
</p>

## Índice

* [1. Sobre el proyecto](#1-Sobre-el-proyecto)
* [2. Diagrama de flujo](#2-resumen-del-proyecto)
* [3. Instalación](#3-objetivos-de-aprendizaje)
* [4. Uso](#4-consideraciones-generales)
* [5. Contacto](#5-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. Sobre el proyecto  🔍

Este módulo nos permite analizar todos los links que se encuentre en archivos de formato [Markdown](https://es.wikipedia.org/wiki/Markdown) para porder verificar si son válidos o se encuentran rotos y reportar algunas estadísticas  (total de links encontrados, total de links únicos y total de links rotos).

## 2. Diagrama de flujo  ✍

<img src="https://github.com/wendy-gs/LIM013-fe-md-links/blob/master/src/img/logo.png" alt="flujo">

## 3. Instalación  💻

~~~
npm install wendy-gs-md
~~~

## 4. Uso 🖱

Usaremos el comando md-links para ejecutar el programa

```sh
wendy-gs-md md-links <path> <options>
```
### Argumentos

* `path`: Ruta absoluta o relativa al archivo o directorio. 
* `options`:  No es obligatorio el ingreso de este valor, las opciones disponibles son : 
  - `--validate`: Válida si los links estan funcionando.
  - `--stats`: Muestra el total de links y los links únicos.
  - `--validate` `--stats`: Muestra total de links, links únicos y total de links rotos .

✔ **Muestra todos links encontrados de archivos .md**

```sh
wendy-gs-md md-links <path>
```
#### Ejemplo
<img src="https://github.com/wendy-gs/LIM013-fe-md-links/blob/master/src/img/prueba1.PNG" alt="md-links">

✔ **--validate / -v : Muestra la validacion de los links**

```sh
wendy-gs-md md-links <path> --validate
```
#### Ejemplo
<img src="https://github.com/wendy-gs/LIM013-fe-md-links/blob/master/src/img/prueba%202.PNG" alt="validate">

✔ **--stats / -s : Muestra total de links y únicos**
```sh
wendy-gs-md md-links <path> --stats
```
#### Ejemplo
<img src="https://github.com/wendy-gs/LIM013-fe-md-links/blob/master/src/img/prueba%203.PNG" alt="stats">

✔ **--stats --validate: Muestra total de links, únicos y rotos**
```sh
wendy-gs-md md-links <path> --stats --validate
```
#### Ejemplo
<img src="https://github.com/wendy-gs/LIM013-fe-md-links/blob/master/src/img/prueba%204.PNG" alt="validate y stats">

✔ **Si solo se ingresa el comnando md-links saldran las opciones de ayuda**
```sh
wendy-gs-md md-links
```
<img src="https://github.com/wendy-gs/LIM013-fe-md-links/blob/master/src/img/prueba.PNG" alt="autoayuda">

✔ **-h / --help: Muestra las opciones disponibles**
```sh
wendy-gs-md md-links -h
```
<img src="https://github.com/wendy-gs/LIM013-fe-md-links/blob/master/src/img/prueba5.PNG" alt="ayuda">

## 5. Contacto 🙋

[Wendy Gonzales](https://github.com/wendy-gs)

Project Link: [https://github.com/wendy-gs/LIM013-fe-md-links](https://github.com/wendy-gs/LIM013-fe-md-links)

