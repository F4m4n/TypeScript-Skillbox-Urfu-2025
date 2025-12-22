class HanoiTower<T = number> {
    private rods: { [key: string]: T[] } = {};

    constructor(private fromRod: string = "First", private toRod: string = "Second", private auxRod: string = "Third") {
        this.rods[fromRod] = [];
        this.rods[toRod] = [];
        this.rods[auxRod] = [];
    }

    addDisks(disks: T[]): void {
        this.rods[this.fromRod] = [...disks];
    }

    solve(): void {
        const diskCount = this.rods[this.fromRod].length;
        this.moveDisks(diskCount, this.fromRod, this.toRod, this.auxRod);
    }

    private moveDisks(n: number, from: string, to: string, aux: string): void {
        if (n === 0) {
            return;
        }

        this.moveDisks(n - 1, from, aux, to);

        const disk = this.rods[from].pop();
        if (disk !== undefined) {
            this.rods[to].push(disk);
            console.log(`Переместить диск ${disk} с ${from} на ${to}`);
        }

        this.moveDisks(n - 1, aux, to, from);
    }
}