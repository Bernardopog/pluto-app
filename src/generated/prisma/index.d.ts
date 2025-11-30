
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model Vault
 * 
 */
export type Vault = $Result.DefaultSelection<Prisma.$VaultPayload>
/**
 * Model VaultItem
 * 
 */
export type VaultItem = $Result.DefaultSelection<Prisma.$VaultItemPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Finance
 * 
 */
export type Finance = $Result.DefaultSelection<Prisma.$FinancePayload>
/**
 * Model Stats
 * 
 */
export type Stats = $Result.DefaultSelection<Prisma.$StatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VaultIcons: {
  plane: 'plane',
  piggy: 'piggy',
  car: 'car'
};

export type VaultIcons = (typeof VaultIcons)[keyof typeof VaultIcons]


export const GoalProgress: {
  balance: 'balance',
  vault: 'vault'
};

export type GoalProgress = (typeof GoalProgress)[keyof typeof GoalProgress]

}

export type VaultIcons = $Enums.VaultIcons

export const VaultIcons: typeof $Enums.VaultIcons

export type GoalProgress = $Enums.GoalProgress

export const GoalProgress: typeof $Enums.GoalProgress

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vault`: Exposes CRUD operations for the **Vault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vaults
    * const vaults = await prisma.vault.findMany()
    * ```
    */
  get vault(): Prisma.VaultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vaultItem`: Exposes CRUD operations for the **VaultItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VaultItems
    * const vaultItems = await prisma.vaultItem.findMany()
    * ```
    */
  get vaultItem(): Prisma.VaultItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finance`: Exposes CRUD operations for the **Finance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finances
    * const finances = await prisma.finance.findMany()
    * ```
    */
  get finance(): Prisma.FinanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stats`: Exposes CRUD operations for the **Stats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stats.findMany()
    * ```
    */
  get stats(): Prisma.StatsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Transaction: 'Transaction',
    Budget: 'Budget',
    Vault: 'Vault',
    VaultItem: 'VaultItem',
    Goal: 'Goal',
    Finance: 'Finance',
    Stats: 'Stats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "transaction" | "budget" | "vault" | "vaultItem" | "goal" | "finance" | "stats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      Vault: {
        payload: Prisma.$VaultPayload<ExtArgs>
        fields: Prisma.VaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>
          }
          findFirst: {
            args: Prisma.VaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>
          }
          findMany: {
            args: Prisma.VaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>[]
          }
          create: {
            args: Prisma.VaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>
          }
          createMany: {
            args: Prisma.VaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>[]
          }
          delete: {
            args: Prisma.VaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>
          }
          update: {
            args: Prisma.VaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>
          }
          deleteMany: {
            args: Prisma.VaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VaultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>[]
          }
          upsert: {
            args: Prisma.VaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultPayload>
          }
          aggregate: {
            args: Prisma.VaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVault>
          }
          groupBy: {
            args: Prisma.VaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaultCountArgs<ExtArgs>
            result: $Utils.Optional<VaultCountAggregateOutputType> | number
          }
        }
      }
      VaultItem: {
        payload: Prisma.$VaultItemPayload<ExtArgs>
        fields: Prisma.VaultItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaultItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaultItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          findFirst: {
            args: Prisma.VaultItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaultItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          findMany: {
            args: Prisma.VaultItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>[]
          }
          create: {
            args: Prisma.VaultItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          createMany: {
            args: Prisma.VaultItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VaultItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>[]
          }
          delete: {
            args: Prisma.VaultItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          update: {
            args: Prisma.VaultItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          deleteMany: {
            args: Prisma.VaultItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaultItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VaultItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>[]
          }
          upsert: {
            args: Prisma.VaultItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          aggregate: {
            args: Prisma.VaultItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaultItem>
          }
          groupBy: {
            args: Prisma.VaultItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaultItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaultItemCountArgs<ExtArgs>
            result: $Utils.Optional<VaultItemCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Finance: {
        payload: Prisma.$FinancePayload<ExtArgs>
        fields: Prisma.FinanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findFirst: {
            args: Prisma.FinanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findMany: {
            args: Prisma.FinanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          create: {
            args: Prisma.FinanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          createMany: {
            args: Prisma.FinanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          delete: {
            args: Prisma.FinanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          update: {
            args: Prisma.FinanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          deleteMany: {
            args: Prisma.FinanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          upsert: {
            args: Prisma.FinanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          aggregate: {
            args: Prisma.FinanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinance>
          }
          groupBy: {
            args: Prisma.FinanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceCountAggregateOutputType> | number
          }
        }
      }
      Stats: {
        payload: Prisma.$StatsPayload<ExtArgs>
        fields: Prisma.StatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          findFirst: {
            args: Prisma.StatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          findMany: {
            args: Prisma.StatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          create: {
            args: Prisma.StatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          createMany: {
            args: Prisma.StatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          delete: {
            args: Prisma.StatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          update: {
            args: Prisma.StatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          deleteMany: {
            args: Prisma.StatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          upsert: {
            args: Prisma.StatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          aggregate: {
            args: Prisma.StatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStats>
          }
          groupBy: {
            args: Prisma.StatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatsCountArgs<ExtArgs>
            result: $Utils.Optional<StatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    transaction?: TransactionOmit
    budget?: BudgetOmit
    vault?: VaultOmit
    vaultItem?: VaultItemOmit
    goal?: GoalOmit
    finance?: FinanceOmit
    stats?: StatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    budgets: number
    transactions: number
    vaults: number
    vaultItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | UserCountOutputTypeCountBudgetsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    vaults?: boolean | UserCountOutputTypeCountVaultsArgs
    vaultItems?: boolean | UserCountOutputTypeCountVaultItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVaultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVaultItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultItemWhereInput
  }


  /**
   * Count Type BudgetCountOutputType
   */

  export type BudgetCountOutputType = {
    transactions: number
  }

  export type BudgetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | BudgetCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BudgetCountOutputType without action
   */
  export type BudgetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCountOutputType
     */
    select?: BudgetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BudgetCountOutputType without action
   */
  export type BudgetCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type VaultCountOutputType
   */

  export type VaultCountOutputType = {
    items: number
  }

  export type VaultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | VaultCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * VaultCountOutputType without action
   */
  export type VaultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultCountOutputType
     */
    select?: VaultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VaultCountOutputType without action
   */
  export type VaultCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    finance?: boolean | User$financeArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    stats?: boolean | User$statsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    vaults?: boolean | User$vaultsArgs<ExtArgs>
    vaultItems?: boolean | User$vaultItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    finance?: boolean | User$financeArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    stats?: boolean | User$statsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    vaults?: boolean | User$vaultsArgs<ExtArgs>
    vaultItems?: boolean | User$vaultItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      finance: Prisma.$FinancePayload<ExtArgs> | null
      goals: Prisma.$GoalPayload<ExtArgs> | null
      stats: Prisma.$StatsPayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      vaults: Prisma.$VaultPayload<ExtArgs>[]
      vaultItems: Prisma.$VaultItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budgets<T extends User$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    finance<T extends User$financeArgs<ExtArgs> = {}>(args?: Subset<T, User$financeArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stats<T extends User$statsArgs<ExtArgs> = {}>(args?: Subset<T, User$statsArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vaults<T extends User$vaultsArgs<ExtArgs> = {}>(args?: Subset<T, User$vaultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vaultItems<T extends User$vaultItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$vaultItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.budgets
   */
  export type User$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * User.finance
   */
  export type User$financeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    where?: FinanceWhereInput
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * User.stats
   */
  export type User$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    where?: StatsWhereInput
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.vaults
   */
  export type User$vaultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    where?: VaultWhereInput
    orderBy?: VaultOrderByWithRelationInput | VaultOrderByWithRelationInput[]
    cursor?: VaultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaultScalarFieldEnum | VaultScalarFieldEnum[]
  }

  /**
   * User.vaultItems
   */
  export type User$vaultItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    where?: VaultItemWhereInput
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    cursor?: VaultItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    value: number | null
    userId: number | null
    categoryId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    value: number | null
    userId: number | null
    categoryId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
    date: Date | null
    userId: number | null
    categoryId: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
    date: Date | null
    userId: number | null
    categoryId: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    name: number
    value: number
    date: number
    userId: number
    categoryId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    categoryId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    categoryId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    date?: true
    userId?: true
    categoryId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    date?: true
    userId?: true
    categoryId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    date?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    name: string
    value: number
    date: Date
    userId: number
    categoryId: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
    categoryId?: boolean
    category?: boolean | BudgetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
    categoryId?: boolean
    category?: boolean | BudgetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
    categoryId?: boolean
    category?: boolean | BudgetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "date" | "userId" | "categoryId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BudgetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BudgetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BudgetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      category: Prisma.$BudgetPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: number
      date: Date
      userId: number
      categoryId: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BudgetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BudgetDefaultArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly name: FieldRef<"Transaction", 'String'>
    readonly value: FieldRef<"Transaction", 'Int'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly categoryId: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    id: number | null
    limit: number | null
    userId: number | null
  }

  export type BudgetSumAggregateOutputType = {
    id: number | null
    limit: number | null
    userId: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    limit: number | null
    userId: number | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    limit: number | null
    userId: number | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    name: number
    color: number
    limit: number
    userId: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    id?: true
    limit?: true
    userId?: true
  }

  export type BudgetSumAggregateInputType = {
    id?: true
    limit?: true
    userId?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    limit?: true
    userId?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    limit?: true
    userId?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    limit?: true
    userId?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: number
    name: string
    color: string
    limit: number
    userId: number
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    limit?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Budget$transactionsArgs<ExtArgs>
    _count?: boolean | BudgetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    limit?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    limit?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    limit?: boolean
    userId?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "limit" | "userId", ExtArgs["result"]["budget"]>
  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Budget$transactionsArgs<ExtArgs>
    _count?: boolean | BudgetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color: string
      limit: number
      userId: number
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {BudgetUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Budget$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Budget$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'Int'>
    readonly name: FieldRef<"Budget", 'String'>
    readonly color: FieldRef<"Budget", 'String'>
    readonly limit: FieldRef<"Budget", 'Int'>
    readonly userId: FieldRef<"Budget", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget updateManyAndReturn
   */
  export type BudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget.transactions
   */
  export type Budget$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model Vault
   */

  export type AggregateVault = {
    _count: VaultCountAggregateOutputType | null
    _avg: VaultAvgAggregateOutputType | null
    _sum: VaultSumAggregateOutputType | null
    _min: VaultMinAggregateOutputType | null
    _max: VaultMaxAggregateOutputType | null
  }

  export type VaultAvgAggregateOutputType = {
    id: number | null
    targetPrice: number | null
    userId: number | null
  }

  export type VaultSumAggregateOutputType = {
    id: number | null
    targetPrice: number | null
    userId: number | null
  }

  export type VaultMinAggregateOutputType = {
    id: number | null
    name: string | null
    targetPrice: number | null
    icon: $Enums.VaultIcons | null
    userId: number | null
  }

  export type VaultMaxAggregateOutputType = {
    id: number | null
    name: string | null
    targetPrice: number | null
    icon: $Enums.VaultIcons | null
    userId: number | null
  }

  export type VaultCountAggregateOutputType = {
    id: number
    name: number
    targetPrice: number
    icon: number
    userId: number
    _all: number
  }


  export type VaultAvgAggregateInputType = {
    id?: true
    targetPrice?: true
    userId?: true
  }

  export type VaultSumAggregateInputType = {
    id?: true
    targetPrice?: true
    userId?: true
  }

  export type VaultMinAggregateInputType = {
    id?: true
    name?: true
    targetPrice?: true
    icon?: true
    userId?: true
  }

  export type VaultMaxAggregateInputType = {
    id?: true
    name?: true
    targetPrice?: true
    icon?: true
    userId?: true
  }

  export type VaultCountAggregateInputType = {
    id?: true
    name?: true
    targetPrice?: true
    icon?: true
    userId?: true
    _all?: true
  }

  export type VaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vault to aggregate.
     */
    where?: VaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaults to fetch.
     */
    orderBy?: VaultOrderByWithRelationInput | VaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vaults
    **/
    _count?: true | VaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaultMaxAggregateInputType
  }

  export type GetVaultAggregateType<T extends VaultAggregateArgs> = {
        [P in keyof T & keyof AggregateVault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVault[P]>
      : GetScalarType<T[P], AggregateVault[P]>
  }




  export type VaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultWhereInput
    orderBy?: VaultOrderByWithAggregationInput | VaultOrderByWithAggregationInput[]
    by: VaultScalarFieldEnum[] | VaultScalarFieldEnum
    having?: VaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaultCountAggregateInputType | true
    _avg?: VaultAvgAggregateInputType
    _sum?: VaultSumAggregateInputType
    _min?: VaultMinAggregateInputType
    _max?: VaultMaxAggregateInputType
  }

  export type VaultGroupByOutputType = {
    id: number
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
    userId: number
    _count: VaultCountAggregateOutputType | null
    _avg: VaultAvgAggregateOutputType | null
    _sum: VaultSumAggregateOutputType | null
    _min: VaultMinAggregateOutputType | null
    _max: VaultMaxAggregateOutputType | null
  }

  type GetVaultGroupByPayload<T extends VaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaultGroupByOutputType[P]>
            : GetScalarType<T[P], VaultGroupByOutputType[P]>
        }
      >
    >


  export type VaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetPrice?: boolean
    icon?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Vault$itemsArgs<ExtArgs>
    _count?: boolean | VaultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vault"]>

  export type VaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetPrice?: boolean
    icon?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vault"]>

  export type VaultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetPrice?: boolean
    icon?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vault"]>

  export type VaultSelectScalar = {
    id?: boolean
    name?: boolean
    targetPrice?: boolean
    icon?: boolean
    userId?: boolean
  }

  export type VaultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "targetPrice" | "icon" | "userId", ExtArgs["result"]["vault"]>
  export type VaultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Vault$itemsArgs<ExtArgs>
    _count?: boolean | VaultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VaultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VaultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vault"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$VaultItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      targetPrice: number
      icon: $Enums.VaultIcons
      userId: number
    }, ExtArgs["result"]["vault"]>
    composites: {}
  }

  type VaultGetPayload<S extends boolean | null | undefined | VaultDefaultArgs> = $Result.GetResult<Prisma.$VaultPayload, S>

  type VaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VaultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VaultCountAggregateInputType | true
    }

  export interface VaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vault'], meta: { name: 'Vault' } }
    /**
     * Find zero or one Vault that matches the filter.
     * @param {VaultFindUniqueArgs} args - Arguments to find a Vault
     * @example
     * // Get one Vault
     * const vault = await prisma.vault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaultFindUniqueArgs>(args: SelectSubset<T, VaultFindUniqueArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vault that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VaultFindUniqueOrThrowArgs} args - Arguments to find a Vault
     * @example
     * // Get one Vault
     * const vault = await prisma.vault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaultFindUniqueOrThrowArgs>(args: SelectSubset<T, VaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultFindFirstArgs} args - Arguments to find a Vault
     * @example
     * // Get one Vault
     * const vault = await prisma.vault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaultFindFirstArgs>(args?: SelectSubset<T, VaultFindFirstArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultFindFirstOrThrowArgs} args - Arguments to find a Vault
     * @example
     * // Get one Vault
     * const vault = await prisma.vault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaultFindFirstOrThrowArgs>(args?: SelectSubset<T, VaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vaults
     * const vaults = await prisma.vault.findMany()
     * 
     * // Get first 10 Vaults
     * const vaults = await prisma.vault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaultWithIdOnly = await prisma.vault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaultFindManyArgs>(args?: SelectSubset<T, VaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vault.
     * @param {VaultCreateArgs} args - Arguments to create a Vault.
     * @example
     * // Create one Vault
     * const Vault = await prisma.vault.create({
     *   data: {
     *     // ... data to create a Vault
     *   }
     * })
     * 
     */
    create<T extends VaultCreateArgs>(args: SelectSubset<T, VaultCreateArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vaults.
     * @param {VaultCreateManyArgs} args - Arguments to create many Vaults.
     * @example
     * // Create many Vaults
     * const vault = await prisma.vault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaultCreateManyArgs>(args?: SelectSubset<T, VaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vaults and returns the data saved in the database.
     * @param {VaultCreateManyAndReturnArgs} args - Arguments to create many Vaults.
     * @example
     * // Create many Vaults
     * const vault = await prisma.vault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vaults and only return the `id`
     * const vaultWithIdOnly = await prisma.vault.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VaultCreateManyAndReturnArgs>(args?: SelectSubset<T, VaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vault.
     * @param {VaultDeleteArgs} args - Arguments to delete one Vault.
     * @example
     * // Delete one Vault
     * const Vault = await prisma.vault.delete({
     *   where: {
     *     // ... filter to delete one Vault
     *   }
     * })
     * 
     */
    delete<T extends VaultDeleteArgs>(args: SelectSubset<T, VaultDeleteArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vault.
     * @param {VaultUpdateArgs} args - Arguments to update one Vault.
     * @example
     * // Update one Vault
     * const vault = await prisma.vault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaultUpdateArgs>(args: SelectSubset<T, VaultUpdateArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vaults.
     * @param {VaultDeleteManyArgs} args - Arguments to filter Vaults to delete.
     * @example
     * // Delete a few Vaults
     * const { count } = await prisma.vault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaultDeleteManyArgs>(args?: SelectSubset<T, VaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vaults
     * const vault = await prisma.vault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaultUpdateManyArgs>(args: SelectSubset<T, VaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaults and returns the data updated in the database.
     * @param {VaultUpdateManyAndReturnArgs} args - Arguments to update many Vaults.
     * @example
     * // Update many Vaults
     * const vault = await prisma.vault.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vaults and only return the `id`
     * const vaultWithIdOnly = await prisma.vault.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VaultUpdateManyAndReturnArgs>(args: SelectSubset<T, VaultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vault.
     * @param {VaultUpsertArgs} args - Arguments to update or create a Vault.
     * @example
     * // Update or create a Vault
     * const vault = await prisma.vault.upsert({
     *   create: {
     *     // ... data to create a Vault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vault we want to update
     *   }
     * })
     */
    upsert<T extends VaultUpsertArgs>(args: SelectSubset<T, VaultUpsertArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultCountArgs} args - Arguments to filter Vaults to count.
     * @example
     * // Count the number of Vaults
     * const count = await prisma.vault.count({
     *   where: {
     *     // ... the filter for the Vaults we want to count
     *   }
     * })
    **/
    count<T extends VaultCountArgs>(
      args?: Subset<T, VaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VaultAggregateArgs>(args: Subset<T, VaultAggregateArgs>): Prisma.PrismaPromise<GetVaultAggregateType<T>>

    /**
     * Group by Vault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaultGroupByArgs['orderBy'] }
        : { orderBy?: VaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vault model
   */
  readonly fields: VaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Vault$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Vault$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vault model
   */
  interface VaultFieldRefs {
    readonly id: FieldRef<"Vault", 'Int'>
    readonly name: FieldRef<"Vault", 'String'>
    readonly targetPrice: FieldRef<"Vault", 'Int'>
    readonly icon: FieldRef<"Vault", 'VaultIcons'>
    readonly userId: FieldRef<"Vault", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vault findUnique
   */
  export type VaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * Filter, which Vault to fetch.
     */
    where: VaultWhereUniqueInput
  }

  /**
   * Vault findUniqueOrThrow
   */
  export type VaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * Filter, which Vault to fetch.
     */
    where: VaultWhereUniqueInput
  }

  /**
   * Vault findFirst
   */
  export type VaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * Filter, which Vault to fetch.
     */
    where?: VaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaults to fetch.
     */
    orderBy?: VaultOrderByWithRelationInput | VaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaults.
     */
    cursor?: VaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaults.
     */
    distinct?: VaultScalarFieldEnum | VaultScalarFieldEnum[]
  }

  /**
   * Vault findFirstOrThrow
   */
  export type VaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * Filter, which Vault to fetch.
     */
    where?: VaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaults to fetch.
     */
    orderBy?: VaultOrderByWithRelationInput | VaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaults.
     */
    cursor?: VaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaults.
     */
    distinct?: VaultScalarFieldEnum | VaultScalarFieldEnum[]
  }

  /**
   * Vault findMany
   */
  export type VaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * Filter, which Vaults to fetch.
     */
    where?: VaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaults to fetch.
     */
    orderBy?: VaultOrderByWithRelationInput | VaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vaults.
     */
    cursor?: VaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaults.
     */
    skip?: number
    distinct?: VaultScalarFieldEnum | VaultScalarFieldEnum[]
  }

  /**
   * Vault create
   */
  export type VaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * The data needed to create a Vault.
     */
    data: XOR<VaultCreateInput, VaultUncheckedCreateInput>
  }

  /**
   * Vault createMany
   */
  export type VaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vaults.
     */
    data: VaultCreateManyInput | VaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vault createManyAndReturn
   */
  export type VaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * The data used to create many Vaults.
     */
    data: VaultCreateManyInput | VaultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vault update
   */
  export type VaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * The data needed to update a Vault.
     */
    data: XOR<VaultUpdateInput, VaultUncheckedUpdateInput>
    /**
     * Choose, which Vault to update.
     */
    where: VaultWhereUniqueInput
  }

  /**
   * Vault updateMany
   */
  export type VaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vaults.
     */
    data: XOR<VaultUpdateManyMutationInput, VaultUncheckedUpdateManyInput>
    /**
     * Filter which Vaults to update
     */
    where?: VaultWhereInput
    /**
     * Limit how many Vaults to update.
     */
    limit?: number
  }

  /**
   * Vault updateManyAndReturn
   */
  export type VaultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * The data used to update Vaults.
     */
    data: XOR<VaultUpdateManyMutationInput, VaultUncheckedUpdateManyInput>
    /**
     * Filter which Vaults to update
     */
    where?: VaultWhereInput
    /**
     * Limit how many Vaults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vault upsert
   */
  export type VaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * The filter to search for the Vault to update in case it exists.
     */
    where: VaultWhereUniqueInput
    /**
     * In case the Vault found by the `where` argument doesn't exist, create a new Vault with this data.
     */
    create: XOR<VaultCreateInput, VaultUncheckedCreateInput>
    /**
     * In case the Vault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaultUpdateInput, VaultUncheckedUpdateInput>
  }

  /**
   * Vault delete
   */
  export type VaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
    /**
     * Filter which Vault to delete.
     */
    where: VaultWhereUniqueInput
  }

  /**
   * Vault deleteMany
   */
  export type VaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaults to delete
     */
    where?: VaultWhereInput
    /**
     * Limit how many Vaults to delete.
     */
    limit?: number
  }

  /**
   * Vault.items
   */
  export type Vault$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    where?: VaultItemWhereInput
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    cursor?: VaultItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * Vault without action
   */
  export type VaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vault
     */
    select?: VaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vault
     */
    omit?: VaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultInclude<ExtArgs> | null
  }


  /**
   * Model VaultItem
   */

  export type AggregateVaultItem = {
    _count: VaultItemCountAggregateOutputType | null
    _avg: VaultItemAvgAggregateOutputType | null
    _sum: VaultItemSumAggregateOutputType | null
    _min: VaultItemMinAggregateOutputType | null
    _max: VaultItemMaxAggregateOutputType | null
  }

  export type VaultItemAvgAggregateOutputType = {
    id: number | null
    value: number | null
    vaultId: number | null
    userId: number | null
  }

  export type VaultItemSumAggregateOutputType = {
    id: number | null
    value: number | null
    vaultId: number | null
    userId: number | null
  }

  export type VaultItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
    vaultId: number | null
    userId: number | null
  }

  export type VaultItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
    vaultId: number | null
    userId: number | null
  }

  export type VaultItemCountAggregateOutputType = {
    id: number
    name: number
    value: number
    vaultId: number
    userId: number
    _all: number
  }


  export type VaultItemAvgAggregateInputType = {
    id?: true
    value?: true
    vaultId?: true
    userId?: true
  }

  export type VaultItemSumAggregateInputType = {
    id?: true
    value?: true
    vaultId?: true
    userId?: true
  }

  export type VaultItemMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    vaultId?: true
    userId?: true
  }

  export type VaultItemMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    vaultId?: true
    userId?: true
  }

  export type VaultItemCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    vaultId?: true
    userId?: true
    _all?: true
  }

  export type VaultItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VaultItem to aggregate.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VaultItems
    **/
    _count?: true | VaultItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaultItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaultItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaultItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaultItemMaxAggregateInputType
  }

  export type GetVaultItemAggregateType<T extends VaultItemAggregateArgs> = {
        [P in keyof T & keyof AggregateVaultItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaultItem[P]>
      : GetScalarType<T[P], AggregateVaultItem[P]>
  }




  export type VaultItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultItemWhereInput
    orderBy?: VaultItemOrderByWithAggregationInput | VaultItemOrderByWithAggregationInput[]
    by: VaultItemScalarFieldEnum[] | VaultItemScalarFieldEnum
    having?: VaultItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaultItemCountAggregateInputType | true
    _avg?: VaultItemAvgAggregateInputType
    _sum?: VaultItemSumAggregateInputType
    _min?: VaultItemMinAggregateInputType
    _max?: VaultItemMaxAggregateInputType
  }

  export type VaultItemGroupByOutputType = {
    id: number
    name: string
    value: number
    vaultId: number
    userId: number
    _count: VaultItemCountAggregateOutputType | null
    _avg: VaultItemAvgAggregateOutputType | null
    _sum: VaultItemSumAggregateOutputType | null
    _min: VaultItemMinAggregateOutputType | null
    _max: VaultItemMaxAggregateOutputType | null
  }

  type GetVaultItemGroupByPayload<T extends VaultItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaultItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaultItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaultItemGroupByOutputType[P]>
            : GetScalarType<T[P], VaultItemGroupByOutputType[P]>
        }
      >
    >


  export type VaultItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    vaultId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vault?: boolean | VaultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaultItem"]>

  export type VaultItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    vaultId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vault?: boolean | VaultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaultItem"]>

  export type VaultItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    vaultId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vault?: boolean | VaultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaultItem"]>

  export type VaultItemSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    vaultId?: boolean
    userId?: boolean
  }

  export type VaultItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "vaultId" | "userId", ExtArgs["result"]["vaultItem"]>
  export type VaultItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vault?: boolean | VaultDefaultArgs<ExtArgs>
  }
  export type VaultItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vault?: boolean | VaultDefaultArgs<ExtArgs>
  }
  export type VaultItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vault?: boolean | VaultDefaultArgs<ExtArgs>
  }

  export type $VaultItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VaultItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vault: Prisma.$VaultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: number
      vaultId: number
      userId: number
    }, ExtArgs["result"]["vaultItem"]>
    composites: {}
  }

  type VaultItemGetPayload<S extends boolean | null | undefined | VaultItemDefaultArgs> = $Result.GetResult<Prisma.$VaultItemPayload, S>

  type VaultItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VaultItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VaultItemCountAggregateInputType | true
    }

  export interface VaultItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VaultItem'], meta: { name: 'VaultItem' } }
    /**
     * Find zero or one VaultItem that matches the filter.
     * @param {VaultItemFindUniqueArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaultItemFindUniqueArgs>(args: SelectSubset<T, VaultItemFindUniqueArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VaultItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VaultItemFindUniqueOrThrowArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaultItemFindUniqueOrThrowArgs>(args: SelectSubset<T, VaultItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VaultItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindFirstArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaultItemFindFirstArgs>(args?: SelectSubset<T, VaultItemFindFirstArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VaultItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindFirstOrThrowArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaultItemFindFirstOrThrowArgs>(args?: SelectSubset<T, VaultItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VaultItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VaultItems
     * const vaultItems = await prisma.vaultItem.findMany()
     * 
     * // Get first 10 VaultItems
     * const vaultItems = await prisma.vaultItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaultItemWithIdOnly = await prisma.vaultItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaultItemFindManyArgs>(args?: SelectSubset<T, VaultItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VaultItem.
     * @param {VaultItemCreateArgs} args - Arguments to create a VaultItem.
     * @example
     * // Create one VaultItem
     * const VaultItem = await prisma.vaultItem.create({
     *   data: {
     *     // ... data to create a VaultItem
     *   }
     * })
     * 
     */
    create<T extends VaultItemCreateArgs>(args: SelectSubset<T, VaultItemCreateArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VaultItems.
     * @param {VaultItemCreateManyArgs} args - Arguments to create many VaultItems.
     * @example
     * // Create many VaultItems
     * const vaultItem = await prisma.vaultItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaultItemCreateManyArgs>(args?: SelectSubset<T, VaultItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VaultItems and returns the data saved in the database.
     * @param {VaultItemCreateManyAndReturnArgs} args - Arguments to create many VaultItems.
     * @example
     * // Create many VaultItems
     * const vaultItem = await prisma.vaultItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VaultItems and only return the `id`
     * const vaultItemWithIdOnly = await prisma.vaultItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VaultItemCreateManyAndReturnArgs>(args?: SelectSubset<T, VaultItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VaultItem.
     * @param {VaultItemDeleteArgs} args - Arguments to delete one VaultItem.
     * @example
     * // Delete one VaultItem
     * const VaultItem = await prisma.vaultItem.delete({
     *   where: {
     *     // ... filter to delete one VaultItem
     *   }
     * })
     * 
     */
    delete<T extends VaultItemDeleteArgs>(args: SelectSubset<T, VaultItemDeleteArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VaultItem.
     * @param {VaultItemUpdateArgs} args - Arguments to update one VaultItem.
     * @example
     * // Update one VaultItem
     * const vaultItem = await prisma.vaultItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaultItemUpdateArgs>(args: SelectSubset<T, VaultItemUpdateArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VaultItems.
     * @param {VaultItemDeleteManyArgs} args - Arguments to filter VaultItems to delete.
     * @example
     * // Delete a few VaultItems
     * const { count } = await prisma.vaultItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaultItemDeleteManyArgs>(args?: SelectSubset<T, VaultItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VaultItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VaultItems
     * const vaultItem = await prisma.vaultItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaultItemUpdateManyArgs>(args: SelectSubset<T, VaultItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VaultItems and returns the data updated in the database.
     * @param {VaultItemUpdateManyAndReturnArgs} args - Arguments to update many VaultItems.
     * @example
     * // Update many VaultItems
     * const vaultItem = await prisma.vaultItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VaultItems and only return the `id`
     * const vaultItemWithIdOnly = await prisma.vaultItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VaultItemUpdateManyAndReturnArgs>(args: SelectSubset<T, VaultItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VaultItem.
     * @param {VaultItemUpsertArgs} args - Arguments to update or create a VaultItem.
     * @example
     * // Update or create a VaultItem
     * const vaultItem = await prisma.vaultItem.upsert({
     *   create: {
     *     // ... data to create a VaultItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VaultItem we want to update
     *   }
     * })
     */
    upsert<T extends VaultItemUpsertArgs>(args: SelectSubset<T, VaultItemUpsertArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VaultItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemCountArgs} args - Arguments to filter VaultItems to count.
     * @example
     * // Count the number of VaultItems
     * const count = await prisma.vaultItem.count({
     *   where: {
     *     // ... the filter for the VaultItems we want to count
     *   }
     * })
    **/
    count<T extends VaultItemCountArgs>(
      args?: Subset<T, VaultItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaultItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VaultItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VaultItemAggregateArgs>(args: Subset<T, VaultItemAggregateArgs>): Prisma.PrismaPromise<GetVaultItemAggregateType<T>>

    /**
     * Group by VaultItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VaultItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaultItemGroupByArgs['orderBy'] }
        : { orderBy?: VaultItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VaultItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaultItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VaultItem model
   */
  readonly fields: VaultItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VaultItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaultItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vault<T extends VaultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VaultDefaultArgs<ExtArgs>>): Prisma__VaultClient<$Result.GetResult<Prisma.$VaultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VaultItem model
   */
  interface VaultItemFieldRefs {
    readonly id: FieldRef<"VaultItem", 'Int'>
    readonly name: FieldRef<"VaultItem", 'String'>
    readonly value: FieldRef<"VaultItem", 'Int'>
    readonly vaultId: FieldRef<"VaultItem", 'Int'>
    readonly userId: FieldRef<"VaultItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VaultItem findUnique
   */
  export type VaultItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem findUniqueOrThrow
   */
  export type VaultItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem findFirst
   */
  export type VaultItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultItems.
     */
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem findFirstOrThrow
   */
  export type VaultItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultItems.
     */
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem findMany
   */
  export type VaultItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItems to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem create
   */
  export type VaultItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * The data needed to create a VaultItem.
     */
    data: XOR<VaultItemCreateInput, VaultItemUncheckedCreateInput>
  }

  /**
   * VaultItem createMany
   */
  export type VaultItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VaultItems.
     */
    data: VaultItemCreateManyInput | VaultItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VaultItem createManyAndReturn
   */
  export type VaultItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * The data used to create many VaultItems.
     */
    data: VaultItemCreateManyInput | VaultItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VaultItem update
   */
  export type VaultItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * The data needed to update a VaultItem.
     */
    data: XOR<VaultItemUpdateInput, VaultItemUncheckedUpdateInput>
    /**
     * Choose, which VaultItem to update.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem updateMany
   */
  export type VaultItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VaultItems.
     */
    data: XOR<VaultItemUpdateManyMutationInput, VaultItemUncheckedUpdateManyInput>
    /**
     * Filter which VaultItems to update
     */
    where?: VaultItemWhereInput
    /**
     * Limit how many VaultItems to update.
     */
    limit?: number
  }

  /**
   * VaultItem updateManyAndReturn
   */
  export type VaultItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * The data used to update VaultItems.
     */
    data: XOR<VaultItemUpdateManyMutationInput, VaultItemUncheckedUpdateManyInput>
    /**
     * Filter which VaultItems to update
     */
    where?: VaultItemWhereInput
    /**
     * Limit how many VaultItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VaultItem upsert
   */
  export type VaultItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * The filter to search for the VaultItem to update in case it exists.
     */
    where: VaultItemWhereUniqueInput
    /**
     * In case the VaultItem found by the `where` argument doesn't exist, create a new VaultItem with this data.
     */
    create: XOR<VaultItemCreateInput, VaultItemUncheckedCreateInput>
    /**
     * In case the VaultItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaultItemUpdateInput, VaultItemUncheckedUpdateInput>
  }

  /**
   * VaultItem delete
   */
  export type VaultItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter which VaultItem to delete.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem deleteMany
   */
  export type VaultItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VaultItems to delete
     */
    where?: VaultItemWhereInput
    /**
     * Limit how many VaultItems to delete.
     */
    limit?: number
  }

  /**
   * VaultItem without action
   */
  export type VaultItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    userId: number | null
    targetAmount: number | null
    assignedVault: number | null
  }

  export type GoalSumAggregateOutputType = {
    userId: number | null
    targetAmount: number | null
    assignedVault: number | null
  }

  export type GoalMinAggregateOutputType = {
    userId: number | null
    name: string | null
    targetAmount: number | null
    deadline: Date | null
    progress: $Enums.GoalProgress | null
    assignedVault: number | null
    completed: boolean | null
  }

  export type GoalMaxAggregateOutputType = {
    userId: number | null
    name: string | null
    targetAmount: number | null
    deadline: Date | null
    progress: $Enums.GoalProgress | null
    assignedVault: number | null
    completed: boolean | null
  }

  export type GoalCountAggregateOutputType = {
    userId: number
    name: number
    targetAmount: number
    deadline: number
    progress: number
    assignedVault: number
    completed: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    userId?: true
    targetAmount?: true
    assignedVault?: true
  }

  export type GoalSumAggregateInputType = {
    userId?: true
    targetAmount?: true
    assignedVault?: true
  }

  export type GoalMinAggregateInputType = {
    userId?: true
    name?: true
    targetAmount?: true
    deadline?: true
    progress?: true
    assignedVault?: true
    completed?: true
  }

  export type GoalMaxAggregateInputType = {
    userId?: true
    name?: true
    targetAmount?: true
    deadline?: true
    progress?: true
    assignedVault?: true
    completed?: true
  }

  export type GoalCountAggregateInputType = {
    userId?: true
    name?: true
    targetAmount?: true
    deadline?: true
    progress?: true
    assignedVault?: true
    completed?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    userId: number
    name: string
    targetAmount: number
    deadline: Date | null
    progress: $Enums.GoalProgress
    assignedVault: number | null
    completed: boolean
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    targetAmount?: boolean
    deadline?: boolean
    progress?: boolean
    assignedVault?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    targetAmount?: boolean
    deadline?: boolean
    progress?: boolean
    assignedVault?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    targetAmount?: boolean
    deadline?: boolean
    progress?: boolean
    assignedVault?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    userId?: boolean
    name?: boolean
    targetAmount?: boolean
    deadline?: boolean
    progress?: boolean
    assignedVault?: boolean
    completed?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "name" | "targetAmount" | "deadline" | "progress" | "assignedVault" | "completed", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      name: string
      targetAmount: number
      deadline: Date | null
      progress: $Enums.GoalProgress
      assignedVault: number | null
      completed: boolean
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const goalWithUserIdOnly = await prisma.goal.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `userId`
     * const goalWithUserIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `userId`
     * const goalWithUserIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly userId: FieldRef<"Goal", 'Int'>
    readonly name: FieldRef<"Goal", 'String'>
    readonly targetAmount: FieldRef<"Goal", 'Int'>
    readonly deadline: FieldRef<"Goal", 'DateTime'>
    readonly progress: FieldRef<"Goal", 'GoalProgress'>
    readonly assignedVault: FieldRef<"Goal", 'Int'>
    readonly completed: FieldRef<"Goal", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Finance
   */

  export type AggregateFinance = {
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  export type FinanceAvgAggregateOutputType = {
    userId: number | null
    balance: number | null
    income: number | null
  }

  export type FinanceSumAggregateOutputType = {
    userId: number | null
    balance: number | null
    income: number | null
  }

  export type FinanceMinAggregateOutputType = {
    userId: number | null
    balance: number | null
    income: number | null
  }

  export type FinanceMaxAggregateOutputType = {
    userId: number | null
    balance: number | null
    income: number | null
  }

  export type FinanceCountAggregateOutputType = {
    userId: number
    balance: number
    income: number
    _all: number
  }


  export type FinanceAvgAggregateInputType = {
    userId?: true
    balance?: true
    income?: true
  }

  export type FinanceSumAggregateInputType = {
    userId?: true
    balance?: true
    income?: true
  }

  export type FinanceMinAggregateInputType = {
    userId?: true
    balance?: true
    income?: true
  }

  export type FinanceMaxAggregateInputType = {
    userId?: true
    balance?: true
    income?: true
  }

  export type FinanceCountAggregateInputType = {
    userId?: true
    balance?: true
    income?: true
    _all?: true
  }

  export type FinanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finance to aggregate.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Finances
    **/
    _count?: true | FinanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceMaxAggregateInputType
  }

  export type GetFinanceAggregateType<T extends FinanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFinance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance[P]>
      : GetScalarType<T[P], AggregateFinance[P]>
  }




  export type FinanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithAggregationInput | FinanceOrderByWithAggregationInput[]
    by: FinanceScalarFieldEnum[] | FinanceScalarFieldEnum
    having?: FinanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceCountAggregateInputType | true
    _avg?: FinanceAvgAggregateInputType
    _sum?: FinanceSumAggregateInputType
    _min?: FinanceMinAggregateInputType
    _max?: FinanceMaxAggregateInputType
  }

  export type FinanceGroupByOutputType = {
    userId: number
    balance: number
    income: number
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  type GetFinanceGroupByPayload<T extends FinanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceGroupByOutputType[P]>
        }
      >
    >


  export type FinanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    balance?: boolean
    income?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    balance?: boolean
    income?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    balance?: boolean
    income?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectScalar = {
    userId?: boolean
    balance?: boolean
    income?: boolean
  }

  export type FinanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "balance" | "income", ExtArgs["result"]["finance"]>
  export type FinanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      balance: number
      income: number
    }, ExtArgs["result"]["finance"]>
    composites: {}
  }

  type FinanceGetPayload<S extends boolean | null | undefined | FinanceDefaultArgs> = $Result.GetResult<Prisma.$FinancePayload, S>

  type FinanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceCountAggregateInputType | true
    }

  export interface FinanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finance'], meta: { name: 'Finance' } }
    /**
     * Find zero or one Finance that matches the filter.
     * @param {FinanceFindUniqueArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceFindUniqueArgs>(args: SelectSubset<T, FinanceFindUniqueArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Finance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceFindUniqueOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceFindFirstArgs>(args?: SelectSubset<T, FinanceFindFirstArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Finances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finances
     * const finances = await prisma.finance.findMany()
     * 
     * // Get first 10 Finances
     * const finances = await prisma.finance.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const financeWithUserIdOnly = await prisma.finance.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends FinanceFindManyArgs>(args?: SelectSubset<T, FinanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Finance.
     * @param {FinanceCreateArgs} args - Arguments to create a Finance.
     * @example
     * // Create one Finance
     * const Finance = await prisma.finance.create({
     *   data: {
     *     // ... data to create a Finance
     *   }
     * })
     * 
     */
    create<T extends FinanceCreateArgs>(args: SelectSubset<T, FinanceCreateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Finances.
     * @param {FinanceCreateManyArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceCreateManyArgs>(args?: SelectSubset<T, FinanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Finances and returns the data saved in the database.
     * @param {FinanceCreateManyAndReturnArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Finances and only return the `userId`
     * const financeWithUserIdOnly = await prisma.finance.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Finance.
     * @param {FinanceDeleteArgs} args - Arguments to delete one Finance.
     * @example
     * // Delete one Finance
     * const Finance = await prisma.finance.delete({
     *   where: {
     *     // ... filter to delete one Finance
     *   }
     * })
     * 
     */
    delete<T extends FinanceDeleteArgs>(args: SelectSubset<T, FinanceDeleteArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Finance.
     * @param {FinanceUpdateArgs} args - Arguments to update one Finance.
     * @example
     * // Update one Finance
     * const finance = await prisma.finance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceUpdateArgs>(args: SelectSubset<T, FinanceUpdateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Finances.
     * @param {FinanceDeleteManyArgs} args - Arguments to filter Finances to delete.
     * @example
     * // Delete a few Finances
     * const { count } = await prisma.finance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceDeleteManyArgs>(args?: SelectSubset<T, FinanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceUpdateManyArgs>(args: SelectSubset<T, FinanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances and returns the data updated in the database.
     * @param {FinanceUpdateManyAndReturnArgs} args - Arguments to update many Finances.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Finances and only return the `userId`
     * const financeWithUserIdOnly = await prisma.finance.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinanceUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Finance.
     * @param {FinanceUpsertArgs} args - Arguments to update or create a Finance.
     * @example
     * // Update or create a Finance
     * const finance = await prisma.finance.upsert({
     *   create: {
     *     // ... data to create a Finance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance we want to update
     *   }
     * })
     */
    upsert<T extends FinanceUpsertArgs>(args: SelectSubset<T, FinanceUpsertArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceCountArgs} args - Arguments to filter Finances to count.
     * @example
     * // Count the number of Finances
     * const count = await prisma.finance.count({
     *   where: {
     *     // ... the filter for the Finances we want to count
     *   }
     * })
    **/
    count<T extends FinanceCountArgs>(
      args?: Subset<T, FinanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceAggregateArgs>(args: Subset<T, FinanceAggregateArgs>): Prisma.PrismaPromise<GetFinanceAggregateType<T>>

    /**
     * Group by Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceGroupByArgs['orderBy'] }
        : { orderBy?: FinanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finance model
   */
  readonly fields: FinanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Finance model
   */
  interface FinanceFieldRefs {
    readonly userId: FieldRef<"Finance", 'Int'>
    readonly balance: FieldRef<"Finance", 'Int'>
    readonly income: FieldRef<"Finance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Finance findUnique
   */
  export type FinanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findUniqueOrThrow
   */
  export type FinanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findFirst
   */
  export type FinanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findFirstOrThrow
   */
  export type FinanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findMany
   */
  export type FinanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finances to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance create
   */
  export type FinanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Finance.
     */
    data: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
  }

  /**
   * Finance createMany
   */
  export type FinanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Finance createManyAndReturn
   */
  export type FinanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finance update
   */
  export type FinanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Finance.
     */
    data: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
    /**
     * Choose, which Finance to update.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance updateMany
   */
  export type FinanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to update.
     */
    limit?: number
  }

  /**
   * Finance updateManyAndReturn
   */
  export type FinanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finance upsert
   */
  export type FinanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Finance to update in case it exists.
     */
    where: FinanceWhereUniqueInput
    /**
     * In case the Finance found by the `where` argument doesn't exist, create a new Finance with this data.
     */
    create: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
    /**
     * In case the Finance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
  }

  /**
   * Finance delete
   */
  export type FinanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter which Finance to delete.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance deleteMany
   */
  export type FinanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finances to delete
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to delete.
     */
    limit?: number
  }

  /**
   * Finance without action
   */
  export type FinanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
  }


  /**
   * Model Stats
   */

  export type AggregateStats = {
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  export type StatsAvgAggregateOutputType = {
    userId: number | null
    completedGoals: number | null
    totalGoals: number | null
    failedGoals: number | null
  }

  export type StatsSumAggregateOutputType = {
    userId: number | null
    completedGoals: number | null
    totalGoals: number | null
    failedGoals: number | null
  }

  export type StatsMinAggregateOutputType = {
    userId: number | null
    completedGoals: number | null
    totalGoals: number | null
    failedGoals: number | null
  }

  export type StatsMaxAggregateOutputType = {
    userId: number | null
    completedGoals: number | null
    totalGoals: number | null
    failedGoals: number | null
  }

  export type StatsCountAggregateOutputType = {
    userId: number
    completedGoals: number
    totalGoals: number
    failedGoals: number
    _all: number
  }


  export type StatsAvgAggregateInputType = {
    userId?: true
    completedGoals?: true
    totalGoals?: true
    failedGoals?: true
  }

  export type StatsSumAggregateInputType = {
    userId?: true
    completedGoals?: true
    totalGoals?: true
    failedGoals?: true
  }

  export type StatsMinAggregateInputType = {
    userId?: true
    completedGoals?: true
    totalGoals?: true
    failedGoals?: true
  }

  export type StatsMaxAggregateInputType = {
    userId?: true
    completedGoals?: true
    totalGoals?: true
    failedGoals?: true
  }

  export type StatsCountAggregateInputType = {
    userId?: true
    completedGoals?: true
    totalGoals?: true
    failedGoals?: true
    _all?: true
  }

  export type StatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to aggregate.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stats
    **/
    _count?: true | StatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatsMaxAggregateInputType
  }

  export type GetStatsAggregateType<T extends StatsAggregateArgs> = {
        [P in keyof T & keyof AggregateStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStats[P]>
      : GetScalarType<T[P], AggregateStats[P]>
  }




  export type StatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatsWhereInput
    orderBy?: StatsOrderByWithAggregationInput | StatsOrderByWithAggregationInput[]
    by: StatsScalarFieldEnum[] | StatsScalarFieldEnum
    having?: StatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatsCountAggregateInputType | true
    _avg?: StatsAvgAggregateInputType
    _sum?: StatsSumAggregateInputType
    _min?: StatsMinAggregateInputType
    _max?: StatsMaxAggregateInputType
  }

  export type StatsGroupByOutputType = {
    userId: number
    completedGoals: number
    totalGoals: number
    failedGoals: number
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  type GetStatsGroupByPayload<T extends StatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatsGroupByOutputType[P]>
            : GetScalarType<T[P], StatsGroupByOutputType[P]>
        }
      >
    >


  export type StatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    completedGoals?: boolean
    totalGoals?: boolean
    failedGoals?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    completedGoals?: boolean
    totalGoals?: boolean
    failedGoals?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    completedGoals?: boolean
    totalGoals?: boolean
    failedGoals?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectScalar = {
    userId?: boolean
    completedGoals?: boolean
    totalGoals?: boolean
    failedGoals?: boolean
  }

  export type StatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "completedGoals" | "totalGoals" | "failedGoals", ExtArgs["result"]["stats"]>
  export type StatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      completedGoals: number
      totalGoals: number
      failedGoals: number
    }, ExtArgs["result"]["stats"]>
    composites: {}
  }

  type StatsGetPayload<S extends boolean | null | undefined | StatsDefaultArgs> = $Result.GetResult<Prisma.$StatsPayload, S>

  type StatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatsCountAggregateInputType | true
    }

  export interface StatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stats'], meta: { name: 'Stats' } }
    /**
     * Find zero or one Stats that matches the filter.
     * @param {StatsFindUniqueArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatsFindUniqueArgs>(args: SelectSubset<T, StatsFindUniqueArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatsFindUniqueOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatsFindUniqueOrThrowArgs>(args: SelectSubset<T, StatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatsFindFirstArgs>(args?: SelectSubset<T, StatsFindFirstArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatsFindFirstOrThrowArgs>(args?: SelectSubset<T, StatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stats.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stats.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const statsWithUserIdOnly = await prisma.stats.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends StatsFindManyArgs>(args?: SelectSubset<T, StatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stats.
     * @param {StatsCreateArgs} args - Arguments to create a Stats.
     * @example
     * // Create one Stats
     * const Stats = await prisma.stats.create({
     *   data: {
     *     // ... data to create a Stats
     *   }
     * })
     * 
     */
    create<T extends StatsCreateArgs>(args: SelectSubset<T, StatsCreateArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stats.
     * @param {StatsCreateManyArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatsCreateManyArgs>(args?: SelectSubset<T, StatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stats and returns the data saved in the database.
     * @param {StatsCreateManyAndReturnArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stats and only return the `userId`
     * const statsWithUserIdOnly = await prisma.stats.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatsCreateManyAndReturnArgs>(args?: SelectSubset<T, StatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stats.
     * @param {StatsDeleteArgs} args - Arguments to delete one Stats.
     * @example
     * // Delete one Stats
     * const Stats = await prisma.stats.delete({
     *   where: {
     *     // ... filter to delete one Stats
     *   }
     * })
     * 
     */
    delete<T extends StatsDeleteArgs>(args: SelectSubset<T, StatsDeleteArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stats.
     * @param {StatsUpdateArgs} args - Arguments to update one Stats.
     * @example
     * // Update one Stats
     * const stats = await prisma.stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatsUpdateArgs>(args: SelectSubset<T, StatsUpdateArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stats.
     * @param {StatsDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatsDeleteManyArgs>(args?: SelectSubset<T, StatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatsUpdateManyArgs>(args: SelectSubset<T, StatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats and returns the data updated in the database.
     * @param {StatsUpdateManyAndReturnArgs} args - Arguments to update many Stats.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stats and only return the `userId`
     * const statsWithUserIdOnly = await prisma.stats.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatsUpdateManyAndReturnArgs>(args: SelectSubset<T, StatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stats.
     * @param {StatsUpsertArgs} args - Arguments to update or create a Stats.
     * @example
     * // Update or create a Stats
     * const stats = await prisma.stats.upsert({
     *   create: {
     *     // ... data to create a Stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stats we want to update
     *   }
     * })
     */
    upsert<T extends StatsUpsertArgs>(args: SelectSubset<T, StatsUpsertArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stats.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends StatsCountArgs>(
      args?: Subset<T, StatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatsAggregateArgs>(args: Subset<T, StatsAggregateArgs>): Prisma.PrismaPromise<GetStatsAggregateType<T>>

    /**
     * Group by Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatsGroupByArgs['orderBy'] }
        : { orderBy?: StatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stats model
   */
  readonly fields: StatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stats model
   */
  interface StatsFieldRefs {
    readonly userId: FieldRef<"Stats", 'Int'>
    readonly completedGoals: FieldRef<"Stats", 'Int'>
    readonly totalGoals: FieldRef<"Stats", 'Int'>
    readonly failedGoals: FieldRef<"Stats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Stats findUnique
   */
  export type StatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats findUniqueOrThrow
   */
  export type StatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats findFirst
   */
  export type StatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats findFirstOrThrow
   */
  export type StatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats findMany
   */
  export type StatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats create
   */
  export type StatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The data needed to create a Stats.
     */
    data: XOR<StatsCreateInput, StatsUncheckedCreateInput>
  }

  /**
   * Stats createMany
   */
  export type StatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stats createManyAndReturn
   */
  export type StatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stats update
   */
  export type StatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The data needed to update a Stats.
     */
    data: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
    /**
     * Choose, which Stats to update.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats updateMany
   */
  export type StatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
  }

  /**
   * Stats updateManyAndReturn
   */
  export type StatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stats upsert
   */
  export type StatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The filter to search for the Stats to update in case it exists.
     */
    where: StatsWhereUniqueInput
    /**
     * In case the Stats found by the `where` argument doesn't exist, create a new Stats with this data.
     */
    create: XOR<StatsCreateInput, StatsUncheckedCreateInput>
    /**
     * In case the Stats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
  }

  /**
   * Stats delete
   */
  export type StatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter which Stats to delete.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats deleteMany
   */
  export type StatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to delete
     */
    where?: StatsWhereInput
    /**
     * Limit how many Stats to delete.
     */
    limit?: number
  }

  /**
   * Stats without action
   */
  export type StatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stats
     */
    omit?: StatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    date: 'date',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    limit: 'limit',
    userId: 'userId'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const VaultScalarFieldEnum: {
    id: 'id',
    name: 'name',
    targetPrice: 'targetPrice',
    icon: 'icon',
    userId: 'userId'
  };

  export type VaultScalarFieldEnum = (typeof VaultScalarFieldEnum)[keyof typeof VaultScalarFieldEnum]


  export const VaultItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    vaultId: 'vaultId',
    userId: 'userId'
  };

  export type VaultItemScalarFieldEnum = (typeof VaultItemScalarFieldEnum)[keyof typeof VaultItemScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    userId: 'userId',
    name: 'name',
    targetAmount: 'targetAmount',
    deadline: 'deadline',
    progress: 'progress',
    assignedVault: 'assignedVault',
    completed: 'completed'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const FinanceScalarFieldEnum: {
    userId: 'userId',
    balance: 'balance',
    income: 'income'
  };

  export type FinanceScalarFieldEnum = (typeof FinanceScalarFieldEnum)[keyof typeof FinanceScalarFieldEnum]


  export const StatsScalarFieldEnum: {
    userId: 'userId',
    completedGoals: 'completedGoals',
    totalGoals: 'totalGoals',
    failedGoals: 'failedGoals'
  };

  export type StatsScalarFieldEnum = (typeof StatsScalarFieldEnum)[keyof typeof StatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VaultIcons'
   */
  export type EnumVaultIconsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VaultIcons'>
    


  /**
   * Reference to a field of type 'VaultIcons[]'
   */
  export type ListEnumVaultIconsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VaultIcons[]'>
    


  /**
   * Reference to a field of type 'GoalProgress'
   */
  export type EnumGoalProgressFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalProgress'>
    


  /**
   * Reference to a field of type 'GoalProgress[]'
   */
  export type ListEnumGoalProgressFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalProgress[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    budgets?: BudgetListRelationFilter
    finance?: XOR<FinanceNullableScalarRelationFilter, FinanceWhereInput> | null
    goals?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    stats?: XOR<StatsNullableScalarRelationFilter, StatsWhereInput> | null
    transactions?: TransactionListRelationFilter
    vaults?: VaultListRelationFilter
    vaultItems?: VaultItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    budgets?: BudgetOrderByRelationAggregateInput
    finance?: FinanceOrderByWithRelationInput
    goals?: GoalOrderByWithRelationInput
    stats?: StatsOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    vaults?: VaultOrderByRelationAggregateInput
    vaultItems?: VaultItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    budgets?: BudgetListRelationFilter
    finance?: XOR<FinanceNullableScalarRelationFilter, FinanceWhereInput> | null
    goals?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
    stats?: XOR<StatsNullableScalarRelationFilter, StatsWhereInput> | null
    transactions?: TransactionListRelationFilter
    vaults?: VaultListRelationFilter
    vaultItems?: VaultItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    name?: StringFilter<"Transaction"> | string
    value?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
    category?: XOR<BudgetScalarRelationFilter, BudgetWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    category?: BudgetOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    name?: StringFilter<"Transaction"> | string
    value?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
    category?: XOR<BudgetScalarRelationFilter, BudgetWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    name?: StringWithAggregatesFilter<"Transaction"> | string
    value?: IntWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    categoryId?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: IntFilter<"Budget"> | number
    name?: StringFilter<"Budget"> | string
    color?: StringFilter<"Budget"> | string
    limit?: IntFilter<"Budget"> | number
    userId?: IntFilter<"Budget"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    limit?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    name?: StringFilter<"Budget"> | string
    color?: StringFilter<"Budget"> | string
    limit?: IntFilter<"Budget"> | number
    userId?: IntFilter<"Budget"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    limit?: SortOrder
    userId?: SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Budget"> | number
    name?: StringWithAggregatesFilter<"Budget"> | string
    color?: StringWithAggregatesFilter<"Budget"> | string
    limit?: IntWithAggregatesFilter<"Budget"> | number
    userId?: IntWithAggregatesFilter<"Budget"> | number
  }

  export type VaultWhereInput = {
    AND?: VaultWhereInput | VaultWhereInput[]
    OR?: VaultWhereInput[]
    NOT?: VaultWhereInput | VaultWhereInput[]
    id?: IntFilter<"Vault"> | number
    name?: StringFilter<"Vault"> | string
    targetPrice?: IntFilter<"Vault"> | number
    icon?: EnumVaultIconsFilter<"Vault"> | $Enums.VaultIcons
    userId?: IntFilter<"Vault"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: VaultItemListRelationFilter
  }

  export type VaultOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    targetPrice?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: VaultItemOrderByRelationAggregateInput
  }

  export type VaultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VaultWhereInput | VaultWhereInput[]
    OR?: VaultWhereInput[]
    NOT?: VaultWhereInput | VaultWhereInput[]
    name?: StringFilter<"Vault"> | string
    targetPrice?: IntFilter<"Vault"> | number
    icon?: EnumVaultIconsFilter<"Vault"> | $Enums.VaultIcons
    userId?: IntFilter<"Vault"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: VaultItemListRelationFilter
  }, "id">

  export type VaultOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    targetPrice?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    _count?: VaultCountOrderByAggregateInput
    _avg?: VaultAvgOrderByAggregateInput
    _max?: VaultMaxOrderByAggregateInput
    _min?: VaultMinOrderByAggregateInput
    _sum?: VaultSumOrderByAggregateInput
  }

  export type VaultScalarWhereWithAggregatesInput = {
    AND?: VaultScalarWhereWithAggregatesInput | VaultScalarWhereWithAggregatesInput[]
    OR?: VaultScalarWhereWithAggregatesInput[]
    NOT?: VaultScalarWhereWithAggregatesInput | VaultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vault"> | number
    name?: StringWithAggregatesFilter<"Vault"> | string
    targetPrice?: IntWithAggregatesFilter<"Vault"> | number
    icon?: EnumVaultIconsWithAggregatesFilter<"Vault"> | $Enums.VaultIcons
    userId?: IntWithAggregatesFilter<"Vault"> | number
  }

  export type VaultItemWhereInput = {
    AND?: VaultItemWhereInput | VaultItemWhereInput[]
    OR?: VaultItemWhereInput[]
    NOT?: VaultItemWhereInput | VaultItemWhereInput[]
    id?: IntFilter<"VaultItem"> | number
    name?: StringFilter<"VaultItem"> | string
    value?: IntFilter<"VaultItem"> | number
    vaultId?: IntFilter<"VaultItem"> | number
    userId?: IntFilter<"VaultItem"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vault?: XOR<VaultScalarRelationFilter, VaultWhereInput>
  }

  export type VaultItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    vaultId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    vault?: VaultOrderByWithRelationInput
  }

  export type VaultItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VaultItemWhereInput | VaultItemWhereInput[]
    OR?: VaultItemWhereInput[]
    NOT?: VaultItemWhereInput | VaultItemWhereInput[]
    name?: StringFilter<"VaultItem"> | string
    value?: IntFilter<"VaultItem"> | number
    vaultId?: IntFilter<"VaultItem"> | number
    userId?: IntFilter<"VaultItem"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vault?: XOR<VaultScalarRelationFilter, VaultWhereInput>
  }, "id">

  export type VaultItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    vaultId?: SortOrder
    userId?: SortOrder
    _count?: VaultItemCountOrderByAggregateInput
    _avg?: VaultItemAvgOrderByAggregateInput
    _max?: VaultItemMaxOrderByAggregateInput
    _min?: VaultItemMinOrderByAggregateInput
    _sum?: VaultItemSumOrderByAggregateInput
  }

  export type VaultItemScalarWhereWithAggregatesInput = {
    AND?: VaultItemScalarWhereWithAggregatesInput | VaultItemScalarWhereWithAggregatesInput[]
    OR?: VaultItemScalarWhereWithAggregatesInput[]
    NOT?: VaultItemScalarWhereWithAggregatesInput | VaultItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VaultItem"> | number
    name?: StringWithAggregatesFilter<"VaultItem"> | string
    value?: IntWithAggregatesFilter<"VaultItem"> | number
    vaultId?: IntWithAggregatesFilter<"VaultItem"> | number
    userId?: IntWithAggregatesFilter<"VaultItem"> | number
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    userId?: IntFilter<"Goal"> | number
    name?: StringFilter<"Goal"> | string
    targetAmount?: IntFilter<"Goal"> | number
    deadline?: DateTimeNullableFilter<"Goal"> | Date | string | null
    progress?: EnumGoalProgressFilter<"Goal"> | $Enums.GoalProgress
    assignedVault?: IntNullableFilter<"Goal"> | number | null
    completed?: BoolFilter<"Goal"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    deadline?: SortOrderInput | SortOrder
    progress?: SortOrder
    assignedVault?: SortOrderInput | SortOrder
    completed?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    name?: StringFilter<"Goal"> | string
    targetAmount?: IntFilter<"Goal"> | number
    deadline?: DateTimeNullableFilter<"Goal"> | Date | string | null
    progress?: EnumGoalProgressFilter<"Goal"> | $Enums.GoalProgress
    assignedVault?: IntNullableFilter<"Goal"> | number | null
    completed?: BoolFilter<"Goal"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type GoalOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    deadline?: SortOrderInput | SortOrder
    progress?: SortOrder
    assignedVault?: SortOrderInput | SortOrder
    completed?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Goal"> | number
    name?: StringWithAggregatesFilter<"Goal"> | string
    targetAmount?: IntWithAggregatesFilter<"Goal"> | number
    deadline?: DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null
    progress?: EnumGoalProgressWithAggregatesFilter<"Goal"> | $Enums.GoalProgress
    assignedVault?: IntNullableWithAggregatesFilter<"Goal"> | number | null
    completed?: BoolWithAggregatesFilter<"Goal"> | boolean
  }

  export type FinanceWhereInput = {
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    userId?: IntFilter<"Finance"> | number
    balance?: IntFilter<"Finance"> | number
    income?: IntFilter<"Finance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FinanceOrderByWithRelationInput = {
    userId?: SortOrder
    balance?: SortOrder
    income?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FinanceWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    balance?: IntFilter<"Finance"> | number
    income?: IntFilter<"Finance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type FinanceOrderByWithAggregationInput = {
    userId?: SortOrder
    balance?: SortOrder
    income?: SortOrder
    _count?: FinanceCountOrderByAggregateInput
    _avg?: FinanceAvgOrderByAggregateInput
    _max?: FinanceMaxOrderByAggregateInput
    _min?: FinanceMinOrderByAggregateInput
    _sum?: FinanceSumOrderByAggregateInput
  }

  export type FinanceScalarWhereWithAggregatesInput = {
    AND?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    OR?: FinanceScalarWhereWithAggregatesInput[]
    NOT?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Finance"> | number
    balance?: IntWithAggregatesFilter<"Finance"> | number
    income?: IntWithAggregatesFilter<"Finance"> | number
  }

  export type StatsWhereInput = {
    AND?: StatsWhereInput | StatsWhereInput[]
    OR?: StatsWhereInput[]
    NOT?: StatsWhereInput | StatsWhereInput[]
    userId?: IntFilter<"Stats"> | number
    completedGoals?: IntFilter<"Stats"> | number
    totalGoals?: IntFilter<"Stats"> | number
    failedGoals?: IntFilter<"Stats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StatsOrderByWithRelationInput = {
    userId?: SortOrder
    completedGoals?: SortOrder
    totalGoals?: SortOrder
    failedGoals?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StatsWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: StatsWhereInput | StatsWhereInput[]
    OR?: StatsWhereInput[]
    NOT?: StatsWhereInput | StatsWhereInput[]
    completedGoals?: IntFilter<"Stats"> | number
    totalGoals?: IntFilter<"Stats"> | number
    failedGoals?: IntFilter<"Stats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type StatsOrderByWithAggregationInput = {
    userId?: SortOrder
    completedGoals?: SortOrder
    totalGoals?: SortOrder
    failedGoals?: SortOrder
    _count?: StatsCountOrderByAggregateInput
    _avg?: StatsAvgOrderByAggregateInput
    _max?: StatsMaxOrderByAggregateInput
    _min?: StatsMinOrderByAggregateInput
    _sum?: StatsSumOrderByAggregateInput
  }

  export type StatsScalarWhereWithAggregatesInput = {
    AND?: StatsScalarWhereWithAggregatesInput | StatsScalarWhereWithAggregatesInput[]
    OR?: StatsScalarWhereWithAggregatesInput[]
    NOT?: StatsScalarWhereWithAggregatesInput | StatsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Stats"> | number
    completedGoals?: IntWithAggregatesFilter<"Stats"> | number
    totalGoals?: IntWithAggregatesFilter<"Stats"> | number
    failedGoals?: IntWithAggregatesFilter<"Stats"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    budgets?: BudgetCreateNestedManyWithoutUserInput
    finance?: FinanceCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedOneWithoutUserInput
    stats?: StatsCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vaults?: VaultCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    finance?: FinanceUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedOneWithoutUserInput
    stats?: StatsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vaults?: VaultUncheckedCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    finance?: FinanceUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateOneWithoutUserNestedInput
    stats?: StatsUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vaults?: VaultUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateOneWithoutUserNestedInput
    stats?: StatsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vaults?: VaultUncheckedUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    name: string
    value: number
    date: Date | string
    category: BudgetCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    name: string
    value: number
    date: Date | string
    userId: number
    categoryId: number
  }

  export type TransactionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BudgetUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInput = {
    id?: number
    name: string
    value: number
    date: Date | string
    userId: number
    categoryId: number
  }

  export type TransactionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type BudgetCreateInput = {
    name: string
    color: string
    limit: number
    user: UserCreateNestedOneWithoutBudgetsInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: number
    name: string
    color: string
    limit: number
    userId: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BudgetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BudgetCreateManyInput = {
    id?: number
    name: string
    color: string
    limit: number
    userId: number
  }

  export type BudgetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VaultCreateInput = {
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
    user: UserCreateNestedOneWithoutVaultsInput
    items?: VaultItemCreateNestedManyWithoutVaultInput
  }

  export type VaultUncheckedCreateInput = {
    id?: number
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
    userId: number
    items?: VaultItemUncheckedCreateNestedManyWithoutVaultInput
  }

  export type VaultUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
    user?: UserUpdateOneRequiredWithoutVaultsNestedInput
    items?: VaultItemUpdateManyWithoutVaultNestedInput
  }

  export type VaultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
    userId?: IntFieldUpdateOperationsInput | number
    items?: VaultItemUncheckedUpdateManyWithoutVaultNestedInput
  }

  export type VaultCreateManyInput = {
    id?: number
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
    userId: number
  }

  export type VaultUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
  }

  export type VaultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VaultItemCreateInput = {
    name: string
    value: number
    user: UserCreateNestedOneWithoutVaultItemsInput
    vault: VaultCreateNestedOneWithoutItemsInput
  }

  export type VaultItemUncheckedCreateInput = {
    id?: number
    name: string
    value: number
    vaultId: number
    userId: number
  }

  export type VaultItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutVaultItemsNestedInput
    vault?: VaultUpdateOneRequiredWithoutItemsNestedInput
  }

  export type VaultItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    vaultId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VaultItemCreateManyInput = {
    id?: number
    name: string
    value: number
    vaultId: number
    userId: number
  }

  export type VaultItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type VaultItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    vaultId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GoalCreateInput = {
    name: string
    targetAmount: number
    deadline?: Date | string | null
    progress: $Enums.GoalProgress
    assignedVault?: number | null
    completed?: boolean
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    userId: number
    name: string
    targetAmount: number
    deadline?: Date | string | null
    progress: $Enums.GoalProgress
    assignedVault?: number | null
    completed?: boolean
  }

  export type GoalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: EnumGoalProgressFieldUpdateOperationsInput | $Enums.GoalProgress
    assignedVault?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: EnumGoalProgressFieldUpdateOperationsInput | $Enums.GoalProgress
    assignedVault?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GoalCreateManyInput = {
    userId: number
    name: string
    targetAmount: number
    deadline?: Date | string | null
    progress: $Enums.GoalProgress
    assignedVault?: number | null
    completed?: boolean
  }

  export type GoalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: EnumGoalProgressFieldUpdateOperationsInput | $Enums.GoalProgress
    assignedVault?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GoalUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: EnumGoalProgressFieldUpdateOperationsInput | $Enums.GoalProgress
    assignedVault?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FinanceCreateInput = {
    balance?: number
    income?: number
    user: UserCreateNestedOneWithoutFinanceInput
  }

  export type FinanceUncheckedCreateInput = {
    userId: number
    balance?: number
    income?: number
  }

  export type FinanceUpdateInput = {
    balance?: IntFieldUpdateOperationsInput | number
    income?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutFinanceNestedInput
  }

  export type FinanceUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    income?: IntFieldUpdateOperationsInput | number
  }

  export type FinanceCreateManyInput = {
    userId: number
    balance?: number
    income?: number
  }

  export type FinanceUpdateManyMutationInput = {
    balance?: IntFieldUpdateOperationsInput | number
    income?: IntFieldUpdateOperationsInput | number
  }

  export type FinanceUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    income?: IntFieldUpdateOperationsInput | number
  }

  export type StatsCreateInput = {
    completedGoals?: number
    totalGoals?: number
    failedGoals?: number
    user: UserCreateNestedOneWithoutStatsInput
  }

  export type StatsUncheckedCreateInput = {
    userId: number
    completedGoals?: number
    totalGoals?: number
    failedGoals?: number
  }

  export type StatsUpdateInput = {
    completedGoals?: IntFieldUpdateOperationsInput | number
    totalGoals?: IntFieldUpdateOperationsInput | number
    failedGoals?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStatsNestedInput
  }

  export type StatsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    completedGoals?: IntFieldUpdateOperationsInput | number
    totalGoals?: IntFieldUpdateOperationsInput | number
    failedGoals?: IntFieldUpdateOperationsInput | number
  }

  export type StatsCreateManyInput = {
    userId: number
    completedGoals?: number
    totalGoals?: number
    failedGoals?: number
  }

  export type StatsUpdateManyMutationInput = {
    completedGoals?: IntFieldUpdateOperationsInput | number
    totalGoals?: IntFieldUpdateOperationsInput | number
    failedGoals?: IntFieldUpdateOperationsInput | number
  }

  export type StatsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    completedGoals?: IntFieldUpdateOperationsInput | number
    totalGoals?: IntFieldUpdateOperationsInput | number
    failedGoals?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type FinanceNullableScalarRelationFilter = {
    is?: FinanceWhereInput | null
    isNot?: FinanceWhereInput | null
  }

  export type GoalNullableScalarRelationFilter = {
    is?: GoalWhereInput | null
    isNot?: GoalWhereInput | null
  }

  export type StatsNullableScalarRelationFilter = {
    is?: StatsWhereInput | null
    isNot?: StatsWhereInput | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type VaultListRelationFilter = {
    every?: VaultWhereInput
    some?: VaultWhereInput
    none?: VaultWhereInput
  }

  export type VaultItemListRelationFilter = {
    every?: VaultItemWhereInput
    some?: VaultItemWhereInput
    none?: VaultItemWhereInput
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VaultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VaultItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BudgetScalarRelationFilter = {
    is?: BudgetWhereInput
    isNot?: BudgetWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    limit?: SortOrder
    userId?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    id?: SortOrder
    limit?: SortOrder
    userId?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    limit?: SortOrder
    userId?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    limit?: SortOrder
    userId?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    id?: SortOrder
    limit?: SortOrder
    userId?: SortOrder
  }

  export type EnumVaultIconsFilter<$PrismaModel = never> = {
    equals?: $Enums.VaultIcons | EnumVaultIconsFieldRefInput<$PrismaModel>
    in?: $Enums.VaultIcons[] | ListEnumVaultIconsFieldRefInput<$PrismaModel>
    notIn?: $Enums.VaultIcons[] | ListEnumVaultIconsFieldRefInput<$PrismaModel>
    not?: NestedEnumVaultIconsFilter<$PrismaModel> | $Enums.VaultIcons
  }

  export type VaultCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetPrice?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type VaultAvgOrderByAggregateInput = {
    id?: SortOrder
    targetPrice?: SortOrder
    userId?: SortOrder
  }

  export type VaultMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetPrice?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type VaultMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetPrice?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type VaultSumOrderByAggregateInput = {
    id?: SortOrder
    targetPrice?: SortOrder
    userId?: SortOrder
  }

  export type EnumVaultIconsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VaultIcons | EnumVaultIconsFieldRefInput<$PrismaModel>
    in?: $Enums.VaultIcons[] | ListEnumVaultIconsFieldRefInput<$PrismaModel>
    notIn?: $Enums.VaultIcons[] | ListEnumVaultIconsFieldRefInput<$PrismaModel>
    not?: NestedEnumVaultIconsWithAggregatesFilter<$PrismaModel> | $Enums.VaultIcons
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVaultIconsFilter<$PrismaModel>
    _max?: NestedEnumVaultIconsFilter<$PrismaModel>
  }

  export type VaultScalarRelationFilter = {
    is?: VaultWhereInput
    isNot?: VaultWhereInput
  }

  export type VaultItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    vaultId?: SortOrder
    userId?: SortOrder
  }

  export type VaultItemAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    vaultId?: SortOrder
    userId?: SortOrder
  }

  export type VaultItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    vaultId?: SortOrder
    userId?: SortOrder
  }

  export type VaultItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    vaultId?: SortOrder
    userId?: SortOrder
  }

  export type VaultItemSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    vaultId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGoalProgressFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalProgress | EnumGoalProgressFieldRefInput<$PrismaModel>
    in?: $Enums.GoalProgress[] | ListEnumGoalProgressFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalProgress[] | ListEnumGoalProgressFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalProgressFilter<$PrismaModel> | $Enums.GoalProgress
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GoalCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    deadline?: SortOrder
    progress?: SortOrder
    assignedVault?: SortOrder
    completed?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    userId?: SortOrder
    targetAmount?: SortOrder
    assignedVault?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    deadline?: SortOrder
    progress?: SortOrder
    assignedVault?: SortOrder
    completed?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    deadline?: SortOrder
    progress?: SortOrder
    assignedVault?: SortOrder
    completed?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    userId?: SortOrder
    targetAmount?: SortOrder
    assignedVault?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGoalProgressWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalProgress | EnumGoalProgressFieldRefInput<$PrismaModel>
    in?: $Enums.GoalProgress[] | ListEnumGoalProgressFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalProgress[] | ListEnumGoalProgressFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalProgressWithAggregatesFilter<$PrismaModel> | $Enums.GoalProgress
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalProgressFilter<$PrismaModel>
    _max?: NestedEnumGoalProgressFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FinanceCountOrderByAggregateInput = {
    userId?: SortOrder
    balance?: SortOrder
    income?: SortOrder
  }

  export type FinanceAvgOrderByAggregateInput = {
    userId?: SortOrder
    balance?: SortOrder
    income?: SortOrder
  }

  export type FinanceMaxOrderByAggregateInput = {
    userId?: SortOrder
    balance?: SortOrder
    income?: SortOrder
  }

  export type FinanceMinOrderByAggregateInput = {
    userId?: SortOrder
    balance?: SortOrder
    income?: SortOrder
  }

  export type FinanceSumOrderByAggregateInput = {
    userId?: SortOrder
    balance?: SortOrder
    income?: SortOrder
  }

  export type StatsCountOrderByAggregateInput = {
    userId?: SortOrder
    completedGoals?: SortOrder
    totalGoals?: SortOrder
    failedGoals?: SortOrder
  }

  export type StatsAvgOrderByAggregateInput = {
    userId?: SortOrder
    completedGoals?: SortOrder
    totalGoals?: SortOrder
    failedGoals?: SortOrder
  }

  export type StatsMaxOrderByAggregateInput = {
    userId?: SortOrder
    completedGoals?: SortOrder
    totalGoals?: SortOrder
    failedGoals?: SortOrder
  }

  export type StatsMinOrderByAggregateInput = {
    userId?: SortOrder
    completedGoals?: SortOrder
    totalGoals?: SortOrder
    failedGoals?: SortOrder
  }

  export type StatsSumOrderByAggregateInput = {
    userId?: SortOrder
    completedGoals?: SortOrder
    totalGoals?: SortOrder
    failedGoals?: SortOrder
  }

  export type BudgetCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type FinanceCreateNestedOneWithoutUserInput = {
    create?: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: FinanceCreateOrConnectWithoutUserInput
    connect?: FinanceWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput
    connect?: GoalWhereUniqueInput
  }

  export type StatsCreateNestedOneWithoutUserInput = {
    create?: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatsCreateOrConnectWithoutUserInput
    connect?: StatsWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VaultCreateNestedManyWithoutUserInput = {
    create?: XOR<VaultCreateWithoutUserInput, VaultUncheckedCreateWithoutUserInput> | VaultCreateWithoutUserInput[] | VaultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultCreateOrConnectWithoutUserInput | VaultCreateOrConnectWithoutUserInput[]
    createMany?: VaultCreateManyUserInputEnvelope
    connect?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
  }

  export type VaultItemCreateNestedManyWithoutUserInput = {
    create?: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput> | VaultItemCreateWithoutUserInput[] | VaultItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutUserInput | VaultItemCreateOrConnectWithoutUserInput[]
    createMany?: VaultItemCreateManyUserInputEnvelope
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type FinanceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: FinanceCreateOrConnectWithoutUserInput
    connect?: FinanceWhereUniqueInput
  }

  export type GoalUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput
    connect?: GoalWhereUniqueInput
  }

  export type StatsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatsCreateOrConnectWithoutUserInput
    connect?: StatsWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VaultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VaultCreateWithoutUserInput, VaultUncheckedCreateWithoutUserInput> | VaultCreateWithoutUserInput[] | VaultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultCreateOrConnectWithoutUserInput | VaultCreateOrConnectWithoutUserInput[]
    createMany?: VaultCreateManyUserInputEnvelope
    connect?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
  }

  export type VaultItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput> | VaultItemCreateWithoutUserInput[] | VaultItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutUserInput | VaultItemCreateOrConnectWithoutUserInput[]
    createMany?: VaultItemCreateManyUserInputEnvelope
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BudgetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type FinanceUpdateOneWithoutUserNestedInput = {
    create?: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: FinanceCreateOrConnectWithoutUserInput
    upsert?: FinanceUpsertWithoutUserInput
    disconnect?: FinanceWhereInput | boolean
    delete?: FinanceWhereInput | boolean
    connect?: FinanceWhereUniqueInput
    update?: XOR<XOR<FinanceUpdateToOneWithWhereWithoutUserInput, FinanceUpdateWithoutUserInput>, FinanceUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateOneWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput
    upsert?: GoalUpsertWithoutUserInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutUserInput, GoalUpdateWithoutUserInput>, GoalUncheckedUpdateWithoutUserInput>
  }

  export type StatsUpdateOneWithoutUserNestedInput = {
    create?: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatsCreateOrConnectWithoutUserInput
    upsert?: StatsUpsertWithoutUserInput
    disconnect?: StatsWhereInput | boolean
    delete?: StatsWhereInput | boolean
    connect?: StatsWhereUniqueInput
    update?: XOR<XOR<StatsUpdateToOneWithWhereWithoutUserInput, StatsUpdateWithoutUserInput>, StatsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VaultUpdateManyWithoutUserNestedInput = {
    create?: XOR<VaultCreateWithoutUserInput, VaultUncheckedCreateWithoutUserInput> | VaultCreateWithoutUserInput[] | VaultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultCreateOrConnectWithoutUserInput | VaultCreateOrConnectWithoutUserInput[]
    upsert?: VaultUpsertWithWhereUniqueWithoutUserInput | VaultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VaultCreateManyUserInputEnvelope
    set?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
    disconnect?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
    delete?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
    connect?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
    update?: VaultUpdateWithWhereUniqueWithoutUserInput | VaultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VaultUpdateManyWithWhereWithoutUserInput | VaultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VaultScalarWhereInput | VaultScalarWhereInput[]
  }

  export type VaultItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput> | VaultItemCreateWithoutUserInput[] | VaultItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutUserInput | VaultItemCreateOrConnectWithoutUserInput[]
    upsert?: VaultItemUpsertWithWhereUniqueWithoutUserInput | VaultItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VaultItemCreateManyUserInputEnvelope
    set?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    disconnect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    delete?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    update?: VaultItemUpdateWithWhereUniqueWithoutUserInput | VaultItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VaultItemUpdateManyWithWhereWithoutUserInput | VaultItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BudgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type FinanceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: FinanceCreateOrConnectWithoutUserInput
    upsert?: FinanceUpsertWithoutUserInput
    disconnect?: FinanceWhereInput | boolean
    delete?: FinanceWhereInput | boolean
    connect?: FinanceWhereUniqueInput
    update?: XOR<XOR<FinanceUpdateToOneWithWhereWithoutUserInput, FinanceUpdateWithoutUserInput>, FinanceUncheckedUpdateWithoutUserInput>
  }

  export type GoalUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput
    upsert?: GoalUpsertWithoutUserInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutUserInput, GoalUpdateWithoutUserInput>, GoalUncheckedUpdateWithoutUserInput>
  }

  export type StatsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatsCreateOrConnectWithoutUserInput
    upsert?: StatsUpsertWithoutUserInput
    disconnect?: StatsWhereInput | boolean
    delete?: StatsWhereInput | boolean
    connect?: StatsWhereUniqueInput
    update?: XOR<XOR<StatsUpdateToOneWithWhereWithoutUserInput, StatsUpdateWithoutUserInput>, StatsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VaultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VaultCreateWithoutUserInput, VaultUncheckedCreateWithoutUserInput> | VaultCreateWithoutUserInput[] | VaultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultCreateOrConnectWithoutUserInput | VaultCreateOrConnectWithoutUserInput[]
    upsert?: VaultUpsertWithWhereUniqueWithoutUserInput | VaultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VaultCreateManyUserInputEnvelope
    set?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
    disconnect?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
    delete?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
    connect?: VaultWhereUniqueInput | VaultWhereUniqueInput[]
    update?: VaultUpdateWithWhereUniqueWithoutUserInput | VaultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VaultUpdateManyWithWhereWithoutUserInput | VaultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VaultScalarWhereInput | VaultScalarWhereInput[]
  }

  export type VaultItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput> | VaultItemCreateWithoutUserInput[] | VaultItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutUserInput | VaultItemCreateOrConnectWithoutUserInput[]
    upsert?: VaultItemUpsertWithWhereUniqueWithoutUserInput | VaultItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VaultItemCreateManyUserInputEnvelope
    set?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    disconnect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    delete?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    update?: VaultItemUpdateWithWhereUniqueWithoutUserInput | VaultItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VaultItemUpdateManyWithWhereWithoutUserInput | VaultItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
  }

  export type BudgetCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BudgetCreateWithoutTransactionsInput, BudgetUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BudgetCreateOrConnectWithoutTransactionsInput
    connect?: BudgetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BudgetUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<BudgetCreateWithoutTransactionsInput, BudgetUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BudgetCreateOrConnectWithoutTransactionsInput
    upsert?: BudgetUpsertWithoutTransactionsInput
    connect?: BudgetWhereUniqueInput
    update?: XOR<XOR<BudgetUpdateToOneWithWhereWithoutTransactionsInput, BudgetUpdateWithoutTransactionsInput>, BudgetUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    upsert?: UserUpsertWithoutBudgetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetsInput, UserUpdateWithoutBudgetsInput>, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVaultsInput = {
    create?: XOR<UserCreateWithoutVaultsInput, UserUncheckedCreateWithoutVaultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVaultsInput
    connect?: UserWhereUniqueInput
  }

  export type VaultItemCreateNestedManyWithoutVaultInput = {
    create?: XOR<VaultItemCreateWithoutVaultInput, VaultItemUncheckedCreateWithoutVaultInput> | VaultItemCreateWithoutVaultInput[] | VaultItemUncheckedCreateWithoutVaultInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutVaultInput | VaultItemCreateOrConnectWithoutVaultInput[]
    createMany?: VaultItemCreateManyVaultInputEnvelope
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
  }

  export type VaultItemUncheckedCreateNestedManyWithoutVaultInput = {
    create?: XOR<VaultItemCreateWithoutVaultInput, VaultItemUncheckedCreateWithoutVaultInput> | VaultItemCreateWithoutVaultInput[] | VaultItemUncheckedCreateWithoutVaultInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutVaultInput | VaultItemCreateOrConnectWithoutVaultInput[]
    createMany?: VaultItemCreateManyVaultInputEnvelope
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
  }

  export type EnumVaultIconsFieldUpdateOperationsInput = {
    set?: $Enums.VaultIcons
  }

  export type UserUpdateOneRequiredWithoutVaultsNestedInput = {
    create?: XOR<UserCreateWithoutVaultsInput, UserUncheckedCreateWithoutVaultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVaultsInput
    upsert?: UserUpsertWithoutVaultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVaultsInput, UserUpdateWithoutVaultsInput>, UserUncheckedUpdateWithoutVaultsInput>
  }

  export type VaultItemUpdateManyWithoutVaultNestedInput = {
    create?: XOR<VaultItemCreateWithoutVaultInput, VaultItemUncheckedCreateWithoutVaultInput> | VaultItemCreateWithoutVaultInput[] | VaultItemUncheckedCreateWithoutVaultInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutVaultInput | VaultItemCreateOrConnectWithoutVaultInput[]
    upsert?: VaultItemUpsertWithWhereUniqueWithoutVaultInput | VaultItemUpsertWithWhereUniqueWithoutVaultInput[]
    createMany?: VaultItemCreateManyVaultInputEnvelope
    set?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    disconnect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    delete?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    update?: VaultItemUpdateWithWhereUniqueWithoutVaultInput | VaultItemUpdateWithWhereUniqueWithoutVaultInput[]
    updateMany?: VaultItemUpdateManyWithWhereWithoutVaultInput | VaultItemUpdateManyWithWhereWithoutVaultInput[]
    deleteMany?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
  }

  export type VaultItemUncheckedUpdateManyWithoutVaultNestedInput = {
    create?: XOR<VaultItemCreateWithoutVaultInput, VaultItemUncheckedCreateWithoutVaultInput> | VaultItemCreateWithoutVaultInput[] | VaultItemUncheckedCreateWithoutVaultInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutVaultInput | VaultItemCreateOrConnectWithoutVaultInput[]
    upsert?: VaultItemUpsertWithWhereUniqueWithoutVaultInput | VaultItemUpsertWithWhereUniqueWithoutVaultInput[]
    createMany?: VaultItemCreateManyVaultInputEnvelope
    set?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    disconnect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    delete?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    update?: VaultItemUpdateWithWhereUniqueWithoutVaultInput | VaultItemUpdateWithWhereUniqueWithoutVaultInput[]
    updateMany?: VaultItemUpdateManyWithWhereWithoutVaultInput | VaultItemUpdateManyWithWhereWithoutVaultInput[]
    deleteMany?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVaultItemsInput = {
    create?: XOR<UserCreateWithoutVaultItemsInput, UserUncheckedCreateWithoutVaultItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVaultItemsInput
    connect?: UserWhereUniqueInput
  }

  export type VaultCreateNestedOneWithoutItemsInput = {
    create?: XOR<VaultCreateWithoutItemsInput, VaultUncheckedCreateWithoutItemsInput>
    connectOrCreate?: VaultCreateOrConnectWithoutItemsInput
    connect?: VaultWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVaultItemsNestedInput = {
    create?: XOR<UserCreateWithoutVaultItemsInput, UserUncheckedCreateWithoutVaultItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVaultItemsInput
    upsert?: UserUpsertWithoutVaultItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVaultItemsInput, UserUpdateWithoutVaultItemsInput>, UserUncheckedUpdateWithoutVaultItemsInput>
  }

  export type VaultUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<VaultCreateWithoutItemsInput, VaultUncheckedCreateWithoutItemsInput>
    connectOrCreate?: VaultCreateOrConnectWithoutItemsInput
    upsert?: VaultUpsertWithoutItemsInput
    connect?: VaultWhereUniqueInput
    update?: XOR<XOR<VaultUpdateToOneWithWhereWithoutItemsInput, VaultUpdateWithoutItemsInput>, VaultUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumGoalProgressFieldUpdateOperationsInput = {
    set?: $Enums.GoalProgress
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutFinanceInput = {
    create?: XOR<UserCreateWithoutFinanceInput, UserUncheckedCreateWithoutFinanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFinanceNestedInput = {
    create?: XOR<UserCreateWithoutFinanceInput, UserUncheckedCreateWithoutFinanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceInput
    upsert?: UserUpsertWithoutFinanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinanceInput, UserUpdateWithoutFinanceInput>, UserUncheckedUpdateWithoutFinanceInput>
  }

  export type UserCreateNestedOneWithoutStatsInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    upsert?: UserUpsertWithoutStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatsInput, UserUpdateWithoutStatsInput>, UserUncheckedUpdateWithoutStatsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumVaultIconsFilter<$PrismaModel = never> = {
    equals?: $Enums.VaultIcons | EnumVaultIconsFieldRefInput<$PrismaModel>
    in?: $Enums.VaultIcons[] | ListEnumVaultIconsFieldRefInput<$PrismaModel>
    notIn?: $Enums.VaultIcons[] | ListEnumVaultIconsFieldRefInput<$PrismaModel>
    not?: NestedEnumVaultIconsFilter<$PrismaModel> | $Enums.VaultIcons
  }

  export type NestedEnumVaultIconsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VaultIcons | EnumVaultIconsFieldRefInput<$PrismaModel>
    in?: $Enums.VaultIcons[] | ListEnumVaultIconsFieldRefInput<$PrismaModel>
    notIn?: $Enums.VaultIcons[] | ListEnumVaultIconsFieldRefInput<$PrismaModel>
    not?: NestedEnumVaultIconsWithAggregatesFilter<$PrismaModel> | $Enums.VaultIcons
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVaultIconsFilter<$PrismaModel>
    _max?: NestedEnumVaultIconsFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGoalProgressFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalProgress | EnumGoalProgressFieldRefInput<$PrismaModel>
    in?: $Enums.GoalProgress[] | ListEnumGoalProgressFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalProgress[] | ListEnumGoalProgressFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalProgressFilter<$PrismaModel> | $Enums.GoalProgress
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGoalProgressWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalProgress | EnumGoalProgressFieldRefInput<$PrismaModel>
    in?: $Enums.GoalProgress[] | ListEnumGoalProgressFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalProgress[] | ListEnumGoalProgressFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalProgressWithAggregatesFilter<$PrismaModel> | $Enums.GoalProgress
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalProgressFilter<$PrismaModel>
    _max?: NestedEnumGoalProgressFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BudgetCreateWithoutUserInput = {
    name: string
    color: string
    limit: number
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type BudgetUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    color: string
    limit: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BudgetCreateOrConnectWithoutUserInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetCreateManyUserInputEnvelope = {
    data: BudgetCreateManyUserInput | BudgetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinanceCreateWithoutUserInput = {
    balance?: number
    income?: number
  }

  export type FinanceUncheckedCreateWithoutUserInput = {
    balance?: number
    income?: number
  }

  export type FinanceCreateOrConnectWithoutUserInput = {
    where: FinanceWhereUniqueInput
    create: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateWithoutUserInput = {
    name: string
    targetAmount: number
    deadline?: Date | string | null
    progress: $Enums.GoalProgress
    assignedVault?: number | null
    completed?: boolean
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    name: string
    targetAmount: number
    deadline?: Date | string | null
    progress: $Enums.GoalProgress
    assignedVault?: number | null
    completed?: boolean
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type StatsCreateWithoutUserInput = {
    completedGoals?: number
    totalGoals?: number
    failedGoals?: number
  }

  export type StatsUncheckedCreateWithoutUserInput = {
    completedGoals?: number
    totalGoals?: number
    failedGoals?: number
  }

  export type StatsCreateOrConnectWithoutUserInput = {
    where: StatsWhereUniqueInput
    create: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateWithoutUserInput = {
    name: string
    value: number
    date: Date | string
    category: BudgetCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    value: number
    date: Date | string
    categoryId: number
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VaultCreateWithoutUserInput = {
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
    items?: VaultItemCreateNestedManyWithoutVaultInput
  }

  export type VaultUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
    items?: VaultItemUncheckedCreateNestedManyWithoutVaultInput
  }

  export type VaultCreateOrConnectWithoutUserInput = {
    where: VaultWhereUniqueInput
    create: XOR<VaultCreateWithoutUserInput, VaultUncheckedCreateWithoutUserInput>
  }

  export type VaultCreateManyUserInputEnvelope = {
    data: VaultCreateManyUserInput | VaultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VaultItemCreateWithoutUserInput = {
    name: string
    value: number
    vault: VaultCreateNestedOneWithoutItemsInput
  }

  export type VaultItemUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    value: number
    vaultId: number
  }

  export type VaultItemCreateOrConnectWithoutUserInput = {
    where: VaultItemWhereUniqueInput
    create: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput>
  }

  export type VaultItemCreateManyUserInputEnvelope = {
    data: VaultItemCreateManyUserInput | VaultItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BudgetUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
  }

  export type BudgetUpdateManyWithWhereWithoutUserInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: IntFilter<"Budget"> | number
    name?: StringFilter<"Budget"> | string
    color?: StringFilter<"Budget"> | string
    limit?: IntFilter<"Budget"> | number
    userId?: IntFilter<"Budget"> | number
  }

  export type FinanceUpsertWithoutUserInput = {
    update: XOR<FinanceUpdateWithoutUserInput, FinanceUncheckedUpdateWithoutUserInput>
    create: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput>
    where?: FinanceWhereInput
  }

  export type FinanceUpdateToOneWithWhereWithoutUserInput = {
    where?: FinanceWhereInput
    data: XOR<FinanceUpdateWithoutUserInput, FinanceUncheckedUpdateWithoutUserInput>
  }

  export type FinanceUpdateWithoutUserInput = {
    balance?: IntFieldUpdateOperationsInput | number
    income?: IntFieldUpdateOperationsInput | number
  }

  export type FinanceUncheckedUpdateWithoutUserInput = {
    balance?: IntFieldUpdateOperationsInput | number
    income?: IntFieldUpdateOperationsInput | number
  }

  export type GoalUpsertWithoutUserInput = {
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutUserInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: EnumGoalProgressFieldUpdateOperationsInput | $Enums.GoalProgress
    assignedVault?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progress?: EnumGoalProgressFieldUpdateOperationsInput | $Enums.GoalProgress
    assignedVault?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StatsUpsertWithoutUserInput = {
    update: XOR<StatsUpdateWithoutUserInput, StatsUncheckedUpdateWithoutUserInput>
    create: XOR<StatsCreateWithoutUserInput, StatsUncheckedCreateWithoutUserInput>
    where?: StatsWhereInput
  }

  export type StatsUpdateToOneWithWhereWithoutUserInput = {
    where?: StatsWhereInput
    data: XOR<StatsUpdateWithoutUserInput, StatsUncheckedUpdateWithoutUserInput>
  }

  export type StatsUpdateWithoutUserInput = {
    completedGoals?: IntFieldUpdateOperationsInput | number
    totalGoals?: IntFieldUpdateOperationsInput | number
    failedGoals?: IntFieldUpdateOperationsInput | number
  }

  export type StatsUncheckedUpdateWithoutUserInput = {
    completedGoals?: IntFieldUpdateOperationsInput | number
    totalGoals?: IntFieldUpdateOperationsInput | number
    failedGoals?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    name?: StringFilter<"Transaction"> | string
    value?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
  }

  export type VaultUpsertWithWhereUniqueWithoutUserInput = {
    where: VaultWhereUniqueInput
    update: XOR<VaultUpdateWithoutUserInput, VaultUncheckedUpdateWithoutUserInput>
    create: XOR<VaultCreateWithoutUserInput, VaultUncheckedCreateWithoutUserInput>
  }

  export type VaultUpdateWithWhereUniqueWithoutUserInput = {
    where: VaultWhereUniqueInput
    data: XOR<VaultUpdateWithoutUserInput, VaultUncheckedUpdateWithoutUserInput>
  }

  export type VaultUpdateManyWithWhereWithoutUserInput = {
    where: VaultScalarWhereInput
    data: XOR<VaultUpdateManyMutationInput, VaultUncheckedUpdateManyWithoutUserInput>
  }

  export type VaultScalarWhereInput = {
    AND?: VaultScalarWhereInput | VaultScalarWhereInput[]
    OR?: VaultScalarWhereInput[]
    NOT?: VaultScalarWhereInput | VaultScalarWhereInput[]
    id?: IntFilter<"Vault"> | number
    name?: StringFilter<"Vault"> | string
    targetPrice?: IntFilter<"Vault"> | number
    icon?: EnumVaultIconsFilter<"Vault"> | $Enums.VaultIcons
    userId?: IntFilter<"Vault"> | number
  }

  export type VaultItemUpsertWithWhereUniqueWithoutUserInput = {
    where: VaultItemWhereUniqueInput
    update: XOR<VaultItemUpdateWithoutUserInput, VaultItemUncheckedUpdateWithoutUserInput>
    create: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput>
  }

  export type VaultItemUpdateWithWhereUniqueWithoutUserInput = {
    where: VaultItemWhereUniqueInput
    data: XOR<VaultItemUpdateWithoutUserInput, VaultItemUncheckedUpdateWithoutUserInput>
  }

  export type VaultItemUpdateManyWithWhereWithoutUserInput = {
    where: VaultItemScalarWhereInput
    data: XOR<VaultItemUpdateManyMutationInput, VaultItemUncheckedUpdateManyWithoutUserInput>
  }

  export type VaultItemScalarWhereInput = {
    AND?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
    OR?: VaultItemScalarWhereInput[]
    NOT?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
    id?: IntFilter<"VaultItem"> | number
    name?: StringFilter<"VaultItem"> | string
    value?: IntFilter<"VaultItem"> | number
    vaultId?: IntFilter<"VaultItem"> | number
    userId?: IntFilter<"VaultItem"> | number
  }

  export type BudgetCreateWithoutTransactionsInput = {
    name: string
    color: string
    limit: number
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    color: string
    limit: number
    userId: number
  }

  export type BudgetCreateOrConnectWithoutTransactionsInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutTransactionsInput, BudgetUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    name: string
    email: string
    password: string
    budgets?: BudgetCreateNestedManyWithoutUserInput
    finance?: FinanceCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedOneWithoutUserInput
    stats?: StatsCreateNestedOneWithoutUserInput
    vaults?: VaultCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    email: string
    password: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    finance?: FinanceUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedOneWithoutUserInput
    stats?: StatsUncheckedCreateNestedOneWithoutUserInput
    vaults?: VaultUncheckedCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type BudgetUpsertWithoutTransactionsInput = {
    update: XOR<BudgetUpdateWithoutTransactionsInput, BudgetUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BudgetCreateWithoutTransactionsInput, BudgetUncheckedCreateWithoutTransactionsInput>
    where?: BudgetWhereInput
  }

  export type BudgetUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BudgetWhereInput
    data: XOR<BudgetUpdateWithoutTransactionsInput, BudgetUncheckedUpdateWithoutTransactionsInput>
  }

  export type BudgetUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    finance?: FinanceUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateOneWithoutUserNestedInput
    stats?: StatsUpdateOneWithoutUserNestedInput
    vaults?: VaultUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateOneWithoutUserNestedInput
    stats?: StatsUncheckedUpdateOneWithoutUserNestedInput
    vaults?: VaultUncheckedUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBudgetsInput = {
    name: string
    email: string
    password: string
    finance?: FinanceCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedOneWithoutUserInput
    stats?: StatsCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vaults?: VaultCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetsInput = {
    id?: number
    name: string
    email: string
    password: string
    finance?: FinanceUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedOneWithoutUserInput
    stats?: StatsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vaults?: VaultUncheckedCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
  }

  export type TransactionCreateWithoutCategoryInput = {
    name: string
    value: number
    date: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    value: number
    date: Date | string
    userId: number
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBudgetsInput = {
    update: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateWithoutBudgetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    finance?: FinanceUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateOneWithoutUserNestedInput
    stats?: StatsUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vaults?: VaultUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    finance?: FinanceUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateOneWithoutUserNestedInput
    stats?: StatsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vaults?: VaultUncheckedUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutVaultsInput = {
    name: string
    email: string
    password: string
    budgets?: BudgetCreateNestedManyWithoutUserInput
    finance?: FinanceCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedOneWithoutUserInput
    stats?: StatsCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVaultsInput = {
    id?: number
    name: string
    email: string
    password: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    finance?: FinanceUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedOneWithoutUserInput
    stats?: StatsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVaultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVaultsInput, UserUncheckedCreateWithoutVaultsInput>
  }

  export type VaultItemCreateWithoutVaultInput = {
    name: string
    value: number
    user: UserCreateNestedOneWithoutVaultItemsInput
  }

  export type VaultItemUncheckedCreateWithoutVaultInput = {
    id?: number
    name: string
    value: number
    userId: number
  }

  export type VaultItemCreateOrConnectWithoutVaultInput = {
    where: VaultItemWhereUniqueInput
    create: XOR<VaultItemCreateWithoutVaultInput, VaultItemUncheckedCreateWithoutVaultInput>
  }

  export type VaultItemCreateManyVaultInputEnvelope = {
    data: VaultItemCreateManyVaultInput | VaultItemCreateManyVaultInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVaultsInput = {
    update: XOR<UserUpdateWithoutVaultsInput, UserUncheckedUpdateWithoutVaultsInput>
    create: XOR<UserCreateWithoutVaultsInput, UserUncheckedCreateWithoutVaultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVaultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVaultsInput, UserUncheckedUpdateWithoutVaultsInput>
  }

  export type UserUpdateWithoutVaultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    finance?: FinanceUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateOneWithoutUserNestedInput
    stats?: StatsUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVaultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateOneWithoutUserNestedInput
    stats?: StatsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VaultItemUpsertWithWhereUniqueWithoutVaultInput = {
    where: VaultItemWhereUniqueInput
    update: XOR<VaultItemUpdateWithoutVaultInput, VaultItemUncheckedUpdateWithoutVaultInput>
    create: XOR<VaultItemCreateWithoutVaultInput, VaultItemUncheckedCreateWithoutVaultInput>
  }

  export type VaultItemUpdateWithWhereUniqueWithoutVaultInput = {
    where: VaultItemWhereUniqueInput
    data: XOR<VaultItemUpdateWithoutVaultInput, VaultItemUncheckedUpdateWithoutVaultInput>
  }

  export type VaultItemUpdateManyWithWhereWithoutVaultInput = {
    where: VaultItemScalarWhereInput
    data: XOR<VaultItemUpdateManyMutationInput, VaultItemUncheckedUpdateManyWithoutVaultInput>
  }

  export type UserCreateWithoutVaultItemsInput = {
    name: string
    email: string
    password: string
    budgets?: BudgetCreateNestedManyWithoutUserInput
    finance?: FinanceCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedOneWithoutUserInput
    stats?: StatsCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vaults?: VaultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVaultItemsInput = {
    id?: number
    name: string
    email: string
    password: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    finance?: FinanceUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedOneWithoutUserInput
    stats?: StatsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vaults?: VaultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVaultItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVaultItemsInput, UserUncheckedCreateWithoutVaultItemsInput>
  }

  export type VaultCreateWithoutItemsInput = {
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
    user: UserCreateNestedOneWithoutVaultsInput
  }

  export type VaultUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
    userId: number
  }

  export type VaultCreateOrConnectWithoutItemsInput = {
    where: VaultWhereUniqueInput
    create: XOR<VaultCreateWithoutItemsInput, VaultUncheckedCreateWithoutItemsInput>
  }

  export type UserUpsertWithoutVaultItemsInput = {
    update: XOR<UserUpdateWithoutVaultItemsInput, UserUncheckedUpdateWithoutVaultItemsInput>
    create: XOR<UserCreateWithoutVaultItemsInput, UserUncheckedCreateWithoutVaultItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVaultItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVaultItemsInput, UserUncheckedUpdateWithoutVaultItemsInput>
  }

  export type UserUpdateWithoutVaultItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    finance?: FinanceUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateOneWithoutUserNestedInput
    stats?: StatsUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vaults?: VaultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVaultItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateOneWithoutUserNestedInput
    stats?: StatsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vaults?: VaultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VaultUpsertWithoutItemsInput = {
    update: XOR<VaultUpdateWithoutItemsInput, VaultUncheckedUpdateWithoutItemsInput>
    create: XOR<VaultCreateWithoutItemsInput, VaultUncheckedCreateWithoutItemsInput>
    where?: VaultWhereInput
  }

  export type VaultUpdateToOneWithWhereWithoutItemsInput = {
    where?: VaultWhereInput
    data: XOR<VaultUpdateWithoutItemsInput, VaultUncheckedUpdateWithoutItemsInput>
  }

  export type VaultUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
    user?: UserUpdateOneRequiredWithoutVaultsNestedInput
  }

  export type VaultUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutGoalsInput = {
    name: string
    email: string
    password: string
    budgets?: BudgetCreateNestedManyWithoutUserInput
    finance?: FinanceCreateNestedOneWithoutUserInput
    stats?: StatsCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vaults?: VaultCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: number
    name: string
    email: string
    password: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    finance?: FinanceUncheckedCreateNestedOneWithoutUserInput
    stats?: StatsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vaults?: VaultUncheckedCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    finance?: FinanceUpdateOneWithoutUserNestedInput
    stats?: StatsUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vaults?: VaultUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutUserNestedInput
    stats?: StatsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vaults?: VaultUncheckedUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFinanceInput = {
    name: string
    email: string
    password: string
    budgets?: BudgetCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedOneWithoutUserInput
    stats?: StatsCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vaults?: VaultCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinanceInput = {
    id?: number
    name: string
    email: string
    password: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedOneWithoutUserInput
    stats?: StatsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vaults?: VaultUncheckedCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinanceInput, UserUncheckedCreateWithoutFinanceInput>
  }

  export type UserUpsertWithoutFinanceInput = {
    update: XOR<UserUpdateWithoutFinanceInput, UserUncheckedUpdateWithoutFinanceInput>
    create: XOR<UserCreateWithoutFinanceInput, UserUncheckedCreateWithoutFinanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinanceInput, UserUncheckedUpdateWithoutFinanceInput>
  }

  export type UserUpdateWithoutFinanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateOneWithoutUserNestedInput
    stats?: StatsUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vaults?: VaultUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateOneWithoutUserNestedInput
    stats?: StatsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vaults?: VaultUncheckedUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStatsInput = {
    name: string
    email: string
    password: string
    budgets?: BudgetCreateNestedManyWithoutUserInput
    finance?: FinanceCreateNestedOneWithoutUserInput
    goals?: GoalCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vaults?: VaultCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatsInput = {
    id?: number
    name: string
    email: string
    password: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    finance?: FinanceUncheckedCreateNestedOneWithoutUserInput
    goals?: GoalUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vaults?: VaultUncheckedCreateNestedManyWithoutUserInput
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
  }

  export type UserUpsertWithoutStatsInput = {
    update: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserUpdateWithoutStatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    finance?: FinanceUpdateOneWithoutUserNestedInput
    goals?: GoalUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vaults?: VaultUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    finance?: FinanceUncheckedUpdateOneWithoutUserNestedInput
    goals?: GoalUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vaults?: VaultUncheckedUpdateManyWithoutUserNestedInput
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BudgetCreateManyUserInput = {
    id?: number
    name: string
    color: string
    limit: number
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    name: string
    value: number
    date: Date | string
    categoryId: number
  }

  export type VaultCreateManyUserInput = {
    id?: number
    name: string
    targetPrice: number
    icon: $Enums.VaultIcons
  }

  export type VaultItemCreateManyUserInput = {
    id?: number
    name: string
    value: number
    vaultId: number
  }

  export type BudgetUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type BudgetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BudgetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BudgetUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type VaultUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
    items?: VaultItemUpdateManyWithoutVaultNestedInput
  }

  export type VaultUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
    items?: VaultItemUncheckedUpdateManyWithoutVaultNestedInput
  }

  export type VaultUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: IntFieldUpdateOperationsInput | number
    icon?: EnumVaultIconsFieldUpdateOperationsInput | $Enums.VaultIcons
  }

  export type VaultItemUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    vault?: VaultUpdateOneRequiredWithoutItemsNestedInput
  }

  export type VaultItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    vaultId?: IntFieldUpdateOperationsInput | number
  }

  export type VaultItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    vaultId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyCategoryInput = {
    id?: number
    name: string
    value: number
    date: Date | string
    userId: number
  }

  export type TransactionUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VaultItemCreateManyVaultInput = {
    id?: number
    name: string
    value: number
    userId: number
  }

  export type VaultItemUpdateWithoutVaultInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutVaultItemsNestedInput
  }

  export type VaultItemUncheckedUpdateWithoutVaultInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VaultItemUncheckedUpdateManyWithoutVaultInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}