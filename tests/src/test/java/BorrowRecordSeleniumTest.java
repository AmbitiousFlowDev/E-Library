import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class BorrowRecordSeleniumTest {

    private WebDriver driver;
    private WebDriverWait wait;

    @BeforeEach
    public void setUp() {
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @Test
    public void testBorrowRecord() throws InterruptedException {

        driver.get("http://localhost:5173/");

        WebElement loginButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/nav/ul/a"));
        loginButton.click();
        Thread.sleep(300);

        WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("username")));
        usernameField.sendKeys("admin");

        WebElement passwordField = driver.findElement(By.name("password"));
        passwordField.sendKeys("admin");

        WebElement submitButton = driver
                .findElement(By.xpath("//*[@id=\"root\"]/div/main/section/form/div/section[2]/div/button"));
        submitButton.click();
        Thread.sleep(4000);

        WebElement searchBar = driver.findElement(By.id("searchedBooks"));
        searchBar.sendKeys("Javascript");

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("ul > li > a")));

        List<WebElement> results = driver.findElements(By.cssSelector("ul > li > a"));

        for (WebElement result : results) {
            if (result.getText().contains("Javascript")) {
                result.click();
                break;
            }
        }

        String currentUrl = driver.getCurrentUrl();
        assertTrue(currentUrl.contains("/books/"), "The URL does not contain '/books/' as expected.");
        Thread.sleep(4000);

        WebElement Btnborrow = driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/div/div/div/a"));
        Btnborrow.click();
        Thread.sleep(2000);

        WebElement BtnborrowConfirm = driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/div/div/div/button"));
        BtnborrowConfirm.click();
        Thread.sleep(2000);

        driver.switchTo().alert().accept();
        Thread.sleep(2500);
    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}