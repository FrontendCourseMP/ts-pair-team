class Stack {
  private elements: string[]
    constructor() {
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

function checkValid(str: string) {
  const values = {')': '(', '}': '{', ']': '['}
  const stack = new Stack()
  for (const s of str) {
    if (s === values[")"] || s === values["]"] || s === values["}"]) {
      stack.add(s)
    } else if (stack.size() === 0) {
        return false
    } else {
      if (stack.remove() !== values[s]) {
        return false
      }
    }
  }
  return stack.size() === 0
}
