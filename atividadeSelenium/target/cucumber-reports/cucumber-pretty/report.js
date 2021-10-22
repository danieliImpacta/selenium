$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Eu como usuário, quero pesquisar a IDE do selenium e validar sua versão",
  "description": "",
  "id": "eu-como-usuário,-quero-pesquisar-a-ide-do-selenium-e-validar-sua-versão",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Pesquisa “selenium ide” e validar versão",
  "description": "",
  "id": "eu-como-usuário,-quero-pesquisar-a-ide-do-selenium-e-validar-sua-versão;pesquisa-“selenium-ide”-e-validar-versão",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Eu acesso a página do web store",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Eu busco por selenium ide \"\u003cide\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Acesso a página da extensão Selenium IDE",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Efetuo a validação da versão da IDE",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "eu-como-usuário,-quero-pesquisar-a-ide-do-selenium-e-validar-sua-versão;pesquisa-“selenium-ide”-e-validar-versão;",
  "rows": [
    {
      "cells": [
        "ide"
      ],
      "line": 9,
      "id": "eu-como-usuário,-quero-pesquisar-a-ide-do-selenium-e-validar-sua-versão;pesquisa-“selenium-ide”-e-validar-versão;;1"
    },
    {
      "cells": [
        "selenium ide"
      ],
      "line": 10,
      "id": "eu-como-usuário,-quero-pesquisar-a-ide-do-selenium-e-validar-sua-versão;pesquisa-“selenium-ide”-e-validar-versão;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3012706572,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Pesquisa “selenium ide” e validar versão",
  "description": "",
  "id": "eu-como-usuário,-quero-pesquisar-a-ide-do-selenium-e-validar-sua-versão;pesquisa-“selenium-ide”-e-validar-versão;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Eu acesso a página do web store",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Eu busco por selenium ide \"selenium ide\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Acesso a página da extensão Selenium IDE",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Efetuo a validação da versão da IDE",
  "keyword": "Then "
});
formatter.match({
  "location": "WebStoreSteps.acessarPagWebStore()"
});
formatter.result({
  "duration": 3033807460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium ide",
      "offset": 27
    }
  ],
  "location": "WebStoreSteps.pesquisarIde(String)"
});
formatter.result({
  "duration": 219501933,
  "status": "passed"
});
formatter.match({
  "location": "WebStoreSteps.acessarPagina()"
});
formatter.result({
  "duration": 5431593181,
  "status": "passed"
});
formatter.match({
  "location": "WebStoreSteps.validarIDE()"
});
formatter.result({
  "duration": 995419065,
  "status": "passed"
});
formatter.after({
  "duration": 69938157,
  "status": "passed"
});
});