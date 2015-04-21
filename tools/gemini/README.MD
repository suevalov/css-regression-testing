java -jar selenium-server-standalone-2.44.0.jar
gemini gather
gemini test --reporter html --reporter flat

Advantages:

    suite.ignoreElements('selector1', 'selector2', ...)
    
    suite.skip([
        {browserName: 'browser1', version: '1.0'},
        'browser2'
    ]);


Disadvantages:
    setWindowSize(width, height) – change browser window dimensions.