import java.io.File;

public class Main {

    public  static void main (String[] args){
        File file = new File("tests/src/main/resources/51k+0tuX4BL.webp");
        String absolutePath = file.getAbsolutePath();
        System.out.println(absolutePath);
    }
}
