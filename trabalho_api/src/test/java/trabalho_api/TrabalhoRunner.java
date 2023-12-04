package trabalho_api;

import com.intuit.karate.junit5.Karate;

public class TrabalhoRunner {
    @Karate.Test
    Karate testTrabalho(){
        return Karate.run("trabalho_api").relativeTo(getClass());
    }
}
