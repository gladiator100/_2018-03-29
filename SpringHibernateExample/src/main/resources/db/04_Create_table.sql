
 Use expressDelivery;

// ----------------------------------------------------------------------------------------------------
// Master Tables
// ----------------------------------------------------------------------------------------------------

// M1 
CREATE TABLE MERCHANT(
	id INT NOT NULL auto_increment,
	name VARCHAR(50) NOT NULL,
	Address VARCHAR(100) NOT NULL,
	city VARCHAR(30) NOT NULL,
	State VARCHAR(10) NOT NULL,
	zip VARCHAR(10) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	Phone VARCHAR(12) NOT NULL,
	area_limit INT NOT NULL,
	active boolean DEFAULT 1,
	PRIMARY KEY (id)
);

// M2
CREATE TABLE RESTAURANT(
    id INT NOT NULL auto_increment, 
    merchantId INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    Address VARCHAR(100) NOT NULL,
    city VARCHAR(30) NOT NULL,
    State VARCHAR(20) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    image VARCHAR(250),
    active boolean DEFAULT 1,
    PRIMARY KEY (id),
    CONSTRAINT FK_RESTAURANT FOREIGN KEY (merchantId) REFERENCES MERCHANT(id)
);

// M3
CREATE TABLE FOOD_ITEM(
	id INT NOT NULL auto_increment,
	name VARCHAR(150) NOT NULL,
	category VARCHAR (100),
	PRIMARY KEY (id)
);	

// ----------------------------------------------------------------------------------------------------	
// Configuration Table 
// ----------------------------------------------------------------------------------------------------

// C1
CREATE TABLE ZIP_BUSTYPE_MERCHANT(
    id INT NOT NULL auto_increment, 
    business_zipcode VARCHAR(5) NOT NULL,
    business_city VARCHAR(30) NOT NULL,
	business_State VARCHAR(10) NOT NULL,
    business_type VARCHAR(4) NOT NULL,
    merchantId INT NOT NULL,
    active boolean DEFAULT 1,
    PRIMARY KEY (id),
    CONSTRAINT FK_ZIP_BUSTYPE_MERCHANT FOREIGN KEY (merchantId) REFERENCES MERCHANT(id)
);

// C2
CREATE TABLE RESTAURANT_BUSTYPE(
    id INT NOT NULL auto_increment, 
    zip_bustype_merchantId INT NOT NULL, 
    restaurantId INT NOT NULL,
    timings varchar(50) NOT NULL,         // add values in insert sql
    active boolean DEFAULT 1,
    PRIMARY KEY (id),
    CONSTRAINT FK_RESTAURANT_BUSTYPE FOREIGN KEY (zip_bustype_merchantId) REFERENCES ZIP_BUSTYPE_MERCHANT(id)
    CONSTRAINT FK_RESTAURANT_BUSTYPE FOREIGN KEY (restaurantId) REFERENCES RESTAURANT(id)
);

// C3
CREATE TABLE RESTAURANT_MENU(
    id INT NOT NULL auto_increment, 
	restaurant_bustypeId INT NOT NULL,
    name VARCHAR(150) NOT NULL,
    description VARCHAR(400),
    menu_image VARCHAR(100),
    price DOUBLE(40,2) default 0,
    active boolean DEFAULT 1,
    PRIMARY KEY (id),
	CONSTRAINT FK_RESTAURANT_MENU FOREIGN KEY (restaurant_bustypeId) REFERENCES RESTAURANT_BUSTYPE(id)
);


// C4
CREATE TABLE MENU_SECTION(
	id INT NOT NULL auto_increment,
	menuId INT NOT NULL,
	name VARCHAR(150) NOT NULL,
	description VARCHAR(400),
	type CHAR(1),
	PRIMARY KEY (id),
	CONSTRAINT FK_MENU_SECTION FOREIGN KEY( menuId) REFERENCES RESTAURANT_MENU(id)
);			


// C5	
CREATE TABLE SECTION_ITEM_RELATION (
	id INT NOT NULL auto_increment,	
	sectionId INT NOT NULL,
	itemId	INT NOT NULL,		
	PRIMARY KEY (id),
	CONSTRAINT FK_SECTION_ITEM_RELATION_1 FOREIGN KEY( sectionId) REFERENCES MENU_SECTION(id),
	CONSTRAINT FK_SECTION_ITEM_RELATION_2 FOREIGN KEY( itemId) REFERENCES FOOD_ITEM(id)
);					
					

// C6		
CREATE TABLE RESTAURANT_TIME (
	id INT NOT NULL auto_increment,	
	restId INT NOT NULL,
	day varchar(10) NOT NULL,
	start_time	TIME,
	end_time	TIME,
	PRIMARY KEY (id),
	CONSTRAINT FK_RESTAURANT_TIME FOREIGN KEY (restId) REFERENCES RESTAURANT(id)
);
		
// global exception table
CREATE TABLE GLOBAL_TIMEOFF (
	id INT NOT NULL auto_increment,	
	date NOT NULL,
	merchantId INT NOT NULL,
	restId INT,
    
    active boolean DEFAULT 1,
    PRIMARY KEY (id),
    CONSTRAINT FK_GLOBAL_TIMEOFF_1 FOREIGN KEY (merchantId) REFERENCES MERCHANT(id),
	CONSTRAINT FK_GLOBAL_TIMEOFF_2 FOREIGN KEY (restId) REFERENCES RESTAURANT(id)
	
);
		
		
		
		