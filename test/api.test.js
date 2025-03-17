import SymptomeService from '../Services/SymptomeService.js';
import Symptome from '../Models/Symptome.js';

describe('API Symptôme', () => {
    let fetchSymptomeSpy;

    beforeEach(() => {
        fetchSymptomeSpy = jest.spyOn(Symptome, 'findAll').mockResolvedValue([]);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('devrait récupérer tous les symptômes', async () => {
        const result = await SymptomeService.getAllSymptome();
        expect(result).toBeInstanceOf(Array);
    });

    it('devrait récupérer un symptôme par ID', async () => {
        const testSymptome = { ID_Symptome: 1, nom: 'Test Symptôme' };
        
        jest.spyOn(Symptome, 'findByPk').mockResolvedValue(testSymptome);

        const result = await SymptomeService.getSymptomeById(1);
        expect(result).toEqual(testSymptome); 
    });
});