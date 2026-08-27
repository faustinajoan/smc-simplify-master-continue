/* =========================================================
   SMC — Simplify • Master • Continue
   23CS/PE/XI15 · UI, UX and Design Thinking
   Unit 1: UI, UX & The Design Process
   Unit 4: Website Development — HTML5 & CSS3
   Practical Exercises 1–6
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
  { id:"quizUnit1",    icon:"🧠", label:"Unit 1 Quiz", kind:"quiz", group:"unit1", quizId:"quizUnit1" },

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

  /* ---------- PRACTICAL EXERCISES ---------- */
  { id:"ex1walk", icon:"1️⃣", label:"Exercise 1 — Personal Profile", kind:"topic", group:"practical" },
  { id:"ex2walk", icon:"2️⃣", label:"Exercise 2 — Travel Blog", kind:"topic", group:"practical" },
  { id:"ex3walk", icon:"3️⃣", label:"Exercise 3 — Input Form", kind:"topic", group:"practical" },
  { id:"ex4walk", icon:"4️⃣", label:"Exercise 4 — Professional Layout", kind:"topic", group:"practical" },
  { id:"ex5walk", icon:"5️⃣", label:"Exercise 5 — Flexbox Page", kind:"topic", group:"practical" },
  { id:"ex6walk", icon:"6️⃣", label:"Exercise 6 — Animations & Transforms", kind:"topic", group:"practical" },
  { id:"quizPractical", icon:"🧠", label:"Practical Recap Quiz", kind:"quiz", group:"practical", quizId:"quizPractical" },

  { id:"summary", icon:"📄", label:"Summary & Download", kind:"summary" },
];

