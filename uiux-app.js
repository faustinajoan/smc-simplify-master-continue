/* =========================================================
   SMC — Simplify • Master • Continue
   23CS/PE/XI15 · UI, UX and Design Thinking
   Content follows the categories in the CA1 Portions document:
   "HTML and HTML5" (Exercises 1–3, the ones covered so far),
   with supporting tag-reference stations plus the exercise
   walkthroughs themselves.
   ========================================================= */

const STATIONS = [
  { id:"home", icon:"🏠", label:"Home", kind:"home" },

  { id:"uiuxintro", icon:"✨", label:"Introduction to UI & UX", kind:"topic", group:"intro" },

  { id:"htmlstructure",icon:"🏗️", label:"Document Structure", kind:"topic", group:"html" },
  { id:"htmlheadings",  icon:"📝", label:"Headings & Paragraphs", kind:"topic", group:"html" },
  { id:"htmlformat",    icon:"🔤", label:"Text Formatting Tags", kind:"topic", group:"html" },
  { id:"htmlfontlegacy",icon:"🎨", label:"Legacy Styling: font, color & align", kind:"topic", group:"html" },
  { id:"htmllists",     icon:"📋", label:"Lists", kind:"topic", group:"html" },
  { id:"htmllinks",     icon:"🔗", label:"Links & Navigation", kind:"topic", group:"html" },
  { id:"htmlimages",    icon:"🖼️", label:"Images, Figure & Figcaption", kind:"topic", group:"html" },
  { id:"htmltables",    icon:"📊", label:"Tables", kind:"topic", group:"html" },
  { id:"htmlsemantic",  icon:"🧱", label:"Semantic Layout Tags", kind:"topic", group:"html" },
  { id:"htmlinteractive",icon:"🎛️", label:"Interactive HTML5 Tags", kind:"topic", group:"html" },
  { id:"htmlforms",     icon:"📮", label:"Forms & Input Elements", kind:"topic", group:"html" },
  { id:"quizHtml",      icon:"🧠", label:"HTML Quiz", kind:"quiz", group:"html", quizId:"quizHtml" },

  { id:"ex1walk", icon:"1️⃣", label:"Exercise 1 — Personal Profile", kind:"topic", group:"html" },
  { id:"ex2walk", icon:"2️⃣", label:"Exercise 2 — Travel Blog", kind:"topic", group:"html" },
  { id:"ex3walk", icon:"3️⃣", label:"Exercise 3 — Input Form", kind:"topic", group:"html" },
  { id:"quizPractical",   icon:"🧠", label:"Practical Recap Quiz", kind:"quiz", group:"html", quizId:"quizPractical" },

  { id:"summary", icon:"📄", label:"Summary & Download", kind:"summary" },
];

const GROUP_META = {
  intro: { title:"Introduction to UI & UX", eyebrow:"INTRO TO UI & UX" },
  html: { title:"HTML and HTML5", eyebrow:"HTML AND HTML5" },
};

/* ---------- helper builders ---------- */
function explain(html){ return `<div class="card explain-card"><h3>🌟 Simple Explanation</h3>${html}</div>`; }
function analogy(html){ return `<div class="card analogy-card"><h3>🚂 Real-Life Analogy</h3>${html}</div>`; }
function remember(items){ return `<div class="remember-box"><h3>💡 Remember</h3><ul>${items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`; }
function mistake(html){ return `<div class="mistake-box"><h3>⚠️ Common Mistake</h3>${html}</div>`; }
function more(title,html){ return `<details class="more"><summary>${title}</summary><div class="more-inner">${html}</div></details>`; }

/* ---------- live demo card system ----------
   DEMOS holds the raw HTML source (as real strings, not escaped) for
   every live example. A placeholder div is inserted in the content
   HTML; after render, renderDemoCards() builds the tab UI and safely
   assigns the code via .srcdoc / .textContent (no manual escaping). */
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
    <p>Welcome! This portal covers <strong>UI/UX basics and HTML/HTML5</strong>, following the CA1 portions — one small idea at a time, with pictures, real code, live outputs, and quick checks along the way.</p>
    <div class="stat-row">
      <div class="stat-pill">✨ Introduction to UI &amp; UX</div>
      <div class="stat-pill">🌐 HTML &amp; HTML5 Concepts</div>
      <div class="stat-pill">🧪 Practical Exercises 1–3</div>
    </div>
  </div>

  ${explain(`<p>This page is your travel guide. Every station explains <strong>one idea only</strong>, with a real-life comparison and a short "Remember" box so it's easy to recall later. You'll also see <strong>live, clickable code examples</strong> — tap "View Code" to see exactly what produced the output above it.</p>`)}

  <h3 style="margin-top:26px;">Introduction to UI &amp; UX</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="intro" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
  </div>

  <h3 style="margin-top:26px;">HTML and HTML5</h3>
  <div class="route-preview">
    ${STATIONS.filter(s=>s.group==="html" && s.kind==="topic").map(s=>`<div class="route-item"><span class="emoji">${s.icon}</span>${s.label}</div>`).join("")}
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


