import {SourceSpan} from './logger';

/**
 * An exception thrown because a Sass compilation failed.
 *
 * @category Other
 */
export class Exception extends Error {
  private constructor();

  /**
   * A human-friendly representation of the exception.
   *
   * Because many tools simply print `Error.message` directly, this includes not
   * only the textual description of what went wrong (the [[sassMessage]]) but
   * also an indication of where in the Sass stylesheet the error occurred (the
   * [[span]]) and the Sass stack trace at the point of error (the
   * [[sassStack]]).
   */
  message: string;

  /**
   * A textual description of what went wrong.
   *
   * Unlike [[message]], this does *not* include representations of [[span]] or
   * [[sassStack]].
   */
  sassMessage: string;

  /**
   * A human-friendly representation of the Sass stack trace at the point of
   * error.
   */
  sassStack: string;

  /** The location the error ocurred in the Sass file that triggered it. */
  span: SourceSpan;

  /** Returns the same string as [[message]]. */
  toString(): string;
}
