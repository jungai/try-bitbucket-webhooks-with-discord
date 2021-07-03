export function getEnv(key: string): string {
    const val = process.env[key];

    if (!val) {
        throw new Error(`${key} is not found`);
    }

    return val;
}

export function getBotId(): string {
    return getEnv('BOT_ID');
}

export function getBotToken(): string {
    return getEnv('BOT_TOKEN');
}
