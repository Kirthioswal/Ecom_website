// EcomIQ — Main Application Controller & Dual-Mode Orchestrator

import { renderHeader } from './components/Header.js';
import { renderSidebar } from './components/Sidebar.js';
import { CommandPalette } from './components/CommandPalette.js';
import { OrderDrawer } from './components/OrderDrawer.js';
import { ActionModals } from './components/ActionModals.js';
import { toast } from './components/Toast.js';

// Views
import { renderShowcaseView } from './views/ShowcaseView.js';
import { renderDashboardView } from './views/DashboardView.js';
import { renderOrdersView } from './views/OrdersView.js';
import { renderShipmentsView } from './views/ShipmentsView.js';
import { renderNDRView } from './views/NDRView.js';
import { renderWeightView } from './views/WeightView.js';
import { renderCouriersView } from './views/CouriersView.js';
import { renderWarehousesView } from './views/WarehousesView.js';
import { renderCustomersView } from './views/CustomersView.js';
import { renderFinanceView } from './views/FinanceView.js';
import { renderMarketingView } from './views/MarketingView.js';
import { renderAnalyticsView } from './views/AnalyticsView.js';
import { renderAIInsightsView } from './views/AIInsightsView.js';
import { renderAIChatView } from './views/AIChatView.js';
import { renderSettingsView } from './views/SettingsView.js';

class EcomIQApp {
  constructor() {
    this.currentMode = this.getInitialMode(); // 'story' or 'app'
    this.currentAppModule = this.getViewFromHash() || 'dashboard';
    this.isSidebarCollapsed = false;

    // Mount points
    this.headerMount = document.getElementById('header-mount');
    this.mainContainer = document.getElementById('main-content-container');

    // Modals & Drawers
    this.actionModals = new ActionModals({
      onRefreshData: () => this.refresh()
    });

    this.orderDrawer = new OrderDrawer({
      onAction: (action, order) => this.handleAction(action, order)
    });

    this.commandPalette = new CommandPalette({
      onNavigate: (module) => {
        this.setMode('app');
        this.navigateAppModule(module);
      },
      onOpenOrder: (order) => this.orderDrawer.open(order),
      onAction: (action) => this.handleAction(action)
    });

    this.init();
  }

