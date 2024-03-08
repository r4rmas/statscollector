import StatsCollector from "./StatsCollector"

function main() {
  const unitOfMeasurement = "ms"
  const collector = new StatsCollector()
  collector.addArrayOfTimes([456, 325, 634, 298])
  collector.addTime(776)
  console.log(`Dados los tiempos: [${collector.times}]`)
  console.log(`Tiempo promedio de respuesta: ${collector.getAverage()} ${unitOfMeasurement}.`)
  console.log(`La mediana es ${collector.getMedian()} ${unitOfMeasurement}.`)
}

main()