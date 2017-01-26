/**
 * For details:
 * http://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html
 * https://docs.oracle.com/javase/tutorial/collections/
 *
 */
namespace collections {

    /**
     * An interface for visiting each entry in a collection
     */
    export interface Iterator<E> {
        hasNext(): boolean;
        next(): E;
    }

    export interface Iterable<E> {
        iterator(): Iterator<E>;
    }

    /**
     * A bunch of objects
     */
    export interface Collection<E> extends Iterable<E> {

        size(): number;

        isEmpty(): boolean;

        contains(e: any): boolean;

        iterator(): Iterator<E>;

        // toArray(): E[];

        add(e: E): boolean;

        remove(e: any): boolean;

        // addAll(col: Collection<E>): boolean;

        // removeAll(col: Collection<any>): boolean;

        // containsAll(col: Collection<any>): boolean;

        // retainAll(col: Collection<any>): boolean;

        clear(): void;

    }

    export class MyCollection<E>  implements Collection<E>, Iterable<E>{
        list : E[];
        constructor() {
            this.list = [];
        }

        size(): number {
            return this.list.length;
        }

        isEmpty(): boolean { 
            return this.list.length == 0;
        }

        contains(e: any): boolean { 
            for (let element of this.list) {
                console.log(element);
                if (e == element) {
                    return true;
                }
            }
            return false;
        };

        iterator(): Iterator<E> {
            return null;
        };

        // toArray(): E[];

        add(e: E): boolean {
            this.list = this.list.concat(this.list, [e]);
            return true;
        }

        remove(e: any): boolean {return false;};

        // addAll(col: Collection<E>): boolean;

        // removeAll(col: Collection<any>): boolean;

        // containsAll(col: Collection<any>): boolean;

        // retainAll(col: Collection<any>): boolean;

        clear(): void {
            this.list = [];
        }
    }

    /**
     * A collection with set semantics
     */
    interface Set<E> extends Collection<E> {
    }

    /**
     * A collection with indices
     */
    interface List<E> extends Collection<E> {

        addAllAtIndex(index: number, col: Collection<E>): boolean;

        get(index: number): E;

        set(index: number, element: E): E;

        addAtIndex(index: number, element: E): void;

        removeAtIndex(index: number): E;

        indexOf(o: any): number;

        lastIndexOf(o: any): number;

        subList(fromIndex: number, toIndex: number): List<E>;

    }


    /**
     * A key value pair
     */
    interface Entry<K,V> {

        getKey(): K;

        getValue(): V;
    }

    /**
     * A set of keys mapping to values
     */
    interface Map<K,V> {

        size(): number;

        isEmpty(): number;

        containsKey(key: any): boolean;

        containsValue(value: any): number;

        get(key: any): V;

        put(key: K, value: V): V;

        remove(key: any): V;

        putAll(map: Map<K, V>): void;

        clear(): void;

        keySet(): Set<K>;

        values(): Collection<V> ;

        entrySet(): Set<Entry<K, V>> ;

    }
}
