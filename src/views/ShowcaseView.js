// EcomIQ Product Storytelling & Interactive Showcase View
// Inspired by high-end commerce technology products like QuickFlo

import { MOCK_KPIS, MOCK_AI_INSIGHTS, MOCK_COURIERS, MOCK_MARKETING, MOCK_ORDERS } from '../data/mockData.js';
import { RevenueChart } from '../components/Charts.js';

export function renderShowcaseView(container, { onLaunchApp, onOpenOrder, onAction, onNavigateToModule }) {
  const kpis = MOCK_KPIS;
  const aiFirst = MOCK_AI_INSIGHTS[0];

  container.innerHTML = `
    <div class="showcase-container">
      <!-- Ambient Colorful Background Meshes -->
      <div class="ambient-glow-wrapper">
        <div class="glow-blob-coral"></div>
        <div class="glow-blob-cobalt"></div>
        <div class="glow-blob-violet"></div>
      </div>

      <!-- ===================================================================
           1. HERO SECTION (EDITORIAL + FLOATING 3D APPLICATION WINDOW)
           =================================================================== -->
      <section class="hero-showcase-section">
        <div class="hero-pill-badge">
          <span class="live-pulse-green"></span>
          <span>ENTERPRISE COMMERCE INTELLIGENCE • LIVE ENGINE</span>
        </div>

        <h1 class="hero-main-heading">
          ECOMIQ<br />
          <span class="highlight-gradient">Commerce intelligence,</span><br />
          without the noise.
        </h1>

        <p class="hero-sub-description">
          Turn orders, logistics, finance and marketing data into decisions your team can act on. From last-mile NDR recovery to courier reconciliation and blended ROAS.
        </p>

        <div class="hero-cta-buttons">
          <button class="btn btn-primary btn-lg" id="hero-explore-btn">
            Explore Live Intelligence ↓
          </button>
          <button class="btn btn-secondary btn-lg" id="hero-launch-os-btn">
            Launch Command Center OS ↗
          </button>
        </div>

        <!-- Floating Application Window with Animated Metrics & Floating Badges -->
        <div class="hero-window-wrapper">
          <!-- Floating Badge 1 (Revenue) -->
          <div class="floating-metric-badge floating-badge-1">
            <div style="width:34px; height:34px; border-radius:8px; background:var(--color-coral-light); display:flex; align-items:center; justify-content:center; color:var(--color-coral);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <div>
              <div style="font-family:var(--font-display); font-weight:800; font-size:15px; color:var(--text-primary);">+18.4% Revenue</div>
              <div style="font-size:11px; color:var(--text-tertiary);">₹2.48 Cr MTD pacing</div>
            </div>
          </div>

          <!-- Floating Badge 2 (Delivery SLA) -->
          <div class="floating-metric-badge floating-badge-2">
            <div style="width:34px; height:34px; border-radius:8px; background:var(--color-ops-light); display:flex; align-items:center; justify-content:center; color:var(--color-cobalt);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <div style="font-family:var(--font-display); font-weight:800; font-size:15px; color:var(--text-primary);">91.7% Delivery</div>
              <div style="font-size:11px; color:var(--text-tertiary);">Delhivery & BlueDart Air</div>
            </div>
          </div>

          <!-- Floating Badge 3 (NDR Recovery) -->
          <div class="floating-metric-badge floating-badge-3">
            <div style="width:34px; height:34px; border-radius:8px; background:var(--color-warning-bg); display:flex; align-items:center; justify-content:center; color:#B45309;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div>
              <div style="font-family:var(--font-display); font-weight:800; font-size:15px; color:var(--text-primary);">₹3.8L Recovery</div>
              <div style="font-size:11px; color:var(--text-tertiary);">284 Maharashtra consignments</div>
            </div>
          </div>

          <!-- Floating Badge 4 (ROAS) -->
          <div class="floating-metric-badge floating-badge-4">
            <div style="width:34px; height:34px; border-radius:8px; background:var(--color-violet-light); display:flex; align-items:center; justify-content:center; color:var(--color-violet);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            <div>
              <div style="font-family:var(--font-display); font-weight:800; font-size:15px; color:var(--text-primary);">4.82x ROAS</div>
              <div style="font-size:11px; color:var(--text-tertiary);">Blended Meta + Google Ads</div>
            </div>
          </div>

          <!-- The Floating App Window Itself -->
          <div class="floating-app-window">
            <div class="window-chrome-bar">
              <div class="window-dots">
                <span class="window-dot red"></span>
                <span class="window-dot yellow"></span>
                <span class="window-dot green"></span>
              </div>
              <div class="window-title-address">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>app.ecomiq.internal/workspace/apex-global</span>
              </div>
              <div class="window-action-pills">
                <button class="btn btn-secondary btn-sm" id="window-launch-app-btn">Full Workspace →</button>
              </div>
            </div>

            <!-- Inner Window Content -->
            <div class="window-preview-content">
              <!-- Top Animated Counter Strip -->
              <div class="preview-top-kpi-strip">
                <div class="kpi-main-col">
                  <div class="kpi-title-small">Consolidated Gross Revenue</div>
                  <div class="kpi-huge-number">
                    <span class="count-up" data-target="24824500" data-format="inr-cr">₹2.48 Cr</span>
                    <span class="badge badge-success" style="font-size:12px;">+18.4%</span>
                  </div>
                  <div style="font-size:11px; color:var(--text-tertiary); margin-top:2px; font-family:var(--font-mono);">
                    Pacing to ₹2.84 Cr Projected MTD
                  </div>
                </div>

                <div class="kpi-sub-col">
                  <div class="kpi-title-small">Total Orders</div>
                  <div class="kpi-sub-number count-up" data-target="18429" data-format="num">18,429</div>
                  <div style="font-size:11px; color:var(--color-mint); font-family:var(--font-mono);">+14.2% MoM</div>
                </div>

                <div class="kpi-sub-col">
                  <div class="kpi-title-small">Delivery Success</div>
                  <div class="kpi-sub-number count-up" data-target="91.7" data-format="pct">91.7%</div>
                  <div style="font-size:11px; color:var(--color-mint); font-family:var(--font-mono);">Ind. Avg: 84.2%</div>
                </div>

                <div class="kpi-sub-col">
                  <div class="kpi-title-small">RTO Rate</div>
                  <div class="kpi-sub-number count-up" data-target="3.1" data-format="pct">3.1%</div>
                  <div style="font-size:11px; color:var(--color-mint); font-family:var(--font-mono);">-0.8% Drop</div>
                </div>

                <div class="kpi-sub-col">
                  <div class="kpi-title-small">Blended ROAS</div>
                  <div class="kpi-sub-number count-up" data-target="4.82" data-format="multiplier">4.82x</div>
                  <div style="font-size:11px; color:var(--color-violet); font-family:var(--font-mono);">CAC: ₹218</div>
                </div>
              </div>

              <!-- Interactive Revenue Chart in Window -->
              <div class="preview-chart-box">
                <div class="preview-chart-header">
                  <div>
                    <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">
                      Revenue & Dispatch Velocity
                    </div>
                    <div style="font-size:12px; color:var(--text-tertiary);">
                      Live hourly telemetry compared with previous 30-day baseline
                    </div>
                  </div>
                  <div class="chart-pills-row" id="hero-chart-pills">
                    <button class="chart-pill-btn" data-tf="today">Today</button>
                    <button class="chart-pill-btn" data-tf="7d">7D</button>
                    <button class="chart-pill-btn active" data-tf="30d">30D</button>
                  </div>
                </div>
                <div id="hero-revenue-chart-mount" style="height: 240px; width:100%;"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           2. SECTION: SEE WHAT'S HAPPENING (INTERACTIVE METRIC SLICING)
           =================================================================== -->
      <section class="story-section" id="section-metrics">
        <div class="section-header-block">
          <div class="section-tag-pill tag-ops">REAL-TIME VISIBILITY</div>
          <h2 class="section-headline">SEE WHAT’S HAPPENING.</h2>
          <p class="section-subhead">
            Your brand’s pulse across revenue, dispatch, delivery success, NDR exceptions, and ad attribution — updated every 14 milliseconds.
          </p>
        </div>

        <!-- 6 Interactive Metric Cards -->
        <div class="metric-explorer-grid">
          <div class="metric-interactive-card card-revenue active-card" data-metric="revenue">
            <div class="card-top-row">
              <span class="card-label">Revenue MTD</span>
              <span class="badge badge-success">+18.4%</span>
            </div>
            <div class="card-val">₹2.48 Cr</div>
            <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">Target: ₹2.80 Cr (88.6%)</div>
          </div>

          <div class="metric-interactive-card card-ops" data-metric="orders">
            <div class="card-top-row">
              <span class="card-label">Total Orders</span>
              <span class="badge badge-ops">+14.2%</span>
            </div>
            <div class="card-val">18,429</div>
            <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">AOV: ₹1,346</div>
          </div>

          <div class="metric-interactive-card card-delivery" data-metric="delivery">
            <div class="card-top-row">
              <span class="card-label">Delivery Rate</span>
              <span class="badge badge-delivered">SLA MET</span>
            </div>
            <div class="card-val" style="color:var(--color-mint-dark);">91.7%</div>
            <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">16,636 consignments delivered</div>
          </div>

          <div class="metric-interactive-card card-ndr" data-metric="ndr">
            <div class="card-top-row">
              <span class="card-label">NDR Exceptions</span>
              <span class="badge badge-warning">184 ACTION</span>
            </div>
            <div class="card-val" style="color:#B45309;">6.2%</div>
            <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">₹3.8L revenue at risk</div>
          </div>

          <div class="metric-interactive-card card-rto" data-metric="rto">
            <div class="card-top-row">
              <span class="card-label">Return to Origin</span>
              <span class="badge badge-delivered">-0.8% MoM</span>
            </div>
            <div class="card-val" style="color:var(--color-cobalt);">3.1%</div>
            <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">Industry benchmark: 6.8%</div>
          </div>

          <div class="metric-interactive-card card-roas" data-metric="roas">
            <div class="card-top-row">
              <span class="card-label">Blended ROAS</span>
              <span class="badge badge-ai">SCALE READY</span>
            </div>
            <div class="card-val" style="color:var(--color-ai-purple);">4.82x</div>
            <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">₹32.8L ad spend / ₹1.58 Cr</div>
          </div>
        </div>

        <!-- Spotlight Card reacting to hover -->
        <div class="active-metric-spotlight" id="metric-spotlight-box">
          <div class="spotlight-left">
            <div class="spotlight-metric-title" id="spotlight-title">Gross Revenue (MTD)</div>
            <div class="spotlight-metric-desc" id="spotlight-desc">
              Gross sales across Shopify (Apex Athletics & Kavya Organics), Amazon IN, and WooCommerce storefronts. Net of cancelled orders, verified via Razorpay & PayU escrow webhooks.
            </div>
          </div>
          <div style="text-align:right;">
            <div class="spotlight-metric-badge-large" id="spotlight-val">₹2,48,24,500</div>
            <div style="font-size:12px; color:var(--color-mint-dark); font-weight:700;">+₹38.6L vs Last Month's Baseline</div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           3. SECTION: KNOW WHAT CHANGED (PROGRESSIVE AI INTELLIGENCE)
           =================================================================== -->
      <section class="story-section" id="section-ai">
        <div class="section-header-block">
          <div class="section-tag-pill tag-ai">SYNTHETIC ROOT-CAUSE DETECTION</div>
          <h2 class="section-headline">KNOW WHAT CHANGED.</h2>
          <p class="section-subhead">
            EcomIQ automatically monitors 42 operational vectors. When anomalies occur, our neural rules engine breaks down the observation, root cause, revenue impact, and resolution playbook.
          </p>
        </div>

        <!-- Progressive AI Flow Sequence -->
        <div class="progressive-ai-wrapper">
          <div class="ai-header-row">
            <div style="display:flex; align-items:center; gap:10px;">
              <span class="badge badge-danger">CRITICAL ALERT</span>
              <span style="font-family:var(--font-display); font-size:18px; font-weight:800; color:var(--text-primary);">
                NDR INCREASED 18.4% IN MAHARASHTRA HUBS
              </span>
            </div>
            <span style="font-family:var(--font-mono); font-size:12px; color:var(--text-tertiary);">Flagged 14m ago • Delhivery Bhiwandi Dock</span>
          </div>

          <div class="ai-flow-steps-grid">
            <!-- Step 1: Observation -->
            <div class="ai-step-card">
              <span class="ai-step-num step-1">1. OBSERVATION</span>
              <div class="ai-step-title">What Changed?</div>
              <p class="ai-step-desc">
                Non-Delivery Reports (NDR) rose from 4.2% to 6.2% across Pune (4110xx) and Thane (4006xx) over the past 36 hours.
              </p>
            </div>

            <!-- Step 2: Explanation -->
            <div class="ai-step-card">
              <span class="ai-step-num step-2">2. ROOT CAUSE</span>
              <div class="ai-step-title">Why Did It Happen?</div>
              <p class="ai-step-desc">
                Delhivery Bhiwandi hub sorting delay + driver shift timeouts. 68% of delivery tickets were marked "Customer Unavailable" prematurely.
              </p>
            </div>

            <!-- Step 3: Impact -->
            <div class="ai-step-card">
              <span class="ai-step-num step-3">3. BUSINESS IMPACT</span>
              <div class="ai-step-title">What is at Risk?</div>
              <p class="ai-step-desc">
                <strong>284 shipments affected</strong><br />
                <span style="color:var(--color-danger); font-weight:700; font-family:var(--font-mono);">₹3,84,200 potential GMV</span> at risk of reverse logistics RTO penalties.
              </p>
            </div>

            <!-- Step 4: Action -->
            <div class="ai-step-card" style="border: 2px solid var(--color-mint-dark);">
              <span class="ai-step-num step-4">4. RECOMMENDED PLAYBOOK</span>
              <div class="ai-step-title">What Should You Do?</div>
              <p class="ai-step-desc">
                Trigger automated WhatsApp re-slotting flow and route 112 urgent packages to BlueDart express re-attempt.
              </p>
              <button class="btn btn-primary btn-sm" id="ai-trigger-playbook-btn" style="margin-top:auto;">
                Review NDR & Trigger Playbook →
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           4. SECTION: ACT BEFORE IT BECOMES A PROBLEM (NDR GRAPH)
           =================================================================== -->
      <section class="story-section" id="section-ndr">
        <div class="section-header-block">
          <div class="section-tag-pill tag-revenue">EXCEPTION INTERVENTION</div>
          <h2 class="section-headline">ACT BEFORE IT BECOMES A PROBLEM.</h2>
          <p class="section-subhead">
            Don't wait for couriers to ship items back. EcomIQ connects failed delivery signals directly to customer WhatsApp verification and driver re-slotting.
          </p>
        </div>

        <div class="ndr-flow-graph-container">
          <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.08em;">
            LIVE EXCEPTION RECOVERY TOPOLOGY (CLICK ANY NODE TO INSPECT)
          </div>

          <div class="node-graph-horizontal" id="ndr-node-graph">
            <div class="graph-node active-node" data-node="alert">
              <div style="font-size:10px; color:var(--color-danger); font-weight:700;">STEP 1: SIGNAL</div>
              <div style="font-family:var(--font-display); font-weight:700; font-size:14px; color:var(--text-primary);">NDR Triggered</div>
              <div style="font-size:11px; color:var(--text-secondary); font-family:var(--font-mono);">AWB #DEL882939811</div>
            </div>

            <div class="graph-arrow-connector">→</div>

            <div class="graph-node" data-node="customer">
              <div style="font-size:10px; color:var(--color-cobalt); font-weight:700;">STEP 2: CONSIGNEE</div>
              <div style="font-family:var(--font-display); font-weight:700; font-size:14px; color:var(--text-primary);">Pooja Deshmukh</div>
              <div style="font-size:11px; color:var(--text-secondary); font-family:var(--font-mono);">+91 97654 88319</div>
            </div>

            <div class="graph-arrow-connector">→</div>

            <div class="graph-node" data-node="courier">
              <div style="font-size:10px; color:var(--color-violet); font-weight:700;">STEP 3: CARRIER</div>
              <div style="font-family:var(--font-display); font-weight:700; font-size:14px; color:var(--text-primary);">Delhivery Surface</div>
              <div style="font-size:11px; color:var(--text-secondary);">Pune Hadapsar Hub</div>
            </div>

            <div class="graph-arrow-connector">→</div>

            <div class="graph-node" data-node="action">
              <div style="font-size:10px; color:var(--color-mint-dark); font-weight:700;">STEP 4: AUTOMATION</div>
              <div style="font-family:var(--font-display); font-weight:700; font-size:14px; color:var(--text-primary);">WhatsApp Flow</div>
              <div style="font-size:11px; color:var(--text-secondary);">1-Click Reschedule + UPI</div>
            </div>
          </div>

          <!-- Dynamic Node Detail Panel -->
          <div class="ndr-node-detail-card" id="ndr-node-detail-box">
            <div>
              <div style="font-family:var(--font-display); font-weight:800; font-size:16px; color:var(--text-primary);" id="node-box-title">
                Delivery Failure: Customer Unavailable / Door Locked
              </div>
              <div style="font-size:12px; color:var(--text-secondary); margin-top:4px;" id="node-box-desc">
                First delivery attempt failed in Magarpatta City, Pune. Order ORD-94280 (₹3,198 Cash on Delivery). 72.4% recovery rate achievable via automated WhatsApp prompt.
              </div>
            </div>
            <div style="display:flex; gap:10px;">
              <button class="btn btn-primary btn-sm" id="node-launch-wa-btn">
                Launch WhatsApp Flow Modal
              </button>
              <button class="btn btn-secondary btn-sm" id="node-inspect-ord-btn">
                Inspect Full Order #ORD-94280
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           5. SECTION: CARRIER INTELLIGENCE (STOP LOSING MONEY ON FREIGHT)
           =================================================================== -->
      <section class="story-section" id="section-couriers">
        <div class="section-header-block">
          <div class="section-tag-pill tag-ops">LOGISTICS BENCHMARKING</div>
          <h2 class="section-headline">STOP LOSING MONEY ON FREIGHT.</h2>
          <p class="section-subhead">
            Compare carrier delivery speeds, NDR attrition, and optical weight scanner overcharges across every courier partner in your contract.
          </p>
        </div>

        <div class="courier-showcase-grid">
          ${MOCK_COURIERS.map(c => `
            <div class="courier-card-visual">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <div style="font-family:var(--font-display); font-weight:800; font-size:16px; color:var(--text-primary);">${c.name}</div>
                  <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">${c.totalShipments} consignments (${c.shipmentShare} share)</div>
                </div>
                <span class="badge ${c.grade.startsWith('A') ? 'badge-delivered' : 'badge-warning'}">${c.grade} (${c.slaAdherence})</span>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; background:var(--bg-canvas-warm); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
                <div>
                  <span style="color:var(--text-tertiary);">Delivery Rate:</span>
                  <div style="font-family:var(--font-mono); font-size:14px; font-weight:700; color:var(--color-mint-dark);">${c.deliveryRate}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">RTO Attrition:</span>
                  <div style="font-family:var(--font-mono); font-size:14px; font-weight:700; color:${parseFloat(c.rtoRate) > 3.5 ? 'var(--color-danger)' : 'var(--text-primary)'};">${c.rtoRate}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Avg Delivery Time:</span>
                  <div style="font-family:var(--font-mono); font-size:14px; font-weight:700; color:var(--text-primary);">${c.avgDeliveryDays}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Cost / Shipment:</span>
                  <div style="font-family:var(--font-mono); font-size:14px; font-weight:700; color:var(--color-cobalt);">${c.costPerShipment}</div>
                </div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px;">
                <span style="color:var(--text-tertiary);">${c.disputedWeightCount} weight disputes flagged</span>
                <span style="font-weight:700; color:var(--color-cobalt); cursor:pointer;" class="jump-courier-btn">Inspect Rules →</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ===================================================================
           6. SECTION: FOLLOW THE MONEY (FINANCIAL FLOW & ESCROW)
           =================================================================== -->
      <section class="story-section" id="section-finance" style="background:var(--bg-surface-cream); border-radius:var(--radius-2xl); padding:60px 40px; margin:40px auto;">
        <div class="section-header-block">
          <div class="section-tag-pill tag-finance">UNIT ECONOMICS & COD ESCROW</div>
          <h2 class="section-headline">FOLLOW THE MONEY.</h2>
          <p class="section-subhead">
            Know exactly where money is generated, what is trapped in courier remittance cycles, and how freight expenses erode net operating margins.
          </p>
        </div>

        <div class="money-flow-grid">
          <!-- Flow 1: Where Money Comes From -->
          <div class="flow-step-box flow-in">
            <div style="font-size:10px; font-weight:700; color:var(--color-mint-dark); text-transform:uppercase; letter-spacing:0.08em;">
              1. WHERE MONEY COMES FROM
            </div>
            <div style="font-family:var(--font-display); font-size:2rem; font-weight:800; color:var(--text-primary);">₹2.48 Cr</div>
            <div style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
              64% Prepaid (Razorpay / UPI)<br />
              36% Cash on Delivery (COD)
            </div>
          </div>

          <!-- Flow 2: Where Money Goes -->
          <div class="flow-step-box flow-out">
            <div style="font-size:10px; font-weight:700; color:var(--color-coral); text-transform:uppercase; letter-spacing:0.08em;">
              2. WHERE MONEY GOES
            </div>
            <div style="font-family:var(--font-display); font-size:2rem; font-weight:800; color:var(--color-coral);">₹18.24 Lakhs</div>
            <div style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
              Forward Freight (68%)<br />
              RTO Return Penalties (14%)<br />
              COD Handling Fees (11%)
            </div>
          </div>

          <!-- Flow 3: What is at Risk -->
          <div class="flow-step-box flow-risk">
            <div style="font-size:10px; font-weight:700; color:#B45309; text-transform:uppercase; letter-spacing:0.08em;">
              3. WHAT IS AT RISK
            </div>
            <div style="font-family:var(--font-display); font-size:2rem; font-weight:800; color:#B45309;">₹42.65 Lakhs</div>
            <div style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
              Uncollected COD orders in transit.<br />
              ₹3.84L in active NDR queue.
            </div>
          </div>

          <!-- Flow 4: What is Available -->
          <div class="flow-step-box flow-available">
            <div style="font-size:10px; font-weight:700; color:var(--color-cobalt); text-transform:uppercase; letter-spacing:0.08em;">
              4. WHAT IS AVAILABLE
            </div>
            <div style="font-family:var(--font-display); font-size:2rem; font-weight:800; color:var(--color-cobalt);">₹14.82 Lakhs</div>
            <div style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
              Prepaid shipping wallet balance.<br />
              ₹18.40L bank remittance due in 48h.
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================================================
           7. SECTION: UNDERSTAND WHAT DRIVES GROWTH (MARKETING ATTRIBUTION)
           =================================================================== -->
      <section class="story-section" id="section-marketing">
        <div class="section-header-block">
          <div class="section-tag-pill tag-ai">PERFORMANCE ATTRIBUTION</div>
          <h2 class="section-headline">UNDERSTAND WHAT DRIVES GROWTH.</h2>
          <p class="section-subhead">
            Connect Meta, Google, and Amazon ad campaigns to final verified delivery outcomes. Stop optimizing for orders that end up as RTO returns.
          </p>
        </div>

        <div class="marketing-cards-grid">
          ${MOCK_MARKETING.map(m => `
            <div class="marketing-card">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <div style="font-family:var(--font-display); font-weight:800; font-size:16px; color:var(--text-primary);">${m.channel}</div>
                  <div style="font-size:11px; color:var(--color-cobalt); font-weight:600; margin-top:2px;">Top: ${m.topCampaign}</div>
                </div>
                <span class="badge ${m.status === 'SCALE' ? 'badge-delivered' : 'badge-warning'}">${m.status}</span>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:var(--bg-canvas-warm); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
                <div>
                  <span style="color:var(--text-tertiary);">Ad Spend:</span>
                  <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${m.spend}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Attributed GMV:</span>
                  <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-cobalt);">${m.revenue}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Reported ROAS:</span>
                  <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-mint-dark);">${m.roas}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Blended CAC:</span>
                  <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${m.cac}</div>
                </div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px;">
                <span style="color:var(--text-tertiary);">${m.orders} paid orders generated</span>
                <span class="badge badge-neutral" style="font-size:10px;">Efficiency: ${m.efficiencyRating}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ===================================================================
           8. SECTION: THE COMPLETE ENTERPRISE OPERATING SYSTEM
           =================================================================== -->
      <section class="story-section" style="text-align:center; align-items:center; background:var(--bg-dark-section); color:#FFFFFF; border-radius:var(--radius-2xl); padding:80px 40px; margin:40px auto;">
        <div class="section-tag-pill" style="background:rgba(59, 75, 247, 0.2); color:#818CF8;">
          FULL OPERATIONAL COMMAND CENTER
        </div>
        <h2 class="section-headline" style="color:#FFFFFF; max-width:840px;">
          EVERY ORDER. EVERY SIGNAL.<br />
          ONE UNIFIED OPERATING SYSTEM.
        </h2>
        <p class="section-subhead" style="color:var(--text-muted); max-width:680px;">
          Take complete control over your dispatch manifest, multi-carrier SLAs, automated NDR WhatsApp playbooks, and shipping charge audits.
        </p>

        <div style="display:flex; gap:16px; margin-top:24px; flex-wrap:wrap; justify-content:center;">
          <button class="btn btn-primary btn-lg" id="footer-launch-app-btn">
            Open EcomIQ Operating System →
          </button>
          <button class="btn btn-secondary btn-lg" id="footer-search-command-btn">
            Launch Command Palette (⌘K)
          </button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px; margin-top:50px; width:100%; max-width:960px;">
          <div class="jump-module-card" data-module="orders" style="background:var(--bg-dark-surface); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--bg-dark-border); cursor:pointer;">
            <div style="font-weight:700; font-size:13px; color:#FFFFFF;">Orders</div>
            <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">18,429 manifest</div>
          </div>
          <div class="jump-module-card" data-module="shipments" style="background:var(--bg-dark-surface); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--bg-dark-border); cursor:pointer;">
            <div style="font-weight:700; font-size:13px; color:#FFFFFF;">Shipments</div>
            <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">Linehaul tracker</div>
          </div>
          <div class="jump-module-card" data-module="ndr" style="background:var(--bg-dark-surface); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--bg-dark-border); cursor:pointer;">
            <div style="font-weight:700; font-size:13px; color:#F59E0B;">NDR Cockpit</div>
            <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">184 exceptions</div>
          </div>
          <div class="jump-module-card" data-module="weight" style="background:var(--bg-dark-surface); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--bg-dark-border); cursor:pointer;">
            <div style="font-weight:700; font-size:13px; color:#F59E0B;">Weight Audit</div>
            <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">89 disputes</div>
          </div>
          <div class="jump-module-card" data-module="couriers" style="background:var(--bg-dark-surface); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--bg-dark-border); cursor:pointer;">
            <div style="font-weight:700; font-size:13px; color:#FFFFFF;">Couriers</div>
            <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">5 carriers</div>
          </div>
          <div class="jump-module-card" data-module="finance" style="background:var(--bg-dark-surface); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--bg-dark-border); cursor:pointer;">
            <div style="font-weight:700; font-size:13px; color:#05D686;">Finance</div>
            <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">COD & Remittance</div>
          </div>
        </div>
      </section>
    </div>
  `;

  // Attach Chart inside Hero Window Preview
  const heroChart = new RevenueChart('hero-revenue-chart-mount');

  // Chart pill switching in hero window
  container.querySelectorAll('#hero-chart-pills .chart-pill-btn').forEach(btn => {
    btn.onclick = () => {
      container.querySelectorAll('#hero-chart-pills .chart-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tf = btn.getAttribute('data-tf');
      heroChart.setTimeframe(tf);
    };
  });

  // Attach Click Handlers
  container.querySelector('#hero-explore-btn').onclick = () => {
    container.querySelector('#section-metrics').scrollIntoView({ behavior: 'smooth' });
  };

  container.querySelector('#hero-launch-os-btn').onclick = onLaunchApp;
  container.querySelector('#window-launch-app-btn').onclick = onLaunchApp;
  container.querySelector('#footer-launch-app-btn').onclick = onLaunchApp;
  container.querySelector('#footer-search-command-btn').onclick = () => onAction('command-palette');

  // Metric Card Hover Interactions
  const metricSpotlightTitle = container.querySelector('#spotlight-title');
  const metricSpotlightDesc = container.querySelector('#spotlight-desc');
  const metricSpotlightVal = container.querySelector('#spotlight-val');

  const metricContextMap = {
    revenue: {
      title: "Consolidated Gross Revenue (MTD)",
      desc: "Gross merchandise value across 4 multi-channel storefronts (Shopify, Amazon IN, WooCommerce). Reconciled with Razorpay, PayU, and carrier COD remitted batches.",
      val: "₹2,48,24,500"
    },
    orders: {
      title: "Order Dispatch Velocity",
      desc: "18,429 orders processed across 4 fulfillment hubs (Bhiwandi, Nelamangala, Gurugram, Dankuni) with 98.4% carrier pickup SLA adherence.",
      val: "18,429 Orders"
    },
    delivery: {
      title: "Delivery Success SLA",
      desc: "16,636 delivered consignments. Industry-leading 91.7% delivery success rate powered by EcomIQ Smart Dynamic Courier Allocation.",
      val: "91.7% (16,636 Delivered)"
    },
    ndr: {
      title: "Non-Delivery Reports (NDR Queue)",
      desc: "184 active delivery exceptions requiring intervention. 68% localized to Maharashtra pin codes. 72.4% recovery rate achieved via automated WhatsApp workflows.",
      val: "6.2% (184 Action Required)"
    },
    rto: {
      title: "Return to Origin (RTO) Attrition",
      desc: "Down 0.8% MoM to an elite 3.1%. Reverse logistics freight charges reduced by ₹1,42,000 via automated pre-dispatch address verification.",
      val: "3.1% (-0.8% MoM Drop)"
    },
    roas: {
      title: "Blended Advertising ROAS",
      desc: "Attributed marketing revenue across Meta Ads (4.85x), Google PMax (5.12x), and Amazon Sponsored Products (3.90x). Blended unit CAC of ₹218.",
      val: "4.82x Blended ROAS"
    }
  };

  container.querySelectorAll('.metric-interactive-card').forEach(card => {
    card.onmouseenter = () => {
      container.querySelectorAll('.metric-interactive-card').forEach(c => c.classList.remove('active-card'));
      card.classList.add('active-card');
      const m = card.getAttribute('data-metric');
      const ctx = metricContextMap[m];
      if (ctx) {
        metricSpotlightTitle.textContent = ctx.title;
        metricSpotlightDesc.textContent = ctx.desc;
        metricSpotlightVal.textContent = ctx.val;
      }
    };
  });

  // AI Playbook CTA
  container.querySelector('#ai-trigger-playbook-btn').onclick = () => {
    onNavigateToModule('ndr');
  };

  // NDR Node Graph Interactive clicks
  const nodeTitle = container.querySelector('#node-box-title');
  const nodeDesc = container.querySelector('#node-box-desc');

  const nodeMap = {
    alert: {
      title: "Delivery Failure: Customer Unavailable / Door Locked",
      desc: "Attempt 1 failed in Magarpatta City, Pune. Order ORD-94280 (₹3,198 COD). 72.4% recovery rate achievable via automated WhatsApp prompt."
    },
    customer: {
      title: "Consignee Profile: Pooja Deshmukh (+91 97654 88319)",
      desc: "Repeat customer with 2 past orders. Destination: House 14B, Marvel Fria, Magarpatta City, Pune — 411028. High COD delivery propensity."
    },
    courier: {
      title: "Carrier Telemetry: Delhivery Surface (AWB: DEL882939811)",
      desc: "Last-mile driver Shift #MH04-891 ran out of shift time. Hub delay recorded at Bhiwandi linehaul center. Rescheduling recommended."
    },
    action: {
      title: "Automated WhatsApp NDR Playbook Ready",
      desc: "Dispatches 1-click interactive prompt with WhatsApp verified badge. Offers customer 1-click morning slot selection or ₹50 discount to pay online via UPI."
    }
  };

  container.querySelectorAll('.graph-node').forEach(node => {
    node.onclick = () => {
      container.querySelectorAll('.graph-node').forEach(n => n.classList.remove('active-node'));
      node.classList.add('active-node');
      const key = node.getAttribute('data-node');
      const data = nodeMap[key];
      if (data) {
        nodeTitle.textContent = data.title;
        nodeDesc.textContent = data.desc;
      }
    };
  });

  container.querySelector('#node-launch-wa-btn').onclick = () => {
    const sampleOrder = MOCK_ORDERS[1];
    onAction('whatsapp-ndr', sampleOrder);
  };

  container.querySelector('#node-inspect-ord-btn').onclick = () => {
    const sampleOrder = MOCK_ORDERS[1];
    onOpenOrder(sampleOrder);
  };

  // Jump to modules
  container.querySelectorAll('.jump-module-card').forEach(el => {
    el.onclick = () => {
      const mod = el.getAttribute('data-module');
      onNavigateToModule(mod);
    };
  });

  container.querySelectorAll('.jump-courier-btn').forEach(btn => {
    btn.onclick = () => onNavigateToModule('couriers');
  });
}
