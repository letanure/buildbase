function shouldLog() {
  return process.env.NODE_ENV === 'development';
}

export function logInfo(...args: unknown[]) {
  if (shouldLog()) {
    console.info("[INFO]", ...args);
  }
}

export function logWarn(...args: unknown[]) {
  if (shouldLog()) {
    console.warn("[WARN]", ...args);
  }
}

export function logDev(...args: unknown[]) {
  if (shouldLog()) {
    console.log("[DEBUG]", ...args);
  }
}