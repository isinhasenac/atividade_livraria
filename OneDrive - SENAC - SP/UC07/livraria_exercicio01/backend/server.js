// Importa o framework Express para criar o servidor
import express from "express";

// Importa o middleware CORS para permitir requisições de diferentes origens
import cors from "cors";

// Importa o dotenv para carregar variáveis de ambiente do arquivo .env
import dotenv from "dotenv";

// Importa as rotas específicas para cada recurso
// import routeClientes from "./src/routes/clienteRoutes.js";
// import routeCategoria from "./src/routes/categoriaRoutes.js";
// import routeEditora from "./src/routes/editoraRoutes.js";
// import routeCompra from "./src/routes/compraRoutes.js";
// import routeLivro from "./src/routes/livroRoutes.js";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// Cria uma instância do servidor Express
const app = express();

// Configura o servidor para interpretar requisições com JSON no corpo
app.use(express.json());

// Configura o middleware CORS para permitir requisições de diferentes origens
app.use(cors());

// Define as rotas para cada recurso, associando-as aos arquivos de rotas correspondentes
// app.use("/clientes", routeClientes); 
// app.use("/categoria", routeCategoria); 
// app.use("/editora", routeEditora); 
// app.use("/compra", routeCompra); 
// app.use("/livro", routeLivro); 

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => {
  return console.log(`Servidor rodando http://localhost:${PORT}`);
});