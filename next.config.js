module.exports = {
    generateEtags: false,
    onDemandEntries: {
      maxInactiveAge: 5 * 1000, // 25 seconds
      pagesBufferLength: 2,
    },
  };