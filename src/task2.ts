class CheckValid {
    private readonly bracketPairs: Map<string, string> = new Map([
        ['(', ')'],  
        ['[', ']'],
        ['{', '}']
    ])};

public isValid(s: string): boolean {
    const stack: string[] = [];
    for (const char of s) {
        if (this.isOpenBracket(char)) {
            stack.push(char);
        }
        else if (this.isCloseBracket(char)) {
            if (stack.length === 0) {
                return false;
            }
            const lastOpenBracket = stack.pop()!;
            if (!this.bracketsMatch(lastOpenBracket, char)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
