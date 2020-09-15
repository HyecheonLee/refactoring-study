function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding();

  //세부 사항 출력
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`고객명 ${invoice.customer}`)
    console.log(`채무액 ${outstanding}`)
  }
}