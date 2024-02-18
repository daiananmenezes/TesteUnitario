import { UniqueServiceId } from "./unique-id.service";

describe('UniqueServiceId', () => {

    let service: UniqueServiceId;

    beforeEach(() => {
      service = new UniqueServiceId();
    });

    // generateUniqueIdWithPrefix deve gerar id quando for chamado com prefixo
    it('#generateUniqueIdWithPrefix should generate id when called with prefix'  , () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id).toContain('app-')
    });

    it(`#${UniqueServiceId.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

    it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });

});