const GROUP_META = {
  unit1:     { title:"Unit 1 · UI, UX & The Design Process", eyebrow:"UNIT 1" },
  unit4html: { title:"Unit 4 · Website & HTML5", eyebrow:"UNIT 4 · HTML5" },
  unit4css:  { title:"Unit 4 · CSS3 Styling", eyebrow:"UNIT 4 · CSS3" },
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
    <p>Welcome! This portal covers <strong>UI/UX &amp; the Design Process (Unit 1)</strong> and <strong>Website Development with HTML5 &amp; CSS3 (Unit 4)</strong> — one small idea at a time, with pictures, real code, live outputs, and quick checks along the way.</p>
    <div class="stat-row">
      <div class="stat-pill">🧭 Unit 1 · UX Design Process</div>
      <div class="stat-pill">🌐 Unit 4 · HTML5 &amp; CSS3</div>
      <div class="stat-pill">🧪 Practical Exercises 1–6</div>
    </div>
  </div>

  ${explain(`<p>This page is your travel guide. Every station explains <strong>one idea only</strong>, with a real-life comparison and a short "Remember" box so it's easy to recall later. You'll also see <strong>live, clickable code examples</strong> — tap "View Code" to see exactly what produced the output above it.</p>`)}

  <h3 style="margin-top:26px;">Unit 1 · UI, UX &amp; The Design Process</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit1" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 4 · Website &amp; HTML5</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit4html" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Unit 4 · CSS3 Styling</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="unit4css" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">Practical Exercises</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="practical" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  ${more("🎒 Tips for using this page","<p>Use the ⬅️➡️ buttons at the bottom of each page, or tap any station on the left. Tap boxes, diagrams and the 'View Code' tabs — they're all clickable! Turn on <strong>Dark mode</strong> or <strong>Easy-read spacing</strong> from the side menu if that helps you read more comfortably.</p>")}
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
        html { font-family: sans-serif; }
        body { margin: 0; }
        header { background: purple; height: 50px; }
        footer { background: purple; height: 50px; }
        h1, h5 { text-align: center; color: white; line-height: 50px; margin: 0; }
        article { padding: 5px; margin: 5px; background: aqua; }
        p { display: inline; }
    </style>
  </head>
  <body>
    <header>
      <h1>Sample HTML5 Page, and I'm the Header</h1>
    </header>
    <section>
      <article id="a1">
        <h3>Article One</h3>
        <p>"Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely." — Roy T. Bennett, The Light in the Heart</p>
      </article>
      <article id="a2">
        <h3>Article Two</h3>
        <p>"Be the reason someone smiles. Be the reason someone feels loved and believes in the goodness in people." — Roy T. Bennett, The Light in the Heart</p>
      </article>
      <article id="a3">
        <h3>Article Three</h3>
        <p>"Live the Life of Your Dreams"</p>
        <p>I'm here to show how inline works!</p>
      </article>
    </section>
	<footer>
		<h5>Hi, I'm the Footer</h5>
	</footer>
  </body>
</html>`;

CONTENT.ex5walk = `
  ${explain(`
    <p><strong>Exercise 5 — Webpage with Flexbox.</strong> The brief: create a website that demonstrates flexbox. Notice that this exercise's HTML is actually very simple — three &lt;article&gt; elements in a &lt;section&gt; — but a real understanding of flexbox transforms how it's arranged and how the <code>p { display: inline; }</code> rule affects Article Three's two paragraphs.</p>
  `)}

  ${demoCard("ex5", "Live Output — Exercise 5", 500)}

  <h3 style="margin-top:24px;">Walking through the code</h3>
  <ul>
    <li>The purple <code>header</code> and <code>footer</code> both center their heading text vertically using <code>line-height</code> equal to their own height — a neat one-line trick for single-line vertical centering.</li>
    <li>Each <code>article</code> gets its own aqua background and margin, giving the "card" look for each quote.</li>
    <li>Inside Article Three, <code>p { display: inline; }</code> makes the two separate &lt;p&gt; tags sit on the same line instead of stacking — a live example of the Block vs Inline Elements station in action.</li>
    <li>Try changing <code>section</code> to <code>display: flex; flex-direction: row;</code> yourself in the "View Code" tab's mental model — that would lay all three articles out side-by-side instead of stacked, which is the heart of what this exercise is meant to explore.</li>
  </ul>

  ${remember(["This exercise = flexbox applied to a real card-based layout","display: inline on p made two block-level-by-default elements share one line","header/footer text vertical-centering trick: line-height equal to the box height"])}
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
            .transition {
                margin: 25px; height: 50px; width: 100px;
                border: 1px solid black; background-color: lightgreen;
            }
            .transition:hover { width: 420px; height: 150px; }
            .transition {
	           transition-duration: 3s; transition-delay: 0s; transition-timing-function: ease-out;
            }
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
        <div class="transition">Hover Me</div>
        <div class="transform">Original</div>
        <div class="transform translate">Translate</div>
        <div class="transform rotate">Rotate</div>
        <div class="transform scale">Scale</div>
        <div class="transform skew">Skew</div>
    </body>
</html>`;

CONTENT.ex6walk = `
  ${explain(`
    <p><strong>Exercise 6 — Webpage with Animations and Transforms.</strong> The brief: create a webpage demonstrating animations and transforms. This exercise actually has two demo files worth studying side-by-side — one focused on <strong>@keyframes animation</strong>, the other on <strong>transitions and transforms</strong>.</p>
  `)}

  <h3>Part A — Animation</h3>
  ${demoCard("ex6a", "Live Output — Animation demo", 460)}
  <ul>
    <li>The red circle cycles between yellow and blue forever (<code>animation-iteration-count: infinite</code>), easing in and out smoothly, starting after a 1 second delay.</li>
    <li>The blue bar bounces from the left edge to 500px away exactly once, at a steady <code>linear</code> pace, using a simple <code>from</code>/<code>to</code> @keyframes shorthand instead of 0%/100%.</li>
  </ul>

  <h3 style="margin-top:22px;">Part B — Transitions &amp; Transforms</h3>
  ${demoCard("ex6b", "Live Output — Transitions & Transforms demo", 520)}
  <ul>
    <li>Hovering the green box triggers a smooth 3-second <code>ease-out</code> transition, growing it from 100×50px to 420×150px.</li>
    <li>Four blue boxes each apply one transform: <code>translate</code> shifts position, <code>rotate</code> spins around its bottom-left corner, <code>scale</code> stretches width more than height, and <code>skew</code> slants the box along both axes.</li>
  </ul>

  ${remember(["Animation = automatic, ongoing change defined by @keyframes","Transition = smooth change triggered by something (like :hover)","Transform = translate/rotate/scale/skew — instant unless paired with a transition"])}
`;

/* ================= QUIZ DATA ================= */
const QUIZZES = {
  quizUnit1: [
    {q:"UI is best described as:", opts:["The overall experience of a product","The vehicle / look-and-feel that connects users to a product","A type of database","A programming language"], a:1},
    {q:"Which should generally come first: understanding user needs, or designing the visual interface?", opts:["Visual interface first","Understanding user needs first","They must happen at exactly the same time","Neither matters"], a:1},
    {q:"Which of these is NOT one of the 6 phases of the UX Design Process?", opts:["Discovery","Strategy","Compilation","Analysis"], a:2},
    {q:"What is the main goal of the Discovery phase?", opts:["Write code","Have a clear idea about the product","Launch the beta","Pick a color palette"], a:1},
    {q:"A Project Proposal typically includes all of these EXCEPT:", opts:["Scope of work","Deliverables","Payment schedule","Final exam questions"], a:3},
    {q:"UX Strategy is built on understanding:", opts:["Only the client's business","Only competitors","The client's business, competitors, AND customers","Only customers"], a:2},
    {q:"Which research type focuses on measurable numbers and data?", opts:["Qualitative research","Quantitative research","Persona research","Visual research"], a:1},
    {q:"Which stage of UX Research involves 'finding the missing pieces' before starting?", opts:["Explore","Test","Discover","Listen"], a:2},
    {q:"Which stage of UX Research checks that the design works well during development?", opts:["Discover","Explore","Test","Listen"], a:2},
    {q:"A/B Testing and Heat Mapping are methods used in:", opts:["UX Strategy","UX Analysis","Discovery","Documentation"], a:1},
    {q:"In the Design phase, who is mainly responsible for the colors, type, and images (UI Design)?", opts:["The UX researcher","The UI designer","The project manager","The client"], a:1},
    {q:"What comes right after the Beta Release in Production?", opts:["Discovery","Live Product","UX Strategy","Wireframing"], a:1},
    {q:"A User Persona is best described as:", opts:["A real customer's exact profile","A fictional character representing a type of user","A wireframe sketch","A CSS style guide"], a:1},
    {q:"Which of these is NOT one of the four persona types mentioned?", opts:["Goal-directed","Role-based","Engaging","Server-based"], a:3},
  ],
  quizHtml: [
    {q:"Website vs Internet:", opts:["They are the same thing","A website is made of webpages; the Internet is the global network the Web runs on","A website is bigger than the Internet","None of these"], a:1},
    {q:"In the client-server model, your browser is the:", opts:["Server","Client","Network","Router"], a:1},
    {q:"Which tag holds everything visible on a webpage?", opts:["head","body","title","html"], a:1},
    {q:"Which heading tag is the biggest/most important?", opts:["h6","h1","h3","p"], a:1},
    {q:"Which tag creates a line break without starting a new paragraph?", opts:["hr","br","p","div"], a:1},
    {q:"Which old-style tag sets font face, color, and size directly?", opts:["style","font","css","format"], a:1},
    {q:"In HTML code, which type of quotes should you always use?", opts:["Curly “quotes”","Straight \"quotes\"","Either is fine","No quotes at all"], a:1},
    {q:"Which list type pairs a term with its description?", opts:["ul","ol","dl","li"], a:2},
    {q:"What is the div tag mainly used for?", opts:["Making text bold","Grouping/organizing content into a container","Creating links","Playing audio"], a:1},
    {q:"Which attribute makes a link open in a new browser tab?", opts:["href='_blank'","target='_blank'","new='tab'","open='blank'"], a:1},
    {q:"Which pair of tags joins an image together with its caption?", opts:["img + caption","picture + title","figure + figcaption","image + label"], a:2},
    {q:"Which HTML5 tag is meant for the primary content of a page (only one per page)?", opts:["section","article","main","div"], a:2},
    {q:"Which display type starts on a new line and takes the full available width?", opts:["inline","block-level","none","static"], a:1},
    {q:"Which table tag groups the header row(s) separately from the body?", opts:["tbody","thead","tfoot","colgroup"], a:1},
    {q:"Which feature lets a text input show a dropdown of suggestions while still allowing free typing?", opts:["placeholder","a list attribute paired with datalist","type","name"], a:1},
    {q:"Which tag would you use to embed a separate webpage inside the current one?", opts:["video","embed","iframe","object"], a:2},
  ],
  quizCss: [
    {q:"Which type of CSS is written in a separate .css file?", opts:["Inline","Internal","External","Universal"], a:2},
    {q:"Which selector targets an element with one specific id?", opts:[".class","#id","*","[attribute]"], a:1},
    {q:"In the CSS Box Model, what sits directly outside the border?", opts:["Padding","Content","Margin","Nothing"], a:2},
    {q:"With box-sizing: border-box, the width you set includes:", opts:["Only the content","Content, padding, and border together","Only the margin","Nothing — it's ignored"], a:1},
    {q:"Which position value keeps an element fixed in place even while scrolling?", opts:["static","relative","fixed","inherit"], a:2},
    {q:"Which CSS property controls stacking order when elements overlap?", opts:["z-index","overflow","float","display"], a:0},
    {q:"Which CSS building block defines WHAT changes happen during an animation?", opts:["animation","@keyframes","transition","transform"], a:1},
    {q:"Which property controls HOW an animation plays (duration, repeat count, direction)?", opts:["@keyframes","animation","transform","position"], a:1},
    {q:"A transition is best triggered by:", opts:["A page reload","A state change like :hover","Nothing — it plays automatically forever","A keyframe"], a:1},
    {q:"Which transform rotates an element?", opts:["translate","scale","rotate","skew"], a:2},
    {q:"What does display: flex do to a container's direct children?", opts:["Hides them","Makes them wrap into a table","Turns them into flex items arranged on a line","Deletes their styles"], a:2},
    {q:"Which flexbox property aligns items along the main axis?", opts:["align-items","justify-content","flex-wrap","flex-basis"], a:1},
    {q:"Which flex item property controls how much an item grows to fill extra space?", opts:["flex-shrink","flex-basis","flex-grow","flex-direction"], a:2},
    {q:"border-collapse: collapse is most useful for styling:", opts:["Buttons","Tables","Videos","Animations"], a:1},
  ],
  quizPractical: [
    {q:"In Exercise 1, which tag was used to cross out the age '36'?", opts:["del","strike","u","mark"], a:1},
    {q:"In Exercise 1, the Dreams list used which list type to get A, B, C numbering?", opts:["ul","ol type='A'","ol type='1'","dl"], a:1},
    {q:"In Exercise 2, which technique tiled the heart-pattern image across the whole page?", opts:["An img tag","The background attribute on body","A figure tag","An inline font tag"], a:1},
    {q:"In Exercise 2, which tag highlighted the blog's publish date?", opts:["mark","strong","em","small"], a:0},
    {q:"In Exercise 2, which tag keeps the 'About Me' content visually separated as extra/related info?", opts:["section","aside","article","footer"], a:1},
    {q:"In Exercise 3, what ensures only ONE gender radio button can be selected at a time?", opts:["Different id values","The same name attribute","The same value attribute","The same class"], a:1},
    {q:"In Exercise 3, which input type allows MORE than one option to be selected at once?", opts:["radio","checkbox","select","text"], a:1},
    {q:"In Exercise 3, fieldset and legend were used to:", opts:["Validate form data","Visually group related fields under a title","Submit the form","Style the background"], a:1},
    {q:"In Exercise 4, which CSS trick centers #fullpage both horizontally and vertically?", opts:["float: center","position: absolute with all sides at 0, plus margin: auto","text-align: center","display: block"], a:1},
    {q:"In Exercise 4, which display value lets the Vision text and laptop image sit side-by-side?", opts:["display: block","display: inline-block","display: none","position: fixed"], a:1},
    {q:"In Exercise 5, what does p { display: inline; } do to Article Three's two paragraphs?", opts:["Hides them","Makes them share the same line instead of stacking","Deletes them","Colors them red"], a:1},
    {q:"In Exercise 6's Animation demo, what makes the red circle loop forever?", opts:["animation-delay","animation-iteration-count: infinite","transition-duration","transform"], a:1},
    {q:"In Exercise 6's Transform demo, which transform slants a box along both axes?", opts:["translate","rotate","scale","skew"], a:3},
  ],
};

/* ================= SUMMARY ================= */
function buildSummaryHTML(){
  return `
    ${explain(`<p>Great job reaching the last station! Here's a one-page recap of everything covered.</p>`)}
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 1 · UI, UX &amp; The Design Process</h3>
      <ul>
        <li><strong>UI vs UX:</strong> UI = look and feel; UX = the whole experience; UX Design = Content + Usability + UI Design + User Interaction Design.</li>
        <li><strong>Why UX matters:</strong> increases productivity, sales, and satisfaction; reduces support/dev/maintenance cost.</li>
        <li><strong>The 6-phase process:</strong> Discovery → Planning → Strategy → UX Research → Analysis → Design.</li>
        <li><strong>UX Research's 4 stages:</strong> Discover → Explore → Test → Listen.</li>
        <li><strong>Design's sub-phases:</strong> Concept/Sketching → Wireframes/Prototyping → Visual Design &amp; Interaction → Documentation → Development → Production.</li>
        <li><strong>User Personas:</strong> fictional characters built from real research, in 4 types — Goal-directed, Role-based, Engaging, Fictional.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 4 · Website &amp; HTML5</h3>
      <ul>
        <li><strong>Basics:</strong> Website = webpages · WWW runs on top of the Internet · Client-Server model.</li>
        <li><strong>Structure:</strong> DOCTYPE → html → head (title) → body · Element = Content + Tag.</li>
        <li><strong>Text &amp; legacy styling:</strong> headings, formatting tags, font/bgcolor/align (deprecated, prefer CSS).</li>
        <li><strong>Lists &amp; div:</strong> ul/ol/dl, and div as a generic container.</li>
        <li><strong>Links, images, tables, forms:</strong> a/href, img/figure, table with colspan/rowspan/thead/tbody/tfoot, forms with fieldset/label/datalist.</li>
        <li><strong>HTML5 semantics:</strong> header/nav/main/section/article/aside/footer, plus details/summary/dialog/mark.</li>
        <li><strong>Multimedia:</strong> video, audio, embed, object, iframe.</li>
        <li><strong>Block vs Inline:</strong> block starts a new line and takes full width; inline stays within the line.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Unit 4 · CSS3 Styling</h3>
      <ul>
        <li><strong>Writing CSS:</strong> inline, internal, external · Selectors: element, #id, .class, [attribute], *.</li>
        <li><strong>Colors:</strong> named, RGB, Hex, HSL, RGBA/HSLA.</li>
        <li><strong>Box Model:</strong> Content → Padding → Border → Margin · content-box vs border-box.</li>
        <li><strong>Layout:</strong> display (block/inline/inline-block/none) · position (static/relative/absolute/fixed/sticky) · z-index.</li>
        <li><strong>Text styling, table/form styling:</strong> alignment, decoration, transform, shadow · striped/hoverable tables · :focus inputs.</li>
        <li><strong>Animations:</strong> @keyframes (what) + animation (how).</li>
        <li><strong>Transitions &amp; Transforms:</strong> smooth state changes · translate/rotate/scale/skew.</li>
        <li><strong>Flexbox:</strong> display: flex · flex-direction/wrap · justify-content/align-items · flex-grow/shrink/basis.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Practical Exercises</h3>
      <ul>
        <li><strong>Exercise 1:</strong> Personal Profile — classic formatting tags.</li>
        <li><strong>Exercise 2:</strong> Travel Blog — full semantic HTML5 layout.</li>
        <li><strong>Exercise 3:</strong> Input Form — fieldset-grouped form.</li>
        <li><strong>Exercise 4:</strong> Professional Layout — CSS box model &amp; positioning.</li>
        <li><strong>Exercise 5:</strong> Flexbox Page — card-based layout.</li>
        <li><strong>Exercise 6:</strong> Animations &amp; Transforms — @keyframes, transitions, transforms.</li>
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

/* Build the tab UI + iframe + code view for every .democard placeholder */
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
      <div class="demo-pane active" data-view="output"><iframe class="demo-frame" style="height:${height}px;"></iframe></div>
      <div class="demo-pane" data-view="code"><pre class="code-block"><code></code></pre></div>
    `;
    const iframe = el.querySelector("iframe");
    iframe.srcdoc = code;
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

document.getElementById("darkToggle").addEventListener("click",()=>{
  const root = document.documentElement;
  const isDark = root.getAttribute("data-theme")==="dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
  document.getElementById("darkToggle").innerHTML = isDark ? "🌙 <span>Dark mode</span>" : "☀️ <span>Light mode</span>";
});

document.getElementById("spacingToggle").addEventListener("click",()=>{
  const root = document.documentElement;
  const isWide = root.getAttribute("data-spacing")==="wide";
  root.setAttribute("data-spacing", isWide ? "" : "wide");
});

buildNav();
render();
