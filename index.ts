const message = 'Welcome to algorithms and data structures practice playground,';

export function hello(word: string = message): string {
    console.log(word);
    return `Hello ${message}! `;
}