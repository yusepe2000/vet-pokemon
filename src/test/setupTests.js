// src/test/setupTests.js
import matchers from '@testing-library/jasmine-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cleanup } from '@testing-library/react';

// según cómo el empaquetador importe la librería, los matchers pueden venir en distintos niveles
const matchersJasmineDom = matchers?.default?.default ?? matchers?.default ?? matchers;

beforeEach(() => {
  jasmine.getEnv().addMatchers(matchersJasmineDom);
  localStorage.clear(); // cada prueba parte sin usuarios, sesión ni productos guardados
});

afterEach(() => {
  cleanup(); // desmonta lo que renderizó la prueba anterior
});
