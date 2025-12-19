# React - Typescript - Cripto App con Zod y Zustand  

Este proyecto realiza dos consultas a https://min-api.cryptocompare.com/ y sus endpoints para traer una lista de las 20 monedas mas caras de criptos y una segunda consulta para equivalencias de una moneda normal. 

Hace uso de css puro y un store de zustand con validación de schemas con zod

---

## 🚀 Tecnologías utilizadas
- [React](https://react.dev/) → Librería principal para la UI
- [Vite](https://vitejs.dev/) → Bundler rápido para desarrollo y build
- [TypeScript](https://www.typescriptlang.org/) → Tipado estático y robustez en el código
- **Zustand** → Gestor de estado de React
- **Zod** → Validación de la respuesta de la API

---

## 📂 Estructura del proyecto
src/ components/        # Componentes reutilizables (formularios, listas, etc.) 
__tests__/               # Realiza pruebas (por el momento sanity tests para probar el CI/CD)
data/                   # Elementos del drop menu 
schema/                 # Estructura de los datos recibidos para currencies y precios
services/               # Funciones para realizar consultas de la API
App.tsx                 # Componente principal main.tsx          # Punto de entrada

---

## ⚙️ Instalación y uso
1. Clonar el repositorio:
  ```bash
  git clone https://github.com/tchock42/cripto-react-zustand
  cd clima-react

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```
4. Generar el build de producción:
```bash
npm run build
```
5. Previsualizar build
```bash
npm run preview
```

## 🧪 Scripts disponibles
- npm run dev → entorno local con hot reload
- npm run build → build optimizado para producción
- npm run preview → servidor de preview del build
- npm run lint → verificación de estilo con ESLint
- npm run type-check → validación de tipos con TypeScript
- npm run test → pruebas unitarias (si se agregan con Vitest)

## 🎯 Funcionalidades principales
- Formulario con información de país y ciudad
- Consulta mediante la api de Open Weather


## 📸 Demo
([Página en Vercel](https://cripto-1234-517691032774.us-central1.run.app/))
