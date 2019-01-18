
// AgcSorghumHarvestLoss: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-sorghum-harvest-loss.core.js';
import {
  AgcSorghumHarvestLoss,
  AgcSorghumHarvestLossInputs,
  AgcSorghumHarvestLossProgress,
  AgcSorghumHarvestLossResults,
  AgcSorghumHarvestLossResultsPlaceholder
} from './agc-sorghum-harvest-loss.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcSorghumHarvestLoss,
    AgcSorghumHarvestLossInputs,
    AgcSorghumHarvestLossProgress,
    AgcSorghumHarvestLossResults,
    AgcSorghumHarvestLossResultsPlaceholder
  ], opts);
}
