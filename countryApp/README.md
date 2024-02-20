Documentación Técnica - countryApp
Inicio del Proyecto
Se ha creado un nuevo proyecto Angular llamado countryApp.
Se ha integrado Bootstrap a través de su CDN para estilos globales en toda la aplicación.
Estructura del Proyecto
Se han añadido dos carpetas principales: countries y shared.
Dentro de shared, se han creado las carpetas components y pages.
Enrutamiento
Se ha configurado el enrutamiento para las siguientes rutas: home, about y contact. La ruta por defecto es home.
El archivo de enrutamiento se encuentra en app.route.ts.
Barra lateral
Se ha creado el componente sidebar dentro de shared/components.
La barra lateral contiene enlaces a las páginas de inicio y acerca de.
Se utiliza la directiva routerLink para la navegación.
Componentes en countries
Se han generado nuevos componentes dentro de la carpeta pages.
Los nombres de los componentes son: byCapitalPage, byCountryPage, byRegionPage, y countryPage.
Se ha aplicado lazy-loading para cargar las rutas del módulo countries.routes.ts.
Búsqueda de Países
Se ha creado el componente searchBox dentro de shared/components.
El componente incluye un formulario para introducir el término de búsqueda.
El término de búsqueda se pasa al componente byCapitalPage mediante @Output() y EventEmitter.
Se ha implementado el manejo de errores en el servicio country.service.ts.
Backend y Servicio de Conexión
Se ha establecido una conexión HTTP a la API-Rest de restcountries.com para obtener información sobre países.
Se ha definido la interfaz Country en la carpeta interfaces.
Resultados por Pantalla
Se ha creado el componente country-table para presentar los resultados de búsqueda.
El componente recibe los datos de países mediante @Input() y muestra una tabla con los resultados.
Se han incluido enlaces en la tabla para ver más detalles de cada país.
Vista Detallada de la Información
Se ha implementado el paso de parámetros por URL para ver detalles de un país específico.
El componente country-page recibe el código del país en la URL y muestra información detallada.
Se ha creado una plantilla para el componente de detalle con información como la bandera, población y traducciones.
Enlace desde country-table
Se han añadido enlaces desde el componente country-table para ver detalles de cada país.
Los enlaces utilizan la directiva [routerLink] y pasan el código del país como parámetro