/* ================= PART 2: HTML & HTML5 CONTENT ================= */

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

CONTENT.htmlstructure = `
  ${explain(`
    <p>Every HTML page follows the same basic skeleton. Let's meet the essential parts.</p>
  `)}

  <div class="chiprow">
    <span class="chip">&lt;!DOCTYPE html&gt; — tells the browser "this is a modern HTML5 page"</span>
    <span class="chip">&lt;html&gt; — wraps the entire page</span>
    <span class="chip">&lt;head&gt; — holds behind-the-scenes info (title, links to styles) — nothing here is visible</span>
    <span class="chip">&lt;title&gt; — the text shown on the browser tab</span>
    <span class="chip">&lt;body&gt; — everything the visitor actually sees goes here</span>
    <span class="chip">&lt;!-- comment --&gt; — notes for yourself; the browser ignores these completely</span>
  </div>

  ${analogy(`<p>Think of an HTML page like a letter. The <strong>&lt;head&gt;</strong> is like the envelope's return address — useful info, but not the letter itself. The <strong>&lt;body&gt;</strong> is the actual letter content the reader unfolds and reads.</p>`)}

  ${demoCard("structure", "Try it: a minimal HTML page", 90)}

  ${mistake(`<p>Forgetting the <code>&lt;!DOCTYPE html&gt;</code> at the very top can make older browsers render your page in unpredictable "quirks mode." Always start every HTML file with it.</p>`)}

  ${remember(["Every page needs: DOCTYPE → html → head (title) → body","Only content inside &lt;body&gt; is visible to the visitor","Comments (&lt;!-- ... --&gt;) help you leave notes without affecting the page"])}
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

CONTENT.htmlheadings = `
  ${explain(`<p>Two of the most-used tags in HTML are headings and paragraphs.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;h1&gt; to &lt;h6&gt; — headings, from biggest/most important (h1) to smallest (h6)</span>
    <span class="chip">&lt;p&gt; — a paragraph of text</span>
    <span class="chip">&lt;br&gt; — a line break (moves to a new line without starting a new paragraph)</span>
    <span class="chip">&lt;hr&gt; — a horizontal line, often used as a section divider</span>
  </div>

  ${demoCard("headings", "Try it: headings, paragraphs, line breaks & a divider", 420)}

  ${mistake(`<p>Don't pick a heading tag just because of its size! Use &lt;h1&gt; for your page's main title, &lt;h2&gt; for major sections, and so on — screen readers rely on this order to help visually impaired users navigate the page. Skipping straight from &lt;h1&gt; to &lt;h4&gt; can confuse them.</p>`)}

  ${remember(["h1 = most important heading, h6 = least important","Only use ONE h1 per page — your main title","p = paragraph · br = line break (no new paragraph) · hr = divider line"])}
