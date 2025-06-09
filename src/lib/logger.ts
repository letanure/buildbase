function shouldLog() {
  return process.env.NODE_ENV === 'development';
}

export function logInfo(...args: unknown[]) {
  if (shouldLog()) {
    const timestamp = new Date().toISOString();
    console.info("[INFO]", `[${timestamp}]`, ...args);
  }
}

export function logWarn(...args: unknown[]) {
  if (shouldLog()) {
    const timestamp = new Date().toISOString();
    console.warn("[WARN]", `[${timestamp}]`, ...args);
  }
}

export function logDev(...args: unknown[]) {
  if (shouldLog()) {
    const timestamp = new Date().toISOString();
    console.log("[DEBUG]", `[${timestamp}]`, ...args);
  }
}