# Calculadora de IMC - React + Vite + TypeScript

Uma aplicação web simples desenvolvida em **React**, **Vite** e **TypeScript** para calcular o **Índice de Massa Corporal (IMC)** e classificar os resultados de acordo com os padrões da OMS.

---

## 🌟 Funcionalidades

- **Cálculo do IMC**: baseado na fórmula oficial:

  IMC = $\frac{peso \ (kg)}{altura^2 \ (m)}$

- **Classificação detalhada do IMC**:

  | Intervalo de IMC    | Situação           |
  | ------------------- | ------------------ |
  | Menor que 18.5      | Abaixo do peso     |
  | 18.5 - 24.9         | Peso normal        |
  | 25.0 - 29.9         | Sobrepeso          |
  | 30.0 - 34.9         | Obesidade grau I   |
  | 35.0 - 39.9         | Obesidade grau II  |
  | Maior ou igual a 40 | Obesidade grau III |

- **Tabela visual**: exibe todos os intervalos de IMC, destacando automaticamente a linha correspondente ao valor calculado.

- **Validação de entrada**:

  - Alertas caso altura ou peso estejam em branco ou com valores inválidos.
  - Limpeza do destaque da tabela e do resultado quando os campos não forem preenchidos corretamente.

- **Responsivo e estilizado**:

  - Layout moderno com card centralizado.
  - Inputs e botão estilizados para melhor experiência do usuário.
  - Tabela com cores suaves e efeito hover.

- **Gerenciamento de estado com Context API**: altura, peso e resultado do IMC são compartilhados entre componentes.

---

## 💻 Tecnologias utilizadas

- **React 18** (com Functional Components e Hooks)
- **Vite** (ferramenta de build rápida e moderna)
- **TypeScript** (tipagem estática)
- **CSS3** (flexbox, responsividade e estilos modernos)
- **Context API do React** para gerenciar estado global

---

## 📂 Estrutura de componentes

- `App.tsx` – Componente principal que monta o layout e integra os componentes.
- `ResultadoIMC.tsx` – Exibe o resultado do cálculo do IMC.
- `TabelaIMC.tsx` – Exibe a tabela de classificações, destacando o IMC calculado.
- `IMCContext.tsx` – Context API para compartilhar altura, peso e resultado entre componentes.

---

## 🚀 Como usar

1. Clone o projeto ou baixe o ZIP.
2. Instale as dependências:

```bash
npm install
```

3. Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173`).
5. Preencha os campos:

- **Altura** (em metros, ex: 1.75)
- **Peso** (em kg, ex: 70)

6. Clique em **Calcular IMC**.
7. O resultado será exibido abaixo do formulário e a **linha correspondente na tabela será destacada** automaticamente.

---

## 📝 Observações

- O projeto foi reescrito utilizando **TypeScript** para maior segurança e robustez no código.
- Cada funcionalidade (resultado e tabela) está separada em **componentes React**, seguindo boas práticas.
- A aplicação é totalmente responsiva e funciona em diferentes tamanhos de tela.
