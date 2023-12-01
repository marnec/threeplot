export class BaseConfig {
  protected valueOrDefault<T, D = T>(value: T | true, defaultValue: D) {
    return value === true ? defaultValue : value;
  }
}
