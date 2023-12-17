export class BaseConfig {
  protected defaultIfTrue<T extends NonNullable<unknown>>(value: T | true, defaultValue: T): T {
    return value === true ? defaultValue : value;
  }

  protected defaultIfNullish<T>(value: T | undefined | null, defaultValue: NonNullable<T>): NonNullable<T> {
    return value === undefined || value === null ? defaultValue : value;
  }

  protected defaultIfTrueOrUndefined<T extends object | undefined, D = NonNullable<T>>(
    value: T | true,
    defaultValue: D
  ) {
    return value === undefined || value === true || isEmpty(value) ? defaultValue! : value!;
  }

  protected reproduceNTimes<Item, N extends number>(item: Item, n: N): Item[] {
    return Array.from({ length: n }, () => item);
  }

  protected expandDefaultIfNotExpanded<T>(item: T | T[], n: number): T[] {
    return Array.isArray(item) ? item : this.reproduceNTimes(item, n);
  }
}

const isEmpty = <T extends object>(v: T) => {
  return Object.keys(v).length === 0;
};
