import StatsCollector from "./StatsCollector"

describe("getAverage method", () => {
  it("should return the average of the times property", () => {
    const collector = new StatsCollector()
    collector.addArrayOfTimes([2, 4])
    const expectedAverage = (2 + 4) / 2
    expect(collector.getAverage()).toBe(expectedAverage)
  })
})
describe("getMedian method", () => {
  it("should return the median value of the times property", () => {
    const collector = new StatsCollector()
    const exampleArray = [234, 676, 123, 543, 341]
    collector.addArrayOfTimes(exampleArray)
    const expectedMedian = 341
    expect(collector.getMedian()).toBe(expectedMedian)
  })
})
describe("getMedian method", () => {
  it("should return the median value of the times property", () => {
    const collector = new StatsCollector()
    const exampleArray = [234, 676, 543, 341]
    collector.addArrayOfTimes(exampleArray)
    const expectedMedian = 442
    expect(collector.getMedian()).toBe(expectedMedian)
  })
})