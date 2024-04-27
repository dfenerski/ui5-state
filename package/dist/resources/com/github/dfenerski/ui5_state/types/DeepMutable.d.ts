declare module "com/github/dfenerski/ui5_state/types/DeepMutable" {
    type MutablePrimitive = undefined | null | boolean | string | number | Function;
    type DeepMutableArray<T> = Array<DeepMutable<T>>;
    type DeepMutableMap<K, V> = Map<DeepMutable<K>, DeepMutable<V>>;
    type DeepMutableSet<T> = Set<DeepMutable<T>>;
    type DeepMutableObject<T> = {
        -readonly [K in keyof T]: DeepMutable<T[K]>;
    };
    type DeepMutable<T> = T extends MutablePrimitive ? T : T extends Array<infer U> ? DeepMutableArray<U> : T extends Map<infer K, infer V> ? DeepMutableMap<K, V> : T extends Set<infer M> ? DeepMutableSet<M> : DeepMutableObject<T>;
}
//# sourceMappingURL=DeepMutable.d.ts.map