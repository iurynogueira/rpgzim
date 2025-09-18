# rpgzim

## Requisitos Funcionais

- **Personagens:**  
  - Guerreiro  
  - Mago  
  - Arqueiro  
- **Atributos de cada personagem:**  
  - Nome  
  - Classe  
  - Vida  
  - Mana  
  - Arma equipada  

- **Armas e Magias:**  
  - Cada arma e magia possui restrições de uso por classe.

- **Funções disponíveis:**  
  - `eq`: Equipar armas  
  - `atk`, `atk2`: Atacar outros personagens  
  - `sp`: Usar magias  
  - `heal`: Curar ou recuperar vida/mana  
  - `aparecerMonstro`: Gerar monstros  
  - `atacarMonstro`: Enfrentar monstros  

- **Fluxo principal:**  
  - A função `main` executa todas as ações em sequência e mostra o estado dos personagens no console.