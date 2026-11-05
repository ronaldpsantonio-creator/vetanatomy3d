VETANATOMY 3D — PROTOTIPO V0.1

QUÉ INCLUYE
- Interfaz adaptable a teléfono Android.
- Selector de equino, bovino y porcino.
- Selector de ocho sistemas anatómicos.
- Fichas introductorias que cambian según especie y sistema.
- Estructura inicial de aplicación web instalable (PWA).
- Caché local de archivos de la aplicación.

IMPORTANTE
Esta versión NO contiene todavía modelos anatómicos 3D reales, disección funcional,
etiquetas anatómicas verificadas ni un APK. El visor es un espacio preparado para
integrar modelos .glb/.gltf con licencia adecuada y revisión veterinaria.

CÓMO PROBAR EN ANDROID
1. Descomprime el ZIP.
2. Para instalar como aplicación PWA, publica la carpeta en un hosting HTTPS gratuito
   (por ejemplo, GitHub Pages) y abre la dirección con Chrome en Android.
3. En Chrome, menú ⋮ > "Instalar aplicación" o "Añadir a pantalla de inicio".
4. Abre una vez con Internet para que se guarden los archivos de la aplicación.
5. Después prueba el modo avión. La primera carga offline depende de que el navegador
   haya completado el almacenamiento en caché.

NOTA TÉCNICA
Los service workers requieren HTTPS o localhost. Abrir index.html directamente
desde el gestor de archivos no activa el modo offline instalable.

SIGUIENTE ETAPA
Integrar un visor 3D basado en Three.js o Babylon.js y modelos anatómicos segmentados
por estructuras/capas. Cada modelo debe tener procedencia, licencia y validación
anatómica documentadas.
