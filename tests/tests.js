var assert = chai.assert;
var expect = chai.expect;


describe('Temperatura', function() {
          //document.body.innerHTML = __html__['tests/index.html'];
          //var original = document.getElementById('original');
          //var resul = document.getElementById('resul');
	
    it('F a C', function() {
    	var temp = new Temperatura(32, 'F');
        assert.deepEqual(temp.convertir(), "0.0 Celsius");
    });
    it('Ca F', function() {
    	var temp = new Temperatura(45, 'C');
        assert.deepEqual(temp.convertir(), "113.0 Farenheit");
    });
    it('Error', function() {
    	var temp = new Temperatura(5, 'J');
        assert.deepEqual(temp.convertir(), "Unidad de temperatura errónea");
    });
    it('Comrprobar salida', function() {
    	var temp = new Temperatura(7, 'f');
        assert.typeOf(temp.convertir(),'string','La salida es un String')
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
			var temp = new Temperatura(45, 'L');
			temp.convertir();
			sinon.assert.calledWithExactly(console.log, "Unidad de temperatura errónea");
		});
	});
});