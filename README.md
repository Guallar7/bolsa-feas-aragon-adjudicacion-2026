# Acto centralizado Bolsa FEAS Aragón

Repositorio documental sobre la controversia surgida tras actos centralizados de adjudicación de contratos temporales FEAS del Servicio Aragonés de Salud en mayo-junio de 2026, especialmente por la repetición de llamamientos vinculada a procesos de difícil cobertura.

La página principal está en `index.html` y está pensada para publicarse con GitHub Pages desde la rama principal.

## Qué contiene

- Una UI pública, limpia y cronológica para explicar el problema sin sobrecarga visual.
- Un resumen visual legible sin depender de archivos Markdown.
- Un mapa de especialidades y horarios convocados para el acto del 1 de junio de 2026.
- Documentación oficial descargada desde Aragón, BOA y BOE.
- Material genérico y anonimizado para compañeros.
- Contexto jurídico-administrativo ordenado para revisión posterior.

## Qué no se sube

El `.gitignore` excluye material individual, correos originales no anonimizados, borradores antiguos marcados como no enviar, archivos temporales, duplicados importados y paquetes comprimidos generados.

## Organización del caso

Esta carpeta queda organizada para separar lo que se puede enviar de forma común de lo que es material personal o de trabajo.

## 01_envio_generico

Carpeta para el envío común de los anestesistas del Hospital Universitario Miguel Servet.

- `email_generico_anestesistas_hums.md`: cuerpo del correo genérico para copiar y pegar.
- `word/01_correo_generico_anestesistas_hums.docx`: versión Word del correo genérico.
- `word/02_escrito_registro_generico_anestesistas_hums.docx`: escrito formal en Word para presentar por registro.
- `adjuntos/`: paquete de adjuntos para el correo genérico.
- `borradores/`: versiones alternativas o más largas del escrito genérico.
- `paquete_generico_anestesistas_hums.zip`: paquete comprimido con Word, correo y adjuntos para compartir con compañeros.

La carpeta `adjuntos/` incluye un correo anonimizado, la comunicación del acto del 1 de junio, el listado oficial nominativo de adjudicaciones, la oferta de contratos y los criterios de gestión de listas FEAS.
También incluye el aviso de 29 de mayo de 2026 sobre próximas publicaciones y repetición del acto de Bolsa FEAS.

## 02_contexto_y_analisis

Material de análisis y contexto:

- `CONTEXTO.md`: cronología, argumentos y estrategia.
- `DOCUMENTACION_OFICIAL.md`: índice razonado de la documentación oficial descargada.

## 03_documentacion_oficial

Repositorio de documentación oficial descargada desde Aragón, BOA y BOE. Está ordenado por materia:

- `01_acto_centralizado_2026`
- `02_normas_bolsa_fea`
- `03_dificil_cobertura`
- `04_traslados`
- `05_normativa_general`

## 04_material_individual_david

Material personal de David Guallar García. No usar como paquete genérico.

Incluye el correo original no anonimizado, la hoja individual de adjudicación, su transcripción, los borradores individuales y los paquetes antiguos que contienen datos personales.

## 05_archivo_originales_importados

Archivos originales que estaban en la raíz al inicio o duplicados de documentos ya organizados. Se conservan como archivo, pero no son la carpeta de trabajo principal.

## 90_borradores_y_trabajo

Material temporal, renders y capturas intermedias. No usar para enviar salvo revisión expresa.

## Recomendación de uso

Para enviar el correo común:

1. Abrir `01_envio_generico/email_generico_anestesistas_hums.md`.
2. Copiar el asunto y el cuerpo del mensaje.
3. Adjuntar los archivos de `01_envio_generico/adjuntos/`.
4. Revisar nombre y firma antes de enviar.

Para compartir todo con compañeros, enviar `01_envio_generico/paquete_generico_anestesistas_hums.zip`.
