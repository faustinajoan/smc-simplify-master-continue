/* =========================================================
   SMC — Simplify • Master • Continue
   23CS/PE/XI15 · UI, UX and Design Thinking
   Unit 1: UI, UX & The Design Process
   Unit 2: Visual Design Principles & Processes; Designing Behaviour
   Unit 3: Wireframing, Prototyping, UI Design & Frontend Implementation
   Unit 4: Website Development — HTML5 & CSS3
   Unit 5: JavaScript, Form Validation, Browser APIs & Bootstrap
   Practical Exercises 1–10
   ========================================================= */

const STATIONS = [
  { id:"home", icon:"🏠", label:"Home", kind:"home" },

  /* ---------- UNIT 1 ---------- */
  { id:"uiuxintro",    icon:"✨", label:"What is UI? What is UX?", kind:"topic", group:"unit1" },
  { id:"whyux",        icon:"🔗", label:"Why UX Matters", kind:"topic", group:"unit1" },
  { id:"uxprocess",    icon:"🧭", label:"The UX Design Process", kind:"topic", group:"unit1" },
  { id:"discoverplan", icon:"🔎", label:"Discovery, Planning & Strategy", kind:"topic", group:"unit1" },
  { id:"uxresearch",   icon:"🔬", label:"UX Research", kind:"topic", group:"unit1" },
  { id:"uxanalysis",   icon:"📊", label:"UX Analysis & Interviews", kind:"topic", group:"unit1" },
  { id:"designphase",  icon:"🎨", label:"Design & Production", kind:"topic", group:"unit1" },
  { id:"personas",     icon:"🧑‍🤝‍🧑", label:"User Personas", kind:"topic", group:"unit1" },
  { id:"gestalt",      icon:"🧠", label:"Gestalt Theory", kind:"topic", group:"unit1" },
  { id:"psychology",   icon:"💡", label:"Psychology in UX", kind:"topic", group:"unit1" },
  { id:"quizUnit1",    icon:"🧠", label:"Unit 1 Quiz", kind:"quiz", group:"unit1", quizId:"quizUnit1" },

  /* ---------- UNIT 2 ---------- */
  { id:"visualintro", icon:"🖼️", label:"What is Visual Design?", kind:"topic", group:"unit2vis" },
  { id:"vlines", icon:"📏", label:"Lines", kind:"topic", group:"unit2vis" },
  { id:"vshapes", icon:"🔷", label:"Shapes", kind:"topic", group:"unit2vis" },
  { id:"colorbasics", icon:"🌈", label:"Colour Basics", kind:"topic", group:"unit2vis" },
  { id:"colorsystems", icon:"🎡", label:"Colour Systems & the Wheel", kind:"topic", group:"unit2vis" },
  { id:"colormeaning", icon:"❤️", label:"Colour Meaning & Contrast", kind:"topic", group:"unit2vis" },
  { id:"typography1", icon:"🔤", label:"Typography: Typefaces", kind:"topic", group:"unit2vis" },
  { id:"typography2", icon:"📖", label:"Typography: Setting Text", kind:"topic", group:"unit2vis" },
  { id:"texturesforms", icon:"🧱", label:"Texture & Form", kind:"topic", group:"unit2vis" },
  { id:"principles1", icon:"📐", label:"Principles: Alignment, Hierarchy, Contrast", kind:"topic", group:"unit2vis" },
  { id:"principles2", icon:"⚖️", label:"Principles: Repetition, Proximity, Balance, Space", kind:"topic", group:"unit2vis" },
  { id:"quizVisual", icon:"🧠", label:"Visual Design Quiz", kind:"quiz", group:"unit2vis", quizId:"quizVisual" },
  { id:"foggmodel", icon:"🎯", label:"The Fogg Behaviour Model", kind:"topic", group:"unit2beh" },
  { id:"fivefactors", icon:"🔔", label:"Five Factors of Behaviour", kind:"topic", group:"unit2beh" },
  { id:"behaviourmodels", icon:"🧩", label:"Models of Behaviour Change", kind:"topic", group:"unit2beh" },
  { id:"behaviourproduct", icon:"🚀", label:"Designing Behaviour in a Product", kind:"topic", group:"unit2beh" },
  { id:"quizBehaviour", icon:"🧠", label:"Designing Behaviour Quiz", kind:"quiz", group:"unit2beh", quizId:"quizBehaviour" },

  /* ---------- UNIT 3 ---------- */
  { id:"wireframebasics", icon:"📐", label:"What is Wireframing?", kind:"topic", group:"unit3" },
  { id:"wireframetypes",  icon:"🎚️", label:"Types of Wireframes", kind:"topic", group:"unit3" },
  { id:"prototypebasics", icon:"🧪", label:"What is Prototyping?", kind:"topic", group:"unit3" },
  { id:"prototypeprocess",icon:"🛠️", label:"The Prototyping Process", kind:"topic", group:"unit3" },
  { id:"uidesignbasics",  icon:"🖌️", label:"UI Design Basics", kind:"topic", group:"unit3" },
  { id:"designsystem",    icon:"🧩", label:"Building a Design System", kind:"topic", group:"unit3" },
  { id:"handover",        icon:"🤝", label:"UI Design Handover", kind:"topic", group:"unit3" },
  { id:"frontendbasics",  icon:"💻", label:"Frontend Development Basics", kind:"topic", group:"unit3" },
  { id:"cssatscale",      icon:"⚙️", label:"CSS at Scale", kind:"topic", group:"unit3" },
  { id:"postlaunch",      icon:"📈", label:"Post-Launch UX Activities", kind:"topic", group:"unit3" },
  { id:"quizUnit3",       icon:"🧠", label:"Unit 3 Quiz", kind:"quiz", group:"unit3", quizId:"quizUnit3" },

  /* ---------- UNIT 4a: WEBSITE & HTML5 ---------- */
  { id:"websitebasics", icon:"🌍", label:"What is a Website?", kind:"topic", group:"unit4html" },
  { id:"htmlstructure", icon:"🏗️", label:"HTML Basics & Document Structure", kind:"topic", group:"unit4html" },
  { id:"htmlheadings",  icon:"📝", label:"Headings & Paragraphs", kind:"topic", group:"unit4html" },
  { id:"htmlformat",    icon:"🔤", label:"Text Formatting Tags", kind:"topic", group:"unit4html" },
  { id:"htmlfontlegacy",icon:"🎨", label:"Legacy Styling: font, color & align", kind:"topic", group:"unit4html" },
  { id:"htmllists",     icon:"📋", label:"Lists & the div Tag", kind:"topic", group:"unit4html" },
  { id:"htmllinks",     icon:"🔗", label:"Links & Navigation", kind:"topic", group:"unit4html" },
  { id:"htmlimages",    icon:"🖼️", label:"Images, Figure & Figcaption", kind:"topic", group:"unit4html" },
  { id:"html5intro",    icon:"5️⃣", label:"Meet HTML5", kind:"topic", group:"unit4html" },
  { id:"htmlsemantic",  icon:"🧱", label:"Semantic Layout Tags", kind:"topic", group:"unit4html" },
  { id:"htmlinteractive",icon:"🎛️", label:"Interactive HTML5 Tags", kind:"topic", group:"unit4html" },
  { id:"blockinline",   icon:"📐", label:"Block vs Inline Elements", kind:"topic", group:"unit4html" },
  { id:"htmltables",    icon:"📊", label:"Tables", kind:"topic", group:"unit4html" },
  { id:"htmlforms",     icon:"📮", label:"Forms & Input Elements", kind:"topic", group:"unit4html" },
  { id:"htmlmultimedia",icon:"🎬", label:"Multimedia Elements", kind:"topic", group:"unit4html" },
  { id:"quizHtml",      icon:"🧠", label:"HTML Quiz", kind:"quiz", group:"unit4html", quizId:"quizHtml" },

  /* ---------- UNIT 4b: CSS3 STYLING ---------- */
  { id:"csswriting",    icon:"✍️", label:"What is CSS? Writing CSS", kind:"topic", group:"unit4css" },
  { id:"csscolors",     icon:"🌈", label:"Colors in CSS", kind:"topic", group:"unit4css" },
  { id:"cssboxmodel",   icon:"📦", label:"The CSS Box Model", kind:"topic", group:"unit4css" },
  { id:"csslayout",     icon:"🗺️", label:"CSS Layout & Positioning", kind:"topic", group:"unit4css" },
  { id:"csstext",       icon:"🔡", label:"Styling Text", kind:"topic", group:"unit4css" },
  { id:"csstableform",  icon:"🧾", label:"Styling Tables & Forms", kind:"topic", group:"unit4css" },
  { id:"cssanimation",  icon:"🎞️", label:"Animations & Keyframes", kind:"topic", group:"unit4css" },
  { id:"csstransform",  icon:"🔄", label:"Transitions & Transforms", kind:"topic", group:"unit4css" },
  { id:"cssflexbox",    icon:"🧩", label:"Flexbox", kind:"topic", group:"unit4css" },
  { id:"quizCss",       icon:"🧠", label:"CSS Quiz", kind:"quiz", group:"unit4css", quizId:"quizCss" },

  /* ---------- UNIT 5: JAVASCRIPT ---------- */
  { id:"whyjs",         icon:"❓", label:"Why JavaScript?", kind:"topic", group:"unit5" },
  { id:"firstscript",   icon:"📜", label:"Writing Your First Script", kind:"topic", group:"unit5" },
  { id:"bom",           icon:"🪟", label:"The Browser Object Model (BOM)", kind:"topic", group:"unit5" },
  { id:"htmldom",       icon:"🌳", label:"The HTML DOM", kind:"topic", group:"unit5" },
  { id:"accessingelements", icon:"🎯", label:"Accessing Elements", kind:"topic", group:"unit5" },
  { id:"displayoutput", icon:"📤", label:"Displaying Output", kind:"topic", group:"unit5" },
  { id:"creatingelements", icon:"🧱", label:"Creating & Modifying Elements", kind:"topic", group:"unit5" },
  { id:"quizJs",        icon:"🧠", label:"JavaScript Basics Quiz", kind:"quiz", group:"unit5", quizId:"quizJs" },

  /* ---------- UNIT 5b: FUNCTIONS & EVENTS ---------- */
  { id:"jsfunctions",  icon:"⚙️", label:"Functions", kind:"topic", group:"unit5ev" },
  { id:"jsevents",     icon:"🖱️", label:"Events & Event Handlers", kind:"topic", group:"unit5ev" },
  { id:"eventreg",     icon:"🔌", label:"Registering Events: HTML vs JavaScript", kind:"topic", group:"unit5ev" },
  { id:"dynstyle",     icon:"🎨", label:"Changing CSS with JavaScript", kind:"topic", group:"unit5ev" },
  { id:"addlistener",  icon:"👂", label:"addEventListener & Event Propagation", kind:"topic", group:"unit5ev" },

  /* ---------- UNIT 5c: FORM VALIDATION ---------- */
  { id:"jsvalidation",   icon:"✅", label:"Why Validate User Input?", kind:"topic", group:"unit5val" },
  { id:"constraintattrs",icon:"🧾", label:"Constraint Validation: HTML Attributes", kind:"topic", group:"unit5val" },
  { id:"regexpattern",   icon:"🔣", label:"Regular Expressions & pattern", kind:"topic", group:"unit5val" },
  { id:"constraintcss",  icon:"🌈", label:"Constraint Validation: CSS Pseudo-classes", kind:"topic", group:"unit5val" },
  { id:"constraintdom",  icon:"🧪", label:"Constraint Validation: DOM Properties & Methods", kind:"topic", group:"unit5val" },
  { id:"quizJsEvents",   icon:"🧠", label:"Events & Validation Quiz", kind:"quiz", group:"unit5val", quizId:"quizJsEvents" },

  /* ---------- UNIT 5d: BROWSER, WEB APIs & LIBRARIES ---------- */
  { id:"bomextra",   icon:"🧭", label:"More BOM: Screen, Location, History, Navigator", kind:"topic", group:"unit5web" },
  { id:"webapis",    icon:"💾", label:"Web APIs: Cookies, Storage & Timers", kind:"topic", group:"unit5web" },
  { id:"jquery",     icon:"💲", label:"jQuery", kind:"topic", group:"unit5web" },
  { id:"typescript", icon:"🔷", label:"TypeScript", kind:"topic", group:"unit5web" },
  { id:"quizJsWeb",  icon:"🧠", label:"Browser & Libraries Quiz", kind:"quiz", group:"unit5web", quizId:"quizJsWeb" },

  /* ---------- UNIT 5e: BOOTSTRAP ---------- */
  { id:"rwd",          icon:"📱", label:"Responsive Web Design & the Viewport", kind:"topic", group:"unit5bs" },
  { id:"rwdgrid",      icon:"🧮", label:"The 12-Column Grid Idea", kind:"topic", group:"unit5bs" },
  { id:"bsintro",      icon:"🅱️", label:"What is Bootstrap? Getting Started", kind:"topic", group:"unit5bs" },
  { id:"bsgrid",       icon:"🔲", label:"Bootstrap Containers, Grid & Breakpoints", kind:"topic", group:"unit5bs" },
  { id:"bsgrid2",      icon:"🧱", label:"Nested Columns, Offsets & Line Breaks", kind:"topic", group:"unit5bs" },
  { id:"bscomponents", icon:"🃏", label:"Page Headers, Cards & Image + Text", kind:"topic", group:"unit5bs" },
  { id:"bslists",      icon:"📃", label:"List Groups & Navs", kind:"topic", group:"unit5bs" },
  { id:"bstry",        icon:"🧪", label:"Navbar, Forms & Testing Responsiveness", kind:"topic", group:"unit5bs" },
  { id:"quizBootstrap",icon:"🧠", label:"Bootstrap Quiz", kind:"quiz", group:"unit5bs", quizId:"quizBootstrap" },

  /* ---------- PRACTICAL EXERCISES ---------- */
  { id:"ex1walk", icon:"1️⃣", label:"Exercise 1 — Personal Profile", kind:"topic", group:"practical" },
  { id:"ex2walk", icon:"2️⃣", label:"Exercise 2 — Travel Blog", kind:"topic", group:"practical" },
  { id:"ex3walk", icon:"3️⃣", label:"Exercise 3 — Input Form", kind:"topic", group:"practical" },
  { id:"ex4walk", icon:"4️⃣", label:"Exercise 4 — Professional Layout", kind:"topic", group:"practical" },
  { id:"ex5walk", icon:"5️⃣", label:"Exercise 5 — Flexbox Page", kind:"topic", group:"practical" },
  { id:"ex6walk", icon:"6️⃣", label:"Exercise 6 — Animations & Transforms", kind:"topic", group:"practical" },
  { id:"ex7walk", icon:"7️⃣", label:"Exercise 7 — Wireframing our College Website", kind:"topic", group:"practical" },
  { id:"ex8walk", icon:"8️⃣", label:"Exercise 8 — Wireframing an App", kind:"topic", group:"practical" },
  { id:"ex9walk", icon:"9️⃣", label:"Exercise 9 — Events & Basic Validation", kind:"topic", group:"practical" },
  { id:"ex10walk", icon:"🔟", label:"Exercise 10 — Form Validation with the Constraint API", kind:"topic", group:"practical" },
  { id:"quizPractical", icon:"🧠", label:"Practical Recap Quiz", kind:"quiz", group:"practical", quizId:"quizPractical" },

  { id:"summary", icon:"📄", label:"Summary & Download", kind:"summary" },
];

const GROUP_META = {
  unit1:     { title:"Unit 1 · UI, UX & The Design Process", eyebrow:"UNIT 1" },
  unit2vis:  { title:"Unit 2 · Visual Design Principles & Processes", eyebrow:"UNIT 2 · VISUAL" },
  unit2beh:  { title:"Unit 2 · Designing Behaviour", eyebrow:"UNIT 2 · BEHAVIOUR" },
  unit3:     { title:"Unit 3 · Wireframing, Prototyping & Frontend", eyebrow:"UNIT 3" },
  unit4html: { title:"Unit 4 · Website & HTML5", eyebrow:"UNIT 4 · HTML5" },
  unit4css:  { title:"Unit 4 · CSS3 Styling", eyebrow:"UNIT 4 · CSS3" },
  unit5:     { title:"Unit 5 · JavaScript Basics", eyebrow:"UNIT 5 · BASICS" },
  unit5ev:   { title:"Unit 5 · JavaScript: Functions & Events", eyebrow:"UNIT 5 · EVENTS" },
  unit5val:  { title:"Unit 5 · JavaScript: Form Validation", eyebrow:"UNIT 5 · VALIDATION" },
  unit5web:  { title:"Unit 5 · JavaScript: Browser & Libraries", eyebrow:"UNIT 5 · LIBRARIES" },
  unit5bs:   { title:"Unit 5 · Bootstrap Framework", eyebrow:"UNIT 5 · BOOTSTRAP" },
  practical: { title:"Practical Exercises", eyebrow:"PRACTICAL" },
};

/* ---------- helper builders ---------- */
function explain(html){ return `<div class="card explain-card"><h3>🌟 Simple Explanation</h3>${html}</div>`; }
function analogy(html){ return `<div class="card analogy-card"><h3>🚂 Real-Life Analogy</h3>${html}</div>`; }
function remember(items){ return `<div class="remember-box"><h3>💡 Remember</h3><ul>${items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`; }
function mistake(html){ return `<div class="mistake-box"><h3>⚠️ Common Mistake</h3>${html}</div>`; }
function more(title,html){ return `<details class="more"><summary>${title}</summary><div class="more-inner">${html}</div></details>`; }

/* ---------- live demo card system ---------- */
const DEMOS = {};
function demoCard(id, label, height){
  height = height || 220;
  return `<div class="democard" data-demo-id="${id}" data-height="${height}">${label ? `<div class="demo-label">${label}</div>` : ""}</div>`;
}

/* ================= STATION CONTENT ================= */
const CONTENT = {};

CONTENT.home = `
  <div class="hero">
    <div class="hero-deco">🎨</div>
    <span class="eyebrow" style="background:rgba(255,255,255,.22);">SMC PORTAL</span>
    <h1>Simplify • Master • Continue</h1>
    <p>Welcome! This portal covers UI/UX &amp; the Design Process (Unit 1), Visual Design Principles &amp; Designing Behaviour (Unit 2), Wireframing/Prototyping/Frontend Implementation (Unit 3), Website Development with HTML5 &amp; CSS3 (Unit 4), and JavaScript, Form Validation &amp; Bootstrap (Unit 5) — one small idea at a time, with pictures, real code, live outputs, and quick checks along the way.</p>
    <div class="stat-row">
      <div class="stat-pill">🧭 Unit 1 · UX Design Process</div>
      <div class="stat-pill">🎨 Unit 2 · Visual Design &amp; Behaviour</div>
      <div class="stat-pill">📐 Unit 3 · Wireframing &amp; Frontend</div>
      <div class="stat-pill">🌐 Unit 4 · HTML5 &amp; CSS3</div>
      <div class="stat-pill">📜 Unit 5 · JavaScript &amp; Bootstrap</div>
      <div class="stat-pill">🧪 Practical Exercises 1–10</div>
    </div>
  </div>

  ${explain(`<p>This page is your travel guide. Every station explains <strong>one idea only</strong>, with a real-life comparison and a short "Remember" box so it's easy to recall later. You'll also see <strong>live, clickable code examples</strong> — tap "View Code" to see exactly what produced the output above it.</p>`)}

  <h3 style="margin-top:26px;">Unit 1 · UI, UX &amp; The Design Process</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit1" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 2 · Visual Design Principles &amp; Processes</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit2vis" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 2 · Designing Behaviour</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit2beh" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 3 · Wireframing, Prototyping &amp; Frontend</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit3" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 4 · Website &amp; HTML5</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit4html" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 4 · CSS3 Styling</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit4css" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 5 · JavaScript Basics</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit5" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 5 · JavaScript: Functions &amp; Events</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit5ev" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 5 · JavaScript: Form Validation</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit5val" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 5 · JavaScript: Browser &amp; Libraries</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit5web" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 5 · Bootstrap Framework</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit5bs" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Practical Exercises</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="practical" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  ${more("🎒 Tips for using this page","<p>Use the ⬅️➡️ buttons at the bottom of each page, or tap any station on the left. Tap boxes, diagrams and the 'View Code' tabs — they're all clickable! Turn on <strong>Dark mode</strong>, <strong>High Contrast</strong>, adjust <strong>Text size</strong>, or turn on <strong>Easy-read spacing</strong> from the side menu if that helps you read more comfortably.</p>")}
`;

CONTENT.uiuxintro = `
  ${explain(`
    <p>Before we touch any code, let's pause on a simple question: <strong>think of the app you use the most. Why do you keep coming back to it?</strong></p>
    <p>Most people answer with the same handful of words, without even realizing it — those words are really just everyday descriptions of good <strong>UI</strong> and <strong>UX</strong>.</p>
  `)}

  <h3>What people usually say about apps they love</h3>
  <div class="chiprow">
    <span class="chip">✔️ Easy to Use</span>
    <span class="chip">✔️ Simple and Neat Design</span>
    <span class="chip">✔️ Easy Navigation</span>
    <span class="chip">✔️ Seamless Interaction</span>
    <span class="chip">✔️ User Friendly</span>
  </div>

  <p style="font-size:20px; font-weight:800; text-align:center; color:var(--rail); margin:26px 0; line-height:1.4;">⚡ It takes just <u>50 milliseconds</u> for someone to form an opinion about an app — less time than a single blink!</p>

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🖌️ User Interface (UI)</h4>
      <p style="font-size:14.5px;">The <strong>look and feel</strong> of a product — its fonts, colors, buttons, layout, and spaces. UI is everything you can actually see.</p>
    </div>
    <div class="flow-card">
      <h4>🧭 User Experience (UX)</h4>
      <p style="font-size:14.5px;">The <strong>overall experience</strong> of the product — not just how it looks, but how it works and how it makes you feel while using it.</p>
    </div>
  </div>

  ${analogy(`<p>Think of a restaurant. <strong>UI</strong> is the plating, the menu design, and the interior decor — everything you can visually notice. <strong>UX</strong> is the whole dining experience — how easy it was to book a table, how quickly you were served, and whether you'd want to come back.</p>`)}

  <h3 style="margin-top:22px;">What makes up UX Design?</h3>
  <p>UX Design isn't just one skill — it's actually a combination of four areas working together. Tap each one below.</p>
  <div class="diagram">
    <div class="node clickable" data-pop="The actual information inside the product — the text, images, and media a user reads or engages with.">
      <span class="emoji">📄</span>Content
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="How easy and efficient the product is to actually use.">
      <span class="emoji">🧩</span>Usability
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="The visual look and feel of the product — fonts, colors, buttons, layout.">
      <span class="emoji">🎨</span>UI Design
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="How the user actually interacts with and moves through the product — the flow between actions and screens.">
      <span class="emoji">🕹️</span>User Interaction Design
      <div class="node-pop"></div>
    </div>
  </div>

  ${mistake(`<p>Even popular, well-known apps sometimes get UI/UX wrong — cluttered layouts, poor color contrast, inconsistent buttons, or confusing navigation can quickly frustrate a user, no matter how powerful the app is underneath.</p>`)}

  <p style="text-align:center; font-style:italic; font-size:18px; color:var(--ink-soft); margin:26px 10px; border-left:4px solid var(--spark); padding-left:16px; text-align:left;">"If you want users to like and use your product, give them a reason to love it."</p>

  ${remember(["UI = look and feel (fonts, colors, buttons, layout, spaces)","UX = the overall experience of using the product","UX Design = Content + Usability + UI Design + User Interaction Design","Users form an opinion about an app in just 50 milliseconds — first impressions matter!"])}
`;

CONTENT.whyux = `
  ${explain(`<p>UI and UX aren't separate competitors — they work together. Think of it this way: <strong>UI is the vehicle for UX</strong> — it's the user's actual point of connection to the product. UI supports UX, and UI extends UX out into something people can touch and click.</p>`)}

  <h3>Why does good UX actually matter to a business?</h3>
  <div class="chiprow">
    <span class="chip">📈 Increases productivity</span>
    <span class="chip">💰 Increases sales and revenue</span>
    <span class="chip">🎓 Reduces the cost of support and training</span>
    <span class="chip">⏱️ Reduces development cost and time</span>
    <span class="chip">🔧 Reduces the cost of maintenance</span>
    <span class="chip">😊 Increases customer satisfaction</span>
  </div>

  <p style="text-align:center; font-weight:800; font-size:19px; color:var(--rail); margin:24px 0;">Better UX Design → Happy Team → Happy Users → More Users → More Revenue</p>

  ${analogy(`<p>Think of UX like the foundation of a house, and UI like its paint and furniture. You could paint a house with a cracked foundation beautifully, but it still won't be a good place to live. UX should be involved right from the very first phase of designing a product — not added on as an afterthought.</p>`)}

  ${remember(["UI supports, extends, and is the vehicle for UX","Good UX increases productivity, sales, and satisfaction — while reducing support, dev, and maintenance costs","UX should be considered from the very first phase of product design"])}
`;

CONTENT.uxprocess = `
  ${explain(`<p>A <strong>UX Designer</strong> is someone who investigates and analyses how users feel about the products offered to them, and applies that knowledge to product development to ensure users get the best possible experience. Their day-to-day work usually includes conducting research, analyzing findings, informing the rest of the team, and monitoring whether those findings actually get implemented.</p>`)}

  <h3>The UX Design Process — 6 Phases</h3>
  <p>Tap each phase to see what happens in it. We'll explore each one in more depth over the next few stations.</p>
  <div class="diagram">
    <div class="node clickable" data-pop="Meeting the client, understanding why and how they came up with the idea, learning about competitors, and surveying the market.">
      <span class="emoji">🔎</span>Discovery
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Creating clear documentation — timing, budget, resources, and team sizes — and agreeing on objectives with the client.">
      <span class="emoji">📅</span>Planning
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Documenting guidelines and rules for how the design team will achieve business and product goals, based on understanding the client, competitors, and users.">
      <span class="emoji">🧭</span>Strategy
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Understanding the product, the user's behaviour with it, their needs, their pains, and their motivation to use it.">
      <span class="emoji">🔬</span>UX Research
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Measuring the interaction between a user and the interface, considering user, business, expert, and technical perspectives.">
      <span class="emoji">📊</span>Analysis
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Sketching, wireframing, prototyping, visual design, documentation, development, and finally production.">
      <span class="emoji">🎨</span>Design
      <div class="node-pop"></div>
    </div>
  </div>

  ${remember(["A UX Designer researches, analyses, informs the team, and monitors implementation","The UX Design Process has 6 phases: Discovery → Planning → Strategy → UX Research → Analysis → Design"])}
`;

CONTENT.discoverplan = `
  ${explain(`<p>The earliest phases of a UX project are about understanding the problem clearly — before any designing begins.</p>`)}

  <h3>🔎 Discovery</h3>
  <p><strong>Goal:</strong> have a clear idea about the product. This means meeting the client, having a conversation about why and how they came up with the idea, learning about competitors, surveying the market, and creating documents with requirements and specifications.</p>

  <h3 style="margin-top:20px;">📅 Planning</h3>
  <p>Creating clear documentation — timing, budget, resources, and team sizes. There are two common cases: the time can be provided by the design team, or dictated by the client. It's important to explain to the client why good UX matters, and come to an agreement together.</p>

  <div class="chiprow">
    <span class="chip">A typical Project Proposal includes:</span>
    <span class="chip">Title page</span>
    <span class="chip">Revision history</span>
    <span class="chip">Project overview &amp; approach</span>
    <span class="chip">Scope of work</span>
    <span class="chip">Assumptions</span>
    <span class="chip">Deliverables</span>
    <span class="chip">Additional costs and fees</span>
    <span class="chip">Ownership and rights</span>
    <span class="chip">Pricing &amp; payment schedule</span>
    <span class="chip">Sign-off</span>
  </div>

  <h3 style="margin-top:20px;">🧭 UX Strategy</h3>
  <p>Documentation for the guidelines and rules that will outline how the design team will try to achieve the business and product goals. Good strategy comes from understanding three things:</p>
  <div class="flow-grid">
    <div class="flow-card"><h4>Client's Business</h4><p style="font-size:14px;">Annual operating plans, marketing plans, sales projections, competitive analysis, industry analysis.</p></div>
    <div class="flow-card"><h4>Competitors</h4><p style="font-size:14px;">Gives perspective on strategy and what resources are needed to compete in that market category.</p></div>
    <div class="flow-card"><h4>Customers</h4><p style="font-size:14px;">We can't predict exactly how customer behaviour with digital products will change in the future — so understanding them deeply matters.</p></div>
  </div>
  <p style="margin-top:12px;">Discovering your own UX strategy rests on four pillars: <strong>Business Strategy, Value Innovation, Validated User Research,</strong> and <strong>Killer UX Design.</strong></p>

  ${remember(["Discovery = understand the product and the problem clearly","Planning = create documentation and agree on timing/budget/resources with the client","UX Strategy = guidelines built on understanding the client's business, competitors, and customers"])}
`;

CONTENT.uxresearch = `
  ${explain(`<p><strong>UX Research</strong> means understanding the product itself, the user's behaviour with it, their needs, their pains, and their motivation to use it.</p>`)}

  <h3>Why do UX Research at all?</h3>
  <div class="chiprow">
    <span class="chip">Removes assumptions</span>
    <span class="chip">Gives data to back up decisions</span>
    <span class="chip">Saves time and money if done properly</span>
    <span class="chip">Avoids mistakes from the very beginning</span>
  </div>

  <p style="margin-top:14px;">Research methods generally fall into two families: <strong>Quantitative Research</strong> (numbers, measurable data) and <strong>Qualitative Research</strong> (opinions, observed behaviour, the "why" behind the numbers).</p>

  <h3 style="margin-top:20px;">The UX Research Process — 4 Stages</h3>
  <div class="diagram">
    <div class="node clickable" data-pop="Finding the missing pieces — what information is needed, and what people actually want. Methods: field study, diary study, user interview, stakeholder interview.">
      <span class="emoji">🕵️</span>Discover
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Understanding the problem and designing its scope, so users' needs are addressed well. Methods: competitive analysis, design review, persona building, task analysis, journey-mapping, prototype feedback, user stories, card-sorting.">
      <span class="emoji">🧭</span>Explore
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Checking the design during development, to ensure the product actually works well. Methods: qualitative usability testing, benchmark testing, accessibility evaluation.">
      <span class="emoji">🧪</span>Test
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Understanding existing problems and looking for new issues. Methods: surveys, search-log analysis, usability-bug review, FAQ review.">
      <span class="emoji">👂</span>Listen
      <div class="node-pop"></div>
    </div>
  </div>

  ${analogy(`<p>Think of designing a new school canteen menu. <strong>Empathize</strong> = talking to students about what they actually want to eat. <strong>Define</strong> = realizing the real problem is "lunch lines are too slow," not just "food is boring." <strong>Ideate</strong> = brainstorming ideas like pre-ordering apps, express counters, or grab-and-go meals. <strong>Prototype</strong> = setting up a trial express counter for one week. <strong>Test</strong> = asking students if the wait time actually improved — and adjusting based on what they say.</p>`)}

  ${remember(["UX Research = understanding the product, the user, and their motivations","Quantitative research = numbers · Qualitative research = the 'why' behind them","4 stages: Discover → Explore → Test → Listen"])}
`;

CONTENT.uxanalysis = `
  ${explain(`<p><strong>UX Analysis</strong> measures the interaction between a user and the interface. It's a process — researchers identify patterns in the research, propose possible solutions, and make new recommendations.</p>`)}

  <p>A good analysis considers <strong>every</strong> perspective connected to the product:</p>
  <div class="chiprow">
    <span class="chip">👤 User perspective</span>
    <span class="chip">💼 Business perspective</span>
    <span class="chip">🧑‍💻 Expert team's perspective</span>
    <span class="chip">⚙️ Technical perspective</span>
  </div>

  <p style="margin-top:14px;">Analysis usually answers: <em>who are our customers? Where is our user category? What information do they need? How do they prefer to access it?</em> Common methods to measure UX include <strong>A/B Testing, Heat Mapping,</strong> and <strong>Research Groups.</strong> Good analysis leads to real benefits: a better product, cheaper problem-fixing, and something genuinely easy to use.</p>

  <h3 style="margin-top:22px;">Talking to real people: User Interviews</h3>
  <p>Interviews usually involve three roles — an <strong>Interviewer</strong>, <strong>Partners</strong>, and a <strong>Facilitator</strong> — and follow a clear process: preparing for the session, identifying who to talk to, setting up screener surveys to filter participants, and finally conducting the interview.</p>

  <div class="flow-grid">
    <div class="flow-card">
      <h4>4 Things to Remember</h4>
      <p style="font-size:14px;">Give your complete attention · Listen without offering answers or opinions · Never talk down to the user · Users speak, we understand.</p>
    </div>
    <div class="flow-card">
      <h4>A Few Pointers</h4>
      <p style="font-size:14px;">Refer back to the challenges defined earlier · Show the prototype and explain it · Listen without judgement · Stay positive with negative feedback · Reframe questions as needed.</p>
    </div>
  </div>

  <p style="margin-top:14px;">Customer data gathered along the way is usually grouped into four categories: <strong>Profile Data, Business Data, Activity Data,</strong> and <strong>Communication Data.</strong></p>

  ${analogy(`<p>"You cannot understand good design if you do not understand people; design is made for people." Every method here — testing, heat mapping, interviews — is really just a different way of listening carefully.</p>`)}

  ${remember(["UX Analysis considers user, business, expert, and technical perspectives","A/B Testing, Heat Mapping, and Research Groups are common ways to measure UX","Customer data is grouped into Profile, Business, Activity, and Communication data"])}
`;

CONTENT.designphase = `
  ${explain(`<p>Once research and strategy are solid, the actual <strong>Design</strong> phase begins — usually kicked off with a meeting involving managers, marketing, design, developers, sales, and support teams, where the project manager and UX leader present the business case, competitive analysis, and user research findings.</p>`)}

  <h3>Design has 5 sub-phases</h3>
  <div class="diagram">
    <div class="node clickable" data-pop="Rough sketches and flows exploring how the product might work, before anything is polished.">
      <span class="emoji">✏️</span>Concept &amp; Sketching
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Building simplified, low-cost layouts (wireframes) and clickable mockups (prototypes) to test ideas cheaply.">
      <span class="emoji">📐</span>Wireframes &amp; Prototyping
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="UI Design (colors, type, images — done by the UI designer) plus UI Interaction (the animations for what happens after a user acts — done by the interaction designer).">
      <span class="emoji">🎨</span>Visual Design &amp; Interaction
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Full documentation containing all design elements, plus decisions on which tools and frameworks to use.">
      <span class="emoji">📄</span>Documentation
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="The functional implementation of the interface — turning designs into a real, working product.">
      <span class="emoji">💻</span>Development
      <div class="node-pop"></div>
    </div>
  </div>

  <h3 style="margin-top:22px;">Production</h3>
  <p>The final stage moves from a <strong>Beta Release</strong> to a <strong>Live Product</strong> — followed by ongoing work: measuring performance, generating performance and analytical reports, tracking issues, and providing help/support.</p>

  ${analogy(`<p>"I know you have a thousand ideas for all the cool features iTunes could have. So do we. But we don't want a thousand features. That would be ugly. Innovation is not about saying 'YES' to everything. It's about saying 'NO' to all but the most crucial features." — Steve Jobs</p>`)}

  ${remember(["Design phases: Concept/Sketching → Wireframes/Prototyping → Visual Design &amp; Interaction → Documentation → Development","UI Design = the look · UI Interaction = the animations and responses to user actions","Production = Beta Release → Live Product → ongoing performance monitoring and support"])}
`;

CONTENT.personas = `
  ${explain(`<p>A <strong>User Persona</strong> is a fictional character created to represent a type of user who might use a site, brand, or product in a similar way. Personas turn research data into something the whole team can relate to and design for.</p>`)}

  <h3>What goes into a persona?</h3>
  <div class="chiprow">
    <span class="chip">Profile section</span>
    <span class="chip">Personality section</span>
    <span class="chip">Expertise section</span>
    <span class="chip">Must-do / must-never section</span>
    <span class="chip">Referents &amp; influences</span>
    <span class="chip">Devices &amp; platform</span>
    <span class="chip">Product section</span>
    <span class="chip">Archetype section</span>
    <span class="chip">Key quotes</span>
    <span class="chip">Experience goals</span>
    <span class="chip">Brand-relationship section</span>
    <span class="chip">Picture</span>
    <span class="chip">Use type</span>
  </div>
  <p style="margin-top:12px;">These are often grouped more simply into four buckets: <strong>Personal information, the professional side (needs &amp; goals), technical expertise &amp; workplace,</strong> and a <strong>personal quote.</strong></p>

  <h3 style="margin-top:20px;">Four types of personas</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>Goal-Directed</h4><p style="font-size:14px;">Focused on what the user wants to accomplish.</p></div>
    <div class="flow-card"><h4>Role-Based</h4><p style="font-size:14px;">Focused on the user's role or job function.</p></div>
    <div class="flow-card"><h4>Engaging</h4><p style="font-size:14px;">Written to be memorable and vivid for the team.</p></div>
    <div class="flow-card"><h4>Fictional</h4><p style="font-size:14px;">A composite character built from research patterns.</p></div>
  </div>

  <h3 style="margin-top:20px;">Why personas help the whole team</h3>
  <p>Stakeholders can evaluate new feature ideas against a persona; architects can design informed wireframes and labelling; designers can shape the overall look and feel; engineers can decide technical approaches based on user behaviour; and copywriters can write content for the right audience.</p>

  ${remember(["A persona = a fictional character representing a real type of user","Built from real research, not guesswork","4 types: Goal-directed, Role-based, Engaging, Fictional","Personas help every team member — design, engineering, and content — stay aligned on who they're building for"])}
`;

CONTENT.gestalt = `
  ${explain(`
    <p>Good UX design leans on real psychology — specifically on understanding how the human brain naturally perceives things. Human beings pay attention to things that are different or unique, and one theory explains this pattern-seeking behaviour especially well.</p>
    <p><strong>Gestalt Theory</strong> is a theory from the early 20th century (developed by Max Wertheimer, Kurt Koffka, and Wolfgang Köhler) about how people perceive the world around them. Its core idea: humans perceive an <strong>organized whole that is more than just the sum of its individual parts</strong>.</p>
  `)}

  <h3>The 5 Gestalt Laws</h3>
  <p>Tap each law below to see what it means for design.</p>
  <div class="diagram">
    <div class="node clickable" data-pop="Things that are close together appear more related than things spaced farther apart. Group related buttons or fields close together, and put unrelated ones further apart.">
      <span class="emoji">📍</span>Proximity
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="When things look similar to each other (same color, shape, or size), we automatically group them together in our minds — even without any lines separating them.">
      <span class="emoji">🎨</span>Similarity
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="When we see a complex arrangement of shapes, we instinctively look for one single, recognizable pattern — our brain 'closes the gaps' to complete a familiar shape.">
      <span class="emoji">🧩</span>Closure
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="People instinctively perceive objects as being either in the foreground (the subject) or the background (everything else) — never both at once.">
      <span class="emoji">🖼️</span>Figure-Ground
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="When objects sit inside the same enclosed border or region (like a card or box), we perceive them as belonging together — even if they're not actually close or similar.">
      <span class="emoji">🔲</span>Common Region
      <div class="node-pop"></div>
    </div>
  </div>

  ${analogy(`<p>Think of a school timetable printed in a grid. Subjects listed close together under "Monday" feel related (Proximity). All the Science classes highlighted in green feel like one group (Similarity). A half-erased school logo is still instantly recognizable (Closure). A teacher's name printed boldly in front of a faded background photo reads clearly as the "subject" (Figure-Ground). And every class inside one boxed timetable cell feels grouped together, regardless of subject (Common Region).</p>`)}

  ${remember(["Gestalt Theory: we perceive organized WHOLES, not just individual parts","Proximity = closeness implies relation","Similarity = alike things get grouped","Closure = our brain completes incomplete shapes","Figure-Ground = we separate subject from background","Common Region = a shared boundary implies grouping"])}
`;

CONTENT.psychology = `
  ${explain(`
    <p>Beyond visual perception, UX designers also draw on psychology to understand <strong>why</strong> people take (or don't take) an action inside a product. Three factors decide this every single time: <strong>Motivation, Ability,</strong> and <strong>Triggers</strong> — a framework closely related to the well-known Fogg Behavior Model.</p>
  `)}

  <h3>Why we fail to take action</h3>
  <p>We fail to complete a desired action whenever ANY of these happen: our motivation is too low, the behaviour is too hard to do (low ability), or we're simply never triggered/prompted to act at all.</p>

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🔥 Motivation</h4>
      <p style="font-size:14px;">Comes in two forms: <strong>Extrinsic</strong> motivation (external rewards, like discounts or badges) and <strong>Intrinsic</strong> motivation (internal satisfaction, like genuine enjoyment or curiosity).</p>
    </div>
    <div class="flow-card">
      <h4>💪 Ability</h4>
      <p style="font-size:14px;">Ask: where will the product be used? What's the main task? Are there frustrations along the way? Is it straightforward and user-friendly? The easier a task is, the less motivation is needed to complete it.</p>
    </div>
    <div class="flow-card">
      <h4>🔔 Triggers</h4>
      <p style="font-size:14px;">The prompt or cue that reminds a user to act right now — a notification, an email, a button that catches the eye at just the right moment.</p>
    </div>
  </div>

  ${analogy(`<p>Think about why you might skip your daily reading habit. You may WANT to read (motivation), you may find it easy to read a few pages (ability) — but if nothing ever reminds you to pick up the book (no trigger), it simply won't happen. Change any one of the three, and behaviour changes.</p>`)}

  ${mistake(`<p>Don't assume users fail to act because they "just don't want to." Often the real cause is that the task feels too hard (low ability), or there was simply no trigger reminding them at the right moment — both are things a designer can actually fix.</p>`)}

  ${remember(["Action happens only when Motivation + Ability + Trigger all align","Motivation: Extrinsic (external reward) vs Intrinsic (internal satisfaction)","Ability: how easy or hard the task feels to complete","Triggers: the prompt or cue that reminds someone to act right now"])}
`;
/* ================= UNIT 2: VISUAL DESIGN & BEHAVIOUR ================= */
/* ================= UNIT 2: VISUAL DESIGN PRINCIPLES & PROCESSES ================= */

/* 12-hue traditional colour wheel (red-yellow-blue), drawn as SVG wedges */
const WHEEL_HUES = [
  {n:"Yellow",        c:"#FFE600", t:"primary"},
  {n:"Yellow-orange", c:"#FFBE00", t:"tertiary"},
  {n:"Orange",        c:"#FF8A00", t:"secondary"},
  {n:"Red-orange",    c:"#F2480A", t:"tertiary"},
  {n:"Red",           c:"#E3162B", t:"primary"},
  {n:"Red-purple",    c:"#A8136C", t:"tertiary"},
  {n:"Purple",        c:"#6B1F9E", t:"secondary"},
  {n:"Blue-purple",   c:"#3E32A8", t:"tertiary"},
  {n:"Blue",          c:"#1E55D6", t:"primary"},
  {n:"Blue-green",    c:"#0E9BA8", t:"tertiary"},
  {n:"Green",         c:"#2EA84A", t:"secondary"},
  {n:"Yellow-green",  c:"#9ACD32", t:"tertiary"},
];
function wheelSVG(){
  const cx=120, cy=120, R=105, r=38, step=Math.PI/6;
  let out = `<svg viewBox="0 0 240 240" role="img" aria-label="A twelve-colour wheel: yellow at the top, then clockwise orange, red, purple, blue and green, with in-between colours">`;
  WHEEL_HUES.forEach((h,i)=>{
    const a0 = -Math.PI/2 - step/2 + i*step, a1 = a0 + step;
    const p = (rad,a)=>[(cx+rad*Math.cos(a)).toFixed(1),(cy+rad*Math.sin(a)).toFixed(1)];
    const [x0,y0]=p(R,a0), [x1,y1]=p(R,a1), [x2,y2]=p(r,a1), [x3,y3]=p(r,a0);
    out += `<path d="M${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1} L${x2},${y2} A${r},${r} 0 0 0 ${x3},${y3} Z" fill="${h.c}" stroke="#fff" stroke-width="2"/>`;
  });
  out += `<text x="120" y="117" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">12 basic</text><text x="120" y="131" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">colours</text></svg>`;
  return out;
}

CONTENT.visualintro = `
  ${explain(`<p><strong>Visual design</strong> shapes and improves the user experience by thinking carefully about how <strong>illustrations, photography, typography, space, layout and colour</strong> affect two things: how <em>usable</em> a product is, and how <em>attractive</em> it feels.</p>`)}

  ${analogy(`<p>Think of dressing for an interview. The outfit doesn't change how skilled you are — but it changes how people <em>feel</em> about you in the first few seconds. Visual design is the outfit of a product, and it also helps people find their way around it.</p>`)}

  <h3>The six basic elements of visual design</h3>
  <p>Every screen, poster or page is built from just six ingredients. Tap each one to see what it means.</p>
  <div class="diagram">
    <div class="node clickable" data-pop="A line is a row of points next to each other. Lines organise, divide, frame and guide the eye."><span class="emoji">➖</span>Lines<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="One or more lines joined up, or areas made by differences in colour or texture: squares, circles, triangles, leaves, icons."><span class="emoji">🔷</span>Shapes<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="Set the mood, create emotion, and guide users towards the next action."><span class="emoji">🎨</span>Colours<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="The art of arranging type so written language is legible, readable and pleasant to look at."><span class="emoji">🔤</span>Typography<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="How a surface looks or feels — rough, smooth, patterned. Used to grab attention and create a focal point."><span class="emoji">🪨</span>Textures<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="Three-dimensional nature: height, width and depth."><span class="emoji">🧊</span>Form<div class="node-pop"></div></div>
  </div>

  ${remember(["Visual design = illustrations, photography, typography, space, layout and colour working together","It improves BOTH usability and aesthetic appeal","6 basic elements: Lines, Shapes, Colours, Typography, Textures, Form","The next stations explore each element, then the principles that combine them"])}
`;

CONTENT.vlines = `
  ${explain(`<p>A <strong>line</strong> is a number of points sitting next to each other. It can go on forever or have two end points — and the shortest distance between two points is a straight line. Lines look simple, but designers use them for a lot of jobs.</p>`)}

  <h3>What lines can do</h3>
  <div class="chiprow">
    <span class="chip">🧱 Add <strong>structure</strong> to a layout</span>
    <span class="chip">🖼️ <strong>Frame</strong> information</span>
    <span class="chip">✂️ <strong>Divide</strong> information into sections</span>
    <span class="chip">🧭 Guide the eye (arrows)</span>
    <span class="chip">🎭 Make a statement, or create patterns and decoration</span>
  </div>

  <h3 style="margin-top:20px;">Lines can look very different</h3>
  <p>They can be <strong>straight, curved or angled</strong>; <strong>thick or thin</strong>; <strong>solid or dashed</strong>; and run <strong>horizontally, vertically or diagonally</strong>. Each choice changes the feel — horizontal lines feel calm, diagonal lines feel energetic.</p>

  ${demoCard("linesdemo", "See it: lines used for emphasis, borders, division and background", 330)}

  ${refTable(["Job of a line","Example in the demo"],[
    ["Emphasis","The underline beneath the heading, and the stress on key words"],
    ["Border","The frame drawn around the quote box"],
    ["Division","The thin rule separating the two text sections"],
    ["Background","The diagonal stripes behind the banner"]
  ])}

  ${mistake(`<p>Too many lines make a page feel like a cage. Use a line only when it <em>does a job</em> — separating, framing, or pointing. If removing the line changes nothing, remove it.</p>`)}

  ${remember(["A line = adjacent points; it can be straight, curved, angled, thick, thin, solid or dashed","Uses: organise, frame, divide, guide the eye with arrows, create patterns, make a statement","Common roles: emphasis, borders, division and backgrounds","Horizontal lines feel calm; diagonals feel energetic"])}
`;

DEMOS.linesdemo = `<style>
  body { font-family: Georgia, serif; margin: 0; padding: 10px; }
  .banner { background: repeating-linear-gradient(45deg, #dff3f5, #dff3f5 10px, #bfe6ea 10px, #bfe6ea 20px);
            padding: 14px; text-align: center; border-radius: 6px; }
  .banner h2 { margin: 0; display: inline-block; border-bottom: 4px solid #00a3b4; padding-bottom: 4px; } /* emphasis */
  .quote { border: 3px double #333; padding: 10px 14px; margin: 12px 0; font-style: italic; }          /* border */
  .col { width: 48%; display: inline-block; vertical-align: top; box-sizing: border-box; padding: 4px 8px; font-size: 14px; }
  .col + .col { border-left: 2px dashed #888; }                                                          /* division */
</style>
<div class="banner"><h2>Lines at work</h2></div>
<div class="quote">"Design is not just what it looks like. Design is how it works."</div>
<div><div class="col">Section one sits on the left of the dashed line.</div><div class="col">Section two sits on the right, clearly separate.</div></div>`;

CONTENT.vshapes = `
  ${explain(`<p><strong>Shapes</strong> are made by joining one or more lines, or by differences in colour and texture. They can be natural or man-made, regular or irregular, organic or inorganic, angular or round, big or small, open or closed, flat (2D) or solid (3D).</p>`)}

  <h3>Three families of shapes</h3>
  <div class="imgcard">
    <svg viewBox="0 0 420 130" role="img" aria-label="Geometric shapes, organic shapes and abstract shapes">
      <rect x="20" y="30" width="36" height="36" fill="var(--rail)"/><circle cx="90" cy="48" r="19" fill="var(--rail)"/><polygon points="125,66 143,30 161,66" fill="var(--rail)"/>
      <text x="90" y="105" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="700">Geometric</text>
      <path d="M215,70 C200,40 230,20 245,40 C262,25 280,55 262,70 C250,80 228,82 215,70 Z" fill="var(--spark)"/><path d="M290,60 C285,35 315,30 322,50 C330,70 300,80 290,60 Z" fill="var(--spark)"/>
      <text x="260" y="105" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="700">Organic</text>
      <circle cx="370" cy="38" r="9" fill="var(--ink)"/><line x1="370" y1="47" x2="370" y2="75" stroke="var(--ink)" stroke-width="5"/><line x1="370" y1="55" x2="355" y2="68" stroke="var(--ink)" stroke-width="5"/><line x1="370" y1="55" x2="385" y2="68" stroke="var(--ink)" stroke-width="5"/>
      <text x="370" y="105" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="700">Abstract</text>
    </svg>
    <p class="imgcaption">Geometric (squares, circles, triangles) · Organic (leaves, flowers, splashes) · Abstract (icons, stick figures, symbols).</p>
  </div>

  <div class="flow-grid">
    <div class="flow-card"><h4>📐 Geometric</h4><p style="font-size:14.5px;">Clean, regular shapes: squares, circles, triangles, pentagons, hexagons, octagons.</p></div>
    <div class="flow-card"><h4>🍃 Organic</h4><p style="font-size:14.5px;">Natural, irregular, flowing: leaves, flowers, ink splatters, pebbles.</p></div>
    <div class="flow-card"><h4>🔣 Abstract</h4><p style="font-size:14.5px;">Simplified stand-ins for real things: icons, stick figures, symbols, logos. Emojis and map pins are good examples.</p></div>
  </div>

  <h3 style="margin-top:22px;">Geometric shapes carry meaning</h3>
  <p>Tap a shape to see what it tends to say to the viewer.</p>
  <div class="diagram">
    <div class="node clickable" data-pop="Squares are reliable and give stability — they suggest order."><span class="emoji">⬛</span>Square<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="Circles represent completion, wholeness and harmony. They appear in solid dots, rings, suns and round compositions."><span class="emoji">⚫</span>Circle<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="Triangles that point UP represent direction and power — think mountains and pyramids."><span class="emoji">🔺</span>Triangle up<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="Triangles that point DOWN suggest instability, but still provide direction."><span class="emoji">🔻</span>Triangle down<div class="node-pop"></div></div>
    <div class="node clickable" data-pop="Pentagons, hexagons and octagons give a design a unique feel, or recall an already-known use: a school-crossing sign (pentagon), a beehive (hexagon), a stop sign (octagon)."><span class="emoji">⬡</span>Pentagon · Hexagon · Octagon<div class="node-pop"></div></div>
  </div>
  <p style="font-size:14.5px;">Triangles also appear in the "play" and "fast-forward / reverse" symbols, mountains, pennants and pizza slices.</p>

  <h3 style="margin-top:22px;">Positive and negative shapes</h3>
  <p>The shape itself is the <strong>positive</strong> shape; the empty space around and between is the <strong>negative</strong> shape. A good design uses both — sometimes the negative space draws a second picture.</p>
  ${demoCard("posneg", "See it: the same shape as positive and as negative", 190)}

  ${analogy(`<p>Shapes in a design work like road signs: you don't read them, you <em>recognise</em> them. A red octagon means "stop" before you've read the word. Choose shapes the way a city chooses signs — for instant meaning.</p>`)}

  ${remember(["Shapes = joined lines, or areas made by colour/texture differences","Families: Geometric, Organic, Abstract","Square = stability/order · Circle = completion/harmony · Triangle up = power · Triangle down = instability but direction","Positive shape = the object; negative shape = the space around it","Shapes create focal points and direct the user's flow through a design"])}
`;

DEMOS.posneg = `<style>
  body { font-family: Arial, sans-serif; margin: 8px; text-align: center; }
  .box { display: inline-block; width: 130px; height: 130px; margin: 6px 14px; vertical-align: top; }
  .cap { font-size: 13px; margin-top: 4px; }
</style>
<div class="box"><svg viewBox="0 0 100 100" width="130" height="130"><rect width="100" height="100" fill="#fff" stroke="#999"/>
  <circle cx="50" cy="50" r="30" fill="#111"/></svg><div class="cap">Positive: black circle</div></div>
<div class="box"><svg viewBox="0 0 100 100" width="130" height="130"><rect width="100" height="100" fill="#111"/>
  <circle cx="50" cy="50" r="30" fill="#fff"/></svg><div class="cap">Negative: same shape, reversed</div></div>
<div class="box"><svg viewBox="0 0 100 100" width="130" height="130"><rect width="100" height="100" fill="#fff" stroke="#999"/>
  <path d="M50 14 C20 14 14 50 40 62 L40 86 L60 86 L60 62 C86 50 80 14 50 14 Z" fill="#111"/>
  <path d="M50 34 C44 34 44 46 50 46 C56 46 56 34 50 34 Z" fill="#fff"/></svg><div class="cap">Space inside a shape can draw another shape</div></div>`;

/* ---------- Colour ---------- */
CONTENT.colorbasics = `
  ${explain(`<p>Colour is the most powerful element of visual design. Colour in visuals is said to <strong>increase attention span by 82%</strong>. Designers use it to present <strong>mood and atmosphere</strong>, <strong>generate emotions</strong> and <strong>guide users to the next action</strong>.</p>`)}

  <h3>Colour theory starts with light</h3>
  <p>Colours are different <strong>wavelengths</strong> of visible light — the narrow slice of the electromagnetic spectrum that human eyes can see, running from red (longest wavelength) to violet (shortest).</p>

  <h3 style="margin-top:20px;">Describing a colour: the Munsell colour system</h3>
  <p>The Munsell system describes any colour with three simple questions. Move the sliders to feel each one.</p>
  <div class="flow-grid">
    <div class="flow-card"><h4>🌈 Hue</h4><p style="font-size:14.5px;">"Simply the colour" — red, yellow, green, blue... where it sits around the colour circle.</p></div>
    <div class="flow-card"><h4>☀️ Value</h4><p style="font-size:14.5px;">How <strong>light or dark</strong> the colour is — the amount of light it reflects. Scale 0 (black) to 10 (white).</p></div>
    <div class="flow-card"><h4>💧 Chroma</h4><p style="font-size:14.5px;">The <strong>purity</strong> of the colour — how far it is from grey. Scale 0 to 10: low chroma looks washed out, high chroma looks vivid.</p></div>
  </div>
  ${demoCard("hsldemo", "Try it: change hue, saturation and lightness", 330)}

  <h3 style="margin-top:20px;">More words you'll hear</h3>
  ${refTable(["Word","Meaning"],[
    ["Saturation","How strong or vivid a colour is, from full strength to grey (absence of any colour)"],
    ["Intensity","Adding or removing <strong>brightness</strong> from a colour"],
    ["Value / Lightness","How dark or light a colour is"],
    ["Tint","Pure hue + <strong>white</strong> (lighter)"],
    ["Tone","Pure hue + <strong>grey</strong> (duller, softer)"],
    ["Shade","Pure hue + <strong>black</strong> (darker)"]
  ])}

  ${mistake(`<p>People often use "saturation", "chroma", "intensity" and "brightness" as if they were the same. They are close cousins but not twins — in this course: <strong>chroma = purity</strong>, <strong>value = lightness</strong>, <strong>intensity = brightness added or removed</strong>. Tint, tone and shade are the three easy recipes for making variations of one hue.</p>`)}

  ${remember(["Colour in visuals increases attention span (82%) and sets mood, emotion and next actions","Munsell: Hue (the colour) · Value (light/dark, 0–10) · Chroma (purity, 0–10)","Tint = + white · Tone = + grey · Shade = + black","Saturation = vividness · Intensity = brightness added or removed"])}
`;

DEMOS.hsldemo = `<style>
  body { font-family: Arial, sans-serif; margin: 10px; font-size: 14px; }
  label { display: block; margin: 8px 0 2px; }
  input[type=range] { width: 100%; }
  #sw { height: 64px; border-radius: 8px; border: 1px solid #888; display: flex; align-items: center;
        justify-content: center; font-weight: bold; margin-top: 10px; }
  .row { display: flex; gap: 8px; margin-top: 8px; }
  .row div { flex: 1; height: 50px; border-radius: 6px; border: 1px solid #888; font-size: 12px;
             display: flex; align-items: center; justify-content: center; text-align: center; }
</style>
<label>Hue (the colour itself): <b id="hv"></b>&deg;</label>
<input id="h" type="range" min="0" max="360" value="210">
<label>Saturation (how vivid): <b id="sv"></b>%</label>
<input id="s" type="range" min="0" max="100" value="80">
<label>Lightness (how light or dark): <b id="lv"></b>%</label>
<input id="l" type="range" min="0" max="100" value="45">
<div id="sw"></div>
<div class="row"><div id="tint">Tint<br>+ white</div><div id="tone">Tone<br>+ grey</div><div id="shade">Shade<br>+ black</div></div>

<script>
  function el(id){ return document.getElementById(id); }
  function update(){
    var h = +el("h").value, s = +el("s").value, l = +el("l").value;
    el("hv").textContent = h; el("sv").textContent = s; el("lv").textContent = l;
    el("sw").style.background = "hsl(" + h + "," + s + "%," + l + "%)";
    el("sw").style.color = l > 55 ? "#000" : "#fff";
    el("sw").textContent = "hsl(" + h + ", " + s + "%, " + l + "%)";
    el("tint").style.background  = "hsl(" + h + "," + s + "%," + Math.min(l + 30, 95) + "%)";      // add white
    el("tone").style.background  = "hsl(" + h + "," + Math.round(s * 0.35) + "%," + l + "%)";      // add grey
    el("shade").style.background = "hsl(" + h + "," + s + "%," + Math.round(l * 0.45) + "%)";      // add black
    el("shade").style.color = "#fff";
  }
  ["h","s","l"].forEach(function(id){ el(id).addEventListener("input", update); });
  update();
</script>`;

CONTENT.colorsystems = `
  ${explain(`<p>Colour <em>systems</em> are the recipes that actually create colours. Two matter most: <strong>RGB</strong> for screens and <strong>CMYK</strong> for printing.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>💡 RGB — additive</h4>
      <p style="font-size:14.5px;"><strong>R</strong>ed + <strong>G</strong>reen + <strong>B</strong>lue <em>light</em>. Mixing light: add all three at full strength and you get <strong>white</strong>; no light at all is black. Used by phones, monitors, TVs. "What you see on screen."</p>
    </div>
    <div class="flow-card">
      <h4>🖨️ CMYK — subtractive</h4>
      <p style="font-size:14.5px;"><strong>C</strong>yan + <strong>M</strong>agenta + <strong>Y</strong>ellow + blac<strong>K</strong> <em>ink</em>. Mixing ink: each layer soaks up more light, so mixing them all gives a dark <strong>black</strong>. Used for printing. "How it will print."</p>
    </div>
  </div>

  ${demoCard("rgbmix", "Try it: mix red, green and blue light", 260)}

  ${mistake(`<p>A design that looks glowing and vivid on screen (RGB) can look dull when printed (CMYK), because ink cannot reproduce every colour that light can. If something is going to be printed, check it in CMYK mode before sending it off.</p>`)}

  <h3 style="margin-top:22px;">The colour wheel</h3>
  <p>Arranging colours in a circle shows how they relate. The traditional wheel has <strong>12 basic colours</strong>:</p>
  <div class="imgcard">${wheelSVG()}<p class="imgcaption">Yellow sits at the top; going clockwise: orange, red, purple, blue, green.</p></div>

  ${refTable(["Group","Colours","How they arise"],[
    ["<strong>Primary</strong>","Yellow, Red, Blue","The starting points — can't be made by mixing others"],
    ["<strong>Secondary</strong>","Orange, Purple, Green","Mix of two primaries"],
    ["<strong>Tertiary</strong>","Yellow-orange, red-orange, red-purple, blue-purple, blue-green, yellow-green","Mix of a primary and its neighbouring secondary"]
  ])}

  <h3 style="margin-top:22px;">Warm and cool colours</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>🔥 Warm colours</h4><p style="font-size:14.5px;">Reds, oranges, yellows. Feel of <strong>energy, brightness and action</strong>.</p></div>
    <div class="flow-card"><h4>❄️ Cool colours</h4><p style="font-size:14.5px;">Blues, greens, purples. Feel of <strong>calm, peace and serenity</strong>.</p></div>
  </div>

  <h3 style="margin-top:22px;">Complementary colours</h3>
  <p>Colours directly <strong>opposite</strong> each other on the wheel are <strong>complementary</strong> — yellow/purple, red/green, blue/orange. Side by side they make each other look brighter. Tap a wedge to find its partner.</p>
  ${demoCard("colorwheel", "Try it: tap any colour to find its complement", 330)}

  ${remember(["RGB = additive light (screens): all three at full = white","CMYK = subtractive ink (print): all mixed = black","12-colour wheel: 3 primary (Y, R, B), 3 secondary (O, P, G), 6 tertiary","Warm = energy, brightness, action · Cool = calm, peace, serenity","Complementary colours sit directly opposite each other on the wheel"])}
`;

DEMOS.rgbmix = `<style>
  body { font-family: Arial, sans-serif; margin: 10px; font-size: 14px; }
  label { display: block; margin: 8px 0 2px; }
  input[type=range] { width: 100%; }
  #sw { height: 70px; border-radius: 8px; border: 1px solid #888; margin-top: 10px; display: flex;
        align-items: center; justify-content: center; font-weight: bold; }
</style>
<label style="color:#c00;">Red light: <b id="rv"></b></label><input id="r" type="range" min="0" max="255" value="255">
<label style="color:#080;">Green light: <b id="gv"></b></label><input id="g" type="range" min="0" max="255" value="140">
<label style="color:#00c;">Blue light: <b id="bv"></b></label><input id="b" type="range" min="0" max="255" value="0">
<div id="sw"></div>
<p style="margin:6px 0 0;">Tip: set all three to 255 for white, and all three to 0 for black.</p>

<script>
  function el(id){ return document.getElementById(id); }
  function hex(n){ var s = n.toString(16); return s.length < 2 ? "0" + s : s; }
  function update(){
    var r = +el("r").value, g = +el("g").value, b = +el("b").value;
    el("rv").textContent = r; el("gv").textContent = g; el("bv").textContent = b;
    el("sw").style.background = "rgb(" + r + "," + g + "," + b + ")";
    el("sw").style.color = (r * 0.3 + g * 0.6 + b * 0.1) > 140 ? "#000" : "#fff";
    el("sw").textContent = "rgb(" + r + ", " + g + ", " + b + ")  =  #" + hex(r) + hex(g) + hex(b);
  }
  ["r","g","b"].forEach(function(id){ el(id).addEventListener("input", update); });
  update();
</script>`;

DEMOS.colorwheel = `<style>
  body { font-family: Arial, sans-serif; margin: 6px; text-align: center; }
  svg { width: 250px; height: 250px; }
  path { cursor: pointer; stroke: #fff; stroke-width: 2; }
  path.sel { stroke: #111; stroke-width: 5; }
  #msg { font-size: 15px; margin-top: 4px; min-height: 24px; }
</style>
<svg id="wheel" viewBox="0 0 240 240"></svg>
<div id="msg">Tap a colour on the wheel.</div>

<script>
  var hues = [
    ["Yellow","#FFE600"],["Yellow-orange","#FFBE00"],["Orange","#FF8A00"],["Red-orange","#F2480A"],
    ["Red","#E3162B"],["Red-purple","#A8136C"],["Purple","#6B1F9E"],["Blue-purple","#3E32A8"],
    ["Blue","#1E55D6"],["Blue-green","#0E9BA8"],["Green","#2EA84A"],["Yellow-green","#9ACD32"]
  ];
  var cx = 120, cy = 120, R = 108, r = 36, step = Math.PI / 6, svg = document.getElementById("wheel");
  var paths = [];
  function pt(rad, a){ return (cx + rad * Math.cos(a)).toFixed(1) + "," + (cy + rad * Math.sin(a)).toFixed(1); }
  hues.forEach(function(h, i){
    var a0 = -Math.PI / 2 - step / 2 + i * step, a1 = a0 + step;
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", "M" + pt(R,a0) + " A" + R + "," + R + " 0 0 1 " + pt(R,a1) +
                        " L" + pt(r,a1) + " A" + r + "," + r + " 0 0 0 " + pt(r,a0) + " Z");
    p.setAttribute("fill", h[1]);
    p.addEventListener("click", function(){ choose(i); });
    svg.appendChild(p); paths.push(p);
  });
  function choose(i){
    var j = (i + 6) % 12;                          // opposite wedge = 6 steps round the wheel
    paths.forEach(function(p){ p.setAttribute("class", ""); });
    paths[i].setAttribute("class", "sel"); paths[j].setAttribute("class", "sel");
    document.getElementById("msg").innerHTML =
      "<b>" + hues[i][0] + "</b> is complementary to <b>" + hues[j][0] + "</b>";
  }
</script>`;

CONTENT.colormeaning = `
  ${explain(`<p>Colours don't just look — they <em>mean</em>. People attach feelings and ideas to them, and brands choose colours on purpose. As a designer you pick colours for their message first and their beauty second.</p>`)}

  <h3>What colours commonly say</h3>
  ${refTable(["Colour","Common meanings"],[
    ["<strong style=\"color:#d62828\">Red</strong>","Intense, energetic, strength, danger; associated with food"],
    ["<strong style=\"color:#e67700\">Orange</strong>","Hot, aggressive, success; associated with younger generations"],
    ["<strong style=\"color:#b38b00\">Yellow</strong>","Optimistic, cheerful, energetic; also associated with food"],
    ["<strong style=\"color:#2e8b3d\">Green</strong>","Wealth, nature, freshness; an easy colour for the eye to process"],
    ["<strong style=\"color:#0b6fbd\">Blue</strong>","Trust, security, corporate, peaceful, faith, wisdom"],
    ["<strong style=\"color:#6b2c91\">Purple</strong>","Royalty, luxury, calming, mysterious"],
    ["<strong>Black</strong>","Powerful, formal, sophisticated"],
    ["<strong>White</strong>","Clean, positive; associated with the medical profession"]
  ])}

  <h3 style="margin-top:20px;">Colour psychology in brands</h3>
  ${refTable(["Colour","Emotion","How brands use it"],[
    ["Red","Strength, passion, excitement","Used a lot in the food industry to trigger appetite; high energy and visibility"],
    ["Yellow","Intellect, joy, energy","Conveys positivity and optimism; a fun, cheerful, 'happy' brand image"],
    ["Blue","Loyalty, trust, intelligence","The most popular brand colour; suggests precision and reliability"],
    ["Green","Freshness, growth, safety","Easiest colour for human vision; relaxing; used to signal 'environmentally friendly'"]
  ])}
  <p style="font-size:14.5px;">Meanings also change with culture and context — a colour that means celebration in one place can mean mourning in another — so always think about <em>your</em> audience.</p>

  <h3 style="margin-top:20px;">Choosing a palette</h3>
  <p>You rarely pick colours from scratch. Palette tools suggest combinations that work together:</p>
  <div class="chiprow">
    <span class="chip"><a href="https://mycolor.space/" target="_blank" rel="noopener">mycolor.space</a></span>
    <span class="chip"><a href="http://colormind.io/" target="_blank" rel="noopener">colormind.io</a></span>
    <span class="chip"><a href="https://color.adobe.com/" target="_blank" rel="noopener">color.adobe.com</a></span>
    <span class="chip"><a href="https://coolors.co/" target="_blank" rel="noopener">coolors.co</a></span>
    <span class="chip"><a href="https://www.canva.com/colors/color-wheel/" target="_blank" rel="noopener">canva colour wheel</a></span>
  </div>

  <h3 style="margin-top:22px;">Contrast: can people actually read it?</h3>
  <p><strong>Contrast</strong> is how different the text colour is from the background colour. Three equally "bright" colours side by side can still be a bad choice if the text blends into the background — beautiful but unreadable. Try picking colours below and watch the contrast ratio.</p>
  ${demoCard("contrastdemo", "Try it: a live contrast checker", 350)}
  <p style="font-size:14.5px;">Online contrast checkers do the same job: <a href="https://colourcontrast.cc/" target="_blank" rel="noopener">colourcontrast.cc</a>, <a href="https://coolors.co/contrast-checker/ffffff-000000" target="_blank" rel="noopener">coolors contrast checker</a>, <a href="https://contrastchecker.com/" target="_blank" rel="noopener">contrastchecker.com</a>.</p>

  ${more("🔎 Where do the 4.5 and 3 come from?","<p>The Web Content Accessibility Guidelines (WCAG) set minimum contrast ratios: <strong>4.5 : 1</strong> for normal text, <strong>3 : 1</strong> for large text, and <strong>7 : 1</strong> for the stricter AAA level. Black on white is 21 : 1, the maximum possible.</p>")}

  ${mistake(`<p>Choosing colours by how they look to <em>you</em>. A colour pair that seems fine on your bright monitor can be unreadable for someone with low vision, a colour-vision difference, or just a phone in sunlight. Always measure the contrast, never trust your eyes alone.</p>`)}

  ${remember(["Colours carry meaning: red = energy/danger, blue = trust, green = nature/fresh, yellow = optimism, purple = luxury...","Brands pick colours for the emotion they create","Palette tools: mycolor.space, colormind, Adobe Color, Coolors","Contrast = difference between text and background colours; check it with a contrast checker","WCAG minimums: 4.5:1 normal text, 3:1 large text"])}
`;

DEMOS.contrastdemo = `<style>
  body { font-family: Arial, sans-serif; margin: 10px; font-size: 14px; }
  .pick { display: inline-block; margin-right: 16px; }
  #sample { margin: 12px 0; padding: 16px; border-radius: 8px; border: 1px solid #888; }
  #sample h2 { margin: 0 0 6px; }
  .ok   { color: #0a7a2f; font-weight: bold; }
  .fail { color: #c00;    font-weight: bold; }
  #presets button { margin: 4px 4px 0 0; cursor: pointer; }
</style>
<span class="pick">Text colour: <input type="color" id="fg" value="#ff3b30"></span>
<span class="pick">Background colour: <input type="color" id="bg" value="#00a000"></span>
<div id="presets">Try: <button data-f="#000000" data-b="#ffffff">Black on white</button>
  <button data-f="#ffffff" data-b="#0b6fbd">White on blue</button>
  <button data-f="#ffe600" data-b="#ffffff">Yellow on white</button>
  <button data-f="#ff3b30" data-b="#00a000">Red on green</button></div>
<div id="sample"><h2>Large heading sample</h2><div>Normal body text sample: the quick brown fox jumps over the lazy dog.</div></div>
<div id="result"></div>

<script>
  function el(id){ return document.getElementById(id); }
  function lum(hex){
    var c = [1, 3, 5].map(function(i){
      var v = parseInt(hex.substr(i, 2), 16) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];       // brightness as the eye sees it
  }
  function ratio(a, b){
    var l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }
  function verdict(ok){ return ok ? '<span class="ok">Pass</span>' : '<span class="fail">Fail</span>'; }
  function update(){
    var f = el("fg").value, b = el("bg").value, r = ratio(f, b);
    el("sample").style.color = f; el("sample").style.background = b;
    el("result").innerHTML = "Contrast ratio: <b>" + r.toFixed(2) + " : 1</b><br>" +
      "Normal text (needs 4.5): " + verdict(r >= 4.5) + "<br>" +
      "Large text (needs 3): " + verdict(r >= 3) + "<br>" +
      "Strict AAA (needs 7): " + verdict(r >= 7);
  }
  el("fg").addEventListener("input", update);
  el("bg").addEventListener("input", update);
  document.querySelectorAll("#presets button").forEach(function(btn){
    btn.addEventListener("click", function(){ el("fg").value = btn.dataset.f; el("bg").value = btn.dataset.b; update(); });
  });
  update();
</script>`;

/* ---------- Typography ---------- */
CONTENT.typography1 = `
  ${explain(`<p><strong>Typography</strong> is the art and technique of arranging type so that written language is <strong>legible</strong> (letters are clear), <strong>readable</strong> (text is comfortable to read) and <strong>appealing</strong> when displayed.</p>`)}

  <h3>Font vs Typeface</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>🔤 Typeface</h4><p style="font-size:14.5px;">A <strong>family</strong> of fonts. Examples: Arial, Times New Roman, Verdana.</p></div>
    <div class="flow-card"><h4>🅰️ Font</h4><p style="font-size:14.5px;">One <strong>variation</strong> within the family — a particular weight or style. Examples: Arial Regular, Arial Italic, Arial Bold.</p></div>
  </div>
  ${analogy(`<p>Typeface is like a family surname — "Arial". Each font is one family member: Arial Regular, Arial Italic, Arial Bold. They look related, but each has its own personality.</p>`)}

  <h3 style="margin-top:20px;">Three categories of typefaces</h3>
  <div class="tabbar" id="typeTabs">
    <button class="tabbtn active" data-tab="tserif">Serif</button>
    <button class="tabbtn" data-tab="tsans">Sans-Serif</button>
    <button class="tabbtn" data-tab="tdeco">Decorative</button>
  </div>
  <div class="tabpanel active" data-tab="tserif"><div class="card">
    <p style="font-family:Georgia,'Times New Roman',serif; font-size:30px; margin:0 0 8px;">Seriously Serif</p>
    <p>Serif letters have tiny "feet" (strokes) at the ends. They feel <strong>traditional, formal and trustworthy</strong>. Long ago they were thought easier to read in printed books, newspapers and long text.</p>
  </div></div>
  <div class="tabpanel" data-tab="tsans"><div class="card">
    <p style="font-family:Arial,Helvetica,sans-serif; font-size:30px; margin:0 0 8px;">Strictly Sans-serif</p>
    <p><em>Sans</em> means "without". These letters have clean ends with no feet. They feel <strong>modern, simple and neutral</strong> and are a popular choice for screens, apps and small text.</p>
  </div></div>
  <div class="tabpanel" data-tab="tdeco"><div class="card">
    <p style="font-family:'Brush Script MT','Comic Sans MS',cursive; font-size:32px; margin:0 0 8px;">Dramatic Display</p>
    <p>Decorative (display) typefaces are full of personality — script, handwritten, ornate. They are great for a logo or a short title but <strong>tiring to read in paragraphs</strong>.</p>
  </div></div>

  <h3 style="margin-top:20px;">Mixing and pairing fonts</h3>
  <p>A reliable approach: pair <strong>one serif with one sans-serif</strong> — for example, a serif heading with sans-serif body text. Other safe tricks: Regular + <em>Italic</em> of the same family, ALL CAPS for short labels with lowercase for the rest, and fonts whose styles complement each other.</p>

  ${mistake(`<p>Using many decorative fonts in one design. A document with five different "fun" fonts looks messy and is hard to read. Keep body text simple, and let one decorative font play the starring role in a title or logo.</p>`)}

  ${remember(["Typography = making written language legible, readable and appealing","Typeface = the family (Arial); font = one variation (Arial Bold)","3 categories: Serif (feet, traditional), Sans-serif (no feet, modern), Decorative (personality, for short text)","Pair a serif with a sans-serif; avoid piling up decorative fonts","Fonts matter — they change how a message feels"])}
`;

CONTENT.typography2 = `
  ${explain(`<p>Choosing a typeface is only half the job. How you <em>set</em> the text decides whether people actually enjoy reading it. Five things to note: <strong>alignment, proximity, measure, leading and weight</strong>.</p>`)}

  ${refTable(["Idea","What it means","Why it matters"],[
    ["Alignment","Text lines up left, centre, right, or justified (both edges)","Left-aligned is easiest for long text; centre suits short headings"],
    ["Proximity","Related text sits close together; unrelated text is separated","Groups ideas so readers see the structure at a glance"],
    ["Measure","The length of a line of text","Too long tires the eye; too short breaks the rhythm"],
    ["Leading (line height)","The space between lines","Too tight is cramped; comfortable spacing makes reading easier"],
    ["Weight","The thickness of the letters, from hairline to black","Heavier weight = more importance; builds hierarchy"]
  ])}

  <h3 style="margin-top:20px;">Try it: set the type yourself</h3>
  <p>Drag the sliders and change the typeface category. Notice how the same words feel different.</p>
  ${demoCard("typodemo", "Try it: alignment, measure, leading, weight and typeface", 480)}

  ${more("📏 What is a good measure?","<p>A commonly used guideline is about <strong>45 to 75 characters per line</strong> for comfortable reading of body text. On very small screens a shorter line is fine; on large screens, don't let text stretch across the whole width.</p>")}

  ${mistake(`<p>Justified text (both edges straight) can look neat, but in narrow columns it creates ugly uneven gaps between words that make reading harder. For most web text, left-aligned is the safest choice.</p>`)}

  ${remember(["Alignment: left / centre / right / justify","Proximity: group related text, separate unrelated text","Measure = line length · Leading = space between lines (line-height) · Weight = thickness","A comfortable line is roughly 45–75 characters","Heavier weight signals more important text"])}
`;

DEMOS.typodemo = `<style>
  body { font-family: Arial, sans-serif; margin: 8px; font-size: 13px; }
  .controls { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 14px; margin-bottom: 8px; }
  label { display: block; }
  input[type=range], select { width: 100%; }
  #sample { border: 1px dashed #888; padding: 10px; background: #fffef8; }
</style>
<div class="controls">
  <label>Typeface category
    <select id="face"><option value="serif">Serif</option><option value="sans" selected>Sans-serif</option><option value="deco">Decorative</option></select></label>
  <label>Alignment
    <select id="align"><option>left</option><option>center</option><option>right</option><option>justify</option></select></label>
  <label>Weight: <b id="wv">400</b><input id="wt" type="range" min="100" max="900" step="100" value="400"></label>
  <label>Leading (line height): <b id="lv">1.5</b><input id="lh" type="range" min="1" max="2.4" step="0.1" value="1.5"></label>
  <label style="grid-column: 1 / 3;">Measure (line length): <b id="mv">45</b> characters wide<input id="ms" type="range" min="15" max="100" step="5" value="45"></label>
</div>
<div id="sample">
  <h3 style="margin:0 0 6px;">Reading comfortably</h3>
  <p style="margin:0;">Good typography is invisible. The reader never thinks about the letters; they simply follow the ideas. Spacing between the lines, the length of each line and the thickness of the letters all decide whether a page feels welcoming or tiring to read.</p>
</div>

<script>
  var faces = {
    serif: "Georgia, 'Times New Roman', serif",
    sans:  "Arial, Helvetica, sans-serif",
    deco:  "'Brush Script MT', 'Comic Sans MS', cursive"
  };
  function el(id){ return document.getElementById(id); }
  function update(){
    var s = el("sample");
    s.style.fontFamily = faces[el("face").value];
    s.style.textAlign = el("align").value;
    s.style.fontWeight = el("wt").value;
    s.style.lineHeight = el("lh").value;
    s.style.maxWidth = el("ms").value + "ch";
    el("wv").textContent = el("wt").value;
    el("lv").textContent = el("lh").value;
    el("mv").textContent = el("ms").value;
  }
  ["face","align","wt","lh","ms"].forEach(function(id){ el(id).addEventListener("input", update); });
  update();
</script>`;

/* ---------- Textures & forms ---------- */
CONTENT.texturesforms = `
  ${explain(`<p><strong>Textures</strong> are created to get the user's attention and to create a <strong>focal point</strong> in a composition. <strong>Form</strong> brings in the third dimension.</p>`)}

  <h3>Two kinds of texture</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>🪨 Physical texture</h4>
      <p style="font-size:14.5px;">Texture you could actually <strong>touch</strong> — rough stone, wood grain, fabric, paper. In a design it usually appears as a photograph of a real surface.</p>
    </div>
    <div class="flow-card">
      <h4>👁️ Visual texture</h4>
      <p style="font-size:14.5px;">Texture you can only <strong>see</strong> — a repeated pattern or an illustrated surface that <em>suggests</em> how something would feel.</p>
    </div>
  </div>
  <div class="imgcard">
    <div style="height:90px; border-radius:10px; background: repeating-linear-gradient(135deg, var(--rail) 0 8px, var(--rail-bright) 8px 16px);"></div>
    <p class="imgcaption">A visual texture made only from repeating diagonal stripes — nothing here could be felt with a finger, yet it clearly reads as "textured".</p>
  </div>
  <p><strong>Use of texture:</strong> designers lay patterns or surfaces behind headings, logos and sections to add depth and pull the eye to a focal point — as long as the text on top stays readable.</p>

  <h3 style="margin-top:22px;">Form</h3>
  <p><strong>Form</strong> refers to elements of a <strong>three-dimensional</strong> nature: <strong>height, width and depth</strong>. Shapes are flat; forms have volume. On a flat screen, designers suggest form with shadows, gradients, overlapping and perspective.</p>
  <div class="imgcard">
    <svg viewBox="0 0 320 130" role="img" aria-label="A flat square becomes a cube when sides are shaded">
      <rect x="30" y="35" width="60" height="60" fill="var(--rail)"/><text x="60" y="115" text-anchor="middle" font-size="12" fill="var(--ink)">Shape (flat)</text>
      <polygon points="170,50 215,50 240,30 195,30" fill="var(--rail-bright)"/><rect x="170" y="50" width="45" height="50" fill="var(--rail)"/><polygon points="215,50 240,30 240,80 215,100" fill="var(--spark)"/>
      <text x="205" y="118" text-anchor="middle" font-size="12" fill="var(--ink)">Form (3D)</text>
    </svg>
    <p class="imgcaption">Add a lit top and a shaded side and a flat square suddenly feels like a solid cube.</p>
  </div>

  ${remember(["Texture grabs attention and creates a focal point","Physical texture = can be touched (a photo of stone, wood) · Visual texture = only seen (patterns)","Form = 3D: height, width and depth","On screens, form is suggested with shadows, shading and overlap"])}
`;

/* ---------- Design principles ---------- */
CONTENT.principles1 = `
  ${explain(`<p><strong>Design principles</strong> are widely applicable laws, guidelines, biases and design considerations that designers apply <em>with discretion</em> — they are guides, not handcuffs. Their purpose: to create something that is <strong>aesthetically pleasing</strong> and <strong>optimises the user experience</strong>.</p>`)}

  <p>Seven principles do most of the work: <strong>Alignment, Hierarchy, Contrast, Repetition, Proximity, Balance and Space</strong>. This station covers the first three.</p>

  <h3>1. Alignment</h3>
  <p>Alignment <strong>orders and balances</strong> all the elements. When edges line up — left edges, centres, baselines — the page feels tidy and deliberate. Misaligned items look accidental, even when each piece is nice on its own.</p>
  ${demoCard("alignmentdemo", "See it: the same items, aligned and not aligned", 230)}

  <h3 style="margin-top:22px;">2. Hierarchy</h3>
  <p>Hierarchy puts the <strong>more important elements in the forefront</strong> and the less important ones in the background. Three things control it:</p>
  <div class="chiprow">
    <span class="chip"><strong>Size</strong> — bigger reads first</span>
    <span class="chip"><strong>Shape</strong> — distinctive shapes stand out</span>
    <span class="chip"><strong>Placement</strong> — top and centre get noticed first</span>
  </div>
  ${demoCard("hierarchydemo", "See it: the same content without and with hierarchy", 300)}

  <h3 style="margin-top:22px;">3. Contrast</h3>
  <p>Contrast is how <strong>different</strong> elements are in a design, especially elements that sit next to each other. It is the quickest way to <strong>grab the user's attention</strong>. Contrast can come from colour (light vs dark), size (big vs small), shape, weight, or texture.</p>
  <div class="imgcard">
    <svg viewBox="0 0 360 100" role="img" aria-label="High, medium and low contrast circles">
      <rect x="10" y="10" width="100" height="80" fill="#fff" stroke="var(--line)"/><circle cx="60" cy="50" r="26" fill="#111"/><circle cx="60" cy="50" r="12" fill="#ffe600"/>
      <rect x="130" y="10" width="100" height="80" fill="#fff" stroke="var(--line)"/><circle cx="180" cy="50" r="26" fill="#3d4fa8"/><circle cx="180" cy="50" r="12" fill="#6b82d6"/>
      <rect x="250" y="10" width="100" height="80" fill="#fff" stroke="var(--line)"/><circle cx="300" cy="50" r="26" fill="#2c3a63"/><circle cx="300" cy="50" r="12" fill="#35466f"/>
    </svg>
    <p class="imgcaption">High contrast (left) · medium (middle) · low (right). The more different the centre is from its surroundings, the faster it grabs your eye.</p>
  </div>

  ${analogy(`<p>Imagine a classroom photo where everyone wears the same grey uniform — nobody stands out. Put one student in a bright red coat and your eye jumps to her instantly. That jump is contrast; deciding <em>who</em> deserves the red coat is hierarchy.</p>`)}

  ${remember(["Principles are guides applied with discretion; goal = aesthetic appeal + better user experience","7 principles: Alignment, Hierarchy, Contrast, Repetition, Proximity, Balance, Space","Alignment orders and balances all elements","Hierarchy: important in front, less important behind — controlled by size, shape and placement","Contrast: differences between neighbouring elements grab attention"])}
`;

DEMOS.alignmentdemo = `<style>
  body { font-family: Arial, sans-serif; margin: 8px; }
  .pair { display: flex; gap: 14px; }
  .panel { flex: 1; border: 2px solid #999; border-radius: 8px; padding: 10px; background: #fff; min-height: 150px; }
  .panel h4 { margin: 0 0 8px; font-size: 13px; text-transform: uppercase; color: #555; }
  .item { background: #cfe8ff; border: 1px solid #8ec0f0; padding: 6px 8px; margin-bottom: 8px; width: 70%; font-size: 13px; }
  .messy .item:nth-child(2) { margin-left: 22px; }
  .messy .item:nth-child(3) { margin-left: 6px;  width: 85%; }
  .messy .item:nth-child(4) { margin-left: 34px; }
</style>
<div class="pair">
  <div class="panel"><h4>Not aligned</h4><div class="messy">
    <div class="item">Home</div><div class="item">Programmes</div><div class="item">Admissions</div><div class="item">Contact</div></div></div>
  <div class="panel"><h4>Aligned</h4>
    <div class="item">Home</div><div class="item">Programmes</div><div class="item">Admissions</div><div class="item">Contact</div></div>
</div>`;

DEMOS.hierarchydemo = `<style>
  body { font-family: Arial, sans-serif; margin: 8px; }
  .pair { display: flex; gap: 14px; }
  .panel { flex: 1; border: 2px solid #999; border-radius: 8px; padding: 12px; background: #fff; }
  .panel > h4 { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; color: #555; }
  .flat * { font-size: 14px; font-weight: normal; margin: 4px 0; }
  .rich .title { font-size: 24px; font-weight: 800; margin: 0 0 4px; color: #0b3d91; }
  .rich .sub   { font-size: 14px; color: #555; margin: 0 0 10px; }
  .rich .btn   { display: inline-block; background: #e8590c; color: #fff; padding: 8px 16px; border-radius: 6px; font-weight: bold; }
  .rich .fine  { font-size: 11px; color: #888; margin-top: 10px; }
</style>
<div class="pair">
  <div class="panel flat"><h4>No hierarchy</h4>
    <div>Annual Art Festival</div><div>Join us for a weekend of painting and music</div><div>Register now</div><div>Terms and conditions apply</div></div>
  <div class="panel rich"><h4>With hierarchy</h4>
    <div class="title">Annual Art Festival</div><div class="sub">Join us for a weekend of painting and music</div>
    <span class="btn">Register now</span><div class="fine">Terms and conditions apply</div></div>
</div>`;

CONTENT.principles2 = `
  ${explain(`<p>The remaining four principles — <strong>Repetition, Proximity, Balance and Space</strong> — turn separate pieces into one design that feels complete.</p>`)}

  <h3>4. Repetition</h3>
  <p>Repeating colours, fonts, shapes or layouts creates a <strong>strong, consistent visual design</strong> and <strong>unifies</strong> a design that has many elements. It is why all the pages of a good website feel like they belong together.</p>
  ${demoCard("repetitiondemo", "See it: four cards, one repeated pattern", 170)}

  <h3 style="margin-top:22px;">5. Proximity</h3>
  <p>Proximity means <strong>grouping similar elements together</strong> and creating a relationship between them. Things placed close together are assumed to belong together; space between groups says "this is something different". (This is the same idea as the Gestalt law of proximity from Unit 1.)</p>
  ${demoCard("proximitydemo", "See it: a label floating in the middle vs. grouped with its field", 230)}

  <h3 style="margin-top:22px;">6. Balance</h3>
  <p>Balance gives <strong>form and stability</strong> to a design. It makes sure that elements are distributed so nothing feels like it is about to tip over. There are three groups:</p>
  <div class="imgcard">
    <svg viewBox="0 0 460 150" role="img" aria-label="Symmetrical, asymmetrical and radial balance">
      <g fill="var(--rail)"><rect x="20" y="25" width="30" height="60"/><rect x="100" y="25" width="30" height="60"/></g><rect x="62" y="25" width="26" height="60" fill="var(--spark)"/><line x1="75" y1="15" x2="75" y2="95" stroke="var(--ink-soft)" stroke-dasharray="4"/>
      <text x="75" y="125" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Symmetrical</text>
      <rect x="180" y="25" width="64" height="64" fill="var(--rail)"/><rect x="254" y="25" width="26" height="26" fill="var(--spark)"/><rect x="254" y="60" width="26" height="29" fill="var(--rail-bright)"/>
      <text x="230" y="125" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Asymmetrical</text>
      <circle cx="390" cy="58" r="14" fill="var(--spark)"/>
      ${[0,60,120,180,240,300].map(a=>`<circle cx="${(390+38*Math.cos(a*Math.PI/180)).toFixed(1)}" cy="${(58+38*Math.sin(a*Math.PI/180)).toFixed(1)}" r="9" fill="var(--rail)"/>`).join("")}
      <text x="390" y="125" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Radial</text>
    </svg>
    <p class="imgcaption">Symmetrical: mirrored. Asymmetrical: off-centre but still balanced. Radial: spreading out from a central point.</p>
  </div>
  ${refTable(["Type","How it works"],[
    ["Symmetrical","Elements <strong>mirror each other</strong>, horizontally or vertically — formal, calm, stable"],
    ["Asymmetrical","Elements are <strong>off-centre</strong>; the uneven arrangement creates movement that guides the viewer through the piece — dynamic, modern"],
    ["Radial","Elements make a <strong>circular pattern</strong> that spreads out from a central point"]
  ])}

  <h3 style="margin-top:22px;">7. Space</h3>
  <p>Space (also called white space, whether or not it is white) is the empty area around and between elements. <strong>Negative space highlights important components</strong> by giving them room to breathe — which is why a clean search page can feel so calm and easy to use.</p>
  ${demoCard("spacedemo", "See it: the same button crowded and with space", 200)}

  <h3 style="margin-top:22px;">Tools and inspiration</h3>
  <p>Great designers look at a lot of other designs. These sites show excellent work and trends:</p>
  <div class="chiprow">
    <span class="chip"><a href="https://www.behance.net/" target="_blank" rel="noopener">Behance</a></span>
    <span class="chip"><a href="https://dribbble.com/" target="_blank" rel="noopener">Dribbble</a></span>
    <span class="chip"><a href="https://www.awwwards.com/" target="_blank" rel="noopener">Awwwards</a></span>
    <span class="chip">Inspiration Grid</span>
    <span class="chip">Adobe Creative Suite (design software)</span>
  </div>

  <blockquote style="border-left:4px solid var(--spark); margin:22px 0; padding:4px 16px; font-style:italic; color:var(--ink-soft);">
    "The best design is the simplest one that works." — Albert Einstein<br>
    "Good design is as little design as possible." — Dieter Rams
  </blockquote>

  ${remember(["Repetition: repeat colours, fonts, shapes for consistency and unity","Proximity: group related things; space between groups shows separation","Balance: symmetrical (mirrored), asymmetrical (off-centre but balanced), radial (spreading from a centre)","Space: negative space highlights important components","Inspiration: Behance, Dribbble, Awwwards, Inspiration Grid; software: Adobe Creative Suite"])}
`;

DEMOS.repetitiondemo = `<style>
  body { font-family: Arial, sans-serif; margin: 8px; }
  .row { display: flex; gap: 10px; }
  .card { flex: 1; background: #fff; border: 2px solid #0b6fbd; border-top: 8px solid #0b6fbd; border-radius: 6px; padding: 8px; text-align: center; }
  .card .ico { font-size: 28px; }
  .card h4 { margin: 4px 0; color: #0b3d91; }
  .card p { margin: 0; font-size: 12px; color: #555; }
</style>
<div class="row">
  <div class="card"><div class="ico">📚</div><h4>Learn</h4><p>Same border, same icon size, same heading style</p></div>
  <div class="card"><div class="ico">✏️</div><h4>Practise</h4><p>Same border, same icon size, same heading style</p></div>
  <div class="card"><div class="ico">🧪</div><h4>Test</h4><p>Same border, same icon size, same heading style</p></div>
  <div class="card"><div class="ico">🏆</div><h4>Celebrate</h4><p>Same border, same icon size, same heading style</p></div>
</div>`;

DEMOS.proximitydemo = `<style>
  body { font-family: Arial, sans-serif; margin: 8px; }
  .pair { display: flex; gap: 14px; }
  .panel { flex: 1; border: 2px solid #999; border-radius: 8px; padding: 12px; background: #fff; }
  .panel > h4 { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; color: #555; }
  label { display: block; font-size: 13px; }
  input { width: 90%; padding: 4px; }
  .far label { margin-top: 26px; }
  .far input { margin-bottom: 26px; }
  .near .grp { margin-bottom: 18px; }
  .near label { margin-bottom: 2px; }
</style>
<div class="pair">
  <div class="panel far"><h4>Poor proximity</h4>
    <label>Name</label><input><label>Email</label><input></div>
  <div class="panel near"><h4>Good proximity</h4>
    <div class="grp"><label>Name</label><input></div><div class="grp"><label>Email</label><input></div></div>
</div>`;

DEMOS.spacedemo = `<style>
  body { font-family: Arial, sans-serif; margin: 8px; }
  .pair { display: flex; gap: 14px; }
  .panel { flex: 1; border: 2px solid #999; border-radius: 8px; background: #fff; }
  .panel > h4 { margin: 8px 10px; font-size: 12px; text-transform: uppercase; color: #555; }
  .cramped { padding: 2px; }
  .cramped p, .cramped h3 { margin: 0; font-size: 13px; }
  .cramped .btn { margin: 0; }
  .roomy { padding: 24px 20px; text-align: center; }
  .roomy h3 { margin: 0 0 8px; }
  .roomy p { margin: 0 0 18px; font-size: 13px; color: #555; }
  .btn { display: inline-block; background: #e8590c; color: #fff; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 13px; }
</style>
<div class="pair">
  <div class="panel"><h4>Crowded</h4><div class="cramped"><h3>Join our workshop</h3><p>Learn UX basics in a day.</p><span class="btn">Sign up</span><p>Seats are limited. Bring a laptop. Lunch included.</p></div></div>
  <div class="panel"><h4>With space</h4><div class="roomy"><h3>Join our workshop</h3><p>Learn UX basics in a day.</p><span class="btn">Sign up</span></div></div>
</div>`;

/* ================= UNIT 2.1: DESIGNING BEHAVIOUR ================= */

CONTENT.foggmodel = `
  ${explain(`<p>Why does a user tap "Buy" in one app but ignore it in another? <strong>Designing behaviour</strong> is about understanding what makes people act. Back in Unit 1 we met the three psychological factors — <strong>Motivation, Ability and Triggers</strong>. The <strong>Fogg Behaviour Model</strong> puts them on one picture.</p>`)}

  <h3>The picture: the action line</h3>
  <p>Motivation runs up the side (low to high). Ability runs along the bottom (hard to do → easy to do). A curved <strong>action line</strong> separates the zone where behaviour happens from the zone where it doesn't.</p>
  <ul>
    <li><strong>Above the line</strong> and a trigger arrives → the behaviour <em>succeeds</em>.</li>
    <li><strong>Below the line</strong> → the trigger <em>fails</em>: either the behaviour is too hard, or motivation is too low.</li>
    <li><strong>No trigger at all</strong> → nothing happens, however high the motivation and ability.</li>
  </ul>

  ${demoCard("foggdemo", "Try it: move motivation and ability, then send a trigger", 400)}

  <h3 style="margin-top:20px;">We fail to take action if...</h3>
  <div class="chiprow">
    <span class="chip">📉 The behaviour falls <strong>below the action line</strong></span>
    <span class="chip">🧗 The behaviour is <strong>too hard</strong></span>
    <span class="chip">😴 Our <strong>motivation is too low</strong></span>
    <span class="chip">🔕 We are <strong>not triggered</strong></span>
  </div>

  <h3 style="margin-top:20px;">User behaviour ≠ design behaviour</h3>
  <p>What a user <em>does</em> and what a designer <em>makes it easy to do</em> are not the same thing. A designer cannot force a user's behaviour, but can shape the three elements of the user's product experience — <strong>motivation, ability and triggers</strong> — so the helpful behaviour becomes more likely.</p>

  ${analogy(`<p>Picture a sleepy student and a ringing alarm. If the student really wants to attend class (motivation), the classroom is next door (easy), and the alarm rings at the right moment (trigger) — they get up. Make the classroom a long, hard trip, or remove the alarm, and no amount of good intention helps. Designers adjust the alarm and the distance, not the student's character.</p>`)}

  ${more("🔎 The simple formula behind it","<p>The model is often written as <strong>B = M A T</strong> — Behaviour happens when Motivation, Ability and a Trigger come together at the same moment. The demo above uses a simplified action line to teach the idea; the real model is a diagram, not a precise calculator.</p>")}

  ${remember(["Fogg Behaviour Model: Motivation × Ability, with a Trigger at the right moment","Above the action line + trigger = behaviour succeeds","Fail if: below the line, too hard, motivation too low, or no trigger","Designers can't control users, but can design the three elements of the experience","B = M A T"])}
`;

DEMOS.foggdemo = `<style>
  body { font-family: Arial, sans-serif; margin: 6px; font-size: 13px; }
  .wrap { display: flex; flex-wrap: wrap; gap: 10px; align-items: flex-start; }
  svg { background: #fafafa; border: 1px solid #bbb; border-radius: 6px; }
  .ctl { flex: 1; min-width: 210px; }
  label { display: block; margin-top: 8px; }
  input[type=range] { width: 100%; }
  button { margin-top: 12px; padding: 8px 14px; cursor: pointer; font-weight: bold; }
  #msg { margin-top: 10px; padding: 8px; border-radius: 6px; min-height: 40px; background: #eee; }
</style>
<div class="wrap">
  <svg id="g" width="300" height="230" viewBox="0 0 300 230">
    <line x1="40" y1="200" x2="290" y2="200" stroke="#333" stroke-width="2"/>
    <line x1="40" y1="200" x2="40" y2="10" stroke="#333" stroke-width="2"/>
    <text x="165" y="222" text-anchor="middle" font-size="12">ABILITY (hard to do → easy to do)</text>
    <text x="12" y="105" text-anchor="middle" font-size="12" transform="rotate(-90 12 105)">MOTIVATION (low → high)</text>
    <polyline id="curve" fill="none" stroke="#e03131" stroke-width="3"/>
    <text x="220" y="60" font-size="11" fill="#e03131">action line</text>
    <text x="85" y="40" font-size="11" fill="#2b8a3e">above: behaviour happens</text>
    <text x="150" y="185" font-size="11" fill="#868e96">below: fails</text>
    <circle id="dot" r="8" stroke="#000" stroke-width="1.5"/>
  </svg>
  <div class="ctl">
    <label>Motivation: <b id="mv"></b></label><input id="m" type="range" min="5" max="100" value="40">
    <label>Ability (how easy): <b id="av"></b></label><input id="a" type="range" min="5" max="100" value="40">
    <button id="trig">🔔 Send a trigger</button>
    <div id="msg">Move the sliders, then press the trigger.</div>
  </div>
</div>

<script>
  var K = 2000;                                   // simplified action line: motivation x ability = K
  function el(id){ return document.getElementById(id); }
  function px(a){ return 40 + a * 2.5; }          // ability 0..100 -> x
  function py(m){ return 200 - m * 1.9; }         // motivation 0..100 -> y
  var pts = [];
  for (var a = 20; a <= 100; a += 2){ pts.push(px(a) + "," + py(K / a)); }
  el("curve").setAttribute("points", pts.join(" "));

  function above(){ return (+el("m").value) * (+el("a").value) >= K; }
  function update(){
    var m = +el("m").value, a = +el("a").value;
    el("mv").textContent = m; el("av").textContent = a;
    el("dot").setAttribute("cx", px(a)); el("dot").setAttribute("cy", py(m));
    el("dot").setAttribute("fill", above() ? "#2b8a3e" : "#e03131");
  }
  el("m").addEventListener("input", update);
  el("a").addEventListener("input", update);
  el("trig").addEventListener("click", function(){
    var box = el("msg");
    if(above()){
      box.style.background = "#d3f9d8";
      box.innerHTML = "✅ <b>Trigger succeeds.</b> The user is motivated enough and it is easy enough, so they act.";
    } else if(+el("a").value < 50){
      box.style.background = "#ffe3e3";
      box.innerHTML = "❌ <b>Trigger fails.</b> Below the line: the behaviour is too hard. Make it easier!";
    } else {
      box.style.background = "#ffe3e3";
      box.innerHTML = "❌ <b>Trigger fails.</b> Below the line: motivation is too low. Give a reason to care!";
    }
  });
  update();
</script>`;

CONTENT.fivefactors = `
  ${explain(`<p>To get a user to act, a design must win <strong>five small battles in a row</strong>. Lose any one and the user drops out — like water draining through a funnel.</p>`)}

  <h3>5 factors for users to take action</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>1️⃣ Cue</h4><p style="font-size:14.5px;"><strong>Do they notice?</strong> Is the prompt visible at all?</p></div>
    <div class="flow-card"><h4>2️⃣ Reaction</h4><p style="font-size:14.5px;"><strong>Do they react?</strong> Does it spark a feeling or interest?</p></div>
    <div class="flow-card"><h4>3️⃣ Evaluation</h4><p style="font-size:14.5px;"><strong>Is it worth it?</strong> Benefit versus effort and cost.</p></div>
    <div class="flow-card"><h4>4️⃣ Ability</h4><p style="font-size:14.5px;"><strong>Can they do it?</strong> Is the task simple enough?</p></div>
    <div class="flow-card"><h4>5️⃣ Timing</h4><p style="font-size:14.5px;"><strong>Will they do it now?</strong> Or does it get put off?</p></div>
  </div>

  <div class="imgcard">
    <svg viewBox="0 0 400 190" role="img" aria-label="A funnel with five levels: Cue, Reaction, Evaluation, Ability, Timing, narrowing down to action">
      <polygon points="20,10 380,10 350,45 50,45" fill="var(--rail)"/><text x="200" y="33" text-anchor="middle" font-size="14" fill="#fff" font-weight="700">Cue — do they notice?</text>
      <polygon points="50,49 350,49 320,84 80,84" fill="var(--rail)" opacity=".88"/><text x="200" y="72" text-anchor="middle" font-size="14" fill="#fff" font-weight="700">Reaction — do they react?</text>
      <polygon points="80,88 320,88 290,123 110,123" fill="var(--rail)" opacity=".76"/><text x="200" y="111" text-anchor="middle" font-size="14" fill="#fff" font-weight="700">Evaluation — worth it?</text>
      <polygon points="110,127 290,127 265,162 135,162" fill="var(--spark)" opacity=".9"/><text x="200" y="150" text-anchor="middle" font-size="14" fill="#fff" font-weight="700">Ability — can they?</text>
      <polygon points="135,166 265,166 245,186 155,186" fill="var(--spark)"/><text x="200" y="181" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">Timing — now?</text>
    </svg>
    <p class="imgcaption">Each level filters people out. Only those who pass all five take the action.</p>
  </div>

  <h3 style="margin-top:20px;">To design good behaviour</h3>
  <div class="chiprow">
    <span class="chip">🎯 <strong>Match</strong> our own goal with the user's goal</span>
    <span class="chip">🧩 Design keeping the <strong>different factors</strong> in mind</span>
    <span class="chip">📘 Follow <strong>UI and UX best practices</strong></span>
  </div>

  <h3 style="margin-top:20px;">Behaviour = A → B → C</h3>
  <p>Behaviour is often described in three steps: the <strong>Antecedent</strong> (what comes before — the cue), the <strong>Behaviour</strong> (what the person does), and the <strong>Consequence</strong> (what follows — a reward or a cost). People repeat behaviour that has pleasant consequences.</p>

  ${mistake(`<p>Designing only for <em>your</em> goal ("get them to sign up!"). A user who sees no benefit for themselves will not pass the Evaluation step — however shiny the button. Good behaviour design lines up your goal with a goal the user already has.</p>`)}

  ${remember(["5 factors: Cue → Reaction → Evaluation → Ability → Timing","Questions: Do they notice? React? Is it worth it? Can they? Will they do it now?","Good behaviour design: match goals, consider the factors, follow UI and UX best practice","Behaviour: Antecedent → Behaviour → Consequence (A-B-C)"])}
`;

CONTENT.behaviourmodels = `
  ${explain(`<p>Psychologists have built several <strong>models of behaviour change</strong> — maps of how and why people change what they do. Designers borrow them to understand their users. Three are worth knowing by name.</p>`)}

  <h3>1. Ajzen's Theory of Planned Behaviour</h3>
  <p>Behaviour follows <strong>intent</strong> — and intent is built from three things, each answering a question the user quietly asks:</p>
  ${refTable(["Influence","The question in the user's mind","Made of"],[
    ["Attitudes","<em>What do I think will happen if I do it?</em>","Behavioural beliefs × outcome evaluations"],
    ["Subjective norms","<em>What do others think I should do?</em>","Normative beliefs × motivation to comply"],
    ["Perceived behavioural control","<em>Can I actually do this?</em>","Control beliefs × influence of control beliefs"]
  ])}
  <p>All three feed <strong>Intent</strong>, and intent leads to <strong>Behaviour</strong>.</p>

  <h3 style="margin-top:20px;">2. Transtheoretical Model (Prochaska &amp; Velicer)</h3>
  <p>Also called the <strong>Stages of Change</strong> model. It says people move through a series of stages in a <strong>circular, not straight-line</strong>, path — they can slip backwards and try again.</p>
  <div class="imgcard">
    <svg viewBox="0 0 420 170" role="img" aria-label="Six stages of change arranged as a loop">
      ${["Precontemplation|not ready","Contemplation|getting ready","Preparation|ready, with a plan","Action|moving forward","Maintenance|preventing drift","Termination|when appropriate"].map((s,i)=>{const [t,d]=s.split("|"); const x=10+(i%3)*135, y=i<3?18:96; return `<rect x="${x}" y="${y}" width="125" height="56" rx="10" fill="${i<3?'var(--rail)':'var(--spark)'}"/><text x="${x+62}" y="${y+24}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">${i+1}. ${t}</text><text x="${x+62}" y="${y+42}" text-anchor="middle" font-size="11" fill="#fff">(${d})</text>`}).join("")}
      <text x="210" y="88" text-anchor="middle" font-size="11" fill="var(--ink-soft)">→ → → then round again if needed ↺</text>
    </svg>
    <p class="imgcaption">Precontemplation → Contemplation → Preparation → Action → Maintenance → Termination.</p>
  </div>

  <h3 style="margin-top:20px;">3. Others to recognise</h3>
  <div class="chiprow">
    <span class="chip"><strong>Social Cognitive Theory / Self-Efficacy</strong> — Bandura</span>
    <span class="chip"><strong>Heuristic-Systematic Model (HSM)</strong> — Chaiken, Liberman and Eagly</span>
    <span class="chip"><strong>Elaboration Likelihood Model (ELM)</strong> — Petty and Cacioppo</span>
  </div>

  <h3 style="margin-top:20px;">How does the Fogg model differ?</h3>
  <p>The Fogg model focuses on <strong>behavioural change only</strong>, whereas the others focus on <strong>information processing or attitude change</strong>. That's what makes it so practical for UX: it asks "what can we adjust right now so the action happens?"</p>

  ${analogy(`<p>Think of learning to swim. Stage by stage: you aren't thinking about it (precontemplation), you start considering lessons (contemplation), you buy a costume and book a class (preparation), you practise (action), you keep going weekly (maintenance). If you stop for a month and start again, that's the circle in action — not a failure.</p>`)}

  ${remember(["Planned Behaviour: attitudes + subjective norms + perceived control → intent → behaviour","Transtheoretical (Stages of Change): precontemplation → contemplation → preparation → action → maintenance → termination; circular, not linear","Others: Bandura's Self-Efficacy, HSM, ELM","Fogg = behaviour change only; others = information processing or attitude change"])}
`;

CONTENT.behaviourproduct = `
  ${explain(`<p>How do all these ideas turn into a real product? Follow the user's journey, and for each step ask "what would help?" — the answers fall into four groups.</p>`)}

  <div class="tabbar" id="behTabs">
    <button class="tabbtn active" data-tab="bh1">1️⃣ Get attention</button>
    <button class="tabbtn" data-tab="bh2">2️⃣ Make it clear</button>
    <button class="tabbtn" data-tab="bh3">3️⃣ Guide the steps</button>
    <button class="tabbtn" data-tab="bh4">4️⃣ Reward &amp; learn</button>
  </div>

  <div class="tabpanel active" data-tab="bh1"><div class="card">
    <h3 style="margin-top:0;">Grab user attention</h3>
    <ul>
      <li>UI design that <strong>stands out</strong></li>
      <li>Show more <strong>personalised</strong> content</li>
      <li>Use <strong>warm and inviting</strong> language</li>
      <li><strong>Notify</strong> users of activity</li>
    </ul>
    <p style="font-size:14.5px;">This is the <em>Cue</em> and <em>Reaction</em> of the five factors.</p>
  </div></div>

  <div class="tabpanel" data-tab="bh2"><div class="card">
    <h3 style="margin-top:0;">Provide clear and simple content</h3>
    <ul>
      <li>Offer <strong>recommendations</strong></li>
      <li>Describe the <strong>benefits</strong></li>
      <li>Send <strong>messages encouraging</strong> users to take action</li>
    </ul>
    <p style="font-size:14.5px;">This answers <em>Is it worth it?</em> — the Evaluation step.</p>
  </div></div>

  <div class="tabpanel" data-tab="bh3"><div class="card">
    <h3 style="margin-top:0;">Guide them about the next steps</h3>
    <ul>
      <li><strong>Break down</strong> actions into small, achievable steps</li>
      <li>Help them create <strong>plans</strong></li>
      <li>Ask them to take the <strong>right action at the right time</strong></li>
    </ul>
    <p style="font-size:14.5px;">This raises <em>Ability</em> (smaller steps feel easier) and fixes <em>Timing</em>.</p>
  </div></div>

  <div class="tabpanel" data-tab="bh4"><div class="card">
    <h3 style="margin-top:0;">Reward and learn</h3>
    <ul>
      <li><strong>Reward</strong> them with positive feedback</li>
      <li>Get <strong>feedback from them</strong> for improvement</li>
    </ul>
    <p style="font-size:14.5px;">Pleasant consequences make the behaviour likely to repeat — the "C" in A-B-C — and user feedback feeds the next design round.</p>
  </div></div>

  <h3 style="margin-top:22px;">Putting it together: signing up for a fitness app</h3>
  ${refTable(["Step","Design move","Factor helped"],[
    ["A friendly notification: 'Ready for a 5-minute walk today?'","Warm language + personalised cue","Cue, Reaction"],
    ["A card showing 'Walk 5 minutes, feel more energetic'","Describe the benefit","Evaluation"],
    ["One big 'Start' button; the walk is split into tiny goals","Break actions into small steps","Ability"],
    ["Reminder arrives at the usual walking time","Right action at the right time","Timing"],
    ["A cheerful badge and a 'How was it?' question","Positive feedback + feedback for improvement","Consequence, learning"]
  ])}

  ${remember(["Grab attention: stand-out UI, personalised content, warm language, notifications","Be clear: simple content, recommendations, benefits, encouraging messages","Guide: next steps, small achievable steps, help with plans, right action at the right time","Reward with positive feedback; ask for feedback to improve"])}
`;


/* ================= UNIT 3: WIREFRAMING, PROTOTYPING & FRONTEND ================= */

CONTENT.wireframebasics = `
  ${explain(`
    <p>A <strong>wireframe</strong> is a visual representation of an interface — used to communicate a screen's <strong>structure, content, information hierarchy, functionality,</strong> and <strong>behaviour</strong> before any real design work begins.</p>
  `)}

  <h3>The 5 things a wireframe communicates</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>🧱 Structure</h4><p style="font-size:14px;">Think and sketch the pieces of the interface — how they're put together and where they'll be placed.</p></div>
    <div class="flow-card"><h4>📄 Content</h4><p style="font-size:14px;">A list of the components, elements, or text that need to be included.</p></div>
    <div class="flow-card"><h4>🗂️ Information Hierarchy</h4><p style="font-size:14px;">Organizing content and deciding how to display it in the best way.</p></div>
    <div class="flow-card"><h4>⚙️ Functionality</h4><p style="font-size:14px;">How elements connect to each other, and how a user follows the flow to complete a task.</p></div>
    <div class="flow-card"><h4>🎭 Behaviour</h4><p style="font-size:14px;">How user interaction happens — how the UI behaves with the user, and how the user behaves with the UI.</p></div>
  </div>

  <h3 style="margin-top:20px;">Why wireframe at all? The benefits</h3>
  <div class="chiprow">
    <span class="chip">Creates structure for each screen with the components it needs</span>
    <span class="chip">Helps create or specify different functions</span>
    <span class="chip">Communicates the idea clearly to different departments</span>
    <span class="chip">Lets you explore different ideas before committing to advanced design software</span>
    <span class="chip">Enables early-stage testing and acts as the basis for prototyping</span>
  </div>

  <h3 style="margin-top:20px;">3 things to keep in mind</h3>
  <p>A "real" wireframe deliberately avoids:</p>
  <div class="chiprow">
    <span class="chip">🎨 No colors</span>
    <span class="chip">🖼️ No images</span>
    <span class="chip">🔤 No special fonts</span>
  </div>
  <p style="margin-top:10px;">The point is to keep everyone focused purely on layout and flow — not visual polish, which comes much later.</p>

  <h3 style="margin-top:20px;">Other good practices</h3>
  <div class="chiprow">
    <span class="chip">Each page should have a reference number</span>
    <span class="chip">Each page should have a specific name or page title</span>
    <span class="chip">Notes/explanations should sit alongside the wireframe sketch, not inside it</span>
    <span class="chip">Give each component a unique reference number</span>
  </div>

  ${analogy(`<p>A wireframe is like an architect's blueprint for a house — it shows exactly where each room, door, and window goes, but has no paint, furniture, or decoration yet. That comes later, once everyone agrees the layout actually works.</p>`)}

  ${remember(["A wireframe communicates: Structure, Content, Information Hierarchy, Functionality, Behaviour","Never include colors, images, or special fonts in a true wireframe","Give every page a reference number, title, and keep notes alongside (not inside) the sketch"])}
`;

CONTENT.wireframetypes = `
  ${explain(`<p>Wireframes come in three levels of detail, called <strong>fidelity</strong> — how close the sketch is to looking like the real, finished product.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 400 100">
      <rect x="10" y="20" width="110" height="50" fill="none" stroke="var(--ink-soft)" stroke-width="2"/>
      <line x1="20" y1="35" x2="100" y2="35" stroke="var(--ink-soft)" stroke-width="2"/>
      <line x1="20" y1="45" x2="90" y2="45" stroke="var(--ink-soft)" stroke-width="2"/>
      <rect x="20" y="52" width="30" height="12" fill="none" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <text x="65" y="90" text-anchor="middle" font-size="10" fill="var(--ink-soft)" font-weight="700">Low-fidelity</text>

      <rect x="145" y="20" width="110" height="50" fill="none" stroke="var(--rail)" stroke-width="2"/>
      <line x1="155" y1="35" x2="235" y2="35" stroke="var(--rail)" stroke-width="2"/>
      <line x1="155" y1="45" x2="225" y2="45" stroke="var(--rail)" stroke-width="2"/>
      <rect x="155" y="52" width="30" height="12" fill="var(--rail)" opacity="0.3"/>
      <text x="200" y="90" text-anchor="middle" font-size="10" fill="var(--rail)" font-weight="700">Medium-fidelity</text>

      <rect x="280" y="20" width="110" height="50" fill="none" stroke="var(--spark)" stroke-width="2"/>
      <line x1="290" y1="35" x2="370" y2="35" stroke="var(--spark)" stroke-width="3"/>
      <line x1="290" y1="45" x2="360" y2="45" stroke="var(--spark)" stroke-width="2"/>
      <rect x="290" y="52" width="30" height="12" fill="var(--spark)"/>
      <text x="335" y="90" text-anchor="middle" font-size="10" fill="var(--spark)" font-weight="700">High-fidelity</text>
    </svg>
    <p class="imgcaption">As fidelity increases, so does realism — but also the time and cost needed to produce it.</p>
  </div>

  <h3>✏️ Low-fidelity</h3>
  <p>Often a <strong>paper wireframe</strong> — paper as the white background, pencil as the black foreground.</p>
  <div class="flow-grid">
    <div class="flow-card"><h4>✔ Pros</h4><p style="font-size:14px;">Easy and fast to create · Easy to change · Easy to get feedback · Stakeholders get used to the design process · Easy for every department to follow where the product is heading.</p></div>
    <div class="flow-card"><h4>✘ Cons</h4><p style="font-size:14px;">Very simple design · Sketches can look "ugly."</p></div>
  </div>

  <h3 style="margin-top:20px;">🖥️ Medium-fidelity</h3>
  <p>Created using design tools, typically with a <strong>monochrome palette</strong> — can be done with ready-made tools or manually.</p>
  <div class="flow-grid">
    <div class="flow-card"><h4>✔ Pros</h4><p style="font-size:14px;">Shows more detail of UI components · Much easier to understand · Better UI/design layout · Easier to control alignment and hierarchy.</p></div>
    <div class="flow-card"><h4>✘ Cons</h4><p style="font-size:14px;">Takes more time than low-fidelity · You typically need a low-fidelity version first, before building medium-fidelity.</p></div>
  </div>

  <h3 style="margin-top:20px;">🎯 High-fidelity</h3>
  <p>A far more realistic representation, with real typefaces, real images, and proper text — usually built at an advanced stage of the design process. Considered the "most balanced" wireframe type, and represents a <strong>static</strong> version of the product.</p>
  <div class="flow-grid">
    <div class="flow-card"><h4>✔ Pros</h4><p style="font-size:14px;">Good-looking UI compared to other types · Can impress clients · Much easier to create with modern tools.</p></div>
    <div class="flow-card"><h4>✘ Cons</h4><p style="font-size:14px;">Requires a lot of time · Costly to produce · Clients may confuse it with the final design · May need to start over if the client is unhappy.</p></div>
  </div>

  ${mistake(`<p>UI Design, Prototype, and High-fidelity Wireframe are NOT the same thing! A high-fidelity wireframe is still <em>static</em> (not clickable/interactive) — that's what separates it from a true prototype.</p>`)}

  <h3 style="margin-top:20px;">Wireframing tools</h3>
  <div class="chiprow">
    <span class="chip">Balsamiq Mockups (premium)</span>
    <span class="chip">Wireframe.cc (online only)</span>
    <span class="chip">Moqups</span>
    <span class="chip">InVision</span>
    <span class="chip">UXPin</span>
    <span class="chip">Axure</span>
    <span class="chip">Fluid UI</span>
    <span class="chip">Pidoco</span>
    <span class="chip">Penultimate (Evernote)</span>
  </div>

  ${remember(["Low-fidelity = quick, rough, paper sketches — great for fast feedback","Medium-fidelity = digital, monochrome, more structured","High-fidelity = realistic, detailed, but time-consuming — still STATIC, unlike a prototype"])}
`;

CONTENT.prototypebasics = `
  ${explain(`
    <p><strong>Prototyping</strong> explains and gives an idea of how our final product will actually work, and how it will behave when someone interacts with it. Don't confuse a prototype with the final product — it's a stand-in that FEELS real without actually being fully built.</p>
  `)}

  <h3>Why are prototypes so important?</h3>
  <div class="chiprow">
    <span class="chip">Easy to communicate and collaborate with other teams</span>
    <span class="chip">Reduces cost of money and time</span>
    <span class="chip">Makes presenting to clients easier, and increases the chance of "selling" the idea</span>
    <span class="chip">Makes it easier to set design priorities</span>
  </div>

  <h3 style="margin-top:20px;">Three types of prototypes</h3>

  <div class="flow-grid">
    <div class="flow-card">
      <h4>📝 Low-fidelity (Paper)</h4>
      <p style="font-size:14px;">Created using paper, stencils, and cut-outs.</p>
    </div>
    <div class="flow-card">
      <h4>💻 Medium-fidelity (Digital)</h4>
      <p style="font-size:14px;">Built using digital design tools.</p>
    </div>
    <div class="flow-card">
      <h4>👨‍💻 High-fidelity (Coding)</h4>
      <p style="font-size:14px;">Built with real code — an advanced approach recommended for designers who also have coding skills.</p>
    </div>
  </div>

  <h3 style="margin-top:20px;">Paper Prototyping</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>✔ Pros</h4><p style="font-size:14px;">Easy and fast to create · Costs almost nothing · Fun, and lets different groups interact with it together.</p></div>
    <div class="flow-card"><h4>✘ Cons</h4><p style="font-size:14px;">Unrealistic · Can produce false feedback since people may not fully understand it · Almost zero real interactivity.</p></div>
  </div>

  <h3 style="margin-top:20px;">Digital Prototyping</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>✔ Pros</h4><p style="font-size:14px;">Realistic design and interactions · Flexible · Fast to iterate.</p></div>
    <div class="flow-card"><h4>✘ Cons</h4><p style="font-size:14px;">Takes time to learn the tools · Still needs a transition to real code eventually.</p></div>
  </div>

  <h3 style="margin-top:20px;">Coding Prototypes</h3>
  <p>These give an almost realistic product with direct interaction — but come with real technical cost.</p>
  <div class="flow-grid">
    <div class="flow-card"><h4>✔ Pros</h4><p style="font-size:14px;">Feels like the final product is already built · Huge development time saver later · Low software cost · Can be tested across different devices.</p></div>
    <div class="flow-card"><h4>✘ Cons</h4><p style="font-size:14px;">One person often has to do two jobs — designing AND coding · Quality depends heavily on the designer's own coding skill.</p></div>
  </div>

  ${remember(["A prototype shows how the product will WORK and BEHAVE — never confuse it with the final product","3 types: Paper (fast, cheap, low realism), Digital (flexible, realistic), Coding (most realistic, needs coding skill)","Prototypes reduce cost, speed up communication, and make client buy-in easier"])}
`;

CONTENT.prototypeprocess = `
  ${explain(`<p>Building a prototype isn't a single step — it follows a clear 5-stage process.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 420 100">
      <g font-size="9" fill="#fff" font-weight="700" text-anchor="middle">
        <rect x="10" y="30" width="70" height="30" rx="6" fill="var(--rail)"/><text x="45" y="49">Planning</text>
        <rect x="90" y="30" width="70" height="30" rx="6" fill="var(--spark)"/><text x="125" y="44">Drawing &amp;</text><text x="125" y="55">Sketching</text>
        <rect x="170" y="30" width="70" height="30" rx="6" fill="var(--volt)"/><text x="205" y="44" fill="var(--ink)">Mockup &amp;</text><text x="205" y="55" fill="var(--ink)">Design</text>
        <rect x="250" y="30" width="80" height="30" rx="6" fill="var(--rail)"/><text x="290" y="44">Animation &amp;</text><text x="290" y="55">Interaction</text>
        <rect x="340" y="30" width="70" height="30" rx="6" fill="var(--spark)"/><text x="375" y="44">Exporting</text><text x="375" y="55">&amp; Testing</text>
      </g>
      <g stroke="var(--ink-soft)" stroke-width="1.5" marker-end="url(#pparrow)">
        <line x1="80" y1="45" x2="88" y2="45"/>
        <line x1="160" y1="45" x2="168" y2="45"/>
        <line x1="240" y1="45" x2="248" y2="45"/>
        <line x1="330" y1="45" x2="338" y2="45"/>
      </g>
      <defs><marker id="pparrow" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 z" fill="var(--ink-soft)"/></marker></defs>
    </svg>
    <p class="imgcaption">Each stage builds on the last — you can't skip straight to animation without first planning and sketching what you're animating.</p>
  </div>

  <div class="chiprow">
    <span class="chip">1️⃣ Planning — decide what you're building and why</span>
    <span class="chip">2️⃣ Drawing &amp; Sketching — rough out the screens and flow</span>
    <span class="chip">3️⃣ Mockup &amp; Design — build the visual layout</span>
    <span class="chip">4️⃣ Animation &amp; Interaction — add the clickable, moving parts</span>
    <span class="chip">5️⃣ Exporting &amp; Testing — share it and get real feedback</span>
  </div>

  <h3 style="margin-top:20px;">Prototyping Tools</h3>
  <div class="chiprow">
    <span class="chip">MarvelApp</span>
    <span class="chip">Origami Studio</span>
    <span class="chip">Justinmind</span>
    <span class="chip">Flinto</span>
    <span class="chip">Principle</span>
  </div>

  ${remember(["5-stage process: Planning → Drawing/Sketching → Mockup/Design → Animation/Interaction → Exporting/Testing","Each stage depends on the one before it — you can't skip ahead"])}
`;

CONTENT.uidesignbasics = `
  ${explain(`<p><strong>User Interface Design</strong> is focused on creating a better look for the product, and presenting it more clearly and beautifully to users.</p>`)}

  <p style="text-align:center; font-style:italic; font-size:18px; color:var(--ink-soft); margin:26px 10px; border-left:4px solid var(--spark); padding-left:16px; text-align:left;">"UI design is like telling a joke. If you need to explain the joke, then it is not a good one."</p>

  <h3>Things to keep in mind</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>🎨 Visual Design Elements</h4>
      <p style="font-size:14px;">Lines, Shapes, Colors, Typography, Textures</p>
    </div>
    <div class="flow-card">
      <h4>📐 Visual Design Principles</h4>
      <p style="font-size:14px;">Alignment, Hierarchy, Balance, Repetition</p>
    </div>
  </div>

  <h3 style="margin-top:20px;">Before jumping into UI</h3>
  <p>Good UI design never starts from a blank canvas — it builds on everything that came before it:</p>
  <div class="chiprow">
    <span class="chip">Research</span>
    <span class="chip">Sketches</span>
    <span class="chip">Wireframes</span>
    <span class="chip">Requirements</span>
    <span class="chip">Screen Flows</span>
    <span class="chip">Prototypes</span>
  </div>

  <h3 style="margin-top:20px;">UI Design Tools</h3>
  <p>Many tools exist — Illustrator, Fireworks, InVision Studio, Framer, Figma — with Photoshop and Sketch being long-time leaders. But here's the important part:</p>
  ${mistake(`<p>Don't focus on mastering the TOOL — focus on mastering the SKILL of designing user interfaces. The tool is just how you express the skill; it isn't the skill itself.</p>`)}

  ${remember(["UI Design = making the product look better and communicate more clearly","Visual elements: Lines, Shapes, Colors, Typography, Textures","Visual principles: Alignment, Hierarchy, Balance, Repetition","UI work builds on research, sketches, wireframes, requirements, screen flows, and prototypes — never starts from nothing"])}
`;

CONTENT.designsystem = `
  ${explain(`
    <p>A <strong>Design System</strong> contains the UI components, rules, constraints, and principles that guide a product's interface. It's more than just a visual style guide — it's a whole shared language for how the product looks and behaves.</p>
  `)}

  <div class="imgcard">
    <svg viewBox="0 0 420 130">
      <g font-size="9" fill="#fff" font-weight="700" text-anchor="middle">
        <rect x="10" y="15" width="120" height="26" rx="6" fill="var(--rail)"/><text x="70" y="32">Files &amp; Folders</text>
        <rect x="145" y="15" width="120" height="26" rx="6" fill="var(--rail)"/><text x="205" y="32">Naming Rules</text>
        <rect x="280" y="15" width="130" height="26" rx="6" fill="var(--rail)"/><text x="345" y="32">Colors &amp; Palettes</text>

        <rect x="10" y="55" width="120" height="26" rx="6" fill="var(--spark)"/><text x="70" y="72">Fonts/Typefaces</text>
        <rect x="145" y="55" width="120" height="26" rx="6" fill="var(--spark)"/><text x="205" y="72">Grid System</text>
        <rect x="280" y="55" width="130" height="26" rx="6" fill="var(--spark)"/><text x="345" y="72">UI Components</text>

        <rect x="145" y="95" width="130" height="26" rx="6" fill="var(--volt)"/><text x="210" y="112" fill="var(--ink)">Templates (full UI)</text>
      </g>
    </svg>
    <p class="imgcaption">Seven building blocks come together to form a complete Design System — from the smallest naming convention up to full page templates.</p>
  </div>

  <h3>The 7 building blocks</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>📁 File &amp; Folder Structure</h4><p style="font-size:14px;">Organizes files and assets, and helps everyone find specific components or templates quickly.</p></div>
    <div class="flow-card"><h4>🏷️ Naming Rules</h4><p style="font-size:14px;">A naming convention the whole team picks together — and sticks to consistently.</p></div>
    <div class="flow-card"><h4>🎨 Colors &amp; Palettes</h4><p style="font-size:14px;">A base palette including Primary (brand) colors, Secondary colors, Success/Warning/Danger colors, and shades of gray.</p></div>
    <div class="flow-card"><h4>🔤 Fonts/Typefaces</h4><p style="font-size:14px;">Readability and scalability matter most. Good resources: Google Fonts, FontPair, DaFont.</p></div>
    <div class="flow-card"><h4>📏 Grid System</h4><p style="font-size:14px;">Keeps alignment consistent across the whole UI — using either fixed-width or full-width grids.</p></div>
    <div class="flow-card"><h4>🧩 UI Components</h4><p style="font-size:14px;">Buttons, alerts, tabs, labels, forms — including their behaviours: hover, focus, disabled states, and different sizes.</p></div>
  </div>

  ${remember(["A Design System = UI components + rules + constraints + principles, not just a style guide","7 blocks: file/folder structure, naming rules, colors/palettes, fonts, grid, UI components, templates","Color palettes should include Primary, Secondary, Success, Warning, Danger, and gray shades"])}
`;

CONTENT.handover = `
  ${explain(`
    <p>Developers need to understand exactly how the designer imagines the UI working — and that requires a proper <strong>handover process</strong>, not just dropping a finished image on their desk.</p>
  `)}

  <h3>3 Stages of Product Development</h3>
  <div class="diagram">
    <div class="node clickable" data-pop="Where wireframes, prototypes, and the visual UI are created and refined.">
      <span class="emoji">🎨</span>Design Stage
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Where HTML, CSS, and JavaScript turn the design into an actual interface running in a browser.">
      <span class="emoji">💻</span>Frontend Stage
      <div class="node-pop"></div>
    </div>
    <div class="node clickable" data-pop="Where servers, databases, and business logic power what the frontend displays.">
      <span class="emoji">🗄️</span>Backend Stage
      <div class="node-pop"></div>
    </div>
  </div>

  <h3 style="margin-top:20px;">For a smooth handover</h3>
  <div class="chiprow">
    <span class="chip">Start communicating with the frontend team from the EARLY stage of a design</span>
    <span class="chip">Explain to the developer how you expect the design to work</span>
    <span class="chip">Share the mock-up/UI you designed</span>
    <span class="chip">Share the prototype</span>
    <span class="chip">Share the design specification, assets, and the design system</span>
    <span class="chip">Keep a status checklist</span>
  </div>

  <h3 style="margin-top:20px;">Handover tools</h3>
  <p>Tools like <strong>Zeplin</strong> and <strong>Sympli</strong> mean developers don't have to guess at assets, fonts, or CSS colors — everything they need is accessible directly inside the tool.</p>

  ${remember(["3 stages: Design → Frontend → Backend","Good handover = early communication + sharing mock-ups, prototypes, specs, and the design system","Handover tools like Zeplin/Sympli remove guesswork for developers"])}
`;

CONTENT.frontendbasics = `
  ${explain(`
    <p><strong>Frontend development</strong> is the process of turning a design into real code, and connecting that UI to backend services. It rests on three main skills.</p>
  `)}

  <p style="text-align:center; font-weight:800; font-size:19px; color:var(--rail); margin:24px 0;">HTML + CSS + JS = Structure + Presentation + Behaviour</p>

  <div class="flow-grid">
    <div class="flow-card"><h4>🏗️ HTML</h4><p style="font-size:14px;">The Structure — what content exists, and how it's organized.</p></div>
    <div class="flow-card"><h4>🎨 CSS</h4><p style="font-size:14px;">The Presentation — how everything looks.</p></div>
    <div class="flow-card"><h4>⚡ JS</h4><p style="font-size:14px;">The Behaviour — how the page responds and interacts.</p></div>
  </div>

  ${demoCard("frontendbasics", "Try it: a simple login/signup layout using just HTML", 420)}

  <p style="margin-top:14px;">On its own, HTML gives you plain black-on-white content. Add CSS, and suddenly there's real visual design — colors, spacing, typography, positioning. This progression (IN goes code, OUT comes a website) is exactly what a frontend developer does every day.</p>

  ${remember(["Frontend development = HTML (structure) + CSS (presentation) + JS (behaviour)","HTML alone gives you plain content — CSS is what makes it look like a real website","A frontend developer's job: turn design into code, then connect that UI to backend services"])}
`;

DEMOS.frontendbasics = `<html>
<body>
<img src="https://via.placeholder.com/120x40?text=Logo" alt="Logo">
<form>
  Email or Phone: &nbsp;&nbsp;&nbsp;&nbsp; Password: <br>
  <input type="text" name="email">
  <input type="password" name="passname">
  <input type="submit" value="Login">
</form>
<p>Connect and share with the people in your life.</p>
<h3>Create an account</h3>
<p>Sign Up. It's free and always will be.</p>
<form>
  <input type="text" name="firstname" value="First name">
  <input type="text" name="surname" value="Surname"><br><br>
  <input type="text" name="emailno" value="Mobile number or email address"><br><br>
  <input type="password" name="passnew"><br><br>
  Birthday<br><input type="date" name="bday"><br><br>
  <input type="radio" name="gender" value="male" checked> Male
  <input type="radio" name="gender" value="female"> Female<br><br>
  <input type="submit" value="Create an account">
</form>
</body>
</html>`;

CONTENT.cssatscale = `
  ${explain(`<p>Writing CSS for one small page is easy — but on large, rapidly-changing projects, plain CSS gets hard to manage fast. Every style defined globally applies to EVERY page that includes the file, which can spiral out of control. This is why several tools and approaches exist to bring order to CSS at scale.</p>`)}

  <h3>CSS Preprocessors</h3>
  <p>A preprocessor lets you write CSS using extra, more powerful syntax, then compiles it down into plain, valid CSS. Popular ones: <strong>Sass, Less, Stylus.</strong></p>
  <div class="imgcard">
    <svg viewBox="0 0 400 110">
      <text x="10" y="15" font-size="10" font-weight="700" fill="var(--rail)">Sass/SCSS (what you write)</text>
      <rect x="10" y="20" width="180" height="80" fill="var(--bg)" stroke="var(--line)" stroke-width="1"/>
      <text x="18" y="35" font-family="monospace" font-size="8" fill="var(--ink)">$primary: #3498db;</text>
      <text x="18" y="48" font-family="monospace" font-size="8" fill="var(--ink)">body {</text>
      <text x="18" y="60" font-family="monospace" font-size="8" fill="var(--ink)">  background: $primary;</text>
      <text x="18" y="72" font-family="monospace" font-size="8" fill="var(--ink)">  h1 { color: white; }</text>
      <text x="18" y="84" font-family="monospace" font-size="8" fill="var(--ink)">}</text>

      <text x="210" y="55" font-size="16" fill="var(--ink-soft)">➜</text>

      <text x="230" y="15" font-size="10" font-weight="700" fill="var(--spark)">Compiled CSS (what browsers get)</text>
      <rect x="230" y="20" width="165" height="80" fill="var(--bg)" stroke="var(--line)" stroke-width="1"/>
      <text x="238" y="35" font-family="monospace" font-size="8" fill="var(--ink)">body {</text>
      <text x="238" y="48" font-family="monospace" font-size="8" fill="var(--ink)"> background: #3498db;</text>
      <text x="238" y="60" font-family="monospace" font-size="8" fill="var(--ink)">}</text>
      <text x="238" y="72" font-family="monospace" font-size="8" fill="var(--ink)">body h1 {</text>
      <text x="238" y="84" font-family="monospace" font-size="8" fill="var(--ink)"> color: white; }</text>
    </svg>
    <p class="imgcaption">A preprocessor lets you use variables (like $primary) and nesting (h1 inside body) that plain CSS can't do on its own — then compiles it into ordinary CSS every browser understands.</p>
  </div>

  <h3 style="margin-top:20px;">CSS Postprocessors</h3>
  <p>A postprocessor takes ALREADY-valid CSS and improves it further — automatically adding vendor prefixes (<code>-webkit-</code>, <code>-moz-</code>), converting units, and providing fallbacks for older browsers.</p>

  <h3 style="margin-top:20px;">CSS Methodologies</h3>
  <p>These are naming/organization conventions that keep large CSS codebases sane:</p>
  <div class="tabbar" id="cssmethodTabs">
    <button class="tabbtn active" data-tab="oocss">OOCSS</button>
    <button class="tabbtn" data-tab="smacss">SMACSS</button>
    <button class="tabbtn" data-tab="bem">BEM</button>
    <button class="tabbtn" data-tab="acss">Atomic CSS</button>
  </div>
  <div class="tabpanel active" data-tab="oocss">
    <div class="card">
      <p><strong>Object-Oriented CSS</strong> separates structure from skin. E.g. <code>.button</code> gives the basic structure, <code>.grey-btn</code> applies the color/visual style — combined as <code>&lt;button class="button grey-btn"&gt;</code>.</p>
    </div>
  </div>
  <div class="tabpanel" data-tab="smacss">
    <div class="card">
      <p><strong>Scalable and Modular Architecture for CSS</strong> splits every rule into 5 categories: <strong>Base</strong> (default element styles, e.g. <code>h1 { font-size: 32px; }</code>), <strong>Layout</strong> (structural containers, prefixed <code>layout-</code> or <code>l-</code>), <strong>Modules</strong> (reusable components), <strong>State</strong> (e.g. <code>.is-hidden</code>), and <strong>Skin</strong> (visual theme variations).</p>
    </div>
  </div>
  <div class="tabpanel" data-tab="bem">
    <div class="card">
      <p><strong>Block, Element, Modifier</strong> — a Block is an independent UI component, an Element is a piece of that block, and a Modifier changes its default look. Naming syntax: <code>.block</code>, <code>.block__element</code>, <code>.block--modifier</code>.</p>
      <p style="margin-top:8px;">Example: <code>&lt;form class="loginform loginform--errors"&gt;</code> with <code>&lt;button class="loginform__btn loginform__btn--inactive"&gt;</code>.</p>
    </div>
  </div>
  <div class="tabpanel" data-tab="acss">
    <div class="card">
      <p><strong>Atomic CSS</strong> (also called Functional CSS) favors tiny, single-purpose classes named after what they visually do. E.g. <code>&lt;div class="Bgc(#0280ae) C(#fff) P(20px)"&gt;</code> where each class sets exactly one property.</p>
    </div>
  </div>

  <h3 style="margin-top:20px;">CSS Frameworks</h3>
  <p>Frameworks bundle pre-built components (tables, buttons, forms, grids, colors, type) so you don't reinvent responsiveness and browser support from scratch: <strong>Bootstrap, Foundation, Bulma, UIkit, Semantic UI, Materialize, Skeleton.</strong></p>

  ${remember(["Preprocessors (Sass/Less/Stylus) add variables/nesting, then compile to real CSS","Postprocessors improve already-valid CSS (vendor prefixes, unit conversion, fallbacks)","Methodologies keep large CSS sane: OOCSS (structure vs skin), SMACSS (5 categories), BEM (block__element--modifier), Atomic CSS (one class = one property)","Frameworks (Bootstrap etc.) bundle ready-made components to save time"])}
`;

CONTENT.postlaunch = `
  ${explain(`<p>Launching the product isn't the finish line — real UX work continues afterward, using actual usage data to keep improving the experience.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>✉️ Collecting User Feedback</h4>
      <p style="font-size:14px;">Through emails and contact forms (valued for Security, Reachability, Clarification, and Engagement) and through social media.</p>
    </div>
    <div class="flow-card">
      <h4>🧪 UI Testing</h4>
      <p style="font-size:14px;">Discovering how users actually interact with the UI, and where they struggle — using tools like Google Analytics and heatmap tools.</p>
    </div>
    <div class="flow-card">
      <h4>⚖️ A/B Testing</h4>
      <p style="font-size:14px;">Comparing two versions to identify the <strong>Conversion Rate</strong> and find the more preferred UI design.</p>
    </div>
    <div class="flow-card">
      <h4>📹 Session Tracking</h4>
      <p style="font-size:14px;">Recording user UI sessions to compare shorter vs. longer sessions and spot meaningful differences.</p>
    </div>
    <div class="flow-card">
      <h4>🔻 Conversion Funnels</h4>
      <p style="font-size:14px;">Analyzing conversion for specific tasks/goals — why users aren't engaging with certain screens, why some screens convert better, and what stops a user from finishing an action they started.</p>
    </div>
  </div>

  ${analogy(`<p>Think of a shop owner who keeps watching customers even after opening day — noticing which shelves people linger at, which displays get ignored, and where customers turn back before buying. Post-launch UX activities are exactly that kind of ongoing, real-world observation.</p>`)}

  ${remember(["UX work continues after launch — it doesn't stop at release","5 key activities: User Feedback, UI Testing, A/B Testing, Session Tracking, Conversion Funnel Analysis","Conversion funnels help pinpoint exactly where and why users drop off"])}
`;

/* ================= UNIT 4a: WEBSITE & HTML5 ================= */

CONTENT.websitebasics = `
  ${explain(`
    <p>A <strong>website</strong> is made up of <strong>webpages</strong>. A webpage is a single page or document within a website — it could be a home page, an about page, a contact page, a blog page, a gallery page, and many more.</p>
  `)}

  <h3>WWW vs. the Internet</h3>
  <p>These two get mixed up constantly! The <strong>Internet</strong> is the huge global network of connected computers. The <strong>World Wide Web (WWW)</strong> is a collection of websites and webpages that sits on top of the Internet — it's a service that runs using the Internet, not the same thing as the Internet itself.</p>

  ${analogy(`<p>The Internet is like the national highway system — the roads themselves. The Web is like all the shops and buildings you can visit by driving on those roads. The roads (Internet) existed before most of the buildings (websites) did!</p>`)}

  <h3 style="margin-top:20px;">How does a website actually reach you?</h3>
  <p>When you type in a college's website address, your <strong>Web Browser</strong> asks the <strong>Internet</strong> to fetch that <strong>Website</strong> for you. Behind the scenes, this is a conversation between a <strong>Client</strong> (your browser) and a <strong>Server</strong> (a computer somewhere, like a server sitting in a campus server room) that actually stores the website's files and sends back the requested page — for example, its Home Page.</p>

  <h3 style="margin-top:20px;">What's inside a webpage?</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>💻 Client-Side</h4>
      <p style="font-size:14.5px;"><strong>Structure</strong> (HTML), <strong>Presentation</strong> (CSS), and <strong>Behaviour/Interaction</strong> (JavaScript) — everything that runs in your own browser.</p>
    </div>
    <div class="flow-card">
      <h4>🖥️ Server-Side</h4>
      <p style="font-size:14.5px;"><strong>Data Handling</strong> and <strong>Dynamic Content</strong> — logic that runs on the server before a page is even sent to you.</p>
    </div>
  </div>

  ${remember(["Website = made up of webpages","Internet = the global network · WWW = websites/webpages running on top of it","Client (your browser) requests, Server (a remote computer) responds","Client-side = Structure + Presentation + Behaviour · Server-side = Data Handling + Dynamic Content"])}
`;

CONTENT.htmlstructure = `
  ${explain(`
    <p><strong>HTML</strong> (HyperText Markup Language) is the standard markup language for creating web pages — it describes the <strong>structure</strong> of a page. It's often assisted by CSS (for styling) and JavaScript (for behaviour).</p>
    <p>A webpage is built from <strong>HTML elements</strong>. Each element tells the browser how to display a piece of content: <strong>HTML Element = Content + Tag.</strong> Tags label pieces of content — browsers never display the tags themselves, but use them to render the page correctly.</p>
  `)}

  <h3>The 5 golden rules of HTML tags</h3>
  <div class="chiprow">
    <span class="chip">Tag names are always surrounded by angle brackets &lt;...&gt;</span>
    <span class="chip">Most tags come in pairs (an opening and a closing tag)</span>
    <span class="chip">A closing tag always starts with a forward slash &lt;/...&gt;</span>
    <span class="chip">Tags can be embedded inside one another</span>
    <span class="chip">Many tags have optional attributes that modify their behaviour</span>
  </div>

  <h3 style="margin-top:20px;">Every page's skeleton</h3>
  <div class="chiprow">
    <span class="chip">&lt;!DOCTYPE html&gt; — tells the browser "this is a modern HTML5 page"</span>
    <span class="chip">&lt;html&gt; — wraps the entire page</span>
    <span class="chip">&lt;head&gt; — holds behind-the-scenes info (like the title) — nothing here is visible</span>
    <span class="chip">&lt;title&gt; — the text shown on the browser tab</span>
    <span class="chip">&lt;body&gt; — everything the visitor actually sees goes here</span>
    <span class="chip">&lt;!-- comment --&gt; — a note the browser completely ignores</span>
  </div>

  ${demoCard("structure", "Try it: a minimal HTML page", 90)}

  ${mistake(`<p>Forgetting the <code>&lt;!DOCTYPE html&gt;</code> at the very top can make older browsers render your page in unpredictable "quirks mode." Always start every HTML file with it.</p>`)}

  ${remember(["HTML describes structure · Element = Content + Tag","Every page needs: DOCTYPE → html → head (title) → body","Only content inside &lt;body&gt; is visible to the visitor"])}
`;

DEMOS.structure = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>My First Page</title>
  <!-- The head holds page info, not visible content -->
</head>
<body>
  <!-- Everything visible goes inside the body -->
  <p>Hello! This text is inside the body, so it shows up on the page.</p>
</body>
</html>`;

CONTENT.htmlheadings = `
  ${explain(`<p>Two of the most-used tags in HTML are headings and paragraphs.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;h1&gt; to &lt;h6&gt; — headings, from biggest/most important (h1) to smallest (h6)</span>
    <span class="chip">&lt;p&gt; — a paragraph of text (adds default spacing before and after)</span>
    <span class="chip">&lt;br&gt; — a line break (moves to a new line without starting a new paragraph)</span>
    <span class="chip">&lt;hr&gt; — a horizontal line, often used as a section divider</span>
  </div>

  ${demoCard("headings", "Try it: headings, paragraphs, line breaks & a divider", 420)}

  ${mistake(`<p>Don't pick a heading tag just because of its size! Use &lt;h1&gt; for your page's main title, &lt;h2&gt; for major sections, and so on — screen readers rely on this order to help visually impaired users navigate the page.</p>`)}

  ${remember(["h1 = most important heading, h6 = least important","Only use ONE h1 per page — your main title","p = paragraph · br = line break (no new paragraph) · hr = divider line"])}
`;

DEMOS.headings = `<h1>This is Heading 1 — the biggest</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6 — the smallest</h6>

<p>This is a normal paragraph of text. Paragraphs are the standard way to display blocks of readable text on a page.</p>

<p>Here is a line of text.<br>This new line starts right after a line break tag.</p>

<hr>
<p>The horizontal line above this paragraph was made using the &lt;hr&gt; tag — often used to separate sections.</p>`;

CONTENT.htmlformat = `
  ${explain(`<p>HTML gives you several ways to change how text looks or is understood — these are called inline formatting tags.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;b&gt; bold text</span>
    <span class="chip">&lt;i&gt; italic text</span>
    <span class="chip">&lt;u&gt; underline text</span>
    <span class="chip">&lt;big&gt; bigger text · &lt;small&gt; smaller text</span>
    <span class="chip">&lt;strike&gt; strikethrough text</span>
  </div>

  ${demoCard("format", "Try it: all the text formatting tags together", 320)}

  ${analogy(`<p>These tags are like using a highlighter, a bold marker, or shrinking/enlarging text on a printed page — they change appearance only, without changing what the words actually mean to a screen reader.</p>`)}

  ${remember(["b = bold · i = italic · u = underline","big/small = relative text size · strike = strikethrough"])}
`;

DEMOS.format = `<p><b>Bold text</b> stands out visually.</p>
<p><i>Italic text</i> is slanted.</p>
<p><u>Underlined text</u> — use sparingly, since underlines usually mean "this is a link" to most readers!</p>
<p><big>Big text</big> is larger than normal, and <small>small text</small> is smaller — often used for disclaimers.</p>
<p><strike>Struck-through text</strike> shows a line through it.</p>`;

CONTENT.htmlfontlegacy = `
  ${explain(`
    <p>Before CSS became standard, HTML had built-in tags and attributes for styling — you'll still see them in older code. It's important to recognize them, even though modern web development prefers CSS instead.</p>
  `)}

  <h3>The &lt;font&gt; tag and its attributes</h3>
  <div class="chiprow">
    <span class="chip">face — the font family name</span>
    <span class="chip">size — ranges from 1 to 7 (3 is default), or relative sizes like +1 / -2</span>
    <span class="chip">color — the font color, by name or hexadecimal value</span>
  </div>

  <h3 style="margin-top:18px;">Tag attributes, generally</h3>
  <p>Attributes are written as <strong>name–value pairs</strong>. String values are enclosed in quotes; numeric values can be written with or without quotes: <code>&lt;tag attribute="value"&gt; Content &lt;/tag&gt;</code></p>

  <h3 style="margin-top:18px;">A quoting gotcha</h3>
  <p>In normal writing, we use "curly" 'quotes.' In code, you must always use "straight" 'quotes' — curly quotes (often auto-inserted by word processors) will break your HTML!</p>

  <h3 style="margin-top:18px;">Alignment &amp; background color</h3>
  <div class="chiprow">
    <span class="chip">&lt;p align='right'&gt; — aligns content: left / center / right / justify</span>
    <span class="chip">&lt;center&gt;...&lt;/center&gt; — centers content</span>
    <span class="chip">&lt;body bgcolor="aqua"&gt; — sets a background color</span>
  </div>

  ${demoCard("fontlegacy", "Try it: old-style font, bgcolor & align attributes", 180)}

  ${mistake(`<p>The &lt;font&gt; tag, &lt;center&gt; tag, and attributes like <code>bgcolor</code> and <code>align</code> are <strong>deprecated</strong> in HTML5 — browsers still support them for backward compatibility, but modern websites use <strong>CSS</strong> instead. You'll meet the CSS way to do all of this in the CSS3 Styling section.</p>`)}

  ${remember(["font, bgcolor, align, center = old HTML styling — still work, but deprecated","Attributes are name='value' pairs — always use straight quotes, never curly ones","Modern websites use CSS instead of these tags/attributes"])}
`;

DEMOS.fontlegacy = `<body bgcolor="LightYellow">
  <p align="center">
    <font face="Arial" color="FireBrick" size="+2">
      This text uses the old-style font tag: Arial face, FireBrick color, and a larger size.
    </font>
  </p>
  <p align="right">This paragraph is right-aligned using the align attribute.</p>
</body>`;

CONTENT.htmllists = `
  ${explain(`<p>Lists present items clearly — either with bullets, numbers, or as a set of terms and their descriptions.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;ul&gt; — Unordered list (bulleted), holds &lt;li&gt; items</span>
    <span class="chip">&lt;ol&gt; — Ordered list (numbered), holds &lt;li&gt; items — type='1' / 'A' / 'a' / 'I' / 'i' changes the numbering style, start sets where it begins</span>
    <span class="chip">&lt;dl&gt; — Description list, pairing &lt;dt&gt; (term) with &lt;dd&gt; (its description)</span>
  </div>

  ${demoCard("lists", "Try it: bullet, numbered, lettered & description lists", 520)}

  <h3 style="margin-top:20px;">The &lt;div&gt; tag</h3>
  <p>A <strong>&lt;div&gt;</strong> defines a division or section in an HTML document. It's used as a container to organize page content — often given an <code>id</code> so it can be targeted individually by CSS or JavaScript.</p>

  ${demoCard("divtag", "Try it: grouping content with div", 200)}

  ${remember(["ul = bullets · ol = numbers/letters (type attribute changes style) · dl = term + description pairs","li = one item, goes inside ul or ol · dt/dd = term/description, goes inside dl","div = a generic container for grouping and organizing content"])}
`;

DEMOS.lists = `<h3>Unordered List (bullets)</h3>
<ul>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Bread</li>
</ul>

<h3>Ordered List with type='A' (lettered)</h3>
<ol type="A">
  <li>Option A</li>
  <li>Option B</li>
  <li>Option C</li>
</ol>

<h3>Description List</h3>
<dl>
  <dt>HTML</dt>
  <dd>The standard markup language for web pages.</dd>
  <dt>CSS</dt>
  <dd>The language used to style HTML content.</dd>
</dl>`;

DEMOS.divtag = `<div id="maincontent">
  <h3>About HTML</h3>
  <p>Hypertext Markup Language (HTML) is the standard markup language for documents displayed in a browser.</p>
</div>
<div id="contactinfo">
  <p>Email: contact@example.com</p>
</div>`;

CONTENT.htmllinks = `
  ${explain(`<p>Links are what make the web "webbed" — they connect pages and sections together, using the anchor tag.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;a href="..."&gt; — defines a hyperlink; href holds the destination</span>
    <span class="chip">href="#id" — an internal link that jumps to an element with a matching id on the SAME page</span>
    <span class="chip">href="https://..." — an external link to another website</span>
    <span class="chip">target="_blank" — opens the link in a new browser tab</span>
  </div>

  ${demoCard("links", "Try it: internal jump-link and an external link", 160)}

  ${remember(["a href = the link tag · href holds where it goes","#id links jump within the same page","target='_blank' opens a new tab — great for external links so you don't lose your place"])}
`;

DEMOS.links = `<nav>
  <a href="#section1">Jump to Section 1 (internal link)</a> |
  <a href="https://www.wikipedia.org" target="_blank">Visit Wikipedia (external link, opens in a new tab)</a>
</nav>
<hr>
<h3 id="section1">Section 1</h3>
<p>Clicking the first link above jumps straight down to this heading, because its id matches the link's #section1.</p>`;

CONTENT.htmlimages = `
  ${explain(`<p>Images bring a page to life. The &lt;img&gt; element embeds an image using its src (source path) and alt (alternate text) attributes, and can be paired with a proper caption using HTML5's figure/figcaption.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;img src="..." alt="..."&gt; — src is the file path, alt is a text description</span>
    <span class="chip">width / height — control the displayed size of the image</span>
    <span class="chip">&lt;figure&gt; — wraps an image (or any content) together with its caption</span>
    <span class="chip">&lt;figcaption&gt; — the caption text for the figure</span>
  </div>

  ${demoCard("images", "Try it: a plain image, then a captioned figure", 460)}

  ${mistake(`<p>Never skip the <code>alt</code> attribute! It's what screen readers announce to visually impaired users, and it's what shows up if the image fails to load. "alt='image'" is not helpful — describe what's actually in the picture.</p>`)}

  ${remember(["img = image tag · src = file path · alt = text description (important for accessibility!)","figure + figcaption = an image (or content) with a proper, linked caption"])}
`;

DEMOS.images = `<img src="swiss-mountains.jpg" alt="Snow-covered Swiss Alps above a mountain village" width="320">

<figure>
  <img src="swiss-mountains.jpg" alt="Snow-covered Swiss Alps" width="320">
  <figcaption>The Matterhorn towering over a Swiss village</figcaption>
</figure>`;

CONTENT.html5intro = `
  ${explain(`
    <p>Classic HTML has real limits: it doesn't describe the <em>meaning</em> of data, it uses a fixed set of tags, it has limited design ability, and it has no programming capability of its own. <strong>HTML5</strong> is the modern standard that addresses this — it encompasses a broad spectrum of web technologies across three areas.</p>
  `)}

  <div class="chiprow">
    <span class="chip">HTML — the content, including markup instructions</span>
    <span class="chip">CSS — the styling rules that define how content is presented</span>
    <span class="chip">JavaScript — client-side scripting and advanced capabilities</span>
  </div>

  <h3 style="margin-top:20px;">What's new in HTML5?</h3>
  <div class="chiprow">
    <span class="chip">🧱 New semantic elements</span>
    <span class="chip">📮 Forms 2.0</span>
    <span class="chip">🖌️ Canvas</span>
    <span class="chip">🎬 Audio &amp; Video</span>
    <span class="chip">📍 Geolocation</span>
    <span class="chip">🖱️ Drag and Drop</span>
  </div>

  <p style="margin-top:14px;">The most visible difference is <strong>semantic elements</strong> — tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt; replace what used to be generic, meaningless &lt;div&gt;s. We'll explore these next.</p>

  ${remember(["HTML has real limitations: no semantic meaning, fixed tags, limited design, no programming","HTML5 = HTML + CSS + JavaScript working together, with new capabilities","Key new features: semantic elements, Forms 2.0, Canvas, Audio/Video, Geolocation, Drag & Drop"])}
`;

CONTENT.htmlsemantic = `
  ${explain(`
    <p>Before HTML5, developers used generic &lt;div&gt; tags for everything. HTML5 introduced <strong>semantic tags</strong> — elements whose NAME itself describes its purpose, helping both browsers and screen readers understand the page's structure.</p>
  `)}

  <div class="chiprow">
    <span class="chip">&lt;header&gt; — a container for introductory content or a set of navigational links</span>
    <span class="chip">&lt;nav&gt; — a block of navigation links</span>
    <span class="chip">&lt;main&gt; — the primary content of the page (only one per page)</span>
    <span class="chip">&lt;section&gt; — a thematic grouping of content, typically with a heading</span>
    <span class="chip">&lt;article&gt; — independent, self-contained content (a forum post, blog post, article)</span>
    <span class="chip">&lt;aside&gt; — content aside from the main content, like a sidebar</span>
    <span class="chip">&lt;footer&gt; — defines a footer, often holding authorship, copyright, or contact info</span>
  </div>

  ${demoCard("semantic", "Try it: a full semantic page skeleton", 480)}

  ${analogy(`<p>Semantic tags are like properly labeled boxes when moving houses. Writing "Kitchen Items" on a box (semantic) is far more useful than writing "Box 7" and hoping you remember what's inside (a generic &lt;div&gt;).</p>`)}

  ${remember(["Semantic tags describe their purpose by name — great for accessibility & SEO","header/nav/main/footer = overall page structure","section/article/aside = content-level structure inside main"])}
`;

DEMOS.semantic = `<header style="background:#eee; padding:8px;">
  <h2 style="margin:0;">Site Header</h2>
</header>

<nav style="background:#ddd; padding:8px;">Navigation links go here</nav>

<main style="padding:8px;">
  <section style="background:#f7f7f7; padding:8px; margin-bottom:8px;">
    <article>
      <h3>Article Title</h3>
      <p>This article sits inside a section, which sits inside main.</p>
    </article>
  </section>

  <aside style="background:#fdf0d5; padding:8px;">This is an aside — extra related info, like a sidebar.</aside>
</main>

<footer style="background:#eee; padding:8px;">
  <p style="margin:0;">Site Footer</p>
</footer>`;

CONTENT.htmlinteractive = `
  ${explain(`<p>HTML5 also introduced a few tags that add built-in interactivity and structure, without needing any JavaScript at all.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;figure&gt; + &lt;figcaption&gt; — pairs an image with its caption</span>
    <span class="chip">&lt;details&gt; + &lt;summary&gt; — creates a collapsible "click to expand" section</span>
    <span class="chip">&lt;dialog&gt; — a pop-up box, usually shown/hidden using JavaScript</span>
    <span class="chip">&lt;mark&gt; — highlights text, like using a highlighter pen</span>
  </div>

  ${demoCard("interactive", "Try it: mark, a collapsible details/summary, and a dialog", 260)}

  ${remember(["figure + figcaption = image with a caption","details + summary = built-in expandable/collapsible content, no JavaScript needed","dialog = a pop-up box element, typically opened/closed using JavaScript","mark = highlighted text"])}
`;

DEMOS.interactive = `<p>Here is some <mark>highlighted text</mark> drawing attention to something important.</p>

<figure>
  <img src="swiss-mountains.jpg" alt="Favourite view" width="220">
  <figcaption>Favourite Quote-worthy view</figcaption>
</figure>

<details>
  <summary>Click to reveal a hidden tip</summary>
  <p>This content stays hidden until the summary above is clicked — great for FAQs!</p>
</details>

<br>
<dialog open>
  <p>This is a dialog box. In real use, it usually starts hidden and is opened with JavaScript (like a pop-up announcement).</p>
</dialog>`;

CONTENT.blockinline = `
  ${explain(`<p>Every HTML element behaves as one of two display types by default.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>📦 Block-Level Elements</h4>
      <p style="font-size:14.5px;">Starts on a new line and takes up the full width available. Examples: <code>&lt;div&gt;, &lt;h1&gt;–&lt;h6&gt;, &lt;p&gt;, &lt;form&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;ol&gt;, &lt;ul&gt;, &lt;dl&gt;, &lt;table&gt;</code></p>
    </div>
    <div class="flow-card">
      <h4>↔️ Inline Elements</h4>
      <p style="font-size:14.5px;">Does NOT start on a new line — only takes up as much width as necessary. Examples: <code>&lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;mark&gt;, &lt;strong&gt;, &lt;br&gt;, &lt;code&gt;, &lt;input&gt;</code></p>
    </div>
  </div>

  ${demoCard("blockinline", "Try it: block vs inline behaviour side by side", 200)}

  ${analogy(`<p>A block-level element is like a new paragraph in a letter — it always starts on its own fresh line. An inline element is like a single word you underline mid-sentence — it doesn't interrupt the flow of the line it's in.</p>`)}

  ${remember(["Block-level = starts a new line, takes full width (div, p, headings, lists, table...)","Inline = stays within the line, takes only the width it needs (span, a, img, strong...)"])}
`;

DEMOS.blockinline = `<p>Below, two &lt;div&gt;s (block-level) each start on their own new line:</p>
<div style="background:#e0f2ff; padding:6px;">Block element 1</div>
<div style="background:#ffe8cc; padding:6px;">Block element 2</div>

<p>But below, two &lt;span&gt;s (inline) sit right next to each other on the same line:
<span style="background:#e0f2ff; padding:2px 6px;">Inline A</span>
<span style="background:#ffe8cc; padding:2px 6px;">Inline B</span>
— see how they don't force a new line?</p>`;

CONTENT.htmltables = `
  ${explain(`<p>Tables organize information into rows and columns using &lt;table&gt;, &lt;tr&gt; (row), &lt;th&gt; (header cell), and &lt;td&gt; (data cell).</p>`)}

  ${demoCard("tablesbasic", "Try it: a simple table with a header row", 200)}

  <h3 style="margin-top:20px;">Spanning cells</h3>
  <p>Sometimes one cell needs to stretch across multiple columns or rows: <code>colspan</code> merges columns, <code>rowspan</code> merges rows.</p>
  ${demoCard("tablespan", "Try it: colspan and rowspan", 220)}

  <h3 style="margin-top:20px;">Row &amp; column grouping</h3>
  <p>Grouping tags help organize and structure larger tables, improving both readability and accessibility:</p>
  <div class="chiprow">
    <span class="chip">&lt;thead&gt; — groups header rows</span>
    <span class="chip">&lt;tbody&gt; — groups the main body rows</span>
    <span class="chip">&lt;tfoot&gt; — groups footer rows</span>
    <span class="chip">&lt;colgroup&gt; + &lt;col&gt; — groups and styles whole columns at once</span>
  </div>
  ${demoCard("tablegroup", "Try it: thead, tbody & tfoot", 260)}

  <h3 style="margin-top:20px;">Accessibility touches</h3>
  <div class="chiprow">
    <span class="chip">scope="col" / scope="row" on &lt;th&gt; — tells screen readers whether a header applies to its column or row</span>
    <span class="chip">&lt;caption&gt; — gives the whole table a title, announced by screen readers</span>
  </div>

  ${remember(["table > tr > th/td — table, then rows, then header or data cells","colspan/rowspan merge cells across columns/rows","thead/tbody/tfoot group rows for structure and readability","scope and caption make tables accessible to screen readers"])}
`;

DEMOS.tablesbasic = `<table border="1" cellpadding="8" cellspacing="0">
  <caption>Weekly Class Schedule</caption>
  <tr>
    <th scope="col">Day</th>
    <th scope="col">Subject</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>UI, UX &amp; Design Thinking</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>Computer Networks</td>
  </tr>
</table>`;

DEMOS.tablespan = `<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th colspan="2">Student Details</th>
  </tr>
  <tr>
    <th>Name</th><th>Age</th>
  </tr>
  <tr>
    <td>Annie</td>
    <td rowspan="2">20</td>
  </tr>
  <tr>
    <td>Yazhishri</td>
  </tr>
</table>`;

DEMOS.tablegroup = `<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Annie</td><td>20</td></tr>
    <tr><td>Yazhishri</td><td>20</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>2 students</td></tr>
  </tfoot>
</table>`;

CONTENT.htmlforms = `
  ${explain(`<p>Forms let users type in, choose, and submit information — the basis of logins, sign-ups, and surveys.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;form&gt; — the container for all input elements</span>
    <span class="chip">&lt;fieldset&gt; + &lt;legend&gt; — groups related fields together with a titled border</span>
    <span class="chip">&lt;label for="id"&gt; — a text label linked to a specific input, so clicking the label also focuses the input</span>
    <span class="chip">&lt;input&gt; — has many "type" values: text, password, radio, checkbox, color, date, email, and more</span>
    <span class="chip">&lt;select&gt; + &lt;option&gt; — a dropdown menu</span>
    <span class="chip">&lt;textarea&gt; — a multi-line text box</span>
    <span class="chip">&lt;button&gt; — a clickable button, more flexible than input type='submit'</span>
  </div>

  ${demoCard("forms", "Try it: a full sample form", 460)}

  <h3 style="margin-top:20px;">Two more helpful tags</h3>
  <div class="chiprow">
    <span class="chip">&lt;datalist&gt; — gives a text input a dropdown of suggestions, while still allowing free typing</span>
    <span class="chip">tabindex — controls the order fields are focused in when a user presses Tab, important for keyboard/accessibility navigation</span>
  </div>
  ${demoCard("datalist", "Try it: a text input with datalist suggestions", 140)}

  ${mistake(`<p>Always pair every &lt;input&gt; with a &lt;label&gt; using matching <code>for</code> and <code>id</code> attributes. Without this link, screen reader users won't know what a field is for, and sighted users lose the convenience of clicking the label to focus the field.</p>`)}

  ${remember(["form = wraps the whole form · fieldset/legend = groups fields with a title","label's for must match the input's id","Important attributes: id, name, value, type, for","datalist = suggestions for a text input · tabindex = keyboard focus order"])}
`;

DEMOS.forms = `<form>
  <fieldset>
    <legend>Personal Details</legend>

    <label for="uname">Name:</label>
    <input type="text" id="uname" name="uname"><br><br>

    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="pwd"><br><br>

    <label>Gender:</label>
    <input type="radio" id="m" name="gender"> <label for="m">Male</label>
    <input type="radio" id="f" name="gender"> <label for="f">Female</label><br><br>

    <input type="checkbox" id="agree" name="agree">
    <label for="agree">I agree to the terms</label><br><br>

    <label for="course">Course:</label>
    <select id="course" name="course">
      <option value="uiux">UI/UX Design</option>
      <option value="cn">Computer Networks</option>
    </select><br><br>

    <label for="msg">Message:</label><br>
    <textarea id="msg" name="msg" rows="3" cols="30" placeholder="Type here..."></textarea>
  </fieldset>
  <br>
  <button type="submit">Submit</button>
  <button type="reset">Clear</button>
</form>`;

DEMOS.datalist = `<label for="loc">Where are you right now?</label>
<input list="cities" id="loc" name="location">
<datalist id="cities">
  <option value="Chennai">
  <option value="Mumbai">
  <option value="Bengaluru">
  <option value="Delhi">
</datalist>`;

CONTENT.htmlmultimedia = `
  ${explain(`<p>HTML5 made it possible to embed real audio, video, and even other webpages directly into a page — no plugins required.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;video&gt; — embeds a video, with attributes like controls, autoplay, loop, muted</span>
    <span class="chip">&lt;audio&gt; — embeds a sound clip, with similar controls</span>
    <span class="chip">&lt;embed&gt; — embeds external content or a plugin-based resource</span>
    <span class="chip">&lt;object&gt; — embeds external resources like PDFs, similar to embed but more flexible</span>
    <span class="chip">&lt;iframe&gt; — embeds an entirely separate webpage inside the current one</span>
  </div>

  ${demoCard("multimedia", "The video/audio tag structure (code reference)", 160)}

  ${mistake(`<p>Always include a fallback message inside &lt;video&gt; or &lt;audio&gt; tags for older browsers that don't support them — anything written between the opening and closing tags only shows up if the media itself fails to load.</p>`)}

  ${remember(["video/audio = built-in media playback, no plugins needed","embed/object = embedding external files or plugin content","iframe = embeds a whole separate webpage inside the current page"])}
`;

DEMOS.multimedia = `<!-- Video with playback controls, looping -->
<video controls loop width="320">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!-- Audio with playback controls -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>

<!-- Embedding another webpage -->
<iframe src="https://example.com" width="300" height="150" title="Embedded page"></iframe>`;

/* ================= UNIT 4b: CSS3 STYLING ================= */

CONTENT.csswriting = `
  ${explain(`
    <p><strong>CSS</strong> (Cascading Style Sheets) is what turns plain, unstyled HTML into a page with colors, fonts, spacing, and layout. Without CSS, every webpage would look like a plain document — CSS is why the modern web looks the way it does.</p>
  `)}

  <h3>Three ways to write CSS</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>1️⃣ Inline CSS</h4>
      <p style="font-size:14px;">Written directly on one element using the <code>style</code> attribute. Quick, but hard to maintain and reuse.</p>
    </div>
    <div class="flow-card">
      <h4>2️⃣ Internal CSS</h4>
      <p style="font-size:14px;">Written inside a &lt;style&gt; block in the &lt;head&gt; of the page. Applies to the whole page.</p>
    </div>
    <div class="flow-card">
      <h4>3️⃣ External CSS</h4>
      <p style="font-size:14px;">Written in a separate .css file, linked with &lt;link&gt;. Best for larger sites — one file can style many pages.</p>
    </div>
  </div>

  ${demoCard("csswriting", "Try it: inline, internal & external-style CSS", 260)}

  <h3 style="margin-top:20px;">CSS Selectors — how CSS finds what to style</h3>
  <div class="chiprow">
    <span class="chip">Element selector — p { ... } targets every &lt;p&gt;</span>
    <span class="chip">#id selector — #header { ... } targets the one element with that id</span>
    <span class="chip">.class selector — .highlight { ... } targets every element with that class</span>
    <span class="chip">[attribute] selector — [type="text"] { ... } targets elements with a matching attribute</span>
    <span class="chip">* Universal selector — * { ... } targets absolutely everything</span>
  </div>

  <h3 style="margin-top:18px;">Why "Cascading"?</h3>
  <p>When multiple CSS rules could apply to the same element, CSS "cascades" through them using a clear set of priority rules — more specific selectors, and rules declared later, generally win.</p>

  ${remember(["Inline = on one element · Internal = in the page's &lt;head&gt; · External = a separate linked .css file","Selectors: element, #id, .class, [attribute], * universal","CSS is 'cascading' — rules combine and override each other based on specificity and order"])}
`;

DEMOS.csswriting = `<!-- Inline CSS: style written directly on the element -->
<p style="color: darkred; font-weight: bold;">This paragraph uses inline CSS.</p>

<!-- Internal CSS: written in a style block, applies to the whole page -->
<style>
  .highlight { background-color: yellow; padding: 4px; }
  #special { color: teal; font-style: italic; }
</style>

<p class="highlight">This paragraph is styled by a CSS class.</p>
<p id="special">This paragraph is styled by a CSS id.</p>`;

CONTENT.csscolors = `
  ${explain(`<p>CSS gives you several ways to specify a color, from simple names to precise numeric values.</p>`)}

  <div class="swatchrow">
    <div class="swatch" style="background:tomato;">tomato</div>
    <div class="swatch" style="background:rgb(46,139,87);">rgb(46,139,87)</div>
    <div class="swatch" style="background:#4169e1;">#4169e1</div>
    <div class="swatch" style="background:hsl(280,60%,50%);">hsl(280,60%,50%)</div>
    <div class="swatch" style="background:rgba(0,0,0,0.6);">rgba(0,0,0,.6)</div>
  </div>

  <div class="chiprow">
    <span class="chip">Predefined names — like "tomato" or "steelblue" (140+ built into CSS)</span>
    <span class="chip">RGB — rgb(red, green, blue), each 0–255</span>
    <span class="chip">Hexadecimal — #RRGGBB, the same red/green/blue values written in hex</span>
    <span class="chip">HSL — hsl(hue, saturation%, lightness%) — often easier to reason about than RGB</span>
    <span class="chip">RGBA / HSLA — same as above, plus an alpha (opacity) value from 0 to 1</span>
  </div>

  ${remember(["Named colors, RGB, Hex, HSL all describe the same color space in different ways","Adding an 'A' (RGBA/HSLA) adds an opacity/alpha channel","Hex is the most common in real stylesheets; HSL is often easiest for humans to adjust"])}
`;

CONTENT.cssboxmodel = `
  ${explain(`
    <p>Every single HTML element is treated by the browser as a rectangular box. Understanding this <strong>Box Model</strong> is the single most important CSS concept — nearly every layout question comes back to it.</p>
  `)}

  <div class="flow-grid">
    <div class="flow-card"><h4>Content</h4><p style="font-size:14px;">The actual text/image inside the element.</p></div>
    <div class="flow-card"><h4>Padding</h4><p style="font-size:14px;">Space between the content and the border — inside the box.</p></div>
    <div class="flow-card"><h4>Border</h4><p style="font-size:14px;">The line that wraps around the padding and content.</p></div>
    <div class="flow-card"><h4>Margin</h4><p style="font-size:14px;">Space between this element and other elements — outside the box.</p></div>
  </div>

  ${demoCard("boxmodel", "Try it: padding, border & margin together", 220)}

  <h3 style="margin-top:20px;">box-sizing: a crucial detail</h3>
  <p>By default (<code>content-box</code>), width/height only apply to the content — padding and border get <em>added on top</em>, making the visible box bigger than the width you set. With <code>box-sizing: border-box</code>, padding and border are included <em>within</em> the width you set — the visible box stays exactly the size you specified. Most modern developers prefer <code>border-box</code> for predictability.</p>

  ${analogy(`<p>Think of a framed photo on a wall. The photo itself is the content. The mat around it is the padding. The frame is the border. The empty wall space around the frame before the next picture is the margin.</p>`)}

  ${remember(["Box Model, from inside out: Content → Padding → Border → Margin","content-box (default) = width applies to content only, padding/border add extra size","border-box = width includes padding and border, keeping the box size predictable"])}
`;

DEMOS.boxmodel = `<div style="
  width: 200px;
  padding: 20px;
  border: 5px solid steelblue;
  margin: 20px;
  background-color: lightcyan;
">
  This box has 20px padding, a 5px border, and 20px margin — try inspecting it!
</div>`;

CONTENT.csslayout = `
  ${explain(`<p>Beyond the box model, CSS gives you several tools to control exactly where each box sits on the page.</p>`)}

  <h3>The display property</h3>
  <div class="chiprow">
    <span class="chip">block — full width, starts on a new line (default for div, p, headings)</span>
    <span class="chip">inline — only as wide as needed, stays in the flow of text</span>
    <span class="chip">inline-block — inline placement, but you CAN set width/height on it</span>
    <span class="chip">none — removes the element entirely from the page</span>
  </div>

  <h3 style="margin-top:18px;">The position property</h3>
  <div class="chiprow">
    <span class="chip">static — default; follows normal page flow</span>
    <span class="chip">relative — positioned relative to its own normal position</span>
    <span class="chip">absolute — positioned relative to its nearest positioned ancestor</span>
    <span class="chip">fixed — positioned relative to the browser window; stays put when scrolling</span>
    <span class="chip">sticky — behaves like relative, until a scroll threshold, then "sticks" like fixed</span>
  </div>

  ${demoCard("position", "Try it: position: relative vs absolute", 220)}

  <h3 style="margin-top:18px;">A few more layout tools</h3>
  <div class="chiprow">
    <span class="chip">float — pulls an element to the left/right, letting text wrap around it</span>
    <span class="chip">overflow — controls what happens when content is too big for its box (visible/hidden/scroll/auto)</span>
    <span class="chip">z-index — controls stacking order when elements overlap (higher = on top)</span>
  </div>

  ${remember(["display controls how an element takes up space: block, inline, inline-block, none","position controls exact placement: static, relative, absolute, fixed, sticky","z-index controls which overlapping element appears on top"])}
`;

DEMOS.position = `<div style="position: relative; height: 150px; border: 2px dashed gray;">
  <div style="position: absolute; top: 10px; left: 10px; background: coral; padding: 8px;">
    position: absolute (relative to the dashed box)
  </div>
  <div style="position: relative; top: 60px; left: 30px; background: lightgreen; padding: 8px; width: 220px;">
    position: relative (shifted from its normal spot)
  </div>
</div>`;

CONTENT.csstext = `
  ${explain(`<p>CSS gives fine control over how text itself appears, beyond just color and font.</p>`)}

  <div class="chiprow">
    <span class="chip">color — sets text color</span>
    <span class="chip">text-align — left / center / right / justify</span>
    <span class="chip">direction — ltr (left-to-right) or rtl (right-to-left)</span>
    <span class="chip">text-decoration — underline / overline / line-through / none</span>
    <span class="chip">text-transform — uppercase / lowercase / capitalize</span>
    <span class="chip">letter-spacing / word-spacing / line-height — text spacing</span>
    <span class="chip">text-shadow — adds a shadow behind text</span>
  </div>

  ${demoCard("csstext", "Try it: several text properties together", 260)}

  ${remember(["text-align positions text within its box · text-transform changes letter case automatically","text-decoration adds/removes lines (underline etc.) · text-shadow adds depth"])}
`;

DEMOS.csstext = `<p style="text-align: center; text-transform: uppercase; letter-spacing: 2px;">centered, uppercase, spaced out</p>
<p style="text-decoration: underline wavy red;">underlined with a wavy red line</p>
<p style="text-shadow: 2px 2px 4px gray; font-size: 24px; font-weight: bold;">Text with a shadow</p>`;

CONTENT.csstableform = `
  ${explain(`<p>Tables and forms can be styled just like any other element — a few properties come up especially often.</p>`)}

  <h3>Styling tables</h3>
  <div class="chiprow">
    <span class="chip">border-collapse: collapse — merges double borders into single clean lines</span>
    <span class="chip">tr:hover — highlights a row when the mouse is over it</span>
    <span class="chip">tr:nth-child(even) — styles every other row for a "striped" table</span>
  </div>
  ${demoCard("tablestyle", "Try it: a striped, hoverable table", 220)}

  <h3 style="margin-top:20px;">Styling forms</h3>
  <div class="chiprow">
    <span class="chip">:focus — styles an input while the user is actively typing in it</span>
    <span class="chip">resize — controls whether a textarea can be resized by the user</span>
    <span class="chip">cursor — changes the mouse pointer icon over an element</span>
  </div>
  ${demoCard("formstyle", "Try it: a focus-highlighted input", 130)}

  ${remember(["border-collapse: collapse cleans up double table borders","nth-child(even) + hover are the classic 'striped, hoverable table' combo","input:focus gives clear visual feedback while typing — great for usability"])}
`;

DEMOS.tablestyle = `<style>
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
  tr:nth-child(even) { background-color: #f2f2f2; }
  tr:hover { background-color: #d6eaff; }
</style>
<table>
  <tr><th>Name</th><th>Score</th></tr>
  <tr><td>Annie</td><td>92</td></tr>
  <tr><td>Yazhishri</td><td>88</td></tr>
  <tr><td>Rahul</td><td>95</td></tr>
</table>`;

DEMOS.formstyle = `<style>
  input:focus { outline: none; border: 2px solid steelblue; background: #eef6ff; }
</style>
<label for="fname">Try clicking into this field:</label><br>
<input type="text" id="fname" placeholder="Click here...">`;

CONTENT.cssanimation = `
  ${explain(`
    <p>CSS <strong>animations</strong> let an element change its style over time, automatically — no JavaScript required. They're analogous to frame-by-frame animation: you define a sequence of "frames," and the browser smoothly plays through them.</p>
  `)}

  <h3>Two basic building blocks</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>1. @keyframes</h4>
      <p style="font-size:14px;">Defines WHAT changes happen, and at which point (0% to 100%) in the animation timeline.</p>
    </div>
    <div class="flow-card">
      <h4>2. animation</h4>
      <p style="font-size:14px;">Attaches a defined @keyframes sequence to an element, and controls HOW it plays — duration, repeat count, direction, timing.</p>
    </div>
  </div>

  ${demoCard("keyframedemo", "Try it: a color-shifting, bouncing animation", 400)}

  <h3 style="margin-top:20px;">Key animation properties</h3>
  <div class="chiprow">
    <span class="chip">animation-duration — how long one cycle takes</span>
    <span class="chip">animation-iteration-count — how many times it repeats (or "infinite")</span>
    <span class="chip">animation-direction — normal / reverse / alternate</span>
    <span class="chip">animation-timing-function — the pacing curve (ease-in-out, linear, cubic-bezier...)</span>
    <span class="chip">animation-delay — waits before starting</span>
  </div>

  ${remember(["@keyframes defines the 'what' · animation defines the 'how'","0% and 100% (or 'from'/'to') mark the start and end states","animation-iteration-count: infinite makes it loop forever"])}
`;

DEMOS.keyframedemo = `<style>
  .circle {
    width: 120px; height: 120px; margin: 10px auto;
    border-radius: 50%; background-color: red;
    animation: colors 5s infinite ease-in-out;
  }
  @keyframes colors {
    0% { background-color: yellow; }
    100% { background-color: blue; }
  }
  .bounce {
    width: 100px; height: 35px; margin: 20px auto 0;
    border-radius: 10px; background-color: blue;
    animation: bounce 3s linear infinite alternate;
  }
  @keyframes bounce {
    from { margin-left: 20px; }
    to { margin-left: 200px; }
  }
</style>
<div class="circle"></div>
<div class="bounce"></div>`;

CONTENT.csstransform = `
  ${explain(`<p><strong>Transitions</strong> smoothly animate a property change (like on hover). <strong>Transforms</strong> move, rotate, resize, or skew an element in space — often combined with transitions for a smooth effect.</p>`)}

  <h3>Transitions</h3>
  <p>A transition needs a starting style, an ending style (often triggered by <code>:hover</code>), and timing properties: <code>transition-duration</code>, <code>transition-delay</code>, and <code>transition-timing-function</code>.</p>
  ${demoCard("transitiondemo", "Try it: hover over the box below", 130)}

  <h3 style="margin-top:20px;">Transforms</h3>
  <div class="chiprow">
    <span class="chip">translate(x, y) — moves an element</span>
    <span class="chip">rotate(deg) — rotates an element</span>
    <span class="chip">scale(x, y) — resizes an element</span>
    <span class="chip">skew(x-deg, y-deg) — slants an element</span>
  </div>
  <p style="margin-top:10px;"><code>transform-origin</code> sets the pivot point a rotation/scale/skew happens around.</p>
  ${demoCard("transformdemo", "Try it: translate, rotate, scale & skew", 340)}

  ${analogy(`<p>A transition is like a dimmer switch smoothly fading a light on — you set the start, the end, and how long the fade takes. A transform is more like physically moving, spinning, or stretching an object in place.</p>`)}

  ${remember(["Transition = smooth change between two states over time","Transform = translate (move), rotate, scale (resize), skew (slant)","transform-origin sets the pivot point for rotate/scale/skew"])}
`;

DEMOS.transitiondemo = `<style>
  .transition {
    margin: 10px; height: 50px; width: 100px;
    border: 1px solid black; background-color: lightgreen;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }
  .transition:hover { width: 300px; height: 100px; }
</style>
<div class="transition">Hover Me</div>`;

DEMOS.transformdemo = `<style>
  .transform {
    margin: 25px; height: 50px; width: 100px;
    border: 1px solid black; background-color: lightblue;
    display: inline-block;
  }
  .translate { transform: translate(30px, -10px); }
  .rotate { transform: rotate(15deg); transform-origin: bottom left; }
  .scale { transform: scale(1.5, 0.9); transform-origin: bottom left; }
  .skew { transform: skew(20deg, 5deg); transform-origin: top left; }
</style>
<div class="transform">Original</div>
<div class="transform translate">Translate</div>
<div class="transform rotate">Rotate</div>
<div class="transform scale">Scale</div>
<div class="transform skew">Skew</div>`;

CONTENT.cssflexbox = `
  ${explain(`
    <p>Before Flexbox, arranging boxes side-by-side, centering things vertically, or making equal-width columns required awkward workarounds (floats, tricky width math). <strong>Flexbox</strong> was built specifically to solve one-dimensional layout problems cleanly.</p>
  `)}

  <h3>The Flex Model</h3>
  <p>You turn a container into a flex container with <code>display: flex</code>. Its direct children automatically become <strong>flex items</strong>, arranged along a single line by default.</p>

  ${demoCard("flexbasic", "Try it: before vs after display: flex", 220)}

  <h3 style="margin-top:20px;">Properties on the Flex Container</h3>
  <div class="chiprow">
    <span class="chip">flex-direction — row / row-reverse / column / column-reverse</span>
    <span class="chip">flex-wrap — whether items wrap onto new lines when there's no room</span>
    <span class="chip">justify-content — aligns items along the main axis (start/center/space-between...)</span>
    <span class="chip">align-items — aligns items along the cross axis</span>
  </div>

  ${demoCard("flexalign", "Try it: justify-content & align-items", 220)}

  <h3 style="margin-top:20px;">Properties on Flex Items</h3>
  <div class="chiprow">
    <span class="chip">flex-grow — how much an item grows to fill extra space</span>
    <span class="chip">flex-shrink — how much an item shrinks when space is tight</span>
    <span class="chip">flex-basis — the item's starting size before growing/shrinking</span>
    <span class="chip">flex: grow shrink basis; — shorthand for all three above</span>
  </div>

  ${demoCard("flexgrow", "Try it: flex-grow proportions", 160)}

  ${remember(["display: flex turns a container's children into flex items on one line","flex-direction sets the main axis · flex-wrap allows multiple lines","justify-content = main-axis alignment · align-items = cross-axis alignment","flex-grow/shrink/basis control how individual items resize"])}
`;

DEMOS.flexbasic = `<p>Without flex — items stack as blocks:</p>
<div style="border: 2px dashed gray; margin-bottom: 12px;">
  <div style="background: coral; padding: 10px;">Item 1</div>
  <div style="background: lightgreen; padding: 10px;">Item 2</div>
  <div style="background: lightskyblue; padding: 10px;">Item 3</div>
</div>

<p>With display: flex — items sit side by side automatically:</p>
<div style="display: flex; border: 2px dashed gray;">
  <div style="background: coral; padding: 10px;">Item 1</div>
  <div style="background: lightgreen; padding: 10px;">Item 2</div>
  <div style="background: lightskyblue; padding: 10px;">Item 3</div>
</div>`;

DEMOS.flexalign = `<div style="display: flex; justify-content: space-between; align-items: center; height: 100px; border: 2px dashed gray; background: #fafafa;">
  <div style="background: coral; padding: 10px;">A</div>
  <div style="background: lightgreen; padding: 20px;">B</div>
  <div style="background: lightskyblue; padding: 10px;">C</div>
</div>
<p style="font-size: 13px; color: gray;">justify-content: space-between spreads items apart · align-items: center vertically centers them</p>`;

DEMOS.flexgrow = `<div style="display: flex; border: 2px dashed gray;">
  <div style="flex-grow: 1; background: coral; padding: 10px;">grow: 1</div>
  <div style="flex-grow: 2; background: lightgreen; padding: 10px;">grow: 2</div>
  <div style="flex-grow: 1; background: lightskyblue; padding: 10px;">grow: 1</div>
</div>
<p style="font-size: 13px; color: gray;">The middle item grows twice as much as the other two, filling extra space proportionally.</p>`;

/* ================= UNIT 5: JAVASCRIPT ================= */

CONTENT.whyjs = `
  ${explain(`
    <p>A frontend webpage is built from three technologies working together: <strong>HTML + CSS + JS = Structure + Presentation + Behaviour</strong>. We've covered Structure (HTML) and Presentation (CSS) — now it's time for Behaviour: <strong>JavaScript</strong>.</p>
  `)}

  <h3>What is JavaScript?</h3>
  <div class="chiprow">
    <span class="chip">A powerful client-side scripting language</span>
    <span class="chip">Used for enhancing user interaction on a webpage</span>
    <span class="chip">Commonly found embedded directly inside HTML code</span>
    <span class="chip">An interpreted language — it doesn't need to be compiled before running</span>
  </div>

  <h3 style="margin-top:20px;">What can JavaScript actually do?</h3>
  <p>It can perform actions on HTML document objects — forms, buttons, links, and more. It can improve a page's design on the fly, validate forms before submission, detect which browser is being used, create cookies, and much more.</p>

  ${mistake(`<p>Despite the name, <strong>Java and JavaScript are NOT related</strong> — "What does Java do in JS? Nothing!" They share a name for historical marketing reasons from the 1990s, but are completely different languages with different creators, syntax, and purposes.</p>`)}

  ${remember(["Frontend = HTML (Structure) + CSS (Presentation) + JS (Behaviour)","JavaScript is client-side, interpreted (no compiling needed), and lives inside or alongside HTML","JavaScript and Java are unrelated languages, despite the similar name"])}
`;

CONTENT.firstscript = `
  ${explain(`<p>Let's write and place our very first JavaScript on a page.</p>`)}

  ${demoCard("firstjs", "Try it: your first JavaScript, inside script tags", 100)}

  <h3>Where can &lt;script&gt; tags go?</h3>
  <p>A <code>&lt;script&gt;</code> tag can be placed inside either <code>&lt;body&gt;</code> or <code>&lt;head&gt;</code>. Notice that unlike some languages, a semicolon at the end of each single-line statement is not strictly mandatory in JavaScript — though it's still considered good practice.</p>

  <h3 style="margin-top:20px;">The &lt;noscript&gt; element</h3>
  <p>Not every visitor has JavaScript enabled. <code>&lt;noscript&gt;</code> offers alternative HTML content that only displays if a browser doesn't support or has disabled JavaScript.</p>
  ${demoCard("noscriptdemo", "Code reference: noscript fallback", 80)}

  <h3 style="margin-top:20px;">External JavaScript</h3>
  <p>Just like CSS, JavaScript can live in its own separate <code>.js</code> file, linked in with a <code>src</code> attribute instead of writing code directly between the tags:</p>
  <div class="card" style="background:var(--bg);">
    <code>&lt;script type="text/javascript" src="script.js"&gt;&lt;/script&gt;</code>
  </div>

  <h3 style="margin-top:20px;">Comments</h3>
  <div class="chiprow">
    <span class="chip">// double slash — single-line comments</span>
    <span class="chip">/* ... */ — multi-line comments</span>
  </div>

  ${remember(["&lt;script&gt; tags can go in &lt;head&gt; or &lt;body&gt;","Semicolons are recommended but not mandatory for single-line statements","&lt;noscript&gt; shows fallback content when JS is unavailable","External JS files are linked with &lt;script src='file.js'&gt;&lt;/script&gt;","// for single-line comments, /* ... */ for multi-line"])}
`;

DEMOS.firstjs = `<!DOCTYPE html>
<html>
<body>
  <script type="text/javascript">
    document.write("Hello World");
  </script>
</body>
</html>`;

DEMOS.noscriptdemo = `<body>
  <script type="text/javascript">
    document.write("Hello World, from JavaScript!");
  </script>
  <noscript>
    Your browser doesn't support or has disabled JavaScript.
  </noscript>
</body>`;

CONTENT.bom = `
  ${explain(`
    <p>The <strong>Browser Object Model (BOM)</strong> refers to all the facilities provided by the browser itself, starting with the <code>window</code> object. It's how JavaScript can interact with the browser window, not just the page content.</p>
  `)}

  <div class="imgcard">
    <svg viewBox="0 0 340 160">
      <circle cx="170" cy="80" r="32" fill="var(--rail)"/>
      <text x="170" y="85" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">WINDOW</text>
      <g font-size="10" fill="var(--ink)">
        <circle cx="80" cy="30" r="26" fill="var(--spark)"/><text x="80" y="34" text-anchor="middle" fill="#fff">Document</text>
        <circle cx="260" cy="30" r="26" fill="var(--spark)"/><text x="260" y="34" text-anchor="middle" fill="#fff">Screen</text>
        <circle cx="60" cy="130" r="26" fill="var(--spark)"/><text x="60" y="134" text-anchor="middle" fill="#fff">Location</text>
        <circle cx="280" cy="130" r="26" fill="var(--spark)"/><text x="280" y="134" text-anchor="middle" fill="#fff">History</text>
        <circle cx="170" cy="150" r="26" fill="var(--spark)"/><text x="170" y="154" text-anchor="middle" fill="#fff">Navigator</text>
      </g>
    </svg>
    <p class="imgcaption">The window object sits at the center, with related objects (Document, Screen, Location, History, Navigator) all hanging off it.</p>
  </div>

  <h3>The Console</h3>
  <p>The browser console is usually part of the developer tools — a handy resource that lets you inspect property values and run ad-hoc JavaScript commands directly. The <code>window</code> object provides a <strong>console object</strong> you use to interact with it programmatically, accessed with <code>window.console</code> or simply <code>console</code>. It also includes a log where you can write your own debugging information from inside your code.</p>

  <h3 style="margin-top:20px;">Opening Developer Tools to debug</h3>
  <div class="chiprow">
    <span class="chip">Firefox — Menu ➤ Web Developer ➤ Toggle Tools</span>
    <span class="chip">Chrome — More tools ➤ Developer tools</span>
  </div>

  ${remember(["BOM = the browser's own objects, starting with window","window.console (or just console) lets you interact with the developer console programmatically","Open dev tools via the browser menu to inspect values and debug errors"])}
`;

CONTENT.htmldom = `
  ${explain(`
    <p>The <strong>Document Object Model (DOM)</strong> defines the logical structure of a document, and the way that document can be accessed and manipulated by code. When a webpage loads, the browser builds a tree-shaped model of the page — the <strong>HTML DOM</strong>.</p>
  `)}

  <div class="imgcard">
    <svg viewBox="0 0 380 150">
      <circle cx="190" cy="20" r="18" fill="var(--rail)"/><text x="190" y="24" text-anchor="middle" font-size="9" fill="#fff">html</text>
      <line x1="190" y1="38" x2="120" y2="65" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <line x1="190" y1="38" x2="260" y2="65" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <circle cx="120" cy="75" r="16" fill="var(--spark)"/><text x="120" y="79" text-anchor="middle" font-size="8" fill="#fff">head</text>
      <circle cx="260" cy="75" r="16" fill="var(--spark)"/><text x="260" y="79" text-anchor="middle" font-size="8" fill="#fff">body</text>
      <line x1="260" y1="90" x2="260" y2="115" stroke="var(--ink-soft)" stroke-width="1.5"/>
      <circle cx="260" cy="125" r="16" fill="var(--volt)"/><text x="260" y="129" text-anchor="middle" font-size="8" fill="var(--ink)">p</text>
      <text x="260" y="148" text-anchor="middle" font-size="8" fill="var(--ink-soft)">"Hello World" (text node)</text>
    </svg>
    <p class="imgcaption">Every tag becomes a node in a tree — html at the root, branching down through head/body, all the way to the actual text inside a tag.</p>
  </div>

  <p>Every element becomes an accessible object: a <code>&lt;form&gt;</code> containing an <code>&lt;input&gt;</code> becomes a form object holding an input object, complete with its own type, id, and value properties — all reachable and changeable through JavaScript.</p>

  ${remember(["DOM = the logical, tree-shaped structure of a loaded document","The browser builds the HTML DOM automatically when a page loads","Every tag, attribute, and piece of text becomes an accessible object in this tree"])}
`;

CONTENT.accessingelements = `
  ${explain(`<p>To change something on a page with JavaScript, you first need to GRAB the right element from the DOM. Three methods do this.</p>`)}

  <div class="tabbar" id="accessTabs">
    <button class="tabbtn active" data-tab="byid">🆔 getElementById()</button>
    <button class="tabbtn" data-tab="byclass">🏷️ getElementsByClassName()</button>
    <button class="tabbtn" data-tab="bytag">🔖 getElementsByTagName()</button>
  </div>

  <div class="tabpanel active" data-tab="byid">
    <div class="card">
      <p>Returns the ONE element with a matching <code>id</code> attribute — returns <code>null</code> if nothing matches. An id should be unique on a page; if more than one element shares it (which shouldn't happen), only the first is returned.</p>
      ${demoCard("byid", "Try it: getElementById + innerHTML", 100)}
    </div>
  </div>

  <div class="tabpanel" data-tab="byclass">
    <div class="card">
      <p>Returns a collection of ALL elements sharing a given class name, as a <strong>NodeList</strong>. Access individual items by index, starting at 0.</p>
      ${demoCard("byclass", "Try it: getElementsByClassName with two matches", 100)}
    </div>
  </div>

  <div class="tabpanel" data-tab="bytag">
    <div class="card">
      <p>Returns a collection of ALL elements with a matching tag name (like every &lt;p&gt; on the page), also as a NodeList.</p>
      ${demoCard("bytag", "Try it: getElementsByTagName for two different tags", 100)}
    </div>
  </div>

  ${remember(["getElementById() → ONE element (unique id)","getElementsByClassName() → a NodeList of elements sharing a class, access by index [0], [1]...","getElementsByTagName() → a NodeList of all matching tags"])}
`;

DEMOS.byid = `<body>
  <p id="p1"></p>
  <script type="text/javascript">
    document.getElementById("p1").innerHTML = "Hello!";
  </script>
</body>`;

DEMOS.byclass = `<body>
  <p class="c1"></p>
  <p class="c1"></p>
  <script type="text/javascript">
    document.getElementsByClassName("c1")[0].innerHTML = "Hello";
    document.getElementsByClassName("c1")[1].innerHTML = "Hi";
  </script>
</body>`;

DEMOS.bytag = `<body>
  <p></p>
  <h1></h1>
  <script type="text/javascript">
    document.getElementsByTagName("p")[0].innerHTML = "Hello";
    document.getElementsByTagName("h1")[0].innerHTML = "Hi";
  </script>
</body>`;

CONTENT.displayoutput = `
  ${explain(`<p>JavaScript can send output to the page (or browser) in four different ways.</p>`)}

  <div class="chiprow">
    <span class="chip">document.write() — writes directly into the HTML output as the page loads</span>
    <span class="chip">innerHTML — writes into (or reads) one specific HTML element's content</span>
    <span class="chip">window.alert() — writes into a pop-up alert box</span>
    <span class="chip">console.log() — writes into the browser's developer console (for debugging, not visible to users)</span>
  </div>

  ${demoCard("alertdemo", "Try it: an alert box", 90)}

  ${mistake(`<p><code>document.write()</code> is handy for quick demos, but using it AFTER a page has fully loaded actually erases the entire existing page content! In real applications, <code>innerHTML</code> or DOM methods are used instead.</p>`)}

  ${remember(["4 display methods: document.write(), innerHTML, window.alert(), console.log()","console.log() is for developers only — users never see it","document.write() after page load will wipe the existing page!"])}
`;

DEMOS.alertdemo = `<body>
  <p>Display an alert box</p>
  <script>
    alert("Hello! I am an alert box!");
  </script>
</body>`;

CONTENT.creatingelements = `
  ${explain(`<p>Beyond just changing existing elements, JavaScript can also build entirely NEW elements and insert them into the page on the fly.</p>`)}

  <h3>Creating a new element</h3>
  <div class="card" style="background:var(--bg);">
    <p style="margin:0;"><code>var p = document.createElement("p");</code></p>
    <p style="margin:4px 0 0;"><code>var text = document.createTextNode("This is a test");</code></p>
    <p style="margin:4px 0 0;"><code>p.appendChild(text);</code></p>
  </div>
  <p style="margin-top:10px;">This creates a brand new &lt;p&gt; element, creates a text node to go inside it, and attaches the text to the paragraph — though note this new element still needs to be appended somewhere in the visible document to actually show up!</p>

  <h3 style="margin-top:20px;">Three ways to modify an existing element</h3>
  <div class="chiprow">
    <span class="chip">Create a text node and append it to the element</span>
    <span class="chip">Set the textContent property directly</span>
    <span class="chip">Set the innerHTML property directly (can include new tags, not just plain text)</span>
  </div>

  ${remember(["document.createElement() makes a new element · document.createTextNode() makes new text","appendChild() attaches one to the other, and attaches it into the page","Modify existing content via: appending a text node, textContent, or innerHTML"])}
`;


/* ================= UNIT 5 (continued): FUNCTIONS, EVENTS & FORM VALIDATION ================= */

/* Helpers used by the new Unit 5 stations */
function codeBlock(text){
  return `<pre class="code-block"><code>${text.replace(/&/g,"&amp;").replace(/</g,"&lt;")}</code></pre>`;
}
function refTable(headers, rows){
  return `<div class="tablewrap"><table class="reftable"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
const BS_CSS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css";
const JQ_SRC = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";

/* ---------- Functions ---------- */
CONTENT.jsfunctions = `
  ${explain(`<p>A <strong>function</strong> is a block of code with a name, designed to do one particular job. It sits quietly until something <em>calls</em> it — then it runs.</p>`)}

  ${analogy(`<p>A function is like a recipe card for "make tea". The card (the function) just sits in the drawer. Only when you say "make tea now" (call it) does anyone follow the steps — and you can use the same card again and again, with different ingredients (parameters) each time.</p>`)}

  <h3>The syntax</h3>
  ${codeBlock(`function name(parameter1, parameter2, ...)
{
    // code to be executed
}`)}
  <div class="chiprow">
    <span class="chip"><strong>function</strong> — the keyword</span>
    <span class="chip"><strong>name</strong> — what you call it by</span>
    <span class="chip"><strong>parameters</strong> — the inputs (a list inside brackets)</span>
    <span class="chip"><strong>body</strong> — the code inside { }</span>
  </div>

  <h3 style="margin-top:20px;">Three ways a function gets invoked (called)</h3>
  <div class="chiprow">
    <span class="chip">When an <strong>event</strong> occurs (e.g. the user clicks a button)</span>
    <span class="chip">When it is called from <strong>other JavaScript code</strong></span>
    <span class="chip">Automatically (<strong>self-invoked</strong>)</span>
  </div>

  <h3 style="margin-top:20px;">Passing values in, and getting a value back</h3>
  <p>A function can simply do something (like <code>document.write(a * b)</code>), or it can <strong>return</strong> an answer to whoever called it. The returned value "lands" in a variable: <code>var x = myFunction(4, 3);</code> puts 12 into <code>x</code>.</p>
  ${demoCard("funcdemo", "Try it: a function that returns a value", 150)}

  ${remember(["A function = a named block of code that runs only when something calls it","function name(parameters) { body }","Invoked by an event, by other code, or automatically","return sends an answer back to the caller — var x = myFunction(4, 3);"])}
`;

DEMOS.funcdemo = `<body>
  <p>Multiply two numbers using a function:</p>
  <button onclick="show()">Click to multiply 4 and 3</button>
  <p id="result"></p>

  <script>
    function multiply(a, b){
      return a * b;               // sends the answer back
    }

    function show(){
      var x = multiply(4, 3);     // function call - the answer lands in x
      document.getElementById("result").innerHTML = "4 x 3 = " + x;
    }
  </script>
</body>`;

/* ---------- Events ---------- */
CONTENT.jsevents = `
  ${explain(`<p>An <strong>event</strong> is something that happens on a page — either something the <em>browser</em> does (like finishing loading) or something the <em>user</em> does (like clicking). JavaScript can "react" to these events by running code.</p>`)}

  <div class="flow-grid">
    <div class="flow-card">
      <h4>🧭 Navigation Events</h4>
      <p style="font-size:14.5px;">Document-level events: selecting a link, moving forward or back in history, opening a new URL, quitting the browser.</p>
    </div>
    <div class="flow-card">
      <h4>👆 Interaction Events</h4>
      <p style="font-size:14.5px;">The user interacts with an element of an HTML form — clicking, typing, choosing, moving the mouse.</p>
    </div>
  </div>

  <h3>How does JavaScript notice an event? Event handlers!</h3>
  <p>When an event occurs, JavaScript uses an <strong>event handler</strong> to run your code. Every event handler's name starts with the word <strong>on</strong>, and each one deals with one type of event.</p>

  ${refTable(["Event handler","When it fires"],[
    ["<code>onchange</code>","An HTML element has been changed"],
    ["<code>onclick</code>","The user clicks an HTML element"],
    ["<code>onmouseover</code>","The user moves the mouse over an element"],
    ["<code>onmouseout</code>","The user moves the mouse away from an element"],
    ["<code>onkeydown</code>","The user pushes a keyboard key"],
    ["<code>onload</code>","The browser has finished loading the page"],
    ["<code>onfocus</code> / <code>onblur</code>","A field gets the cursor / loses the cursor"],
    ["<code>onsubmit</code>","A form is being submitted"]
  ])}

  ${analogy(`<p>Think of a doorbell. The <em>event</em> is someone pressing the button. The <em>event handler</em> is the wiring that connects the button to the bell. The <em>JavaScript code</em> is the ding-dong that finally plays. No press, no ding-dong.</p>`)}

  <h3 style="margin-top:20px;">Which handlers go with which elements?</h3>
  ${refTable(["Element","Handlers it commonly uses"],[
    ["button, submit, link, radio, checkbox","<code>onclick</code> (links also <code>onmouseover</code>)"],
    ["text box, textarea","<code>onchange</code>, <code>onfocus</code>, <code>onblur</code>, <code>onselect</code> (text box also <code>onkeydown</code>)"],
    ["selection (dropdown)","<code>onchange</code>, <code>onfocus</code>, <code>onblur</code>"],
    ["document / body","<code>onload</code>, <code>onunload</code>"],
    ["form","<code>onsubmit</code>"]
  ])}

  ${remember(["Event = something the browser or user does","Event handler names start with on — onclick, onchange, onmouseover...","Each handler listens for one type of event and then runs your JavaScript","Exercise 9 uses onchange, onfocus, onblur, onclick and onmouseover"])}
`;

CONTENT.eventreg = `
  ${explain(`<p>There are two classic ways to connect an event to your code. Both do the same job; they just live in different places.</p>`)}

  <div class="tabbar" id="regTabs">
    <button class="tabbtn active" data-tab="reghtml">📄 In the HTML (inline)</button>
    <button class="tabbtn" data-tab="regjs">📜 In the JavaScript</button>
  </div>

  <div class="tabpanel active" data-tab="reghtml">
    <div class="card">
      <p>Write the handler as an <strong>attribute</strong> on the HTML element itself:</p>
      ${codeBlock(`<element eventHandler="functionCall()">
      (or)
<element eventHandler="myScript">`)}
      ${demoCard("eventinline", "Try it: onclick calling a function", 140)}
    </div>
  </div>

  <div class="tabpanel" data-tab="regjs">
    <div class="card">
      <p>Keep the HTML clean and attach the handler from your script, using the element's <code>id</code>:</p>
      ${codeBlock(`object.eventHandler = function() { myScript };
          (or)
object.eventHandler = function() { functionCall() };`)}
      ${demoCard("eventjs", "Try it: the same button, wired up from JavaScript", 140)}
    </div>
  </div>

  <h3 style="margin-top:22px;">A classic example: the light bulb</h3>
  <p>Two buttons change which picture an <code>&lt;img&gt;</code> shows, by changing its <code>src</code> property. Notice how a handler can hold one short line of JavaScript directly.</p>
  ${demoCard("bulbdemo", "Try it: Turn on / Turn off", 220)}

  ${mistake(`<p>Inline handlers mix behaviour into your HTML, which gets messy in big pages. Writing handlers in your JavaScript keeps <strong>structure (HTML)</strong> and <strong>behaviour (JS)</strong> separate — the same idea as keeping CSS in its own file.</p>`)}

  ${remember(["Inline: <button onclick=\"myFunc()\"> — handler written as an HTML attribute","In JS: document.getElementById(\"button1\").onclick = function(){ ... }","For the JS way, the element needs an id so you can grab it first","A handler can call a function or hold a short script directly"])}
`;

DEMOS.eventinline = `<body>
  <p>Display an alert box.</p>
  <button onclick="myFunc()">Try it</button>

  <script>
    function myFunc(){
      alert("Hello! I am an alert box!");
    }
  </script>
</body>`;

DEMOS.eventjs = `<body>
  <p>Display an alert box.</p>
  <button id="button1">Try it</button>

  <script>
    document.getElementById("button1").onclick = function(){
      alert("Hello! I am an alert box!");
    };
  </script>
</body>`;

DEMOS.bulbdemo = `<body>
  <button onclick="document.getElementById('Im1').src='bulbon.svg'">Turn on</button>

  <img id="Im1" src="bulboff.svg" width="60" alt="A light bulb">

  <button onclick="document.getElementById('Im1').src='bulboff.svg'">Turn off</button>
</body>`;

/* ---------- Dynamic styling ---------- */
CONTENT.dynstyle = `
  ${explain(`<p>JavaScript can also change how an element <em>looks</em>, by reaching into its CSS. This is called <strong>dynamic styling</strong>.</p>`)}

  <h3>The syntax</h3>
  ${codeBlock(`object.style.cssProperty = "value";`)}

  <p>There's one small twist: CSS property names with a hyphen become <strong>camelCase</strong> in JavaScript — <code>background-color</code> turns into <code>backgroundColor</code>, and <code>border-bottom</code> turns into <code>borderBottom</code>.</p>

  ${codeBlock(`document.getElementById("id1").style.backgroundColor = "red";

document.getElementById("div1").style.borderBottom = "2px solid red";`)}

  ${demoCard("dynstyle", "Try it: change the style of two elements", 200)}

  ${analogy(`<p>CSS is the outfit an element wears. <code>.style</code> lets JavaScript act like a stylist who can swap one piece of the outfit — just the shirt colour, just the hat — while the person (the element) stays the same.</p>`)}

  ${remember(["object.style.cssProperty = \"value\";","Hyphenated CSS names become camelCase: background-color → backgroundColor","Exercises 9 and 10 use this to colour fields on focus, blur and error"])}
`;

DEMOS.dynstyle = `<body>
  <p id="id1">I can change my background colour.</p>
  <div id="div1" style="padding:6px;">I can get a border underneath.</div>
  <br>
  <button onclick="document.getElementById('id1').style.backgroundColor = 'gold'">Colour it</button>
  <button onclick="document.getElementById('div1').style.borderBottom = '3px solid red'">Add border</button>
  <button onclick="resetAll()">Reset</button>

  <script>
    function resetAll(){
      document.getElementById('id1').style.backgroundColor = '';
      document.getElementById('div1').style.borderBottom = '';
    }
  </script>
</body>`;

/* ---------- addEventListener & propagation ---------- */
CONTENT.addlistener = `
  ${explain(`<p><code>addEventListener()</code> is a more modern way to attach a handler. Instead of <em>assigning</em> one function to <code>onclick</code>, you <em>add</em> a listener — and you can add as many as you like to the same element.</p>`)}

  <h3>Three registration styles side by side</h3>
  ${refTable(["Style","Looks like","Limit"],[
    ["Inline registration","<code>&lt;button onclick=\"go()\"&gt;</code>","Mixes JS into the HTML"],
    ["Traditional method","<code>btn.onclick = function(){...}</code>","Only ONE function per event — a second assignment replaces the first"],
    ["addEventListener","<code>btn.addEventListener(\"click\", function(){...})</code>","None — add as many as you want"]
  ])}

  ${demoCard("listenerdemo", "Try it: two listeners on one button", 130)}

  <h3 style="margin-top:22px;">Event propagation</h3>
  <p>What happens when you click a button that sits inside a <code>div</code>, which sits inside another <code>div</code>? You clicked all three at once! The event travels through the nested elements — this is <strong>event propagation</strong>. By default it <strong>bubbles</strong> from the innermost element outwards.</p>
  ${demoCard("propagation", "Try it: click the button and watch the order", 200)}

  ${analogy(`<p>Drop a pebble in a pond: the ripple starts where the pebble lands (the button) and spreads outwards (to the inner div, then the outer div). Bubbling is that outward ripple.</p>`)}

  ${more("🔬 Going deeper: the capture phase","<p>Events actually travel in two directions: first <strong>down</strong> from the outermost element to the target (the <em>capture</em> phase), then back <strong>up</strong> (the <em>bubble</em> phase). <code>addEventListener</code> takes an optional third value, <code>true</code>, to listen during capture instead of bubbling. Most everyday code simply uses the default bubbling.</p>")}

  ${remember(["addEventListener(\"event\", function) lets you attach many handlers to one element","The traditional onclick = ... can hold only one function","Propagation = the event travelling through nested elements","By default events bubble up: target first, then parent, then grandparent"])}
`;

DEMOS.listenerdemo = `<body>
  <button id="btn">Click me</button>
  <p id="out"></p>

  <script>
    var btn = document.getElementById("btn");
    var out = document.getElementById("out");

    btn.addEventListener("click", function(){
      out.innerHTML += "Handler 1 ran. ";
    });
    btn.addEventListener("click", function(){
      out.innerHTML += "Handler 2 ran too! ";
    });
  </script>
</body>`;

DEMOS.propagation = `<style>
  #outer{ padding:18px; background:#cfe8ff; }
  #inner{ padding:18px; background:#ffe9b3; margin-top:8px; }
</style>
<body>
  <div id="outer">Outer div
    <div id="inner">Inner div
      <button id="b">Button</button>
    </div>
  </div>
  <p id="log">Order of events: </p>

  <script>
    function log(msg){ document.getElementById("log").innerHTML += msg + " &rarr; "; }

    document.getElementById("b").addEventListener("click", function(){ log("button"); });
    document.getElementById("inner").addEventListener("click", function(){ log("inner div"); });
    document.getElementById("outer").addEventListener("click", function(){ log("outer div"); });
  </script>
</body>`;

/* ---------- Validation: why ---------- */
CONTENT.jsvalidation = `
  ${explain(`<p><strong>Form validation</strong> means making sure the values a person types into a form are correct <em>before</em> the form is used. It protects your data — and saves users from silly mistakes.</p>`)}

  <h3>What can we check?</h3>
  <div class="chiprow">
    <span class="chip">Preventing <strong>blank</strong> values</span>
    <span class="chip">The <strong>type</strong> of value — integer, currency, phone number, address, email, date, credit card number</span>
    <span class="chip">The <strong>format and range</strong> — e.g. a pincode must be a 6-digit integer</span>
    <span class="chip">That values <strong>fit together</strong> — e.g. two password boxes must match</span>
  </div>

  <h3 style="margin-top:20px;">Where does the checking happen?</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>🖥️ Client-side</h4>
      <p style="font-size:14.5px;">Done by the <strong>web browser</strong>, <em>before</em> the input is sent to the server. Instant feedback — this is what JavaScript and HTML5 give us.</p>
    </div>
    <div class="flow-card">
      <h4>🗄️ Server-side</h4>
      <p style="font-size:14.5px;">Done by the <strong>web server</strong>, <em>after</em> the input has been sent. Always needed for security, because browser checks can be bypassed.</p>
    </div>
  </div>

  <h3 style="margin-top:20px;">Two jobs of form validation</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>1️⃣ Basic validation</h4>
      <p style="font-size:14.5px;">Check that all the <strong>mandatory fields</strong> are filled in.</p>
    </div>
    <div class="flow-card">
      <h4>2️⃣ Data format validation</h4>
      <p style="font-size:14.5px;">Check that what was entered has the <strong>correct form and value</strong>. Your code must include logic to test correctness.</p>
    </div>
  </div>

  ${analogy(`<p>Validation is the security desk at a building entrance. Client-side validation is the friendly receptionist who says "you forgot to sign the form" before you walk in. Server-side validation is the locked door that checks again — because someone might have sneaked past the receptionist.</p>`)}

  ${remember(["Validation = making sure form input is correct","Check for blanks, types, formats/ranges, and values that fit together","Client-side (browser, before sending) vs server-side (server, after sending)","Two jobs: basic validation (mandatory fields) and data format validation"])}
`;

/* ---------- Constraint validation: HTML attributes ---------- */
CONTENT.constraintattrs = `
  ${explain(`<p>HTML5 gives us an easy way to validate: <strong>constraint validation</strong>. When a form is submitted, the browser runs an algorithm that checks every field's rules. You set the rules with simple attributes — no JavaScript needed to get started.</p>`)}

  <p>Constraint validation has three parts: <strong>HTML input attributes</strong> (this station), <strong>CSS pseudo-selectors</strong>, and <strong>DOM properties and methods</strong> (the next stations).</p>

  ${refTable(["Attribute","What it does","Example"],[
    ["<code>required</code>","Field must not be empty","<code>&lt;input type=\"text\" required&gt;</code>"],
    ["<code>pattern</code>","Value must match a regular expression","<code>pattern=\"[A-Za-z]{3,}\"</code>"],
    ["<code>minlength</code> / <code>maxlength</code>","Limits the number of characters","<code>minlength=\"5\" maxlength=\"10\"</code>"],
    ["<code>min</code> / <code>max</code>","Limits a number's range","<code>min=\"18\" max=\"60\"</code>"],
    ["<code>step</code>","Allowed increments","<code>min=\"0\" max=\"100\" step=\"10\"</code>"],
    ["<code>type</code>","Forces a format (email, url, number, date...)","<code>&lt;input type=\"email\"&gt;</code>"],
    ["<code>readonly</code>","User can't edit it, but it IS submitted","<code>&lt;input type=\"text\" readonly&gt;</code>"],
    ["<code>disabled</code>","User can't use it, and it is NOT submitted","<code>&lt;input type=\"text\" disabled&gt;</code>"]
  ])}

  <h3>Try 1 — required</h3>
  <p>Press Submit with the box empty. The browser's own message appears, and you can read it from JavaScript with the <code>validationMessage</code> property (more on that soon).</p>
  ${demoCard("valrequired", "Try it: a required field", 130)}

  <h3 style="margin-top:20px;">Try 2 — min, max, step</h3>
  <p>Type 17, 61, or 19 and submit. With <code>min="18" max="60" step="2"</code> only 18, 20, 22 ... 60 are accepted.</p>
  ${demoCard("valrange", "Try it: a number with a range and a step", 150)}

  ${mistake(`<p><code>disabled</code> and <code>readonly</code> look similar but behave differently: a <strong>disabled</strong> field is skipped entirely (not validated, not submitted), while a <strong>readonly</strong> field is still sent with the form.</p>`)}

  ${remember(["Constraint validation = the browser checks your rules when a form is submitted","Key attributes: required, pattern, minlength/maxlength, min/max, step, type","readonly is submitted; disabled is not","Three parts: HTML attributes, CSS pseudo-selectors, DOM properties/methods"])}
`;

DEMOS.valrequired = `<form>
  Name: <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>`;

DEMOS.valrange = `<form>
  <label for="age">Age (18-60):</label>
  <input type="number" id="age" name="age" min="18" max="60" step="2" required>
  <br><br>
  <button type="submit">Submit</button>
</form>`;

/* ---------- Regex & pattern ---------- */
CONTENT.regexpattern = `
  ${explain(`<p>The <code>pattern</code> attribute lets you describe the exact <em>shape</em> a value must have, using a <strong>regular expression</strong> — a short code for a search pattern.</p>`)}

  <p>A regular expression can be a single character or a clever combination. You can use one to describe what you are looking for in some text — or what a valid input must look like.</p>

  <h3>Syntax</h3>
  ${codeBlock(`/pattern/modifiers;

Example:  /stella/i      (modifiers are optional)`)}

  ${refTable(["Modifier","Meaning"],[
    ["<code>g</code>","Global match — find all matches, not just the first"],
    ["<code>m</code>","Multiline matching"],
    ["<code>i</code>","Case-insensitive — stella, Stella, STELLA and sTeLLa all match"]
  ])}

  <h3 style="margin-top:20px;">The building blocks</h3>
  ${refTable(["Symbol","Meaning"],[
    ["<code>^</code>","Matches the beginning of the input"],
    ["<code>$</code>","Matches the end of the input"],
    ["<code>*</code>","The preceding item, 0 or more times"],
    ["<code>+</code>","The preceding item, 1 or more times"],
    ["<code>?</code>","The preceding item, 0 or 1 time"],
    ["<code>.</code>","Any single character except a new line"],
    ["<code>[xyz]</code>","Character set — any ONE of x, y or z"],
    ["<code>[^xyz]</code>","Negated set — anything EXCEPT x, y or z"],
    ["<code>{3}</code>","Exactly 3 of the preceding item"]
  ])}

  <h3 style="margin-top:20px;">Two patterns you'll use again and again</h3>
  <div class="flow-grid">
    <div class="flow-card">
      <h4>🔤 Letters only</h4>
      <p style="font-size:14.5px;"><code>^[A-Za-z]+$</code><br>[A-Za-z] = any uppercase or lowercase letter, + = one or more of them, so a whole value of letters and nothing else.</p>
    </div>
    <div class="flow-card">
      <h4>🔢 Numbers only</h4>
      <p style="font-size:14.5px;"><code>^[0-9]+$</code><br>[0-9] = any digit. Change it to <code>^[0-9]{3}$</code> to allow exactly three digits.</p>
    </div>
  </div>

  ${demoCard("regexletters", "Try it: letters only (try 'Stella' and then 'Stella2')", 140)}
  ${demoCard("regexnum", "Try it: exactly three digits", 140)}

  ${more("💡 Good to know","<p>In the HTML <code>pattern</code> attribute the browser automatically requires the pattern to match the <strong>whole</strong> value, so writing <code>^</code> and <code>$</code> is optional there. They matter more when you use regular expressions in JavaScript code. Also add a <code>title</code> attribute — its text is shown as a hint inside the browser's error message.</p>")}

  ${remember(["pattern=\"...\" = value must match this regular expression","/pattern/modifiers — g (global), i (ignore case), m (multiline)","^ start, $ end, + one or more, * zero or more, [ ] a set of characters","Letters only: ^[A-Za-z]+$ · Digits only: ^[0-9]+$ · Exactly 10 digits: ^[0-9]{10}$"])}
`;

DEMOS.regexletters = `<form>
  <label for="name">Enter your name (letters only):</label>
  <input type="text" id="name" name="name" pattern="^[A-Za-z]+$" title="Letters only, no spaces or digits" required>
  <button type="submit">Submit</button>
</form>`;

DEMOS.regexnum = `<form>
  <label for="number">Enter a three-digit number:</label>
  <input type="text" id="number" name="number" pattern="^[0-9]{3}$" title="Exactly three digits" required>
  <input type="submit">
</form>`;

/* ---------- CSS pseudo-selectors ---------- */
CONTENT.constraintcss = `
  ${explain(`<p>CSS can colour a form field <em>according to whether its value is valid</em> — no JavaScript at all. This gives instant visual feedback, which is great UX.</p>`)}

  ${refTable(["Pseudo-class","Selects input elements that..."],[
    ["<code>:required</code>","have the <code>required</code> attribute"],
    ["<code>:optional</code>","do NOT have the <code>required</code> attribute"],
    ["<code>:valid</code>","currently hold valid values (per required, pattern, min, max, type...)"],
    ["<code>:invalid</code>","currently hold invalid values"],
    ["<code>:disabled</code>","have the <code>disabled</code> attribute"],
    ["<code>:focus</code>","currently have the cursor in them"]
  ])}

  <h3>Syntax and combining</h3>
  ${codeBlock(`selector:pseudo-class {
    property: value;
}

/* combine them for precise control */
input:required:invalid { border: 2px solid red;   }
input:required:valid   { border: 2px solid green; }`)}

  <p>Try it: the email box is required, so it starts red; the moment you type a proper email address it turns green. The optional box has a dashed grey border, and whichever box you click into turns yellow.</p>
  ${demoCard("pseudodemo", "Try it: valid / invalid / optional / focus", 190)}

  ${mistake(`<p>A required empty box is <code>:invalid</code> from the very moment the page loads, so it shows red before the user has done anything wrong. That can feel harsh — many designers only show the red after the user has tried to type or submit.</p>`)}

  ${remember(["Pseudo-classes style fields by their state: :valid, :invalid, :required, :optional, :disabled, :focus","Combine them: input:required:invalid","Pure CSS — no JavaScript needed for visual feedback"])}
`;

DEMOS.pseudodemo = `<style>
  input:required:invalid { border: 2px solid red; }
  input:required:valid   { border: 2px solid green; }
  input:optional         { border: 1px dashed gray; }
  input:focus            { background-color: yellow; }
</style>

<p>Email (required):
  <input type="email" placeholder="Enter your email" required></p>
<p>Nickname (optional):
  <input type="text"></p>`;

/* ---------- DOM properties and methods ---------- */
CONTENT.constraintdom = `
  ${explain(`<p>The third part of constraint validation lets <strong>JavaScript</strong> ask a field "are you valid, and if not, why?" — and even change the message it shows. This is the <strong>DOM Constraint Validation API</strong>, the heart of Exercise 10.</p>`)}

  <h3>Properties (things you can read)</h3>
  ${refTable(["Property","What it tells you"],[
    ["<code>validity</code>","An object holding many true/false flags about the field (see below)"],
    ["<code>validationMessage</code>","The message the browser will display when the field is invalid"],
    ["<code>willValidate</code>","Whether the field can be validated at all — false only when it is disabled"]
  ])}

  <h3 style="margin-top:20px;">Inside validity: the flags</h3>
  <p>Use <code>field.validity.valid</code> to ask the big yes/no question, or check one specific flag to find out exactly <em>what</em> went wrong.</p>
  ${refTable(["validity flag","True when..."],[
    ["<code>valueMissing</code>","a required field is empty"],
    ["<code>typeMismatch</code>","the value doesn't fit its type (e.g. not an email)"],
    ["<code>patternMismatch</code>","the value doesn't match its pattern"],
    ["<code>rangeUnderflow</code>","the value is less than min"],
    ["<code>rangeOverflow</code>","the value is greater than max"],
    ["<code>stepMismatch</code>","the value doesn't fit the step"],
    ["<code>tooLong</code>","the value is longer than maxlength"],
    ["<code>customError</code>","a custom message has been set with setCustomValidity()"],
    ["<code>valid</code>","everything is fine"]
  ])}
  ${demoCard("validitydemo", "Try it: patternMismatch (type 4 digits, then 3 digits)", 110)}

  <h3 style="margin-top:20px;">Methods (things you can do)</h3>
  ${refTable(["Method","What it does"],[
    ["<code>checkValidity()</code>","Returns true if the field holds valid data, false if not"],
    ["<code>setCustomValidity(msg)</code>","Sets your own message (the validationMessage). An empty string \"\" means 'no custom error'"]
  ])}

  <h3 style="margin-top:20px;">checkValidity() + validationMessage</h3>
  ${demoCard("validmsg", "Try it: dept number between 201 and 250", 120)}

  <h3 style="margin-top:20px;">Writing your own message with setCustomValidity()</h3>
  <p>The browser's default messages are generic. With <code>setCustomValidity()</code> you can say exactly what you mean — in friendlier words, in your own style.</p>
  ${demoCard("customvalid", "Try it: a friendlier custom message", 120)}

  ${mistake(`<p>Once you call <code>setCustomValidity("some message")</code>, the field stays <strong>invalid forever</strong> — even after the user fixes the value — until you clear it by calling <code>setCustomValidity("")</code>. That's why the demo above clears the old message at the start of every check.</p>`)}

  ${remember(["validity → flags like valueMissing, patternMismatch, rangeOverflow, valid","validationMessage → the text the browser would show","willValidate → false only if the field is disabled","checkValidity() → true/false; setCustomValidity(\"msg\") → your own message; setCustomValidity(\"\") → clear it","Exercise 10 combines all of these"])}
`;

DEMOS.validitydemo = `<input id="num" pattern="[0-9]{4}">
<button onclick="checkPattern()">Check</button>

<script>
  function checkPattern(){
    var input = document.getElementById("num");
    if(input.validity.patternMismatch){
      alert("Pattern mismatch! Please enter 4 digits.");
    } else {
      alert("Pattern matched!");
    }
  }
</script>`;

DEMOS.validmsg = `<label>Enter your dept number (201-250):</label>
<input id="id1" type="number" min="201" max="250" required>
<button onclick="validDeptNo()">OK</button>

<script>
  function validDeptNo(){
    var inputnum = document.getElementById("id1");
    if(!inputnum.checkValidity()){
      alert(inputnum.validationMessage);   // show the browser's message in an alert box
    } else {
      alert("Valid department number!");
    }
  }
</script>`;

DEMOS.customvalid = `<label>Enter your dept number (201-250):</label>
<input id="id1" type="number" min="201" max="250" required>
<button onclick="validDeptNo()">OK</button>

<script>
  function validDeptNo(){
    var inputnum = document.getElementById("id1");
    inputnum.setCustomValidity("");          // clear any old custom message first
    if(!inputnum.checkValidity()){
      inputnum.setCustomValidity("Dept number must be between 201 and 250");
      alert(inputnum.validationMessage);
    } else {
      alert("Looks good!");
    }
  }
</script>`;

/* ================= UNIT 5 (continued): BROWSER, WEB APIs & LIBRARIES ================= */

CONTENT.bomextra = `
  ${explain(`<p>Earlier we met the <code>window</code> object at the centre of the BOM. Four more objects hang off it, each giving you a different kind of information about the browser.</p>`)}

  <div class="tabbar" id="bomTabs">
    <button class="tabbtn active" data-tab="bscreen">🖥️ Screen</button>
    <button class="tabbtn" data-tab="blocation">📍 Location</button>
    <button class="tabbtn" data-tab="bhistory">🕘 History</button>
    <button class="tabbtn" data-tab="bnavigator">🧭 Navigator</button>
  </div>

  <div class="tabpanel active" data-tab="bscreen">
    <div class="card">
      <p><strong>screen</strong> provides details about the <em>device</em> the browser is running on — its width, height and colour depth. In the browser console, type <code>window.screen</code>.</p>
    </div>
  </div>

  <div class="tabpanel" data-tab="blocation">
    <div class="card">
      <p><strong>location</strong> holds the web address of the document loaded in the window. You can reach it through <code>window.location</code>, <code>document.location</code> or simply <code>location</code>.</p>
      ${codeBlock(`window.location;
alert(location);
location.assign("https://www.gmail.com");   // go to a page (back button works)
location = "https://www.gmail.com";         // same idea
location.replace("https://www.google.com"); // go there, and forget this page in history`)}
    </div>
  </div>

  <div class="tabpanel" data-tab="bhistory">
    <div class="card">
      <p><strong>history</strong> tracks the pages loaded in one window. It is what powers the browser's Back button.</p>
      ${codeBlock(`window.history;
history.back();      // one page back
history.forward();   // one page forward
history.go(-1);      // go back 1 (use 2 to go forward 2)`)}
      <p>There are also <code>pushState()</code> and <code>replaceState()</code> methods that let a page change the address and history without reloading.</p>
    </div>
  </div>

  <div class="tabpanel" data-tab="bnavigator">
    <div class="card">
      <p><strong>navigator</strong> provides information about the browser and device itself — its name, language and so on. In the console, type <code>window.navigator</code>.</p>
    </div>
  </div>

  ${demoCard("bomdemo", "Try it: reading screen, navigator and history values", 190)}

  ${mistake(`<p>The difference between <code>location.assign()</code> and <code>location.replace()</code>: after <code>assign</code> the user can press Back to return; after <code>replace</code> the old page is gone from history, so Back skips it.</p>`)}

  ${remember(["screen → device details · location → the page's address · history → visited pages (Back button) · navigator → browser/device info","All four hang off the window object","location.assign() keeps history; location.replace() replaces the current entry","history.back(), history.forward(), history.go(n)"])}
`;

DEMOS.bomdemo = `<body>
  <div id="out"></div>
  <script>
    var t = "";
    t += "<b>screen</b> size: " + screen.width + " x " + screen.height + " pixels<br>";
    t += "<b>screen</b> colour depth: " + screen.colorDepth + " bits<br>";
    t += "<b>window</b> inner width: " + window.innerWidth + " px<br>";
    t += "<b>navigator</b> language: " + navigator.language + "<br>";
    t += "<b>navigator</b> online: " + navigator.onLine + "<br>";
    t += "<b>history</b> length: " + history.length + " page(s) in this tab";
    document.getElementById("out").innerHTML = t;
  </script>
</body>`;

CONTENT.webapis = `
  ${explain(`<p>Browsers give JavaScript some extra powers through the <code>window</code> object — remembering things on the visitor's computer, and running code after a delay. These come in three groups: <strong>cookies, storage and timers</strong>.</p>`)}

  <h3>1. Cookies — tiny notes stored on the client</h3>
  <p>Storing data on the client helps performance and user experience. For a long time this was done only with <strong>cookies</strong>: small pieces of data kept in the browser. All cookies for a page arrive as <em>one string</em> in <code>document.cookie</code>, separated by semicolons, each shaped like <code>name=value</code>.</p>
  ${codeBlock(`document.cookie = "Test1=Test value";           // setting a cookie

// reading gives all cookies in one string:
// Test1=Test cookie #1; Test2=Test cookie #2; Test3=Test cookie #3;

document.cookie = "Test=Test cookie; expires=Sun, 30 Oct 2030 12:00:00 UTC";`)}
  ${refTable(["Cookie setting","Meaning"],[
    ["<code>domain=</code>","Which domain may access this cookie"],
    ["<code>expires=</code>","When the cookie should expire (a UTC date string)"],
    ["<code>max-age=</code>","Expire after this many seconds"],
    ["<code>path=</code>","Where on the site the cookie applies"],
    ["<code>secure</code>","Only send the cookie over https"]
  ])}

  <h3 style="margin-top:22px;">2. Web Storage — a bigger, simpler notebook</h3>
  <p>HTML5 added two storage mechanisms, <code>localStorage</code> and <code>sessionStorage</code>. Both are properties of <code>window</code> and return a <strong>Storage</strong> object holding key/value pairs — both must be <strong>strings</strong>.</p>
  <div class="flow-grid">
    <div class="flow-card"><h4>🗓️ localStorage</h4><p style="font-size:14.5px;">Kept <strong>indefinitely</strong>, even after the browser is closed.</p></div>
    <div class="flow-card"><h4>⏳ sessionStorage</h4><p style="font-size:14.5px;">Cleared when the browser (tab) is <strong>closed</strong>.</p></div>
  </div>
  ${codeBlock(`localStorage.setItem("student", "Harini");
var who = localStorage.getItem("student");
localStorage.removeItem("student");`)}
  ${demoCard("storagedemo", "Try it: save, load and remove a name (works when the portal is hosted online)", 170)}

  <h3 style="margin-top:22px;">3. Timers — do it later, or keep doing it</h3>
  ${refTable(["Function","What it does"],[
    ["<code>setTimeout(fn, ms)</code>","Calls the function ONCE, after the given number of milliseconds"],
    ["<code>setInterval(fn, ms)</code>","Calls the function AGAIN and AGAIN, every ms milliseconds"],
    ["<code>clearTimeout()</code> / <code>clearInterval()</code>","Cancels a timer before it fires / stops a repeating one"]
  ])}
  ${demoCard("timerdemo", "Try it: a counting timer and a delayed message", 210)}

  ${more("🔎 Other browser interface elements","<p>The <code>window</code> object also exposes the browser's own interface bars as objects: <code>locationbar</code>, <code>menubar</code>, <code>personalbar</code>, <code>scrollbar</code>, <code>statusbar</code> and <code>toolbar</code>.</p>")}

  ${mistake(`<p><code>localStorage</code> only stores <strong>strings</strong>. Saving the number 5 comes back as the text "5", so convert it with <code>Number()</code> or <code>parseInt()</code> before doing maths with it.</p>`)}

  ${remember(["Cookies: small name=value strings in document.cookie; set expiry with expires= or max-age=","localStorage is kept indefinitely; sessionStorage is cleared when the browser closes","Storage methods: setItem(), getItem(), removeItem() — keys and values are strings","setTimeout runs once after a delay; setInterval repeats; clear... stops them"])}
`;

DEMOS.storagedemo = `<body>
  <input id="nm" placeholder="Type your name">
  <button onclick="save()">Save</button>
  <button onclick="load()">Load</button>
  <button onclick="removeIt()">Remove</button>
  <p id="msg"></p>

  <script>
    function show(t){ document.getElementById("msg").innerHTML = t; }

    function save(){
      try {
        localStorage.setItem("student", document.getElementById("nm").value);
        show("Saved!");
      } catch(e){ show("Storage is blocked in this view: " + e.name); }
    }
    function load(){
      try { show("Stored name: " + localStorage.getItem("student")); }
      catch(e){ show("Storage is blocked in this view: " + e.name); }
    }
    function removeIt(){
      try { localStorage.removeItem("student"); show("Removed."); }
      catch(e){ show("Storage is blocked in this view: " + e.name); }
    }
  </script>
</body>`;

DEMOS.timerdemo = `<body>
  <p>Seconds counted: <b id="sec">0</b></p>
  <button onclick="startIt()">Start</button>
  <button onclick="stopIt()">Stop</button>
  <button onclick="delayed()">Say hi in 2 seconds</button>
  <p id="msg"></p>

  <script>
    var n = 0;
    var timer = null;

    function startIt(){
      if(timer) return;                       // don't start two timers
      timer = setInterval(function(){
        n++;
        document.getElementById("sec").innerHTML = n;
      }, 1000);                               // every 1000 ms = 1 second
    }
    function stopIt(){
      clearInterval(timer);
      timer = null;
    }
    function delayed(){
      document.getElementById("msg").innerHTML = "Waiting...";
      setTimeout(function(){
        document.getElementById("msg").innerHTML = "Hi! Two seconds have passed.";
      }, 2000);
    }
  </script>
</body>`;

CONTENT.jquery = `
  ${explain(`<p><strong>jQuery</strong> is a lightweight "write less, do more" JavaScript <em>library</em>. It makes the jobs we've done in this unit — finding elements, changing them, reacting to clicks — much shorter and easier.</p>`)}

  <h3>What it can do</h3>
  <div class="chiprow">
    <span class="chip">HTML / DOM manipulation</span>
    <span class="chip">CSS manipulation</span>
    <span class="chip">HTML event methods</span>
    <span class="chip">Effects and animations</span>
    <span class="chip">AJAX</span>
    <span class="chip">Utilities</span>
  </div>

  <h3 style="margin-top:20px;">Getting jQuery onto your page</h3>
  <p>Either <strong>download</strong> the file and keep it in your website's folder, or load it from a <strong>CDN</strong> (Content Delivery Network) — a fast server that hosts it for everyone.</p>
  ${codeBlock(`<!-- Downloaded file, in the same folder as your website -->
<head><script src="jquery-4.0.0.min.js"></script></head>

<!-- Google CDN -->
<script src="${JQ_SRC}"></script>`)}
  <p style="font-size:14.5px;">Microsoft also hosts it at <code>https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.7.1.min.js</code>. Note: the CDNs only carry versions up to 3.7.1.</p>

  <h3 style="margin-top:20px;">The syntax: $(selector).action()</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>$</h4><p style="font-size:14.5px;">The dollar sign defines / accesses jQuery</p></div>
    <div class="flow-card"><h4>(selector)</h4><p style="font-size:14.5px;">"Query" (find) the HTML elements</p></div>
    <div class="flow-card"><h4>.action()</h4><p style="font-size:14.5px;">What to do to the elements found</p></div>
  </div>

  ${refTable(["Example","What it hides"],[
    ["<code>$(this).hide()</code>","the current element"],
    ["<code>$(\"p\").hide()</code>","all &lt;p&gt; elements (element selector)"],
    ["<code>$(\".test\").hide()</code>","all elements with class=\"test\" (class selector)"],
    ["<code>$(\"#test\").hide()</code>","the element with id=\"test\" (id selector)"]
  ])}

  <h3 style="margin-top:20px;">Wait for the page: the ready event</h3>
  ${codeBlock(`$(document).ready(function(){
    // jQuery methods go here...
});`)}
  <p>This stops jQuery code from running before the document has finished loading.</p>

  ${demoCard("jqdemo", "Try it: jQuery selectors and click events", 190)}

  <h3 style="margin-top:20px;">Getters, setters and CSS classes</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4>Get / set content</h4><p style="font-size:14.5px;"><code>text()</code>, <code>html()</code>, <code>val()</code></p></div>
    <div class="flow-card"><h4>Work with classes</h4><p style="font-size:14.5px;"><code>addClass()</code>, <code>removeClass()</code>, <code>toggleClass()</code>, <code>css()</code></p></div>
  </div>
  ${demoCard("jqdemo2", "Try it: text(), val(), addClass(), toggleClass(), css()", 230)}

  <p style="font-size:14.5px;">Want to practise more? The W3Schools jQuery tutorial is a friendly place to start: <a href="https://www.w3schools.com/jquery/default.asp" target="_blank" rel="noopener">w3schools.com/jquery</a>.</p>

  ${remember(["jQuery = a lightweight JavaScript library: write less, do more","Add it by downloading the file or using a CDN link","Syntax: $(selector).action()","Wrap code in $(document).ready(function(){ ... });","Selectors: \"p\" (element), \".test\" (class), \"#test\" (id)","text(), html(), val() read/write content · addClass(), removeClass(), toggleClass(), css() handle styling"])}
`;

DEMOS.jqdemo = `<script src="${JQ_SRC}"></script>
<body>
  <p>I am a plain paragraph.</p>
  <p class="test">I have class "test".</p>
  <p id="demo">I have id "demo".</p>

  <button id="b1">Hide all p</button>
  <button id="b2">Hide .test</button>
  <button id="b3">Hide #demo</button>
  <button id="b4">Show all</button>

  <script>
    $(document).ready(function(){
      $("#b1").click(function(){ $("p").hide(); });
      $("#b2").click(function(){ $(".test").hide(); });
      $("#b3").click(function(){ $("#demo").hide(); });
      $("#b4").click(function(){ $("p").show(); });
    });
  </script>
</body>`;

DEMOS.jqdemo2 = `<script src="${JQ_SRC}"></script>
<style>
  .hl { background: yellow; font-weight: bold; }
</style>
<body>
  <p id="p1">Original text</p>
  <input id="inp" value="Hello">
  <p id="out"></p>

  <button id="a">text()</button>
  <button id="b">val()</button>
  <button id="c">addClass</button>
  <button id="d">toggleClass</button>
  <button id="e">css()</button>

  <script>
    $(document).ready(function(){
      $("#a").click(function(){ $("#p1").text("Changed with text()!"); });
      $("#b").click(function(){ $("#out").text("The input holds: " + $("#inp").val()); });
      $("#c").click(function(){ $("#p1").addClass("hl"); });
      $("#d").click(function(){ $("#p1").toggleClass("hl"); });
      $("#e").click(function(){ $("#p1").css("color", "crimson"); });
    });
  </script>
</body>`;

CONTENT.typescript = `
  ${explain(`<p><strong>TypeScript</strong> is "JavaScript that scales" — a <strong>typed superset</strong> of JavaScript. Superset means every valid JavaScript program is also valid TypeScript; TypeScript simply adds more on top.</p>`)}

  <h3>Why people like it</h3>
  <div class="chiprow">
    <span class="chip">Because it understands JavaScript, it catches errors and offers fixes <strong>before you run the code</strong></span>
    <span class="chip">Adds support for <strong>classes and interfaces</strong></span>
    <span class="chip">Runs anywhere JavaScript runs — any browser, any OS</span>
    <span class="chip">Entirely open source</span>
  </div>

  <h3 style="margin-top:20px;">How to install</h3>
  <div class="chiprow">
    <span class="chip">Using the Node.js package manager (npm)</span>
    <span class="chip">Through TypeScript plugins for Visual Studio</span>
  </div>

  <h3 style="margin-top:20px;">Data types</h3>
  <div class="chiprow">
    <span class="chip">any</span><span class="chip">number</span><span class="chip">string</span><span class="chip">boolean</span>
    <span class="chip">void</span><span class="chip">null</span><span class="chip">undefined</span><span class="chip">array</span><span class="chip">enum</span>
  </div>
  <p style="font-size:14.5px;">(Primitive types are number, string, boolean, void, null and undefined.)</p>

  <h3 style="margin-top:20px;">A tiny taste</h3>
  ${codeBlock(`let age: number = 20;
let name: string = "Stella";

function greet(person: string): string {
    return "Hello, " + person;
}

greet(42);   // TypeScript flags this BEFORE running: 42 is not a string`)}

  <p>You can try TypeScript in the browser at the official site, <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">typescriptlang.org</a>. Browsers can't run TypeScript directly — it is first <em>compiled</em> into plain JavaScript.</p>

  ${analogy(`<p>JavaScript lets you put anything in any box, and you only find out something is wrong when the box breaks. TypeScript puts labels on the boxes ("numbers only!") and checks them <em>while you're packing</em>, not after delivery.</p>`)}

  ${remember(["TypeScript = typed superset of JavaScript, 'JavaScript that scales'","Catches errors before you run the code; supports classes and interfaces","Types: any, number, string, boolean, void, null, undefined, array, enum","It is compiled into ordinary JavaScript for browsers to run"])}
`;


/* ================= UNIT 5 (continued): BOOTSTRAP FRAMEWORK ================= */

/* shared head used by every Bootstrap demo */
const BS_HEAD = `<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="${BS_CSS}" rel="stylesheet">`;

CONTENT.rwd = `
  ${explain(`<p><strong>Responsive web design</strong> lets a page change its layout on the go. You build <strong>one website</strong> that works on every kind of device — mobiles, tablets, smart TVs and PCs. Such sites are usually "fluid": they stretch and rearrange themselves to fit.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 420 170" role="img" aria-label="The same page shown as a phone, a tablet and a desktop screen">
      <rect x="10" y="40" width="60" height="110" rx="8" fill="var(--bg)" stroke="var(--ink-soft)" stroke-width="2"/>
      <rect x="18" y="52" width="44" height="14" fill="var(--rail)"/>
      <rect x="18" y="72" width="44" height="26" fill="var(--spark)" opacity=".7"/>
      <rect x="18" y="104" width="44" height="26" fill="var(--spark)" opacity=".7"/>
      <text x="40" y="165" text-anchor="middle" font-size="11" fill="var(--ink)">Phone</text>

      <rect x="100" y="25" width="110" height="125" rx="8" fill="var(--bg)" stroke="var(--ink-soft)" stroke-width="2"/>
      <rect x="110" y="37" width="90" height="14" fill="var(--rail)"/>
      <rect x="110" y="58" width="42" height="36" fill="var(--spark)" opacity=".7"/>
      <rect x="158" y="58" width="42" height="36" fill="var(--spark)" opacity=".7"/>
      <rect x="110" y="100" width="42" height="36" fill="var(--spark)" opacity=".7"/>
      <rect x="158" y="100" width="42" height="36" fill="var(--spark)" opacity=".7"/>
      <text x="155" y="165" text-anchor="middle" font-size="11" fill="var(--ink)">Tablet</text>

      <rect x="240" y="10" width="170" height="130" rx="8" fill="var(--bg)" stroke="var(--ink-soft)" stroke-width="2"/>
      <rect x="252" y="22" width="146" height="14" fill="var(--rail)"/>
      <rect x="252" y="44" width="32" height="80" fill="var(--spark)" opacity=".7"/>
      <rect x="290" y="44" width="32" height="80" fill="var(--spark)" opacity=".7"/>
      <rect x="328" y="44" width="32" height="80" fill="var(--spark)" opacity=".7"/>
      <rect x="366" y="44" width="32" height="80" fill="var(--spark)" opacity=".7"/>
      <text x="325" y="160" text-anchor="middle" font-size="11" fill="var(--ink)">Desktop</text>
    </svg>
    <p class="imgcaption">The same four content blocks: stacked on a phone, 2 × 2 on a tablet, in one row on a desktop.</p>
  </div>

  <h3>The viewport</h3>
  <p>The <strong>viewport</strong> is the user's visible area of the web page. In HTML5 the designer can take control of it with a <code>&lt;meta&gt;</code> tag:</p>
  ${codeBlock(`<meta name="viewport" content="width=device-width, initial-scale=1.0">`)}
  <div class="chiprow">
    <span class="chip"><strong>width=device-width</strong> — follow the screen width of the device</span>
    <span class="chip"><strong>initial-scale=1.0</strong> — the initial zoom level</span>
  </div>

  ${analogy(`<p>A responsive page is like water poured into different glasses: it takes the shape of whatever glass (screen) it's in. A non-responsive page is like ice — it keeps one fixed shape and simply won't fit.</p>`)}

  ${mistake(`<p>Forgetting the viewport meta tag. Without it, a phone pretends its screen is about 980 pixels wide and shrinks your whole page into a tiny, unreadable version of the desktop layout.</p>`)}

  ${remember(["Responsive design = ONE site that adapts to every device","Fluid layouts use percentages (or em) instead of fixed pixels","The viewport = the visible area; control it with <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"])}
`;

CONTENT.rwdgrid = `
  ${explain(`<p>The <strong>grid view</strong> is one of the most important features of responsive design. The page is divided into <strong>12 equal columns</strong>, and every element takes up some number of them. It makes placing things on a page much easier.</p>`)}

  <div class="imgcard">
    <svg viewBox="0 0 480 120" role="img" aria-label="Twelve equal columns, with a 3 column block and a 9 column block">
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>`<rect x="${10+i*38.3}" y="10" width="34" height="42" fill="var(--line)"/><text x="${27+i*38.3}" y="36" text-anchor="middle" font-size="12" fill="var(--ink-soft)">${i+1}</text>`).join("")}
      <rect x="10" y="66" width="145" height="40" fill="var(--rail)"/><text x="82" y="91" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">3 columns</text>
      <rect x="164" y="66" width="306" height="40" fill="var(--spark)"/><text x="317" y="91" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">9 columns</text>
    </svg>
    <p class="imgcaption">Twelve columns in a row. Here a menu takes 3 of them and the main content takes the other 9.</p>
  </div>

  <p>You can have as many <strong>rows</strong> as your design needs. The meeting of rows and columns forms a rectangular grid that holds the website's content.</p>

  <h3>How it works in plain CSS</h3>
  <p>One column out of twelve is 100% ÷ 12 ≈ 8.33% wide. So each class simply sets a percentage width:</p>
  ${refTable(["Class","Width","Class","Width"],[
    ["<code>.col-1</code>","8.33%","<code>.col-7</code>","58.33%"],
    ["<code>.col-2</code>","16.66%","<code>.col-8</code>","66.66%"],
    ["<code>.col-3</code>","25%","<code>.col-9</code>","75%"],
    ["<code>.col-4</code>","33.33%","<code>.col-10</code>","83.33%"],
    ["<code>.col-5</code>","41.66%","<code>.col-11</code>","91.66%"],
    ["<code>.col-6</code>","50%","<code>.col-12</code>","100%"]
  ])}

  ${codeBlock(`* { box-sizing: border-box; }        /* include padding and border in the width */

[class*="col-"] { float: left; padding: 15px; border: 1px solid grey; }

<div class="row">
  <div class="col-3">...</div>
  <div class="col-9">...</div>
</div>`)}

  <p style="font-size:14.5px;">Want to see it live? The W3Schools responsive grid example is a good one to experiment with: <a href="https://www.w3schools.com/css/tryresponsive_grid.htm" target="_blank" rel="noopener">w3schools.com/css/tryresponsive_grid.htm</a>.</p>

  ${more("🔎 Why box-sizing: border-box?","<p>Normally padding and border are added <em>on top of</em> an element's width, so two 50%-wide columns with padding would overflow the row. <code>box-sizing: border-box</code> makes padding and border count <em>inside</em> the width, so the percentages add up to exactly 100%.</p>")}

  ${remember(["The grid = 12 equal columns; you can stack as many rows as you like","col-1 … col-12 are percentage widths: col-6 = 50%, col-4 = 33.33%","A row's columns should add up to 12","box-sizing: border-box keeps padding and border inside the width"])}
`;

CONTENT.bsintro = `
  ${explain(`<p><strong>Bootstrap</strong> is a front-end framework that helps developers jump-start web development. You concentrate on writing proper HTML, and Bootstrap takes care of the tricky CSS and JavaScript.</p>`)}

  <h3>Why use a framework?</h3>
  <div class="chiprow">
    <span class="chip">⚡ Faster development</span>
    <span class="chip">🧹 Organised and maintainable code</span>
    <span class="chip">💡 Spend your time on innovation, not on reinventing the wheel</span>
  </div>

  ${analogy(`<p>Writing every bit of CSS yourself is like baking a cake from scratch — every time. Bootstrap is a ready-made cake mix: the hard parts are done, and you add your own flavour and decoration.</p>`)}

  <h3 style="margin-top:22px;">Getting Bootstrap ready — two ways</h3>
  <div class="tabbar" id="bsSetupTabs">
    <button class="tabbtn active" data-tab="bsdownload">📥 Download the package</button>
    <button class="tabbtn" data-tab="bscdn">🌐 Use the CDN</button>
  </div>

  <div class="tabpanel active" data-tab="bsdownload">
    <div class="card">
      <p>Download the Bootstrap package, keep its <code>css</code> and <code>js</code> folders next to your page, then link to them. Remember the <strong>viewport</strong> meta tag too:</p>
      ${codeBlock(`<head>
    <meta charset="UTF-8">
    <title>Bootstrap Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
</head>
<body>
    ...
    <script src="js/bootstrap.js"></script>   <!-- only if you use Bootstrap's JavaScript -->
</body>`)}
    </div>
  </div>

  <div class="tabpanel" data-tab="bscdn">
    <div class="card">
      <p>Or load it from a <strong>CDN</strong>, so there's nothing to download. This is exactly how this portal's live demos load it:</p>
      ${codeBlock(`<!-- Bootstrap 5.3.8 CSS -->
<link href="${BS_CSS}"
      rel="stylesheet">`)}
      <p style="font-size:14.5px;">Bootstrap's website gives you this snippet with an extra <code>integrity</code> and <code>crossorigin</code> attribute — a safety check that the file hasn't been tampered with. Copy the full snippet from getbootstrap.com when you build a real site.</p>
    </div>
  </div>

  ${mistake(`<p>The Bootstrap demos on the next few stations load Bootstrap from a CDN, so they need an internet connection. If a demo looks like plain unstyled HTML, check your connection.</p>`)}

  ${remember(["Bootstrap = a front-end framework: you write the HTML, it supplies the CSS and JavaScript","Benefits: faster development, organised code, no reinventing the wheel","Add it by downloading the package or by linking a CDN","Always include the viewport meta tag"])}
`;

CONTENT.bsgrid = `
  ${explain(`<p>Bootstrap's grid is built from three layers: a <strong>container</strong> that holds everything, <strong>rows</strong> inside it, and <strong>columns</strong> inside each row. Column classes say how many of the 12 columns each box should use.</p>`)}

  <h3>Containers</h3>
  <div class="flow-grid">
    <div class="flow-card"><h4><code>.container</code></h4><p style="font-size:14.5px;">A <strong>fixed-width</strong> container. It snaps to preset widths at each breakpoint and is centred on the page.</p></div>
    <div class="flow-card"><h4><code>.container-fluid</code></h4><p style="font-size:14.5px;">A <strong>full-width</strong> container that always spans the entire screen.</p></div>
  </div>

  <h3 style="margin-top:20px;">The skeleton: container → row → columns</h3>
  ${demoCard("bsgrid1", "Try it: columns that add up to 12", 230)}

  <h3 style="margin-top:20px;">Display sizes — the breakpoints (Bootstrap 5)</h3>
  <p>Add a size name to the column class and the layout can <strong>change with the screen size</strong>. A class applies from its size <em>upwards</em>.</p>
  ${refTable(["Breakpoint","Class prefix","Screen width","Example"],[
    ["Extra small","<code>col-</code>","under 576px","<code>&lt;div class=\"col-12\"&gt;</code>"],
    ["Small (sm)","<code>col-sm-</code>","576px and up","<code>&lt;div class=\"col-sm-6\"&gt;</code>"],
    ["Medium (md)","<code>col-md-</code>","768px and up","<code>&lt;div class=\"col-md-4\"&gt;</code>"],
    ["Large (lg)","<code>col-lg-</code>","992px and up","<code>&lt;div class=\"col-lg-3\"&gt;</code>"],
    ["Extra large (xl)","<code>col-xl-</code>","1200px and up","<code>&lt;div class=\"col-xl-2\"&gt;</code>"],
    ["Extra extra large (xxl)","<code>col-xxl-</code>","1400px and up","<code>&lt;div class=\"col-xxl-1\"&gt;</code>"]
  ])}

  <h3 style="margin-top:20px;">Watch a layout respond</h3>
  <p>Each box below is <code>col-12 col-md-6 col-lg-3</code>: full width on a phone, two per row on a tablet, four per row on a desktop. Tap a button to resize the pretend screen — the inside of the frame is a real page that responds to its own width.</p>
  ${demoCard("bsresponsive", "Try it: Phone, Tablet and Desktop widths", 340)}

  ${mistake(`<p>The 12 columns are a <em>limit per row</em>, not a rule. Add up more than 12 and Bootstrap wraps the extra column onto a new line; add up fewer than 12 and the row simply has empty space at the end.</p>`)}

  ${remember(["container (fixed width) vs container-fluid (full width)","Structure: container → row → col-*","Breakpoints: (none) <576 · sm ≥576 · md ≥768 · lg ≥992 · xl ≥1200 · xxl ≥1400","col-md-6 means 'half width from tablet size upwards'; smaller screens stack","Stack classes to design for several screens: col-12 col-md-6 col-lg-3"])}
`;

DEMOS.bsgrid1 = `<head>
  ${BS_HEAD}
  <style>
    .box { background:#cfe2ff; border:1px solid #9ec5fe; padding:10px; text-align:center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-3 box">col-3</div>
      <div class="col-9 box">col-9</div>
    </div>
    <div class="row mt-2">
      <div class="col-4 box">col-4</div>
      <div class="col-4 box">col-4</div>
      <div class="col-4 box">col-4</div>
    </div>
    <div class="row mt-2">
      <div class="col box">col</div>
      <div class="col box">col</div>
      <div class="col box">col</div>
      <div class="col box">col</div>
    </div>
  </div>
</body>`;

DEMOS.bsresponsive = `<head>
  <style>
    body { font-family: sans-serif; margin: 8px; }
    button { padding: 6px 12px; margin: 0 4px 8px 0; cursor: pointer; }
    #wrap  { overflow: hidden; }
    #frame { border: 3px solid #555; border-radius: 6px; height: 250px; display: block; background: #fff; }
  </style>
</head>
<body>
  <button onclick="setW(360)">Phone (360px)</button>
  <button onclick="setW(700)">Tablet (700px)</button>
  <button onclick="setW(1000)">Desktop (1000px)</button>
  <span id="label"></span>
  <div id="wrap"><iframe id="frame"></iframe></div>

  <script>
    var page = '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<link href="${BS_CSS}" rel="stylesheet">' +
      '<style>.box{background:#cfe2ff;border:1px solid #9ec5fe;padding:10px;text-align:center;}</style>' +
      '<div class="container-fluid"><div class="row g-2 mt-1">' +
      '<div class="col-12 col-md-6 col-lg-3"><div class="box">Box 1</div></div>' +
      '<div class="col-12 col-md-6 col-lg-3"><div class="box">Box 2</div></div>' +
      '<div class="col-12 col-md-6 col-lg-3"><div class="box">Box 3</div></div>' +
      '<div class="col-12 col-md-6 col-lg-3"><div class="box">Box 4</div></div>' +
      '</div></div>';
    var frame = document.getElementById("frame");
    var wrap = document.getElementById("wrap");
    frame.srcdoc = page;

    function setW(w){
      var avail = document.body.clientWidth - 16;
      var scale = Math.min(1, avail / w);      // shrink the preview if the screen is narrower
      frame.style.width = w + "px";
      frame.style.transformOrigin = "0 0";
      frame.style.transform = "scale(" + scale + ")";
      wrap.style.height = Math.round(256 * scale) + "px";
      document.getElementById("label").innerHTML = "Pretend screen width: " + w + "px";
    }
    setW(360);
  </script>
</body>`;

CONTENT.bsgrid2 = `
  ${explain(`<p>Once you know the basic grid, three tricks give you much more control: <strong>nesting</strong> columns inside columns, <strong>offsetting</strong> a column to push it right, and <strong>forcing a line break</strong> between columns.</p>`)}

  <h3>1. Nested columns</h3>
  <p>Put a <em>new row</em> inside a column, and that column becomes its own little 12-column grid.</p>
  ${demoCard("bsnested", "Try it: a nested row inside col-md-8", 200)}

  <h3 style="margin-top:20px;">2. Offsetting columns</h3>
  <p>The class <code>offset-*-*</code> pushes a column to the right by leaving empty columns before it. The first star is the <strong>device size</strong> and the second is the <strong>number of columns</strong> to skip.</p>
  ${codeBlock(`<div class="row">
    <div class="col-lg-4 col1"><h6>Hello Ppl!</h6></div>
    <div class="col-lg-4 offset-lg-4 col2"><h6>Hello Ppl!</h6></div>
</div>`)}
  <p style="font-size:14.5px;">The live version below uses <code>md</code> so you can see the gap in this box: the second column skips 4 columns, leaving a gap in the middle.</p>
  ${demoCard("bsoffset", "Try it: offset-md-4", 150)}

  <h3 style="margin-top:20px;">3. Forcing a new line: the w-100 trick</h3>
  <p>An empty <code>&lt;div class="w-100"&gt;&lt;/div&gt;</code> between columns is 100% wide, so it breaks the flex row and pushes the next columns onto a new line — even if there was still room.</p>
  ${demoCard("bswrap", "Try it: columns 3 and 4 forced onto a new line", 190)}

  ${remember(["Nesting: put a new .row inside a column","offset-md-4 skips 4 columns before the column starts","<div class=\"w-100\"></div> forces the next columns onto a new line","Nested rows get their own fresh set of 12 columns"])}
`;

DEMOS.bsnested = `<head>
  ${BS_HEAD}
  <style>
    .box   { background:#cfe2ff; border:1px solid #9ec5fe; padding:10px; }
    .inner { background:#ffe69c; border:1px solid #ffda6a; padding:8px; text-align:center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-8 box">col-md-8
        <div class="row mt-2">
          <div class="col-6 inner">nested col-6</div>
          <div class="col-6 inner">nested col-6</div>
        </div>
      </div>
      <div class="col-md-4 box">col-md-4</div>
    </div>
  </div>
</body>`;

DEMOS.bsoffset = `<head>
  ${BS_HEAD}
  <style> .box { background:#cfe2ff; border:1px solid #9ec5fe; padding:10px; text-align:center; } </style>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-4 box">col-md-4</div>
      <div class="col-md-4 offset-md-4 box">col-md-4 offset-md-4</div>
    </div>
  </div>
</body>`;

DEMOS.bswrap = `<head>
  ${BS_HEAD}
  <style> .box { background:#cfe2ff; border:1px solid #9ec5fe; padding:10px; text-align:center; } </style>
</head>
<body>
  <div class="container">
    <div class="row g-2">
      <div class="col-4 box">1</div>
      <div class="col-4 box">2</div>
      <div class="w-100"></div>
      <div class="col-4 box">3 (forced to a new line)</div>
      <div class="col-4 box">4</div>
    </div>
  </div>
</body>`;

CONTENT.bscomponents = `
  ${explain(`<p>Buttons, headers, menus and cards show up on almost every website. Bootstrap's <strong>components</strong> are ready-made versions of them — add a few class names and you have a polished feature in seconds.</p>`)}

  <h3>Page headers</h3>
  <p>A page header is a big banner at the top of a page. Two common choices:</p>
  <div class="chiprow">
    <span class="chip">Content stretches the <strong>full width</strong> of the viewport</span>
    <span class="chip">Inside a <strong>.container</strong>: width limited to Bootstrap's breakpoints, centred horizontally</span>
  </div>
  ${demoCard("bsheader", "Try it: a full-width header and a container header", 330)}

  <h3 style="margin-top:20px;">Cards</h3>
  <p>A <strong>card</strong> shows text or images inside a box with rounded corners.</p>
  ${demoCard("bscards", "Try it: a card with header, body, footer and buttons", 270)}

  ${refTable(["Class","What it does"],[
    ["<code>card</code>","The Bootstrap card component"],
    ["<code>border</code>","Adds a border"],
    ["<code>rounded-3</code>","Medium rounded corners (1 = slightly rounded, 5 = very rounded)"],
    ["<code>shadow-sm</code>","A small, light shadow"],
    ["<code>card-header</code> · <code>card-body</code> · <code>card-footer</code>","The top, main and bottom sections"],
    ["<code>bg-light</code>","A light background colour"],
    ["<code>btn</code> · <code>btn-danger</code> · <code>btn-sm</code> · <code>btn-secondary</code>","A button · red 'danger' style · small size · neutral grey style"]
  ])}

  <h3 style="margin-top:20px;">Colour means something</h3>
  ${demoCard("bscolors", "Try it: five card colours", 150)}
  ${refTable(["Class","Meaning"],[
    ["<code>bg-primary text-white</code>","Dark blue — main or important"],
    ["<code>bg-success text-white</code>","Green — success, positive actions, completed tasks"],
    ["<code>bg-info text-white</code>","Sky blue — informational or neutral messages"],
    ["<code>bg-warning text-dark</code>","Yellow — warnings and caution"],
    ["<code>bg-danger text-white</code>","Red — errors, danger or critical alerts"]
  ])}

  <h3 style="margin-top:20px;">Image + text side by side</h3>
  ${demoCard("bsimgtext", "Try it: an image beside its text", 190)}
  <ul>
    <li><code>d-flex</code> makes the div a flex container, so its children (image + text) sit in a row.</li>
    <li><code>align-items-start</code> aligns the children to the top; without it they would be centred vertically.</li>
    <li><code>me-3</code> adds margin on the <strong>end</strong> (right side in left-to-right languages) so the text doesn't touch the image.</li>
    <li><code>rounded</code> rounds the image corners.</li>
  </ul>

  ${more("🔎 Where did the jumbotron go?","<p>Older Bootstrap versions had a <code>.jumbotron</code> class for big page headers. Bootstrap 5 removed it — you now build the same effect with utility classes like <code>p-5</code>, <code>bg-primary</code> and <code>text-white</code>, as in the demo above.</p>")}

  ${remember(["Components = ready-made features: headers, cards, buttons, lists, navs","Card = card + card-header / card-body / card-footer; add border, rounded-3, shadow-sm for polish","bg-primary / success / info / warning / danger give colour meaning","d-flex + align-items-start + me-3 puts an image beside text"])}
`;

DEMOS.bsheader = `<head>
  ${BS_HEAD}
</head>
<body>
  <!-- 1. Full-width header -->
  <div class="p-4 bg-primary text-white text-center">
    <h2>Full-width header</h2>
    <p class="mb-0">The content stretches across the whole viewport.</p>
  </div>

  <!-- 2. Header inside a container -->
  <div class="container mt-3">
    <div class="p-4 bg-success text-white text-center rounded">
      <h2>Container header</h2>
      <p class="mb-0">Limited to Bootstrap's breakpoints and centred.</p>
    </div>
  </div>
</body>`;

DEMOS.bscards = `<head>
  ${BS_HEAD}
</head>
<body class="p-3">
  <div class="card border rounded-3 shadow-sm" style="max-width:360px;">
    <div class="card-header bg-light"><strong>Course Card</strong></div>
    <div class="card-body">
      <h5 class="card-title">UI, UX and Design Thinking</h5>
      <p class="card-text">A hands-on course on designing and building friendly websites.</p>
      <button class="btn btn-danger btn-sm">Drop</button>
      <button class="btn btn-secondary btn-sm">Maybe later</button>
    </div>
    <div class="card-footer text-muted">23CS/PE/XI15</div>
  </div>
</body>`;

DEMOS.bscolors = `<head>
  ${BS_HEAD}
</head>
<body class="p-2">
  <div class="row g-2">
    <div class="col"><div class="card bg-primary text-white p-2">Primary</div></div>
    <div class="col"><div class="card bg-success text-white p-2">Success</div></div>
    <div class="col"><div class="card bg-info text-white p-2">Info</div></div>
    <div class="col"><div class="card bg-warning text-dark p-2">Warning</div></div>
    <div class="col"><div class="card bg-danger text-white p-2">Danger</div></div>
  </div>
</body>`;

DEMOS.bsimgtext = `<head>
  ${BS_HEAD}
</head>
<body>
  <div class="d-flex align-items-start p-3">
    <img src="swiss-mountains.jpg" width="130" class="rounded me-3" alt="Snow-covered Swiss Alps">
    <div>
      <h5>A mountain village</h5>
      <p>The text sits beside the image. The image has rounded corners, and a gap on its right so the words don't touch it.</p>
    </div>
  </div>
</body>`;

CONTENT.bslists = `
  ${explain(`<p>Two more handy components organise <em>links</em>: <strong>list groups</strong> (stacked lists of items) and <strong>navs</strong> (links placed side by side for navigation).</p>`)}

  <h3>List group — links</h3>
  ${demoCard("bslist", "Try it: a list group of links (hover over them)", 230)}
  <ul>
    <li><code>list-group</code> goes on the container.</li>
    <li><code>list-group-item</code> turns an element into a list item, with default padding, border and background.</li>
    <li><code>list-group-item-action</code> makes the item <strong>interactive</strong> — it reacts when hovered or focused. Use it with <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> elements.</li>
  </ul>

  <h3 style="margin-top:22px;">Navs</h3>
  <p>A <strong>nav</strong> is a group of links placed inline with each other for navigation. You can show them as plain links, as <strong>tabs</strong>, or as small buttons called <strong>pills</strong>.</p>
  ${demoCard("bsnavs", "Try it: nav, nav-tabs and nav-pills", 270)}
  ${refTable(["Class","Look"],[
    ["<code>nav</code>","Plain inline links"],
    ["<code>nav nav-tabs</code>","Links that look like folder tabs"],
    ["<code>nav nav-pills</code>","Links that look like rounded buttons"]
  ])}

  ${remember(["list-group → list-group-item → list-group-item-action (interactive)","nav gives inline links; add nav-tabs for tabs or nav-pills for button-like pills","Mark the current page with the active class"])}
`;

DEMOS.bslist = `<head>
  ${BS_HEAD}
</head>
<body class="p-3">
  <div class="list-group" style="max-width:360px;">
    <a href="#" class="list-group-item list-group-item-action active">Home</a>
    <a href="#" class="list-group-item list-group-item-action">Programmes</a>
    <a href="#" class="list-group-item list-group-item-action">Admissions</a>
    <a class="list-group-item list-group-item-action disabled">Disabled link</a>
  </div>
</body>`;

DEMOS.bsnavs = `<head>
  ${BS_HEAD}
</head>
<body class="p-3">
  <p class="mb-1"><strong>nav</strong></p>
  <ul class="nav">
    <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  </ul>

  <p class="mb-1 mt-3"><strong>nav nav-tabs</strong></p>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  </ul>

  <p class="mb-1 mt-3"><strong>nav nav-pills</strong></p>
  <ul class="nav nav-pills">
    <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  </ul>
</body>`;

CONTENT.bstry = `
  ${explain(`<p>Two more components are on the "Try it!" list — a <strong>navbar</strong> (the menu bar across the top of a site) and <strong>forms</strong> — and then the most important habit of all: <strong>testing your page at different screen sizes</strong>.</p>`)}

  <h3>Try it: Navbar and Forms</h3>
  ${demoCard("bsnavbarform", "Try it: a navbar plus a styled form", 390)}
  <ul>
    <li><code>navbar</code> builds the top bar; <code>navbar-dark bg-dark</code> sets a dark bar with light text; <code>navbar-expand</code> keeps the links in a row.</li>
    <li><code>form-control</code> styles text inputs; <code>form-label</code> styles their labels; <code>mb-3</code> adds spacing below each group.</li>
    <li><code>form-check</code>, <code>form-check-input</code> and <code>form-check-label</code> style checkboxes and radio buttons.</li>
    <li><code>btn btn-primary</code> is the main blue button.</li>
  </ul>

  <h3 style="margin-top:22px;">Responsive development with the browser</h3>
  <p>You don't need ten different devices to test your page. Your browser can pretend to be a phone or tablet:</p>
  <div class="chiprow">
    <span class="chip">1️⃣ Open your page, then right-click and choose <strong>Inspect</strong></span>
    <span class="chip">2️⃣ Click the <strong>device toolbar</strong> icon (a phone-and-tablet symbol) in Developer Tools</span>
    <span class="chip">3️⃣ Pick a device, or drag to any width, and watch the layout respond</span>
  </div>

  ${analogy(`<p>Testing on one screen size is like trying on a pair of shoes only in your own size and shipping them to everyone. Device mode lets you "try on" every size before you ship.</p>`)}

  ${remember(["navbar + navbar-expand + navbar-dark bg-dark = a simple top menu bar","Forms: form-control, form-label, form-check, btn btn-primary","Use Inspect → device toolbar to test phone, tablet and desktop widths","Always test a responsive page at more than one size"])}
`;

DEMOS.bsnavbarform = `<head>
  ${BS_HEAD}
</head>
<body>
  <nav class="navbar navbar-expand navbar-dark bg-dark px-3">
    <a class="navbar-brand" href="#">SMC</a>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Autonomy</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Programmes</a></li>
    </ul>
  </nav>

  <div class="container mt-3" style="max-width:420px;">
    <form>
      <div class="mb-3">
        <label class="form-label" for="em">Email address</label>
        <input type="email" class="form-control" id="em" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label class="form-label" for="pw">Password</label>
        <input type="password" class="form-control" id="pw">
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="rm">
        <label class="form-check-label" for="rm">Remember me</label>
      </div>
      <button type="button" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</body>`;

/* ================= PRACTICAL EXERCISES ================= */

DEMOS.ex1 = `<!DOCTYPE html>
<html lang="en">
	<head>
		<title>My Personal Profile</title>
	</head>
	<body bgcolor="">
		<center>
			<h1>
				<font color="FireBrick">My Personal Profile</font>
			</h1>
		</center>
		<hr>
		<br>
        <div>
              <h2>Personal Information</h2>
				<p>
          			<font face='Arial' size="+2">
				  		Name: <b>It's a Secret</b><br><br>
				  		Age: <b><strike>36</strike> feels <u>3+6</u></b><br><br>
				  		Address: <b>123 Moonlight Avenue, Star City</b><br><br>
                 		Official Mail ID: <b>myprofile@starmail.com</b><br>
          			</font>
				</p>
          </div>
                <h2>Educational Details</h2>
					<ul>
						<li>School: Imaginary School</li>
						<li>Bachelor's Degree: Stella Maris College</li>
                    </ul>
			   <h2>Hobbies</h2>
					<ul>
						<li>Moon and Star Gazing</li>
						<li>Baking</li>
						<li>Dancing</li>
					</ul>
			   <h2>Dreams</h2>
					<ol type='A'>
						<li>A Day in <i>ISS</i></li>
						<li>A Night of Northern Lights</li>
						<li>Snap a Picture of the Galaxy</li>
					</ol>
			   
		<br>
		<hr>
		<p align='center'>
          <big>End of Profile and this Exercise. There's many many more to come!
          </big>
      </p>

      </body>
</html>`;

CONTENT.ex1walk = `
  ${explain(`
    <p><strong>Exercise 1 — Personal Profile Webpage using HTML Tags.</strong> The brief: create a personal profile page using paragraph tags, heading tags, formatting tags, the font tag, alignment tags, and lists. This exercise deliberately uses the "classic" HTML styling tags (font, bgcolor, align, strike, u, b) so you get comfortable with the full toolbox before switching to CSS.</p>
  `)}

  ${demoCard("ex1", "Live Output — Exercise 1", 900)}

  <h3 style="margin-top:24px;">Walking through the code</h3>
  <ul>
    <li><code>&lt;center&gt;</code> and <code>&lt;font color="FireBrick"&gt;</code> center and color the big "My Personal Profile" title.</li>
    <li><code>&lt;hr&gt;</code> and <code>&lt;br&gt;</code> add a divider line and a blank line right below the title.</li>
    <li>The Age line combines <code>&lt;strike&gt;</code> (crosses out "36") with <code>&lt;u&gt;</code> (underlines "3+6") — formatting tags stacking together.</li>
    <li>Educational Details and Hobbies both use <code>&lt;ul&gt;</code> for simple bullet lists.</li>
    <li>Dreams uses <code>&lt;ol type='A'&gt;</code> so the list numbers as A, B, C — and <code>&lt;i&gt;</code> italicizes "ISS."</li>
    <li>The closing line uses <code>&lt;p align='center'&gt;</code> and <code>&lt;big&gt;</code> for a larger, centered note.</li>
  </ul>

  ${remember(["This exercise = practice with classic formatting tags: font, b, i, u, strike, big, center, align","Structure: title → personal info → educational details → hobbies → dreams → closing note"])}
`;

DEMOS.ex2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Travel Blog</title>
</head>
<body background="bg2.png">

    <header>
        <h1>My Travel Blog</h1>
        <p>Adventures and experiences from around the world</p>
    </header>

    <nav>
        <a href="Ex2Demo.html" target="_blank">Home</a> |
        <a href="#expenses">Expenses</a> |
        <a href="#about-me">About Me</a> |
        <a href="https://www.google.com" target="_blank">Google</a>
    </nav>

    <main>
        <section>
            <h2>Exploring the Mountains of Switzerland</h2>
            <p>Published on <mark>November 8, 2024</mark></p>
            <article>
                <p>Switzerland is a paradise for mountain lovers. The towering Alps, covered in snow for most of the year, offer some of the most breathtaking views on the planet.</p>
                <figure>
                    <img src="swiss-mountains.jpg" alt="Swiss Alps View" width="600" height="400">
                    <figcaption>The stunning Swiss Alps near Zermatt</figcaption>
                </figure>
                <p>The experience of hiking through these mountains was nothing short of magical.</p>
            </article>
        </section>

        <section id="expenses">
            <h3>Travel Expenses</h3>
            <table border="1" cellpadding="8" cellspacing="0">
                <tr><th>Item</th><th>Cost (INR)</th><th>Description</th></tr>
                <tr><td>Flight</td><td>₹41,500</td><td>Round-trip from New York</td></tr>
                <tr><td>Accommodation</td><td>₹24,900</td><td>3 nights at a hostel in Zermatt</td></tr>
            </table>
            <br>
            <details>
                <summary>Click for tips on budgeting your Switzerland trip</summary>
                <p>Consider staying in hostels, using public transport, and enjoying picnics with local groceries.</p>
            </details>
        </section>

        <dialog id="futurePlansDialog">
            <p>Exciting news! I'm planning a new adventure to the Rocky Mountains soon.</p>
        </dialog>
    </main>

    <aside id="about-me">
        <h3>About Me</h3>
        <p>Hello! I'm a travel enthusiast who loves to explore new places and cultures.</p>
    </aside>

    <footer>
        <p>&copy; 2024 My Travel Blog</p>
    </footer>
</body>
</html>`;

CONTENT.ex2walk = `
  ${explain(`
    <p><strong>Exercise 2 — Blog Page using HTML5 Tags.</strong> The brief: design a blog page using HTML5 semantic tags — header, footer, main, article, section, aside, mark, nav (with internal AND external links), dialog, img, table, figure/figcaption, details/summary. This exercise is a real showcase of the Semantic Layout and Interactive HTML5 stations working together on one page.</p>
  `)}

  ${demoCard("ex2", "Live Output — Exercise 2", 1500)}

  <h3 style="margin-top:24px;">Walking through the code</h3>
  <ul>
    <li><code>&lt;body background="bg2.png"&gt;</code> tiles a background image across the page — a legacy attribute.</li>
    <li><code>&lt;nav&gt;</code> holds two internal links (<code>Ex2Demo.html</code> and <code>#expenses</code>) and two external links (<code>target="_blank"</code>).</li>
    <li>Inside <code>&lt;main&gt;</code>, an <code>&lt;article&gt;</code> holds the story, with <code>&lt;mark&gt;</code> highlighting the date and a <code>&lt;figure&gt;</code>+<code>&lt;figcaption&gt;</code> pairing the photo with its caption.</li>
    <li>A <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> block hides budgeting tips until clicked; a <code>&lt;dialog&gt;</code> stays invisible without the <code>open</code> attribute, ready for JavaScript to show it.</li>
    <li><code>&lt;aside id="about-me"&gt;</code> matches the nav's "About Me" link; <code>&lt;footer&gt;</code> closes with <code>&amp;copy;</code>.</li>
  </ul>

  ${remember(["This exercise = a full real-world use of semantic HTML5 tags working together","nav links can be internal (#id anchors) or external (full URL, new tab)","dialog without the open attribute stays hidden until JavaScript opens it"])}
`;

DEMOS.ex3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>User Input Form</title>
</head>
<body bgcolor="LightBlue">
    <main>
        <h2>User Input Form</h2>
        <section style="width: 300px; text-align: left; background-color: SeaShell; padding: 10px;">
            <form>
                <fieldset>
                    <legend>Personal Particulars</legend>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"><br><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"><br><br>
                    <label>Gender:</label>
                    <input type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female">
                    <label for="female">Female</label><br><br>
                    <label for="age">Age:</label>
                    <select id="age" name="age">
                        <option value="less than 1">&lt; 1 year old</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Languages</legend>
                    <input type="checkbox" id="java" name="language" value="Java">
                    <label for="java">Java</label>
                    <input type="checkbox" id="c_cpp" name="language" value="C/C++">
                    <label for="c_cpp">C/C++</label>
                    <input type="checkbox" id="csharp" name="language" value="C#">
                    <label for="csharp">C#</label>
                </fieldset>
                <fieldset>
                    <legend>Instruction</legend>
                    <textarea id="instruction" name="instruction" rows="4" cols="30" placeholder="Enter your instruction here..."></textarea>
                </fieldset>
                <br>
                <input type="submit" value="SEND">
                <input type="reset" value="CLEAR">
            </form>
        </section>
    </main>
</body>
</html>`;

CONTENT.ex3walk = `
  ${explain(`
    <p><strong>Exercise 3 — User Input Form using HTML5 Form Tags.</strong> A direct application of the Forms & Input Elements station.</p>
  `)}

  ${demoCard("ex3", "Live Output — Exercise 3", 620)}

  <h3 style="margin-top:24px;">Walking through the code</h3>
  <ul>
    <li>Three <code>&lt;fieldset&gt;</code> groups — Personal Particulars, Languages, Instruction — each with its own <code>&lt;legend&gt;</code>.</li>
    <li>Two <code>type="radio"</code> buttons share <code>name="gender"</code>, so only one can be selected at a time.</li>
    <li>Three <code>type="checkbox"</code> inputs allow more than one language to be ticked at once.</li>
    <li>Every input is paired with a <code>&lt;label for="..."&gt;</code> matching its <code>id</code> — try clicking a label like "Male" in the output above.</li>
  </ul>

  ${remember(["This exercise = a registration-style form using fieldset, legend, label, and multiple input types","Radio buttons sharing the same name = only one can be picked","Checkboxes = multiple selections allowed"])}
`;

DEMOS.ex4 = `<!DOCTYPE html>
<html lang="en">
    <head>
        <title>SMCSoft</title>
        <meta charset="utf-8">
        <style type="text/css">
            body { background-color: gray; }
            #fullpage {
                width:90%; position: absolute; top:0; bottom: 0; left: 0; right: 0;
                margin: auto; background-color: ghostwhite;
            }
            main { background-color: ghostwhite; }
            #headernav {
                display:inline; text-align: right; position:absolute; top:20px; right:80px;
            }
            #tel { display:inline; }
            a { color:black; text-decoration: none; padding:10px; }
            #pagename { font-family: Arial; font-size: 20px; padding-left: 50px; }
            #bannerimg { width:100%; height: 300px; }
            .logo { height:50px; width:55px; vertical-align: middle; }
            table, td { vertical-align: middle; text-align: center; }
            td p { text-align: justify; padding:0 30px 0 30px; }
            td { padding-top:30px; margin:0 20px 0 20px; }
            article { background-color: lightgray; padding:50px; }
            section { display: inline-block; width: 49%; }
            #sec1 { vertical-align: top; }
            button { border-style: none; padding:3px 10px; font-family: Times New Roman; border-radius: 3px; }
            #tabletwo { width:100%; background-color: white; }
            #tabletwo td { padding: 0; }
            #tabletwo p { text-align: center; vertical-align: top; }
            #spacediv { background-color: white; height:175px; }
            footer {
                background-color:#565656; height:28px; margin-top: 0px; padding-top: 25px;
                text-align: center; font-size: 10px; color: white; line-height: 0;
            }
            #footernav a { color:white; padding:3px; }
        </style>
    </head>
    <body>
        <div id="fullpage">
        <header>
            <b><p id="pagename">SMCSoft</p></b>
            <nav id="headernav">
                <a href="#">HOME</a>
                <a href="#">PRODUCTS</a>
                <a href="#">SERVICES</a>
                <a href="#">SOLUTIONS</a>
                <a href="#">ABOUT US</a>
                <a href="#">CONTACT</a>
                <p id="tel">+880 1717 270 043</p>
            </nav>   
        </header>
        <main>
            <img src="banner2.png" id="bannerimg">
            <table>
            <tr>
                <td>
                    <img src="logo1.png" class="logo">
                    <b><p><center>Software Solutions</center></p></b>
                    <p>We provide cutting-edge software solutions for businesses to enhance efficiency and productivity.</p>
                </td>
                <td>
                    <img src="logo2.png" class="logo">
                    <b><p><center>IT Consulting</center></p></b>
                    <p>Our expert IT consultants help businesses optimize their IT infrastructure and digital strategy.</p>
                </td>
                <td>
                    <img src="logo3.png" class="logo">
                    <b><p><center>Cloud Services</center></p></b>
                    <p>We offer cloud-based solutions that help businesses scale, store data securely, and enhance collaboration.</p>
                </td>
                <td>
                    <img src="logo4.png" class="logo">
                    <b><p><center>Digital Transformation</center></p></b>
                    <p>We help businesses undergo digital transformation by integrating the latest technologies into their operations.</p>
                </td>
            </tr>
            </table>
            <br><br>
            <article>
            <section id="sec1">
                <p>Welcome to SMCSoft, your trusted partner for all your IT needs.</p>
                <h2>Our Vision</h2>
                <p>At SMCSoft, we aim to empower businesses with innovative IT solutions that drive success and transformation in the digital age.</p>
                <button>Learn More</button>
            </section>
            <section>
                <center><img src="laptop.png"></center>
            </section>
                <table id="tabletwo">
                    <tr>
                    <td><center><p>Our Expertise in</p></center><h2>Software Development</h2></td>
                    <td><center><p>Innovative</p></center><h2>IT Consulting</h2></td>
                    <td><p>End-to-End Solutions</p><h2>Cloud Integration</h2></td>
                    </tr>
                </table>
                <div id="spacediv"></div>
            </article>
        </main>
        <footer>
            <nav id="footernav">
                <a href="#">Home</a>| 
                <a href="#">Our Work</a>|
                <a href="#">Testimonials</a>|
                <a href="#">Projects</a>|
                <a href="#">Contact</a>
            <p>&#169; SMCSoft 2021. All Rights Reserved</p>
            </nav>
        </footer>
    </div>
    </body>
</html>`;

CONTENT.ex4walk = `
  ${explain(`
    <p><strong>Exercise 4 — Professional Webpage Layout using HTML5 and CSS3.</strong> The brief: recreate a professional company webpage layout using the CSS box model and other necessary CSS styles. This is the first exercise where CSS really takes the lead — nearly every visual decision here comes from the &lt;style&gt; block, not from HTML attributes.</p>
  `)}

  ${demoCard("ex4", "Live Output — Exercise 4 (SMCSoft)", 1450)}

  <h3 style="margin-top:24px;">Walking through the CSS</h3>
  <ul>
    <li><code>#fullpage</code> uses <code>position: absolute</code> with all four offsets (top/bottom/left/right) set to 0 plus <code>margin: auto</code> — a classic trick to center a box both horizontally and vertically.</li>
    <li><code>#headernav</code> is also <code>position: absolute</code>, pulling the navigation links to a precise spot in the top-right corner, independent of normal page flow.</li>
    <li><code>section { display: inline-block; width: 49%; }</code> is what lets the "Our Vision" text and the laptop image sit side-by-side — two nearly-50%-width boxes placed inline.</li>
    <li>The logo icons use a shared <code>.logo</code> class (one rule styling four different images identically), while the banner uses an id selector <code>#bannerimg</code> since there's only one banner.</li>
    <li>The <code>button</code> selector removes the default border and rounds the corners with <code>border-radius</code> — a small CSS box-model touch that makes a big visual difference.</li>
    <li><code>footer</code> uses a dark background, small font-size, and <code>line-height: 0</code> to keep it compact.</li>
  </ul>

  ${remember(["This exercise = CSS3 doing the heavy lifting: positioning, box model, selectors all working together","position: absolute + margin: auto centers a box on the page","inline-block is what makes the two-column 'Vision + laptop image' layout possible"])}
`;

DEMOS.ex5 = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example Document</title>
    <style>
      html 
      {
        font-family: sans-serif;
      }
      body 
      {
        margin: 0;
      }
      header
      {
        background: purple;
        height: 50px;
      }
      footer 
      {
        background: purple;
        height: 50px;
      }
      h1, h5 {
        text-align: center;
        color: white;
        line-height: 50px;
        margin: 0;
      }
      article
      {
        padding: 5px;
        margin: 5px;
        background: aqua;
        flex: 1 200px; 
      }
      article:nth-of-type(3) 
      {
        flex: 2 200px;
      }
      button 
      {
        font-size: 18px;
        line-height: 1.5;
        width: 15%;
      }
      div 
      {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      p
      {
        display: inline;
      }
      section
      {
        display: flex;
        flex-flow: row wrap;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Sample HTML5 Page, and I'm the Header</h1>
    </header>
    <section>
      <article>
        <h3>Article One</h3>
        <p>"Attitude is a choice. 
		Happiness is a choice. 
		Optimism is a choice. 
		Kindness is a choice. 
		Giving is a choice. 
		Respect is a choice. 
		Whatever choice you make makes you. Choose wisely." — Roy T. Bennett, The Light in the Heart
		</p>
      </article>
      <article>
        <h3>Article Two</h3>
        <p>"Be the reason someone smiles. 
		Be the reason someone feels loved and believes in the goodness in people." 
		— Roy T. Bennett, The Light in the Heart 
		</p>
		<div>
			<button>Smile</button>
			<button>Laugh</button>
			<button>Wink</button>
			<button>Shrug</button>
			<button>Blush</button>
		</div>
      </article>
      <article>
        <h3>Article Three</h3>
        <p>"Live the Life of Your Dreams"
		</p>
		<p>
		I'm here to show how inline works!
		</p>
      </article>
    </section>
	<footer>
		<h5>Hi, I'm the Footer</h5>
	</footer>
  </body>
</html>`;

CONTENT.ex5walk = `
  ${explain(`
    <p><strong>Exercise 5 — Webpage with Flexbox.</strong> The brief: create a website that demonstrates flexbox. This version puts real flexbox properties to work in two places at once — the &lt;section&gt; that lays out the three articles, and the &lt;div&gt; that lays out the row of buttons inside Article Two.</p>
  `)}

  ${demoCard("ex5", "Live Output — Exercise 5", 520)}

  <h3 style="margin-top:24px;">Walking through the code</h3>
  <ul>
    <li><code>section { display: flex; flex-flow: row wrap; }</code> turns the section into a flex container. <code>flex-flow</code> is shorthand for <code>flex-direction: row</code> plus <code>flex-wrap: wrap</code> — the three articles sit side-by-side, and will wrap onto a new line if the window gets too narrow to fit them.</li>
    <li>Each <code>article</code> gets <code>flex: 1 200px;</code> — shorthand for <code>flex-grow: 1</code> with a <code>flex-basis</code> of 200px, meaning every article starts at 200px wide and then grows equally to fill any leftover space.</li>
    <li><code>article:nth-of-type(3) { flex: 2 200px; }</code> singles out Article Three and doubles its <code>flex-grow</code> to 2 — so it claims twice as much of the extra space as Article One or Two.</li>
    <li>Inside Article Two, <code>div { display: flex; align-items: center; justify-content: space-around; }</code> makes a SECOND, independent flex container just for the five buttons — <code>justify-content: space-around</code> spreads them evenly with space on both ends, and <code>align-items: center</code> keeps them vertically centered.</li>
    <li>The purple <code>header</code> and <code>footer</code> still center their heading text vertically using <code>line-height</code> equal to their own height.</li>
    <li>Inside Article Three, <code>p { display: inline; }</code> still makes the two separate &lt;p&gt; tags sit on the same line instead of stacking — a live example of the Block vs Inline Elements station in action.</li>
  </ul>

  ${mistake(`<p>Notice that <code>flex</code> is being used as a shorthand for two values here (<code>flex-grow</code> and <code>flex-basis</code>) with <code>flex-shrink</code> left at its default of 1. It's easy to assume <code>flex: 1 200px</code> means "flex-grow: 1, width: 200px" — but flex-basis is only a *starting point* the browser grows or shrinks from, not a fixed width.</p>`)}

  ${remember(["This exercise = two separate flex containers on one page: the section (articles) and the div (buttons)","flex-flow = flex-direction + flex-wrap shorthand","flex: 1 200px = flex-grow 1, flex-basis 200px — Article Three's flex: 2 200px makes it grow twice as fast","justify-content: space-around + align-items: center is a classic pattern for evenly spaced, centered items","display: inline on p made two block-level-by-default elements share one line"])}
`;

DEMOS.ex6a = `<html>
    <head>
        <title>Animation</title>
            <style>
                .circle {
                    width: 300px; height: 300px; margin: 10px 0 0 0;
                    border-radius: 50%; background-color: red;
                    animation: colors 5s;
                    animation-iteration-count: infinite;
                    animation-direction: normal;
                    animation-timing-function: ease-in-out;
                    animation-delay: 1s;
                }
                @keyframes colors {
                    0% { background-color: yellow; }
                    100% { background-color: blue; }
                }
                .bounce {
                    width: 100px; height: 35px; margin-left: 500px;
                    border-radius: 10px; background-color: blue;
                    animation: bounce 3s linear;
                }
                @keyframes bounce {
                    from { margin-left: 0; }
                    to { margin-left: 500px; }
                }
        </style>
    </head>
    <body>
        <div class="circle"></div>
        <div class="bounce"></div>
    </body>
</html>`;

DEMOS.ex6b = `<html>
    <head>
        <title>Transitions and Transforms</title>
        <style>
            .transform {
                margin: 25px; height: 50px; width: 100px;
                border: 1px solid black; background-color: lightblue;
            }
            .translate { transform: translate(30px, -10px); }
            .rotate { transform: rotate(15deg); transform-origin: bottom left; }
            .scale { transform: scale(1.5, .9); transform-origin: bottom left; }
            .skew { transform: skew(20deg, 15deg); transform-origin: top left; }
        </style>
    </head>
    <body>
        <div class="transform">Original</div>
        <div class="transform translate">Translate</div>
        <div class="transform rotate">Rotate</div>
        <div class="transform scale">Scale</div>
        <div class="transform skew">Skew</div>
    </body>
</html>`;

CONTENT.ex6walk = `
  ${explain(`
    <p><strong>Exercise 6 — Webpage with Animations and Transforms.</strong> The brief: create a webpage demonstrating animations and transforms. This exercise actually has two demo files worth studying side-by-side — one focused on <strong>@keyframes animation</strong>, the other on <strong>CSS transforms</strong>.</p>
  `)}

  <h3>Part A — Animation</h3>
  ${demoCard("ex6a", "Live Output — Animation demo", 460)}
  <ul>
    <li>The red circle cycles between yellow and blue forever (<code>animation-iteration-count: infinite</code>), easing in and out smoothly, starting after a 1 second delay.</li>
    <li>The blue bar bounces from the left edge to 500px away exactly once, at a steady <code>linear</code> pace, using a simple <code>from</code>/<code>to</code> @keyframes shorthand instead of 0%/100%.</li>
  </ul>

  <h3 style="margin-top:22px;">Part B — Transforms</h3>
  ${demoCard("ex6b", "Live Output — Transforms demo", 260)}
  <ul>
    <li>Five identical light-blue boxes, each 100×50px — "Original" gets no transform at all, so you can compare the other four against it.</li>
    <li><code>translate</code> shifts the box sideways and up, without changing its size or rotation.</li>
    <li><code>rotate</code> spins the box 15 degrees, pivoting around its bottom-left corner (set by <code>transform-origin</code>).</li>
    <li><code>scale</code> stretches the box to 1.5× its width but only 0.9× its height, also pivoting from the bottom-left.</li>
    <li><code>skew</code> slants the box along both the X and Y axes at once, pivoting from the top-left this time.</li>
  </ul>

  ${remember(["Animation = automatic, ongoing change defined by @keyframes","Transform = translate/rotate/scale/skew — an instant change to an element's position, rotation, size, or slant","transform-origin sets the pivot point a rotation/scale/skew happens around"])}
`;

CONTENT.ex7walk = `
  ${explain(`
    <p><strong>Exercise 7 — Wireframing our College Website.</strong> The brief: create a Pencil document with a wireframe of the Stella Maris College website. This is the first practical exercise that isn't about writing code at all — it's about planning a page's structure BEFORE any HTML or CSS gets written, using the free <a href="https://pencil.evolus.vn/" target="_blank">Pencil</a> wireframing tool.</p>
  `)}

  <div class="imgcard">
    <img src="wireframe_home.png" alt="Wireframe of the Stella Maris College website home page, showing a header with logo and Home/Autonomy nav links, a hero banner with Stella Maris College heading and an Enter Here button, a Latest News and Announcements section with a text block and three hyperlinks, and four labelled thumbnail cards below.">
    <p class="imgcaption">Page 1 — Home: header (logo + nav), hero banner with a call-to-action button, a news/announcements section, and four card-style content blocks below.</p>
  </div>

  <div class="imgcard">
    <img src="wireframe_autonomy.png" alt="Wireframe of the Autonomy page, showing the same header, a wide banner placeholder, an Autonomy heading with three lines of placeholder body text, and a Programmes hyperlink in the bottom right.">
    <p class="imgcaption">Page 2 — Autonomy: the same header repeated for consistency, a wide banner, a body text area, and a link through to a Programmes page.</p>
  </div>

  <h3 style="margin-top:20px;">Reading the wireframe like a designer would</h3>
  <ul>
    <li>The <strong>66 × 55</strong> crossed-out box is a placeholder for the college logo — its exact pixel size is already decided, even though the real image isn't in place yet.</li>
    <li><strong>Home</strong> and <strong>Autonomy</strong> in the header are real navigation links — notice they repeat identically on both pages, so a visitor always has the same way to get around.</li>
    <li>The <strong>100 × 100</strong> and <strong>164 × 100</strong> crossed-out boxes are all image placeholders — wireframes deliberately use blank boxes instead of real photos, so reviewers focus on layout and hierarchy, not visual polish.</li>
    <li>Each of the four bottom cards pairs an image placeholder with a short label and a hyperlink — a repeating pattern, so once one card's structure is approved, the rest just repeat it.</li>
    <li>On the Autonomy page, the wide <strong>964 × 145</strong> box marks a banner — reserving its exact size lets a developer know how much space to leave, long before the final banner image is designed.</li>
  </ul>

  ${analogy(`<p>A wireframe is like a floor plan for a house — it shows where the kitchen, bedrooms, and doors will go, using plain rectangles and labels, long before anyone picks paint colors or furniture. You'd never start painting walls before agreeing on the floor plan — the same logic applies to skipping straight to colorful HTML/CSS without a wireframe first.</p>`)}

  ${remember(["Wireframes intentionally use gray boxes, placeholder text, and no real images — the focus is structure, not visuals","Repeating elements (header, nav, card pattern) should be planned once and reused consistently across every page","Exact pixel dimensions on placeholders (66×55, 164×100...) tell developers precisely how much space to reserve later","This exercise = practice with the Pencil tool from the Wireframing station earlier in Unit 3"])}
`;



/* ================= PRACTICAL EXERCISES 8–10 ================= */

CONTENT.ex8walk = `
  ${explain(`
    <p><strong>Exercise 8 — Wireframing an App.</strong> The brief: create a Pencil document with a wireframe of an app. Exercise 7 planned a <em>website</em> for a wide desktop screen; this time you plan a screen for a <strong>mobile phone</strong>, where space is tight and every element must earn its place.</p>
  `)}

  <div class="imgcard">
    <img src="wireframe_app.png" alt="Wireframe of a mobile app screen inside a phone outline. At the top is a crossed-out Logo box beside the title Crazy Deals Offer. Below is a scrolling table with columns Product and Deal Ends in, listing Iron Box 23 mins, LG Mobile 30 mins and LP Shirt 40 mins, each with a checkbox. At the bottom is a panel titled Iron Box, Select one, with radio buttons Model 1, Model 2 (selected) and Model 3, and a Next button.">
    <p class="imgcaption">Sample output: one app screen, "Crazy Deals Offer" — a logo and title, a table of deals with checkboxes, and a model chooser with a Next button.</p>
  </div>

  <h3 style="margin-top:20px;">Reading the wireframe like a designer would</h3>
  <ul>
    <li>The <strong>crossed-out "Logo" box</strong> and the title <strong>Crazy Deals Offer</strong> form the header — brand first, so the user knows where they are.</li>
    <li>The <strong>table</strong> has two columns, <em>Product</em> and <em>Deal Ends in</em>. A <strong>checkbox</strong> at the start of each row lets the user pick items, and the <strong>scroll bar</strong> on the right hints that more rows exist than fit on a small screen.</li>
    <li>The blue panel below is a <strong>detail area</strong> for the chosen product (Iron Box). A group of <strong>radio buttons</strong> — Model 1, 2, 3 — means "pick exactly one".</li>
    <li>The <strong>Next</strong> button sits at the bottom of the panel: one clear action to move forward.</li>
    <li>Everything lives inside a <strong>phone outline</strong>. Drawing the device frame reminds you of the real screen size you are designing for.</li>
  </ul>

  <h3 style="margin-top:20px;">Tips for building it in Pencil</h3>
  <div class="chiprow">
    <span class="chip">📱 Look for a phone outline in Pencil's <strong>mobile / Android</strong> shape collections</span>
    <span class="chip">🖼️ Use the <strong>Image</strong> placeholder for the logo</span>
    <span class="chip">📊 Use <strong>Table</strong>, <strong>Checkbox</strong> and <strong>Radio</strong> shapes from the form controls</span>
    <span class="chip">🔘 Add a <strong>Button</strong> for Next</span>
  </div>

  ${analogy(`<p>A phone wireframe is like the plan for a tiny studio flat — you can't afford a single wasted square metre. Every box, checkbox and button has to justify the space it takes, which is exactly why you plan the layout first.</p>`)}

  ${mistake(`<p>Copying a desktop wireframe onto a phone-sized canvas. On a small screen, long menus and wide tables don't fit — you need fewer elements, bigger tap targets (a finger is much less precise than a mouse), and scrolling areas such as the table here.</p>`)}

  ${remember(["Exercise 8 = a Pencil wireframe of an APP (mobile) screen, not a website","Show structure only: placeholder logo, table, checkboxes, radio buttons, button","Checkboxes = pick any number · Radio buttons = pick exactly one","Design for thumbs: clear, large, uncluttered controls","Same Pencil tool you practised in Exercise 7 and the Wireframing station"])}
`;

/* ---------- Exercise 9 ---------- */
DEMOS.ex9 = `<!DOCTYPE html>
<html>
<head>
<title>Online Course Registration</title>
<style>
  body { background: lightblue; font-family: serif; padding: 14px; }
  h2   { color: firebrick; text-align: center; }
  td   { padding: 6px 14px; }
  .platform {
    width: 130px; height: 42px; border-radius: 10px; color: white;
    font: bold 15px Arial; display: flex; align-items: center;
    justify-content: center; margin-bottom: 8px; cursor: pointer;
  }
</style>
</head>
<body>
<h2>Online Course Registration</h2>

<form id="regform">
<table>
  <tr>
    <td>Course Level</td>
    <td>
      <select id="level" onchange="levelChosen()">
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </td>
  </tr>
  <tr>
    <td>Department Number</td>
    <td><input type="text" id="dept" onfocus="focusIn(this)" onblur="focusOut(this)"></td>
  </tr>
  <tr>
    <td>Name</td>
    <td><input type="text" id="uname" onfocus="focusIn(this)" onblur="focusOut(this)"></td>
  </tr>
  <tr>
    <td>Mobile Number</td>
    <td><input type="text" id="mobile" placeholder="click here" onclick="askMobile()"></td>
  </tr>
  <tr>
    <td>Online Platform</td>
    <td>
      <div class="platform" style="background:#00897b;" onmouseover="alert('You have chosen Google Meet')">Google Meet</div>
      <div class="platform" style="background:#2d8cff;" onmouseover="alert('You have chosen Zoom')">Zoom</div>
    </td>
  </tr>
  <tr>
    <td></td>
    <td><input type="button" value="Register" onclick="submitForm()"></td>
  </tr>
</table>
</form>

<script>
  // onchange - fires when the dropdown value changes
  function levelChosen(){
    alert("You chose: " + document.getElementById("level").value);
  }

  // onfocus / onblur - change the field colour when the cursor enters / leaves
  function focusIn(box){  box.style.backgroundColor = "yellow";     }
  function focusOut(box){ box.style.backgroundColor = "lightgreen"; }

  // onclick - ask for the mobile number and show it in the box
  function askMobile(){
    var no = prompt("Enter your mobile number:");
    if(no !== null){                      // null means the user pressed Cancel
      document.getElementById("mobile").value = no;
    }
  }

  // onclick on Register - basic validation, then a confirm box
  function submitForm(){
    var dept   = document.getElementById("dept").value;
    var name   = document.getElementById("uname").value;
    var mobile = document.getElementById("mobile").value;

    if(dept === "" || name === "" || mobile === ""){
      alert("Please fill in all the fields.");
      return;
    }
    if(confirm("Are you sure to submit?")){
      alert("You have successfully registered");
    } else {
      alert("Make changes and register again");
    }
  }
</script>
</body>
</html>`;

CONTENT.ex9walk = `
  ${explain(`
    <p><strong>Exercise 9 — JavaScript Event Handling and Basic Validation in a HTML5 Form.</strong> The brief: build an online course registration page that reacts to the user with these event handlers: <code>onchange</code>, <code>onfocus</code>, <code>onblur</code>, <code>onclick</code>, <code>onmouseover</code>/<code>onmouseout</code>, plus a confirm box on submit.</p>
  `)}

  ${demoCard("ex9", "Live Output — Exercise 9 (try every field!)", 430)}

  <p style="font-size:14.5px;">In this demo the Google Meet and Zoom "images" are simple coloured labels. In your own solution you'll use real <code>&lt;img&gt;</code> tags with the logo pictures, and the <code>onmouseover</code> attribute goes on each image in exactly the same way.</p>

  <h3 style="margin-top:20px;">Walking through the code</h3>
  <ul>
    <li><strong><code>onchange="levelChosen()"</code></strong> on the dropdown — runs when the user picks a different course level, and the function alerts <code>document.getElementById("level").value</code>, the chosen option.</li>
    <li><strong><code>onfocus</code> / <code>onblur</code></strong> on Department Number and Name — <code>focusIn(this)</code> turns the box yellow when the cursor enters, <code>focusOut(this)</code> turns it light green when the cursor leaves. The word <code>this</code> hands the function the very box that triggered the event, so one function serves both fields. This is the dynamic styling idea: <code>box.style.backgroundColor</code>.</li>
    <li><strong><code>onclick="askMobile()"</code></strong> on Mobile Number — <code>prompt()</code> pops up a box asking for the number, and the answer is written into the input with <code>.value</code>. If the user presses Cancel, <code>prompt</code> returns <code>null</code>, so we check for that first.</li>
    <li><strong><code>onmouseover</code></strong> on each platform — the alert text is simply different for Google Meet and for Zoom. <code>onmouseout</code> is the partner event, for when the mouse leaves.</li>
    <li><strong>Basic validation</strong> in <code>submitForm()</code> — if department, name or mobile is empty, stop with <code>return</code> after alerting the user. That's the "mandatory fields" job from the validation station.</li>
    <li><strong>The confirm box</strong> — <code>confirm()</code> shows OK / Cancel and returns <code>true</code> or <code>false</code>, so an <code>if / else</code> chooses between "You have successfully registered" and "Make changes and register again".</li>
  </ul>

  ${mistake(`<p>Mixing up the three pop-up boxes: <code>alert()</code> only tells the user something, <code>confirm()</code> asks a yes/no question and gives back <code>true</code>/<code>false</code>, and <code>prompt()</code> asks for typed text and gives back that text (or <code>null</code> if cancelled).</p>`)}

  ${remember(["onchange → a value changed · onfocus → cursor enters · onblur → cursor leaves","onclick → a click · onmouseover / onmouseout → mouse enters / leaves","this inside a handler call = the element that fired the event","alert() tells · confirm() asks OK/Cancel (true/false) · prompt() asks for text (or null)","style.backgroundColor changes a colour from JavaScript","Basic validation = check mandatory fields are not empty before continuing"])}
`;

/* ---------- Exercise 10 ---------- */
DEMOS.ex10 = `<!DOCTYPE html>
<html>
<head>
<title>Student Registration Form</title>
<style>
  body  { font-family: Arial, sans-serif; background: #e8fbff; padding: 10px; }
  form  { width: 330px; margin: 0 auto; padding: 16px; background: #f4f4f4;
          border: 1px solid #999; border-radius: 6px; }
  h3    { text-align: center; margin: 0 0 4px; }
  .note { text-align: right; font-size: 11px; margin: 0 0 10px; }
  .row  { display: flex; align-items: flex-start; font-size: 13px; margin-bottom: 2px; }
  .row label { width: 105px; padding-top: 4px; }
  .row input, .row select, .row textarea { width: 170px; padding: 4px; font-size: 13px; }
  .err  { color: #c00; font-size: 11px; margin: 0 0 8px 105px; min-height: 13px; }
  .bad  { background: #ffd6d6; border: 1px solid red; }
  #reg  { background: #7dff9a; border: 1px solid #444; padding: 6px 28px;
          margin-left: 105px; cursor: pointer; }
</style>
</head>
<body>
<form id="sform" novalidate>
  <h3>Student Registration Form</h3>
  <p class="note">* denotes a required field</p>

  <div class="row"><label for="fname">First Name *</label>
    <input type="text" id="fname" pattern="[A-Za-z]+" data-label="First name"
           data-msg="First name must contain only alphabets" required></div>
  <div class="err" id="e_fname"></div>

  <div class="row"><label for="lname">Last Name *</label>
    <input type="text" id="lname" pattern="[A-Za-z]+" data-label="Last name"
           data-msg="Last name must contain only alphabets" required></div>
  <div class="err" id="e_lname"></div>

  <div class="row"><label for="father">Father Name *</label>
    <input type="text" id="father" pattern="[A-Za-z]+" data-label="Father name"
           data-msg="Father name must contain only alphabets" required></div>
  <div class="err" id="e_father"></div>

  <div class="row"><label for="dob">Date of Birth *</label>
    <input type="date" id="dob" data-label="Date of birth" required></div>
  <div class="err" id="e_dob"></div>

  <div class="row"><label for="tel">Telephone *</label>
    <input type="tel" id="tel" pattern="[0-9]{10}" maxlength="10" data-label="Telephone"
           data-msg="Telephone must be exactly 10 digits" required></div>
  <div class="err" id="e_tel"></div>

  <div class="row"><label for="college">College Name *</label>
    <input type="text" id="college" data-label="College name" required></div>
  <div class="err" id="e_college"></div>

  <div class="row"><label for="address">Address *</label>
    <textarea id="address" rows="2" data-label="Address" required></textarea></div>
  <div class="err" id="e_address"></div>

  <div class="row"><label for="year">Year *</label>
    <select id="year" data-label="Year" required>
      <option value="">Select Year</option>
      <option>I</option><option>II</option><option>III</option>
    </select></div>
  <div class="err" id="e_year"></div>

  <div class="row"><label for="email">Email *</label>
    <input type="email" id="email" data-label="Email" required></div>
  <div class="err" id="e_email"></div>

  <button type="button" id="reg">Register</button>
</form>

<script>
  var fields = ["fname","lname","father","dob","tel","college","address","year","email"];
  var form = document.getElementById("sform");

  // Date of birth cannot be in the future: set max to today
  document.getElementById("dob").max = new Date().toISOString().split("T")[0];

  // Check ONE field: set a custom message (or clear it) and colour the field
  function check(id){
    var f = document.getElementById(id);
    var label = f.dataset.label;
    f.setCustomValidity("");                       // 1. wipe the old custom message

    if(f.validity.valueMissing){                   // 2. choose the right message
      f.setCustomValidity(label + " is required");
    } else if(f.validity.typeMismatch){
      f.setCustomValidity("Please enter a valid " + label.toLowerCase());
    } else if(f.validity.patternMismatch){
      f.setCustomValidity(f.dataset.msg);
    } else if(f.validity.rangeOverflow){
      f.setCustomValidity(label + " cannot be in the future");
    } else if(id === "father" &&
              f.value !== document.getElementById("lname").value){
      f.setCustomValidity("Father name must be the same as last name");
    }

    var ok = f.checkValidity();                    // 3. ask the field if it is valid now
    f.classList.toggle("bad", !ok);                // 4. red background/border when invalid
    document.getElementById("e_" + id).textContent = ok ? "" : f.validationMessage;
    return ok;
  }

  // Check a field whenever the user types in it or leaves it
  fields.forEach(function(id){
    var f = document.getElementById(id);
    f.addEventListener("input",  function(){ check(id); });
    f.addEventListener("change", function(){ check(id); });
  });
  // last name changed -> father name must be compared again
  document.getElementById("lname").addEventListener("input", function(){
    if(document.getElementById("father").value !== "") check("father");
  });

  document.getElementById("reg").addEventListener("click", function(){
    var allValid = true;
    fields.forEach(function(id){ if(!check(id)) allValid = false; });

    if(allValid){
      alert("Registration successful! Welcome, " + document.getElementById("fname").value + ".");
    } else {
      form.reportValidity();                       // show the first problem to the user
    }
  });
</script>
</body>
</html>`;

CONTENT.ex10walk = `
  ${explain(`
    <p><strong>Exercise 10 — Form Handling and JavaScript Validation using the DOM Constraint API.</strong> The brief: take a Student Registration Form and add these validations — all fields required; custom messages for every field; last name and father name must match; first, last and father name only alphabets; telephone exactly 10 digits; checks based on each field's <code>type</code>; invalid fields turn red; and if everything is valid, clicking Register shows an alert.</p>
  `)}

  ${demoCard("ex10", "Live Output — Exercise 10 (try leaving fields empty, or typing numbers in a name)", 640)}

  <h3 style="margin-top:20px;">Matching each requirement to the code</h3>
  ${refTable(["Requirement","How the code does it"],[
    ["a. All fields required","The <code>required</code> attribute on every field; <code>validity.valueMissing</code> detects an empty one"],
    ["b. Custom validation messages","<code>setCustomValidity(\"...\")</code> with a friendly message for each situation"],
    ["c. Last name = father name","Compare the two <code>.value</code>s; if different, set a custom message on father name. A listener on last name re-checks father name too"],
    ["d. Names: alphabets only","<code>pattern=\"[A-Za-z]+\"</code>, and <code>validity.patternMismatch</code> picks the message"],
    ["e. Telephone: exactly 10","<code>pattern=\"[0-9]{10}\"</code> plus <code>maxlength=\"10\"</code> (stops extra typing)"],
    ["f. Based on <code>type</code>","<code>type=\"email\"</code> (typeMismatch), <code>type=\"date\"</code> with a <code>max</code> of today (rangeOverflow), <code>type=\"tel\"</code>"],
    ["g. Invalid → red","<code>classList.toggle(\"bad\", !ok)</code> adds a red-background CSS class when the field is invalid"],
    ["h. All valid → alert","On Register, check every field; if all pass, <code>alert()</code>; otherwise <code>reportValidity()</code>"]
  ])}

  <h3 style="margin-top:22px;">The heart of it: one function, four steps</h3>
  <ol>
    <li><strong>Clear</strong> — <code>setCustomValidity("")</code> wipes any message from last time, so a fixed field can become valid again.</li>
    <li><strong>Choose</strong> — look at the <code>validity</code> flags in turn (<code>valueMissing</code>, <code>typeMismatch</code>, <code>patternMismatch</code>, <code>rangeOverflow</code>) and set the matching custom message.</li>
    <li><strong>Ask</strong> — <code>checkValidity()</code> answers true or false now that the message is set.</li>
    <li><strong>Show</strong> — colour the field and print <code>validationMessage</code> beneath it.</li>
  </ol>
  <p>That same function is reused by every field through a loop and <code>addEventListener</code>, so the form checks as the user types — not only at the end.</p>

  ${more("🔎 Why novalidate on the form?","<p>The <code>novalidate</code> attribute stops the browser from popping up its own message at submit time, so <em>our</em> code stays in charge of the messages and the red colouring. We then call <code>form.reportValidity()</code> ourselves to show the first problem.</p>")}

  ${mistake(`<p>Forgetting <code>setCustomValidity("")</code>. Once any custom message is set, the field stays invalid even after the user corrects it — the form would refuse to submit with no visible reason. Always clear first, then decide.</p>`)}

  ${remember(["Constraint API = validity flags + validationMessage + checkValidity() + setCustomValidity()","Order inside the checker: clear → choose message → checkValidity() → show result","Compare two fields with their .value for rules like 'last name = father name'","pattern for formats (letters only, exactly 10 digits); type for email/date/tel","classList.toggle(\"bad\", !ok) turns the red style on or off","reportValidity() shows the first problem; alert() confirms success"])}
`;

/* ================= QUIZ DATA ================= */
const QUIZZES = {
  quizVisual: [
    {q:'Which of these is NOT one of the six basic elements of visual design?', opts:['Lines','Typography','Hierarchy','Textures'], a:2},
    {q:'What is a "negative shape"?', opts:['A shape drawn in a dark colour','The space around the main object','A shape that looks sad','A shape with no edges'], a:1},
    {q:'In the Munsell system, "Value" tells you:', opts:['How pure the colour is','Which colour it is','How light or dark it is','How expensive it is'], a:2},
    {q:'A TINT is made by adding:', opts:['White','Grey','Black','Another primary colour'], a:0},
    {q:'Which colour system is used for screens, and why?', opts:['CMYK — ink absorbs light','RGB — it adds light, so all three at full strength make white','CMYK — all colours make white','RGB — it only works on paper'], a:1},
    {q:'Complementary colours are:', opts:['Next to each other on the wheel','Directly opposite each other on the wheel','The same colour in different sizes','Only black and white'], a:1},
    {q:'Which group of colours feels calm and peaceful?', opts:['Warm colours','Cool colours','Only red','Only yellow'], a:1},
    {q:'What is the minimum WCAG contrast ratio for normal-size text?', opts:['1.5 : 1','3 : 1','4.5 : 1','10 : 1'], a:2},
    {q:'What is the difference between a typeface and a font?', opts:['None at all','A typeface is the family (Arial); a font is one variation (Arial Bold)','A font is the family; a typeface is one size','Typefaces are only for print'], a:1},
    {q:'"Leading" in typography means:', opts:['The length of a line','The space between lines of text','The thickness of letters','The text colour'], a:1},
    {q:'Which principle says important items should stand out in front and less important ones sit behind?', opts:['Repetition','Balance','Hierarchy','Proximity'], a:2},
    {q:'Which type of balance mirrors one side onto the other?', opts:['Symmetrical','Asymmetrical','Radial','Random'], a:0},
    {q:'What is the job of negative (empty) space in a design?', opts:['It is wasted space','It highlights the important components','It makes pages load faster','It replaces colour'], a:1},
  ],
  quizBehaviour: [
    {q:'In the Fogg Behaviour Model, which three things must come together for a behaviour to happen?', opts:['Money, Time, Luck','Motivation, Ability, Trigger','Colour, Shape, Text','Idea, Design, Launch'], a:1},
    {q:'A user is highly motivated but the task is very hard. What does the Fogg model predict?', opts:['They will do it anyway','They will fail unless the task is made easier','They will be triggered twice','Nothing — ability does not matter'], a:1},
    {q:'A user is above the action line but never sees a prompt. What is missing?', opts:['Motivation','Ability','A trigger','A budget'], a:2},
    {q:'What is the correct order of the five factors of behaviour?', opts:['Cue, Reaction, Evaluation, Ability, Timing','Timing, Ability, Cue, Reaction, Evaluation','Ability, Cue, Timing, Reaction, Evaluation','Reaction, Cue, Timing, Evaluation, Ability'], a:0},
    {q:'In the A-B-C view of behaviour, what does the "A" stand for?', opts:['Action','Antecedent (what comes before)','Attitude','Audience'], a:1},
    {q:'In Ajzen\'s Theory of Planned Behaviour, behaviour follows from:', opts:['Intent','Luck only','The colour of the button','The size of the screen'], a:0},
    {q:'The Stages of Change (Transtheoretical Model) are best described as:', opts:['A strict straight line that never repeats','A cycle — people can move back and forth between stages','Only two stages','A model about fonts'], a:1},
    {q:'Which is a good way to help users who are unsure where to go next?', opts:['Hide the menu','Show clear next steps and small achievable steps','Add more text','Remove all feedback'], a:1},
  ],
  quizUnit1: [
    {q:"UI is best described as:", opts:["The overall experience of a product","The vehicle / look-and-feel that connects users to a product","A type of database","A programming language"], a:1},
    {q:"Which should generally come first: understanding user needs, or designing the visual interface?", opts:["Visual interface first","Understanding user needs first","They must happen at exactly the same time","Neither matters"], a:1},
    {q:"Which of these is NOT one of the 6 phases of the UX Design Process?", opts:["Discovery","Strategy","Compilation","Analysis"], a:2},
    {q:"What is the main goal of the Discovery phase?", opts:["Write code","Have a clear idea about the product","Launch the beta","Pick a color palette"], a:1},
    {q:"Which research type focuses on measurable numbers and data?", opts:["Qualitative research","Quantitative research","Persona research","Visual research"], a:1},
    {q:"A/B Testing and Heat Mapping are methods used in:", opts:["UX Strategy","UX Analysis","Discovery","Documentation"], a:1},
    {q:"A User Persona is best described as:", opts:["A real customer's exact profile","A fictional character representing a type of user","A wireframe sketch","A CSS style guide"], a:1},
    {q:"Gestalt Theory's core idea is that we perceive:", opts:["Only individual parts, never the whole","An organized whole that is more than the sum of its parts","Random shapes with no pattern","Only color, never shape"], a:1},
    {q:"Which Gestalt law explains why items placed close together feel related?", opts:["Similarity","Closure","Proximity","Figure-Ground"], a:2},
    {q:"Which Gestalt law explains why our brain 'completes' an incomplete shape into a familiar pattern?", opts:["Closure","Common Region","Proximity","Similarity"], a:0},
    {q:"According to the Motivation/Ability/Triggers framework, we fail to act when:", opts:["We have too much motivation","Any one of motivation, ability, or a trigger is missing","We only lack a trigger, nothing else matters","Ability is always irrelevant"], a:1},
    {q:"Extrinsic motivation refers to:", opts:["Internal satisfaction and enjoyment","External rewards like discounts or badges","A user's ability to complete a task","A visual design principle"], a:1},
  ],
  quizUnit3: [
    {q:"A wireframe is best described as:", opts:["The final polished design","A visual representation of an interface's structure and content","A JavaScript function","A type of font"], a:1},
    {q:"Which of these should you AVOID in a true wireframe?", opts:["Reference numbers","Colors, images, and special fonts","Page titles","Notes alongside the sketch"], a:1},
    {q:"Which wireframe fidelity type is fastest to create but looks the roughest?", opts:["High-fidelity","Medium-fidelity","Low-fidelity","None of these"], a:2},
    {q:"A prototype differs from a wireframe mainly because a prototype is usually:", opts:["Black and white only","Clickable/interactive","Never shown to clients","Written in CSS"], a:1},
    {q:"Which prototyping type is fastest and costs almost nothing, but has almost zero interactivity?", opts:["Coding prototypes","Digital prototypes","Paper prototypes","None of these"], a:2},
    {q:"A Design System is best described as:", opts:["Just a single style guide document","UI components, rules, constraints, and principles that guide a product's design","A JavaScript framework","A wireframing tool only"], a:1},
    {q:"In the UI design handover process, which tools help developers access design specs directly?", opts:["Figma only","Zeplin and Sympli","Photoshop only","Google Fonts"], a:1},
    {q:"The 3 main skills of a frontend developer are:", opts:["HTML, CSS, JavaScript","Photoshop, Sketch, Figma","Python, Java, C++","Wireframing, Prototyping, Testing"], a:0},
    {q:"A CSS Preprocessor like Sass lets you:", opts:["Skip writing CSS entirely","Generate CSS using its own extended syntax (variables, nesting, etc.)","Only write JavaScript","Replace HTML"], a:1},
    {q:"In BEM naming, which symbol separates a Block from its Element?", opts:["A single dash -","A double underscore __","A single underscore _","A colon :"], a:1},
    {q:"CSS Frameworks like Bootstrap mainly help with:", opts:["Writing JavaScript","Browser support and responsive design out of the box","Replacing HTML tags","Creating wireframes"], a:1},
    {q:"A/B Testing after launch is mainly used to:", opts:["Fix server crashes","Identify the most preferred UI design by comparing versions","Write new HTML","Create wireframes"], a:1},
  ],
  quizHtml: [
    {q:"Website vs Internet:", opts:["They are the same thing","A website is made of webpages; the Internet is the global network the Web runs on","A website is bigger than the Internet","None of these"], a:1},
    {q:"Which tag holds everything visible on a webpage?", opts:["head","body","title","html"], a:1},
    {q:"Which heading tag is the biggest/most important?", opts:["h6","h1","h3","p"], a:1},
    {q:"Which old-style tag sets font face, color, and size directly?", opts:["style","font","css","format"], a:1},
    {q:"Which list type pairs a term with its description?", opts:["ul","ol","dl","li"], a:2},
    {q:"What is the div tag mainly used for?", opts:["Making text bold","Grouping/organizing content into a container","Creating links","Playing audio"], a:1},
    {q:"Which attribute makes a link open in a new browser tab?", opts:["href='_blank'","target='_blank'","new='tab'","open='blank'"], a:1},
    {q:"Which pair of tags joins an image together with its caption?", opts:["img + caption","picture + title","figure + figcaption","image + label"], a:2},
    {q:"Which HTML5 tag is meant for the primary content of a page (only one per page)?", opts:["section","article","main","div"], a:2},
    {q:"Which display type starts on a new line and takes the full available width?", opts:["inline","block-level","none","static"], a:1},
    {q:"Which tag would you use to embed a separate webpage inside the current one?", opts:["video","embed","iframe","object"], a:2},
  ],
  quizCss: [
    {q:"Which type of CSS is written in a separate .css file?", opts:["Inline","Internal","External","Universal"], a:2},
    {q:"Which selector targets an element with one specific id?", opts:[".class","#id","*","[attribute]"], a:1},
    {q:"In the CSS Box Model, what sits directly outside the border?", opts:["Padding","Content","Margin","Nothing"], a:2},
    {q:"With box-sizing: border-box, the width you set includes:", opts:["Only the content","Content, padding, and border together","Only the margin","Nothing — it's ignored"], a:1},
    {q:"Which position value keeps an element fixed in place even while scrolling?", opts:["static","relative","fixed","inherit"], a:2},
    {q:"Which CSS building block defines WHAT changes happen during an animation?", opts:["animation","@keyframes","transition","transform"], a:1},
    {q:"A transition is best triggered by:", opts:["A page reload","A state change like :hover","Nothing — it plays automatically forever","A keyframe"], a:1},
    {q:"Which transform rotates an element?", opts:["translate","scale","rotate","skew"], a:2},
    {q:"What does display: flex do to a container's direct children?", opts:["Hides them","Makes them wrap into a table","Turns them into flex items arranged on a line","Deletes their styles"], a:2},
    {q:"Which flex item property controls how much an item grows to fill extra space?", opts:["flex-shrink","flex-basis","flex-grow","flex-direction"], a:2},
  ],
  quizJs: [
    {q:"JavaScript is best described as:", opts:["A compiled server-side language","An interpreted client-side scripting language","A styling language","A database language"], a:1},
    {q:"Java and JavaScript are:", opts:["The exact same language","Completely unrelated languages, despite the similar name","Both compiled languages","Only used for mobile apps"], a:1},
    {q:"The &lt;noscript&gt; tag is used to:", opts:["Speed up JavaScript","Show fallback content when JS is unavailable","Write comments","Import external files"], a:1},
    {q:"Which symbol starts a single-line JavaScript comment?", opts:["#","//","&lt;!--","**"], a:1},
    {q:"The Browser Object Model (BOM) starts with which object?", opts:["document","window","screen","console"], a:1},
    {q:"The HTML DOM represents a webpage as a:", opts:["Flat list","Tree structure of nodes","Single string","Spreadsheet"], a:1},
    {q:"Which method returns the ONE element with a matching id?", opts:["getElementsByClassName()","getElementsByTagName()","getElementById()","getElementsById()"], a:2},
    {q:"getElementsByClassName() returns elements as a:", opts:["Single element","NodeList (collection), indexed from 0","String","Boolean"], a:1},
    {q:"Which display method writes to the developer console only (not visible to users)?", opts:["document.write()","innerHTML","window.alert()","console.log()"], a:3},
    {q:"document.createElement() is used to:", opts:["Delete an element","Create a brand new element","Style an element","Hide an element"], a:1},
  ],
  quizJsEvents: [
    {q:'A JavaScript function runs when:', opts:['The page is saved','Something calls (invokes) it','The browser is installed','Its name is written in a comment'], a:1},
    {q:'Which keyword sends an answer back from a function to whoever called it?', opts:['send','output','return','print'], a:2},
    {q:'All JavaScript event handler names start with which word?', opts:['do','on','when','event'], a:1},
    {q:'Which event handler fires when the mouse moves over an element?', opts:['onclick','onchange','onblur','onmouseover'], a:3},
    {q:'Which approach lets you attach MANY handlers to the same element and event?', opts:['onclick = function(){...}','addEventListener()','An inline onclick attribute','document.write()'], a:1},
    {q:'Which line correctly sets an element\'s background colour from JavaScript?', opts:['element.style.background-color = "red";','element.style.backgroundColor = "red";','element.css("red");','element.color.background = "red";'], a:1},
    {q:'By default, a click on a button inside two nested divs travels:', opts:['From the outer div inwards','Only to the button','From the button outwards (it bubbles up)','Nowhere — events do not travel'], a:2},
    {q:'Client-side validation is performed:', opts:['By the web server, after submission','By the browser, before the data is sent','Only by the database','Never — it is not possible'], a:1},
    {q:'Which HTML attribute makes a form field mandatory?', opts:['mandatory','needed','required','validate'], a:2},
    {q:'Which regular expression accepts letters only (one or more)?', opts:['^[0-9]+$','^[A-Za-z]+$','^[^A-Za-z]$','/stella/i'], a:1},
    {q:'Which CSS pseudo-class styles fields that currently hold valid input?', opts:[':valid',':optional',':disabled',':checked'], a:0},
    {q:'Which method returns true when a field\'s value passes all its constraints?', opts:['validate()','checkValidity()','isValid()','setCustomValidity()'], a:1},
    {q:'After calling setCustomValidity("some message"), how do you clear it so the field can be valid again?', opts:['setCustomValidity("")','clearValidity()','validity.valid = true','There is no way'], a:0},
    {q:'What is the difference between disabled and readonly?', opts:['No difference','readonly fields are still submitted; disabled fields are not','disabled fields are submitted; readonly are not','Both only work on buttons'], a:1},
  ],
  quizJsWeb: [
    {q:'Which BOM object powers the browser\'s Back button?', opts:['screen','navigator','history','location'], a:2},
    {q:'What makes location.replace() different from location.assign()?', opts:['It reloads faster','The current page is removed from history, so Back skips it','It opens a new window','It only works offline'], a:1},
    {q:'Which storage is kept indefinitely, even after the browser closes?', opts:['sessionStorage','localStorage','document.write','console.log'], a:1},
    {q:'Keys and values saved in Web Storage must be:', opts:['Numbers','Objects','Strings','Booleans'], a:2},
    {q:'What does setInterval() do?', opts:['Runs a function once, immediately','Calls a function again and again at a fixed interval','Pauses the page','Stops a timer'], a:1},
    {q:'Which is the basic jQuery syntax?', opts:['$(selector).action()','jQuery->selector.action','select(action)$','$.action[selector]'], a:0},
    {q:'TypeScript is best described as:', opts:['A database','A typed superset of JavaScript','A CSS framework','A browser'], a:1},
    {q:'Where do all of a page\'s cookies arrive as one semicolon-separated string?', opts:['window.cookies','document.cookie','localStorage.cookie','navigator.cookie'], a:1},
  ],
  quizBootstrap: [
    {q:'Responsive web design means:', opts:['Building a separate site for each device','One site whose layout adapts to every device','A site that responds only to voice','A site with no CSS'], a:1},
    {q:'Which content value in the viewport meta tag makes a page follow the device\'s screen width?', opts:['width=device-width','width=100px','device=auto','screen=full'], a:0},
    {q:'How many columns are in Bootstrap\'s grid?', opts:['6','10','12','16'], a:2},
    {q:'What does .container-fluid do?', opts:['Gives a fixed width','Spans the full width of the screen','Hides the content','Adds animation'], a:1},
    {q:'What does col-md-6 mean?', opts:['Half width from medium screens (768px) upwards','6 pixels wide','Always 60% wide','Only visible on phones'], a:0},
    {q:'Which class pushes a medium-screen column to the right by leaving 4 empty columns before it?', opts:['margin-md-4','push-md-4','offset-md-4','space-md-4'], a:2},
    {q:'What is an empty div with class w-100 used for between columns?', opts:['Making a 100px gap','Forcing the next columns onto a new line','Hiding columns','Adding a border'], a:1},
    {q:'Which class combination gives a green "success" card?', opts:['bg-success text-white','bg-green','card-green','text-success-bg'], a:0},
    {q:'What does list-group-item-action do?', opts:['Deletes the item','Makes the list item interactive (reacts on hover/focus)','Sorts the list','Makes the list horizontal'], a:1},
    {q:'Which class shows nav links as small rounded buttons?', opts:['nav-tabs','nav-pills','nav-buttons','nav-fluid'], a:1},
    {q:'Why do grid examples set box-sizing: border-box?', opts:['To hide borders','Padding and border count inside the width, so columns add up to 100%','To make text bold','To speed up the page'], a:1},
    {q:'Bootstrap is best described as:', opts:['A back-end database','A front-end framework with ready-made CSS and JavaScript','A text editor','A programming language'], a:1},
  ],
  quizPractical: [
    {q:"In Exercise 1, which tag was used to cross out the age '36'?", opts:["del","strike","u","mark"], a:1},
    {q:"In Exercise 1, the Dreams list used which list type to get A, B, C numbering?", opts:["ul","ol type='A'","ol type='1'","dl"], a:1},
    {q:"In Exercise 2, which technique tiled the heart-pattern image across the whole page?", opts:["An img tag","The background attribute on body","A figure tag","An inline font tag"], a:1},
    {q:"In Exercise 2, which tag highlighted the blog's publish date?", opts:["mark","strong","em","small"], a:0},
    {q:"In Exercise 3, what ensures only ONE gender radio button can be selected at a time?", opts:["Different id values","The same name attribute","The same value attribute","The same class"], a:1},
    {q:"In Exercise 4, which CSS trick centers #fullpage both horizontally and vertically?", opts:["float: center","position: absolute with all sides at 0, plus margin: auto","text-align: center","display: block"], a:1},
    {q:"In Exercise 4, which display value lets the Vision text and laptop image sit side-by-side?", opts:["display: block","display: inline-block","display: none","position: fixed"], a:1},
    {q:"In Exercise 5, what does p { display: inline; } do to Article Three's two paragraphs?", opts:["Hides them","Makes them share the same line instead of stacking","Deletes them","Colors them red"], a:1},
    {q:"In Exercise 6's Animation demo, what makes the red circle loop forever?", opts:["animation-delay","animation-iteration-count: infinite","transition-duration","transform"], a:1},
    {q:"In Exercise 6's Transform demo, which transform slants a box along both axes?", opts:["translate","rotate","scale","skew"], a:3},
    {q:"In Exercise 7, why do wireframes use plain crossed-out boxes instead of real photos?", opts:["Pencil can't import images","To keep the focus on structure and layout, not visual polish","It's faster to export as PDF","Real images aren't allowed by the college"], a:1},
    {q:"In Exercise 7's wireframe, what does labelling a box '164 × 100' communicate to a developer?", opts:["The exact pixel size to reserve for that element","The font size to use","The number of images needed","The page's total width"], a:0},
    {q:"In Exercise 8's app wireframe, which control lets the user pick exactly ONE of Model 1, Model 2 or Model 3?", opts:["Checkboxes","Radio buttons","A text box","A scroll bar"], a:1},
    {q:"Why does the Exercise 8 wireframe include a phone outline?", opts:["It is required by Pencil","It reminds you that you are designing for a small mobile screen","It makes the file smaller","Apps always have outlines"], a:1},
    {q:"In Exercise 9, which event handler runs when the user picks a different course level?", opts:["onclick","onfocus","onchange","onblur"], a:2},
    {q:"In Exercise 9, what does prompt() return if the user presses Cancel?", opts:["An empty string","0","false","null"], a:3},
    {q:"In Exercise 9, which pop-up box returns true or false?", opts:["alert()","confirm()","prompt()","console.log()"], a:1},
    {q:"In Exercise 10, which method sets your own error message on a field?", opts:["checkValidity()","reportValidity()","setCustomValidity()","willValidate()"], a:2},
    {q:"In Exercise 10, why does the checker call setCustomValidity('') first?", opts:["To make the form load faster","To clear an old message so a corrected field can become valid again","To hide the field","To submit the form"], a:1},
    {q:"In Exercise 10, which attributes make the telephone field accept exactly 10 digits?", opts:["pattern=[0-9]{10} with maxlength=10","type=number only","required only","min=10 max=10"], a:0},
  ],
};

/* ================= SUMMARY ================= */
function buildSummaryHTML(){
  return `
    ${explain(`<p>Great job reaching the last station! Here's a one-page recap of everything covered.</p>`)}
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 1 · UI, UX &amp; The Design Process</h3>
      <ul>
        <li><strong>UI vs UX:</strong> UI = look and feel; UX = the whole experience.</li>
        <li><strong>The 6-phase process:</strong> Discovery → Planning → Strategy → UX Research → Analysis → Design.</li>
        <li><strong>User Personas:</strong> fictional characters built from real research.</li>
        <li><strong>Gestalt Theory:</strong> Proximity, Similarity, Closure, Figure-Ground, Common Region.</li>
        <li><strong>Psychology in UX:</strong> Motivation + Ability + Triggers drive user action.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 2 · Visual Design &amp; Designing Behaviour</h3>
      <ul>
        <li><strong>6 elements:</strong> Lines, Shapes, Colours, Typography, Textures, Form.</li>
        <li><strong>Colour:</strong> Hue/Value/Chroma; tint, tone, shade; RGB (screens) vs CMYK (print); warm vs cool; contrast at least 4.5:1 for normal text.</li>
        <li><strong>Typography:</strong> typeface vs font; serif, sans-serif, decorative; alignment, proximity, measure, leading, weight.</li>
        <li><strong>7 principles:</strong> Alignment, Hierarchy, Contrast, Repetition, Proximity, Balance, Space.</li>
        <li><strong>Fogg Behaviour Model:</strong> Behaviour = Motivation + Ability + Trigger (B = M A T).</li>
        <li><strong>Five factors:</strong> Cue → Reaction → Evaluation → Ability → Timing. Models: Planned Behaviour, Stages of Change.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 3 · Wireframing, Prototyping &amp; Frontend Implementation</h3>
      <ul>
        <li><strong>Wireframing:</strong> structure/content/hierarchy/functionality/behaviour; low/medium/high fidelity.</li>
        <li><strong>Prototyping:</strong> paper/digital/coding types; 5-step process (Plan → Sketch → Mockup → Animate → Test).</li>
        <li><strong>Design Systems:</strong> file structure, naming rules, color palettes, fonts, grids, UI components.</li>
        <li><strong>Frontend Implementation:</strong> handover process, HTML+CSS+JS skills, CSS preprocessors (Sass), methodologies (OOCSS/SMACSS/BEM/Atomic), frameworks.</li>
        <li><strong>Post-Launch UX:</strong> user feedback, UI testing, A/B testing, session tracking, conversion funnels.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 4 · HTML5 &amp; CSS3</h3>
      <ul>
        <li><strong>HTML:</strong> structure, text formatting, lists, links, images, semantic tags, tables, forms, multimedia.</li>
        <li><strong>CSS3:</strong> selectors, colors, box model, layout/positioning, text styling, animations, transitions/transforms, flexbox.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 5 · JavaScript, Form Validation, Browser APIs &amp; Bootstrap</h3>
      <ul>
        <li><strong>Basics:</strong> client-side, interpreted; script tags, noscript, external JS, comments.</li>
        <li><strong>BOM &amp; DOM:</strong> window and console; screen, location, history, navigator; the HTML DOM tree.</li>
        <li><strong>Accessing &amp; Creating:</strong> getElementById / ByClassName / ByTagName; document.write, innerHTML, alert, console.log; createElement/createTextNode.</li>
        <li><strong>Functions &amp; Events:</strong> function name(params){ } with return; event handlers (onclick, onchange, onmouseover...); inline vs JS registration; style.cssProperty; addEventListener and bubbling.</li>
        <li><strong>Form Validation:</strong> client-side vs server-side; required, pattern, min/max/step, type; regular expressions; :valid / :invalid; validity, validationMessage, checkValidity(), setCustomValidity().</li>
        <li><strong>Web APIs &amp; libraries:</strong> cookies, localStorage / sessionStorage, setTimeout / setInterval; jQuery $(selector).action(); TypeScript.</li>
        <li><strong>Bootstrap:</strong> responsive design and the viewport; 12-column grid; container / row / col-*; breakpoints sm md lg xl xxl; nesting, offset, w-100; cards, list groups, navs, navbar, forms.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Practical Exercises</h3>
      <ul>
        <li><strong>Ex1-3:</strong> Personal Profile, Travel Blog, Input Form.</li>
        <li><strong>Ex4-6:</strong> Professional Layout, Flexbox Page, Animations &amp; Transforms.</li>
        <li><strong>Ex7-8:</strong> Wireframing the College Website and an App in Pencil.</li>
        <li><strong>Ex9-10:</strong> JavaScript Event Handling &amp; Basic Validation; Form Validation with the DOM Constraint API.</li>
      </ul>
    </div>
    ${remember(["Revisit any station any time from the side menu","Try each quiz again until you score full marks!"])}
    <div style="text-align:center; margin-top:24px;">
      <button class="btn" onclick="window.print()">📥 Download / Print Notes (PDF)</button>
    </div>
  `;
}

/* ================= RENDER LOGIC ================= */
let current = 0;
const contentEl = document.getElementById("content");
const stationlistEl = document.getElementById("stationlist");

function buildNav(){
  let html = "";
  let lastGroup = undefined;
  STATIONS.forEach((s,i)=>{
    if(s.group !== lastGroup){
      if(s.group && GROUP_META[s.group]){
        html += `<li class="groupheader">${GROUP_META[s.group].title}</li>`;
      }
      lastGroup = s.group;
    }
    html += `
      <li>
        <button class="navbtn" data-idx="${i}" aria-current="${i===0?'true':'false'}">
          <span class="navdot">${s.icon}</span>
          <span class="navlabel">${s.label}</span>
        </button>
      </li>
    `;
  });
  stationlistEl.innerHTML = html;
  stationlistEl.querySelectorAll(".navbtn").forEach(btn=>{
    btn.addEventListener("click",()=>goTo(parseInt(btn.dataset.idx)));
  });
}

function buildQuizHTML(quizArr, quizId){
  return `
    ${explain(`<p>Answer each question below. Tap an option to see instantly whether you got it right!</p>`)}
    <div class="quizblock" data-quizid="${quizId}">
      <div class="quizlist">
        ${quizArr.map((item,qi)=>`
          <div class="quiz-card" data-qi="${qi}">
            <div class="quiz-q">${qi+1}. ${item.q}</div>
            <div class="quiz-opts">
              ${item.opts.map((o,oi)=>`<button class="opt" data-oi="${oi}">${o}</button>`).join("")}
            </div>
            <div class="quiz-feedback"></div>
          </div>
        `).join("")}
      </div>
      <div class="scorebar">
        <strong class="scoreText">Score: 0 / ${quizArr.length}</strong>
        <button class="btn secondary resetQuiz" type="button">🔄 Reset Quiz</button>
      </div>
    </div>
  `;
}

function buildStationShell(s,i){
  let body;
  if(s.kind==="quiz"){ body = buildQuizHTML(QUIZZES[s.quizId], s.quizId); }
  else if(s.kind==="summary"){ body = buildSummaryHTML(); }
  else { body = CONTENT[s.id]; }

  const showEyebrow = s.kind!=="home";
  const eyebrowText = s.group && GROUP_META[s.group] ? GROUP_META[s.group].eyebrow : (s.kind==="summary" ? "WRAP-UP" : "");

  return `
    <section class="station" id="station-${i}" data-idx="${i}">
      ${showEyebrow ? `<span class="eyebrow">${eyebrowText}</span>` : ""}
      ${showEyebrow ? `<h1 class="stationtitle">${s.icon} ${s.label}</h1>` : ""}
      ${body}
      <div class="navfoot">
        ${i>0 ? `<button class="btn secondary" data-nav="prev">⬅️ Back</button>` : `<span></span>`}
        ${i<STATIONS.length-1 ? `<button class="btn" data-nav="next">Next ➡️</button>` : `<span></span>`}
      </div>
    </section>
  `;
}

function render(){
  contentEl.innerHTML = STATIONS.map((s,i)=>buildStationShell(s,i)).join("");
  attachStationEvents();
  renderDemoCards();
  showStation(0);
}

function showStation(i){
  current = i;
  document.querySelectorAll(".station").forEach(sec=>sec.classList.remove("active"));
  document.getElementById(`station-${i}`).classList.add("active");
  loadDemosInStation(i);
  if(typeof raStopReading === "function") raStopReading();

  document.querySelectorAll(".navbtn").forEach((btn,idx)=>{
    btn.classList.toggle("active", idx===i);
    btn.classList.toggle("done", idx<i);
    btn.setAttribute("aria-current", idx===i ? "true":"false");
  });

  const pct = Math.round((i/(STATIONS.length-1))*100);
  document.getElementById("progressfill").style.width = Math.max(pct,4)+"%";
  document.getElementById("progresslabel").textContent = `Station ${i+1} of ${STATIONS.length}`;

  window.scrollTo({top:0, behavior:"smooth"});
  closeMobileNav();
}

function goTo(i){ if(i>=0 && i<STATIONS.length) showStation(i); }

/* Build the tab UI for every .democard placeholder — but don't load iframes yet */
function renderDemoCards(){
  document.querySelectorAll(".democard").forEach(el=>{
    const id = el.dataset.demoId;
    const code = DEMOS[id];
    const height = el.dataset.height || 220;
    const label = el.querySelector(".demo-label");
    const labelHTML = label ? label.outerHTML : "";
    el.innerHTML = `
      ${labelHTML}
      <div class="demo-tabs">
        <button class="demotab active" data-view="output" type="button">▶️ Live Output</button>
        <button class="demotab" data-view="code" type="button">🔤 View Code</button>
      </div>
      <div class="demo-pane active" data-view="output"><iframe class="demo-frame" style="height:${height}px;" data-loaded="0"></iframe></div>
      <div class="demo-pane" data-view="code"><pre class="code-block"><code></code></pre></div>
    `;
    // Code view is safe to fill immediately (plain text, no execution)
    el.querySelector("code").textContent = code;

    el.querySelectorAll(".demotab").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const view = btn.dataset.view;
        el.querySelectorAll(".demotab").forEach(b=>b.classList.toggle("active", b===btn));
        el.querySelectorAll(".demo-pane").forEach(p=>p.classList.toggle("active", p.dataset.view===view));
      });
    });
  });
}

/* Only load an iframe's live demo (including any alert()/confirm() it contains)
   once the station holding it is actually the one being viewed — otherwise every
   demo on every station would fire at once the moment the page loads. */
function loadDemosInStation(i){
  const station = document.getElementById(`station-${i}`);
  if(!station) return;
  station.querySelectorAll(".democard iframe.demo-frame").forEach(iframe=>{
    if(iframe.dataset.loaded === "1") return;
    const el = iframe.closest(".democard");
    const id = el.dataset.demoId;
    iframe.srcdoc = DEMOS[id];
    iframe.dataset.loaded = "1";
  });
}

function attachStationEvents(){
  contentEl.querySelectorAll('[data-nav="next"]').forEach(b=>b.addEventListener("click",()=>goTo(current+1)));
  contentEl.querySelectorAll('[data-nav="prev"]').forEach(b=>b.addEventListener("click",()=>goTo(current-1)));

  contentEl.querySelectorAll(".node.clickable").forEach(node=>{
    node.addEventListener("click",()=>{
      const pop = node.querySelector(".node-pop");
      const wasOpen = node.classList.contains("revealed");
      pop.textContent = node.dataset.pop;
      node.classList.toggle("revealed", !wasOpen);
    });
  });

  contentEl.querySelectorAll(".tabbar").forEach(bar=>{
    bar.addEventListener("click",(e)=>{
      const btn = e.target.closest(".tabbtn");
      if(!btn) return;
      const tab = btn.dataset.tab;
      bar.querySelectorAll(".tabbtn").forEach(b=>b.classList.toggle("active", b===btn));
      const panelParent = bar.parentElement;
      panelParent.querySelectorAll(".tabpanel").forEach(p=>p.classList.toggle("active", p.dataset.tab===tab));
    });
  });

  contentEl.querySelectorAll(".quizblock").forEach(block=>{
    const quizId = block.dataset.quizid;
    const quizArr = QUIZZES[quizId];
    const list = block.querySelector(".quizlist");
    const scoreEl = block.querySelector(".scoreText");
    const resetBtn = block.querySelector(".resetQuiz");

    function updateScore(){
      let score = 0;
      block.querySelectorAll(".quiz-card").forEach(card=>{
        if(card.dataset.answered && !card.querySelector(".opt.incorrect")) score++;
      });
      scoreEl.textContent = `Score: ${score} / ${quizArr.length}`;
    }

    list.addEventListener("click",(e)=>{
      const opt = e.target.closest(".opt");
      if(!opt) return;
      const card = opt.closest(".quiz-card");
      if(card.dataset.answered) return;
      const qi = parseInt(card.dataset.qi);
      const oi = parseInt(opt.dataset.oi);
      const correctIdx = quizArr[qi].a;
      card.dataset.answered = "1";
      card.querySelectorAll(".opt").forEach((o,idx)=>{
        if(idx===correctIdx) o.classList.add("correct");
        else if(idx===oi) o.classList.add("incorrect");
      });
      const fb = card.querySelector(".quiz-feedback");
      fb.classList.add("show");
      fb.textContent = (oi===correctIdx) ? "✅ Correct! Well done." : `❌ Not quite — the correct answer is: "${quizArr[qi].opts[correctIdx]}"`;
      fb.style.color = (oi===correctIdx) ? "var(--right)" : "var(--wrong)";
      updateScore();
    });

    resetBtn.addEventListener("click",()=>{
      block.querySelectorAll(".quiz-card").forEach(card=>{
        delete card.dataset.answered;
        card.querySelectorAll(".opt").forEach(o=>o.classList.remove("correct","incorrect"));
        const fb = card.querySelector(".quiz-feedback");
        fb.classList.remove("show"); fb.textContent="";
      });
      updateScore();
    });
  });

  contentEl.querySelectorAll(".topo-card").forEach(card=>{
    card.addEventListener("click",()=>card.classList.toggle("open"));
  });
}

/* ================= NAV / THEME / MOBILE ================= */
function closeMobileNav(){
  document.getElementById("railnav").classList.remove("open");
  document.getElementById("scrim").classList.remove("show");
}
document.getElementById("menubtn")?.addEventListener("click",()=>{
  document.getElementById("railnav").classList.add("open");
  document.getElementById("scrim").classList.add("show");
});
document.getElementById("scrim")?.addEventListener("click", closeMobileNav);

/* ---- Color theme: Light / Dark / High Contrast ---- */
const themeButtons = {
  light: document.getElementById("themeLight"),
  dark: document.getElementById("themeDark"),
  highcontrast: document.getElementById("themeHC"),
};
function setTheme(name){
  document.documentElement.setAttribute("data-theme", name);
  Object.entries(themeButtons).forEach(([key,btn])=>{
    if(btn) btn.classList.toggle("active", key===name);
  });
}
if(themeButtons.light){
  themeButtons.light.addEventListener("click",()=>setTheme("light"));
  themeButtons.dark.addEventListener("click",()=>setTheme("dark"));
  themeButtons.highcontrast.addEventListener("click",()=>setTheme("highcontrast"));
}

/* ---- Text size: Small / Medium / Large / Extra Large ---- */
const FONT_SIZES = ["sm","md","lg","xl"];
const FONT_LABELS = {sm:"Small", md:"Medium", lg:"Large", xl:"Extra Large"};
let fontSizeIdx = 1;
function applyFontSize(){
  document.documentElement.setAttribute("data-fontsize", FONT_SIZES[fontSizeIdx]);
  const lbl = document.getElementById("fontLabel");
  if(lbl) lbl.textContent = FONT_LABELS[FONT_SIZES[fontSizeIdx]];
  const smBtn = document.getElementById("fontSmaller");
  const bgBtn = document.getElementById("fontBigger");
  if(smBtn) smBtn.disabled = fontSizeIdx===0;
  if(bgBtn) bgBtn.disabled = fontSizeIdx===FONT_SIZES.length-1;
}
if(document.getElementById("fontSmaller")){
  document.getElementById("fontSmaller").addEventListener("click",()=>{
    if(fontSizeIdx>0){ fontSizeIdx--; applyFontSize(); }
  });
  document.getElementById("fontBigger").addEventListener("click",()=>{
    if(fontSizeIdx<FONT_SIZES.length-1){ fontSizeIdx++; applyFontSize(); }
  });
  applyFontSize();
}

document.getElementById("spacingToggle")?.addEventListener("click",()=>{
  const root = document.documentElement;
  const isWide = root.getAttribute("data-spacing")==="wide";
  root.setAttribute("data-spacing", isWide ? "" : "wide");
});

/* ================= READ ALOUD (Text-to-Speech) ================= */
const RA = { chunks:[], idx:0, playing:false, rate:1, rates:[1, 1.25, 1.5, 0.75], voice:null };

/* Pick the best available "female, Indian" voice from whatever this visitor's
   own browser/device offers. Voice lists differ by OS and browser, so this
   searches by priority rather than assuming one exact name exists. */
const RA_FEMALE_INDIAN_NAMES = ["heera","veena","lekha","neerja","priya","raveena","kalpana","isha","aditi","sangeeta"];

function raScoreVoice(v){
  const name = v.name.toLowerCase();
  const lang = (v.lang || "").toLowerCase();
  let score = 0;
  if(lang === "en-in") score += 50;                                   // Indian English locale
  else if(lang.startsWith("en-in")) score += 40;
  if(RA_FEMALE_INDIAN_NAMES.some(n => name.includes(n))) score += 30; // known Indian female voice name
  if(name.includes("india")) score += 15;                             // name explicitly says India
  if(name.includes("female")) score += 8;
  if(lang === "hi-in") score += 5;                                    // Hindi as a distant fallback
  if(name.includes("male") && !name.includes("female")) score -= 20;  // avoid obviously-male voices
  return score;
}

function raPickVoice(){
  if(!window.speechSynthesis) return null;
  const voices = speechSynthesis.getVoices();
  if(!voices || voices.length === 0) return null;
  let best = null, bestScore = -1;
  voices.forEach(v=>{
    const s = raScoreVoice(v);
    if(s > bestScore){ bestScore = s; best = v; }
  });
  // Only actually use a pick if it scored above "no signal at all"
  RA.voice = bestScore > 0 ? best : null;
  return RA.voice;
}

if(window.speechSynthesis){
  raPickVoice();
  speechSynthesis.addEventListener("voiceschanged", raPickVoice);
  // Some browsers report an empty voice list right after page load and never
  // fire voiceschanged reliably — a couple of delayed re-checks catch that.
  setTimeout(raPickVoice, 400);
  setTimeout(raPickVoice, 1200);
}

function raExtractText(stationEl){
  const clone = stationEl.cloneNode(true);
  clone.querySelectorAll(".code-block, .navfoot, .demo-tabs, .demo-label, .quiz-opts, .scorebar, .eyebrow").forEach(n=>n.remove());
  const raw = clone.innerText || "";
  return raw.split(/(?<=[.!?])\s+|\n+/).map(s=>s.trim()).filter(s=>s.length>1);
}

function raUpdateStatus(){
  const statusEl = document.getElementById("raStatus");
  if(!statusEl) return;
  if(RA.chunks.length===0){ statusEl.textContent = "Ready to read this page aloud"; return; }
  const voiceNote = RA.voice ? ` · Voice: ${RA.voice.name}` : " · Voice: this device's default (no Indian voice found)";
  statusEl.textContent = `Reading part ${Math.min(RA.idx+1, RA.chunks.length)} of ${RA.chunks.length}${voiceNote}`;
}

function raSpeakNext(){
  if(RA.idx >= RA.chunks.length){ raStopReading(); return; }
  const utter = new SpeechSynthesisUtterance(RA.chunks[RA.idx]);
  utter.rate = RA.rate;
  if(RA.voice){
    try{ utter.voice = RA.voice; } catch(e){ /* stale/invalid voice reference — just use the browser default */ }
  }
  utter.onend = ()=>{
    if(!RA.playing) return;
    RA.idx++;
    raUpdateStatus();
    raSpeakNext();
  };
  utter.onerror = ()=>{ if(RA.playing){ RA.idx++; raSpeakNext(); } };
  speechSynthesis.speak(utter);
}

function raStartReading(){
  const stationEl = document.getElementById(`station-${current}`);
  if(!stationEl) return;
  speechSynthesis.cancel();
  raPickVoice();
  RA.chunks = raExtractText(stationEl);
  RA.idx = 0;
  RA.playing = true;
  document.getElementById("readAloudPlayer").classList.add("show");
  document.getElementById("raPlayPause").textContent = "⏸️";
  raUpdateStatus();
  if(RA.chunks.length===0){
    document.getElementById("raStatus").textContent = "Nothing to read on this page.";
    RA.playing = false;
    return;
  }
  raSpeakNext();
}

function raPause(){
  RA.playing = false;
  speechSynthesis.pause();
  const btn = document.getElementById("raPlayPause");
  if(btn) btn.textContent = "▶️";
}

function raResume(){
  RA.playing = true;
  const btn = document.getElementById("raPlayPause");
  if(btn) btn.textContent = "⏸️";
  if(speechSynthesis.paused){ speechSynthesis.resume(); }
  else { raSpeakNext(); }
}

function raStopReading(){
  RA.playing = false;
  RA.idx = 0;
  RA.chunks = [];
  speechSynthesis.cancel();
  document.getElementById("readAloudPlayer")?.classList.remove("show");
  const btn = document.getElementById("raPlayPause");
  if(btn) btn.textContent = "▶️";
  raUpdateStatus();
}

if(window.speechSynthesis){
  document.getElementById("readAloudBtn")?.addEventListener("click",()=>{
    const playerShown = document.getElementById("readAloudPlayer").classList.contains("show");
    if(!playerShown){ raStartReading(); }
    else if(RA.playing){ raPause(); }
    else { raResume(); }
  });
  document.getElementById("raPlayPause")?.addEventListener("click",()=>{
    if(RA.playing) raPause(); else raResume();
  });
  document.getElementById("raStop")?.addEventListener("click", raStopReading);
  document.getElementById("raSpeed")?.addEventListener("click",()=>{
    const curIdx = RA.rates.indexOf(RA.rate);
    RA.rate = RA.rates[(curIdx+1) % RA.rates.length];
    document.getElementById("raSpeed").textContent = RA.rate + "×";
  });
} else {
  const btn = document.getElementById("readAloudBtn");
  if(btn){ btn.disabled = true; btn.innerHTML = "🔇 <span>Read aloud not supported here</span>"; }
}

buildNav();
render();
