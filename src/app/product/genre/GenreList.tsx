"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Genre } from "@/types/product";

interface ResponseData {
    genres: Genre[];
}
export const GenreList = () => {
    
    const router = useRouter();
    const [genres, setGenre] = useState<Genre[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/genre', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
              },})
        .then(res => res.json())
        .then((data: ResponseData) => {
            setGenre(data.genres)
        })
        // console.log(setGenre)
    },[])
    console.log(genres)
       
    const listGenres = () => {
        return (
        <>
            {
                genres.map((genre) => 
                    <li key={genre.id} onClick={() => router.push(`/product/list/?genre_id=${genre.id}`)}>
                        {genre.genre_name}
                    </li>
                )
            }
        </>
        )
    };

    return (
        <ul>{listGenres()}</ul>
    )
}
