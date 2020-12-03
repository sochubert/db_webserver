-- 정적 인스턴스 추가 해주는 파일


-- 룸 타입 인스턴스를 생성하는 쿼리문
INSERT INTO ROOM_TYPE VALUES ('STANDARD_TWIN',50000,2,4,22,20,2);
INSERT INTO ROOM_TYPE VALUES ('STANDARD_DOUBLE',50000,2,4,22,20,2);
INSERT INTO ROOM_TYPE VALUES ('STANDARD_FAMILY',50000,2,4,22,20,2);
INSERT INTO ROOM_TYPE VALUES ('DELUXE_TWIN',50000,2,4,22,20,2);
INSERT INTO ROOM_TYPE VALUES ('DELUXE_DOUBLE',50000,2,4,22,20,2);
INSERT INTO ROOM_TYPE VALUES ('DELUXE_FAMILY',50000,2,4,22,20,2);
INSERT INTO ROOM_TYPE VALUES ('PREMIUM_TWIN',50000,2,4,22,20,2);
INSERT INTO ROOM_TYPE VALUES ('PREMIUM_DOUBLE',50000,2,4,22,20,2);
INSERT INTO ROOM_TYPE VALUES ('SUITE',70000,2,4,11,10,2);
INSERT INTO ROOM_TYPE VALUES ('EXECUTIVE_SUITE',100000,2,4,6,5,2);

-- 방 호수 저장해주는 함수 
-- 2~8층 20개, 9층 10개, 10층 5개


DELIMITER $$
DROP PROCEDURE IF EXISTS InsertRoom$$
CREATE PROCEDURE InsertRoom()
BEGIN
	DECLARE i INT DEFAULT 101;
    while i <= 112 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","STANDARD_TWIN");
        SET i = i + 1;
	END WHILE;

    SET i = 201;
    while i <= 312 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","STANDARD_DOUBLE");
        SET i = i + 1;
	END WHILE;

    SET i = 301;
    while i <= 412 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","STANDARD_FAMILY");
        SET i = i + 1;
	END WHILE;

    SET i = 501;
    while i <= 512 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","DELUXE_TWIN");
        SET i = i + 1;
	END WHILE;

    SET i = 601;
    while i <= 612 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","DELUXE_DOUBLE");
        SET i = i + 1;
	END WHILE;

    SET i = 701;
    while i <= 712 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","DELUXE_FAMILY");
        SET i = i + 1;
	END WHILE;

    SET i = 801;
    while i <= 812 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","PREMIUM_TWIN");
        SET i = i + 1;
	END WHILE;

    SET i = 901;
    while i <= 912 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","PREMIUM_DOUBLE");
        SET i = i + 1;
	END WHILE;

    SET i = 1001;
    while i <= 1006 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","SUITE");
        SET i = i + 1;
	END WHILE;

    SET i = 1007;
    while i <= 1012 DO
		INSERT INTO ROOM VALUES (i,"AVAILABLE","EXECUTIVE_SUITE");
        SET i = i + 1;
	END WHILE;
END$$
DELIMITER $$

CALL InsertRoom();

-- facility_package 인스턴스 생성하는 쿼리문

INSERT INTO FACILITY_PACKAGE VALUES(1, 300000, "Private Swimming Pool");
INSERT INTO facility_package VALUES(2, 500000, "Meeting Room");
INSERT INTO facility_package VALUES(3, 1000000, "Banquet hall");
INSERT INTO facility_package VALUES(4, 300000, "Private Bar");
INSERT INTO facility_package VALUES(5, 200000, "Club Lounge");
INSERT INTO facility_package VALUES(6, 70000, "Concert");
INSERT INTO facility_package VALUES(7, 100000, "Business Room");
INSERT INTO facility_package VALUES(8, 500000, "Party Room");
