class StatsCollector {
  times: number[] = []

  addTime(time: number) {
    this.times.push(time)
  }
  addArrayOfTimes(times: number[]) {
    this.times = [ ...this.times, ...times ] 
  }
  private getAverageFrom(array: number[]) {
    return array.reduce((x, y) => x + y, 0) / array.length
  }
  getAverage() {
    const { times, getAverageFrom } = this
    const { length } = times
    //el promedio es la suma de todos los valores divididos para el numero de valores
    return length ? getAverageFrom(times) : 0
  }
  getMedian() {
    const { times, getAverageFrom } = this
    const { length } = times
    const sorted = [ ...times ].sort((x, y) => x - y)
    const halfIndex = Math.floor(length / 2)
    const halfValue = sorted[halfIndex]
    //La mediana es el valor que ocupa el lugar central de todos los datos cuando éstos están ordenados de menor a mayor
    return length % 2 === 0 ? getAverageFrom([halfValue, sorted[halfIndex - 1]]) : halfValue
  }
}

export default StatsCollector