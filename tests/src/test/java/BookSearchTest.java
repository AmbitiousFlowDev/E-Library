import org.junit.jupiter.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class BookSearchTest {

    private WebDriver driver;

    @BeforeEach
    public void setUp() {
       
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(60));
        driver.manage().window().maximize();
    }

    @Test
    public void testBookSearchAndClick() throws InterruptedException {
        driver.get("http://localhost:5173/");
        WebElement searchBar = driver.findElement(By.id("searchedBooks"));
        searchBar.sendKeys("JavaScript For Dummies 3rd Edition");
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("ul > li > a")));
        List<WebElement> results = driver.findElements(By.cssSelector("ul > li > a"));
        for (WebElement result : results) {
            if (result.getText().contains("JavaScript For Dummies 3rd Edition")) {
                result.click();
                break;
            }
        }
        String currentUrl = driver.getCurrentUrl();
        Thread.sleep(2500);
        Assertions.assertTrue(currentUrl.contains("/books/"), "The URL does not contain '/books/' as expected.");
    }

@AfterEach
public void tearDown() {
    if (driver != null) {
        driver.quit();
    }
}
}

