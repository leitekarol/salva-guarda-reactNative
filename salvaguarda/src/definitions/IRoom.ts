import { IUser } from "./IUser"

export type IRoomType = "public" | "private";

export type IRoomSubject = "Math" | "Port" | "Geo" | "Hist" | "Bio" | "Chem" | "Socio" | "Philo" | "Tutor" | "Essay";

export type IRoom = {
	_id: string;
	createdAt: Date;
	name: string;
    subject: IRoomSubject;
    type: IRoomType;
    creator: IUser;
};