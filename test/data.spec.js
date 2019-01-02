require('../src/data.js');

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

const input =
[
  {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Desempleo, mujeres jóvenes (% de participación en …de mujeres de 15 a 24 años) (estimación nacional)', indicatorCode: 'SL.UEM.1524.FE.NE.ZS'},
  {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Educacin terciaria, profesores (% de mujeres)', indicatorCode: 'SE.TER.TCHR.FE.ZS'},
  {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Adolescentes que no asisten a la escuela, mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria', indicatorCode: 'SE.SEC.UNER.LO.FE.ZS'},
  {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Relación entre empleo y población, mayores de 15 años, mujeres (%) (estimación modelado OIT)', indicatorCode: 'SL.EMP.TOTL.SP.FE.ZS'},
  {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Población de 70 a 74 años, mujeres (% de la población femenina)', indicatorCode: 'SP.POP.7074.FE.5Y'}
];

const outputPopulation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Población de 70 a 74 años, mujeres (% de la población femenina)', indicatorCode: 'SP.POP.7074.FE.5Y'}];
const outputEducation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Educacin terciaria, profesores (% de mujeres)', indicatorCode: 'SE.TER.TCHR.FE.ZS'}];
const outputSecondaryEducation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Adolescentes que no asisten a la escuela, mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria', indicatorCode: 'SE.SEC.UNER.LO.FE.ZS'}];
const outputEmployment = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Relación entre empleo y población, mayores de 15 años, mujeres (%) (estimación modelado OIT)', indicatorCode: 'SL.EMP.TOTL.SP.FE.ZS'}];
const outputUnemployment = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Desempleo, mujeres jóvenes (% de participación en …de mujeres de 15 a 24 años) (estimación nacional)', indicatorCode: 'SL.UEM.1524.FE.NE.ZS'}];

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.population', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.population).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SP.POP', () => {
      expect(worldbank.population(input)).toEqual(outputPopulation);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.population(input)).not.toEqual(input);
    });
  });
  describe('worldbank.education', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.education).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SE.TER', () => {
      expect(worldbank.education(input)).toEqual(outputEducation);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.education(input)).not.toEqual(input);
    });
  });
  describe('worldbank.secondaryEducation', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.secondaryEducation).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SE.SEC', () => {
      expect(worldbank.secondaryEducation(input)).toEqual(outputSecondaryEducation);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.secondaryEducation(input)).not.toEqual(input);
    });
  });
  describe('worldbank.employment', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.employment).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SL.EMP', () => {
      expect(worldbank.employment(input)).toEqual(outputEmployment);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.employment(input)).not.toEqual(input);
    });
  });
  describe('worldbank.unemployment', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.unemployment).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SL.UEM', () => {
      expect(worldbank.unemployment(input)).toEqual(outputUnemployment);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.unemployment(input)).not.toEqual(input);
    });
  });
});

const inputData = WORLDBANK; ['BRA', 'CHL', 'MEX', 'PER']; ['Población, mujeres', 'Educación terciaria, profesores (% de mujeres)', 'transición a la escuela secundaria, mujeres (%)', 'Empleo vulnerable, mujeres (% del empleo femenino)', 'Personas desempleadas con educación avanzada, mujeres'];

const outputBraPoblacion = [[1960, 36255477], [1961, 37321829], [1962, 38427687], [1963, 39564454], [1964, 40719864]];
const outputChlPoblacion = [[1960, 3919393], [1961, 4008265], [1962, 4098796], [1963, 4190911], [1964, 4284523]];
const outputMexPoblacion = [[1960, 19156559], [1961, 19766220], [1962, 20393694], [1963, 21038608], [1964, 21700487]];
const outputPerPoblacion = [[1960, 5004721], [1961, 5148262], [1962, 5297665], [1963, 5452349], [1964, 5611421]];

const outputBraEducacion = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputChlEducacion = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputMexEducacion = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputPerEducacion = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];

const outputBraSecEducacion = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputChlSecEducacion = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputMexSecEducacion = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputPerSecEducacion = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];

const outputBraEmpleo = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputChlEmpleo = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputMexEmpleo = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputPerEmpleo = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];

const outputBraDesempleo = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputChlDesempleo = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputMexDesempleo = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];
const outputPerDesempleo = [[1960, ], [1961, ], [1962, ], [1963, ], [1964, ], [1965, ]];

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.data', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.data).toBe('function');
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputBraPoblacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputChlPoblacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputMexPoblacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputPerPoblacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputBraEducacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputChlEducacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputMexEducacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputPerEducacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputBraSecEducacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputChlSecEducacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputMexSecEducacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputPerSecEducacion);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputBraEmpleo);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputChlEmpleo);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputMexEmpleo);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputPerEmpleo);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputBraDesempleo);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputChlDesempleo);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputMexDesempleo);
    });
    it('deberia retornar un arrray de arrays', () => {
      expect(worldbank.data(inputData)).toEqual(outputPerDesempleo);
    });
  });
});

