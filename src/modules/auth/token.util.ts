import { createHash, randomBytes } from 'crypto';

/**
 * One-time tokens (email verification, password reset, invitations) are random
 * high-entropy strings. We store a deterministic SHA-256 hash as the lookup key
 * (the raw value only travels in the email link), so the row is findable while
 * the stored value is not reversible.
 */
export function generateOneTimeToken(): { raw: string; hash: string } {
  const raw = randomBytes(32).toString('hex');
  return { raw, hash: hashToken(raw) };
}

export function hashToken(raw: string): string {
  return createHash('sha256').update(raw).digest('hex');
}
