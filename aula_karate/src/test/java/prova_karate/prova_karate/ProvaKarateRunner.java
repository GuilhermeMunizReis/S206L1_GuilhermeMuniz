package prova_karate.prova_karate;

import com.intuit.karate.junit5.Karate;

class ProvaKarateRunner {
    
    @Karate.Test
    Karate testProvaKarate() {
        return Karate.run("prova_karate").relativeTo(getClass());
    }    

}