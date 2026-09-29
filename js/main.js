/* =========================================================
   Sohail M — Portfolio interactions
   Your CONTENT lives in the CONFIG block below — edit these
   arrays to update the site. No framework, no build step.
   ========================================================= */

const CONFIG = {
  // Rotating role titles after "I'm a …" in the hero
  typewriter: [
    ".NET & Azure Engineer",
    "Integration Developer",
    "Cloud-Native Developer",
    "GenAI Builder",
    "IaC Practitioner",
  ],

  // About — bento cards. One b-span-4 (main), the rest b-span-2.
  about: [
    { icon: "⚡", title: "The short version", span: "b-span-4",
      body: "I build scalable .NET and Azure solutions that actually hold up in production. Five years deep in the cloud — wiring together Data Factory, Logic Apps, Service Bus, and Function Apps, then pushing it all live through CI/CD. I lean hard into Azure OpenAI and clean, maintainable code, because shipping something robust beats shipping something clever. Design to deployment, I own the whole arc." },
    { icon: "🎯", title: "Focus", span: "b-span-2",
      body: "Azure integration + .NET, done event-driven. Logic Apps, Service Bus, Function Apps, and IaC with Bicep, ARM, and Terraform — plus GenAI baked in where it earns its place." },
    { icon: "🚀", title: "Currently", span: "b-span-2",
      body: "Senior Consultant at Absolute Labs, leading end-to-end Azure integration projects — retailer management, live logistics tracking, and the CI/CD to keep it all moving." },
    { icon: "📍", title: "Based in", span: "b-span-2",
      body: "Pune, India. Building for the cloud, from the ground." },
    { icon: "🏅", title: "Certified", span: "b-span-2",
      body: "Microsoft Certified — AZ-204 (Azure Developer Associate) and AZ-900 (Azure Fundamentals). The badges match the work." },
    { icon: "🦖", title: "Fun fact", span: "b-span-2",
      body: "I named a GenAI VS Code extension 'Ragzilla' — part RAG, part Godzilla, fully shipped." },
  ],

  // Skills grouped by category
  skills: [
    { name: "Languages", items: [
      { label: "C# / .NET", short: "C#" }, { label: "Python", short: "Py" },
      { label: "TypeScript", short: "TS" }, { label: "SQL", short: "SQL" },
      { label: "PowerShell", short: "PS" },
    ]},
    { name: "Cloud & Azure", items: [
      { label: "Logic Apps", short: "LA" }, { label: "Function Apps", short: "Fn" },
      { label: "Service Bus", short: "SB" }, { label: "Data Factory", short: "ADF" },
      { label: "API Management", short: "APIM" }, { label: "Cosmos DB", short: "Cos" },
      { label: "Key Vault", short: "KV" }, { label: "Blob Storage", short: "Blob" },
      { label: "Synapse", short: "Syn" }, { label: "SQL Azure", short: "SQL" },
    ]},
    { name: "AI / GenAI", items: [
      { label: "Azure OpenAI", short: "AOAI" }, { label: "Azure AI Foundry", short: "AIF" },
      { label: "Generative AI", short: "Gen" }, { label: "Claude Code", short: "CC" },
    ]},
    { name: "DevOps & IaC", items: [
      { label: "Bicep", short: "Bic" }, { label: "ARM Templates", short: "ARM" },
      { label: "Terraform", short: "TF" }, { label: "CI/CD Pipelines", short: "CI" },
      { label: "Azure DevOps", short: "ADO" },
    ]},
    { name: "Architecture & Frontend", items: [
      { label: "CQRS", short: "CQRS" }, { label: "MediatR", short: "Med" },
      { label: "Event-Driven", short: "EDA" }, { label: "Angular", short: "Ng" },
      { label: "Redis Cache", short: "Red" },
    ]},
  ],

  // Projects — most impressive first. metric: "" for none.
  projects: [
    { emoji: "🛡️", title: "YAY or NAY", metric: "Live demo",
      desc: "A creator-vetted, no-fake-reviews product platform — honest YAY/NAY verdicts, proof badges, and a de-influencing 'NAY list'. Researched the market and built end to end.",
      tags: ["Product", "JavaScript", "Research", "GitHub Pages"],
      link: "https://msohail15999.github.io/yay-or-nay/", repo: "https://github.com/msohail15999/yay-or-nay" },
    { emoji: "🦖", title: "Ragzilla — VS Code AI Extension", metric: "+30% dev productivity",
      desc: "A Copilot-style VS Code extension that generates Hardware Description Language on demand — TypeScript front end, Python GenAI backend, and a chat UI engineers actually enjoy using.",
      tags: ["TypeScript", "Python", "Generative AI", "VS Code API"], link: "#", repo: "#" },
    { emoji: "🔀", title: "WebMethods → Azure Migration", metric: "99% migration accuracy",
      desc: "Led the full lift off a legacy WebMethods stack onto Azure — rebuilt the workflows in Data Factory and Logic Apps with external API integration, retries, and bulletproof error handling.",
      tags: ["Azure Data Factory", "Logic Apps", "API Integration", "Error Handling"], link: "#", repo: "#" },
    { emoji: "🏗️", title: "Microsoft AI Infrastructure", metric: "",
      desc: "Authored the IaC backbone for Microsoft's cloud — Bicep, ARM, and Terraform templates with automated pipelines and compliance baked in for consistent, scalable deployments.",
      tags: ["Bicep", "Terraform", "ARM", "CI/CD"], link: "#", repo: "#" },
    { emoji: "🛒", title: "Retail Transformation — TFG London", metric: "",
      desc: "Designed an event-driven Azure integration that moves data between legacy ERP systems, built on Azure Integration PaaS and data services.",
      tags: ["Azure Integration PaaS", "Event-Driven", "Data Services", "ERP"], link: "#", repo: "#" },
    { emoji: "🧠", title: "GenAI Research & Development", metric: "",
      desc: "Explored and codified best practices for Generative AI models per use case, then tuned performance and monitoring inside Azure AI Foundry.",
      tags: ["Azure OpenAI", "Azure AI Foundry", "Generative AI", "Monitoring"], link: "#", repo: "#" },
    { emoji: "🩺", title: "Clinicians Management & Tracking", metric: "",
      desc: "Built the .NET service layer on clean CQRS and MediatR patterns, wired into Azure Service Bus and Function Apps — shipped Agile, Scrum-style.",
      tags: [".NET", "CQRS", "MediatR", "Service Bus"], link: "#", repo: "#" },
    { emoji: "♻️", title: "ARM → Bicep & Terraform Migration", metric: "",
      desc: "Migrated a fleet of ARM templates to Bicep and Terraform across Azure services, with DevOps pipelines and full parameterization for repeatable, reviewable deployments.",
      tags: ["ARM", "Bicep", "Terraform", "Azure DevOps"], link: "#", repo: "#" },
    { emoji: "🐾", title: "Logistics & Orders — Pet Products", metric: "",
      desc: "Full-stack build for pet-products logistics and order management — an Angular front end over a .NET, Logic Apps, and Azure Functions backend, shipped through CI/CD.",
      tags: ["Angular", ".NET", "Logic Apps", "Azure Functions"], link: "#", repo: "#" },
  ],

  // Work experience (most recent first)
  experience: [
    { when: "Jun 2026 – Present", role: "Senior Consultant, .NET & Azure Integration", org: "Absolute Labs",
      text: "I lead Azure integration projects end-to-end, architecting event-driven systems from design through deployment.",
      points: [
        "Architect and ship end-to-end Azure integration solutions for retailer management and live logistics/package tracking",
        "Build event-driven workflows on Service Bus, Logic Apps, Function Apps, Storage, Key Vault, and Redis Cache",
        "Enforce infrastructure-as-code with Bicep, CI/CD pipelines, and governance policies for secure, scalable cloud",
      ]},
    { when: "Aug 2024 – Jun 2026", role: "System Engineer", org: "Tata Consultancy Services",
      text: "I built AI-powered developer tooling and .NET data pipelines while running Azure infrastructure for Microsoft.",
      points: [
        "Shipped a VS Code extension (TypeScript + Python GenAI backend) with a Copilot-style chat UI, lifting developer efficiency 30%",
        "Engineered a .NET app converting data across YAML, Excel, and Parquet into automated Azure Data Factory ingestion",
        "Ran Microsoft's Azure infrastructure with Policies and IaC templates, and built Copilot agents that cut routine work 25%",
      ]},
    { when: "Jul 2021 – Jul 2024", role: "Consultant, Azure Integration Developer", org: "Neudesic Technologies",
      text: "I worked across many projects as a .NET and Azure integration developer, picking up Angular on the frontend.",
      points: [
        "Delivered .NET and Azure integration solutions across a range of client projects",
        "Grew into full-stack work, becoming proficient with Angular on the frontend",
      ]},
  ],

  // Education
  education: [
    { when: "2021", title: "B.Tech, Computer Science & Engineering", org: "Jayawantrao Sawant College of Engineering",
      detail: "Where the .NET-and-cloud obsession started — CS fundamentals, data structures, and my first real code." },
    { when: "2017", title: "Higher Secondary (12th)", org: "Maharashtra State Board",
      detail: "English medium — the runway into engineering." },
    { when: "2015", title: "Secondary School (10th)", org: "Maharashtra State Board",
      detail: "English medium — solid results and an early love for getting things right." },
  ],

  // Certifications (issuer optional)
  certifications: [
    { name: "Azure Developer Associate", issuer: "Microsoft", code: "AZ-204", emoji: "☁️" },
    { name: "Azure Fundamentals", issuer: "Microsoft", code: "AZ-900", emoji: "⚡" },
    { name: "MS-CIT", issuer: "", code: "", emoji: "💻" },
    { name: "English Typing", issuer: "", code: "", emoji: "⌨️" },
  ],

  // Optionally auto-load public repos from GitHub (appended after the projects above)
  githubAutoload: { enabled: false, username: "msohail15999", count: 3 },
};

