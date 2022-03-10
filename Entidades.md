# Usuario

id
nome
email
senha
data_nascimento
genero
pais
estado
cidade
genero_favorito
genero_favorito_porque
genero_n_favorito
assisto_para
mini_biografia
foto_perfil
foto_capa

# EmailConfirm

id
email
codigo
**timestamps**

# Amigos

id
id_usuario
id_amigo
**timestamps**

# Movies_Favoritos

id
id_usuario
id_movie
media_type
**timestamps**

# Movies_Guardados

id
id_usuario
id_movie
media_type
**timestamps**

|||||||||||||||||||||||||||||||||||||||||||||||||||

# Post

id
id_usuario
id_movie (pode ser null)
media_type (pode ser null)
publico (amigos,publico)
conteudo
**timestamps**

# Post_Fotos \*\*\*\*

id
id_post
foto_resized
foto_original
**timestamps**

# Post_Guardado

id
id_usuario
id_post
**timestamps**

# Reacts

`id
id_object
id_usuario
type_object (post 1,comentario 2)
tipo_reacao
**timestamps**

# Comentarios

id
id_object
id_usuario
type_object (post 1, comentario 2)
conteudo
**timestamps**

# Falta

**Mensagens**
**Notificacoes**
**Registo de atividade**
