package StepDefinitions;

import PageObjects.WebStorePage;
import Utilities.PropertiesReader;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class WebStoreSteps {

    private WebDriver driver = Hooks.driver;
    private WebDriverWait wait;

    public WebStoreSteps() throws Exception {

        PropertiesReader propertiesReader = new PropertiesReader();
        this.wait = new WebDriverWait(driver, propertiesReader.getTimeout());
    }
    @When("Eu acesso a página do web store")
    public void acessarPagWebStore() throws Exception {

    }

    @When("Eu busco por selenium ide \"(.*)\"")
    public void pesquisarIde(String selenium) {

        WebStorePage pesquisar = new WebStorePage(driver, wait);
        pesquisar.campoPesquisarData(selenium);
    }

    @When("Acesso a página da extensão Selenium IDE")
    public void acessarPagina() {

        WebStorePage acessar = new WebStorePage(driver, wait);
        acessar.divExtensaoData();
    }

    @Then("Verifico se a versão da IDE esta na página")
    public void validarExistenciaIDE() {

        WebStorePage validar = new WebStorePage(driver, wait);
        Assert.assertTrue(validar.labelVersaoIsDisplayed());
    }

    @Then("Efetuo a validação do texto da versão da IDE \"(.*)\"")
    public void validarTextoIDE(String texto) {

        WebStorePage validarTexto = new WebStorePage(driver, wait);
        Assert.assertTrue(validarTexto.labelVersaoValidateText(texto.trim()));
    }
}