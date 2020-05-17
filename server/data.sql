create database conviva;
use conviva;

insert into customers(id,name, age, sex, createdAt, updatedAt) values ("001","Vaibhav",30, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("002","Patel",28, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("003","Sonali",35, "Female", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("004","Sohan",25, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("005","Nilesh",38, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("006","Anantha",55, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("007","Ashish",21, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("008","Narayan",23, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("009","Kavita",18, "Female", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("010","Raj",57, "Male", "2020-05-15", "2020-05-15");

insert into customers(id,name, age, sex, createdAt, updatedAt) values ("011","Jameel",38, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("012","Suril",48, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("013","Neha",15, "Female", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("014","Aditya",25, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("015","Prashant",38, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("016","James",45, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("017","Joe",21, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("018","William",23, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("019","Sarah",18, "Female", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("020","Jeff",57, "Male", "2020-05-15", "2020-05-15");

insert into customers(id,name, age, sex, createdAt, updatedAt) values ("021","Venkat",30, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("022","Tarun",28, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("023","Twinkle",35, "Female", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("024","Aniket",25, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("025","Junaid",38, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("026","Swami",55, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("027","Jayakumar",21, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("028","Siddesh",23, "Male", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("029","Neeraja",18, "Female", "2020-05-15", "2020-05-15");
insert into customers(id,name, age, sex, createdAt, updatedAt) values ("030","Rohit",57, "Male", "2020-05-15", "2020-05-15");


insert into addresses(
	id, customer_id, address, landmark, city, district, pin_code, state, phone, createdAt, updatedAt
) values (
	"A001","001", "#401, VBC Enclave Kodihalli main road, HAL 3rd Stage", "government primary school", "Bangalore", "Bangalore Urban", 560008, "KA", "+91 7760996067", "2020-05-15", "2020-05-15"
);

insert into addresses(
	id, customer_id, address, landmark, city, district, pin_code, state, phone, createdAt, updatedAt
) values (
	"A002","001", "#938, 3rd floor, 1st Main road koramangla", "wipro park", "Bangalore", "Bangalore Urban", 560034, "KA", "+91 7760996067", "2020-05-15", "2020-05-15"
);

insert into addresses(
	id, customer_id, address, landmark, city, district, pin_code, state, phone, createdAt, updatedAt
) values (
	"A003","002", "#1598 Munnekolala Bangalore", "Sai Kruppa Apt", "Bangalore", "Bangalore Urban", 560103, "KA", "+91 7760791880", "2020-05-15", "2020-05-15"
);
