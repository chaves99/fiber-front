export interface Mapper<I, O> {
    from(param: I): O;
    to(param: O): I;
}