```javascript
function copiarSenha(){
    navigator.clipboard.writeText(password).then(() => {
        console.log("Senha copiada!");
    }).catch(err => {
        console.error("Erro ao copiar:", err);
    });
}
```

# 🔐 Gerador de Senhas Fortes

Este é um projeto simples de uma página web para gerar senhas fortes de forma rápida e prática. Ideal para quem busca mais segurança em seus cadastros e quer evitar o uso de senhas fracas ou repetidas.

## 📌 Funcionalidades

* Geração automática de senhas
* Avaliação da segurança da senha gerada;
* Opções para personalizar o tamanho da senha;
* Checkbox para incluir/excluir tipos de caracteres;
* Copiar senha com um clique;
* Salvar as ultimas 3 senhas criadas;
* Interface leve e responsiva;
* Design limpo e objetivo;
* Fácil de usar: basta um clique para gerar uma nova senha.

## 📁 Estrutura do Projeto

```
📦 projeto-gerador-senhas/
├── 📂 CSS/
│   ├── reset.css
│   └── style.css
├── 📂 JS/
│   └── script.js
└── index.html
```

## 🚀 Como Usar

1. Clone este repositório ou baixe os arquivos;
2. Certifique-se de que os arquivos `reset.css`, `style.css` e `script.js` estejam nas pastas corretas (`CSS/` e `JS/`);
3. Abra o arquivo `index.html` em seu navegador;
4. Clique no botão "Gerar Senha" para criar uma nova senha segura.

## 💡 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (vanilla)

## 🎨 Estilo

* `reset.css`: normaliza o estilo entre navegadores;
* `style.css`: define o layout e aparência da aplicação.

## 🔒 Segurança

Este gerador utiliza critérios comuns para fortalecer as senhas, como:

* Letras maiúsculas e minúsculas;
* Números;
* Caracteres especiais.

> **Importante**: embora útil, este gerador é apenas um recurso simples. Para casos mais críticos de segurança, recomenda-se usar geradores de senhas confiáveis com criptografia adequada.

## 🛠️ Melhorias Futuras

* Gerar senhas personalizadas com palavras
* salvar mais de uma senha em arquivo .txt
