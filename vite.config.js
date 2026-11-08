import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        incomeTaxCalculator: 'income-tax-calculator/index.html',
        currencyConverter: 'currency-converter/index.html',
        goldRates: 'gold-rates/index.html',
        salaryCalculator: 'salary-calculator/index.html',
        expensePlanner: 'expense-planner/index.html',
        financialGuides: 'financial-guides/index.html',
      },
    },
  },
});
