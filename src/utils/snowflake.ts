/**
 * @fileoverview Snowflake
 * @description Generates random IDs
 * @module utils/snowflake
 */

// Generates a snowflake ID
export function generateSnowflake() {
  return Math.round(Date.now() / 15).toString(36);
}
