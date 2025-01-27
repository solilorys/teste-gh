import app from "./app.js"; // Certifique-se de usar .js se for JavaScript ou .ts se for TypeScript

const PORT = 4444;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
