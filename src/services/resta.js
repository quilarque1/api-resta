const  { obtenerResultado } = require('../utils/resta');
const { restaDto } = require('../dto/restaDto');

class RestaService {

	getResta(operacion) {
		let resultado = obtenerResultado(operacion)
		console.log('Resultado de la Operacion: ', resultado)
		return restaDto(operacion, resultado) || {};
	}
}

module.exports = RestaService;
