import { actorCreacionDTO, actorPeliculaDTO } from "../actores/actor";
import { cineDTO } from "../cines/cine";
import { generoDTO } from "../generos/genero";

export interface peliculaCreacionDTO{
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer:string;
    poster: File;
    generosIds: number[];
    actores: actorPeliculaDTO[];
    cinesIds: number[];
}

export interface peliculaDTO{
    id: number;
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer:string;
    poster: string;
    generos: generoDTO[];
    actores: actorPeliculaDTO[];
    cines: cineDTO[];
}

export interface PeliculaPostGet {
    generos: generoDTO[];
    cines: cineDTO[];
}

export interface LandingPageDTO {
    enCines: peliculaDTO[];
    proximosEstrenos: peliculaDTO[];
}

// export interface PeliculaPutGet {
//     pelicula: PeliculaDTO;
//     generosSeleccionados: generoDTO[];
//     generosNoSeleccionados: generoDTO[];
//     cinesSeleccionados: cineDTO[];
//     cinesNoSeleccionados: cineDTO[];
//     actores: actorPeliculaDTO[];
// }