/* ---------------- Utilities ---------------- */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const esc = (str) => String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------------- Year ---------------- */
$("#year").textContent = new Date().getFullYear();

/* ---------------- Typewriter ---------------- */
(function typewriter() {
  const el = $("#typed");
  if (!el) return;
  const words = CONFIG.typewriter;
  let w = 0, c = 0, deleting = false;
  function tick() {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!deleting && c < word.length) { c++; setTimeout(tick, 80); }
    else if (!deleting && c === word.length) { deleting = true; setTimeout(tick, 1700); }
    else if (deleting && c > 0) { c--; setTimeout(tick, 40); }
    else { deleting = false; w = (w + 1) % words.length; setTimeout(tick, 350); }
  }
  tick();
})();

/* ---------------- Render: About bento ---------------- */
(function renderBento() {
  const grid = $("#bentoGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.about.map((c, i) => `
    <div class="card ${c.span} ${i === 0 ? "card-accent" : ""} reveal">
      <span class="ico">${c.icon}</span>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.body)}</p>
    </div>`).join("");
})();

/* ---------------- Render: Skills (grouped) ---------------- */
(function renderSkills() {
  const wrap = $("#skillCats");
  if (!wrap) return;
  wrap.innerHTML = CONFIG.skills.map(cat => `
    <div class="skill-cat">
      <h4>${esc(cat.name)}</h4>
      <div class="row">
        ${cat.items.map(s => `<div class="skill"><span class="badge">${esc(s.short)}</span><span>${esc(s.label)}</span></div>`).join("")}
      </div>
    </div>`).join("");
})();

/* ---------------- Render: Projects ---------------- */
function projectCard(p) {
  const repoLink = p.repo && p.repo !== "#" ? `<a href="${p.repo}" target="_blank" rel="noopener">Code ↗</a>` : "";
  const liveLink = p.link && p.link !== "#" ? `<a href="${p.link}" target="_blank" rel="noopener">Live ↗</a>` : "";
  const metric = p.metric ? `<span class="metric">${esc(p.metric)}</span>` : "";
  return `
    <article class="project reveal">
      <div class="project-top"><span class="emoji">${p.emoji || "📦"}</span></div>
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        ${metric}
        <p>${esc(p.desc)}</p>
        <div class="project-tags">${(p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${liveLink || repoLink ? `<div class="project-links">${liveLink}${repoLink}</div>` : ""}
      </div>
    </article>`;
}
(function renderProjects() {
  const grid = $("#projectsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.projects.map(projectCard).join("");

  const gh = CONFIG.githubAutoload;
  if (gh.enabled && gh.username) {
    fetch(`https://api.github.com/users/${gh.username}/repos?sort=updated&per_page=100`)
      .then(r => r.ok ? r.json() : [])
      .then(repos => {
        repos.filter(r => !r.fork).slice(0, gh.count).forEach(r => {
          grid.insertAdjacentHTML("beforeend", projectCard({
            emoji: "⭐", title: r.name, desc: r.description || "A GitHub repository.",
            tags: [r.language || "Code", `★ ${r.stargazers_count}`],
            link: r.homepage || "#", repo: r.html_url,
          }));
        });
        observeReveals();
      }).catch(() => {});
  }
})();

