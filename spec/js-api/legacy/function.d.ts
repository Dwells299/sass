import {LegacyPluginThis} from './plugin_this';

export type LegacySyncFunction = (
  this: LegacyPluginThis,
  ...args: LegacyValue[]
) => LegacyValue;

export type LegacyAsyncFunction = (
  this: LegacyPluginThis,
  ...args: [...LegacyValue[], (result: LegacyValue) => void]
) => void;

export type LegacyFunction<sync extends 'sync' | 'async'> = sync extends 'async'
  ? LegacySyncFunction | LegacyAsyncFunction
  : LegacySyncFunction;

export type LegacyValue =
  | types.Null
  | types.Number
  | types.String
  | types.Boolean
  | types.Color
  | types.List
  | types.Map;

export namespace types {
  export class Null {
    static readonly NULL: Null;
  }

  export class Number {
    constructor(value: number, unit?: string);

    getValue(): number;

    setValue(value: number): void;

    getUnit(): string;

    setUnit(unit: string): void;
  }

  export class String {
    constructor(value: string);

    getValue(): string;

    setValue(value: string): void;
  }

  export class Boolean<T extends boolean = boolean> {
    getValue(): T;

    static readonly TRUE: Boolean<true>;

    static readonly FALSE: Boolean<false>;
  }

  export class Color {
    constructor(r: number, g: number, b: number, a?: number);

    constructor(argb: number);

    getR(): number;

    setR(value: number): void;

    getG(): number;

    setG(value: number): void;

    getB(): number;

    setB(value: number): void;

    getA(): number;

    setA(value: number): void;
  }

  export class List {
    constructor(length: number, commaSeparator?: boolean);

    getValue(index: number): LegacyValue | undefined;

    setValue(index: number, value: LegacyValue): void;

    getSeparator(): boolean;

    setSeparator(isComma: boolean): void;

    getLength(): number;
  }

  export class Map {
    constructor(length: number);

    getValue(index: number): LegacyValue;

    setValue(index: number, value: LegacyValue): void;

    getKey(index: number): LegacyValue;

    setKey(index: number, key: LegacyValue): void;

    getLength(): number;
  }
}
