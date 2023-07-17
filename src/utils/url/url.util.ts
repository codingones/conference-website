import { config } from 'dotenv';

config();

type Protocol = 'http' | 'https';

type Url = `${Protocol}://${string}:${number}` | `${Protocol}://${string}`;

const hostnameFromEnv = (): string => process.env['HOSTNAME'] ?? 'localhost';

const portFromEnv = (): number | undefined => (process.env['PORT'] ? +process.env['PORT'] : undefined);

const isSecureProtocolFromEnv = (): boolean => process.env['PROTOCOL'] === 'https';

const protocol = (isSecure: boolean): Protocol => `http${isSecure ? 's' : ''}`;

export const url = (hostname: string, port?: number, isSecure: boolean = true): Url =>
  port ? `${protocol(isSecure)}://${hostname}:${port}` : `${protocol(isSecure)}://${hostname}`;

export const urlFromEnv = (): Url => url(hostnameFromEnv(), portFromEnv(), isSecureProtocolFromEnv());
