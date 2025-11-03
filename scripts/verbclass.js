class verb_t {
    p1s; p2s; p3s; p1p; p2p; p3p;
    constructor() {
        this.p1s = "";      // 1ere singulier
        this.p2s = "";      // 2eme s.
        this.p3s = "";      // 3eme s.
        this.p1p = "";      // 1ere pluriel
        this.p2p = "";      // 2eme p.
        this.p3p = "";      // 3eme p.
    }
}
class family_t {
    root; infinitif; present;
    constructor() {
        this.root = "";
        this.infinitif = "";
        this.present = new verb_t();
    }

    process_er (number)
    {
        let lastEr = roots_er.length - 1;
        //let lastEtre = lastEr + roots_etre.length;
        //let lastAvoir = lastEtre + roots_avoir.length;
        //let lastFaire = lastAvoir + roots_faire.length;
        let firstIrregulier = lastEr + 1;
        let lastIrregulier = lastEr + roots_irregulier.length;
        if (number <= lastEr) {
            let root = roots_er[number];
            this.root = root;
            this.infinitif = root + "er";
            this.present.p1s = root + "e";
            this.present.p2s = root + "es";
            this.present.p3s = root + "e";
            this.present.p1p = root + "ons";
            this.present.p2p = root + "ez";
            this.present.p3p = root + "ent";
        } else if (number <= lastIrregulier) {
            this.root = "";
            this.infinitif = roots_irregulier[number - firstIrregulier][0];
            this.present.p1s = roots_irregulier[number - firstIrregulier][1];
            this.present.p2s = roots_irregulier[number - firstIrregulier][2];
            this.present.p3s = roots_irregulier[number - firstIrregulier][3];
            this.present.p1p = roots_irregulier[number - firstIrregulier][4];
            this.present.p2p = roots_irregulier[number - firstIrregulier][5];
            this.present.p3p = roots_irregulier[number - firstIrregulier][6];
        }
    }
}