  getInitialMode() {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('app') || hash.includes('dashboard') || hash.includes('orders') || hash.includes('ndr') || hash.includes('shipments') || hash.includes('couriers') || hash.includes('finance') || hash.includes('marketing') || hash.includes('weight')) {
      return 'app';
    }
    return 'story';
  }

  getViewFromHash() {
    const rawHash = window.location.hash.replace('#/', '').replace('#', '');
    const [viewPart] = rawHash.split('?');
    const validModules = [
      'dashboard', 'orders', 'shipments', 'ndr', 'weight', 'couriers', 
      'warehouses', 'customers', 'finance', 'marketing', 'analytics', 
      'ai-insights', 'ai-chat', 'settings'
    ];
    return validModules.includes(viewPart) ? viewPart : 'dashboard';
  }

  init() {
    this.render();

    // Listen to hash changes
    window.addEventListener('hashchange', () => {
      const mode = this.getInitialMode();
      const module = this.getViewFromHash();
      this.currentMode = mode;
      this.currentAppModule = module;
      this.render();
      this.checkDeepLinks();
    });

    // Keyboard shortcut for Cmd+K / Ctrl+K
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.commandPalette.open();
      }
    });

    this.checkDeepLinks();

    // Initial Animated Counters
    setTimeout(() => {
      this.runAnimatedCounters();
    }, 150);
  }

  checkDeepLinks() {
    const rawHash = window.location.hash;
    if (rawHash.includes('inspect=')) {
      const ordId = rawHash.split('inspect=')[1].split('&')[0];
      const ord = {
        id: ordId,
        date: "2026-09-24 19:42",
        customer: { name: "Rohan Singhania", phone: "+91 98201 44821", email: "rohan.s@gmail.com", address: "Flat 802, Silver Arch Heights, Bandra West", city: "Mumbai", state: "Maharashtra", pincode: "400050", totalOrders: 14, totalSpend: "₹38,450", rtoRisk: "LOW" },
        items: [{ name: "Apex Carbon Elite Running Shoes - Olive", sku: "AC-RN-09-OLV", qty: 1, price: "₹4,299", hsn: "640411" }],
        amount: "₹7,297",
        subtotal: "₹7,297",
        tax: "₹782",
        shippingFee: "₹0",
        payment: { type: "Prepaid", gateway: "Razorpay (UPI)", transactionId: "pay_Rzp99281741", status: "PAID" },
        channel: "Shopify - Apex Athletics",
        warehouse: "Mumbai Central Mega Hub (Bhiwandi)",
        status: "Out for Delivery",
        shipment: { awb: "DEL882941029", courier: "Delhivery Express", deadWeight: "0.85 kg", volWeight: "1.10 kg", edd: "Today by 21:00", events: [{ time: "16:15", title: "Out for Delivery", desc: "Assigned to delivery agent Vikram Yadav" }] }
      };
      setTimeout(() => this.orderDrawer.open(ord), 250);
    } else if (rawHash.includes('palette=open')) {
      setTimeout(() => this.commandPalette.open(), 250);
    }
  }

  setMode(mode) {
    this.currentMode = mode;
    document.body.className = `mode-${mode}`;
    if (mode === 'app') {
      window.location.hash = `#/${this.currentAppModule}`;
    } else {
      window.location.hash = '';
    }
    this.render();
    if (mode === 'story') {
      setTimeout(() => this.runAnimatedCounters(), 150);
    }
  }

  navigateAppModule(module) {
    this.currentAppModule = module;
    window.location.hash = `#/${module}`;
    this.render();
  }

  render() {
    // Render Header
    renderHeader(this.headerMount, {
      currentMode: this.currentMode,
      onToggleMode: (mode) => this.setMode(mode),
      onOpenCommandPalette: () => this.commandPalette.open(),
      onNavigateToSection: (sectionId) => {
        if (sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    // Render Body according to Mode
    if (this.currentMode === 'story') {
      this.renderStoryMode();
    } else {
      this.renderAppMode();
    }
  }

  renderStoryMode() {
    this.mainContainer.innerHTML = '';
    const storyDiv = document.createElement('div');
    storyDiv.id = 'showcase-root';
    this.mainContainer.appendChild(storyDiv);

    renderShowcaseView(storyDiv, {
      onLaunchApp: () => this.setMode('app'),
      onOpenOrder: (order) => this.orderDrawer.open(order),
      onAction: (action, payload) => this.handleAction(action, payload),
      onNavigateToModule: (module) => {
        this.currentAppModule = module;
        this.setMode('app');
      }
    });
  }

  renderAppMode() {
    this.mainContainer.innerHTML = `
      <div class="app-os-shell">
        <div id="os-sidebar-mount"></div>
        <main class="app-os-viewport" id="os-viewport-mount"></main>
      </div>
    `;

    const sidebarMount = document.getElementById('os-sidebar-mount');
    const viewportMount = document.getElementById('os-viewport-mount');

    renderSidebar(sidebarMount, {
      currentView: this.currentAppModule,
      onNavigate: (module) => this.navigateAppModule(module),
      isCollapsed: this.isSidebarCollapsed,
      onToggleCollapse: () => {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
        this.renderAppMode();
      }
    });

    const handlers = {
      onNavigate: (module) => this.navigateAppModule(module),
      onOpenOrder: (order) => this.orderDrawer.open(order),
      onAction: (action, payload) => this.handleAction(action, payload)
    };

    switch (this.currentAppModule) {
      case 'dashboard':
        renderDashboardView(viewportMount, handlers);
        break;
      case 'orders':
        renderOrdersView(viewportMount, handlers);
        break;
      case 'shipments':
        renderShipmentsView(viewportMount, handlers);
        break;
      case 'ndr':
        renderNDRView(viewportMount, handlers);
        break;
      case 'weight':
        renderWeightView(viewportMount, handlers);
        break;
      case 'couriers':
        renderCouriersView(viewportMount, handlers);
        break;
      case 'warehouses':
        renderWarehousesView(viewportMount, handlers);
        break;
      case 'customers':
        renderCustomersView(viewportMount, handlers);
        break;
      case 'finance':
        renderFinanceView(viewportMount, handlers);
        break;
      case 'marketing':
        renderMarketingView(viewportMount, handlers);
        break;
      case 'analytics':
        renderAnalyticsView(viewportMount, handlers);
        break;
      case 'ai-insights':
        renderAIInsightsView(viewportMount, handlers);
        break;
      case 'ai-chat':
        renderAIChatView(viewportMount, handlers);
        break;
      case 'settings':
        renderSettingsView(viewportMount, handlers);
        break;
      default:
        renderDashboardView(viewportMount, handlers);
    }
  }

  handleAction(action, payload) {
    if (action === 'whatsapp-ndr') {
      this.actionModals.openWhatsAppNDR(payload);
    } else if (action === 'call-customer') {
      this.actionModals.openCallModal(payload);
    } else if (action === 'dispute-weight') {
      this.actionModals.openWeightDisputeModal();
    } else if (action === 'export-orders') {
      this.actionModals.openExportModal();
    } else if (action === 'command-palette') {
      this.commandPalette.open();
    }
  }

  runAnimatedCounters() {
    const counterEls = document.querySelectorAll('.count-up');
    counterEls.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const format = el.getAttribute('data-format');
      if (isNaN(target)) return;

      const duration = 1400; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeProgress;

        if (format === 'inr-cr') {
          el.textContent = `₹${(currentVal / 10000000).toFixed(2)} Cr`;
        } else if (format === 'pct') {
          el.textContent = `${currentVal.toFixed(1)}%`;
        } else if (format === 'multiplier') {
          el.textContent = `${currentVal.toFixed(2)}x`;
        } else {
          el.textContent = Math.round(currentVal).toLocaleString('en-IN');
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  refresh() {
    this.render();
  }
}

// Boot Application
document.addEventListener('DOMContentLoaded', () => {
  window.__ECOMIQ__ = new EcomIQApp();
});
