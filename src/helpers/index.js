export function formatarData(data) {
  if (!data) return "Data indisponivel";
  const date = new Date(data);
  return date.toLocaleDateString();
}

export function primeiroNome(usuario) {
  return usuario.nome?.trim().split(" ")[0];
}
export function primeiroEUltimoNome(usuario) {
  let nomes = usuario.nome?.trim().split(" ");
  let primeiro = nomes[0];
  let ultimo = nomes[nomes.length - 1];
  return `${primeiro} ${ultimo}`;
}
export function mostrarXCharOntText(texto, qtdAMostrar = 10) {
  if (texto.length <= qtdAMostrar) return texto;
  return texto.substring(0, qtdAMostrar) + "...";
}

export function normalizarMediaType(movie) {
  const path = window.location.pathname;
  if (!movie.media_type) {
    if (path.includes("/filmes")) movie.media_type = "movie";
    else movie.media_type = "tv";
  }
}

export function getDadosEssencias(movie) {
  normalizarMediaType(movie);
  const outros_dados = {
    id: movie.id,
    media_type: movie.media_type,
    name: movie.name || movie.title,
    poster_path: movie.poster_path,
    original_language: movie.original_language,
    first_air_date: movie.release_date || movie.first_air_date,
    overview: movie.overview,
  };
  return JSON.stringify(outros_dados);
}

export function parsearMoviesInfo(movie) {
  const dados_movie = JSON.parse(movie.dados_movie);
  return { ...movie, ...dados_movie };
}

export function makeFavoritosFixedOnScroll() {
  const favoritos = document.querySelector(".favoritos");
  const parent_favoritos = favoritos.parentElement;

  document.onscroll = function () {
    const favoritos_visivel =
      window.pageYOffset >= parent_favoritos.offsetTop - 80;

    if (favoritos_visivel) {
      favoritos.classList.add("fixed");
    } else {
      favoritos.classList.remove("fixed");
    }
  };
  window.onresize = function () {
    if (window.innerWidth <= 915) {
      favoritos.classList.remove("fixed");
    }
  };
  return () => {
    document.onscroll = null;
    window.onresize = null;
  };
}
