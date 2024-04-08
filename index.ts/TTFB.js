new PerformanceObserver((entryList) => {
  const entries = entryList.getEntries();

  for (const entry of entries) {
    // Some resources might have a responseStart value of 0 if they're being
    // cached, or if a cross-origin resource is served without a
    // Timing-Allow-Origin header set.
    if (entry.responseStart > 0) {
      console.log(`TTFB: ${entry.responseStart}`, entry.name);
    }
  }
}).observe({
  type: 'resource',
  buffered: true
});
