const enhancer = require('./enhancer.js');
class Item {
    constructor(name,durability,enhancement){
      this.name = name,
      this.durability = durability,
      this.enhancement = enhancement
    }
  }

it("test is working",() => {
    expect(2).toBe(2)
})

describe("test enhancer", () => {
    let item
    beforeEach(() => {
        item = new Item("sword",0,0)
        
    })
    it("exists", () => {
        expect(Item).toBeDefined()
    })
    it("can set durabulity to 100 when repair", () => {
        const expected = 100
        const actual = enhancer.repair(item)
        expect(actual.durability).toBe(expected)
    })

    it("can increment enhancement by 1 when success",() => {
        const expected = item.enhancement + 1
        const actual = enhancer.success(item)
        expect(actual.enhancement).toBe(expected)
    })

    it("can decrease enhancement by 1 when enhancement greater than 16", () => {
        const enhanceItem = {...item, enhancement:17}
        const expected = enhanceItem.enhancement - 1
        const actual = enhancer.fail(enhanceItem)
        expect(actual.enhancement).toBe(expected)
    })

    it("can decrease durability by 5 when enhancement less than 15", () => {
        const enhanceItem = {...item, enhancement:5}
        const expected = enhanceItem.durability - 5
        const actual = enhancer.fail(enhanceItem)
        expect(actual.durability).toBe(expected)
    })

    it("can decrease durability by 10 when enhancement greater than 15", () => {
        const enhanceItem = {...item, enhancement:16}
        const expected = enhanceItem.durability - 10
        const actual = enhancer.fail(enhanceItem)
        expect(actual.durability).toBe(expected)
    })

    it("can get item's name with enhancement level if level greater than 0",() => {
        const enhanceItem = {...item, enhancement:10}
        const expected = `[+${enhanceItem.enhancement}]${enhanceItem.name}`
        const actual = enhancer.get(enhanceItem)
        expect(actual.name).toBe(expected)
    })

    it("can get item's name unchanged if enhancement level equal to 0",() => {
        const enhanceItem = {...item, enhancement:0}
        const expected = enhanceItem.name
        const actual = enhancer.get(enhanceItem)
        expect(actual.name).toBe(expected)
    })
})
