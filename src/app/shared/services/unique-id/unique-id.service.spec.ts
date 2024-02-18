import { UniqueServiceId } from './unique-id.service';

describe(UniqueServiceId.name, () => {

  let service: UniqueServiceId;

  beforeEach(() => {
    service = new UniqueServiceId();
  });

  it(`#${UniqueServiceId.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}
  should throw when called with empty`, () => {
    const emptyValues: (string | null | undefined)[] = [null, undefined, ''];
    emptyValues.forEach(emptyValue => {
      expect(() => {
        if (typeof emptyValue === 'string') {
          service.generateUniqueIdWithPrefix(emptyValue);
        } else {
          throw new Error('Value must be a string');
        }
      }).toThrow();
    });
});

});


