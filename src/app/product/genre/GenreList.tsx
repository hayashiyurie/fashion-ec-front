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
        <div className="flex flex-col">
            {
                genres.map((genre) => 
                    <button key={genre.id} className="rounded-lg w-40 h-14 hover:bg-[#9C7C7C] bg-[#AB9F9F] mb-3" type="button" onClick={() => router.push(`/product/list/?genre_id=${genre.id}`)}>
                        {genre.genre_name}
                    </button>
                )
            }
        </div>
        )
    };

    return (
        <ul>{listGenres()}</ul>
    )
}
