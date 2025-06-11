import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Theater } from "./Theater.Entity";

@Entity()
export class MovieTimingAndScreen{

    @PrimaryGeneratedColumn()
    screen_id:number;
    @Column()
    screen_Name:string;
    @Column()
    running_movie:string;
    @ManyToOne(()=>Theater,(theater)=>theater.screen_timing)
    theater:Theater;

}