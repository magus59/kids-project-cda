import PathologieService from '../Services/PathologieService.js';
import Pathologie from '../Models/Pathologie.js';

describe('API Symptôme', () => {
    let fetchPathologieSpy;

    beforeEach(() => {
        fetchPathologieSpy = jest.spyOn(Pathologie, 'findAll').mockResolvedValue([]);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('devrait récupérer tous les symptômes', async () => {
        const result = await PathologieService.getAllPathologie();
        expect(result).toBeInstanceOf(Array);
    });

    it('devrait récupérer un symptôme par ID', async () => {
        const testPathologie = { ID_Pathologie: 1, nom: 'Test Symptôme' };
        
        jest.spyOn(Pathologie, 'findByPk').mockResolvedValue(testPathologie);

        const result = await PathologieService.getPathologieById(1);
        expect(result).toEqual(testPathologie); 
    });
});
