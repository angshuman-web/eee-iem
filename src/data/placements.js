// Batch-wise placement records for the interactive report on the Placement page.
// `companies` drives the animated bar chart (bars = offers per company);
// `summary` drives the metric tiles for each batch.

export const placementBatches = [
  {
    batch: '2020–2024',
    summary: { companies: '10+', students: 23, jobs: 14, multiple: 3, avg: 4.85, highest: 8.2 },
    companies: [
      { name: 'TCS Ninja & Digital', offers: 9, package: '3.36 & 3.36' },
      { name: 'GreyB', offers: 1, package: '8.20' },
      { name: 'PwC', offers: 1, package: '5.00' },
      { name: 'IBM', offers: 1, package: '4.50' },
      { name: 'ITC Infotech', offers: 1, package: '4.25' },
    ],
  },
  {
    batch: '2019–2023',
    summary: { companies: '11+', students: 39, jobs: 37, multiple: 10, avg: 4.52, highest: 7.0 },
    companies: [
      { name: 'Capgemini', offers: 10, package: '4.25 & 5.75' },
      { name: 'TCS', offers: 9, package: '3.36' },
      { name: 'EY GDS', offers: 6, package: '4.82' },
      { name: 'Cognizant', offers: 4, package: '4.00' },
      { name: 'Accenture', offers: 4, package: '4.50 & 6.50' },
      { name: 'PwC', offers: 3, package: '7.00' },
      { name: 'Mindtree', offers: 1, package: '4.00' },
    ],
  },
  {
    batch: '2018–2022',
    summary: { companies: '11+', students: 51, jobs: 74, multiple: 22, avg: 4.22, highest: 7.5 },
    companies: [
      { name: 'Cognizant', offers: 20, package: '6.50 & 4.50' },
      { name: 'Wipro', offers: 17, package: '3.50' },
      { name: 'Capgemini', offers: 14, package: '7.50 & 4.00' },
      { name: 'Accenture', offers: 13, package: '6.50 & 4.50' },
      { name: 'PwC', offers: 4, package: '4.50' },
      { name: 'Infosys', offers: 2, package: '5.00 & 3.70' },
      { name: 'IBM', offers: 2, package: '4.25' },
      { name: 'TCS', offers: 2, package: '7.00 & 3.36' },
    ],
  },
  {
    batch: '2017–2021',
    summary: { companies: '10+', students: 47, jobs: 73, multiple: 27, avg: 3.53, highest: 7.0 },
    companies: [
      { name: 'Cognizant', offers: 22, package: '3.38' },
      { name: 'TCS Ninja', offers: 17, package: '3.36' },
      { name: 'Infosys', offers: 11, package: '3.60' },
      { name: 'Wipro', offers: 11, package: '3.50' },
      { name: 'Capgemini', offers: 10, package: '3.80' },
      { name: 'EY', offers: 1, package: '4.37' },
      { name: 'TCS Digital', offers: 1, package: '7.00' },
    ],
  },
  {
    batch: '2016–2020',
    summary: { companies: '8+', students: 31, jobs: 24, multiple: 8, avg: 3.57, highest: 7.0 },
    companies: [
      { name: 'TCS Ninja', offers: 7, package: '3.36' },
      { name: 'Cognizant', offers: 6, package: '3.38' },
      { name: 'Infosys', offers: 5, package: '3.50' },
      { name: 'Wipro', offers: 5, package: '3.50' },
      { name: 'TCS Digital', offers: 1, package: '7.00' },
    ],
  },
  {
    batch: '2015–2019',
    summary: { companies: '10+', students: 50, jobs: 31, multiple: 2, avg: 3.51, highest: 6.5 },
    companies: [
      { name: 'TCS Ninja', offers: 13, package: '3.36' },
      { name: 'Infosys', offers: 6, package: '3.50' },
      { name: 'Cognizant', offers: 6, package: '3.38' },
      { name: 'Wipro', offers: 3, package: '3.50' },
      { name: 'IBM', offers: 1, package: '3.60*' },
      { name: 'VVDN Technologies', offers: 1, package: '3.20' },
      { name: 'UnitedHealth Group', offers: 1, package: '6.50' },
    ],
  },
]
