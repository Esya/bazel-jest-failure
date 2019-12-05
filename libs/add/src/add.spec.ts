import { add } from "./add"

describe("Should add numbers", () => {
  it("Should add 2 and 2", () => {
    expect(add(2, 2)).toBe(4)
  })
})
