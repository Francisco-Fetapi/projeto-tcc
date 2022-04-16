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

export function parsearMovieInfo(movie) {
  const dados_movie = JSON.parse(movie.dados_movie);
  return { ...movie, ...dados_movie };
}
export function parsearAllMoviesInfo(response) {
  function parse(array_, fromObjectWithData) {
    const new_data = array_.map((movie) => {
      if (!movie.dados_movie) return movie;
      return parsearMovieInfo(movie);
    });
    if (fromObjectWithData) {
      response.data.data = new_data;
    } else {
      response.data = new_data;
    }
  }

  if (Array.isArray(response.data)) {
    parse(response.data);
    return;
  } else if ("dados_movie" in response.data) {
    response.data = parsearMovieInfo(response.data);
  } else if (Array.isArray(response.data.data)) {
    parse(response.data.data, true);
  }
}
export function stringificarMovie(config) {
  if (!config.data?.dados_movie) return;
  config.data.dados_movie = getDadosEssencias(config.data.dados_movie);
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
