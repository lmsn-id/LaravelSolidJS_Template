<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Laravel SolidJS Template</title>
  <style>
    body {
      font-family: sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }

    h1, h2 {
      text-align: center;
      color: #1a202c;
    }

    code {
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }

    pre {
      background-color: #272822;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
    }

    ul {
      padding-left: 1.2rem;
    }

    .logo-wrapper {
      text-align: center;
      margin-bottom: 2rem;
    }

    .logo-wrapper img {
      vertical-align: middle;
      margin-right: 12px;
      height: 80px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .struktur {
      font-family: monospace;
      white-space: pre;
      background-color: #edf2f7;
      padding: 1rem;
      border-radius: 6px;
    }

    a {
      color: #2b6cb0;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (min-width: 768px) {
      .grid {
        grid-template-columns: 1fr 1fr;
      }
    }

  </style>
</head>
<body>

  <h1>Laravel SolidJS Template 🚀</h1>

  <div class="logo-wrapper">
    <img src="https://raw.githubusercontent.com/lmsn-id/LaravelSolidJS_Template/main/public/favicon.png" alt="Laravel + SolidJS Logo" />
  </div>

  <h2>🔥 Modern Full-Stack Starter Template</h2>
  <p>
    Template hybrid yang menggabungkan kekuatan <strong>Laravel</strong> (backend) dengan <strong>SolidJS</strong> (frontend) melalui <strong>Inertia.js</strong>, memberikan pengalaman pengembangan full-stack yang ultra efisien.
  </p>

  <h2>🛠️ Instalasi Cepat</h2>
  <ol>
    <li>Clone repository:
      <pre><code>git clone https://github.com/lmsn-id/LaravelSolidJS_Template.git
cd LaravelSolidJS_Template</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>composer install
bun install</code></pre>
    </li>
    <li>Setup environment:
      <pre><code>cp .env.example .env
php artisan key:generate</code></pre>
    </li>
    <li>Jalankan development server:
      <pre><code>php artisan serve
bun dev</code></pre>
    </li>
  </ol>

  <p>
    Buka <a href="http://localhost:8000" target="_blank">http://localhost:8000</a> di browser Anda!
  </p>

  <h2>✨ Keunggulan Framework Ini</h2>

  <h3>🚀 Performa Tinggi</h3>
  <ul>
    <li><strong>SolidJS</strong>: Reactivity model berbasis compiler dengan zero virtual DOM</li>
    <li><strong>Laravel Octane</strong>: Dukungan penuh untuk aplikasi high-performance</li>
  </ul>

  <h3>🔥 Developer Experience Unggul</h3>
  <ul>
    <li>Hot Reloading dengan Vite</li>
    <li>TypeScript support out-of-the-box</li>
    <li>Integrasi Inertia.js yang mulus</li>
  </ul>

  <h3>⚡ Fitur Modern</h3>
  <ul>
    <li>Authentication system siap pakai</li>
    <li>File-based routing (SolidStart compatible)</li>
    <li>Pre-configured Tailwind CSS + PostCSS</li>
  </ul>

  <h2>📦 Struktur Terorganisir</h2>
  <div class="struktur">
├── app/               # Laravel backend  
├── resources/         # SolidJS frontend  
│   ├── components/    # Solid components  
│   ├── pages/         # Inertia pages  
│   └── styles/        # Global CSS  
└── vite.config.ts     # Vite config  
  </div>

  <h2>🧩 Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> Laravel 10, PHP 8.2+</li>
    <li><strong>Frontend:</strong> SolidJS 1.6, TypeScript 5</li>
    <li><strong>Tooling:</strong> Vite 4, Inertia.js 1.0</li>
    <li><strong>Styling:</strong> Tailwind CSS 3, PostCSS</li>
  </ul>

  <h2>📚 Dokumentasi Lengkap</h2>
  <ul>
    <li><a href="https://laravel.com/docs" target="_blank">Laravel Documentation</a></li>
    <li><a href="https://docs.solidjs.com/" target="_blank">SolidJS Documentation</a></li>
    <li><a href="https://inertiajs.com/" target="_blank">Inertia.js Documentation</a></li>
  </ul>

</body>
</html>
