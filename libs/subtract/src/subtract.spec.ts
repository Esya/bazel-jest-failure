import { subtract } from "./subtract"

describe("Should add numbers", () => {
  it("Should subtract 2 from 4", () => {
    expect(subtract(4, 2)).toBe(2)
  })
})
