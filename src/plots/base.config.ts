export class ConfigParams {
  protected valueOrDefault<T>(value: T | true, defaultValue: T) {
    return value === true ? defaultValue : value;
  }
}
