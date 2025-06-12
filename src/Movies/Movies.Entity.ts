import { Theater } from "src/Theater/Theater.Entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Movies {

    @PrimaryColumn()
    movie_id: number;
    @Column()
    movie_names: string;

    @ManyToMany(() => Theater, theater => theater.movie_list)
    @JoinTable()
    theater_list: Theater[] ;




}