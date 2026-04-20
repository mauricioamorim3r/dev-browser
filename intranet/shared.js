/* Shared layout: sidebar + top header injected into every page */

const NAV = [
  {
    section: 'Principal',
    items: [
      { icon: 'fa-gauge-high',        label: 'Dashboard',     href: 'dashboard.html' },
      { icon: 'fa-chart-line',        label: 'Gestão',        href: 'management.html' },
      { icon: 'fa-folder-open',       label: 'Documentos',    href: 'documents.html' },
      { icon: 'fa-trophy',            label: 'Trabalhos',     href: 'works.html' },
    ]
  },
  {
    section: 'Corporativo',
    items: [
      { icon: 'fa-users',             label: 'Equipes',       href: '#', badge: '3' },
      { icon: 'fa-calendar-days',     label: 'Agenda',        href: '#' },
      { icon: 'fa-bell',              label: 'Comunicados',   href: '#', badge: '5' },
      { icon: 'fa-graduation-cap',    label: 'Treinamentos',  href: '#' },
    ]
  },
  {
    section: 'Sistema',
    items: [
      { icon: 'fa-gear',              label: 'Configurações', href: '#' },
      { icon: 'fa-shield-halved',     label: 'Segurança',     href: '#' },
      { icon: 'fa-circle-question',   label: 'Suporte',       href: '#' },
    ]
  }
];

function currentPage() {
  return window.location.pathname.split('/').pop();
}

function buildSidebar() {
  const current = currentPage();
  const nav = NAV.map(section => `
    <div class="nav-section-label">${section.section}</div>
    ${section.items.map(item => {
      const active = item.href === current ? 'active' : '';
      const badge = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';
      return `<a class="nav-item ${active}" href="${item.href}">
        <i class="fa-solid ${item.icon}"></i>
        ${item.label}
        ${badge}
      </a>`;
    }).join('')}
  `).join('');

  return `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-mark"><i class="fa-solid fa-hexagon-nodes"></i></div>
        <div class="logo-name">Nexus<span>Corp</span></div>
      </div>
      <nav class="sidebar-nav">${nav}</nav>
      <div class="sidebar-footer">
        <div class="user-chip">
          <div class="user-avatar">CA</div>
          <div class="user-info">
            <strong>Carlos Andrade</strong>
            <span>Diretor Executivo</span>
          </div>
          <div class="user-actions">
            <button class="icon-btn" title="Configurações"><i class="fa-solid fa-gear"></i></button>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function buildHeader() {
  return `
    <header class="top-header">
      <div class="search-wrap">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="search-input" type="text" placeholder="Buscar documentos, projetos, pessoas…" />
      </div>
      <div class="header-actions">
        <button class="notif-btn">
          <i class="fa-solid fa-bell"></i>
          <span class="notif-dot"></span>
        </button>
        <button class="notif-btn">
          <i class="fa-solid fa-envelope"></i>
        </button>
        <div class="header-avatar" title="Carlos Andrade">CA</div>
      </div>
    </header>
  `;
}

function init() {
  const shell = document.getElementById('app-shell');
  if (!shell) return;
  const content = shell.innerHTML;
  shell.innerHTML = buildSidebar() + buildHeader() + content;
}

document.addEventListener('DOMContentLoaded', init);
