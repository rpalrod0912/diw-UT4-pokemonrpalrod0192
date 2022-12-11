# practicaMaquetacionrpalrod0912

link Figma del prototipado y guia de estilo:https://www.figma.com/file/VeaS76pyWkJ7bKsYhkQPEM/Gu%C3%ADa-de-estilo?node-id=57%3A208&t=3yeP7cUQwlFzwRR9-0

Se ha seguido la guia de estilo establecida en figma, aunque se han añadido algunos colores extras como grises suaves y verde para los botones, puesto que se han necesitado algunos colores terciarios para el modo oscuro y para hacerf la página mas viva

Cambios Principales:
1.Header: Se ha eliminado la seccion de login, wiki ,dex en header por un solo menu hamburguesa, esto debido a que a la hora de hacer la pagina responsive habria que usar JS, es una solución temporal.

2.Footer:Se han añadido iconos de las redes sociales en el footer directamente y eliminado la página innecesaria que habia en contacto.html con las imágenes de las redes sociales

3.Contacto.html: Solo se hade dejado el formulario de contacto y se eliminado la página de scroll con las redes sociales que habá en figma.

Añadidos:
404.html: Página de Error, se encuentra en el menue hamburguesa, incluye animacion (Obtenida codepen)
Perfil.html: Añadida Página de perfil, donde el usuario puede editar su informacion de su perfil y sus datos.
El resto de páginas se han mantenido exactas a los patrones de diseño establecidos en el prototipado de figma con algunas excepciones del diseño de móvil.

IMPORTANTE
Modo Noche:
Todas las páginas html del proyecto disponen de modo oscuro,
para la realizacion de este se ha usado el siguiente tutorial:
https://programadorwebvalencia.com/tema-oscuro-en-puro-sass/
Para acceder al modo noche de la web se debe cambiar la clase del body de los archivos html de la siguiente manera:
body class="theme" para el modo claro de la web
body class="theme--dark" para el modo oscuro de la web
