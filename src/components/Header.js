// Global Header with Mode Switcher & Workspace Controls

export function renderHeader(container, { currentMode, onToggleMode, onOpenCommandPalette, onNavigateToSection }) {
  container.innerHTML = `
    <header class="site-header">
      <div class="header-brand-wrap" id="header-brand-logo-btn" title="EcomIQ Commerce Intelligence">
        <div class="brand-symbol">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        </div>
        <div class="brand-text-logo">
          ECOM<span>IQ</span>
        </div>
        <div class="header-workspace-chip" id="header-workspace-trigger" title="Active Enterprise Workspace">
          <span class="live-pulse-green"></span>
          <span>Apex Brands Global</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>

      <!-- Navigation Links for Story Mode -->
      <nav class="header-nav-links" id="header-story-nav" style="${currentMode === 'app' ? 'display:none;' : ''}">
        <div class="header-nav-item active" data-anchor="hero">Overview</div>
        <div class="header-nav-item" data-anchor="section-metrics">Metrics</div>
        <div class="header-nav-item" data-anchor="section-ai">AI Insights</div>
        <div class="header-nav-item" data-anchor="section-ndr">NDR Recovery</div>
        <div class="header-nav-item" data-anchor="section-couriers">Couriers</div>
        <div class="header-nav-item" data-anchor="section-finance">Finance</div>
        <div class="header-nav-item" data-anchor="section-marketing">Marketing</div>
      </nav>

      <!-- Right Header Actions -->
      <div class="header-right-actions">
        <!-- Command Palette Trigger -->
        <button class="header-search-btn" id="header-search-command-btn" title="Open Command Palette (⌘K)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span>Search or ⌘K</span>
        </button>

        <!-- Mode Toggle Segmented Control -->
        <div class="mode-toggle-segmented">
          <button class="mode-pill ${currentMode === 'story' ? 'active' : ''}" id="mode-story-btn">
            Story Showcase
          </button>
          <button class="mode-pill ${currentMode === 'app' ? 'active' : ''}" id="mode-app-btn">
            Command Center OS
          </button>
        </div>

        ${currentMode === 'story' ? `
          <button class="btn btn-primary btn-sm" id="header-cta-launch-btn">
            Launch OS →
          </button>
        ` : `
          <button class="btn btn-secondary btn-sm" id="header-cta-story-btn">
            ← Back to Story
          </button>
        `}
      </div>
    </header>
  `;

  // Attach Listeners
  document.getElementById('header-brand-logo-btn').onclick = () => {
    if (currentMode === 'app') {
      onToggleMode('story');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  document.getElementById('header-search-command-btn').onclick = onOpenCommandPalette;

  document.getElementById('mode-story-btn').onclick = () => onToggleMode('story');
  document.getElementById('mode-app-btn').onclick = () => onToggleMode('app');

  const ctaLaunch = document.getElementById('header-cta-launch-btn');
  if (ctaLaunch) ctaLaunch.onclick = () => onToggleMode('app');

  const ctaStory = document.getElementById('header-cta-story-btn');
  if (ctaStory) ctaStory.onclick = () => onToggleMode('story');

  // Story anchor navigation
  container.querySelectorAll('.header-nav-item').forEach(item => {
    item.onclick = () => {
      container.querySelectorAll('.header-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const anchor = item.getAttribute('data-anchor');
      onNavigateToSection(anchor);
    };
  });
}
