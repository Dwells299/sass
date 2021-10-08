import {OrderedMap} from 'immutable';

import {Value} from './index';

/**
 * Sass's [map type](https://sass-lang.com/documentation/values/maps).
 *
 * @category Custom Function
 */
export class SassMap extends Value {
  /**
   * Creates a new map.
   *
   * @param contents - The contents of the map. This is an immutable
   * [[OrderedMap]] from the [`immutable` package](https://immutable-js.com/).
   */
  constructor(contents: OrderedMap<Value, Value>);

  /** Creates a new empty map. */
  static empty(): SassMap;

  /**
   * Returns the contents of this map as an immutable [[OrderedMap]] from the
   * [`immutable` package](https://immutable-js.com/).
   */
  get contents(): OrderedMap<Value, Value>;

  /** @hidden */
  tryMap(): OrderedMap<Value, Value>;
}
