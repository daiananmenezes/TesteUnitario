import { UniqueIdService } from "./unique-id.service";

describe('UniqueIdService', () => {
    // generateUniqueIdWithPrefix deve gerar id quando for chamado com prefixo
    it('#generateUniqueIdWithPrefix should generate id when called with prefix'  , () => {
        const service = new UniqueIdService();
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id).toContain('app-')
    });
});