/* ---------------- Render: Timelines (work + education) ---------------- */
function timelineItem(t) {
  const points = t.points ? `<ul>${t.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : "";
  const body = t.text ? `<p>${esc(t.text)}</p>` : (t.detail ? `<p>${esc(t.detail)}</p>` : "");
  return `
    <div class="tl-item">
      <span class="when">${esc(t.when)}</span>
      <h3>${esc(t.role || t.title)}</h3>
      <div class="org">${esc(t.org)}</div>
      ${body}
      ${points}
    </div>`;
}
(function renderTimelines() {
  const work = $("#timeline");
  if (work) work.innerHTML = CONFIG.experience.map(timelineItem).join("");
  const edu = $("#eduTimeline");
  if (edu) edu.innerHTML = CONFIG.education.map(timelineItem).join("");
})();

/* ---------------- Render: Certifications ---------------- */
(function renderCerts() {
  const grid = $("#certsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.certifications.map(c => `
    <div class="cert">
      <span class="cico">${c.emoji || "🏅"}</span>
      <div>
        <h4>${esc(c.name)}</h4>
        ${c.issuer ? `<div class="cissuer">${esc(c.issuer)}</div>` : ""}
      </div>
      ${c.code ? `<span class="ccode">${esc(c.code)}</span>` : ""}
    </div>`).join("");
})();

/* ---------------- Navbar scroll state ---------------- */
const nav = $("#nav");
const toTop = $("#toTop");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 40);
  toTop.classList.toggle("show", y > 600);
}, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------------- Mobile menu ---------------- */
const navLinks = $("#navLinks");
$("#menuBtn").addEventListener("click", () => navLinks.classList.toggle("open"));
$$("#navLinks a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ---------------- Theme toggle ---------------- */
const themeToggle = $("#themeToggle");
const savedTheme = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
themeToggle.textContent = document.documentElement.getAttribute("data-theme") === "light" ? "☀️" : "🌙";
themeToggle.addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  themeToggle.textContent = next === "light" ? "☀️" : "🌙";
  try { localStorage.setItem("theme", next); } catch {}
});

/* ---------------- Cursor glow (desktop only) ---------------- */
const glow = $("#cursorGlow");
if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", e => {
    glow.style.opacity = "1";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

/* ---------------- Scroll reveal ---------------- */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
    }, { threshold: 0.12 });
  }
  $$(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}
observeReveals();

/* ---------------- Animated stat counters ---------------- */
(function counters() {
  const nums = $$("[data-count]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      let n = 0;
      const step = Math.max(1, Math.round(target / 40));
      const t = setInterval(() => {
        n += step;
        if (n >= target) { n = target; clearInterval(t); el.textContent = target + suffix; return; }
        el.textContent = n;
      }, 30);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  nums.forEach(n => io.observe(n));
})();

/* ---------------- Lab: theme mixer demo ---------------- */
(function themeMixer() {
  const holder = $("#demoSwatches");
  if (!holder) return;
  const palettes = [
    { violet: "#8b5cf6", pink: "#ec4899", cyan: "#22d3ee" }, // default
    { violet: "#0ea5e9", pink: "#3b82f6", cyan: "#14b8a6" }, // azure
    { violet: "#f97316", pink: "#ef4444", cyan: "#eab308" }, // sunset
    { violet: "#10b981", pink: "#84cc16", cyan: "#22d3ee" }, // matrix
    { violet: "#e11d48", pink: "#db2777", cyan: "#9333ea" }, // berry
  ];
  palettes.forEach(p => {
    const b = document.createElement("button");
    b.style.background = `linear-gradient(120deg, ${p.violet}, ${p.pink}, ${p.cyan})`;
    b.setAttribute("aria-label", "Apply color theme");
    b.addEventListener("click", () => {
      const root = document.documentElement.style;
      root.setProperty("--violet", p.violet);
      root.setProperty("--pink", p.pink);
      root.setProperty("--cyan", p.cyan);
      root.setProperty("--grad", `linear-gradient(120deg, ${p.violet}, ${p.pink} 55%, ${p.cyan})`);
    });
    holder.appendChild(b);
  });
})();

/* ---------------- Lab: confetti demo ---------------- */
(function confetti() {
  const btn = $("#confettiBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const colors = ["#8b5cf6", "#ec4899", "#22d3ee", "#a3e635", "#f97316"];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement("div");
      const size = Math.random() * 8 + 4;
      Object.assign(piece.style, {
        position: "fixed", zIndex: 999, left: "50%", top: "45%",
        width: size + "px", height: size + "px",
        background: colors[Math.floor(Math.random() * colors.length)],
        borderRadius: Math.random() > 0.5 ? "50%" : "2px", pointerEvents: "none",
      });
      document.body.appendChild(piece);
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 320 + 120;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity - 200;
      piece.animate([
        { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy + 400}px) rotate(${Math.random() * 720}deg)`, opacity: 0 },
      ], { duration: 1200 + Math.random() * 600, easing: "cubic-bezier(0.2,0.6,0.3,1)" })
        .onfinish = () => piece.remove();
    }
  });
})();

/* ---------------- Contact form (Formspree-ready) ---------------- */
(function contactForm() {
  const form = $("#contactForm");
  const note = $("#formNote");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    if (form.action.includes("your-id-here")) {
      e.preventDefault();
      const name = encodeURIComponent($("#name").value);
      const body = encodeURIComponent($("#message").value + "\n\n— " + $("#name").value);
      note.textContent = "Opening your email app… (set up Formspree for in-page sending — see README)";
      window.location.href = `mailto:msohail15999@gmail.com?subject=Portfolio message from ${name}&body=${body}`;
      return;
    }
    e.preventDefault();
    note.textContent = "Sending…";
    try {
      const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (res.ok) { form.reset(); note.textContent = "Thanks! Your message is on its way. 🎉"; }
      else { note.textContent = "Hmm, something went wrong. Try emailing me directly."; }
    } catch { note.textContent = "Network error — try emailing me directly."; }
  });
})();
