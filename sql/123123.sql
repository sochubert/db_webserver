

DELIMITER $$
DROP PROCEDURE IF EXISTS InsertRoom$$
CREATE PROCEDURE InsertRoom()
BEGIN
	DECLARE i INT DEFAULT 101;
    while i <= 112 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","STANDARD_TWIN",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 201;
    while i <= 212 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","STANDARD_DOUBLE",null);
        SET i = i + 1;
	END WHILE;
	SET i = 301;
    while i <= 312 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","STANDARD_DOUBLE",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 401;
    while i <= 412 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","STANDARD_FAMILY",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 501;
    while i <= 512 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","DELUXE_TWIN",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 601;
    while i <= 612 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","DELUXE_DOUBLE",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 701;
    while i <= 712 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","DELUXE_FAMILY",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 801;
    while i <= 812 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","PREMIUM_TWIN",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 901;
    while i <= 912 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","PREMIUM_DOUBLE",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 1001;
    while i <= 1006 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","SUITE",null);
        SET i = i + 1;
	END WHILE;
    
    SET i = 1007;
    while i <= 1012 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","EXECUTIVE_SUITE",null);
        SET i = i + 1;
	END WHILE;
END$$
DELIMITER $$

CALL InsertRoom();