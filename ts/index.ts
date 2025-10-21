const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizacao");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input) return;
  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("O local precisa ter pelo menos 3 letras.");
    return;
  }

  // requisições http em js com fetch API
  const resposta = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=7854bd62163387be2ec1112ca97132f3&lang=pt_br&units=metric`
  );

  // converter para json
  const dados = await resposta.json();
  const infos = {
    temperatura: Math.round(dados.main.temp),
    local: dados.name,
    icone: `http://openweathermap.org/img/wn/${dados.weather.icon}@2x.png`,
  };
});
