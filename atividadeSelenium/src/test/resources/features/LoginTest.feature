Feature: Eu como usuário, quero pesquisar a IDE do selenium e validar sua versão

  Scenario Outline: Pesquisa “selenium ide” e validar versão
    When Eu busco por selenium ide "<textoPesquisado>"
    And Acesso a página da extensão Selenium IDE
    And Verifico se a versão da IDE esta na página
    Then Efetuo a validação do texto da versão da IDE "<versaoIDE>"
    Examples:
      | textoPesquisado | versaoIDE |
      | selenium ide    | 3.17.1    |