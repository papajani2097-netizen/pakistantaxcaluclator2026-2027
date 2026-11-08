# Money Tools

Money Tools is a Vite and React website with a home page and six independently addressable financial tools and learning pages.

## Pages
- Home: `/`
- Income tax calculator: `/income-tax-calculator/`
- Currency converter: `/currency-converter/`
- Gold rates: `/gold-rates/`
- Salary calculator: `/salary-calculator/`
- Expense planner: `/expense-planner/`
- Financial guides: `/financial-guides/`

Each route has its own HTML entry, page title, description, canonical URL, Open Graph metadata, and Twitter metadata. Shared client-side navigation supports direct links and browser history. The hosting configuration defines trailing-slash redirects and a fallback for client-side routes.

The currency converter uses reference rates from [ExchangeRate-API](https://www.exchangerate-api.com/). Gold rates use a USD spot quote from [Gold-API](https://gold-api.com/) converted using those reference exchange rates. Both rates require an internet connection and can be refreshed in the app. Gold estimates exclude local premiums, purity adjustments, taxes and jeweller fees.

## Run locally

Install Node.js LTS, then run:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Build and locally preview the production site:

```bash
npm run build
npm run preview
```

## Calculators and data

- The income tax and salary estimators use the country assumptions in `src/tax.js`. They are simplified estimates, not tax advice or tax filing software. Review the applicable source material and check with the relevant authority before relying on a calculation.
- The currency converter retrieves reference rates from [ExchangeRate-API](https://www.exchangerate-api.com/).
- Gold rates combine a USD spot quote from [Gold-API](https://gold-api.com/) with reference exchange rates. Internet access is required to retrieve or refresh both feeds. The estimates exclude local premiums, purity adjustments, taxes, and jeweller fees.
- The monthly expense planner totals user-entered take-home income and expenses. Financial guides provide general educational information, not individualized advice.

The calculator implementations do not claim to cover every tax rule, deduction, credit, or jurisdiction. Keep rates, applicable periods, and source references current when updating `src/tax.js`.

## Official tax references
- Pakistan FBR Finance Bill 2026: https://www.fbr.gov.pk/Budget2026-27/FinanceBill/Finance-Bill-2026.pdf
- IRS 2026 inflation adjustments: https://www.irs.gov/irb/2025-45_IRB
- UK GOV.UK income tax rates: https://www.gov.uk/income-tax-rates
- Canada CRA tax rates: https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html
- Australia legislation: https://www.legislation.gov.au/C2004A03348/2026-07-01/2026-07-01/text/original/epub/OEBPS/document_1/document_1.html
- UAE government taxation: https://u.ae/en/information-and-services/finance-and-investment/taxation
