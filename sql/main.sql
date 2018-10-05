drop database if exists challenge_linio_db;
create database challenge_linio_db;

use challenge_linio_db;

/**
 * @table 	messages
 * @desc 	used to store possible program outputs
 */
create table messages(
	id tinyint(2) not null unique,
	message varchar(8) not null
);

insert into messages(id, message) values(0, "IT"),
	(1, "Linio"),
	(2, "Linianos");

/**
 * @table 	_results
 * @desc 	saves stored procedure query results used to present output to user
 */
create table _results(
	id int not null primary key auto_increment,
	str varchar(8) not null
);

delimiter //

drop procedure if exists FizzBuzzLinio;//

/**
 * @procedure 	FizzBuzzLinio
 * @param 		FIZZ_BUZZ_LOOP_LIMIT	int 	limit for fizz buzz algorithm until one number
 */
create procedure FizzBuzzLinio(in FIZZ_BUZZ_LOOP_LIMIT int)
begin
	declare counter int default(0);
	declare MESSAGE varchar(8);
	declare MESSAGE_TO_SELECT  tinyint(2);
	declare IS_DIVISIBLE_BY_BOTH tinyint(2) default(0);
	declare IS_DIVISIBLE_BY_THREE tinyint(2) default(0);

	delete from _results;
	truncate table _results;

	FIZZ_BUZZ_LOOP: while counter<FIZZ_BUZZ_LOOP_LIMIT do
		set counter 						= counter+1;
		set IS_DIVISIBLE_BY_THREE 			= counter%3 = 0 and counter%5 > 0;
		set IS_DIVISIBLE_BY_BOTH			= counter%3 = 0 and counter%5 = 0;

		if counter%3=0 or counter%5=0 then
			set MESSAGE_TO_SELECT 	= (IS_DIVISIBLE_BY_THREE+(IS_DIVISIBLE_BY_BOTH*2));
			
			select m.message into MESSAGE from messages as m where m.id=MESSAGE_TO_SELECT;

			insert into _results(str) values(MESSAGE);

			iterate FIZZ_BUZZ_LOOP;
		end if;

		insert into _results(str) values(counter);
	end while FIZZ_BUZZ_LOOP;
end;//

/**
 * @procedure 	PrintResults	prints program output after execution by reading results table
 */
create procedure PrintResults()
begin
	select id as num, str as result from _results;
end;//

delimiter ;