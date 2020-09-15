function getRating(driver) {
  return moreThanFiveLateDeliveries(driver)
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}
