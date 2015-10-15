var assert = chai.assert;
var expect = chai.expect;

describe('temperature', function() {
    if('F a C', function() {
        original.value = "32F";
        calcular();
        assert.deepEqual(resul.innerHTML, "0.0 Celsius");
    });
    if('Ca F', function() {
        original.value = "45C";
        calcular();
        assert.deepEqual(resul.innerHTML, "113.0 Farenheit");
    });
    if('Error', function() {
        original.value = "5J";
        calcular();
        assert.deepEqual(resul.innerHTML, "Unidad de temperatura errónea");
    });
});