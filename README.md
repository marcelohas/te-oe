# Conexão Escola-Família: Uso de Telas e Tecnologia 📱🎒

Este repositório hospeda a página web do **Projeto Conexão Digital**, uma iniciativa colaborativa desenvolvida no **Colégio Santa Marcelina SP** pelas equipes de **Orientação Educacional, Coordenação, Direção e Tecnologia Educacional**. 

O objetivo do portal é apoiar as famílias com discussões embasadas e materiais educativos personalizados, auxiliando na mediação ativa e no equilíbrio do uso de tecnologias digitais por crianças e adolescentes.

🔗 **Acesse o portal publicado aqui**: [https://marcelohas.github.io/te-oe/](https://marcelohas.github.io/te-oe/)

---

## 📋 Sobre o Projeto

O projeto nasceu há quatro meses motivado por inquietações observadas no cotidiano escolar e consolidadas por meio de um **diagnóstico interno no Colégio Santa Marcelina SP**, aplicado às famílias dos segmentos de:
* Educação Infantil
* Ensino Fundamental (Anos Iniciais)
* Ensino Fundamental (Anos Finais)

Após a compilação das devolutivas, iniciou-se a **Fase de Informação**, com a curadoria e desenvolvimento de materiais direcionados de acordo com os interesses e dores de cada grupo. O projeto seguirá em frente com ciclos presenciais/híbridos de formação de pais e a criação de uma **Comunidade Paritária** (envolvendo pais, responsáveis, professores, orientadores pedagógicos e especialistas).

---

## 📊 Embasamento e Referências

O desenvolvimento do projeto e seus materiais são fundamentados em dados estatísticos e estudos científicos renomados:

1. **Pesquisas de Larga Escala sobre Educação e Família**:
   * Constatam que o tema **"Telas, celular e tecnologia"** é o maior desafio apontado espontaneamente por pais e mães na educação dos filhos hoje, correspondendo a **24,3%** das respostas (liderando com folga o ranking).
2. **Cetic.br (TIC Kids Online Brasil)**:
   * Dados públicos sobre o comportamento, segurança digital, privacidade e hábitos de navegação de crianças e adolescentes no território nacional.
3. **Frontiers in Psychology**:
   * Referencial teórico sobre os impactos neurocognitivos do tempo excessivo de tela no desenvolvimento infantil e na regulação das emoções.

---

## 💻 Estrutura do Portal

A página web foi construída com tecnologias puras (Vanilla Web) com foco em velocidade de carregamento, responsividade máxima (Mobile First) e acessibilidade:

* `index.html`: Estrutura semântica contendo a introdução do projeto, o infográfico interativo de desafios, a linha do tempo das fases e as abas de seleção de segmentos.
* `style.css`: Estilização moderna com design system premium baseado em tons de azul e dourado/âmbar, efeitos de hover dinâmicos e micro-animações.
* `script.js`: Lógica de interatividade das abas de segmentos e ativação automática da animação do gráfico conforme a rolagem da página (utilizando `IntersectionObserver`).

---

## 🚀 Como Publicar no GitHub Pages

Para publicar este projeto no GitHub Pages e torná-lo público através do link do repositório (`https://github.com/marcelohas/te-oe.git`):

1. **Inicialize o Git localmente** e faça o primeiro commit:
   ```bash
   git init
   git add .
   git commit -m "feat: estrutura inicial do portal Conexao Escola-Familia"
   ```

2. **Vincule o repositório remoto**:
   ```bash
   git remote add origin https://github.com/marcelohas/te-oe.git
   ```

3. **Suba os arquivos para a branch principal** (ex: `main` ou `master`):
   ```bash
   git branch -M main
   git push -u origin main
   ```

4. **Ative o GitHub Pages**:
   * Vá nas configurações do seu repositório no site do GitHub (*Settings*).
   * No menu lateral esquerdo, clique em **Pages** (sob a seção *Code and automation*).
   * Em *Build and deployment*, altere a origem (*Source*) para **Deploy from a branch**.
   * Em *Branch*, selecione **main** e a pasta **/ (root)**, depois clique em **Save**.
   * O GitHub gerará o link oficial de publicação em alguns minutos!

---

## 👥 Assinatura do Portal

Este projeto e portal são mantidos e assinados por:
* **Equipe de Orientação Educacional**
* **Coordenação Pedagógica**
* **Direção Escolar**
* **Tecnologia Educacional**
