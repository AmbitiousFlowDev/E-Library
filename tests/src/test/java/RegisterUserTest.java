import java.time.Duration;
import java.util.Random;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import dev.failsafe.internal.util.Assert;

public class RegisterUserTest {

    private WebDriver driver;
    Random random = new Random();
    int randomNumber = random.nextInt(1000); 
    @BeforeEach
    public void setUp() {
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();
    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void testRegister() throws InterruptedException {
        
        driver.get("http://localhost:5173/");
        Thread.sleep(300); 

        WebElement loginButton= driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/nav/ul/a"));
        loginButton.click();
        Thread.sleep(300); 

        WebElement registerButton= driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/form/div/section[2]/div/span/a"));
        registerButton.click();
        Thread.sleep(300);

        WebElement usernameField = driver.findElement(By.name("username"));
        usernameField.sendKeys("reda" + randomNumber); 
        
        WebElement fullNameField = driver.findElement(By.name("Full Name"));
        fullNameField.sendKeys("Reda Ganoutre" + randomNumber);

        WebElement emailField = driver.findElement(By.name("email"));
        emailField.sendKeys("reda"+randomNumber+"@gmail.com");

        WebElement passwordField = driver.findElement(By.name("password"));
        passwordField.sendKeys("1234");

        Thread.sleep(3000);

    
        WebElement submitButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/section/form/div/section[2]/div/button"));
        submitButton.click();
        Thread.sleep(4000);

        try 
        {
            Alert alert = driver.switchTo().alert();
            System.out.println("Alert message: " + alert.getText());
            alert.accept();
        } 
        catch (Exception e) 
        {
            System.out.println("No alert present.");
        }
    
        WebElement profileButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/nav/a"));
        profileButton.click();
        Thread.sleep(3500);
        WebElement btnlogout= driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/nav/ul/button"));
        btnlogout.click();
        Thread.sleep(2500);

        String currentUrl = driver.getCurrentUrl();
        Assertions.assertEquals("http://localhost:5173/", currentUrl);
    }
}
