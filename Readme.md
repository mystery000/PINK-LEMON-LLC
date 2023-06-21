
# PINK-LEMON-LLC

## What is it?
This source code is backend using Spring Security framework for Pink Lemon LLC.

Tested with
* Docker 19.03
* Ubuntu 22.04
* Java 17
* Spring Boot 3.1.0
* Maven 3.9.2

For explanation, please visit this article - [Docker and Spring Boot](https://mkyong.com/docker/docker-spring-boot-examples/)

## How to run this?
```bash
$ git clone https://github.com/mystery000/PINK-LEMON-LLC
$ cd docker-spring-boot
$ mvn clean package
$ java -jar target/spring-boot-web.jar

  access http://localhost:8000

//dockerize

// create a docker image
$ sudo docker build -t spring-boot:1.0 .
// run it
$ sudo docker run -d -p 8080:8080 -t spring-boot:1.0

  access http://localhost:8000
```