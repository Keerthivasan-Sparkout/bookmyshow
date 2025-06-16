import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Theater } from "../Theater/Theater.Entity";
import { Movies } from "src/Movies/Movies.Entity";

@Entity()
export class Showes{

    @PrimaryColumn()
    show_id:number;
    @Column()
    screen_name:string;
    @Column()
    movie_time:string;
    @Column()
    total_seat:number;
    @Column()
    tickets_fair:number;
    @Column()
    booking_details_everySeat:string;//{seat_no:number,customer:string | null} ;
    @ManyToMany(()=>Movies)
    @JoinColumn()
    running_movie:Movies | null;
    @ManyToOne(()=>Theater,(theater)=>theater.screen_details)
    theater_details:Theater;

}