
CREATE USER 'sky'@'localhost' IDENTIFIED BY 'sky';
grant all privileges on expressDelivery.* to sky@'%' identified by 'sky';