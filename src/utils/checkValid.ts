class Stack {
  private elements: string[]
    constructor(lala: string) {
        this.elements = []
    }
  add(elem: string) {
    this.elements.push(elem)
  }
  remove() {
    const elem = this.elements.pop()
    return elem
  }
  size() {
    return this.elements.length
  }
}

