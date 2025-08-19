# 📺 SeriesMaze

Aplicación web construida con React para explorar series de TV usando la API pública de TVMaze. Permite buscar por nombre, filtrar por género y navegar entre páginas de resultados de forma fluida y responsiva.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React** (con Vite)
- 🌐 **React Router DOM**
- 📦 **React Paginate**
- 🔁 **Hooks personalizados**
- 💅 **Tailwind CSS**
- 🧪 **Vitest**
- 🔌 **TVMaze API**

---

## 📸 Funcionalidades principales

- 🔎 Búsqueda por nombre de series con _debounce_.
- 🎭 Filtro dinámico por género (extraído desde la API).
- 📄 Paginación entre resultados con scroll automático.
- 🔄 Indicadores de carga y estados de error o vacío.
- 🎨 Interfaz responsiva, clara y modular.

---

## 🔧 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone git@github.com:kritzanyeraldin/modulo4-SullcaEspinoza-Kritzan.git

cd seriesMaze
```

### 2. Instala dependencias

```bash
pnpm install
```

Si no tienes pnpm instalado, primero ejecuta:

```bash
npm install -g pnpm
```

### 3. Inicia la aplicación en desarrollo

```bash
pnpm dev
```

### Ejecutar pruebas unitarias

El proyecto incluye pruebas con Jest y React Testing Library. Para ejecutarlas:

```bash
pnpm test
```

Las pruebas están organizadas junto a sus respectivos componentes (por ejemplo: ComponentName.test.jsx).

## ✨ Comandos útiles

```bash
pnpm dev         # Ejecuta el proyecto
pnpm vitest        # Ejecuta los tests
pnpm preview     # Vista previa de producción
pnpm build       # Compila para producción
```
