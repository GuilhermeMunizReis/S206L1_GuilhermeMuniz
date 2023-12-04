Feature: Testes da API GoREST

Background:
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Acessando URL incorreta (Teste Negativo)
    Given url url_base
    And path 'noturl'
    When method get
    Then status 404

Scenario: Testando método GET com um pokemon
    Given url url_base
    And path '/pokemon/charmander'
    When method get
    Then status 200
    And match $.name == 'charmander'
    And match $.id == 4

Scenario: Testando método GET com um pokemon inexistente (Teste Negativo)
    Given url url_base
    And path 'pokemon/misigno'
    When method get
    Then status 404

Scenario: Testando método POST para um pokemon (Teste Negativo)
    Given url url_base
    And path 'pokemon'
    When method post
    And request {}
    Then status 404

Scenario: Testando método GET com um item
    Given url url_base
    And path 'item/132/'
    When method get
    Then status 200
    And match $.name == 'oran-berry'
    And def url_type = $.category.url
    And url url_type
    When method get
    Then status 200
    And match $.name == 'medicine'

	