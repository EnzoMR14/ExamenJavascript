(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const main = $("#main"), nav = $("#nav"), visor = $("#visor"), frame = $("#visor-frame");
  const cache = {};
  let urlActual = "";

  // ---------- Tema ----------
  function aplicarTema(t) {
    document.documentElement.dataset.tema = t;
    $("#tema").textContent = t === "oscuro" ? "☀" : "☾";
    $("#hljs-light").disabled = t === "oscuro";
    $("#hljs-dark").disabled = t !== "oscuro";
    try { localStorage.setItem("tema", t); } catch (e) {}
  }
  let guardado = null;
  try { guardado = localStorage.getItem("tema"); } catch (e) {}
  aplicarTema(guardado || (matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro"));
  $("#tema").onclick = () => aplicarTema(document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro");

  // ---------- Código ----------
  async function cargar(ruta) {
    if (cache[ruta]) return cache[ruta];
    const r = await fetch(ruta);
    if (!r.ok) throw new Error(r.status);
    return (cache[ruta] = await r.text());
  }
  async function pintar(code, ruta, lang) {
    code.className = "language-" + lang;
    code.textContent = "Cargando " + ruta.split("/").pop() + "...";
    try {
      code.textContent = await cargar(ruta);
      if (window.hljs) { delete code.dataset.highlighted; hljs.highlightElement(code); }
    } catch (e) {
      code.textContent = "No se pudo cargar el código. Si abres index.html directamente desde el disco, el navegador lo bloquea: súbelo a GitHub Pages o usa un servidor local.";
    }
  }

  // ---------- Visor ----------
  function abrirVisor(titulo, url) {
    urlActual = url;
    $("#visor-titulo").textContent = titulo;
    $("#visor-nueva").href = url;
    frame.src = url;
    visor.showModal();
  }
  $("#visor-cerrar").onclick = () => visor.close();
  $("#visor-reiniciar").onclick = () => { frame.src = "about:blank"; setTimeout(() => (frame.src = urlActual), 50); };
  visor.addEventListener("close", () => (frame.src = "about:blank"));
  visor.addEventListener("click", (e) => { if (e.target === visor) visor.close(); });

  // ---------- Render ----------
  function tarjeta(sec, ej, i) {
    const art = document.createElement("article");
    art.className = "ejercicio";
    const base = sec.carpeta + "/";
    const num = ej.num || i + 1;
    art.innerHTML =
      '<h3><span class="num">Ejercicio ' + num + '</span></h3>' +
      "<p></p>" +
      '<div class="acciones"><button class="btn" type="button">Ejecutar</button></div>' +
      '<div class="pestanas" role="tablist"></div><pre><code></code></pre>';
    $("h3", art).append(ej.titulo);
    $("p", art).textContent = ej.enunciado;
    $(".btn", art).onclick = () => abrirVisor("Ejercicio " + num + " · " + ej.titulo, base + ej.html);

    const tabs = $(".pestanas", art), code = $("code", art);
    const archivos = [{ n: ej.html, lang: "xml" }];
    if (ej.js) archivos.push({ n: ej.js, lang: "javascript" });
    archivos.forEach((a, k) => {
      const b = document.createElement("button");
      b.type = "button"; b.role = "tab"; b.textContent = a.n;
      b.onclick = () => {
        tabs.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", x === b));
        pintar(code, base + a.n, a.lang);
      };
      b.setAttribute("aria-selected", k === 0);
      tabs.append(b);
    });
    pintar(code, base + ej.html, "xml");
    return art;
  }

  function mostrar(id) {
    const sec = SECCIONES.find((s) => s.id === id) || SECCIONES[0];
    nav.querySelectorAll("button").forEach((b) => b.setAttribute("aria-current", b.dataset.id === sec.id));
    main.replaceChildren();
    const h = document.createElement("h2");
    h.textContent = sec.corto + " - " + sec.titulo;
    const sub = document.createElement("p");
    sub.className = "sub";
    sub.textContent = sec.ejercicios.length + " ejercicios";
    main.append(h, sub);
    sec.ejercicios.forEach((ej, i) => main.append(tarjeta(sec, ej, i)));
    document.title = sec.titulo + " · Ejercicios Examen JavaScript";
    window.scrollTo(0, 0);
  }

  SECCIONES.forEach((s) => {
    const b = document.createElement("button");
    b.type = "button"; b.dataset.id = s.id;
    b.textContent = s.corto + " " + s.titulo;
    b.onclick = () => { location.hash = s.id; };
    nav.append(b);
  });
  window.addEventListener("hashchange", () => mostrar(location.hash.slice(1)));
  mostrar(location.hash.slice(1));
})();
