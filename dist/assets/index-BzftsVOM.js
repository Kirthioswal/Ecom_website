(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();function B(s,{currentMode:e,onToggleMode:t,onOpenCommandPalette:i,onNavigateToSection:a}){s.innerHTML=`
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
      <nav class="header-nav-links" id="header-story-nav" style="${e==="app"?"display:none;":""}">
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
          <button class="mode-pill ${e==="story"?"active":""}" id="mode-story-btn">
            Story Showcase
          </button>
          <button class="mode-pill ${e==="app"?"active":""}" id="mode-app-btn">
            Command Center OS
          </button>
        </div>

        ${e==="story"?`
          <button class="btn btn-primary btn-sm" id="header-cta-launch-btn">
            Launch OS →
          </button>
        `:`
          <button class="btn btn-secondary btn-sm" id="header-cta-story-btn">
            ← Back to Story
          </button>
        `}
      </div>
    </header>
  `,document.getElementById("header-brand-logo-btn").onclick=()=>{e==="app"?t("story"):window.scrollTo({top:0,behavior:"smooth"})},document.getElementById("header-search-command-btn").onclick=i,document.getElementById("mode-story-btn").onclick=()=>t("story"),document.getElementById("mode-app-btn").onclick=()=>t("app");const r=document.getElementById("header-cta-launch-btn");r&&(r.onclick=()=>t("app"));const n=document.getElementById("header-cta-story-btn");n&&(n.onclick=()=>t("story")),s.querySelectorAll(".header-nav-item").forEach(p=>{p.onclick=()=>{s.querySelectorAll(".header-nav-item").forEach(d=>d.classList.remove("active")),p.classList.add("active");const y=p.getAttribute("data-anchor");a(y)}})}function H(s,{currentView:e,onNavigate:t,isCollapsed:i,onToggleCollapse:a}){const r=[{title:"EXECUTIVE",items:[{id:"dashboard",label:"Dashboard",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>'}]},{title:"OPERATIONS",items:[{id:"orders",label:"Orders",counter:"18.4k",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'},{id:"shipments",label:"Shipments",counter:"1.1k",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'},{id:"ndr",label:"NDR Cockpit",counter:"184",counterClass:"alert-danger",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'},{id:"weight",label:"Weight Disputes",counter:"89",counterClass:"alert-warning",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.9 1.4l-2.4 7.4A2 2 0 0 0 4.1 19h15.8a2 2 0 0 0 1.9-2.2l-2.4-7.4A2 2 0 0 0 17.5 8h-11Z"/></svg>'},{id:"couriers",label:"Couriers",counter:"5",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},{id:"warehouses",label:"Warehouses",counter:"4",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M3 7v14"/><path d="M21 7v14"/><path d="M19 7 12 3 5 7"/></svg>'}]},{title:"COMMERCIAL",items:[{id:"customers",label:"Customers (360)",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'},{id:"finance",label:"Finance & COD",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'},{id:"marketing",label:"Marketing (ROAS)",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'}]},{title:"INTELLIGENCE",items:[{id:"analytics",label:"Analytics",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'},{id:"ai-insights",label:"AI Insights",counter:"3",counterClass:"alert-ai",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'},{id:"ai-chat",label:"AI Chat Copilot",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'}]},{title:"SYSTEM",items:[{id:"settings",label:"Settings",icon:'<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'}]}];let n="";r.forEach(p=>{n+=`
      <div class="nav-section">
        <div class="nav-section-title">${p.title}</div>
        ${p.items.map(y=>`
          <div class="nav-item ${e===y.id?"active":""}" data-view="${y.id}" title="${y.label}">
            <div class="nav-item-content">
              ${y.icon}
              <span class="nav-label">${y.label}</span>
            </div>
            ${y.counter?`<span class="nav-counter ${y.counterClass||""}">${y.counter}</span>`:""}
          </div>
        `).join("")}
      </div>
    `}),s.innerHTML=`
    <aside class="app-sidebar ${i?"collapsed":""}" id="app-sidebar">
      <div class="sidebar-nav-container">
        ${n}
      </div>
      <div class="sidebar-footer">
        <button class="collapse-btn" id="sidebar-toggle-btn" title="Toggle Sidebar (⌘B)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${i?'<polyline points="9 18 15 12 9 6"/>':'<polyline points="15 18 9 12 15 6"/>'}
          </svg>
          <span>${i?"":"Collapse Menu"}</span>
        </button>
      </div>
    </aside>
  `,s.querySelectorAll(".nav-item").forEach(p=>{p.onclick=()=>{const y=p.getAttribute("data-view");t(y)}}),document.getElementById("sidebar-toggle-btn").onclick=a}const F={stores:[{id:"st_shopify_main",name:"Apex Athletics (Shopify)",platform:"shopify",status:"active",orders24h:842},{id:"st_shopify_beauty",name:"Kavya Organics (Shopify)",platform:"shopify",status:"active",orders24h:512},{id:"st_amazon",name:"Apex Storefront (Amazon IN)",platform:"amazon",status:"active",orders24h:389},{id:"st_woo",name:"Urban Threads (WooCommerce)",platform:"woocommerce",status:"active",orders24h:186}]},I={business:{revenue:"₹2.48 Cr",revenueChange:"+18.4%",targetRevenue:"₹2.80 Cr",targetProgress:88.6,orders:"18,429",ordersChange:"+14.2%",aov:"₹1,346",aovChange:"+3.7%",deliverySuccess:"91.7%",deliveryChange:"+1.8%",rtoRate:"3.1%",rtoChange:"-0.8%"},operations:{inTransit:"1,142",outForDelivery:"364",ndrRate:"5.2%",ndrActionRequired:"184",pickupSuccess:"98.4%",avgDeliveryTime:"2.3 Days",slaAdherence:"94.8%"},finance:{walletBalance:"₹14,82,500",walletThreshold:"₹2,00,000",codOutstanding:"₹42,65,400",codRemittanceDue:"₹18,40,000",shippingSpend:"₹18,24,600",netLogisticsCostRatio:"11.4%",previousLogisticsCostRatio:"12.8%"},marketing:{adSpend:"₹32,84,000",attributedRevenue:"₹1.58 Cr",blendedRoas:"4.82x",blendedCac:"₹218",paidOrders:"12,410",newCustomerPct:"72.4%"}},z={"30d":[{date:"01 Sep",revenue:642e3,prevRevenue:58e4,orders:482,aov:1332},{date:"03 Sep",revenue:712e3,prevRevenue:61e4,orders:531,aov:1340},{date:"05 Sep",revenue:845e3,prevRevenue:69e4,orders:620,aov:1362},{date:"07 Sep",revenue:79e4,prevRevenue:72e4,orders:588,aov:1343},{date:"09 Sep",revenue:89e4,prevRevenue:74e4,orders:654,aov:1360},{date:"11 Sep",revenue:94e4,prevRevenue:81e4,orders:689,aov:1364},{date:"13 Sep",revenue:88e4,prevRevenue:805e3,orders:645,aov:1364},{date:"15 Sep",revenue:104e4,prevRevenue:87e4,orders:760,aov:1368},{date:"17 Sep",revenue:99e4,prevRevenue:89e4,orders:721,aov:1373},{date:"19 Sep",revenue:112e4,prevRevenue:92e4,orders:810,aov:1382},{date:"21 Sep",revenue:118e4,prevRevenue:96e4,orders:855,aov:1380},{date:"23 Sep",revenue:124e4,prevRevenue:99e4,orders:902,aov:1374},{date:"24 Sep",revenue:131e4,prevRevenue:102e4,orders:965,aov:1357}],"7d":[{date:"18 Sep",revenue:96e4,prevRevenue:84e4,orders:708,aov:1355},{date:"19 Sep",revenue:112e4,prevRevenue:92e4,orders:810,aov:1382},{date:"20 Sep",revenue:108e4,prevRevenue:94e4,orders:795,aov:1358},{date:"21 Sep",revenue:118e4,prevRevenue:96e4,orders:855,aov:1380},{date:"22 Sep",revenue:115e4,prevRevenue:98e4,orders:840,aov:1369},{date:"23 Sep",revenue:124e4,prevRevenue:99e4,orders:902,aov:1374},{date:"24 Sep (Today)",revenue:131e4,prevRevenue:102e4,orders:965,aov:1357}],today:[{date:"00:00",revenue:42e3,prevRevenue:35e3,orders:31,aov:1354},{date:"04:00",revenue:18e3,prevRevenue:15e3,orders:13,aov:1384},{date:"08:00",revenue:86e3,prevRevenue:68e3,orders:64,aov:1343},{date:"12:00",revenue:294e3,prevRevenue:245e3,orders:216,aov:1361},{date:"16:00",revenue:462e3,prevRevenue:39e4,orders:341,aov:1354},{date:"20:00",revenue:408e3,prevRevenue:267e3,orders:300,aov:1360}]},L=[{id:"ai_ins_01",severity:"CRITICAL",title:"NDR SURGE IN MAHARASHTRA PINCODES",subtitle:"+18.4% above 7-day operational baseline",timestamp:"14m ago",what:"Non-Delivery Reports (NDR) spiked by 18.4% over the last 36 hours across Pune and Thane suburban hubs.",why:"High COD volume combined with last-mile van dispatch delays at Delhivery Bhiwandi hub (Pincodes 4110xx and 4006xx). 68% of failures cited 'Customer Unavailable'.",impact:{affectedShipments:284,revenueAtRisk:"₹3,84,200",primaryCourier:"Delhivery",paymentMix:"84% COD / 16% Prepaid"},actionablePlaybook:["Auto-trigger WhatsApp automated delivery re-slotting flow with 10% prepaid conversion discount","Route 112 urgent priority consignments to BlueDart Express transit hub","Send alert to Bhiwandi Operations Liaison"],ctaText:"Review NDR & Trigger Playbook",actionTarget:"ndr",filterState:"Maharashtra"},{id:"ai_ins_02",severity:"HIGH",title:"SYSTEMIC WEIGHT OVERCHARGING ON DTDC AIR",subtitle:"89 packages flagged with >400g volumetric discrepancy",timestamp:"1h 12m ago",what:"DTDC billed volumetric weight at 1.25kg vs declared dead weight of 0.65kg for standard t-shirt polybags.",why:"Optical scanner miscalibration at DTDC Nelamangala sorting belt reading soft polybag bulge as rigid cube volume.",impact:{affectedShipments:89,extraBilling:"₹41,200",primaryCourier:"DTDC Express",disputeWindowRemaining:"48 hours"},actionablePlaybook:["Generate auto-compiled photo proof dispute packet with pre-dispatch weights","Auto-file weight dispute tickets in bulk via DTDC Partner API"],ctaText:"Raise Bulk Weight Dispute",actionTarget:"weight",filterState:"Disputed"},{id:"ai_ins_03",severity:"MEDIUM",title:"META ADS CAC ADVISORY — CREATIVE FATIGUE",subtitle:"C412 'Activewear Drops' CAC rose to ₹384 (+44%)",timestamp:"3h ago",what:"Campaign 'AW26 Performance Tees' ROAS dropped from 4.8x to 2.85x over 48 hours.",why:"Frequency reached 4.2 in tier-1 metro audiences; ad creative exhaustion observed.",impact:{dailySpend:"₹45,000",lostContribution:"₹1,12,000",roasDelta:"-1.95x"},actionablePlaybook:["Reallocate ₹25,000 daily budget to high-performing Google PMax search campaign","Swap top creative variations to UGC customer unboxing reel"],ctaText:"Inspect Marketing Allocation",actionTarget:"marketing",filterState:"Meta"}],T=[{id:"delhivery",name:"Delhivery Surface & Express",logoText:"DELHIVERY",status:"HEALTHY",shipmentShare:"42%",totalShipments:7618,pickupSuccess:"98.8%",deliveryRate:"92.4%",ndrRate:"4.8%",rtoRate:"2.8%",avgDeliveryDays:"2.1d",costPerShipment:"₹84.50",disputedWeightCount:18,slaAdherence:"95.6%",grade:"A+"},{id:"bluedart",name:"BlueDart Air Apex",logoText:"BLUEDART",status:"OPTIMAL",shipmentShare:"28%",totalShipments:5080,pickupSuccess:"99.4%",deliveryRate:"95.8%",ndrRate:"2.6%",rtoRate:"1.6%",avgDeliveryDays:"1.4d",costPerShipment:"₹128.00",disputedWeightCount:3,slaAdherence:"98.2%",grade:"A++"},{id:"dtdc",name:"DTDC Priority",logoText:"DTDC",status:"WARNING",shipmentShare:"16%",totalShipments:2902,pickupSuccess:"96.2%",deliveryRate:"88.4%",ndrRate:"7.9%",rtoRate:"4.2%",avgDeliveryDays:"3.2d",costPerShipment:"₹76.20",disputedWeightCount:89,slaAdherence:"87.4%",grade:"B"},{id:"shadowfax",name:"Shadowfax Hyperlocal & Direct",logoText:"SHADOWFAX",status:"HEALTHY",shipmentShare:"9%",totalShipments:1632,pickupSuccess:"97.6%",deliveryRate:"91.2%",ndrRate:"5.1%",rtoRate:"3.4%",avgDeliveryDays:"1.8d",costPerShipment:"₹82.00",disputedWeightCount:12,slaAdherence:"93.1%",grade:"A"},{id:"xpressbees",name:"Xpressbees Logistics",logoText:"XPRESSBEES",status:"WATCHLIST",shipmentShare:"5%",totalShipments:910,pickupSuccess:"95.1%",deliveryRate:"86.8%",ndrRate:"8.4%",rtoRate:"4.9%",avgDeliveryDays:"3.4d",costPerShipment:"₹74.00",disputedWeightCount:22,slaAdherence:"84.9%",grade:"C+"}],w=[{id:"ORD-94281",date:"2026-09-24 19:42",customer:{name:"Rohan Singhania",email:"rohan.s@gmail.com",phone:"+91 98201 44821",city:"Mumbai",state:"Maharashtra",pincode:"400050",address:"Flat 802, Silver Arch Heights, Bandra West",totalOrders:14,totalSpend:"₹38,450",rtoRisk:"LOW"},items:[{name:"Apex Carbon Elite Running Shoes - Olive",sku:"AC-RN-09-OLV",qty:1,price:"₹4,299",hsn:"640411",img:"running_shoe"},{name:"Pro Aero Seamless Tee - Charcoal",sku:"PA-TEE-02-CHR",qty:2,price:"₹1,499",hsn:"610910",img:"sport_tee"}],itemSummary:"Apex Carbon Elite Running Shoes + 2 items",amount:"₹7,297",subtotal:"₹7,297",discount:"₹0",tax:"₹782 (12% GST)",shippingFee:"₹0 (Free Express)",payment:{type:"Prepaid",gateway:"Razorpay (UPI / HDFC Bank)",transactionId:"pay_Rzp99281741",status:"PAID"},channel:"Shopify - Apex Athletics",warehouse:"Mumbai Central Mega Hub (Bhiwandi)",shipment:{awb:"DEL882941029",courier:"Delhivery Express",status:"Out for Delivery",deadWeight:"0.85 kg",volWeight:"1.10 kg",edd:"2026-09-24 (Today by 21:00)",events:[{time:"2026-09-24 16:15",title:"Out for Delivery",desc:"Assigned to delivery agent Vikram Yadav (+91 91234 56789). Van route #MH04-891",status:"active"},{time:"2026-09-24 07:30",title:"Arrived at Delivery Facility",desc:"Bandra Delivery Sub-center Hub, Mumbai",status:"done"},{time:"2026-09-23 22:45",title:"In Transit",desc:"Departed sorting facility Bhiwandi Linehaul 12",status:"done"},{time:"2026-09-23 18:30",title:"Picked Up",desc:"Package scanned and manifested at Warehouse Origin",status:"done"},{time:"2026-09-23 15:10",title:"AWB Generated & Label Printed",desc:"AWB #DEL882941029 allocated via Smart Courier Routing",status:"done"},{time:"2026-09-23 14:50",title:"Order Confirmed",desc:"Payment verified via Razorpay UPI webhook",status:"done"}]},status:"Out for Delivery",isPriority:!0},{id:"ORD-94280",date:"2026-09-24 18:15",customer:{name:"Pooja Deshmukh",email:"pooja.d@yahoo.com",phone:"+91 97654 88319",city:"Pune",state:"Maharashtra",pincode:"411028",address:"House 14B, Marvel Fria, Magarpatta City",totalOrders:2,totalSpend:"₹3,998",rtoRisk:"HIGH"},items:[{name:"Ultra Ribbed Workout Set - Forest Green",sku:"WS-RB-GRN-M",qty:1,price:"₹2,499",hsn:"610822",img:"workout_set"},{name:"Anti-Slip Studio Grip Socks (Pack of 3)",sku:"SK-GRP-3PK",qty:1,price:"₹699",hsn:"611595",img:"socks"}],itemSummary:"Ultra Ribbed Workout Set + 1 item",amount:"₹3,198",subtotal:"₹3,198",discount:"₹0",tax:"₹342",shippingFee:"₹0",payment:{type:"COD",gateway:"Cash on Delivery",transactionId:"COD-VERIFIED-OTP",status:"PENDING_COLLECTION"},channel:"Shopify - Apex Athletics",warehouse:"Mumbai Central Mega Hub (Bhiwandi)",shipment:{awb:"DEL882939811",courier:"Delhivery Surface",status:"NDR",deadWeight:"0.62 kg",volWeight:"0.75 kg",edd:"2026-09-24 (Delayed)",ndrReason:"Customer Unavailable - Door Locked / Phone Unreachable",ndrAttempt:1,ndrAge:"4h 20m",events:[{time:"2026-09-24 15:40",title:"Delivery Failed - NDR Triggered",desc:"Customer Unavailable at Magarpatta destination. Automated NDR verification required.",status:"alert"},{time:"2026-09-24 09:15",title:"Out for Delivery",desc:"Assigned to courier agent Swapnil G.",status:"done"},{time:"2026-09-23 20:00",title:"Arrived at Pune Hub",desc:"Pune Hadapsar Regional Facility",status:"done"},{time:"2026-09-22 17:30",title:"Dispatched from Bhiwandi",desc:"Linehaul express truck departed",status:"done"}]},status:"NDR",isPriority:!0},{id:"ORD-94279",date:"2026-09-24 17:02",customer:{name:"Ananya Mehra",email:"ananya.m@outlook.com",phone:"+91 99102 33491",city:"New Delhi",state:"Delhi",pincode:"110017",address:"C-44, Panchsheel Enclave, Malviya Nagar",totalOrders:9,totalSpend:"₹24,800",rtoRisk:"LOW"},items:[{name:"Radiance Vitamin C Serum (50ml)",sku:"KO-SER-VITC",qty:2,price:"₹1,899",hsn:"330499",img:"serum"},{name:"Peptide Night Repair Barrier Cream",sku:"KO-CRM-BAR",qty:1,price:"₹2,150",hsn:"330499",img:"cream"}],itemSummary:"Radiance Vitamin C Serum (x2) + 1 item",amount:"₹5,948",subtotal:"₹5,948",discount:"₹0",tax:"₹1,070 (18% GST)",shippingFee:"₹0 (Complimentary)",payment:{type:"Prepaid",gateway:"Razorpay (Credit Card)",transactionId:"pay_Rzp88419202",status:"PAID"},channel:"Shopify - Kavya Organics",warehouse:"Delhi NCR Mega Hub (Gurugram)",shipment:{awb:"BLU773820194",courier:"BlueDart Air Apex",status:"Delivered",deadWeight:"0.45 kg",volWeight:"0.50 kg",edd:"2026-09-24",events:[{time:"2026-09-24 16:45",title:"Delivered Successfully",desc:"Delivered to Ananya Mehra (Signature: Verified via OTP 4921)",status:"done"},{time:"2026-09-24 11:20",title:"Out for Delivery",desc:"BlueDart Courier Associate Deepak Kumar",status:"done"},{time:"2026-09-24 06:10",title:"Arrived at South Delhi Hub",desc:"Okhla Sorting Center",status:"done"}]},status:"Delivered",isPriority:!1},{id:"ORD-94278",date:"2026-09-24 15:30",customer:{name:"Karthik Venkataraman",email:"karthik.v@techcorp.in",phone:"+91 98450 11993",city:"Bengaluru",state:"Karnataka",pincode:"560103",address:"Villa 22, Greenwood Palms, Sarjapur Road",totalOrders:21,totalSpend:"₹62,100",rtoRisk:"LOW"},items:[{name:"Thermal Tech Zip Jacket - Stealth Black",sku:"TH-JKT-01-BLK",qty:1,price:"₹3,999",hsn:"620190",img:"jacket"}],itemSummary:"Thermal Tech Zip Jacket - Stealth Black",amount:"₹3,999",subtotal:"₹3,999",discount:"₹0",tax:"₹428",shippingFee:"₹0",payment:{type:"Prepaid",gateway:"PayU (NetBanking - ICICI)",transactionId:"payu_TX9982001",status:"PAID"},channel:"Amazon IN - Apex Direct",warehouse:"Bengaluru North Fulfillment (Nelamangala)",shipment:{awb:"BLU773819442",courier:"BlueDart Air Apex",status:"In Transit",deadWeight:"0.78 kg",volWeight:"0.85 kg",edd:"2026-09-25",events:[{time:"2026-09-24 17:00",title:"In Transit to Regional Delivery Hub",desc:"Nelamangala Hub to Bellandur Delivery Hub",status:"active"},{time:"2026-09-24 15:45",title:"Package Manifested & Handed to BlueDart",desc:"Scanned on loading ramp dock #3",status:"done"}]},status:"In Transit",isPriority:!1},{id:"ORD-94277",date:"2026-09-24 14:12",customer:{name:"Siddharth Verma",email:"sid.verma@gmail.com",phone:"+91 98118 77201",city:"Gurugram",state:"Haryana",pincode:"122002",address:"Tower 4, Apt 1104, DLF Phase 5",totalOrders:4,totalSpend:"₹9,450",rtoRisk:"MEDIUM"},items:[{name:"AeroVent Tech Shorts - Navy",sku:"AV-SHT-04-NVY",qty:2,price:"₹1,299",hsn:"620343",img:"shorts"},{name:"Quick-Dry Compression Crew Socks",sku:"SK-CMP-WHT",qty:2,price:"₹499",hsn:"611595",img:"socks"}],itemSummary:"AeroVent Tech Shorts (x2) + 2 items",amount:"₹3,596",subtotal:"₹3,596",discount:"₹0",tax:"₹385",shippingFee:"₹0",payment:{type:"COD",gateway:"Cash on Delivery",transactionId:"COD-UNPAID",status:"PENDING_COLLECTION"},channel:"Shopify - Apex Athletics",warehouse:"Delhi NCR Mega Hub (Gurugram)",shipment:{awb:"DTD992144019",courier:"DTDC Priority",status:"Weight Discrepancy",deadWeight:"0.55 kg",volWeight:"1.25 kg",courierChargedWeight:"1.25 kg",overcharge:"₹48.00",edd:"2026-09-25",events:[{time:"2026-09-24 16:30",title:"Weight Discrepancy Flagged by EcomIQ Audit",desc:"DTDC recorded 1.25kg vs declared 0.55kg. Dispute eligible.",status:"alert"},{time:"2026-09-24 15:00",title:"Scanned at DTDC Hub",desc:"Gurugram Sorting Center",status:"done"}]},status:"In Transit",isPriority:!1},{id:"ORD-94276",date:"2026-09-24 12:45",customer:{name:"Tanya Kapoor",email:"tanya.k@icloud.com",phone:"+91 99300 28410",city:"Thane",state:"Maharashtra",pincode:"400607",address:"102 Hiranandani Estate, Ghodbunder Road",totalOrders:1,totalSpend:"₹2,199",rtoRisk:"HIGH"},items:[{name:"Bakuchiol Retinol-Alternative Night Elixir",sku:"KO-ELX-BAK",qty:1,price:"₹2,199",hsn:"330499",img:"serum"}],itemSummary:"Bakuchiol Retinol-Alternative Night Elixir",amount:"₹2,199",subtotal:"₹2,199",discount:"₹0",tax:"₹395",shippingFee:"₹0",payment:{type:"COD",gateway:"Cash on Delivery",transactionId:"COD-ATTEMPTED",status:"PENDING_COLLECTION"},channel:"Shopify - Kavya Organics",warehouse:"Mumbai Central Mega Hub (Bhiwandi)",shipment:{awb:"DEL882937710",courier:"Delhivery Surface",status:"NDR",deadWeight:"0.38 kg",volWeight:"0.45 kg",edd:"2026-09-24",ndrReason:"Incorrect Address / Pincode Mismatch - Building not found",ndrAttempt:2,ndrAge:"7h 15m",events:[{time:"2026-09-24 13:10",title:"Delivery Failed - NDR 2nd Attempt",desc:"Courier could not locate building number on Ghodbunder Road.",status:"alert"},{time:"2026-09-23 14:00",title:"Delivery Failed - NDR 1st Attempt",desc:"Customer requested rescheduled delivery date.",status:"alert"}]},status:"NDR",isPriority:!0},{id:"ORD-94275",date:"2026-09-24 11:20",customer:{name:"Aditya Nambiar",email:"aditya.n@gmail.com",phone:"+91 94471 28490",city:"Kochi",state:"Kerala",pincode:"682025",address:"Plot 88, Panampilly Nagar",totalOrders:6,totalSpend:"₹14,920",rtoRisk:"LOW"},items:[{name:"Urban Linen Oversized Shirt - Ivory",sku:"UT-SH-LIN-IVR",qty:2,price:"₹1,899",hsn:"620520",img:"linen_shirt"}],itemSummary:"Urban Linen Oversized Shirt - Ivory (x2)",amount:"₹3,798",subtotal:"₹3,798",discount:"₹0",tax:"₹406",shippingFee:"₹0",payment:{type:"Prepaid",gateway:"Razorpay (GPay UPI)",transactionId:"pay_Rzp7729104",status:"PAID"},channel:"WooCommerce - Urban Threads",warehouse:"Bengaluru North Fulfillment (Nelamangala)",shipment:{awb:"BLU773812901",courier:"BlueDart Air Apex",status:"In Transit",deadWeight:"0.68 kg",volWeight:"0.80 kg",edd:"2026-09-26",events:[{time:"2026-09-24 14:00",title:"Departed Origin Hub",desc:"Bengaluru Airport Hub flight connected to Kochi",status:"active"}]},status:"In Transit",isPriority:!1},{id:"ORD-94274",date:"2026-09-24 09:40",customer:{name:"Meera Krishnan",email:"meera.k@tcs.com",phone:"+91 98840 91823",city:"Chennai",state:"Tamil Nadu",pincode:"600028",address:"Flat 4A, Ocean View Apartments, RA Puram",totalOrders:11,totalSpend:"₹28,600",rtoRisk:"LOW"},items:[{name:"Apex Kinetic Training Duffel Bag (32L)",sku:"AC-BAG-32L-BLK",qty:1,price:"₹3,499",hsn:"420292",img:"bag"}],itemSummary:"Apex Kinetic Training Duffel Bag (32L)",amount:"₹3,499",subtotal:"₹3,499",discount:"₹0",tax:"₹630 (18% GST)",shippingFee:"₹0",payment:{type:"Prepaid",gateway:"Razorpay (Credit Card)",transactionId:"pay_Rzp6620194",status:"PAID"},channel:"Shopify - Apex Athletics",warehouse:"Bengaluru North Fulfillment (Nelamangala)",shipment:{awb:"SHA661902819",courier:"Shadowfax Direct",status:"Delivered",deadWeight:"1.10 kg",volWeight:"1.40 kg",edd:"2026-09-24",events:[{time:"2026-09-24 15:15",title:"Delivered to Customer",desc:"Handed over to Meera Krishnan",status:"done"}]},status:"Delivered",isPriority:!1},{id:"ORD-94273",date:"2026-09-24 08:15",customer:{name:"Varun Malhotra",email:"varun.m@delhivery.com",phone:"+91 99991 44552",city:"Noida",state:"Uttar Pradesh",pincode:"201301",address:"Plot B-19, Sector 62",totalOrders:3,totalSpend:"₹5,100",rtoRisk:"MEDIUM"},items:[{name:"Moisture Wicking Tank Top - Slate",sku:"MW-TNK-SLT",qty:2,price:"₹999",hsn:"610910",img:"tank"}],itemSummary:"Moisture Wicking Tank Top - Slate (x2)",amount:"₹1,998",subtotal:"₹1,998",discount:"₹0",tax:"₹214",shippingFee:"₹0",payment:{type:"COD",gateway:"Cash on Delivery",transactionId:"COD-REJECTED",status:"RTO_INITIATED"},channel:"Shopify - Apex Athletics",warehouse:"Delhi NCR Mega Hub (Gurugram)",shipment:{awb:"DEL882928810",courier:"Delhivery Surface",status:"RTO",deadWeight:"0.40 kg",volWeight:"0.45 kg",edd:"Returned",rtoReason:"Customer Refused at Doorstep - Claimed Did Not Order",events:[{time:"2026-09-24 11:00",title:"RTO In Transit to Warehouse",desc:"Return consignment initiated back to Gurugram Hub",status:"alert"},{time:"2026-09-24 09:30",title:"Customer Refusal Documented",desc:"Consignee rejected delivery package",status:"alert"}]},status:"RTO",isPriority:!1},{id:"ORD-94272",date:"2026-09-23 23:10",customer:{name:"Sneha Patel",email:"sneha.p@ahmedabad.org",phone:"+91 98250 33819",city:"Ahmedabad",state:"Gujarat",pincode:"380015",address:"B-501, Iscon Elegance, Satellite Road",totalOrders:7,totalSpend:"₹19,250",rtoRisk:"LOW"},items:[{name:"Centella Asiatica Soothing Gel Mask",sku:"KO-MSK-CEN",qty:3,price:"₹899",hsn:"330499",img:"mask"},{name:"Ceramide Moisture Lock Mist",sku:"KO-MST-CER",qty:1,price:"₹1,150",hsn:"330499",img:"mist"}],itemSummary:"Centella Asiatica Soothing Gel Mask (x3) + 1 item",amount:"₹3,847",subtotal:"₹3,847",discount:"₹0",tax:"₹692",shippingFee:"₹0",payment:{type:"Prepaid",gateway:"Razorpay (Axis Bank NetBanking)",transactionId:"pay_Rzp5510294",status:"PAID"},channel:"Shopify - Kavya Organics",warehouse:"Mumbai Central Mega Hub (Bhiwandi)",shipment:{awb:"BLU773809918",courier:"BlueDart Air Apex",status:"Delivered",deadWeight:"0.72 kg",volWeight:"0.85 kg",edd:"2026-09-24",events:[{time:"2026-09-24 14:10",title:"Delivered Successfully",desc:"Handed over to Sneha Patel",status:"done"}]},status:"Delivered",isPriority:!1}],W=[{awb:"DEL882939811",orderId:"ORD-94280",customerName:"Pooja Deshmukh",phone:"+91 97654 88319",city:"Pune",state:"Maharashtra",courier:"Delhivery Surface",ndrReason:"Customer Unavailable - Door Locked / Phone Unreachable",attempt:1,ageHours:4.3,status:"ACTION_REQUIRED",orderAmount:"₹3,198",paymentType:"COD",lastActionTaken:"Automated IVR call attempted (No Answer)",recommendedAction:"WhatsApp 1-Click Reschedule + Address Verification"},{awb:"DEL882937710",orderId:"ORD-94276",customerName:"Tanya Kapoor",phone:"+91 99300 28410",city:"Thane",state:"Maharashtra",courier:"Delhivery Surface",ndrReason:"Incorrect Address / Pincode Mismatch",attempt:2,ageHours:7.2,status:"ACTION_REQUIRED",orderAmount:"₹2,199",paymentType:"COD",lastActionTaken:"SMS notification dispatched",recommendedAction:"Request Google Maps Pin via WhatsApp or manual phone call"},{awb:"DTD992144883",orderId:"ORD-94265",customerName:"Harsh Vardhan",phone:"+91 98390 12744",city:"Lucknow",state:"Uttar Pradesh",courier:"DTDC Priority",ndrReason:"COD Cash Not Ready - Customer requested tomorrow delivery",attempt:1,ageHours:11.5,status:"RESCHEDULED",orderAmount:"₹4,499",paymentType:"COD",lastActionTaken:"WhatsApp delivery date re-scheduled to 2026-09-25",recommendedAction:"Auto-send reminder morning of reattempt"},{awb:"XPB551928401",orderId:"ORD-94258",customerName:"Gaurav Sen",phone:"+91 98210 99482",city:"Jaipur",state:"Rajasthan",courier:"Xpressbees Logistics",ndrReason:"Customer Refused - Delivery delayed beyond customer requirement",attempt:2,ageHours:18,status:"AT_RISK_RTO",orderAmount:"₹1,850",paymentType:"COD",lastActionTaken:"Escalated to senior retention agent",recommendedAction:"Offer ₹200 instant discount coupon or initiate immediate RTO"},{awb:"DEL882910488",orderId:"ORD-94251",customerName:"Simran Kaur",phone:"+91 98140 33812",city:"Chandigarh",state:"Punjab",courier:"Delhivery Express",ndrReason:"Office Premises Closed on Weekend / Evening",attempt:1,ageHours:5.8,status:"RESOLVED",orderAmount:"₹5,200",paymentType:"Prepaid",lastActionTaken:"Customer rescheduled via WhatsApp bot to Monday morning",recommendedAction:"Resolved - queued for Monday 10:00 AM delivery"}],V=[{id:"WD-8819",awb:"DTD992144019",orderId:"ORD-94277",courier:"DTDC Express",declaredWeight:"0.55 kg",courierWeight:"1.25 kg",difference:"+0.70 kg",additionalCharge:"₹48.00",status:"FLAGGED_DISPUTE",proofAvailable:!0,boxDims:"24 x 18 x 6 cm",courierDims:"38 x 26 x 14 cm",deadlineHours:42},{id:"WD-8818",awb:"DTD992143990",orderId:"ORD-94269",courier:"DTDC Express",declaredWeight:"0.45 kg",courierWeight:"1.10 kg",difference:"+0.65 kg",additionalCharge:"₹44.00",status:"DISPUTE_SUBMITTED",proofAvailable:!0,boxDims:"22 x 15 x 5 cm",courierDims:"34 x 24 x 12 cm",deadlineHours:72},{id:"WD-8817",awb:"XPB551928399",orderId:"ORD-94262",courier:"Xpressbees",declaredWeight:"1.20 kg",courierWeight:"2.10 kg",difference:"+0.90 kg",additionalCharge:"₹72.00",status:"DISPUTE_WON",proofAvailable:!0,boxDims:"30 x 25 x 12 cm",courierDims:"35 x 30 x 18 cm",creditAmount:"₹72.00 Credited"},{id:"WD-8816",awb:"DEL882909412",orderId:"ORD-94248",courier:"Delhivery Surface",declaredWeight:"0.80 kg",courierWeight:"1.35 kg",difference:"+0.55 kg",additionalCharge:"₹38.50",status:"FLAGGED_DISPUTE",proofAvailable:!0,boxDims:"28 x 20 x 8 cm",courierDims:"32 x 24 x 14 cm",deadlineHours:36}],N=[{channel:"Meta Ads (Instagram / FB)",spend:"₹18,40,000",revenue:"₹89,20,000",roas:"4.85x",cac:"₹204",orders:6940,topCampaign:"C401 - Performance Activewear Q3",status:"SCALE",efficiencyRating:"HIGH"},{channel:"Google Ads (PMax + Search)",spend:"₹10,24,000",revenue:"₹52,40,000",roas:"5.12x",cac:"₹196",orders:4120,topCampaign:"G-Search - High Intent Footwear",status:"SCALE",efficiencyRating:"VERY_HIGH"},{channel:"Amazon Ads (Sponsored Products)",spend:"₹4,20,000",revenue:"₹16,40,000",roas:"3.90x",cac:"₹298",orders:1350,topCampaign:"AMZ-SP - Keyword Dominance Running",status:"OPTIMIZE",efficiencyRating:"MODERATE"}],q=[{id:"wh_mum",name:"Mumbai Central Mega Hub",location:"Bhiwandi, Maharashtra",dailyCapacity:"12,000 orders",currentUtilization:"78.4%",activeOrders:4210,pickupSla:"99.1%",dispatchHealth:"HEALTHY",avgFulfillmentTime:"4.2 hrs"},{id:"wh_blr",name:"Bengaluru North Fulfillment",location:"Nelamangala, Karnataka",dailyCapacity:"8,500 orders",currentUtilization:"64.2%",activeOrders:2840,pickupSla:"98.7%",dispatchHealth:"HEALTHY",avgFulfillmentTime:"3.8 hrs"},{id:"wh_del",name:"Delhi NCR Mega Hub",location:"Pataudi / Gurugram, Haryana",dailyCapacity:"10,000 orders",currentUtilization:"71.9%",activeOrders:3120,pickupSla:"97.9%",dispatchHealth:"HEALTHY",avgFulfillmentTime:"4.5 hrs"},{id:"wh_kol",name:"Kolkata East Depot",location:"Dankuni, West Bengal",dailyCapacity:"4,000 orders",currentUtilization:"41.5%",activeOrders:890,pickupSla:"96.4%",dispatchHealth:"HEALTHY",avgFulfillmentTime:"5.1 hrs"}],G=[{id:"CUST-9921",name:"Karthik Venkataraman",email:"karthik.v@techcorp.in",phone:"+91 98450 11993",city:"Bengaluru",state:"Karnataka",ordersCount:21,lifetimeSpend:"₹62,100",aov:"₹2,957",deliveredOrders:21,rtoOrders:0,ndrOrders:1,segment:"VIP Platinum",rtoRisk:"VERY LOW (0.0%)",preferredPayment:"Prepaid (NetBanking / UPI 100%)",lastOrder:"Today (ORD-94278)"},{id:"CUST-8814",name:"Rohan Singhania",email:"rohan.s@gmail.com",phone:"+91 98201 44821",city:"Mumbai",state:"Maharashtra",ordersCount:14,lifetimeSpend:"₹38,450",aov:"₹2,746",deliveredOrders:13,rtoOrders:0,ndrOrders:1,segment:"High Value Repeat",rtoRisk:"LOW (0.0%)",preferredPayment:"Prepaid Razorpay UPI",lastOrder:"Today (ORD-94281)"},{id:"CUST-7741",name:"Meera Krishnan",email:"meera.k@tcs.com",phone:"+91 98840 91823",city:"Chennai",state:"Tamil Nadu",ordersCount:11,lifetimeSpend:"₹28,600",aov:"₹2,600",deliveredOrders:11,rtoOrders:0,ndrOrders:0,segment:"High Value Repeat",rtoRisk:"VERY LOW (0.0%)",preferredPayment:"Credit Card (HDFC)",lastOrder:"Today (ORD-94274)"},{id:"CUST-4412",name:"Pooja Deshmukh",email:"pooja.d@yahoo.com",phone:"+91 97654 88319",city:"Pune",state:"Maharashtra",ordersCount:2,lifetimeSpend:"₹3,998",aov:"₹1,999",deliveredOrders:1,rtoOrders:0,ndrOrders:1,segment:"New Customer",rtoRisk:"HIGH (50% NDR)",preferredPayment:"Cash on Delivery (COD)",lastOrder:"Today (ORD-94280)"}];class U{constructor({onNavigate:e,onOpenOrder:t,onAction:i}){this.onNavigate=e,this.onOpenOrder=t,this.onAction=i,this.isOpen=!1,this.selectedIndex=0,this.results=[],this.init()}init(){this.backdrop=document.createElement("div"),this.backdrop.className="modal-backdrop",this.backdrop.id="command-palette-backdrop",this.backdrop.innerHTML=`
      <div class="command-modal" id="command-palette-modal">
        <div class="command-input-container">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="command-input" id="command-search-input" placeholder="Type a command, search orders, AWBs, couriers..." autocomplete="off" />
          <span class="kbd-badge">ESC</span>
        </div>
        <div class="command-results-list" id="command-results"></div>
        <div class="command-footer">
          <div><span class="kbd-badge">↑</span> <span class="kbd-badge">↓</span> to navigate &nbsp;•&nbsp; <span class="kbd-badge">↵</span> to select</div>
          <div style="color:var(--accent-cyan); font-weight:600;">EcomIQ Command Engine</div>
        </div>
      </div>
    `,document.body.appendChild(this.backdrop),this.input=this.backdrop.querySelector("#command-search-input"),this.resultsContainer=this.backdrop.querySelector("#command-results"),window.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"?(e.preventDefault(),this.toggle()):e.key==="Escape"&&this.isOpen?this.close():this.isOpen&&(e.key==="ArrowDown"?(e.preventDefault(),this.moveSelection(1)):e.key==="ArrowUp"?(e.preventDefault(),this.moveSelection(-1)):e.key==="Enter"&&(e.preventDefault(),this.executeSelection()))}),this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),this.input.addEventListener("input",()=>{this.filter(this.input.value)})}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen=!0,this.backdrop.classList.add("open"),this.input.value="",this.selectedIndex=0,this.filter(""),setTimeout(()=>this.input.focus(),50)}close(){this.isOpen=!1,this.backdrop.classList.remove("open")}getDefaultCommands(){return[{type:"action",title:"Trigger WhatsApp NDR Playbook",desc:"Auto-verify 284 delayed Maharashtra consignments",action:()=>this.onAction("whatsapp-ndr")},{type:"action",title:"Raise Bulk DTDC Weight Dispute",desc:"File 89 pre-compiled dispute packets to save ₹41,200",action:()=>this.onAction("dispute-weight")},{type:"action",title:"Export Live Orders (CSV / Excel)",desc:"Generate high-density logistics manifest",action:()=>this.onAction("export-orders")},{type:"view",title:"Dashboard — Command Center",desc:"Switch to executive operations overview",target:"dashboard"},{type:"view",title:"Orders Operational Table",desc:"Manage 18,429 multi-channel orders",target:"orders"},{type:"view",title:"NDR Recovery Cockpit",desc:"Action 184 active delivery exceptions",target:"ndr"},{type:"view",title:"Weight Discrepancy Manager",desc:"Audit carrier overcharges and optical scans",target:"weight"},{type:"view",title:"Courier Benchmark Matrix",desc:"Compare Delhivery, BlueDart, DTDC SLAs",target:"couriers"},{type:"view",title:"Finance & COD Remittance",desc:"Track ₹42.6L COD and ₹14.8L wallet",target:"finance"},{type:"view",title:"AI Copilot BI Terminal",desc:"Ask natural-language intelligence questions",target:"ai-chat"}]}filter(e){const t=e.toLowerCase().trim(),i=this.getDefaultCommands();let a=[];t?(i.forEach(r=>{(r.title.toLowerCase().includes(t)||r.desc.toLowerCase().includes(t))&&a.push(r)}),w.forEach(r=>{(r.id.toLowerCase().includes(t)||r.customer.name.toLowerCase().includes(t)||r.shipment.awb.toLowerCase().includes(t)||r.customer.city.toLowerCase().includes(t))&&a.push({type:"order",title:`${r.id} • ${r.customer.name} (${r.amount})`,desc:`AWB ${r.shipment.awb} • ${r.status} • ${r.customer.city}`,order:r})}),T.forEach(r=>{(r.name.toLowerCase().includes(t)||r.logoText.toLowerCase().includes(t))&&a.push({type:"courier",title:`Courier: ${r.name}`,desc:`Delivery: ${r.deliveryRate} • NDR: ${r.ndrRate} • Cost: ${r.costPerShipment}`,target:"couriers"})})):a=i,this.results=a,this.selectedIndex=0,this.renderResults()}renderResults(){if(this.results.length===0){this.resultsContainer.innerHTML=`
        <div style="padding:24px; text-align:center; color:var(--text-tertiary); font-size:12px;">
          No matching operational records or commands found for your query.
        </div>
      `;return}this.resultsContainer.innerHTML=this.results.map((e,t)=>`
      <div class="command-item ${t===this.selectedIndex?"focused":""}" data-index="${t}">
        <div class="command-item-left">
          ${e.type==="action"?'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>':e.type==="order"?'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-info)" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'}
          <div>
            <div style="font-weight:600; font-size:12px; color:var(--text-primary);">${e.title}</div>
            <div style="font-size:11px; color:var(--text-tertiary); margin-top:1px;">${e.desc}</div>
          </div>
        </div>
        <span class="kbd-badge" style="font-size:9px;">${e.type.toUpperCase()}</span>
      </div>
    `).join(""),this.resultsContainer.querySelectorAll(".command-item").forEach(e=>{e.onclick=()=>{const t=parseInt(e.getAttribute("data-index"),10);this.selectedIndex=t,this.executeSelection()}})}moveSelection(e){if(this.results.length===0)return;this.selectedIndex=(this.selectedIndex+e+this.results.length)%this.results.length,this.renderResults();const t=this.resultsContainer.querySelector(".command-item.focused");t&&t.scrollIntoView({block:"nearest"})}executeSelection(){const e=this.results[this.selectedIndex];e&&(this.close(),e.action?e.action():e.target?this.onNavigate(e.target):e.order&&this.onOpenOrder(e.order))}}class j{constructor(){this.container=null,this.init()}init(){let e=document.getElementById("toast-container");e||(e=document.createElement("div"),e.id="toast-container",document.body.appendChild(e)),this.container=e}show({title:e,message:t,type:i="success",duration:a=4e3}){this.container||this.init();const r=document.createElement("div");r.className=`toast toast-${i}`;let n="";i==="success"?n='<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>':i==="warning"?n='<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>':i==="danger"?n='<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>':n='<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',r.innerHTML=`
      ${n}
      <div class="toast-content">
        <div class="toast-title">${e}</div>
        <div class="toast-message">${t}</div>
      </div>
      <button class="icon-btn btn-sm" style="width:20px; height:20px; margin-top:2px;">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;const p=r.querySelector("button");p.onclick=()=>this.dismiss(r),this.container.appendChild(r),requestAnimationFrame(()=>{r.classList.add("show")}),setTimeout(()=>{this.dismiss(r)},a)}dismiss(e){!e||!e.parentNode||(e.classList.remove("show"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},250))}}const f=new j;class K{constructor({onAction:e}){this.onAction=e,this.currentOrder=null,this.init()}init(){this.backdrop=document.createElement("div"),this.backdrop.className="drawer-backdrop",this.backdrop.id="order-detail-drawer",this.backdrop.innerHTML=`
      <div class="drawer-panel" id="order-drawer-content">
        <!-- Rendered dynamically -->
      </div>
    `,document.body.appendChild(this.backdrop),this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdrop.classList.contains("open")&&this.close()})}open(e){this.currentOrder=e,this.render(),this.backdrop.classList.add("open")}close(){this.backdrop.classList.remove("open")}render(){const e=this.currentOrder;if(!e)return;const t=this.backdrop.querySelector("#order-drawer-content");let i="badge-delivered";if(e.status==="NDR"?i="badge-ndr":e.status==="RTO"?i="badge-rto":e.status==="In Transit"?i="badge-in-transit":e.status==="Out for Delivery"&&(i="badge-out-for-delivery"),t.innerHTML=`
      <div class="drawer-header">
        <div class="drawer-header-left">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--text-primary);">${e.id}</span>
            <span class="badge ${i}"><span class="badge-dot"></span>${e.status}</span>
            ${e.isPriority?'<span class="badge badge-ai" style="font-size:10px;">PRIORITY CONSIGNMENT</span>':""}
          </div>
          <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">
            Booked: ${e.date} &nbsp;•&nbsp; Channel: ${e.channel}
          </div>
        </div>
        <button class="icon-btn" id="drawer-close-btn" title="Close Drawer (ESC)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="drawer-body">
        <!-- NDR Action Alert Banner if NDR -->
        ${e.status==="NDR"?`
          <div style="background:rgba(245, 158, 11, 0.09); border:1px solid var(--color-warning-border); border-radius:var(--radius-md); padding:14px; display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:6px; color:var(--color-warning); font-weight:700; font-size:12px; font-family:var(--font-display);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                ACTION REQUIRED: NON-DELIVERY REPORT
              </div>
              <span class="badge badge-warning">Attempt ${e.shipment.ndrAttempt||1} • Age: ${e.shipment.ndrAge||"4h"}</span>
            </div>
            <div style="font-size:12px; color:var(--text-primary); font-weight:500;">
              Reason: <span style="color:#FBBF24;">${e.shipment.ndrReason||"Customer Unavailable / Door Locked"}</span>
            </div>
            <div style="display:flex; gap:8px; margin-top:4px; flex-wrap:wrap;">
              <button class="btn btn-primary btn-sm" id="drawer-whatsapp-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                WhatsApp Customer
              </button>
              <button class="btn btn-secondary btn-sm" id="drawer-call-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Customer
              </button>
              <button class="btn btn-outline btn-sm" id="drawer-reschedule-btn">Reschedule Date</button>
              <button class="btn btn-danger btn-sm" id="drawer-rto-btn">Force Immediate RTO</button>
            </div>
          </div>
        `:""}

        <!-- Customer 360 Information Card -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Customer 360 Information</span>
            <span class="badge ${e.customer.rtoRisk==="LOW"?"badge-delivered":"badge-ndr"}" style="font-size:10px;">
              RTO RISK: ${e.customer.rtoRisk}
            </span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:12px;">
            <div>
              <div style="color:var(--text-tertiary); font-size:11px;">Consignee Name</div>
              <div style="font-weight:600; color:var(--text-primary); font-size:13px; margin-top:2px;">${e.customer.name}</div>
              <div style="color:var(--text-secondary); margin-top:2px;">${e.customer.phone}</div>
              <div style="color:var(--text-secondary);">${e.customer.email}</div>
            </div>
            <div>
              <div style="color:var(--text-tertiary); font-size:11px;">Delivery Destination</div>
              <div style="color:var(--text-primary); margin-top:2px; line-height:1.4;">${e.customer.address}</div>
              <div style="color:var(--accent-cyan); font-family:var(--font-mono); font-weight:600; margin-top:3px;">${e.customer.city}, ${e.customer.state} — ${e.customer.pincode}</div>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-top:6px; padding-top:8px; border-top:1px solid var(--border-subtle); background:var(--bg-surface); padding:8px; border-radius:var(--radius-xs);">
            <div>
              <div style="color:var(--text-tertiary); font-size:10px;">Lifetime Orders</div>
              <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:12px;">${e.customer.totalOrders} Orders</div>
            </div>
            <div>
              <div style="color:var(--text-tertiary); font-size:10px;">Lifetime Spend</div>
              <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:12px;">${e.customer.totalSpend}</div>
            </div>
            <div>
              <div style="color:var(--text-tertiary); font-size:10px;">Customer Persona</div>
              <div style="font-weight:600; color:var(--color-success); font-size:11px;">Verified Buyer</div>
            </div>
          </div>
        </div>

        <!-- Ordered Items -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Ordered Items (${e.items.length})</span>
            <span style="font-family:var(--font-mono); color:var(--text-primary); font-size:11px;">Subtotal: ${e.subtotal}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${e.items.map(a=>`
              <div style="display:flex; align-items:center; justify-content:space-between; padding:8px; background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-xs);">
                <div style="display:flex; align-items:center; gap:10px;">
                  <div style="width:36px; height:36px; border-radius:var(--radius-xs); background:var(--bg-surface-high); border:1px solid var(--border-default); display:flex; align-items:center; justify-content:center; color:var(--accent-cyan);">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </div>
                  <div>
                    <div style="font-size:12px; font-weight:600; color:var(--text-primary);">${a.name}</div>
                    <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">SKU: ${a.sku} &nbsp;•&nbsp; HSN: ${a.hsn}</div>
                  </div>
                </div>
                <div style="text-align:right;">
                  <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${a.price}</div>
                  <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">Qty: ${a.qty}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Shipment & Logistics Information -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Logistics & Carrier Details</span>
            <span style="font-family:var(--font-mono); color:var(--accent-cyan); font-weight:600;">AWB: ${e.shipment.awb}</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px; font-size:11px;">
            <div>
              <span style="color:var(--text-tertiary);">Allocated Courier:</span>
              <div style="color:var(--text-primary); font-weight:600; font-size:12px;">${e.shipment.courier}</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary);">Dispatch Warehouse:</span>
              <div style="color:var(--text-primary); font-weight:600; font-size:12px;">${e.warehouse}</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary);">Dead vs Volumetric Weight:</span>
              <div style="color:var(--text-primary); font-family:var(--font-mono); font-weight:600;">${e.shipment.deadWeight} / ${e.shipment.volWeight}</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary);">Estimated Delivery (EDD):</span>
              <div style="color:var(--accent-cyan); font-family:var(--font-mono); font-weight:600;">${e.shipment.edd}</div>
            </div>
          </div>
        </div>

        <!-- Shipment Timeline -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Shipment Tracking Events</span>
            <span style="font-size:10px; color:var(--text-tertiary); font-family:var(--font-mono);">Live Courier Telemetry</span>
          </div>
          <div class="timeline-list">
            ${(e.shipment.events||[]).map(a=>`
              <div class="timeline-item ${a.status||""}">
                <div class="timeline-node"></div>
                <div class="timeline-time">${a.time}</div>
                <div class="timeline-title">${a.title}</div>
                <div class="timeline-desc">${a.desc}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Financial & Payment Information -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Financial & Settlement Breakdown</span>
            <span class="badge ${e.payment.status==="PAID"?"badge-paid":"badge-warning"}">${e.payment.status}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:12px;">
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Payment Mode:</span>
              <span style="color:var(--text-primary); font-weight:600;">${e.payment.type} (${e.payment.gateway})</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Transaction Ref:</span>
              <span style="font-family:var(--font-mono); color:var(--text-tertiary);">${e.payment.transactionId}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Item Subtotal:</span>
              <span style="font-family:var(--font-mono); color:var(--text-primary);">${e.subtotal}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Tax (GST Breakdown):</span>
              <span style="font-family:var(--font-mono); color:var(--text-secondary);">${e.tax}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
              <span>Shipping Fee:</span>
              <span style="font-family:var(--font-mono); color:var(--text-secondary);">${e.shippingFee}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:var(--text-primary); font-weight:700; font-size:13px; border-top:1px solid var(--border-subtle); padding-top:6px; margin-top:2px;">
              <span>Total Invoice Amount:</span>
              <span style="font-family:var(--font-mono); color:var(--accent-cyan);">${e.amount}</span>
            </div>
          </div>
        </div>

        <!-- Audit & Activity Trail -->
        <div class="drawer-section">
          <div class="drawer-section-title">
            <span>Activity Trail & Security Audit</span>
            <span style="font-size:10px; color:var(--text-tertiary); font-family:var(--font-mono);">System Log</span>
          </div>
          <div style="font-size:11px; color:var(--text-secondary); display:flex; flex-direction:column; gap:4px; font-family:var(--font-mono);">
            <div>• 2026-09-24 16:40: Automated Smart Routing selected ${e.shipment.courier}</div>
            <div>• 2026-09-24 15:10: Shipping label and packaging manifest generated by system</div>
            <div>• 2026-09-24 14:50: Webhook received from ${e.channel} with signature verified</div>
          </div>
        </div>
      </div>

      <div class="drawer-footer">
        <button class="btn btn-outline btn-sm" id="drawer-print-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Print Shipping Label & Invoice
        </button>
        <button class="btn btn-secondary btn-sm" id="drawer-close-footer-btn">Close (ESC)</button>
      </div>
    `,t.querySelector("#drawer-close-btn").onclick=()=>this.close(),t.querySelector("#drawer-close-footer-btn").onclick=()=>this.close(),t.querySelector("#drawer-print-btn").onclick=()=>{f.show({title:"Shipping Label Dispatched",message:`Label for ${e.id} (AWB: ${e.shipment.awb}) sent to thermal printer network.`,type:"success"})},e.status==="NDR"){const a=t.querySelector("#drawer-whatsapp-btn");a&&(a.onclick=()=>this.onAction("whatsapp-ndr",e));const r=t.querySelector("#drawer-call-btn");r&&(r.onclick=()=>this.onAction("call-customer",e));const n=t.querySelector("#drawer-reschedule-btn");n&&(n.onclick=()=>{f.show({title:"Delivery Rescheduled",message:`Reattempt order ${e.id} booked for tomorrow morning slot.`,type:"success"})});const p=t.querySelector("#drawer-rto-btn");p&&(p.onclick=()=>{f.show({title:"Immediate RTO Initiated",message:"Consignment marked for return. Reverse logistics AWB generated.",type:"danger"}),this.close()})}}}class _{constructor({onRefreshData:e}){this.onRefreshData=e,this.container=document.createElement("div"),this.container.id="action-modals-mount",document.body.appendChild(this.container)}openWhatsAppNDR(e){const t=(e==null?void 0:e.customer)||{name:"Pooja Deshmukh",phone:"+91 97654 88319",city:"Pune"},i=(e==null?void 0:e.id)||"ORD-94280",a=(e==null?void 0:e.amount)||"₹3,198",r=document.createElement("div");r.className="modal-backdrop open",r.innerHTML=`
      <div class="command-modal" style="width: 500px;">
        <div class="command-input-container" style="justify-content:space-between; border-bottom:1px solid var(--border-default);">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">WhatsApp NDR Automated Flow</span>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>
        <div style="padding:16px; display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:flex; justify-content:space-between;">
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Recipient:</span>
              <div style="font-weight:600; color:var(--text-primary);">${t.name} (${t.phone})</div>
            </div>
            <div style="text-align:right;">
              <span style="color:var(--text-tertiary); font-size:11px;">Order Value:</span>
              <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan);">${a}</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:4px;">
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Message Template</label>
            <div style="background:rgba(37, 211, 102, 0.05); border:1px solid rgba(37, 211, 102, 0.25); border-radius:var(--radius-sm); padding:12px; color:var(--text-primary); font-size:12px; line-height:1.45;">
              "Hi <strong>${t.name}</strong>, our courier partner attempted delivery of your order <strong>#${i}</strong> today in <strong>${t.city}</strong>, but was unable to reach you.<br><br>
              Would you like us to reattempt delivery tomorrow? Tap a button below to confirm:
              <div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">
                <span style="padding:4px 8px; background:rgba(37, 211, 102, 0.2); border-radius:4px; font-size:11px; color:#25D366; font-weight:600;">[1] Reattempt Tomorrow</span>
                <span style="padding:4px 8px; background:rgba(37, 211, 102, 0.2); border-radius:4px; font-size:11px; color:#25D366; font-weight:600;">[2] Update Delivery Address</span>
                <span style="padding:4px 8px; background:rgba(37, 211, 102, 0.2); border-radius:4px; font-size:11px; color:#25D366; font-weight:600;">[3] Pay Online (Save ₹50)</span>
              </div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" id="add-prepaid-incentive" checked style="accent-color:var(--accent-cyan);" />
            <label for="add-prepaid-incentive" style="font-size:11px; color:var(--text-secondary); cursor:pointer;">
              Attach instant UPI payment link with ₹50 waiver to eliminate COD risk
            </label>
          </div>
        </div>

        <div class="command-footer" style="padding:12px 16px; justify-content:flex-end; gap:8px;">
          <button class="btn btn-secondary btn-sm" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="send-whatsapp-btn" style="background:#25D366; color:#000; border-color:#20BA5A;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Dispatch WhatsApp Flow
          </button>
        </div>
      </div>
    `,this.container.appendChild(r);const n=()=>r.remove();r.querySelector("#close-modal-btn").onclick=n,r.querySelector("#cancel-modal-btn").onclick=n,r.onclick=p=>{p.target===r&&n()},r.querySelector("#send-whatsapp-btn").onclick=()=>{n(),f.show({title:"WhatsApp NDR Dispatched",message:`Interactive prompt sent to ${t.name} (${t.phone}). Awaiting response.`,type:"success"})}}openCallModal(e){const t=(e==null?void 0:e.customer)||{name:"Pooja Deshmukh",phone:"+91 97654 88319"},i=(e==null?void 0:e.id)||"ORD-94280",a=document.createElement("div");a.className="modal-backdrop open",a.innerHTML=`
      <div class="command-modal" style="width: 460px;">
        <div class="command-input-container" style="justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">Outbound Customer Outreach</span>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>
        <div style="padding:16px; display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:12px; text-align:center;">
            <div style="font-size:11px; color:var(--text-tertiary); text-transform:uppercase;">Connected Line (Telephony Integration)</div>
            <div style="font-size:18px; font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); margin:4px 0;">${t.phone}</div>
            <div style="font-size:12px; color:var(--text-secondary);">${t.name} &nbsp;•&nbsp; ${i}</div>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Log Call Disposition</label>
            <select class="input-control select-control" style="margin-top:4px;">
              <option>Customer Confirmed Reattempt Tomorrow</option>
              <option>Customer Provided New Address / Landmark</option>
              <option>Customer Requested Slot After 6 PM</option>
              <option>Customer Refused Order (Initiate RTO)</option>
              <option>Call Unanswered / Busy</option>
            </select>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Agent Notes</label>
            <textarea class="input-control" style="height:60px; padding:8px; margin-top:4px; resize:none;" placeholder="Customer requested delivery near Gate 2 security office..."></textarea>
          </div>
        </div>

        <div class="command-footer" style="padding:12px 16px; justify-content:flex-end; gap:8px;">
          <button class="btn btn-secondary btn-sm" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="save-call-btn">Save Disposition & Update Ticket</button>
        </div>
      </div>
    `,this.container.appendChild(a);const r=()=>a.remove();a.querySelector("#close-modal-btn").onclick=r,a.querySelector("#cancel-modal-btn").onclick=r,a.onclick=n=>{n.target===a&&r()},a.querySelector("#save-call-btn").onclick=()=>{r(),f.show({title:"Call Logged Successfully",message:`Disposition recorded for ${i}. Dispatch driver notified.`,type:"success"})}}openWeightDisputeModal(){const e=document.createElement("div");e.className="modal-backdrop open",e.innerHTML=`
      <div class="command-modal" style="width: 540px;">
        <div class="command-input-container" style="justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.9 1.4l-2.4 7.4A2 2 0 0 0 4.1 19h15.8a2 2 0 0 0 1.9-2.2l-2.4-7.4A2 2 0 0 0 17.5 8h-11Z"/></svg>
            <span style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">Raise Bulk Weight Dispute (89 Shipments)</span>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>
        <div style="padding:16px; display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:12px; display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Carrier Partner:</span>
              <div style="font-weight:700; color:var(--text-primary);">DTDC Express Priority</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Flagged Overcharge:</span>
              <div style="font-family:var(--font-mono); font-weight:700; color:var(--color-warning); font-size:14px;">₹41,200.00</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Origin Facility:</span>
              <div style="color:var(--text-secondary);">Nelamangala Hub Sort-Belt</div>
            </div>
            <div>
              <span style="color:var(--text-tertiary); font-size:11px;">Dispute Window:</span>
              <div style="color:var(--accent-cyan); font-weight:600;">48h Remaining</div>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:4px;">
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Evidence Attached</label>
            <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-default); border-radius:var(--radius-sm); padding:10px; font-size:11px; color:var(--text-secondary); line-height:1.5;">
              ✓ Automated packing station CCTV scale snapshots (89 images)<br>
              ✓ Master SKU Catalog dead-weight audit (0.55kg declared)<br>
              ✓ Optical scanner error log reference #DTDC-OPT-88192
            </div>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Dispute Reason Category</label>
            <select class="input-control select-control" style="margin-top:4px;">
              <option>Volumetric scanner bulge misread on polybags</option>
              <option>Dead weight entered incorrectly by courier belt operator</option>
              <option>Duplicate weight slab billing</option>
            </select>
          </div>
        </div>

        <div class="command-footer" style="padding:12px 16px; justify-content:flex-end; gap:8px;">
          <button class="btn btn-secondary btn-sm" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="submit-dispute-btn">Submit 89 Claims via DTDC API</button>
        </div>
      </div>
    `,this.container.appendChild(e);const t=()=>e.remove();e.querySelector("#close-modal-btn").onclick=t,e.querySelector("#cancel-modal-btn").onclick=t,e.onclick=i=>{i.target===e&&t()},e.querySelector("#submit-dispute-btn").onclick=()=>{t(),f.show({title:"Dispute Batch Submitted",message:"89 claims submitted to DTDC Partner Portal. Case ticket #DTDC-DISP-2026-901 created.",type:"success"})}}openExportModal(){const e=document.createElement("div");e.className="modal-backdrop open",e.innerHTML=`
      <div class="command-modal" style="width: 480px;">
        <div class="command-input-container" style="justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">Export Logistics Manifest</span>
          </div>
          <button class="icon-btn btn-sm" id="close-modal-btn">✕</button>
        </div>
        <div style="padding:16px; display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Format</label>
            <div style="display:flex; gap:10px; margin-top:6px;">
              <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="radio" name="format" checked style="accent-color:var(--accent-cyan);"> CSV (UTF-8)</label>
              <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="radio" name="format" style="accent-color:var(--accent-cyan);"> Microsoft Excel (.xlsx)</label>
              <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="radio" name="format" style="accent-color:var(--accent-cyan);"> JSON Data Stream</label>
            </div>
          </div>

          <div>
            <label style="font-size:11px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Columns to Include</label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:6px; background:var(--bg-base); padding:8px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Order ID & Date</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Customer Info & Phone</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> AWB & Courier Name</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Order Status & NDR Reason</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Amount & Payment Mode</label>
              <label><input type="checkbox" checked style="accent-color:var(--accent-cyan);"> Dead & Volumetric Weight</label>
            </div>
          </div>
        </div>

        <div class="command-footer" style="padding:12px 16px; justify-content:flex-end; gap:8px;">
          <button class="btn btn-secondary btn-sm" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary btn-sm" id="download-export-btn">Generate & Download Export</button>
        </div>
      </div>
    `,this.container.appendChild(e);const t=()=>e.remove();e.querySelector("#close-modal-btn").onclick=t,e.querySelector("#cancel-modal-btn").onclick=t,e.onclick=i=>{i.target===e&&t()},e.querySelector("#download-export-btn").onclick=()=>{t(),f.show({title:"Export Ready",message:"EcomIQ_Orders_Logistics_Manifest_2026.csv compiled (18,429 rows).",type:"success"})}}}class P{constructor(e){this.container=document.getElementById(e),this.timeframe="30d",this.showCompare=!0,this.init()}init(){this.container&&this.render()}setTimeframe(e){this.timeframe=e,this.render()}toggleCompare(e){this.showCompare=e,this.render()}render(){const e=z[this.timeframe]||z["30d"],t=860,i=240,a={top:20,right:30,bottom:35,left:60},r=Math.max(...e.map(u=>Math.max(u.revenue,u.prevRevenue||0)))*1.15,n=0,p=u=>a.left+u/(e.length-1)*(t-a.left-a.right),y=u=>i-a.bottom-(u-n)/(r-n)*(i-a.top-a.bottom);let d="",v="",l="";e.forEach((u,m)=>{const h=p(m),b=y(u.revenue),x=y(u.prevRevenue||u.revenue*.85);if(m===0)d+=`M ${h} ${b}`,v+=`M ${h} ${i-a.bottom} L ${h} ${b}`,l+=`M ${h} ${x}`;else{const k=p(m-1),A=y(e[m-1].revenue),R=k+(h-k)/2,S=A,E=k+(h-k)/2,D=b;d+=` C ${R} ${S}, ${E} ${D}, ${h} ${b}`,v+=` C ${R} ${S}, ${E} ${D}, ${h} ${b}`;const O=y(e[m-1].prevRevenue||e[m-1].revenue*.85);l+=` C ${R} ${O}, ${E} ${x}, ${h} ${x}`}m===e.length-1&&(v+=` L ${h} ${i-a.bottom} Z`)});const o=[0,r*.33,r*.66,r].map(u=>{const m=y(u),h=(u/1e5).toFixed(1)+"L";return`
        <line x1="${a.left}" y1="${m}" x2="${t-a.right}" y2="${m}" stroke="var(--border-subtle)" stroke-dasharray="3 3" />
        <text x="${a.left-10}" y="${m+4}" fill="var(--text-tertiary)" font-size="10" font-family="var(--font-mono)" text-anchor="end">₹${h}</text>
      `}).join(""),c=e.map((u,m)=>e.length>8&&m%2!==0&&m!==e.length-1?"":`<text x="${p(m)}" y="${i-10}" fill="var(--text-tertiary)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">${u.date}</text>`).join("");this.container.innerHTML=`
      <svg viewBox="0 0 ${t} ${i}" style="width:100%; height:100%; overflow:visible;">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#00E5FF" stop-opacity="0.0"/>
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#00E5FF" flood-opacity="0.5"/>
          </filter>
        </defs>

        <!-- Grid Lines & Y Labels -->
        ${o}

        <!-- X Labels -->
        ${c}

        <!-- Area Fill -->
        <path d="${v}" fill="url(#chartGradient)" />

        <!-- Previous Period Line (Dashed) -->
        ${this.showCompare?`<path d="${l}" fill="none" stroke="var(--text-tertiary)" stroke-width="1.8" stroke-dasharray="4 4" opacity="0.6" />`:""}

        <!-- Current Period Line -->
        <path d="${d}" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5" filter="url(#glow)" />

        <!-- Crosshair Elements -->
        <line id="chart-crosshair" x1="0" y1="${a.top}" x2="0" y2="${i-a.bottom}" stroke="var(--accent-cyan)" stroke-width="1" stroke-dasharray="2 2" style="display:none;" />
        <circle id="chart-hover-dot" r="4.5" fill="var(--bg-deep)" stroke="var(--accent-cyan)" stroke-width="2.5" style="display:none;" />
      </svg>
      <div id="chart-tooltip-box" class="chart-tooltip"></div>
    `,this.attachInteractivity(e,t,i,a,p,y)}attachInteractivity(e,t,i,a,r,n){const p=this.container.querySelector("svg"),y=p.querySelector("#chart-crosshair"),d=p.querySelector("#chart-hover-dot"),v=this.container.querySelector("#chart-tooltip-box");p.addEventListener("mousemove",l=>{const g=p.getBoundingClientRect(),o=(l.clientX-g.left)/g.width*t;let c=0,u=1/0;e.forEach((E,D)=>{const O=r(D),$=Math.abs(O-o);$<u&&(u=$,c=D)});const m=e[c],h=r(c),b=n(m.revenue);y.setAttribute("x1",h),y.setAttribute("x2",h),y.style.display="block",d.setAttribute("cx",h),d.setAttribute("cy",b),d.style.display="block";const x=m.prevRevenue||Math.round(m.revenue*.85),k=((m.revenue-x)/x*100).toFixed(1);v.innerHTML=`
        <div class="chart-tooltip-date">${m.date}</div>
        <div class="chart-tooltip-row">
          <span>Revenue:</span>
          <span class="val" style="color:var(--accent-cyan);">₹${(m.revenue/1e5).toFixed(2)}L</span>
        </div>
        <div class="chart-tooltip-row">
          <span>Previous:</span>
          <span class="val">₹${(x/1e5).toFixed(2)}L (${k>0?"+":""}${k}%)</span>
        </div>
        <div class="chart-tooltip-row">
          <span>Orders:</span>
          <span class="val">${m.orders} orders</span>
        </div>
        <div class="chart-tooltip-row">
          <span>AOV:</span>
          <span class="val">₹${m.aov}</span>
        </div>
      `,v.style.display="block";const A=this.container.getBoundingClientRect(),R=h/t*A.width,S=b/i*A.height;v.style.left=`${Math.min(R+15,A.width-180)}px`,v.style.top=`${Math.max(S-70,10)}px`}),p.addEventListener("mouseleave",()=>{y.style.display="none",d.style.display="none",v.style.display="none"})}}function Y(s,{onLaunchApp:e,onOpenOrder:t,onAction:i,onNavigateToModule:a}){s.innerHTML=`
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
          ${T.map(o=>`
            <div class="courier-card-visual">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <div style="font-family:var(--font-display); font-weight:800; font-size:16px; color:var(--text-primary);">${o.name}</div>
                  <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">${o.totalShipments} consignments (${o.shipmentShare} share)</div>
                </div>
                <span class="badge ${o.grade.startsWith("A")?"badge-delivered":"badge-warning"}">${o.grade} (${o.slaAdherence})</span>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; background:var(--bg-canvas-warm); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
                <div>
                  <span style="color:var(--text-tertiary);">Delivery Rate:</span>
                  <div style="font-family:var(--font-mono); font-size:14px; font-weight:700; color:var(--color-mint-dark);">${o.deliveryRate}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">RTO Attrition:</span>
                  <div style="font-family:var(--font-mono); font-size:14px; font-weight:700; color:${parseFloat(o.rtoRate)>3.5?"var(--color-danger)":"var(--text-primary)"};">${o.rtoRate}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Avg Delivery Time:</span>
                  <div style="font-family:var(--font-mono); font-size:14px; font-weight:700; color:var(--text-primary);">${o.avgDeliveryDays}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Cost / Shipment:</span>
                  <div style="font-family:var(--font-mono); font-size:14px; font-weight:700; color:var(--color-cobalt);">${o.costPerShipment}</div>
                </div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px;">
                <span style="color:var(--text-tertiary);">${o.disputedWeightCount} weight disputes flagged</span>
                <span style="font-weight:700; color:var(--color-cobalt); cursor:pointer;" class="jump-courier-btn">Inspect Rules →</span>
              </div>
            </div>
          `).join("")}
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
          ${N.map(o=>`
            <div class="marketing-card">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <div style="font-family:var(--font-display); font-weight:800; font-size:16px; color:var(--text-primary);">${o.channel}</div>
                  <div style="font-size:11px; color:var(--color-cobalt); font-weight:600; margin-top:2px;">Top: ${o.topCampaign}</div>
                </div>
                <span class="badge ${o.status==="SCALE"?"badge-delivered":"badge-warning"}">${o.status}</span>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:var(--bg-canvas-warm); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
                <div>
                  <span style="color:var(--text-tertiary);">Ad Spend:</span>
                  <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${o.spend}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Attributed GMV:</span>
                  <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-cobalt);">${o.revenue}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Reported ROAS:</span>
                  <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-mint-dark);">${o.roas}</div>
                </div>
                <div>
                  <span style="color:var(--text-tertiary);">Blended CAC:</span>
                  <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${o.cac}</div>
                </div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px;">
                <span style="color:var(--text-tertiary);">${o.orders} paid orders generated</span>
                <span class="badge badge-neutral" style="font-size:10px;">Efficiency: ${o.efficiencyRating}</span>
              </div>
            </div>
          `).join("")}
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
  `;const r=new P("hero-revenue-chart-mount");s.querySelectorAll("#hero-chart-pills .chart-pill-btn").forEach(o=>{o.onclick=()=>{s.querySelectorAll("#hero-chart-pills .chart-pill-btn").forEach(u=>u.classList.remove("active")),o.classList.add("active");const c=o.getAttribute("data-tf");r.setTimeframe(c)}}),s.querySelector("#hero-explore-btn").onclick=()=>{s.querySelector("#section-metrics").scrollIntoView({behavior:"smooth"})},s.querySelector("#hero-launch-os-btn").onclick=e,s.querySelector("#window-launch-app-btn").onclick=e,s.querySelector("#footer-launch-app-btn").onclick=e,s.querySelector("#footer-search-command-btn").onclick=()=>i("command-palette");const n=s.querySelector("#spotlight-title"),p=s.querySelector("#spotlight-desc"),y=s.querySelector("#spotlight-val"),d={revenue:{title:"Consolidated Gross Revenue (MTD)",desc:"Gross merchandise value across 4 multi-channel storefronts (Shopify, Amazon IN, WooCommerce). Reconciled with Razorpay, PayU, and carrier COD remitted batches.",val:"₹2,48,24,500"},orders:{title:"Order Dispatch Velocity",desc:"18,429 orders processed across 4 fulfillment hubs (Bhiwandi, Nelamangala, Gurugram, Dankuni) with 98.4% carrier pickup SLA adherence.",val:"18,429 Orders"},delivery:{title:"Delivery Success SLA",desc:"16,636 delivered consignments. Industry-leading 91.7% delivery success rate powered by EcomIQ Smart Dynamic Courier Allocation.",val:"91.7% (16,636 Delivered)"},ndr:{title:"Non-Delivery Reports (NDR Queue)",desc:"184 active delivery exceptions requiring intervention. 68% localized to Maharashtra pin codes. 72.4% recovery rate achieved via automated WhatsApp workflows.",val:"6.2% (184 Action Required)"},rto:{title:"Return to Origin (RTO) Attrition",desc:"Down 0.8% MoM to an elite 3.1%. Reverse logistics freight charges reduced by ₹1,42,000 via automated pre-dispatch address verification.",val:"3.1% (-0.8% MoM Drop)"},roas:{title:"Blended Advertising ROAS",desc:"Attributed marketing revenue across Meta Ads (4.85x), Google PMax (5.12x), and Amazon Sponsored Products (3.90x). Blended unit CAC of ₹218.",val:"4.82x Blended ROAS"}};s.querySelectorAll(".metric-interactive-card").forEach(o=>{o.onmouseenter=()=>{s.querySelectorAll(".metric-interactive-card").forEach(m=>m.classList.remove("active-card")),o.classList.add("active-card");const c=o.getAttribute("data-metric"),u=d[c];u&&(n.textContent=u.title,p.textContent=u.desc,y.textContent=u.val)}}),s.querySelector("#ai-trigger-playbook-btn").onclick=()=>{a("ndr")};const v=s.querySelector("#node-box-title"),l=s.querySelector("#node-box-desc"),g={alert:{title:"Delivery Failure: Customer Unavailable / Door Locked",desc:"Attempt 1 failed in Magarpatta City, Pune. Order ORD-94280 (₹3,198 COD). 72.4% recovery rate achievable via automated WhatsApp prompt."},customer:{title:"Consignee Profile: Pooja Deshmukh (+91 97654 88319)",desc:"Repeat customer with 2 past orders. Destination: House 14B, Marvel Fria, Magarpatta City, Pune — 411028. High COD delivery propensity."},courier:{title:"Carrier Telemetry: Delhivery Surface (AWB: DEL882939811)",desc:"Last-mile driver Shift #MH04-891 ran out of shift time. Hub delay recorded at Bhiwandi linehaul center. Rescheduling recommended."},action:{title:"Automated WhatsApp NDR Playbook Ready",desc:"Dispatches 1-click interactive prompt with WhatsApp verified badge. Offers customer 1-click morning slot selection or ₹50 discount to pay online via UPI."}};s.querySelectorAll(".graph-node").forEach(o=>{o.onclick=()=>{s.querySelectorAll(".graph-node").forEach(m=>m.classList.remove("active-node")),o.classList.add("active-node");const c=o.getAttribute("data-node"),u=g[c];u&&(v.textContent=u.title,l.textContent=u.desc)}}),s.querySelector("#node-launch-wa-btn").onclick=()=>{const o=w[1];i("whatsapp-ndr",o)},s.querySelector("#node-inspect-ord-btn").onclick=()=>{const o=w[1];t(o)},s.querySelectorAll(".jump-module-card").forEach(o=>{o.onclick=()=>{const c=o.getAttribute("data-module");a(c)}}),s.querySelectorAll(".jump-courier-btn").forEach(o=>{o.onclick=()=>a("couriers")})}function M(s,{onNavigate:e,onOpenOrder:t,onAction:i}){const a=I,r=L[0];s.innerHTML=`
    <div class="view-content-wrapper">
      <!-- View Header with Context & Range Presets -->
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONAL FLIGHT DECK</span>
            <span>/</span>
            <span>ALL CHANNELS & HUBS</span>
          </div>
          <h1 class="view-title">
            Executive Command Center
            <span class="badge badge-cyan" style="font-size:11px; padding:3px 8px;">LIVE FEED</span>
          </h1>
          <div class="view-subtitle">Consolidated operational, logistics, financial and marketing telemetry</div>
        </div>

        <div class="view-actions-group">
          <!-- Time Range Selector -->
          <div class="date-preset-pills" id="dashboard-date-presets">
            <button class="date-pill" data-tf="today">Today</button>
            <button class="date-pill" data-tf="yesterday">Yesterday</button>
            <button class="date-pill" data-tf="7d">7 Days</button>
            <button class="date-pill active" data-tf="30d">30 Days</button>
            <button class="date-pill" data-tf="custom">Custom</button>
          </div>

          <label class="compare-checkbox-label">
            <input type="checkbox" id="compare-period-toggle" checked />
            <span>vs Previous Period</span>
          </label>

          <button class="btn btn-outline btn-sm" id="dashboard-export-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export Brief
          </button>
        </div>
      </div>

      <div class="dashboard-grid">
        <!-- 1. HERO KPI AREA — BUSINESS PERFORMANCE COMMAND BANNER -->
        <section class="hero-kpi-block">
          <div class="hero-header-row">
            <div class="hero-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>
              <span>BUSINESS PERFORMANCE ENGINE • MTD PACING</span>
            </div>
            <div style="font-family:var(--font-mono); font-size:11px; color:var(--text-tertiary);">
              Target: ${a.business.targetRevenue} (${a.business.targetProgress}% Achieved)
            </div>
          </div>

          <div class="hero-main-stats">
            <!-- Large Primary KPI Block -->
            <div class="primary-stat-col">
              <div class="primary-stat-label">Consolidated Gross Revenue</div>
              <div class="primary-stat-val">
                ${a.business.revenue}
                <span class="primary-stat-delta">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
                  ${a.business.revenueChange}
                </span>
              </div>
              <div class="target-progress-row">
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${a.business.targetProgress}%;"></div>
                </div>
                <div class="target-text">Run-rate: ₹2.84 Cr Projected</div>
              </div>
            </div>

            <!-- Secondary Stat Block: Orders -->
            <div class="secondary-stat-col">
              <div class="secondary-stat-label">Total Orders</div>
              <div class="secondary-stat-val">${a.business.orders}</div>
              <div class="secondary-stat-delta positive">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
                ${a.business.ordersChange} vs prev
              </div>
            </div>

            <!-- Secondary Stat Block: AOV -->
            <div class="secondary-stat-col">
              <div class="secondary-stat-label">Average Order Value</div>
              <div class="secondary-stat-val">${a.business.aov}</div>
              <div class="secondary-stat-delta positive">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
                ${a.business.aovChange} vs prev
              </div>
            </div>

            <!-- Secondary Stat Block: Delivery Success -->
            <div class="secondary-stat-col">
              <div class="secondary-stat-label">Delivery Success</div>
              <div class="secondary-stat-val" style="color:var(--color-success);">${a.business.deliverySuccess}</div>
              <div class="secondary-stat-delta positive">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
                ${a.business.deliveryChange} (Ind. Avg 84%)
              </div>
            </div>

            <!-- Secondary Stat Block: RTO Rate -->
            <div class="secondary-stat-col">
              <div class="secondary-stat-label">Return to Origin (RTO)</div>
              <div class="secondary-stat-val" style="color:#60A5FA;">${a.business.rtoRate}</div>
              <div class="secondary-stat-delta positive">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                ${a.business.rtoChange} MoM drop
              </div>
            </div>
          </div>
        </section>

        <!-- 2. OPERATIONS PULSE STRIP -->
        <section class="ops-pulse-strip">
          <div class="ops-card">
            <div class="ops-card-header">
              <span>Pickup Success</span>
              <span class="badge badge-success" style="font-size:9px;">SLA MET</span>
            </div>
            <div class="ops-card-val">${a.operations.pickupSuccess}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 98.4%; background:var(--color-success);"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>In Transit Pipeline</span>
              <span style="font-family:var(--font-mono); font-size:10px;">${a.operations.inTransit} pkgs</span>
            </div>
            <div class="ops-card-val" style="color:var(--accent-cyan);">${a.operations.inTransit}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 65%; background:var(--accent-cyan);"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>Out for Delivery</span>
              <span style="font-family:var(--font-mono); font-size:10px;">Today</span>
            </div>
            <div class="ops-card-val">${a.operations.outForDelivery}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 82%; background:#60A5FA;"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>NDR Queue</span>
              <span class="badge badge-warning" style="font-size:9px;">${a.operations.ndrRate} RATE</span>
            </div>
            <div class="ops-card-val" style="color:var(--color-warning);">${a.operations.ndrActionRequired} <span style="font-size:11px; color:var(--text-tertiary); font-weight:normal;">Action Req.</span></div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 48%; background:var(--color-warning);"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>Avg Delivery Transit</span>
              <span style="font-family:var(--font-mono); font-size:10px;">Air + Surface</span>
            </div>
            <div class="ops-card-val">${a.operations.avgDeliveryTime}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 92%; background:var(--color-success);"></div>
            </div>
          </div>

          <div class="ops-card">
            <div class="ops-card-header">
              <span>Carrier SLA Adherence</span>
              <span style="font-family:var(--font-mono); font-size:10px;">Target 95%</span>
            </div>
            <div class="ops-card-val" style="color:var(--text-primary);">${a.operations.slaAdherence}</div>
            <div class="ops-mini-bar">
              <div class="ops-mini-bar-fill" style="width: 94.8%; background:var(--accent-cyan);"></div>
            </div>
          </div>
        </section>

        <!-- 3. REVENUE INTELLIGENCE (INTERACTIVE CHART) + AI INTELLIGENCE PANEL -->
        <section class="two-col-layout">
          <!-- Revenue Interactive Chart -->
          <div class="chart-panel">
            <div class="chart-header">
              <div class="chart-title-group">
                <div style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary);">Revenue Intelligence Stream</div>
                <div class="chart-legend">
                  <div class="legend-item">
                    <span class="legend-line current"></span>
                    <span>Current Period (₹2.48 Cr)</span>
                  </div>
                  <div class="legend-item">
                    <span class="legend-line previous"></span>
                    <span>Previous Baseline</span>
                  </div>
                </div>
              </div>
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">
                Hover curve for hourly / daily telemetry
              </div>
            </div>

            <div class="chart-canvas-container" id="revenue-chart-mount"></div>
          </div>

          <!-- AI Intelligence Anomaly Detection Panel (Differentiator) -->
          <div class="ai-intel-panel">
            <div class="ai-panel-header">
              <div class="ai-panel-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>AI Operational Intelligence</span>
              </div>
              <span class="badge badge-rto" style="font-size:9px;">${r.severity}</span>
            </div>

            <div class="ai-intel-card">
              <div class="ai-intel-title">
                <span>${r.title}</span>
                <span style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">${r.timestamp}</span>
              </div>

              <div class="ai-intel-field">
                <div class="ai-intel-label">WHAT CHANGED</div>
                <div class="ai-intel-text">${r.what}</div>
              </div>

              <div class="ai-intel-field">
                <div class="ai-intel-label">ROOT CAUSE (WHY)</div>
                <div class="ai-intel-text">${r.why}</div>
              </div>

              <div class="ai-intel-field">
                <div class="ai-intel-label">FINANCIAL & OPERATIONAL IMPACT</div>
                <div class="ai-impact-box">
                  <div class="impact-metric">
                    <div class="impact-metric-label">Shipments Trapped:</div>
                    <div class="impact-metric-val" style="color:var(--color-warning);">${r.impact.affectedShipments} pkgs</div>
                  </div>
                  <div class="impact-metric">
                    <div class="impact-metric-label">Revenue at Risk:</div>
                    <div class="impact-metric-val" style="color:#F87171;">${r.impact.revenueAtRisk}</div>
                  </div>
                  <div class="impact-metric">
                    <div class="impact-metric-label">Primary Carrier:</div>
                    <div class="impact-metric-val">${r.impact.primaryCourier}</div>
                  </div>
                  <div class="impact-metric">
                    <div class="impact-metric-label">Payment Mix:</div>
                    <div class="impact-metric-val">${r.impact.paymentMix}</div>
                  </div>
                </div>
              </div>

              <div class="ai-intel-field">
                <div class="ai-intel-label">RECOMMENDED ACTION PLAYBOOK</div>
                <div class="ai-intel-text" style="color:var(--text-primary);">
                  Trigger automated WhatsApp re-slotting flow & route urgent packages to BlueDart express re-attempt.
                </div>
              </div>

              <button class="btn btn-primary btn-sm" id="hero-ai-cta-btn" style="margin-top:4px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                ${r.ctaText}
              </button>
            </div>
          </div>
        </section>

        <!-- 4. COURIER BENCHMARK MATRIX & FINANCE / MARKETING OVERVIEW -->
        <section class="multi-panel-row">
          <!-- Courier Matrix -->
          <div class="table-container">
            <div class="table-toolbar">
              <div style="display:flex; align-items:center; gap:8px;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Carrier Performance & SLA Matrix</span>
              </div>
              <button class="btn btn-outline btn-sm" id="view-couriers-btn">Compare All Couriers →</button>
            </div>
            <div class="table-responsive-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Carrier Partner</th>
                    <th>Volume Share</th>
                    <th>Delivery %</th>
                    <th>NDR %</th>
                    <th>RTO %</th>
                    <th>Avg Speed</th>
                    <th>Cost/Order</th>
                    <th>Weight Disputes</th>
                    <th>SLA Score</th>
                  </tr>
                </thead>
                <tbody>
                  ${T.map(d=>`
                    <tr>
                      <td>
                        <div style="font-weight:700; color:var(--text-primary);">${d.name}</div>
                        <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">${d.totalShipments} consignments</div>
                      </td>
                      <td class="tabular-nums">${d.shipmentShare}</td>
                      <td class="tabular-nums" style="color:var(--color-success); font-weight:600;">${d.deliveryRate}</td>
                      <td class="tabular-nums" style="color:${parseFloat(d.ndrRate)>6?"var(--color-warning)":"var(--text-secondary)"}; font-weight:600;">${d.ndrRate}</td>
                      <td class="tabular-nums" style="color:${parseFloat(d.rtoRate)>3.5?"var(--color-danger)":"var(--text-secondary)"}; font-weight:600;">${d.rtoRate}</td>
                      <td class="tabular-nums">${d.avgDeliveryDays}</td>
                      <td class="tabular-nums" style="font-weight:600;">${d.costPerShipment}</td>
                      <td>
                        ${d.disputedWeightCount>20?`<span class="badge badge-warning">${d.disputedWeightCount} Disputed</span>`:`<span style="font-family:var(--font-mono); color:var(--text-tertiary);">${d.disputedWeightCount} cases</span>`}
                      </td>
                      <td>
                        <span class="badge ${d.grade.startsWith("A")?"badge-delivered":"badge-neutral"}">${d.grade} (${d.slaAdherence})</span>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Finance Snapshot & Marketing Telemetry -->
          <div style="display:flex; flex-direction:column; gap:var(--space-4);">
            <!-- Finance Snapshot -->
            <div class="chart-panel">
              <div class="chart-header">
                <div style="display:flex; align-items:center; gap:8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <span style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Logistics Finance & COD</span>
                </div>
                <button class="btn btn-outline btn-sm" id="view-finance-btn">Details →</button>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:4px;">
                <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Prepaid Wallet Balance</div>
                  <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--color-success); margin-top:2px;">${a.finance.walletBalance}</div>
                  <div style="font-size:10px; color:var(--text-tertiary);">Auto-reload at ₹2,00,000</div>
                </div>

                <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">COD Outstanding</div>
                  <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">${a.finance.codOutstanding}</div>
                  <div style="font-size:10px; color:var(--text-secondary);">₹18.4L remittance due in 48h</div>
                </div>
              </div>

              <!-- Cost of Logistics Bar -->
              <div style="margin-top:6px;">
                <div style="display:flex; justify-content:space-between; font-size:11px;">
                  <span style="color:var(--text-tertiary);">Net Logistics Cost: <strong style="color:var(--text-primary);">${a.finance.netLogisticsCostRatio} of GMV</strong></span>
                  <span style="color:var(--color-success); font-family:var(--font-mono);">-1.4% improvement</span>
                </div>
                <div class="finance-breakdown-bar">
                  <div class="f-bar-segment f-bar-freight" style="width: 68%;" title="Forward Freight: 68%"></div>
                  <div class="f-bar-segment f-bar-rto" style="width: 14%;" title="RTO Reverse Charges: 14%"></div>
                  <div class="f-bar-segment f-bar-cod" style="width: 11%;" title="COD Collection Fees: 11%"></div>
                  <div class="f-bar-segment f-bar-fuel" style="width: 7%;" title="Fuel & Handling Surcharge: 7%"></div>
                </div>
                <div class="finance-legend-grid">
                  <div class="finance-legend-item"><span class="legend-dot f-bar-freight"></span> Freight (68%)</div>
                  <div class="finance-legend-item"><span class="legend-dot f-bar-rto"></span> RTO Penalty (14%)</div>
                  <div class="finance-legend-item"><span class="legend-dot f-bar-cod"></span> COD Handling (11%)</div>
                  <div class="finance-legend-item"><span class="legend-dot f-bar-fuel"></span> Fuel Surcharge (7%)</div>
                </div>
              </div>
            </div>

            <!-- Marketing Performance Snapshot -->
            <div class="chart-panel">
              <div class="chart-header">
                <div style="display:flex; align-items:center; gap:8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  <span style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Marketing Acquisition Efficiency</span>
                </div>
                <button class="btn btn-outline btn-sm" id="view-marketing-btn">Ad Sets →</button>
              </div>

              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-top:2px;">
                <div style="background:var(--bg-base); padding:8px; border-radius:var(--radius-xs); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary);">Blended ROAS</div>
                  <div style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--color-success); margin-top:2px;">${a.marketing.blendedRoas}</div>
                </div>
                <div style="background:var(--bg-base); padding:8px; border-radius:var(--radius-xs); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary);">Blended CAC</div>
                  <div style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--text-primary); margin-top:2px;">${a.marketing.blendedCac}</div>
                </div>
                <div style="background:var(--bg-base); padding:8px; border-radius:var(--radius-xs); border:1px solid var(--border-subtle);">
                  <div style="font-size:10px; color:var(--text-tertiary);">Paid Orders</div>
                  <div style="font-family:var(--font-mono); font-size:16px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">${a.marketing.paidOrders}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;const n=new P("revenue-chart-mount"),p=s.querySelectorAll("#dashboard-date-presets .date-pill");p.forEach(d=>{d.onclick=()=>{p.forEach(l=>l.classList.remove("active")),d.classList.add("active");const v=d.getAttribute("data-tf");n.setTimeframe(v)}});const y=s.querySelector("#compare-period-toggle");y.onchange=d=>{n.toggleCompare(d.target.checked)},s.querySelector("#dashboard-export-btn").onclick=()=>{i("export-orders")},s.querySelector("#hero-ai-cta-btn").onclick=()=>{e("ndr")},s.querySelector("#view-couriers-btn").onclick=()=>{e("couriers")},s.querySelector("#view-finance-btn").onclick=()=>{e("finance")},s.querySelector("#view-marketing-btn").onclick=()=>{e("marketing")}}function Q(s,{onOpenOrder:e,onAction:t}){let i=[...w],a="all",r="all",n="",p=new Set,y="date",d=!1;function v(){return i.filter(o=>{if(a!=="all"&&o.status!==a||r!=="all"&&o.payment.type!==r)return!1;if(n){const c=n.toLowerCase();if(!(o.id.toLowerCase().includes(c)||o.customer.name.toLowerCase().includes(c)||o.customer.city.toLowerCase().includes(c)||o.shipment.awb.toLowerCase().includes(c)||o.itemSummary.toLowerCase().includes(c)))return!1}return!0}).sort((o,c)=>{let u=o[y],m=c[y];return y==="amount"&&(u=parseInt(o.amount.replace(/[^0-9]/g,""),10),m=parseInt(c.amount.replace(/[^0-9]/g,""),10)),u<m?d?-1:1:u>m?d?1:-1:0})}function l(){const o=v();s.innerHTML=`
      <div class="view-content-wrapper">
        <!-- View Header -->
        <div class="view-header">
          <div class="view-title-group">
            <div class="view-context-crumb">
              <span>OPERATIONS MODULE</span>
              <span>/</span>
              <span>DISPATCH & FULFILLMENT</span>
            </div>
            <h1 class="view-title">
              Orders Management
              <span class="badge badge-neutral tabular-nums">18,429 TOTAL</span>
            </h1>
            <div class="view-subtitle">High-density dispatch manifest, multi-channel payment verification and exceptions</div>
          </div>

          <div class="view-actions-group">
            <button class="btn btn-outline btn-sm" id="export-orders-csv-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export (CSV)
            </button>
            <button class="btn btn-primary btn-sm" id="bulk-manifest-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              Bulk Print Labels
            </button>
          </div>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="filter-bar">
          <div class="filter-group-left">
            <div class="input-wrapper" style="width: 280px;">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="input-control with-icon" id="orders-search-input" value="${n}" placeholder="Filter by Order ID, customer, AWB..." />
            </div>

            <div class="date-preset-pills" id="orders-status-pills">
              <button class="date-pill ${a==="all"?"active":""}" data-status="all">All (${i.length})</button>
              <button class="date-pill ${a==="Out for Delivery"?"active":""}" data-status="Out for Delivery">Out for Delivery</button>
              <button class="date-pill ${a==="In Transit"?"active":""}" data-status="In Transit">In Transit</button>
              <button class="date-pill ${a==="NDR"?"active":""}" data-status="NDR" style="color:var(--color-warning);">NDR Exceptions</button>
              <button class="date-pill ${a==="Delivered"?"active":""}" data-status="Delivered" style="color:var(--color-success);">Delivered</button>
              <button class="date-pill ${a==="RTO"?"active":""}" data-status="RTO" style="color:var(--color-danger);">RTO</button>
            </div>

            <select class="input-control select-control" id="orders-payment-select" style="width: 140px;">
              <option value="all" ${r==="all"?"selected":""}>Payment: All</option>
              <option value="Prepaid" ${r==="Prepaid"?"selected":""}>Prepaid (UPI/Card)</option>
              <option value="COD" ${r==="COD"?"selected":""}>COD (Cash)</option>
            </select>
          </div>

          <div class="filter-group-right">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">
              ${p.size>0?`<strong style="color:var(--accent-cyan);">${p.size} selected</strong>`:`Showing ${o.length} orders`}
            </span>
            ${p.size>0?`
              <button class="btn btn-secondary btn-sm" id="clear-selection-btn">Clear</button>
              <button class="btn btn-outline btn-sm" id="bulk-reassign-btn">Assign Courier</button>
            `:""}
          </div>
        </div>

        <!-- High Density Data Table -->
        <div class="table-container">
          <div class="table-responsive-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th style="width: 36px; text-align:center;">
                    <input type="checkbox" id="select-all-orders" ${p.size===o.length&&o.length>0?"checked":""} style="accent-color:var(--accent-cyan);" />
                  </th>
                  <th class="sortable" data-sort="id">Order ID</th>
                  <th class="sortable" data-sort="date">Date & Time</th>
                  <th>Customer & Location</th>
                  <th>Items & SKUs</th>
                  <th class="sortable" data-sort="amount">Amount</th>
                  <th>Payment</th>
                  <th>Store Channel</th>
                  <th>Warehouse Hub</th>
                  <th>AWB / Carrier</th>
                  <th>Status</th>
                  <th style="text-align:right;">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${o.length===0?`
                  <tr>
                    <td colspan="12" style="text-align:center; padding:36px; color:var(--text-tertiary);">
                      No matching orders found. Try adjusting your status or search filters.
                    </td>
                  </tr>
                `:o.map(c=>{let u="badge-delivered";c.status==="NDR"?u="badge-ndr":c.status==="RTO"?u="badge-rto":c.status==="In Transit"?u="badge-in-transit":c.status==="Out for Delivery"&&(u="badge-out-for-delivery");const m=p.has(c.id);return`
                    <tr class="${m?"selected":""} ${c.isPriority?"priority-row":""}" data-order-id="${c.id}">
                      <td style="text-align:center;">
                        <input type="checkbox" class="order-checkbox" data-id="${c.id}" ${m?"checked":""} style="accent-color:var(--accent-cyan);" />
                      </td>
                      <td>
                        <span class="row-action-link view-order-trigger" data-id="${c.id}">${c.id}</span>
                        ${c.isPriority?'<span style="font-size:9px; background:var(--accent-cyan-subtle); color:var(--accent-cyan); padding:1px 4px; border-radius:3px; margin-left:4px; font-weight:700;">PRIORITY</span>':""}
                      </td>
                      <td class="tabular-nums" style="color:var(--text-tertiary);">${c.date}</td>
                      <td>
                        <div style="font-weight:600; color:var(--text-primary);">${c.customer.name}</div>
                        <div style="font-size:10px; color:var(--text-tertiary);">${c.customer.city}, ${c.customer.pincode}</div>
                      </td>
                      <td>
                        <div style="max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:var(--text-primary);" title="${c.itemSummary}">
                          ${c.itemSummary}
                        </div>
                        <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">${c.items.length} item(s)</div>
                      </td>
                      <td class="tabular-nums" style="font-weight:700; color:var(--text-primary); font-size:13px;">${c.amount}</td>
                      <td>
                        <span class="badge ${c.payment.type==="Prepaid"?"badge-paid":"badge-warning"}">${c.payment.type}</span>
                        <div style="font-size:9px; font-family:var(--font-mono); color:var(--text-tertiary); margin-top:2px;">${c.payment.gateway.split(" ")[0]}</div>
                      </td>
                      <td style="color:var(--text-secondary);">${c.channel.split(" - ")[0]}</td>
                      <td style="color:var(--text-secondary);">${c.warehouse.split(" ")[0]}</td>
                      <td>
                        <div style="font-family:var(--font-mono); font-weight:600; color:var(--accent-cyan);">${c.shipment.awb}</div>
                        <div style="font-size:10px; color:var(--text-tertiary);">${c.shipment.courier}</div>
                      </td>
                      <td>
                        <span class="badge ${u}"><span class="badge-dot"></span>${c.status}</span>
                      </td>
                      <td style="text-align:right;">
                        <button class="btn btn-outline btn-sm view-order-trigger" data-id="${c.id}">
                          Inspect →
                        </button>
                      </td>
                    </tr>
                  `}).join("")}
              </tbody>
            </table>
          </div>

          <!-- Table Pagination Footer -->
          <div class="table-pagination">
            <div>Showing 1 to ${o.length} of 18,429 records (Sorted by ${y.toUpperCase()})</div>
            <div class="pagination-pages">
              <button class="page-btn active">1</button>
              <button class="page-btn">2</button>
              <button class="page-btn">3</button>
              <button class="page-btn">...</button>
              <button class="page-btn">184</button>
            </div>
          </div>
        </div>
      </div>
    `,g()}function g(){const o=s.querySelector("#orders-search-input");o.oninput=h=>{n=h.target.value,l()},s.querySelectorAll("#orders-status-pills .date-pill").forEach(h=>{h.onclick=()=>{a=h.getAttribute("data-status"),l()}});const c=s.querySelector("#orders-payment-select");c.onchange=h=>{r=h.target.value,l()},s.querySelector("#export-orders-csv-btn").onclick=()=>{t("export-orders")},s.querySelector("#bulk-manifest-btn").onclick=()=>{const h=p.size||184;f.show({title:"Bulk Printing Triggered",message:`Queued thermal printing of ${h} shipping labels and warehouse picklists.`,type:"success"})};const u=s.querySelector("#clear-selection-btn");u&&(u.onclick=()=>{p.clear(),l()});const m=s.querySelector("#select-all-orders");m&&(m.onchange=h=>{const b=v();h.target.checked?b.forEach(x=>p.add(x.id)):p.clear(),l()}),s.querySelectorAll(".order-checkbox").forEach(h=>{h.onchange=b=>{const x=h.getAttribute("data-id");b.target.checked?p.add(x):p.delete(x),l()}}),s.querySelectorAll("th.sortable").forEach(h=>{h.onclick=()=>{const b=h.getAttribute("data-sort");y===b?d=!d:(y=b,d=!0),l()}}),s.querySelectorAll(".view-order-trigger").forEach(h=>{h.onclick=()=>{const b=h.getAttribute("data-id"),x=i.find(k=>k.id===b);x&&e(x)}})}l()}function X(s,{onOpenOrder:e}){s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONS MODULE</span>
            <span>/</span>
            <span>LINEHAUL & LAST-MILE LOGISTICS</span>
          </div>
          <h1 class="view-title">
            Shipments & Tracking Pipeline
            <span class="badge badge-delivered tabular-nums">18,142 ACTIVE</span>
          </h1>
          <div class="view-subtitle">Real-time carrier event streaming, delivery estimations and SLA tracking</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            Sync All Carriers (14ms)
          </button>
        </div>
      </div>

      <!-- Shipment Tracking Flow Pipeline Visualizer -->
      <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
        <div style="font-size:11px; font-family:var(--font-display); font-weight:700; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:12px;">
          CONSOLIDATED CARRIER PIPELINE STAGES
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px;">
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid var(--border-strong);">
            <div style="font-size:10px; color:var(--text-tertiary);">1. Order Created</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--text-primary); margin-top:2px;">18,429</div>
            <div style="font-size:10px; color:var(--color-success);">100% captured</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid #6366F1;">
            <div style="font-size:10px; color:var(--text-tertiary);">2. AWB Assigned</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:#818CF8; margin-top:2px;">18,142</div>
            <div style="font-size:10px; color:var(--text-secondary);">Avg 1.2m routing</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid var(--accent-cyan);">
            <div style="font-size:10px; color:var(--text-tertiary);">3. Picked Up</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">17,850</div>
            <div style="font-size:10px; color:var(--color-success);">98.4% pickup SLA</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid var(--color-info);">
            <div style="font-size:10px; color:var(--text-tertiary);">4. In Transit</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:#60A5FA; margin-top:2px;">1,142</div>
            <div style="font-size:10px; color:var(--text-secondary);">Linehaul active</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid #F59E0B;">
            <div style="font-size:10px; color:var(--text-tertiary);">5. Out for Delivery</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:#FBBF24; margin-top:2px;">364</div>
            <div style="font-size:10px; color:var(--color-warning);">Last-mile van</div>
          </div>
          <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border-left:3px solid var(--color-success);">
            <div style="font-size:10px; color:var(--text-tertiary);">6. Delivered</div>
            <div style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--color-success); margin-top:2px;">16,636</div>
            <div style="font-size:10px; color:var(--color-success);">91.7% Delivered</div>
          </div>
        </div>
      </div>

      <!-- Shipments Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Live Carrier Manifest & Tracking Events</div>
          <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">Showing recent consignments across Delhivery, BlueDart, DTDC, Shadowfax</div>
        </div>
        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>AWB Number</th>
                <th>Order Ref</th>
                <th>Courier Partner</th>
                <th>Origin Facility</th>
                <th>Destination City</th>
                <th>Dead / Vol. Weight</th>
                <th>Est. Delivery (EDD)</th>
                <th>Shipping Cost</th>
                <th>Current Status</th>
                <th style="text-align:right;">Timeline Action</th>
              </tr>
            </thead>
            <tbody>
              ${w.map(t=>{let i="badge-delivered";return t.status==="NDR"?i="badge-ndr":t.status==="RTO"?i="badge-rto":t.status==="In Transit"?i="badge-in-transit":t.status==="Out for Delivery"&&(i="badge-out-for-delivery"),`
                  <tr>
                    <td>
                      <span class="row-action-link shipment-click" data-id="${t.id}">${t.shipment.awb}</span>
                    </td>
                    <td class="tabular-nums" style="color:var(--text-tertiary);">${t.id}</td>
                    <td>
                      <div style="font-weight:600; color:var(--text-primary);">${t.shipment.courier}</div>
                    </td>
                    <td style="color:var(--text-secondary);">${t.warehouse.split(" (")[0]}</td>
                    <td>
                      <div style="font-weight:600; color:var(--text-primary);">${t.customer.city}</div>
                      <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">${t.customer.pincode}</div>
                    </td>
                    <td class="tabular-nums">${t.shipment.deadWeight} / ${t.shipment.volWeight}</td>
                    <td class="tabular-nums" style="color:var(--accent-cyan); font-weight:600;">${t.shipment.edd}</td>
                    <td class="tabular-nums" style="font-weight:600; color:var(--text-primary);">₹88.50</td>
                    <td>
                      <span class="badge ${i}"><span class="badge-dot"></span>${t.status}</span>
                    </td>
                    <td style="text-align:right;">
                      <button class="btn btn-outline btn-sm shipment-click" data-id="${t.id}">
                        View Timeline →
                      </button>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,s.querySelectorAll(".shipment-click").forEach(t=>{t.onclick=()=>{const i=t.getAttribute("data-id"),a=w.find(r=>r.id===i);a&&e(a)}})}function Z(s,{onOpenOrder:e,onAction:t}){s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONAL RECOVERY</span>
            <span>/</span>
            <span>EXCEPTION MANAGEMENT</span>
          </div>
          <h1 class="view-title">
            NDR Recovery Cockpit
            <span class="badge badge-warning tabular-nums">184 ACTION REQUIRED</span>
          </h1>
          <div class="view-subtitle">Automated and agent-assisted last-mile delivery failure interventions</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="ndr-trigger-all-wa">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Auto-Run WhatsApp Bot on 184 Cases
          </button>
        </div>
      </div>

      <!-- NDR Telemetry Cockpit Header -->
      <div class="ndr-cockpit-header">
        <div class="ndr-stat-cell">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Total NDR Queue</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">342</div>
          <div style="font-size:10px; color:var(--text-secondary);">5.2% of current deliveries</div>
        </div>

        <div class="ndr-stat-cell">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Action Required Immediately</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-warning); margin-top:2px;">184</div>
          <div style="font-size:10px; color:#FBBF24;">Under 12h resolution SLA</div>
        </div>

        <div class="ndr-stat-cell">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Resolved Today</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">158</div>
          <div style="font-size:10px; color:var(--color-success);">+38 via Automated Bot</div>
        </div>

        <div class="ndr-stat-cell">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">NDR Recovery Rate</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">72.4%</div>
          <div style="font-size:10px; color:var(--text-tertiary);">Industry baseline: 48.0%</div>
        </div>
      </div>

      <!-- Actionable NDR Queue Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">High Priority NDR Exceptions</span>
          </div>
          <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">
            Intervene before carrier triggers automatic Return to Origin (RTO)
          </div>
        </div>

        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>AWB / Order ID</th>
                <th>Consignee</th>
                <th>Location</th>
                <th>Carrier</th>
                <th>NDR Reason & Attempt</th>
                <th>Age</th>
                <th>Order Value & Pay</th>
                <th>Status</th>
                <th style="text-align:right;">Immediate Actions</th>
              </tr>
            </thead>
            <tbody>
              ${W.map(i=>`
                <tr>
                  <td>
                    <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); cursor:pointer;" class="open-ndr-order" data-id="${i.orderId}">${i.awb}</div>
                    <div style="font-size:10px; color:var(--text-tertiary); font-family:var(--font-mono);">${i.orderId}</div>
                  </td>
                  <td>
                    <div style="font-weight:600; color:var(--text-primary);">${i.customerName}</div>
                    <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-secondary);">${i.phone}</div>
                  </td>
                  <td>
                    <div style="font-weight:500; color:var(--text-primary);">${i.city}</div>
                    <div style="font-size:10px; color:var(--text-tertiary);">${i.state}</div>
                  </td>
                  <td>
                    <div style="font-weight:600; color:var(--text-secondary);">${i.courier}</div>
                  </td>
                  <td>
                    <div style="color:#FBBF24; font-weight:600; max-width:240px; white-space:normal; line-height:1.3;">
                      ${i.ndrReason}
                    </div>
                    <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary); margin-top:2px;">Attempt ${i.attempt} of 3</div>
                  </td>
                  <td class="tabular-nums" style="color:var(--text-tertiary);">${i.ageHours}h</td>
                  <td>
                    <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary);">${i.orderAmount}</div>
                    <span class="badge ${i.paymentType==="COD"?"badge-warning":"badge-paid"}" style="font-size:9px;">${i.paymentType}</span>
                  </td>
                  <td>
                    <span class="badge ${i.status==="ACTION_REQUIRED"?"badge-ndr":i.status==="RESOLVED"?"badge-delivered":"badge-neutral"}">
                      ${i.status}
                    </span>
                  </td>
                  <td style="text-align:right;">
                    <div style="display:flex; justify-content:flex-end; gap:6px;">
                      <button class="btn btn-primary btn-sm action-wa-btn" data-order-id="${i.orderId}" title="Send Automated WhatsApp Verification">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                        WhatsApp
                      </button>
                      <button class="btn btn-secondary btn-sm action-call-btn" data-order-id="${i.orderId}" title="Dial Consignee directly">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Call
                      </button>
                      <button class="btn btn-outline btn-sm action-reschedule-btn" data-order-id="${i.orderId}">
                        Slot
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,s.querySelectorAll(".open-ndr-order").forEach(i=>{i.onclick=()=>{const a=i.getAttribute("data-id"),r=w.find(n=>n.id===a)||w[1];e(r)}}),s.querySelectorAll(".action-wa-btn").forEach(i=>{i.onclick=()=>{const a=i.getAttribute("data-order-id"),r=w.find(n=>n.id===a)||w[1];t("whatsapp-ndr",r)}}),s.querySelectorAll(".action-call-btn").forEach(i=>{i.onclick=()=>{const a=i.getAttribute("data-order-id"),r=w.find(n=>n.id===a)||w[1];t("call-customer",r)}}),s.querySelectorAll(".action-reschedule-btn").forEach(i=>{i.onclick=()=>{const a=i.getAttribute("data-order-id");f.show({title:"Reattempt Slot Booked",message:`Consignment ${a} rescheduled for tomorrow morning van delivery.`,type:"success"})}}),s.querySelector("#ndr-trigger-all-wa").onclick=()=>{f.show({title:"Batch NDR WhatsApp Bot Dispatched",message:"Queued automated interactive delivery verification messages to 184 customers.",type:"success"})}}function J(s,{onAction:e}){s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONAL AUDIT</span>
            <span>/</span>
            <span>CARRIER FREIGHT RECONCILIATION</span>
          </div>
          <h1 class="view-title">
            Weight Reconciliation & Disputes
            <span class="badge badge-warning tabular-nums">89 FLAGGED CASES</span>
          </h1>
          <div class="view-subtitle">Automated optical scan reconciliation, volumetric bulge detection and dispute recovery</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-primary btn-sm" id="bulk-dispute-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.9 1.4l-2.4 7.4A2 2 0 0 0 4.1 19h15.8a2 2 0 0 0 1.9-2.2l-2.4-7.4A2 2 0 0 0 17.5 8h-11Z"/></svg>
            File Bulk Dispute (Save ₹41,200)
          </button>
        </div>
      </div>

      <!-- Financial Impact Telemetry Bar -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Flagged Carrier Overcharges</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-warning); margin-top:2px;">₹41,200.00</div>
          <div style="font-size:10px; color:var(--text-secondary);">89 shipments • DTDC & Xpressbees</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Dispute Recovery Rate</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">94.2%</div>
          <div style="font-size:10px; color:var(--color-success);">Backed by Packing Station CCTV Scales</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Recovered This Month (MTD)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">₹72,450.00</div>
          <div style="font-size:10px; color:var(--text-secondary);">Credited to Prepaid Shipping Wallet</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Avg Discrepancy Slab</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">+620 g</div>
          <div style="font-size:10px; color:var(--color-danger);">Billed at higher 1kg slab</div>
        </div>
      </div>

      <!-- Weight Disputes Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">Discrepancy Audit Queue</div>
          <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">Disputes must be raised within 7 days of invoice billing</div>
        </div>

        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Dispute ID / AWB</th>
                <th>Order Ref</th>
                <th>Carrier Partner</th>
                <th>Declared Dead Weight</th>
                <th>Carrier Billed Weight</th>
                <th>Discrepancy (Δ)</th>
                <th>Financial Penalty</th>
                <th>Proof Status</th>
                <th>Dispute Status</th>
                <th style="text-align:right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${V.map(t=>`
                <tr>
                  <td>
                    <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary);">${t.id}</div>
                    <div style="font-size:10px; font-family:var(--font-mono); color:var(--accent-cyan);">${t.awb}</div>
                  </td>
                  <td class="tabular-nums" style="color:var(--text-tertiary);">${t.orderId}</td>
                  <td>
                    <div style="font-weight:600; color:var(--text-primary);">${t.courier}</div>
                  </td>
                  <td class="tabular-nums" style="font-weight:600; color:var(--color-success);">${t.declaredWeight}</td>
                  <td class="tabular-nums" style="font-weight:700; color:var(--color-danger);">${t.courierWeight}</td>
                  <td>
                    <span class="badge badge-warning" style="font-size:10px;">${t.difference}</span>
                  </td>
                  <td class="tabular-nums" style="font-weight:700; color:#F87171; font-size:13px;">${t.additionalCharge}</td>
                  <td>
                    ${t.proofAvailable?'<span style="color:var(--color-success); font-size:11px; display:flex; align-items:center; gap:4px;">✓ Photo Scale Proof</span>':"Pending"}
                  </td>
                  <td>
                    <span class="badge ${t.status==="DISPUTE_WON"?"badge-delivered":t.status==="DISPUTE_SUBMITTED"?"badge-in-transit":"badge-warning"}">
                      ${t.status}
                    </span>
                  </td>
                  <td style="text-align:right;">
                    ${t.status==="FLAGGED_DISPUTE"?`
                      <button class="btn btn-primary btn-sm raise-dispute-trigger" data-id="${t.id}">
                        Raise Dispute →
                      </button>
                    `:`
                      <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">Submitted</span>
                    `}
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,s.querySelector("#bulk-dispute-btn").onclick=()=>{e("dispute-weight")},s.querySelectorAll(".raise-dispute-trigger").forEach(t=>{t.onclick=()=>{e("dispute-weight")}})}function ee(s){s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>OPERATIONAL PARTNERS</span>
            <span>/</span>
            <span>CARRIER BENCHMARKING</span>
          </div>
          <h1 class="view-title">
            Carrier Performance & SLA Intelligence
            <span class="badge badge-cyan tabular-nums">5 INTEGRATED CARRIERS</span>
          </h1>
          <div class="view-subtitle">Comparative courier speed, delivery success, RTO attrition, and unit economics</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="adjust-routing-rules-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Smart Routing Rules Engine
          </button>
        </div>
      </div>

      <!-- Carrier Comparison Grid Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px;">
        ${T.map(e=>`
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">${e.name}</div>
                <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">${e.totalShipments} consignments (${e.shipmentShare} volume)</div>
              </div>
              <span class="badge ${e.grade.startsWith("A")?"badge-delivered":"badge-warning"}" style="font-size:12px;">GRADE ${e.grade}</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <div>
                <span style="color:var(--text-tertiary);">Delivery Success:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--color-success); font-size:13px;">${e.deliveryRate}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">RTO Rate:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:${parseFloat(e.rtoRate)>3.5?"var(--color-danger)":"var(--text-primary)"}; font-size:13px;">${e.rtoRate}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Avg Delivery Time:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${e.avgDeliveryDays}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Avg Cost/Shipment:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); font-size:13px;">${e.costPerShipment}</div>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; padding-top:4px;">
              <span style="color:var(--text-tertiary);">SLA Adherence: <strong style="color:var(--text-primary);">${e.slaAdherence}</strong></span>
              <span style="color:var(--text-tertiary);">${e.disputedWeightCount} weight disputes</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,s.querySelector("#adjust-routing-rules-btn").onclick=()=>{f.show({title:"Smart Routing Optimizer",message:"Priority weights updated: Tier-1 Metros routed to BlueDart; Tier-2/3 routed to Delhivery Surface.",type:"success"})}}function te(s){s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>FULFILLMENT INFRASTRUCTURE</span>
            <span>/</span>
            <span>MULTI-NODE INVENTORY</span>
          </div>
          <h1 class="view-title">
            Fulfillment Hubs & Warehouses
            <span class="badge badge-delivered tabular-nums">4 ACTIVE FACILITIES</span>
          </h1>
          <div class="view-subtitle">Real-time facility utilization, linehaul dock dispatch times, and pickup SLAs</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="rebalance-inventory-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            Rebalance Hub Inventory
          </button>
        </div>
      </div>

      <!-- Warehouse Facility Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:16px;">
        ${q.map(e=>`
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">${e.name}</div>
                <div style="font-size:11px; color:var(--text-tertiary);">${e.location}</div>
              </div>
              <span class="badge badge-delivered" style="font-size:10px;">${e.dispatchHealth}</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:var(--bg-base); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <div>
                <span style="color:var(--text-tertiary);">Current Utilization:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--accent-cyan);">${e.currentUtilization}</div>
                <div style="font-size:10px; color:var(--text-tertiary);">Cap: ${e.dailyCapacity}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Active Orders in Queue:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${e.activeOrders} pkgs</div>
                <div style="font-size:10px; color:var(--text-secondary);">Avg Pick: ${e.avgFulfillmentTime}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Carrier Pickup SLA:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-success);">${e.pickupSla}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Dock Turnaround:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">28 mins</div>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; padding-top:4px;">
              <span style="color:var(--text-tertiary);">Active Couriers: Delhivery, BlueDart, DTDC</span>
              <a href="javascript:void(0)" style="font-weight:600; color:var(--accent-cyan);">Inspect Manifest →</a>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,s.querySelector("#rebalance-inventory-btn").onclick=()=>{f.show({title:"Inter-Hub Transfer Simulation",message:"Proposed transfer: 420 SKUs from Bhiwandi to Nelamangala to reduce south transit latency.",type:"success"})}}function ae(s){s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>COMMERCIAL INTELLIGENCE</span>
            <span>/</span>
            <span>CUSTOMER 360 & RTO PROPENSITY</span>
          </div>
          <h1 class="view-title">
            Customer 360 Directory
            <span class="badge badge-cyan tabular-nums">142,800 PROFILES</span>
          </h1>
          <div class="view-subtitle">Consolidated commercial spend, delivery history, return propensity, and payment preferences</div>
        </div>

        <div class="view-actions-group">
          <div class="input-wrapper" style="width: 240px;">
            <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" class="input-control with-icon" placeholder="Search customer, phone..." />
          </div>
        </div>
      </div>

      <!-- Customer Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(360px, 1fr)); gap:16px;">
        ${G.map(e=>`
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">${e.name}</div>
                <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">${e.phone} &nbsp;•&nbsp; ${e.email}</div>
                <div style="font-size:11px; color:var(--accent-cyan); margin-top:2px;">${e.city}, ${e.state}</div>
              </div>
              <span class="badge ${e.segment.includes("VIP")?"badge-ai":"badge-neutral"}">${e.segment}</span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <div>
                <span style="color:var(--text-tertiary); font-size:10px;">Total Orders:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${e.ordersCount}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary); font-size:10px;">Lifetime Value:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); font-size:13px;">${e.lifetimeSpend}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary); font-size:10px;">AOV:</span>
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${e.aov}</div>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:4px; font-size:11px; border-top:1px solid var(--border-subtle); padding-top:8px;">
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--text-tertiary);">RTO Risk Propensity:</span>
                <span style="font-family:var(--font-mono); font-weight:700; color:${e.rtoRisk.includes("HIGH")?"var(--color-danger)":"var(--color-success)"};">${e.rtoRisk}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--text-tertiary);">Payment Behavior:</span>
                <span style="color:var(--text-secondary);">${e.preferredPayment}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--text-tertiary);">Latest Order:</span>
                <span style="color:var(--text-primary); font-family:var(--font-mono);">${e.lastOrder}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ie(s){const e=I.finance;s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>FINANCIAL CONTROLS</span>
            <span>/</span>
            <span>CARRIER REMITTANCE & FREIGHT AUDIT</span>
          </div>
          <h1 class="view-title">
            Logistics Finance & COD Escrow
            <span class="badge badge-success tabular-nums">RECONCILED</span>
          </h1>
          <div class="view-subtitle">Consolidated wallet reserves, carrier remittance cycles, freight auditing and net logistics margin</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="download-remittance-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download COD Remittance Advice
          </button>
          <button class="btn btn-primary btn-sm" id="topup-wallet-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Top-up Shipping Wallet
          </button>
        </div>
      </div>

      <!-- Financial KPI Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Prepaid Wallet Balance</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">${e.walletBalance}</div>
          <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Auto-reload threshold: ${e.walletThreshold}</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">COD Outstanding</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">${e.codOutstanding}</div>
          <div style="font-size:10px; color:var(--text-secondary); margin-top:2px;">3,420 uncollected orders</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Remittance Due (48h)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${e.codRemittanceDue}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">Delhivery ₹10.8L + BlueDart ₹7.6L</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Shipping Spend (MTD)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${e.shippingSpend}</div>
          <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Net freight invoices</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Net Logistics Cost Ratio</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">${e.netLogisticsCostRatio}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">Down from ${e.previousLogisticsCostRatio} of GMV</div>
        </div>
      </div>

      <!-- Cost Breakdown & Remittance Schedule -->
      <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:16px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Freight Charges Breakdown</div>
          <div style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">Detailed composition of the ₹18.24 Lakhs monthly shipping expenditure</div>

          <div class="finance-breakdown-bar" style="height:14px;">
            <div class="f-bar-segment f-bar-freight" style="width: 68%;"></div>
            <div class="f-bar-segment f-bar-rto" style="width: 14%;"></div>
            <div class="f-bar-segment f-bar-cod" style="width: 11%;"></div>
            <div class="f-bar-segment f-bar-fuel" style="width: 7%;"></div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:14px;">
            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="legend-dot f-bar-freight"></span>
                <span style="font-size:11px; font-weight:600; color:var(--text-primary);">Forward Freight (68%)</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary); margin-top:4px;">₹12,40,328</div>
              <div style="font-size:10px; color:var(--text-tertiary);">Base slab rate across 18,142 pkgs</div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="legend-dot f-bar-rto"></span>
                <span style="font-size:11px; font-weight:600; color:var(--text-primary);">Reverse RTO Penalty (14%)</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-danger); margin-top:4px;">₹2,55,444</div>
              <div style="font-size:10px; color:var(--text-tertiary);">Reverse pickup + processing fees</div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="legend-dot f-bar-cod"></span>
                <span style="font-size:11px; font-weight:600; color:var(--text-primary);">COD Collection Fee (11%)</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-warning); margin-top:4px;">₹2,00,706</div>
              <div style="font-size:10px; color:var(--text-tertiary);">₹35/order or 1.5% carrier handling</div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="legend-dot f-bar-fuel"></span>
                <span style="font-size:11px; font-weight:600; color:var(--text-primary);">Fuel Surcharge & Taxes (7%)</span>
              </div>
              <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary); margin-top:4px;">₹1,28,122</div>
              <div style="font-size:10px; color:var(--text-tertiary);">Dynamic aviation fuel index</div>
            </div>
          </div>
        </div>

        <!-- Remittance Schedule -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-family:var(--font-display); font-size:14px; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Upcoming Remittance Payouts</div>
          <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-weight:700; color:var(--text-primary); font-size:12px;">Delhivery Logistics Ltd</div>
                <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">Cycle #DEL-REMIT-901</div>
              </div>
              <div style="text-align:right;">
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); font-size:13px;">₹10,80,000</div>
                <span class="badge badge-warning" style="font-size:9px;">Due Tomorrow</span>
              </div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-weight:700; color:var(--text-primary); font-size:12px;">BlueDart Express Ltd</div>
                <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">Cycle #BD-REMIT-884</div>
              </div>
              <div style="text-align:right;">
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--color-success); font-size:13px;">₹7,60,000</div>
                <span class="badge badge-delivered" style="font-size:9px;">Remitted Today</span>
              </div>
            </div>

            <div style="background:var(--bg-base); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-weight:700; color:var(--text-primary); font-size:12px;">DTDC Courier Priority</div>
                <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">Cycle #DTDC-REMIT-412</div>
              </div>
              <div style="text-align:right;">
                <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">₹3,42,000</div>
                <span class="badge badge-neutral" style="font-size:9px;">In 4 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,s.querySelector("#download-remittance-btn").onclick=()=>{f.show({title:"Remittance Advice Generated",message:"EcomIQ_COD_Bank_Remittance_Advice.pdf ready for download.",type:"success"})},s.querySelector("#topup-wallet-btn").onclick=()=>{f.show({title:"Prepaid Wallet Top-Up",message:"Initiated ₹5,00,000 corporate netbanking transfer to freight escrow.",type:"success"})}}function re(s){const e=I.marketing;s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>GROWTH & PERFORMANCE MARKETING</span>
            <span>/</span>
            <span>ATTRIBUTION ENGINE</span>
          </div>
          <h1 class="view-title">
            Marketing Attribution & CAC Efficiency
            <span class="badge badge-success tabular-nums">4.82x BLENDED ROAS</span>
          </h1>
          <div class="view-subtitle">Multi-channel ad spend, revenue attribution, ROAS pacing, and unit CAC across Meta, Google & Amazon</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="sync-pixel-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            Sync Meta CAPI & Google Conversions
          </button>
        </div>
      </div>

      <!-- Top Summary KPIs -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Total Ad Spend (MTD)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${e.adSpend}</div>
          <div style="font-size:10px; color:var(--text-secondary); margin-top:2px;">Across 3 active ad networks</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Attributed Revenue</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--accent-cyan); margin-top:2px;">${e.attributedRevenue}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">63.7% of total brand revenue</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Blended ROAS</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--color-success); margin-top:2px;">${e.blendedRoas}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">+0.42x vs target of 4.40x</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">Customer Acquisition Cost (CAC)</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${e.blendedCac}</div>
          <div style="font-size:10px; color:var(--color-success); margin-top:2px;">-₹24 improvement MoM</div>
        </div>

        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px;">
          <div style="font-size:10px; color:var(--text-tertiary); text-transform:uppercase;">New Customer Acquisition</div>
          <div style="font-family:var(--font-mono); font-size:24px; font-weight:700; color:var(--text-primary); margin-top:2px;">${e.newCustomerPct}</div>
          <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">8,984 first-time buyers</div>
        </div>
      </div>

      <!-- Channel Breakdown Cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:16px;">
        ${N.map(t=>`
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">${t.channel}</div>
                <div style="font-size:11px; color:var(--accent-cyan); margin-top:2px;">Top: ${t.topCampaign}</div>
              </div>
              <span class="badge ${t.status==="SCALE"?"badge-delivered":"badge-warning"}">${t.status}</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:var(--bg-base); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); font-size:11px;">
              <div>
                <span style="color:var(--text-tertiary);">Ad Spend:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${t.spend}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Attributed GMV:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--accent-cyan);">${t.revenue}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Reported ROAS:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--color-success);">${t.roas}</div>
              </div>
              <div>
                <span style="color:var(--text-tertiary);">Unit CAC:</span>
                <div style="font-family:var(--font-mono); font-size:15px; font-weight:700; color:var(--text-primary);">${t.cac}</div>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; padding-top:4px;">
              <span style="color:var(--text-tertiary);">Orders Generated: <strong style="color:var(--text-primary); font-family:var(--font-mono);">${t.orders}</strong></span>
              <span class="badge badge-neutral" style="font-size:9px;">Efficiency: ${t.efficiencyRating}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,s.querySelector("#sync-pixel-btn").onclick=()=>{f.show({title:"CAPI Signal Synced",message:"12,410 server-side purchase events reconciled with Meta and Google Ad sets.",type:"success"})}}function se(s){let e="revenue",t="state";const i={state:[{dim:"Maharashtra",metricVal:"₹84,20,000",share:"33.9%",count:"6,240 orders",rto:"3.4%"},{dim:"Karnataka",metricVal:"₹52,10,000",share:"21.0%",count:"3,890 orders",rto:"1.8%"},{dim:"Delhi NCR",metricVal:"₹46,40,000",share:"18.7%",count:"3,410 orders",rto:"2.6%"},{dim:"Tamil Nadu",metricVal:"₹28,60,000",share:"11.5%",count:"2,120 orders",rto:"2.1%"},{dim:"Gujarat",metricVal:"₹21,80,000",share:"8.8%",count:"1,620 orders",rto:"2.9%"},{dim:"Others / Rest of India",metricVal:"₹15,14,500",share:"6.1%",count:"1,149 orders",rto:"4.8%"}],courier:[{dim:"Delhivery Surface & Express",metricVal:"₹1,04,26,000",share:"42.0%",count:"7,618 orders",rto:"2.8%"},{dim:"BlueDart Air Apex",metricVal:"₹69,50,000",share:"28.0%",count:"5,080 orders",rto:"1.6%"},{dim:"DTDC Priority",metricVal:"₹39,71,000",share:"16.0%",count:"2,902 orders",rto:"4.2%"},{dim:"Shadowfax Direct",metricVal:"₹22,34,000",share:"9.0%",count:"1,632 orders",rto:"3.4%"},{dim:"Xpressbees Logistics",metricVal:"₹12,43,500",share:"5.0%",count:"910 orders",rto:"4.9%"}],payment:[{dim:"Prepaid Razorpay (UPI / NetBanking)",metricVal:"₹1,58,87,000",share:"64.0%",count:"11,794 orders",rto:"1.1%"},{dim:"Cash on Delivery (COD)",metricVal:"₹89,37,500",share:"36.0%",count:"6,635 orders",rto:"4.8%"}]};function a(){const r=i[t]||i.state;s.innerHTML=`
      <div class="view-content-wrapper">
        <div class="view-header">
          <div class="view-title-group">
            <div class="view-context-crumb">
              <span>EXPLORATION ENGINE</span>
              <span>/</span>
              <span>MULTI-DIMENSIONAL SLICING</span>
            </div>
            <h1 class="view-title">
              Deep Analytics & Dimension Slicing
            </h1>
            <div class="view-subtitle">Select any commercial metric + operational dimension to dissect business drivers</div>
          </div>

          <div class="view-actions-group">
            <button class="btn btn-outline btn-sm" id="save-report-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              Save Custom Report View
            </button>
            <button class="btn btn-primary btn-sm" id="export-analytics-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export Slice (CSV)
            </button>
          </div>
        </div>

        <!-- Query Builder Strip: Metric + Dimension + Period -->
        <div class="filter-bar" style="background:var(--bg-surface-elevated);">
          <div class="filter-group-left">
            <span style="font-size:11px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.06em;">SLICE QUERY:</span>

            <select class="input-control select-control" id="metric-select" style="width:180px; font-weight:600; color:var(--accent-cyan);">
              <option value="revenue" ${e==="revenue"?"selected":""}>Metric: Gross Revenue (₹)</option>
              <option value="orders" ${e==="orders"?"selected":""}>Metric: Order Volume</option>
              <option value="rto" ${e==="rto"?"selected":""}>Metric: RTO Attrition Rate</option>
            </select>

            <span style="color:var(--text-tertiary); font-size:12px;">BY</span>

            <select class="input-control select-control" id="dimension-select" style="width:200px; font-weight:600; color:var(--text-primary);">
              <option value="state" ${t==="state"?"selected":""}>Dimension: State / Geography</option>
              <option value="courier" ${t==="courier"?"selected":""}>Dimension: Courier Partner</option>
              <option value="payment" ${t==="payment"?"selected":""}>Dimension: Payment Mode (COD vs Prepaid)</option>
            </select>

            <span style="color:var(--text-tertiary); font-size:12px;">FOR</span>

            <span class="badge badge-neutral" style="font-family:var(--font-mono); font-size:11px;">Last 30 Days (MTD)</span>
          </div>

          <div class="filter-group-right">
            <span style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">
              Aggregated across 18,429 orders
            </span>
          </div>
        </div>

        <!-- Dimension Slice Breakdown Table -->
        <div class="table-container">
          <div class="table-toolbar">
            <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary);">
              Query Results: ${e.toUpperCase()} by ${t.toUpperCase()}
            </div>
            <div style="font-size:11px; color:var(--text-tertiary); font-family:var(--font-mono);">
              Benchmark vs previous 30-day baseline
            </div>
          </div>

          <div class="table-responsive-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>${t==="state"?"State / Region":t==="courier"?"Courier Carrier":"Payment Method"}</th>
                  <th>Revenue Contribution</th>
                  <th>Share of Total</th>
                  <th>Order Volume</th>
                  <th>RTO Rate</th>
                  <th>Visual Share Distribution</th>
                </tr>
              </thead>
              <tbody>
                ${r.map(n=>`
                  <tr>
                    <td>
                      <div style="font-weight:700; color:var(--text-primary); font-size:13px;">${n.dim}</div>
                    </td>
                    <td class="tabular-nums" style="font-weight:700; color:var(--accent-cyan); font-size:14px;">${n.metricVal}</td>
                    <td class="tabular-nums" style="font-weight:600; color:var(--text-primary);">${n.share}</td>
                    <td class="tabular-nums" style="color:var(--text-secondary);">${n.count}</td>
                    <td class="tabular-nums" style="font-weight:600; color:${parseFloat(n.rto)>3?"var(--color-danger)":"var(--color-success)"};">${n.rto}</td>
                    <td style="width: 260px;">
                      <div class="ops-mini-bar" style="height:6px;">
                        <div class="ops-mini-bar-fill" style="width: ${n.share}; background:var(--accent-cyan);"></div>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,s.querySelector("#metric-select").onchange=n=>{e=n.target.value,a()},s.querySelector("#dimension-select").onchange=n=>{t=n.target.value,a()},s.querySelector("#save-report-btn").onclick=()=>{f.show({title:"Report Saved",message:`Saved view "${e.toUpperCase()} by ${t.toUpperCase()}" to your workspace dashboard.`,type:"success"})},s.querySelector("#export-analytics-btn").onclick=()=>{f.show({title:"Slice Exported",message:"EcomIQ_Dimension_Slice_Report.csv downloaded.",type:"success"})}}a()}function oe(s,{onNavigate:e}){s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>SYNTHETIC INTELLIGENCE</span>
            <span>/</span>
            <span>ANOMALY & ROOT CAUSE ENGINE</span>
          </div>
          <h1 class="view-title">
            AI Operational Intelligence Feed
            <span class="badge badge-ai tabular-nums">3 ACTIVE PATTERNS</span>
          </h1>
          <div class="view-subtitle">Automatic pattern recognition, courier anomaly detection, financial leakage alerts, and remediation playbooks</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-outline btn-sm" id="rescan-ai-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            Re-run Pattern Recognition Scanner
          </button>
        </div>
      </div>

      <!-- Feed of Root Cause Cards -->
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${L.map(t=>`
          <div class="ai-intel-panel" style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span class="badge ${t.severity==="CRITICAL"?"badge-rto":t.severity==="HIGH"?"badge-warning":"badge-cyan"}">
                  ${t.severity} SEVERITY
                </span>
                <span style="font-family:var(--font-display); font-size:16px; font-weight:700; color:var(--text-primary);">${t.title}</span>
              </div>
              <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">${t.timestamp}</span>
            </div>

            <div style="display:grid; grid-template-columns:1.8fr 1fr; gap:16px;">
              <div style="display:flex; flex-direction:column; gap:12px;">
                <div class="ai-intel-field">
                  <div class="ai-intel-label">OBSERVATION — WHAT CHANGED</div>
                  <div class="ai-intel-text" style="font-size:13px; color:var(--text-primary);">${t.what}</div>
                </div>

                <div class="ai-intel-field">
                  <div class="ai-intel-label">ROOT CAUSE — WHY DID IT HAPPEN</div>
                  <div class="ai-intel-text" style="font-size:13px;">${t.why}</div>
                </div>

                <div class="ai-intel-field">
                  <div class="ai-intel-label">RECOMMENDED INTERVENTION PLAYBOOK</div>
                  <ul style="padding-left:18px; font-size:12px; color:var(--text-secondary); line-height:1.5;">
                    ${t.actionablePlaybook.map(i=>`<li>${i}</li>`).join("")}
                  </ul>
                </div>
              </div>

              <!-- Impact Metrics Box -->
              <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="font-size:10px; font-weight:700; color:var(--accent-cyan); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">
                    DETECTED BUSINESS IMPACT
                  </div>
                  <div style="display:flex; flex-direction:column; gap:8px;">
                    ${Object.entries(t.impact).map(([i,a])=>`
                      <div style="display:flex; justify-content:space-between; font-size:12px;">
                        <span style="color:var(--text-tertiary); text-transform:capitalize;">${i.replace(/([A-Z])/g," $1")}:</span>
                        <strong style="color:var(--text-primary); font-family:var(--font-mono);">${a}</strong>
                      </div>
                    `).join("")}
                  </div>
                </div>

                <button class="btn btn-primary btn-sm trigger-playbook-btn" data-target="${t.actionTarget}" style="margin-top:16px;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  ${t.ctaText} →
                </button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,s.querySelector("#rescan-ai-btn").onclick=()=>{f.show({title:"Scanner Completed",message:"Analyzed 18,429 orders across 4 warehouses. 3 active anomalies confirmed.",type:"success"})},s.querySelectorAll(".trigger-playbook-btn").forEach(t=>{t.onclick=()=>{const i=t.getAttribute("data-target");e(i)}})}const C=[{id:"q1",label:"Which courier has the highest RTO rate?",query:"Which courier has the highest RTO rate this week and what is the cost impact?",response:{type:"metric_table",summary:"Xpressbees Logistics has the highest RTO rate at 4.9%, closely followed by DTDC Priority at 4.2%. In contrast, BlueDart maintains an elite 1.6% RTO rate.",insights:["Xpressbees RTO is predominantly driven by Tier-2/3 northern regions with high delivery latency (>3.4 days).","DTDC RTO spike correlates with 89 weight dispute flags where deliveries were held up for optical re-measurement.","Financial Impact: ₹92,400 in reverse logistics and packaging loss incurred across these two carriers in the last 7 days."],table:{headers:["Courier Partner","Delivery %","NDR %","RTO %","Avg Transit","Estimated RTO Cost"],rows:[["Xpressbees Logistics","86.8%","8.4%","4.9%","3.4 Days","₹38,200"],["DTDC Priority","88.4%","7.9%","4.2%","3.2 Days","₹54,200"],["Shadowfax Direct","91.2%","5.1%","3.4%","1.8 Days","₹22,100"],["Delhivery Surface","92.4%","4.8%","2.8%","2.1 Days","₹36,400"],["BlueDart Air Apex","95.8%","2.6%","1.6%","1.4 Days","₹14,800"]]},recommendation:{actionText:"Apply Smart Routing Cap: Limit Xpressbees allocation to max 2% and divert Tier-1 COD to BlueDart/Delhivery.",targetView:"couriers"}}},{id:"q2",label:"Why did delivery performance drop this week?",query:"Why did delivery performance drop this week in West India?",response:{type:"root_cause",summary:"West India delivery success dipped from 94.2% to 89.1% over the past 48 hours, localized to Mumbai Metro and Pune clusters.",insights:["Observation: Delhivery Bhiwandi hub experienced a 36-hour linehaul sorting bottleneck following heavy rainfall and dock maintenance.","Affected Pincodes: 4110xx (Pune City), 4006xx (Thane), 400050-400099 (Western Suburbs).","Carrier Impact: 284 shipments delayed into NDR status, with 'Customer Unavailable / Door Locked' recorded erroneously due to driver shift timeouts."],kpiBlock:{title:"Incident Telemetry",metrics:[{label:"Delayed Shipments",value:"284 Orders"},{label:"Revenue at Risk",value:"₹3,84,200"},{label:"Avg Delivery Delay",value:"+28 Hours"},{label:"Hub Clearance ETA",value:"Today 22:00 IST"}]},recommendation:{actionText:"Activate Emergency Courier Rerouting for remaining 112 unpicked orders via BlueDart Air.",targetView:"ndr"}}},{id:"q3",label:"Show orders above ₹5,000 currently in NDR",query:"Show high-value orders above ₹5,000 currently trapped in NDR queue.",response:{type:"order_cards",summary:"Found 4 high-value orders (≥ ₹5,000) currently in NDR with an aggregate value of ₹27,444. These require immediate manual customer outreach to prevent RTO.",orders:[{orderId:"ORD-94251",customer:"Simran Kaur",phone:"+91 98140 33812",city:"Chandigarh",amount:"₹5,200",courier:"Delhivery Express",ndrReason:"Office Premises Closed on Weekend",status:"RESOLVED (Rescheduled to Monday)"},{orderId:"ORD-94281",customer:"Rohan Singhania",phone:"+91 98201 44821",city:"Mumbai",amount:"₹7,297",courier:"Delhivery Express",ndrReason:"Out for Delivery - Agent en-route",status:"CRITICAL WATCH"},{orderId:"ORD-94233",customer:"Vikramaditya Roy",phone:"+91 98300 44910",city:"Kolkata",amount:"₹8,450",courier:"BlueDart Air Apex",ndrReason:"Customer requested evening delivery",status:"REATTEMPT SCHEDULED"},{orderId:"ORD-94218",customer:"Deepika Sen",phone:"+91 98401 22938",city:"Chennai",amount:"₹6,497",courier:"Shadowfax Direct",ndrReason:"Doorbell unresponsive / Phone busy",status:"ACTION REQUIRED"}],recommendation:{actionText:"Trigger Priority WhatsApp IVR Flow to consignees with 1-click delivery authorization.",targetView:"ndr"}}},{id:"q4",label:"What is our current COD exposure & remittance?",query:"What is our current COD exposure, remittance timeline, and RTO risk?",response:{type:"financial_breakdown",summary:"Current Total COD Outstanding is ₹42,65,400 across 3,420 uncollected orders. ₹18,40,000 has been collected and is due for bank remittance within 48 hours.",insights:["Remittance Due: Delhivery ₹10.8L (Due tomorrow), BlueDart ₹7.6L (Remitted today).","RTO Risk Index: High risk on 412 orders (approx ₹6.8L) from first-time shoppers in Tier-3 locations.","Net Profit Impact: Every 1% reduction in COD RTO yields ₹2.48 Lakhs straight to operating EBITDA."],kpiBlock:{title:"Cash on Delivery Health",metrics:[{label:"COD Outstanding",value:"₹42,65,400"},{label:"Remittance Due (48h)",value:"₹18,40,000"},{label:"COD RTO Rate",value:"4.8% vs 1.1% Prepaid"},{label:"Wallet Balance",value:"₹14,82,500"}]},recommendation:{actionText:"Enable EcomIQ Prepaid Incentive Engine: offer ₹50 instant cashback to convert high-risk COD orders.",targetView:"finance"}}}];function ne(s,{onNavigate:e,onOpenOrder:t}){let i=[{role:"assistant",content:{summary:"I'm your **EcomIQ Operational Copilot**. I have indexed real-time data across your 4 stores, 5 courier partner APIs, 4 fulfillment hubs, and Meta/Google ad spend. What would you like to investigate today?"}}];function a(){s.innerHTML=`
      <div class="view-content-wrapper">
        <div class="view-header">
          <div class="view-title-group">
            <div class="view-context-crumb">
              <span>COPILOT INTELLIGENCE</span>
              <span>/</span>
              <span>NATURAL LANGUAGE BI TERMINAL</span>
            </div>
            <h1 class="view-title">
              EcomIQ AI Copilot
              <span class="badge badge-ai">LIVE MODEL • 14ms LATENCY</span>
            </h1>
            <div class="view-subtitle">Ask questions about couriers, revenue, RTO, NDR recovery, freight reconciliation, and ad spend</div>
          </div>
        </div>

        <div class="ai-chat-container">
          <div class="ai-chat-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <div class="pulse-dot" style="background:#C084FC;"></div>
              <span style="font-family:var(--font-display); font-size:12px; font-weight:700; color:var(--text-primary);">EcomIQ BI Core (Indexed 18,429 orders)</span>
            </div>
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-tertiary);">Zero data leaves your private enterprise perimeter</span>
          </div>

          <div class="ai-chat-messages" id="chat-messages-scroll">
            ${i.map(d=>r(d)).join("")}
          </div>

          <!-- Suggested Query Chips -->
          <div class="chat-query-chips">
            <span style="font-size:11px; color:var(--text-tertiary); font-weight:600; text-transform:uppercase;">SUGGESTED QUERIES:</span>
            ${C.map(d=>`
              <button class="query-chip" data-id="${d.id}">
                ${d.label}
              </button>
            `).join("")}
          </div>

          <!-- Chat Input Bar -->
          <div class="chat-input-bar">
            <input type="text" class="input-control" id="chat-user-input" placeholder="Ask anything about orders, couriers, RTO, or ad spend (e.g., 'Which courier is slowest this week?')..." />
            <button class="btn btn-primary" id="chat-send-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Query
            </button>
          </div>
        </div>
      </div>
    `,n()}function r(d){if(d.role==="user")return`
        <div class="chat-bubble user">
          <div style="font-weight:600;">${d.text}</div>
        </div>
      `;const v=d.content;return`
      <div class="chat-bubble assistant">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span style="font-weight:700; font-size:11px; color:var(--accent-cyan); letter-spacing:0.05em; text-transform:uppercase;">ECOMIQ INTELLIGENCE COPILOT</span>
        </div>

        <div style="font-size:13px; color:var(--text-primary); line-height:1.5;">
          ${v.summary.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}
        </div>

        ${v.insights?`
          <ul style="margin-top:8px; padding-left:18px; font-size:12px; color:var(--text-secondary); line-height:1.5;">
            ${v.insights.map(l=>`<li>${l}</li>`).join("")}
          </ul>
        `:""}

        ${v.table?`
          <div style="margin-top:12px; border:1px solid var(--border-subtle); border-radius:var(--radius-sm); overflow:hidden;">
            <table class="data-table" style="font-size:11px;">
              <thead>
                <tr>
                  ${v.table.headers.map(l=>`<th>${l}</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                ${v.table.rows.map(l=>`
                  <tr>
                    ${l.map((g,o)=>`<td class="${o>0?"tabular-nums":""}" style="${o===0?"font-weight:600; color:var(--text-primary);":""}">${g}</td>`).join("")}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `:""}

        ${v.kpiBlock?`
          <div style="margin-top:12px; background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:10px;">
            <div style="font-size:10px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; margin-bottom:6px;">${v.kpiBlock.title}</div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:8px;">
              ${v.kpiBlock.metrics.map(l=>`
                <div>
                  <div style="color:var(--text-tertiary); font-size:10px;">${l.label}</div>
                  <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary); font-size:13px;">${l.value}</div>
                </div>
              `).join("")}
            </div>
          </div>
        `:""}

        ${v.orders?`
          <div style="margin-top:12px; display:flex; flex-direction:column; gap:6px;">
            ${v.orders.map(l=>`
              <div style="background:var(--bg-base); padding:8px 12px; border-radius:var(--radius-xs); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <span style="font-family:var(--font-mono); font-weight:700; color:var(--accent-cyan); font-size:12px;">${l.orderId}</span>
                  <span style="font-size:12px; color:var(--text-primary); margin-left:8px;">${l.customer} (${l.city})</span>
                  <div style="font-size:10px; color:#FBBF24; margin-top:2px;">Reason: ${l.ndrReason}</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-family:var(--font-mono); font-weight:700; color:var(--text-primary);">${l.amount}</div>
                  <span class="badge badge-warning" style="font-size:9px;">${l.status}</span>
                </div>
              </div>
            `).join("")}
          </div>
        `:""}

        ${v.recommendation?`
          <div style="margin-top:12px; padding:10px 12px; background:rgba(0, 229, 255, 0.05); border:1px solid var(--accent-cyan-border); border-radius:var(--radius-sm); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div style="font-size:11px; color:var(--text-primary);">
              <strong>Playbook Action:</strong> ${v.recommendation.actionText}
            </div>
            <button class="btn btn-primary btn-sm chat-action-jump-btn" data-target="${v.recommendation.targetView}">
              Execute in ${v.recommendation.targetView.toUpperCase()} →
            </button>
          </div>
        `:""}
      </div>
    `}function n(){s.querySelectorAll(".query-chip").forEach(l=>{l.onclick=()=>{const g=l.getAttribute("data-id"),o=C.find(c=>c.id===g);o&&y(o.query,o.response)}});const d=s.querySelector("#chat-user-input"),v=s.querySelector("#chat-send-btn");v.onclick=()=>{const l=d.value.trim();l&&p(l)},d.onkeydown=l=>{if(l.key==="Enter"){const g=d.value.trim();if(!g)return;p(g)}},s.querySelectorAll(".chat-action-jump-btn").forEach(l=>{l.onclick=()=>{const g=l.getAttribute("data-target");e(g)}})}function p(d){const v=d.toLowerCase();let l=C[0];v.includes("why")||v.includes("drop")||v.includes("delivery")?l=C[1]:v.includes("5000")||v.includes("high")||v.includes("ndr")?l=C[2]:(v.includes("cod")||v.includes("finance")||v.includes("remit"))&&(l=C[3]),y(d,l.response)}function y(d,v){i.push({role:"user",text:d}),i.push({role:"assistant",content:v}),a(),setTimeout(()=>{const l=s.querySelector("#chat-messages-scroll");l&&(l.scrollTop=l.scrollHeight)},50)}a()}function de(s){s.innerHTML=`
    <div class="view-content-wrapper">
      <div class="view-header">
        <div class="view-title-group">
          <div class="view-context-crumb">
            <span>PLATFORM CONFIGURATION</span>
            <span>/</span>
            <span>SECURITY & INTEGRATIONS</span>
          </div>
          <h1 class="view-title">
            Settings & Integrations
            <span class="badge badge-delivered">ENTERPRISE TIER 1</span>
          </h1>
          <div class="view-subtitle">Multi-store credentials, carrier API webhooks, role-based access control and system telemetry</div>
        </div>

        <div class="view-actions-group">
          <button class="btn btn-primary btn-sm" id="save-settings-btn">
            Save Configuration Changes
          </button>
        </div>
      </div>

      <!-- Settings Tabs Container -->
      <div style="display:grid; grid-template-columns:1fr 2fr; gap:20px;">
        <!-- Left Tab List -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:12px; display:flex; flex-direction:column; gap:4px; height:fit-content;">
          <button class="btn btn-secondary btn-sm" style="justify-content:flex-start; background:var(--accent-cyan-subtle); border-color:var(--accent-cyan-border); color:var(--text-primary);">
            Integrated Channels & Stores (4)
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content:flex-start;">
            Courier API Accounts & Credentials (5)
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content:flex-start;">
            Users, Roles & Security Permissions
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content:flex-start;">
            Webhooks & Real-time Event Streams
          </button>
          <button class="btn btn-outline btn-sm" style="justify-content:flex-start;">
            Billing & Escrow Reconciliation
          </button>
        </div>

        <!-- Right Panel Content -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:20px; display:flex; flex-direction:column; gap:16px;">
          <div>
            <div style="font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text-primary);">Connected Stores & E-Commerce Frontends</div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">EcomIQ continuously synchronizes orders, inventory, and refunds across 4 live storefronts.</div>
          </div>

          <div style="display:flex; flex-direction:column; gap:10px;">
            ${F.stores.map(e=>`
              <div style="background:var(--bg-base); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:12px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:10px;">
                  <div style="width:32px; height:32px; border-radius:var(--radius-xs); background:var(--bg-surface-high); border:1px solid var(--border-default); display:flex; align-items:center; justify-content:center; color:var(--accent-cyan); font-weight:700;">
                    ${e.platform==="shopify"?"S":e.platform==="amazon"?"A":"W"}
                  </div>
                  <div>
                    <div style="font-weight:600; color:var(--text-primary); font-size:13px;">${e.name}</div>
                    <div style="font-size:10px; font-family:var(--font-mono); color:var(--text-tertiary);">Last synced 32s ago • ${e.orders24h} orders/24h</div>
                  </div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="badge badge-delivered" style="font-size:10px;">CONNECTED</span>
                  <button class="btn btn-outline btn-sm">Configure</button>
                </div>
              </div>
            `).join("")}
          </div>

          <div style="border-top:1px solid var(--border-subtle); padding-top:16px;">
            <div style="font-family:var(--font-display); font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Real-Time Webhook Endpoint</div>
            <div class="input-wrapper">
              <input type="text" class="input-control" value="https://api.ecomiq.internal/v2/webhooks/apex-global/stream" readonly style="font-family:var(--font-mono); color:var(--accent-cyan);" />
            </div>
            <div style="font-size:10px; color:var(--text-tertiary); margin-top:4px;">Signature Secret: •••••••••••••••••••••••••• (HMAC-SHA256 verified)</div>
          </div>
        </div>
      </div>
    </div>
  `,s.querySelector("#save-settings-btn").onclick=()=>{f.show({title:"Settings Saved",message:"API webhook endpoints and store credentials successfully updated.",type:"success"})}}class le{constructor(){this.currentMode=this.getInitialMode(),this.currentAppModule=this.getViewFromHash()||"dashboard",this.isSidebarCollapsed=!1,this.headerMount=document.getElementById("header-mount"),this.mainContainer=document.getElementById("main-content-container"),this.actionModals=new _({onRefreshData:()=>this.refresh()}),this.orderDrawer=new K({onAction:(e,t)=>this.handleAction(e,t)}),this.commandPalette=new U({onNavigate:e=>{this.setMode("app"),this.navigateAppModule(e)},onOpenOrder:e=>this.orderDrawer.open(e),onAction:e=>this.handleAction(e)}),this.init()}getInitialMode(){const e=window.location.hash.toLowerCase();return e.includes("app")||e.includes("dashboard")||e.includes("orders")||e.includes("ndr")||e.includes("shipments")||e.includes("couriers")||e.includes("finance")||e.includes("marketing")||e.includes("weight")?"app":"story"}getViewFromHash(){const e=window.location.hash.replace("#/","").replace("#",""),[t]=e.split("?");return["dashboard","orders","shipments","ndr","weight","couriers","warehouses","customers","finance","marketing","analytics","ai-insights","ai-chat","settings"].includes(t)?t:"dashboard"}init(){this.render(),window.addEventListener("hashchange",()=>{const e=this.getInitialMode(),t=this.getViewFromHash();this.currentMode=e,this.currentAppModule=t,this.render(),this.checkDeepLinks()}),window.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),this.commandPalette.open())}),this.checkDeepLinks(),setTimeout(()=>{this.runAnimatedCounters()},150)}checkDeepLinks(){const e=window.location.hash;if(e.includes("inspect=")){const i={id:e.split("inspect=")[1].split("&")[0],date:"2026-09-24 19:42",customer:{name:"Rohan Singhania",phone:"+91 98201 44821",email:"rohan.s@gmail.com",address:"Flat 802, Silver Arch Heights, Bandra West",city:"Mumbai",state:"Maharashtra",pincode:"400050",totalOrders:14,totalSpend:"₹38,450",rtoRisk:"LOW"},items:[{name:"Apex Carbon Elite Running Shoes - Olive",sku:"AC-RN-09-OLV",qty:1,price:"₹4,299",hsn:"640411"}],amount:"₹7,297",subtotal:"₹7,297",tax:"₹782",shippingFee:"₹0",payment:{type:"Prepaid",gateway:"Razorpay (UPI)",transactionId:"pay_Rzp99281741",status:"PAID"},channel:"Shopify - Apex Athletics",warehouse:"Mumbai Central Mega Hub (Bhiwandi)",status:"Out for Delivery",shipment:{awb:"DEL882941029",courier:"Delhivery Express",deadWeight:"0.85 kg",volWeight:"1.10 kg",edd:"Today by 21:00",events:[{time:"16:15",title:"Out for Delivery",desc:"Assigned to delivery agent Vikram Yadav"}]}};setTimeout(()=>this.orderDrawer.open(i),250)}else e.includes("palette=open")&&setTimeout(()=>this.commandPalette.open(),250)}setMode(e){this.currentMode=e,document.body.className=`mode-${e}`,e==="app"?window.location.hash=`#/${this.currentAppModule}`:window.location.hash="",this.render(),e==="story"&&setTimeout(()=>this.runAnimatedCounters(),150)}navigateAppModule(e){this.currentAppModule=e,window.location.hash=`#/${e}`,this.render()}render(){B(this.headerMount,{currentMode:this.currentMode,onToggleMode:e=>this.setMode(e),onOpenCommandPalette:()=>this.commandPalette.open(),onNavigateToSection:e=>{if(e==="hero")window.scrollTo({top:0,behavior:"smooth"});else{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}}}),this.currentMode==="story"?this.renderStoryMode():this.renderAppMode()}renderStoryMode(){this.mainContainer.innerHTML="";const e=document.createElement("div");e.id="showcase-root",this.mainContainer.appendChild(e),Y(e,{onLaunchApp:()=>this.setMode("app"),onOpenOrder:t=>this.orderDrawer.open(t),onAction:(t,i)=>this.handleAction(t,i),onNavigateToModule:t=>{this.currentAppModule=t,this.setMode("app")}})}renderAppMode(){this.mainContainer.innerHTML=`
      <div class="app-os-shell">
        <div id="os-sidebar-mount"></div>
        <main class="app-os-viewport" id="os-viewport-mount"></main>
      </div>
    `;const e=document.getElementById("os-sidebar-mount"),t=document.getElementById("os-viewport-mount");H(e,{currentView:this.currentAppModule,onNavigate:a=>this.navigateAppModule(a),isCollapsed:this.isSidebarCollapsed,onToggleCollapse:()=>{this.isSidebarCollapsed=!this.isSidebarCollapsed,this.renderAppMode()}});const i={onNavigate:a=>this.navigateAppModule(a),onOpenOrder:a=>this.orderDrawer.open(a),onAction:(a,r)=>this.handleAction(a,r)};switch(this.currentAppModule){case"dashboard":M(t,i);break;case"orders":Q(t,i);break;case"shipments":X(t,i);break;case"ndr":Z(t,i);break;case"weight":J(t,i);break;case"couriers":ee(t);break;case"warehouses":te(t);break;case"customers":ae(t);break;case"finance":ie(t);break;case"marketing":re(t);break;case"analytics":se(t);break;case"ai-insights":oe(t,i);break;case"ai-chat":ne(t,i);break;case"settings":de(t);break;default:M(t,i)}}handleAction(e,t){e==="whatsapp-ndr"?this.actionModals.openWhatsAppNDR(t):e==="call-customer"?this.actionModals.openCallModal(t):e==="dispute-weight"?this.actionModals.openWeightDisputeModal():e==="export-orders"?this.actionModals.openExportModal():e==="command-palette"&&this.commandPalette.open()}runAnimatedCounters(){document.querySelectorAll(".count-up").forEach(t=>{const i=parseFloat(t.getAttribute("data-target")),a=t.getAttribute("data-format");if(isNaN(i))return;const r=1400,n=performance.now();function p(y){const d=y-n,v=Math.min(d/r,1),l=1-Math.pow(1-v,3),g=i*l;a==="inr-cr"?t.textContent=`₹${(g/1e7).toFixed(2)} Cr`:a==="pct"?t.textContent=`${g.toFixed(1)}%`:a==="multiplier"?t.textContent=`${g.toFixed(2)}x`:t.textContent=Math.round(g).toLocaleString("en-IN"),v<1&&requestAnimationFrame(p)}requestAnimationFrame(p)})}refresh(){this.render()}}document.addEventListener("DOMContentLoaded",()=>{window.__ECOMIQ__=new le});