`;

DEMOS.format = `<p><b>Bold text</b> and <strong>strongly important text</strong> both look bold, but &lt;strong&gt; also tells screen readers "this really matters."</p>
<p><i>Italic text</i> and <em>emphasized text</em> both look slanted, but &lt;em&gt; adds real emphasis for screen readers too.</p>
<p><u>Underlined text</u> — use sparingly, since underlines usually mean "this is a link" to most readers!</p>
<p><strike>Struck-through text</strike> (old way) and <del>deleted text</del> (modern way) both show a line through text.</p>
<p>Water is written as H<sub>2</sub>O (subscript), and area can be written as m<sup>2</sup> (superscript).</p>
<p>Here is some <mark>highlighted text</mark> that really stands out.</p>
<p><small>This is small print, often used for disclaimers.</small></p>`;

CONTENT.htmlformat = `
  ${explain(`<p>HTML gives you several ways to change how text looks or is understood — these are called inline formatting tags.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;b&gt; bold (visual only) vs &lt;strong&gt; important (visual + meaning)</span>
    <span class="chip">&lt;i&gt; italic (visual only) vs &lt;em&gt; emphasis (visual + meaning)</span>
    <span class="chip">&lt;u&gt; underline</span>
    <span class="chip">&lt;strike&gt; (old) / &lt;del&gt; (modern) — strikethrough text</span>
    <span class="chip">&lt;sub&gt; subscript · &lt;sup&gt; superscript</span>
    <span class="chip">&lt;mark&gt; highlighted text</span>
    <span class="chip">&lt;small&gt; smaller/fine-print text</span>
  </div>

  ${demoCard("format", "Try it: all the text formatting tags together", 340)}

  ${analogy(`<p>&lt;b&gt; and &lt;i&gt; are like using a highlighter pen just for looks. &lt;strong&gt; and &lt;em&gt; are like actually raising your voice while speaking — they change how the meaning comes across, not just the appearance.</p>`)}

  ${remember(["b/i = purely visual · strong/em = visual AND meaningful (better for accessibility)","strike is older; del is the modern equivalent","sub = below the line (H₂O) · sup = above the line (m²)"])}
`;

DEMOS.fontlegacy = `<body bgcolor="LightYellow">
  <p align="center">
    <font face="Arial" color="FireBrick" size="+2">
      This text uses the old-style font tag: Arial face, FireBrick color, and a larger size.
    </font>
  </p>
  <p align="right">This paragraph is right-aligned using the align attribute.</p>
</body>`;

CONTENT.htmlfontlegacy = `
  ${explain(`
    <p>Before CSS became standard, HTML had built-in tags and attributes for styling — you'll still see them in older code and some exercises. It's important to recognize them, even though modern web development prefers CSS instead.</p>
  `)}

  <div class="chiprow">
    <span class="chip">&lt;font face="..." color="..." size="..."&gt; — sets typeface, color, and size (deprecated in HTML5)</span>
    <span class="chip">bgcolor="..." — sets a background color directly on an element like &lt;body&gt;</span>
    <span class="chip">align="..." — aligns content (left / center / right)</span>
  </div>

  ${demoCard("fontlegacy", "Try it: old-style font, bgcolor & align attributes", 160)}

  ${mistake(`<p>The &lt;font&gt; tag, and attributes like <code>bgcolor</code> and <code>align</code>, are <strong>deprecated</strong> in HTML5 — browsers still support them for backward compatibility, but modern websites use <strong>CSS</strong> (e.g. <code>style="color: firebrick;"</code> or a separate stylesheet) instead. You may still be asked to use them in early exercises to understand HTML's history, but avoid them in real projects.</p>`)}

  ${remember(["font, bgcolor, align = old HTML styling — still work, but deprecated","Modern websites use CSS instead of these tags/attributes","Good to recognize them when reading older code"])}
`;

DEMOS.lists = `<h3>Unordered List (bullets)</h3>
<ul>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Bread</li>
</ul>

<h3>Ordered List (numbered)</h3>
<ol>
  <li>Preheat the oven</li>
  <li>Mix the batter</li>
  <li>Bake for 20 minutes</li>
</ol>

<h3>Ordered List with type='A' (lettered)</h3>
<ol type="A">
  <li>Option A</li>
  <li>Option B</li>
  <li>Option C</li>
</ol>`;

CONTENT.htmllists = `
  ${explain(`<p>Lists are used to present items clearly — either with bullets or in a set order.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;ul&gt; — unordered list (bullet points), holds &lt;li&gt; items</span>
    <span class="chip">&lt;ol&gt; — ordered list (numbered), holds &lt;li&gt; items</span>
    <span class="chip">type="A" on &lt;ol&gt; — switches numbering to capital letters (A, B, C...) instead of 1, 2, 3</span>
    <span class="chip">&lt;li&gt; — a single list item, used inside either list type</span>
  </div>

  ${demoCard("lists", "Try it: bullet lists, numbered lists & lettered lists", 420)}

  ${remember(["ul = bullets (unordered) · ol = numbers (ordered)","li = one item, goes inside ul or ol","type='A' on ol switches to letters instead of numbers"])}
`;

DEMOS.links = `<nav>
  <a href="#section1">Jump to Section 1 (internal link)</a> |
  <a href="https://www.wikipedia.org" target="_blank">Visit Wikipedia (external link, opens in a new tab)</a>
</nav>
<hr>
<h3 id="section1">Section 1</h3>
<p>Clicking the first link above jumps straight down to this heading, because its id matches the link's #section1.</p>`;

CONTENT.htmllinks = `
  ${explain(`<p>Links are what make the web "webbed" — they connect pages and sections together.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;a href="..."&gt; — creates a clickable link; href holds the destination</span>
    <span class="chip">href="#id" — an internal link that jumps to an element with a matching id on the SAME page</span>
    <span class="chip">href="https://..." — an external link to another website</span>
    <span class="chip">target="_blank" — opens the link in a new browser tab</span>
    <span class="chip">&lt;nav&gt; — a semantic wrapper that groups navigation links together</span>
  </div>

  ${demoCard("links", "Try it: internal jump-link and an external link", 160)}

  ${remember(["a href = the link tag · href holds where it goes","#id links jump within the same page","target='_blank' opens a new tab — great for external links so you don't lose your place"])}
`;

DEMOS.images = `<img src="swiss-mountains.jpg" alt="Snow-covered Swiss Alps above a mountain village" width="320">

<figure>
  <img src="swiss-mountains.jpg" alt="Snow-covered Swiss Alps" width="320">
  <figcaption>The Matterhorn towering over a Swiss village</figcaption>
</figure>`;

CONTENT.htmlimages = `
  ${explain(`<p>Images bring a page to life. HTML5 also gives us a way to properly caption them.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;img src="..." alt="..."&gt; — displays an image; src is the file path, alt is a text description</span>
    <span class="chip">width / height — control the displayed size of the image</span>
    <span class="chip">&lt;figure&gt; — wraps an image (or any content) together with its caption</span>
    <span class="chip">&lt;figcaption&gt; — the caption text for the figure</span>
  </div>

  ${demoCard("images", "Try it: a plain image, then a captioned figure", 460)}

  ${mistake(`<p>Never skip the <code>alt</code> attribute! It's what screen readers announce to visually impaired users, and it's what shows up if the image fails to load. "alt='image'" is not helpful — describe what's actually in the picture.</p>`)}

  ${remember(["img = image tag · src = file path · alt = text description (important for accessibility!)","figure + figcaption = an image (or content) with a proper, linked caption"])}
`;

DEMOS.tables = `<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Day</th>
    <th>Subject</th>
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

CONTENT.htmltables = `
  ${explain(`<p>Tables organize information into neat rows and columns.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;table&gt; — the table container</span>
    <span class="chip">&lt;tr&gt; — a table row</span>
    <span class="chip">&lt;th&gt; — a header cell (bold, centered by default)</span>
    <span class="chip">&lt;td&gt; — a normal data cell</span>
    <span class="chip">border, cellpadding, cellspacing — attributes controlling the table's border thickness, inner cell padding, and gap between cells</span>
  </div>

  ${demoCard("tables", "Try it: a simple table with a header row", 200)}

  ${remember(["table > tr > th/td — table, then rows, then header or data cells","th = header cell (bold) · td = normal cell","border/cellpadding/cellspacing style the table's borders and spacing"])}
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

CONTENT.htmlsemantic = `
  ${explain(`
    <p>Before HTML5, developers used generic &lt;div&gt; tags for everything, with class names like "header" or "footer" to fake structure. HTML5 introduced <strong>semantic tags</strong> — elements whose NAME itself describes its purpose, which helps both browsers and screen readers understand the page's structure.</p>
  `)}

  <div class="chiprow">
    <span class="chip">&lt;header&gt; — introductory content, usually at the top</span>
    <span class="chip">&lt;nav&gt; — a block of navigation links</span>
    <span class="chip">&lt;main&gt; — the primary content of the page (only one per page)</span>
    <span class="chip">&lt;section&gt; — a distinct, themed block of content</span>
    <span class="chip">&lt;article&gt; — a self-contained piece of content (like a blog post)</span>
    <span class="chip">&lt;aside&gt; — related but secondary content, like a sidebar</span>
    <span class="chip">&lt;footer&gt; — closing content, usually at the bottom</span>
  </div>

  ${demoCard("semantic", "Try it: a full semantic page skeleton", 480)}

  ${analogy(`<p>Semantic tags are like properly labeled boxes when moving houses. Writing "Kitchen Items" on a box (semantic) is far more useful than writing "Box 7" and hoping you remember what's inside (a generic &lt;div&gt;).</p>`)}

  ${remember(["Semantic tags describe their purpose by name — great for accessibility & SEO","header/nav/main/footer = overall page structure","section/article/aside = content-level structure inside main"])}
`;

DEMOS.interactive = `<p>Here is some <mark>highlighted text</mark> drawing attention to something important.</p>

<details>
  <summary>Click to reveal a hidden tip</summary>
  <p>This content stays hidden until the summary above is clicked — great for FAQs!</p>
</details>

<br>
<dialog open>
  <p>This is a dialog box. In real use, it usually starts hidden and is opened with JavaScript (like a pop-up announcement).</p>
</dialog>`;

CONTENT.htmlinteractive = `
  ${explain(`<p>HTML5 introduced a few tags that add built-in interactivity, without needing any JavaScript at all.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;mark&gt; — highlights text, like using a highlighter pen</span>
    <span class="chip">&lt;details&gt; + &lt;summary&gt; — creates a collapsible "click to expand" section</span>
    <span class="chip">&lt;dialog&gt; — a pop-up box, usually shown/hidden using JavaScript</span>
  </div>

  ${demoCard("interactive", "Try it: mark, a collapsible details/summary, and a dialog", 260)}

  ${remember(["mark = highlighted text","details + summary = built-in expandable/collapsible content, no JavaScript needed","dialog = a pop-up box element; typically opened/closed using JavaScript"])}
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
  <input type="submit" value="Submit">
  <input type="reset" value="Clear">
</form>`;

CONTENT.htmlforms = `
  ${explain(`<p>Forms let users type in, choose, and submit information — the basis of logins, sign-ups, and surveys.</p>`)}

  <div class="chiprow">
    <span class="chip">&lt;form&gt; — the container for all input elements</span>
    <span class="chip">&lt;fieldset&gt; + &lt;legend&gt; — groups related fields together with a titled border</span>
    <span class="chip">&lt;label for="id"&gt; — a text label linked to a specific input, so clicking the label also focuses the input</span>
    <span class="chip">&lt;input type="text/password/radio/checkbox"&gt; — different input types for different kinds of data</span>
    <span class="chip">&lt;select&gt; + &lt;option&gt; — a dropdown menu</span>
    <span class="chip">&lt;textarea&gt; — a multi-line text box</span>
    <span class="chip">&lt;input type="submit"/"reset"&gt; — buttons to send or clear the form</span>
  </div>

  ${demoCard("forms", "Try it: a full sample form", 440)}

  ${mistake(`<p>Always pair every &lt;input&gt; with a &lt;label&gt; using matching <code>for</code> and <code>id</code> attributes. Without this link, screen reader users won't know what a field is for, and sighted users lose the convenience of clicking the label to focus the field.</p>`)}

  ${remember(["form = wraps the whole form · fieldset/legend = groups fields with a title","label's for must match the input's id","text, password, radio, checkbox = common input types · select = dropdown · textarea = multi-line box"])}
`;

/* ================= PART 3: PRACTICAL EXERCISES WALKTHROUGH ================= */

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
    <p><strong>Exercise 1 — Personal Profile Webpage using HTML Tags.</strong> The brief: create a personal profile page using paragraph tags, heading tags, formatting tags, the font tag, alignment tags, and lists. This exercise deliberately uses the "classic" HTML styling tags (font, bgcolor, align, strike, u, b) so you get comfortable with the full toolbox before switching to CSS later.</p>
  `)}

  ${demoCard("ex1", "Live Output — Exercise 1", 900)}

  <h3 style="margin-top:24px;">Walking through the code</h3>
  <ul>
    <li><code>&lt;center&gt;</code> and <code>&lt;font color="FireBrick"&gt;</code> center and color the big "My Personal Profile" title.</li>
    <li><code>&lt;hr&gt;</code> and <code>&lt;br&gt;</code> add a divider line and a blank line right below the title.</li>
    <li>Inside the Personal Information section, <code>&lt;font face='Arial' size="+2"&gt;</code> sets the whole block's typeface and bumps its size up, while individual <code>&lt;b&gt;</code> tags bold just the actual answers.</li>
    <li>The Age line combines <code>&lt;strike&gt;</code> (crosses out "36") with <code>&lt;u&gt;</code> (underlines "3+6") — a playful way to show formatting tags stacking together.</li>
    <li>Educational Details and Hobbies both use <code>&lt;ul&gt;</code> for simple bullet lists.</li>
    <li>Dreams uses <code>&lt;ol type='A'&gt;</code> so the list numbers as A, B, C instead of 1, 2, 3 — and <code>&lt;i&gt;</code> italicizes "ISS" inside one item.</li>
    <li>The closing line uses <code>&lt;p align='center'&gt;</code> to center the paragraph, with <code>&lt;big&gt;</code> making the text larger.</li>
  </ul>

  ${remember(["This exercise = practice with classic formatting tags: font, b, i, u, strike, big, center, align","Structure: title → personal info → educational details → hobbies → dreams → closing note","Every visual choice here could also be done with CSS — that comes in later exercises"])}
`;

DEMOS.ex2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Travel Blog</title>
</head>
<body background="bg2.png">

    <!-- Header section -->
    <header>
        <h1>My Travel Blog</h1>
        <p>Adventures and experiences from around the world</p>
    </header>

    <!-- Navigation bar -->
    <nav>
        <a href="Ex2Demo.html" target="_blank">Home</a> |
        <a href="#expenses">Expenses</a> |
        <a href="#about-me">About Me</a> |
        <a href="https://www.google.com" target="_blank">Google</a>
    </nav>

    <!-- Main content area -->
    <main>
        <!-- Blog post section -->
        <section>
            <h2>Exploring the Mountains of Switzerland</h2>
            <p>Published on <mark>November 8, 2024</mark></p>
            <article>
                <p>Switzerland is a paradise for mountain lovers. The towering Alps, covered in snow for most of the year, offer some of the most breathtaking views on the planet. During my trip, I had the chance to explore famous spots like the Matterhorn, Lake Geneva, and the scenic towns nestled among the mountains.</p>
                
                <!-- Image of mountains with figure and figcaption -->
                <figure>
                    <img src="swiss-mountains.jpg" alt="Swiss Alps View" width="600" height="400">
                    <figcaption>The stunning Swiss Alps near Zermatt</figcaption>
                </figure>

                <p>The experience of hiking through these mountains and seeing the beautiful landscapes unfold at every turn was nothing short of magical. The hospitality of the locals and the delicious food made the trip even more memorable.</p>
            </article>
        </section>

        <!-- Travel Expense Table with details and summary for additional info -->
        <section id="expenses">
            <h3>Travel Expenses</h3>
            <p>Here's a breakdown of my expenses during my trip to Switzerland (in INR):</p>
            <table border="1" cellpadding="8" cellspacing="0">
                <tr>
                    <th>Item</th>
                    <th>Cost (INR)</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Flight</td>
                    <td>₹41,500</td>
                    <td>Round-trip from New York</td>
                </tr>
                <tr>
                    <td>Accommodation</td>
                    <td>₹24,900</td>
                    <td>3 nights at a hostel in Zermatt</td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>₹12,450</td>
                    <td>Local Swiss cuisine</td>
                </tr>
                <tr>
                    <td>Transportation</td>
                    <td>₹8,300</td>
                    <td>Train and bus passes</td>
                </tr>
            </table>
            <br>
            <details>
                <summary>Click for tips on budgeting your Switzerland trip</summary>
                <p>Consider staying in hostels, using public transport, and enjoying picnics with local grocery items to save money.</p>
            </details>
        </section>

        <!-- Pop-up dialog box for future travel plans -->
        <dialog id="futurePlansDialog">
            <p>Exciting news! I'm planning a new adventure to the Rocky Mountains soon. Stay tuned for updates!</p>
        </dialog>
    </main>

    <!-- Sidebar area for additional information -->
    <aside id="about-me">
        <h3>About Me</h3>
        <p>Hello! I'm a travel enthusiast who loves to explore new places and experience different cultures. Follow my blog for more travel tips and stories from around the world!</p>
    </aside>

    <!-- Footer section -->
    <footer>
        <p>&copy; 2024 My Travel Blog</p>
    </footer>

</body>
</html>`;

CONTENT.ex2walk = `
  ${explain(`
    <p><strong>Exercise 2 — Blog Page using HTML5 Tags.</strong> The brief: design a blog page using HTML5 semantic tags — header, footer, main, article, section, aside, mark, nav (with internal AND external links), dialog, img, table, figure/figcaption, details/summary. This exercise is really a showcase of everything covered in the "Semantic Layout" and "Interactive HTML5" stations, all working together on one real page.</p>
  `)}

  ${demoCard("ex2", "Live Output — Exercise 2", 1500)}

  <h3 style="margin-top:24px;">Walking through the code</h3>
  <ul>
    <li><code>&lt;body background="bg2.png"&gt;</code> tiles a background image across the whole page — a legacy attribute, similar in spirit to the font/bgcolor tags from Exercise 1.</li>
    <li><code>&lt;header&gt;</code> holds the blog's title and tagline; <code>&lt;nav&gt;</code> right below it holds four links — two <strong>internal</strong> (<code>Ex2Demo.html</code> and <code>#expenses</code>, an anchor jump) and two <strong>external</strong> (opened with <code>target="_blank"</code> so visitors don't lose their place).</li>
    <li>Inside <code>&lt;main&gt;</code>, the first <code>&lt;section&gt;</code> is the actual blog post: an <code>&lt;article&gt;</code> holding the story text, with <code>&lt;mark&gt;</code> highlighting the publish date, and a <code>&lt;figure&gt;</code>+<code>&lt;figcaption&gt;</code> pairing the mountain photo with its caption.</li>
    <li>A second <code>&lt;section id="expenses"&gt;</code> (matching the nav's <code>#expenses</code> link) holds a <code>&lt;table&gt;</code> of costs, followed by a <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> block hiding budgeting tips until clicked.</li>
    <li>A <code>&lt;dialog&gt;</code> sits ready with a future-plans message — notice it has no <code>open</code> attribute here, so (unlike our earlier demo) it stays invisible unless opened with JavaScript.</li>
    <li><code>&lt;aside id="about-me"&gt;</code> — matching the nav's "About Me" link — holds bio text separate from the main blog content.</li>
    <li><code>&lt;footer&gt;</code> closes the page with a copyright line, using <code>&amp;copy;</code> to print the © symbol.</li>
  </ul>

  ${remember(["This exercise = a full real-world use of semantic HTML5 tags working together","nav links can be internal (#id anchors, same page) or external (full URL, new tab)","dialog without the open attribute stays hidden until JavaScript opens it"])}
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
                        <!-- Additional age options can be added here -->
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
    <p><strong>Exercise 3 — User Input Form using HTML5 Form Tags.</strong> The brief: build the form shown in the practical sheet, using proper HTML5 form tags. This exercise is a direct application of everything in the "Forms & Input Elements" station.</p>
  `)}

  ${demoCard("ex3", "Live Output — Exercise 3", 620)}

  <h3 style="margin-top:24px;">Walking through the code</h3>
  <ul>
    <li><code>&lt;body bgcolor="LightBlue"&gt;</code> tints the whole page, while an inline <code>style</code> on the <code>&lt;section&gt;</code> gives the form card its own SeaShell background and padding.</li>
    <li>The form is split into three <code>&lt;fieldset&gt;</code> groups — <em>Personal Particulars</em>, <em>Languages</em>, and <em>Instruction</em> — each with its own <code>&lt;legend&gt;</code> title, so related fields are visually grouped.</li>
    <li><strong>Personal Particulars</strong> uses <code>&lt;input type="text"&gt;</code> for the name, <code>type="password"&gt;</code> for the password (which hides typed characters), two <code>type="radio"&gt;</code> buttons sharing the same <code>name="gender"</code> (so only one can be selected at a time), and a <code>&lt;select&gt;</code> dropdown for age.</li>
    <li><strong>Languages</strong> uses three <code>&lt;input type="checkbox"&gt;</code> boxes — unlike radio buttons, checkboxes let you tick <em>more than one</em> at once.</li>
    <li><strong>Instruction</strong> uses a <code>&lt;textarea&gt;</code> for multi-line free text, complete with a helpful <code>placeholder</code>.</li>
    <li>Finally, <code>&lt;input type="submit"&gt;</code> and <code>&lt;input type="reset"&gt;</code> give the SEND and CLEAR buttons.</li>
  </ul>

  ${mistake(`<p>Notice every &lt;input&gt; here is paired with a &lt;label for="..."&gt; that matches its <code>id</code> — try clicking directly on a label like "Male" in the live output above, and watch its radio button get selected too!</p>`)}

  ${remember(["This exercise = a real registration-style form using fieldset, legend, label, and multiple input types","Radio buttons sharing the same name = only one can be picked","Checkboxes = multiple selections allowed"])}
`;

/* ================= QUIZ DATA ================= */
const QUIZZES = {
  quizHtml: [
    {q:"Which tag holds everything visible on a webpage?", opts:["head","body","title","html"], a:1},
    {q:"Which heading tag is the biggest/most important?", opts:["h6","h1","h3","p"], a:1},
    {q:"Which tag creates a line break without starting a new paragraph?", opts:["hr","br","p","div"], a:1},
    {q:"Which tag is both bold AND tells screen readers 'this is important'?", opts:["b","strong","i","mark"], a:1},
    {q:"Which old-style tag sets font face, color, and size directly?", opts:["style","font","css","format"], a:1},
    {q:"Which list type uses numbers or letters instead of bullets?", opts:["ul","ol","li","dl"], a:1},
    {q:"To make an ol count as A, B, C instead of 1, 2, 3, you set:", opts:["type='A'","style='A'","class='A'","format='A'"], a:0},
    {q:"Which attribute makes a link open in a new browser tab?", opts:["href='_blank'","target='_blank'","new='tab'","open='blank'"], a:1},
    {q:"Which pair of tags joins an image together with its caption?", opts:["img + caption","picture + title","figure + figcaption","image + label"], a:2},
    {q:"In a table, which tag creates a bold, centered header cell?", opts:["td","tr","th","table"], a:2},
    {q:"Which HTML5 tag is meant for the primary content of a page (only one per page)?", opts:["section","article","main","div"], a:2},
    {q:"Which tag creates a collapsible 'click to expand' section with no JavaScript needed?", opts:["dialog","details + summary","mark","aside"], a:1},
    {q:"In a form, which two attributes must match to properly link a label to an input?", opts:["name and id","for and id","for and name","id and type"], a:1},
    {q:"Which input type hides the characters a user types?", opts:["text","password","hidden","checkbox"], a:1},
  ],
  quizPractical: [
    {q:"In Exercise 1, which tag was used to cross out the age '36'?", opts:["del","strike","u","mark"], a:1},
    {q:"In Exercise 1, the Dreams list used which list type to get A, B, C numbering?", opts:["ul","ol type='A'","ol type='1'","dl"], a:1},
    {q:"In Exercise 2, which technique tiled the heart-pattern image across the whole page?", opts:["An img tag","The background attribute on body","A figure tag","An inline font tag"], a:1},
    {q:"In Exercise 2, which tag highlighted the blog's publish date?", opts:["mark","strong","em","small"], a:0},
    {q:"In Exercise 2, the 'Expenses' section could be jumped to directly from the nav because of:", opts:["A matching id and #href anchor","A matching class name","JavaScript","A matching font"], a:0},
    {q:"In Exercise 2, which tag keeps the 'About Me' content visually separated as extra/related info?", opts:["section","aside","article","footer"], a:1},
    {q:"In Exercise 3, what ensures only ONE gender radio button can be selected at a time?", opts:["Different id values","The same name attribute","The same value attribute","The same class"], a:1},
    {q:"In Exercise 3, which input type allows MORE than one option to be selected at once?", opts:["radio","checkbox","select","text"], a:1},
    {q:"In Exercise 3, fieldset and legend were used to:", opts:["Validate form data","Visually group related fields under a title","Submit the form","Style the background"], a:1},
  ],
};

/* ================= SUMMARY ================= */
function buildSummaryHTML(){
  return `
    ${explain(`<p>Great job reaching the last station! Here's a one-page recap of everything covered.</p>`)}
    <div class="card">
      <h3 style="margin-bottom:8px;">Introduction to UI &amp; UX</h3>
      <ul>
        <li><strong>UI (User Interface):</strong> the look and feel of a product — fonts, colors, buttons, layout, spaces.</li>
        <li><strong>UX (User Experience):</strong> the overall experience of using the product.</li>
        <li><strong>UX Design</strong> = Content + Usability + UI Design + User Interaction Design.</li>
        <li>Users form an opinion about an app in just <strong>50 milliseconds</strong> — first impressions matter.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">HTML &amp; HTML5 Concepts</h3>
      <ul>
        <li><strong>Structure:</strong> DOCTYPE → html → head (title) → body.</li>
        <li><strong>Text:</strong> headings (h1–h6), paragraphs, formatting tags (b/strong, i/em, u, strike/del, sub/sup, mark).</li>
        <li><strong>Legacy styling:</strong> font, bgcolor, align — recognize them, but prefer CSS today.</li>
        <li><strong>Lists:</strong> ul (bullets) vs ol (numbered, or type='A' for letters).</li>
        <li><strong>Links:</strong> a href, internal (#id) vs external, target="_blank".</li>
        <li><strong>Images:</strong> img (src/alt), figure + figcaption.</li>
        <li><strong>Tables:</strong> table > tr > th/td.</li>
        <li><strong>Semantic layout:</strong> header, nav, main, section, article, aside, footer.</li>
        <li><strong>Interactive tags:</strong> mark, details + summary, dialog.</li>
        <li><strong>Forms:</strong> form, fieldset/legend, label, input types, select, textarea.</li>
      </ul>
    </div>
    <div class="card">
      <h3 style="margin-bottom:8px;">Practical Exercises</h3>
      <ul>
        <li><strong>Exercise 1:</strong> Personal Profile — classic formatting tags (font, b, i, u, strike, big, center).</li>
        <li><strong>Exercise 2:</strong> Travel Blog — full semantic HTML5 layout with nav, figure, table, details, dialog.</li>
        <li><strong>Exercise 3:</strong> Input Form — fieldset-grouped form with multiple input types.</li>
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

  /* clickable diagram nodes */
  contentEl.querySelectorAll(".node.clickable").forEach(node=>{
    node.addEventListener("click",()=>{
      const pop = node.querySelector(".node-pop");
      const wasOpen = node.classList.contains("revealed");
      pop.textContent = node.dataset.pop;
      node.classList.toggle("revealed", !wasOpen);
    });
  });

  /* tabs (if any station uses them) */
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

  /* quizzes — each quizblock is self-contained, scoped with querySelectorAll (no global ids) */
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
