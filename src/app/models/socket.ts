export interface Tuple {
    port: number;
    address: string;
}

export interface Socket {
    pid: number;
    // local: Tuple;
    // remote: Tuple;
    state: string;
    protocol: string;
}
