# 🌈 Orgullo de Sevilla 2026

Portal web oficial del **Orgullo de Sevilla 2026** bajo el lema:

> **"Raíces que bailan libres"**

La plataforma está diseñada para ofrecer información clara, accesible y actualizada sobre todos los eventos y actividades programadas durante la semana del Orgullo en Sevilla.

---

## 📋 Descripción del proyecto

Esta aplicación permite a residentes, visitantes, medios de comunicación y participantes consultar de forma rápida:

* Agenda completa de actividades.
* Información de la manifestación oficial.
* Programación de artistas y actuaciones.
* Mapa interactivo con puntos de interés.
* Noticias y avisos en tiempo real.
* Manifiesto oficial y documentación descargable.
* Información logística y accesibilidad.

El objetivo principal es centralizar toda la información del evento en una experiencia web rápida, responsive y accesible.

---

## ✨ Funcionalidades principales

### 🗓 Agenda de actividades

* Calendario completo de eventos.
* Horarios detallados.
* Información de localizaciones.

### 🚩 Manifestación

* Recorrido oficial.
* Horarios estimados por tramos.
* Información de accesibilidad.
* Puntos sanitarios y de asistencia.

### 🎤 Artistas

* Programación de actuaciones.
* Horarios de escenarios.
* Información de artistas invitados.

### 🗺 Mapa interactivo

* Escenarios.
* Puntos de información.
* Transporte público.
* Accesos PMR.
* Servicios sanitarios.
* Emergencias.
* Hostelería colaboradora.

### 📢 Actualidad

* Comunicados oficiales.
* Avisos de última hora.
* Información logística relevante.

### 📄 Manifiesto

* Consulta del manifiesto oficial.
* Descarga de documentación institucional.

---

## 🛠 Stack tecnológico

### Frontend

* React 19
* TypeScript
* Vite
* TanStack Router
* TanStack Query
* Tailwind CSS 4

### UI y componentes

* Radix UI
* Lucide React
* Recharts
* React Hook Form
* Zod

### Desarrollo

* ESLint
* Prettier

---

## 📂 Estructura del proyecto

```text
src/
├── assets/                # Imágenes y recursos gráficos
├── components/            # Componentes reutilizables
│   └── ui/                # Componentes base UI
├── lib/                   # Datos y utilidades
├── routes/                # Rutas de la aplicación
│   ├── index.tsx
│   ├── agenda.tsx
│   ├── artistas.tsx
│   ├── actualidad.tsx
│   ├── manifiesto.tsx
│   ├── manifestacion.tsx
│   └── mapa.tsx
├── router.tsx
└── styles.css
```

---

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd orgullo-sevilla
```

Instalar dependencias:

```bash
npm install
```

Iniciar entorno de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

o en el puerto asignado por Vite.

---

## 📦 Compilación para producción

Generar versión optimizada:

```bash
npm run build
```

Previsualizar la compilación:

```bash
npm run preview
```

---

## 🎨 Identidad visual

El diseño sigue una línea gráfica inspirada en:

* Diversidad y orgullo LGTBIQ+.
* Cultura sevillana y andaluza.
* Estética contemporánea con influencias de cartelería urbana.
* Accesibilidad y claridad visual.
* Navegación orientada a dispositivos móviles.

---

## ♿ Accesibilidad

La plataforma se desarrolla teniendo en cuenta:

* Navegación mediante teclado.
* Contraste adecuado de colores.
* Diseño responsive.
* Información accesible para personas con movilidad reducida.
* Compatibilidad con lectores de pantalla.

---

## 📱 Responsive Design

Optimizada para:

* Móviles
* Tablets
* Ordenadores de escritorio
* Pantallas de gran formato

---

## 🔒 Licencia

Proyecto desarrollado para la difusión y gestión informativa del **Orgullo de Sevilla 2026**.

Todos los contenidos gráficos, textos, marcas y elementos asociados al evento pertenecen a sus respectivos titulares.

---

## 🌈 Orgullo de Sevilla 2026

**22 – 28 de junio de 2026**

**Sevilla celebra en libertad.**
