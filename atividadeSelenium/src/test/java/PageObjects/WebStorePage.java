package PageObjects;

import Utilities.BaseClass;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WebStorePage extends BaseClass {

    public WebStorePage(WebDriver driver, WebDriverWait wait) {

        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "searchbox-input")
    @CacheLookup
    private WebElement campoPesquisar;

    @FindBy(xpath = "/html/body/div[3]/div[4]/main/div/div[1]/div/div[1]/div[2]/div/div[1]/a/div[3]/div[1]")
    @CacheLookup
    private WebElement divExtensao;

    @FindBy(xpath = "/html/body/div[3]/div[2]/div/div/div[3]/div[3]/div[1]/div/div[2]/div[2]/div[3]/span[2]")
    @CacheLookup
    private WebElement labelVersao;


    public void campoPesquisarData(String pesquisar) {

        WaitUntilElementVisible(campoPesquisar);
        campoPesquisar.isEnabled();
        campoPesquisar.clear();
        campoPesquisar.sendKeys(pesquisar);
        campoPesquisar.sendKeys(Keys.ENTER);
    }

    public void divExtensaoData() {

        WaitUntilElementVisible(divExtensao);
        divExtensao.isEnabled();
        divExtensao.click();
    }

    public boolean labelVersaoIsDisplayed() {

        WaitUntilElementVisible(labelVersao);
        labelVersao.isDisplayed();
        return true;
    }

    public boolean labelVersaoValidateText(String texto) {

        WaitUntilElementVisible(labelVersao);
        return labelVersao.getText().toString().equals(texto);
    }
}