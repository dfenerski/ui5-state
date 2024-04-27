declare module "com/github/dfenerski/ui5_state/types/DeepReadonly" {
    type ReadonlyPrimitive = undefined | null | boolean | string | number | Function;
    type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>;
    type DeepReadonlyMap<K, V> = ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>;
    type DeepReadonlySet<T> = ReadonlySet<DeepReadonly<T>>;
    type DeepReadonlyObject<T> = {
        readonly [K in keyof T]: DeepReadonly<T[K]>;
    };
    type DeepReadonly<T> = T extends ReadonlyPrimitive ? T : T extends Array<infer U> ? DeepReadonlyArray<U> : T extends Map<infer K, infer V> ? DeepReadonlyMap<K, V> : T extends Set<infer M> ? DeepReadonlySet<M> : DeepReadonlyObject<T>;
}
//# sourceMappingURL=DeepReadonly.d.ts.map