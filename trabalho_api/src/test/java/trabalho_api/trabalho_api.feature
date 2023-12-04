Feature: Testando a API DummyJson

Background:
    * def url_base = "https://dummyjson.com"
    * def request_json = read('teste_json.json')

Scenario: Usando o método GET para testar a disponibilidade
    Given url url_base
    And path '/test'
    When method get
    Then status 200 

Scenario: Usando o método GET para testar a consistência dos dados dos produtos
    Given url url_base
    And path 'products'
    When method get
    Then status 200 
    And match $.products == '#[30]'
    And match each $.products contains {id: '#number', description: '#string'}

Scenario: Usando o método GET para testar a consistência dos dados dos produtos (TESTE NEGATIVO)
    Given url url_base
    And path 'products/0'
    When method get
    Then status 404

    
Scenario: Usando o método GET para realizar uma pesquisa nos dados dos produtos
    Given url url_base
    And path 'products/category/smartphones'
    When method get
    Then status 200
    And match $.products == '#[]'
    And match each $.products contains {category: 'smartphones'}

Scenario: Usando o método GET para realizar uma pesquisa nos dados dos produtos (TESTE NEGATIVO)
    Given url url_base
    And path 'products/category/smartphones'
    When method get
    Then status 200
    And match $.products == '#[]'

Scenario: Usando o método POST para criar um novo produto
    Given url url_base
    And path 'products/add'
    And request request_json
    When method post
    Then status 200

