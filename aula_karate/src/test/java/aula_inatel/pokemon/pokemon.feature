Feature: Testando API do Pokemon

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno de pokemon/pikachu.
    Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
    When method get
    Then status 200

Scenario: Testando retorno de pokemon/pikachu com informações inválidas.
    Given url 'https://pokeapi.co/api/v2/pokemon/chocolate'
    When method get
    Then status 404

Scenario: Testando retorno de pokemon/charmander com background.
    Given url url_base
    And path 'pokemon/charmander'
    When method get
    Then status 200

Scenario: Testando retorno de pokemon/charmander com background.
    Given url url_base
    And path 'pokemon/charmander'
    When method get
    Then status 200
    And match response.name == "charmander"
    And match response.id == 4

Scenario: Testando retorno de pokemon/charmander com background.
    Given url url_base
    And path 'pokemon/charmander'
    When method get
    Then status 200
    And match response.types[0].type.name == "fire"
    And def url_type = response.types[0].type.url
    And print url_type
    And url url_type
    When method get
    Then status 200
    And match response.name == "fire"
    And match response.id == 10
    