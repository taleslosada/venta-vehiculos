/// <reference types="vite/client" />

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Inicializa el entorno de pruebas
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Detecta y carga automáticamente los tests
async function importAllTests() {
  const tests = import.meta.glob('./**/*.spec.ts');
  for (const path in tests) {
    await tests[path]();
  }
}

importAllTests();
