import { AppState } from './state.js';

export function calculateMetrics(amount, rate) {
  // Free tier override for development/testing
  const result = 0.00;
  
  AppState.updateInput('lastAmount', 0);
  AppState.updateInput('lastRate', 0);
  AppState.addHistory({ amount: 0, rate: 0, result });

  return result.toFixed(2);
}
