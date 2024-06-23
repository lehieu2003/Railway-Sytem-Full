-- Xóa database nếu tồn tại và tạo lại
DROP DATABASE IF EXISTS railwaySystem;
CREATE DATABASE railwaySystem;
USE railwaySystem;

-- Tạo bảng để lưu trữ thông tin người dùng
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Tạo bảng để lưu trữ thông tin phiên đăng nhập
CREATE TABLE sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    session_token VARCHAR(255) NOT NULL UNIQUE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE customers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL
);

CREATE TABLE tickets (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    seat_id INT NOT NULL,
    seat_name VARCHAR(10) NOT NULL,
    status VARCHAR(20) NOT NULL,
    seat_index INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    from_station VARCHAR(255) NOT NULL,
    to_station VARCHAR(255) NOT NULL,
    name_car VARCHAR(10) NOT NULL,
    time_start TIME NOT NULL,
    seat_chair VARCHAR(10) NOT NULL,
    customer_id BIGINT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);



-- Thêm một người dùng mới
INSERT INTO users (username, password, email) VALUES ('new_user1', 'hashed_password1', 'new_user1@example.com');
INSERT INTO users (username, password, email) VALUES ('new_user2', 'hashed_password2', 'new_user2@example.com');
INSERT INTO users (username, password, email) VALUES ('new_user3', 'hashed_password3', 'new_user3@example.com');
INSERT INTO users (username, password, email) VALUES ('new_user4', 'hashed_password4', 'new_user4@example.com');

-- Lấy user_id của người dùng mới sau khi đăng ký
SET @user_id1 = (SELECT user_id FROM users WHERE username = 'new_user1');
SET @user_id2 = (SELECT user_id FROM users WHERE username = 'new_user2');
SET @user_id3 = (SELECT user_id FROM users WHERE username = 'new_user3');
SET @user_id4 = (SELECT user_id FROM users WHERE username = 'new_user4');

-- Sử dụng user_id này để thêm một phiên mới
INSERT INTO sessions (user_id, session_token) VALUES (@user_id1, 'session_token1');
INSERT INTO sessions (user_id, session_token) VALUES (@user_id2, 'session_token2');
INSERT INTO sessions (user_id, session_token) VALUES (@user_id3, 'session_token3');
INSERT INTO sessions (user_id, session_token) VALUES (@user_id4, 'session_token4');


-- Tạo bảng để lưu trữ thông tin về chuyến tàu
CREATE TABLE train_trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    from_station VARCHAR(100) NOT NULL,
    to_station VARCHAR(100) NOT NULL,
    date_start DATE NOT NULL,
    date_end DATE NOT NULL,
    time_start TIME NOT NULL,
    time_end TIME NOT NULL,
    ordered INT NOT NULL,
    emptys INT NOT NULL
);

-- Tạo bảng để lưu trữ thông tin về toa tàu
CREATE TABLE train_cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    train_trip_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    occupied INT NOT NULL,
    seats INT NOT NULL,
    cols_car INT NOT NULL,
    rows_car INT NOT NULL,
    FOREIGN KEY (train_trip_id) REFERENCES train_trips(id)
);

-- Tạo bảng để lưu trữ thông tin về ghế trên toa tàu
CREATE TABLE train_seats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT NOT NULL,
    name VARCHAR(10) NOT NULL,
    status ENUM('order', 'empty') NOT NULL,
    seat_index INT NOT NULL,
    price INT NOT NULL,
    from_station varchar(225) not null,
    to_station varchar(225) not null,
    name_car varchar(225) not null,
    time_start TIME NOT NULL,
    seat_chair int not null,
    FOREIGN KEY (car_id) REFERENCES train_cars(id)
);

