# Data Lovers

## Índice

* [Descripción](#descripción)
* [Definición del producto](#definición-del-producto)
* [Proceso y decisiones de  diseño ](#proceso-y-decisiones-de-diseño)
* [Historias de usuario](#historias-de-usuario)
* [Diseño de la interfaz de usuario](#diseño-de-la-interfaz-de-usuario)
* [Testeos de usabilidad](#testeos-de-usabilidad)

***

# WORLD BANK DATA DASHBOARD

## Descripción 

Este proyecto es una página web que permite visualizar un set de datos del Banco Mundial, esta data corresponde a  indicadores demográficos y económicos de Perú, México, Brasil y Chile.
El  usuario podrá filtrar la data según cinco tipos de indicadores: población, educación de nivel terciaria, educación de nivel secundaria, empleo y desempleo. Podrá visualizar en una lista la data correspondiente a cada indicador desde el año 1960 hasta 2017. Podrá ordenar de manera descendente dicha lista (del año 2017 hasta llegar a 1960) y obtener el promedio de cada indicador durante estos años.

## Definición del producto

**¿Quiénes son los principales usuarios del producto?**

Estudiantes  de educación superior de las carreras de Ciencias Sociales, de gestión, educación, asi como Derecho; quienes realizar continuamente trabajos monográficos, ensayos, tesinas, tesis, entre otros, que involucran data de indicadores demográficos y económicos.

**¿Cuáles son los objetivos de estos usuarios en relación con tu producto?**

Acceder a través de internet a data actualizada y obtenida de una fuente u organismo confiable, para llevar a cabo sus proyectos de investigación. Asi mismo, poder navegar de manera facil e intuitiva por la página web.

**¿Cómo crees que el producto que estás creando está resolviendo sus problemas?**

Identificamos la necesidad de estudiantes de educación superior de información estadística relacionada a indicadores demográficos y económicos, para llevar a cabo sus trabajos de investigación. Dichos estudiantes suelen realizar monografías, ensayos o tesis  sobre temas que involucran dicha informacion, para lo cual buscan páginas en la web  que provean data confiable.

## Proceso y decisiones de  diseño 

+ Realizamos una investigación acerca de indicadores demográficos, económicos y comerciales, a fin de entender los distintos indicadores de nuestra data y poder clasificarlos por tipo.

+ Analizamos varias páginas que muestran data relacionada a fin de encontrar coincidencias en cuanto a diseño y las interacciones que le permiten al usuario hacer con la data.
+ Para entender a  nuestro usuario realizamos entrevistas a tres jóvenes universitarios, necesitábamos saber qué tipo de data buscan primordialmente, de qué manera quisieran poder filtrarla para hacer más rápida su búsqueda, como están acostumbrados o les gustaría visualizarla la página y según qué criterio querrían ordenar la data que necesitan.
+ En el transcurso del proyecto realizamos varios cambios con el fin de adaptar nuestro diseño a las necesidades de nuestro usuario. Teníamos una conclusión inicial que habíamos obtenida con las primeras entrevistas que nos llevó a hacer el diseño web de una forma, pero después tuvimos que cambiarlo al escuchar el feedback de nuestros usuarios. 
+ Se utilizaron colores y tipografía relacionada al Banco Mundial, en la parte superior pusimos el logo del Banco Mundial para que el usuario identificara con rapidez la fuente de la que provenía la data. 
+ Como vista principal dejamos que el usuario filtre la data por tipo de indicador para a continuación mostrarle los nombres de los indicadores ennumerados; al darle click a un indicador le permitimos seleccionar un país, para esto mostramos la imagen de la bandera de cada uno de los países a una de las  cuales deberá dar click, siendo esto de facil distinción para el usuario.
+ Al seleccionar una bandera el usuario podrá visualizar en una lista la data correspondiente desde el año 1960 al 2017 (forma ascendente), el cálculo del promedio de dichos años y un botón que dice descendente, que al darle click le permitirá ordenar la data de manera descendente (del 2017 hasta 1960).

## Historias de usuario:

### Historia 1
Yo como estudiante universitario quiero filtrar la data por tipo de indicador y por país, para hacer más rápida mi búsqueda.

### Historia 2
Yo como estudiante universitario quiero visualizar por años la data que corresponde a cada indicador de cada uno de los países, para poder analizar las diferencias del comportamiento de un indicador en cada país. 

### Historia 3
Yo como estudiante universitario quiero obtener el promedio en base a todos los años de cada indicador, para poder tener una conclusión general del desarrollo de cada indicador en base a esto.

### Historia 4
Yo como estudiante universitario quiero ordenar la data desde el año más reciente hasta el más remoto, para analizar el comportamiento de un indicador en los últimos años.

## Diseño de la interfaz de usuario

## Prototipo de baja fidelidad

En este primer sketch escogimos como usuarios a empresarios que querían exportar sus productos a otros países, pero al analizar mejor la data y encontrar que la gran mayoría de esta correspondía a indicadores  demográficos de la población femenina pensamos en crear nuestro producto para ONGs; finalmente para tener más facilidad en acceder a entrevistas con usuarios reales y debido al corto tiempo para esto, optamos por diseñar una página para universitarios que quisieran acceder a este tipo de data para realizar sus trabajos de la universidad.

![primer-prototipo](https://user-images.githubusercontent.com/45099610/50743482-6cfa3d00-11e6-11e9-8ade-a4e64017a268.PNG)

Al iterar nuestro anterior prototipo nos dimos cuenta que a través de la barra de navegación debíamos explicar quiénes somos y que es lo que hacemos, los usuarios nos dijeron que desde la primera vista de la página querían que se les indique claramente que podían filtrar por tipo de indicador y país, que no necesitaban un mapa de los países a menos que tuviera funcionalidad y les permitiera al dar click de frente filtrar por país. Por lo que cambiamos el diseño y se añadió la funcionalidad de mostrar la data por años y dos botones que debían mostrar la data de forma descendente y el promedio  respectivamente

![segundo-prototipo](https://user-images.githubusercontent.com/45099610/50743549-5ef8ec00-11e7-11e9-8b41-6b3be63c471c.PNG)

Al iterar el nuevamente nuestro prototipo el usuario opinó que podíamos mostrar banderas en vez que un select para filtrar por país y que no hacía falta mostrar en otra vista el promedio, ya que solo era una cifra y prefería visualizarlo junto con la lista que muestra la data.

![tercer-prototipo](https://user-images.githubusercontent.com/45099610/50743652-bf3c5d80-11e8-11e9-9d28-72c5e376b4c1.PNG)

## Prototipo de alta fidelidad

## Testeos de usabilidad
+ Los usuarios nos dieron su opinión y sus ideas para corregir y mejorar nuestro prototipo, los problemas de usabilidad que encontraron fueron los siguientes:
+ El tamaño de la letra no debería ser tan grande.
+ Deberían usar más un color más cálido para que no predomine tanto el azul, por lo que optamos por usar más el color celeste en nuestro diseño.
+ Al ingresar a la página debería entender claramente que puedo empezar a filtrar por tipo de indicador y por país y esto me es confuso porque la barra de navegación no me lo deja claro,
+ Deberían mostrar banderas para filtrar por país y asi hacer más llamativo el diseño.