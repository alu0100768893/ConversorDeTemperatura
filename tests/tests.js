var assert = chai.assert;
var expect = chai.expect;

suite('temperature', function() {
    test('F a C', function() {
        original.value = "32F";
        calcular();
        assert.deepEqual(resul.innerHTML, "0.0 Celsius");
    });
    test('Ca F', function() {
        original.value = "45C";
        calcular();
        assert.deepEqual(resul.innerHTML, "113.0 Farenheit");
    });
    test('Error', function() {
        original.value = "5J";
        calcular();
        assert.deepEqual(resul.innerHTML, "Unidad de temperatura errónea");
    });
});