export const adatLeiro={
    nev:{
        megjelenes:"Név",
        leiro: "nev",
        tipus:"text",
        value:"",
        placeholder:"Név:",
        regex:"[A-Z][a-z]{2,15}",
        validalas: "Név nagybetűvel kezdődik és legalább 3 karakter"
    },
    szul:{
        megjelenes:"Születési év",
        leiro: "szul",
        tipus:"number",
        placeholder: "Szül:",
        value:2000,
        regex:{
            min:1000,
            max:2023
        },
        validalas:"1000 és 2023 között kell legyen a szám"
    }
}