-- Thêm dữ liệu về các chuyến tàu
INSERT INTO train_trips (name, from_station, to_station, date_start, date_end, time_start, time_end, ordered, emptys)
VALUES
	('SE1', 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', '2024-05-14', '2024-05-15', '06:00', '12:00', 500000, 100),
    ('SE2', 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', '2024-05-14', '2024-05-15', '08:00', '14:00', 500000, 100),
    ('SE3', 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', '2024-05-14', '2024-05-15', '10:00', '16:00', 500000, 100),
    ('SE4', 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', '2024-05-14', '2024-05-15', '12:00', '18:00', 500000, 100),
    ('SE5', 'Tỉnh Thanh Hóa', 'Thành phố Vinh', '2024-05-14', '2024-05-15', '14:00', '20:00', 500000, 100),
	('SE6', 'Tỉnh Thanh Hóa', 'Tỉnh Thừa Thiên Huế', '2024-05-14', '2024-05-15', '14:00', '20:00', 500000, 100),
	('SE7', 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', '2024-05-14', '2024-05-15', '14:00', '20:00', 500000, 100);

-- Thêm dữ liệu về các toa tàu trong các chuyến tàu SE1 và SE2
INSERT INTO train_cars (train_trip_id, name, full_name, occupied, seats, cols_car, rows_car)
VALUES
    (1, 'A', 'ngồi mềm điều hòa', 20, 100, 10, 4),
    (1, 'A1', 'ngồi mềm không điều hòa', 20, 100, 10, 4),
    (2, 'B', 'ngồi mềm điều hòa', 50, 100, 10, 4),
    (2, 'B1', 'ngồi mềm không điều hòa', 50, 100, 10, 4),
    (3, 'B', 'ngồi mềm điều hòa', 50, 100, 10, 4),
    (3, 'B1', 'ngồi mềm không điều hòa', 50, 100, 10, 4),
    (4, 'B', 'ngồi mềm điều hòa', 50, 100, 10, 4),
    (4, 'B1', 'ngồi mềm không điều hòa', 50, 100, 10, 4),
    (5, 'B', 'ngồi mềm điều hòa', 50, 100, 10, 4),
    (5, 'B1', 'ngồi mềm không điều hòa', 50, 100, 10, 4),
    (6, 'B', 'ngồi mềm điều hòa', 50, 100, 10, 4),
    (6, 'B1', 'ngồi mềm không điều hòa', 50, 100, 10, 4),
    (7, 'B', 'ngồi mềm điều hòa', 50, 100, 10, 4),
    (7, 'B1', 'ngồi mềm không điều hòa', 50, 100, 10, 4);

-- Thêm dữ liệu về các ghế trên các toa tàu
INSERT INTO train_seats (car_id, name, status, seat_index, price,from_station,to_station,name_car,time_start,seat_chair)
VALUES
	(1, 'A1', 'order', 1, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '1'),
    (1, 'A2', 'empty', 2, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '2'),
    (1, 'A3', 'order', 3, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '3'),
    (1, 'A4', 'empty', 4, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '4'),
    (1, 'A5', 'order', 5, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '5'),
    (1, 'A6', 'empty', 6, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '6'),
    (1, 'A7', 'order', 7, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '7'),
    (1, 'A8', 'empty', 8, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '8'),
    (1, 'A9', 'order', 9, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '9'),
    (1, 'A10', 'empty', 10, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '10'),
    (1, 'A11', 'order', 11, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '11'),
    (1, 'A12', 'empty', 12, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '12'),
    (1, 'A13', 'order', 13, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '13'),
    (1, 'A14', 'empty', 14, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '14'),
    (1, 'A15', 'order', 1, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '15'),
    (1, 'A16', 'empty', 2, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '16'),
    (1, 'A17', 'order', 3, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '17'),
    (1, 'A18', 'empty', 4, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '18'),
    (1, 'A19', 'order', 5, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '19'),
    (1, 'A20', 'empty', 6, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '20'),
    (1, 'A21', 'order', 7, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '21'),
    (1, 'A22', 'empty', 8, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '22'),
    (1, 'A23', 'order', 9, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '23'),
    (1, 'A24', 'empty', 10, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '24'),
    (1, 'A25', 'order', 11, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '25'),
    (1, 'A26', 'empty', 12, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '26'),
    (1, 'A27', 'order', 13, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '27'),
    (1, 'A28', 'order', 1, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '28'),
    (1, 'A29', 'empty', 2, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '29'),
    (1, 'A30', 'order', 3, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '30'),
    (1, 'A31', 'empty', 4, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '31'),
    (1, 'A32', 'order', 5, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '32'),
    (1, 'A33', 'empty', 6, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '33'),
    (1, 'A34', 'order', 7, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '34'),
    (1, 'A35', 'empty', 8, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '35'),
    (1, 'A36', 'order', 9, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '36'),
    (1, 'A37', 'empty', 10, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '37'),
    (1, 'A38', 'order', 11, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '38'),
    (1, 'A39', 'empty', 12, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '39'),
    (1, 'A40', 'order', 13, 100000, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '40'),
    
    
    
    -- Dữ liệu cho toa tàu 2 của chuyến tàu SE1
	(2, 'A1', 'order', 1, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '1'),
    (2, 'A2', 'order', 2, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '2'),
    (2, 'A3', 'order', 3, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '3'),
    (2, 'A4', 'order', 4, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '4'),
    (2, 'A5', 'order', 5, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '5'),
    (2, 'A6', 'order', 6, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '6'),
    (2, 'A7', 'order', 7, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '7'),
    (2, 'A8', 'order', 8, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '8'),
    (2, 'A9', 'order', 9, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '9'),
    (2, 'A10', 'order', 10, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '10'),
    (2, 'A11', 'order', 11, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '11'),
    (2, 'A12', 'order', 12, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '12'),
    (2, 'A13', 'order', 13, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '13'),
    (2, 'A14', 'order', 14, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '14'),
    (2, 'A15', 'order', 1, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '15'),
    (2, 'A16', 'order', 2, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '16'),
    (2, 'A17', 'order', 3, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '17'),
    (2, 'A18', 'order', 4, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '18'),
    (2, 'A19', 'order', 5, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '19'),
    (2, 'A20', 'order', 6, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '20'),
    (2, 'A21', 'order', 7, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '21'),
    (2, 'A22', 'order', 8, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '22'),
    (2, 'A23', 'order', 9, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '23'),
    (2, 'A24', 'order', 10, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '24'),
    (2, 'A25', 'order', 11, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '25'),
    (2, 'A26', 'order', 12, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '26'),
    (2, 'A27', 'order', 13, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '27'),
    (2, 'A28', 'order', 1, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '28'),
    (2, 'A29', 'order', 2, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '29'),
    (2, 'A30', 'order', 3, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '30'),
    (2, 'A31', 'order', 4, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '31'),
    (2, 'A32', 'order', 5, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '32'),
    (2, 'A33', 'order', 6, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '33'),
    (2, 'A34', 'order', 7, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '34'),
    (2, 'A35', 'order', 8, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '35'),
    (2, 'A36', 'order', 9, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '36'),
    (2, 'A37', 'order', 10, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '37'),
    (2, 'A38', 'order', 11, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '38'),
    (2, 'A39', 'order', 12, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '39'),
    (2, 'A40', 'order', 13, 100, 'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh', 'SE1', '06:00', '40'),
    
	-- Dữ liệu cho toa tàu 2 của chuyến tàu SE2
    (3, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE3','10:00','1'),
    (3, 'B2', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE3','10:00','2'),
    (3, 'B3', 'order', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE3','10:00','3'),
    
	-- Dữ liệu cho toa tàu 2 của chuyến tàu SE2
	(4, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE4','10:00','1'),
    (4, 'B2', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE4','10:00','2'),
    (4, 'B3', 'order', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE4','10:00','3'),
    
	(5, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE5','10:00','1'),
    (5, 'B2', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE5','10:00','2'),
    (5, 'B3', 'order', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE5','10:00','3'),
    
    
	(6, 'B1', 'empty', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE6','10:00','1'),
    (6, 'B2', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE6','10:00','2'),
    (6, 'B3', 'empty', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE6','10:00','3'),
    
    
	(7, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE7','10:00','1'),
    (7, 'B2', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE7','10:00','2'),
    (7, 'B3', 'order', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE7','10:00','3'),
    
    
	(8, 'B1', 'empty', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE8','10:00','1'),
    (8, 'B2', 'order', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE8','10:00','2'),
    (8, 'B3', 'order', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE8','10:00','3'),
    
    
    (9, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE9','10:00','1'),
    (9, 'B2', 'order', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE9','10:00','2'),
    (9, 'B3', 'empty', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE9','10:00','3'),
    
    
	(10, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE10','10:00','1'),
    (10, 'B2', 'order', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE10','10:00','2'),
    (10, 'B3', 'empty', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE10','10:00','3'),
    
    
    (11, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE11','10:00','1'),
    (11, 'B2', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE11','10:00','2'),
    (11, 'B3', 'order', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE11','10:00','3'),
    
    
    (12, 'B1', 'empty', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE12','10:00','1'),
    (12, 'B2', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE12','10:00','2'),
    (12, 'B3', 'order', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE12','10:00','3'),
    
    
    (13, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE13','10:00','1'),
    (13, 'B3', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE13','10:00','2'),
    (13, 'B3', 'empty', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE13','10:00','3'),
    
    
    (14, 'B1', 'order', 1, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE14','10:00','1'),
    (14, 'B2', 'empty', 2, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE14','10:00','2'),
    (14, 'B3', 'empty', 3, 100,'Tỉnh Thanh Hóa', 'Thành phố Hồ Chí Minh','SE14','10:00','3');
    
select * from customers;
select * from tickets;


SELECT t FROM tickets t WHERE t.customer.email = email AND t.customer.phone =phone;