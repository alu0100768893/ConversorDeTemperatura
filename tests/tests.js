var assert = chai.assert;
var expect = chai.expect;

describe('Temperatura', function() {
    it('F a C', function() {
        original.value = "32F";
        calcular();
        assert.deepEqual(resul.innerHTML, "0.0 Celsius");
    });
    it('Ca F', function() {
        original.value = "45C";
        calcular();
        assert.deepEqual(resul.innerHTML, "113.0 Farenheit");
    });
    it('Error', function() {
        original.value = "5J";
        calcular();
        assert.deepEqual(resul.innerHTML, "Unidad de temperatura errónea");
    });
    it('Comrprobar salida', function() {
        original.value = "7f";
        calcular();
        assert.typeOf(resul.innerHTML,'string','La salida es un String')
    });
});


describe("Test del constructor", function(){
	var sandbox;

	beforeEach(function(){
		sandbox = sinon.sandbox.create();
		sandbox.stub(window.console, "log");
		sandbox.stub(window.console, "error");
	});

	afterEach(function(){
		sandbox.restore();
	});

	describe("Construtor", function(){
		it("El valor por defecto es 0", function(){
			var temp = new Temperatura();
			expect(temp.valor).to.equal(0);
		});
	});
});

describe("Tests Sinon", function(){
	var sandbox;

	beforeEach(function(){
		sandbox = sinon.sandbox.create();
		sandbox.stub(window.console, "log");
		sandbox.stub(window.console, "error");
	});

	afterEach(function(){
		sandbox.restore();
	});

	describe("Unidad incorrecta", function(){
		it("Error si se introduce una unidad incorrecta", function(){
			original.value = "45L";
		    calcular();
			sinon.assert.calledWithExactly(console.log, "Unidad de temperatura errónea");
		});
	});
});