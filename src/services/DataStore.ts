/**
 * Shared Data Store for Cross-Platform Tests
 * Stores data that needs to be shared between mobile and web test scenarios
 */

class DataStore {
  private static data: { [key: string]: any } = {};

  /**
   * Store a value in the data store
   * @param key - The key to store
   * @param value - The value to store
   */
  static set(key: string, value: any): void {
    this.data[key] = value;
    console.log(`✓ DataStore: Set ${key} = ${JSON.stringify(value)}`);
  }

  /**
   * Retrieve a value from the data store
   * @param key - The key to retrieve
   * @returns The stored value or undefined if not found
   */
  static get(key: string): any {
    const value = this.data[key];
    console.log(`✓ DataStore: Get ${key} = ${JSON.stringify(value)}`);
    return value;
  }

  /**
   * Check if a key exists in the store
   * @param key - The key to check
   * @returns True if key exists, false otherwise
   */
  static has(key: string): boolean {
    return key in this.data;
  }

  /**
   * Clear all data from the store
   */
  static clear(): void {
    this.data = {};
    console.log('✓ DataStore: Cleared all data');
  }

  /**
   * Get all stored data (for debugging)
   * @returns All stored data
   */
  static getAll(): any {
    return { ...this.data };
  }
}

export default DataStore;
