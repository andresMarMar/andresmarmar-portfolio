# Arquitectura: Portafolio Web Personal

Infraestructura frontend desarrollada para la validación técnica de código y exposición de proyectos en producción.

## Stack Tecnológico
* **Core:** React 18, TypeScript
* **Bundler & Tooling:** Vite
* **Estilizado:** Tailwind CSS v4 (Integración nativa Vite Plugin)
* **Despliegue y CI/CD:** Vercel

## Arquitectura de Datos y Rendimiento
El proyecto anula la latencia de red prescindiendo de llamadas a un backend tradicional. Implementa un modelo de datos estático (`src/data/portfolio.json`) que actúa como Single Source of Truth (SSOT), inyectando dinámicamente la información en los componentes de React para maximizar el rendimiento y las métricas de Core Web Vitals.
