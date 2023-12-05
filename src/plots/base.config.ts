export class BaseConfig {
  protected defaultIfTrue<T extends NonNullable<object>>(value: T | true, defaultValue: T): T {
    return value === true ? defaultValue : value;
  }

  protected defaultIfUndefined<T, D = Required<T>>(defaultValue: D, value?: T): T | D {
    return value === undefined ? defaultValue : value;
  }

  protected defaultIfTrueOrUndefined<T extends object | undefined, D = NonNullable<T>>(
    value: T | true,
    defaultValue: D
  ) {
    return value === undefined || value === true || isEmpty(value) ? defaultValue! : value!;
  }
}

const isEmpty = <T extends object>(v: T) => {
  return Object.keys(v).length === 0;
};
