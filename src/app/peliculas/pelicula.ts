import { cineDTO } from "../cines/cine";
import { generoDTO } from "../generos/genero";

export interface peliculaCreacionDTO{
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer:string;
    poster: File;
}

export interface peliculaDTO{
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer:string;
    poster: string;
}

export interface PeliculaPostGet {
    generos: generoDTO[];
    cines: cineDTO[];
}

// export interface LandingPageDTO {
//     enCines: PeliculaDTO[];
//     proximosEstrenos: PeliculaDTO[];
// }

// export interface PeliculaPutGet {
//     pelicula: PeliculaDTO;
//     generosSeleccionados: generoDTO[];
//     generosNoSeleccionados: generoDTO[];
//     cinesSeleccionados: cineDTO[];
//     cinesNoSeleccionados: cineDTO[];
//     actores: actorPeliculaDTO[];
// }