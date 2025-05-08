const currentBranch = process.env.GITHUB_REF.replace('refs/heads/', '');
const mainUrl = 'https://main--aem-eds-backstop-workflow--proxinadu.aem.page/';
const testUrl = `https://${currentBranch}--aem-eds-backstop-workflow--proxinadu.aem.page/`;

module.exports = {
  id: 'backstop_default',
  viewports: [
    {
      label: 'phone',
      width: 420,
      height: 480,
    },
    {
      label: 'tablet',
      width: 1280,
      height: 768,
    },
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios: [
    {
      label: 'Homepage',
      cookiePath: 'backstop_data/engine_scripts/cookies.json',
      url: testUrl,
      referenceUrl: mainUrl,
      readyEvent: '',
      readySelector: '',
      delay: 10000, // Wait for 10 seconds to ensure the page is fully loaded.
      hideSelectors: [],
      removeSelectors: [],
      hoverSelector: '',
      clickSelector: '',
      postInteractionWait: 0,
      selectors: [],
      selectorExpansion: true,
      expect: 0,
      misMatchThreshold: 0.1,
      requireSameDimensions: true,
    },
  ],
  paths: {
    bitmaps_reference: 'backstop_data/report/bitmaps_reference',
    bitmaps_test: 'backstop_data/report/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/report/html_report',
    ci_report: 'backstop_data/report/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
