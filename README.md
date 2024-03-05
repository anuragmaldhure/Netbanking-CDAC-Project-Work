# Aarna Bank : A Retail Net Banking Web Application

## Technologies Used

- Frontend:
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?logo=bootstrap&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Material UI](https://img.shields.io/badge/-Material%20UI-0081CB?logo=materialui&logoColor=white) ![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white)  

- Backend:
![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?logo=springboot&logoColor=white) ![Spring Framework](https://img.shields.io/badge/-Spring%20Framework-6DB33F?logo=spring&logoColor=white)
 ![Spring Data JPA](https://img.shields.io/badge/-Spring%20Data%20JPA-6DB33F?logo=springdata&logoColor=white) ![Spring Security](https://img.shields.io/badge/-Spring%20Security-6DB33F?logo=spring-security&logoColor=white) ![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)


- Database:
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white)  

- Other:
![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white) ![AWS EC2](https://img.shields.io/badge/-AWS%20EC2-232F3E?logo=amazonaws&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white) ![Postman](https://img.shields.io/badge/-Postman-FF6C37?logo=postman&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?logo=swagger&logoColor=black) ![Figma](https://img.shields.io/badge/-Figma-F24E1E?logo=figma&logoColor=white)  ![draw.io](https://img.shields.io/badge/-draw.io-F08705?logo=drawio&logoColor=white)

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Security Measures](#security-measures)
- [Database Management](#database-management)
- [Project Management Methodology](#project-management-methodology)
- [Deployment](#deployment)
- [Challenges Faced](#challenges-faced)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a full-stack retail net banking web application developed to provide a user-friendly and secure platform for managing banking operations. It includes three distinct roles: Customer, Employee, and Manager, each with specific functionalities tailored to their needs. Implemented concepts I learnt, crafted frontend with React, React Router, Redux, HTML5, CSS, Bootstrap and JavaScript. Backend has RESTful architecture using Spring Boot, Java, J2EE, Spring Data JPA, and Spring Security for JWT authentication and role-based authorization. MySQL as database, managed using Hibernate ORM with 'code-first' approach. Maintained version control via GitHub & conducted API testing using tools like Postman and Swagger. Followed agile software development methodology for iterative development & quick adaptation. Deployed the application on AWS & has robust features, including email notifications, KYC verification, and OTP-verified transactions. Features were discarded from initial Software Requirements Specification (SRS) due to project time constraints. Overall, project is a blend of technical expertise & strategic planning.
[Video Explanation](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

## Features
  - User authentication with ![JWT](https://img.shields.io/badge/-JWT-%2377B5E5?logo=jsonwebtoken&logoColor=white) token
  - Role-based ![Authorization](https://img.shields.io/badge/-Authorization-%23197AAB?logo=authorization&logoColor=white) using Spring Security
  - KYC ![Verification](https://img.shields.io/badge/-Verification-%230080FF?logo=verification&logoColor=white) of Customer mandatory for carrying any type of transactions in account and ![Temporary Deactivation](https://img.shields.io/badge/Temporary-Deactivation-%23FF5733?logo=freeze&logoColor=white) and ![Reactivation](https://img.shields.io/badge/-Reactivation-%2333FF57?logo=freeze&logoColor=white) of account
  - ![Time-based OTP](https://img.shields.io/badge/-Time%20Based%20OTP-%2377B5E5?logo=lock&logoColor=white)-verified transactions transactions 
  - ![Email](https://img.shields.io/badge/-Email-%230077B5?logo=gmail&logoColor=white) Notifications for account opening, any type of transaction (deposit / withdrawal / send), and KYC status update

## API Documentation
Generated using Swagger : [API Documentation](https://github.com/anuragmaldhure/Netbanking-CDAC-Project-Work/blob/main/Project%20API%20Documentation.pdf)


## Security Measures

- Implemented JWT authentication for secure user login.
- Utilized Spring Security for role-based authorization.
- Followed best practices for secure data handling like storage of password encrytion using org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
- Time based (valid for 2 minutes) otp generation and verification at Server Side implemented by server side caching and multithreading
- Employee Management by Manager
- Auto-generated account numbers during account creation and password during forgot password service using custom strategy at server side
- Used Triggers at Database level as per requirements due to normalized database to maintain data consistency and reduce data redundancy

## Database Management

- MySQL database managed using Hibernate ORM with a 'code-first' approach.
- Ensured efficient data storage and retrieval for optimized performance.

## Project Management Methodology

- Followed agile software development methodology for iterative development and quick adaptation.
- Managed project constraints effectively to deliver value incrementally that can be seen as in commits of this repository.

## Deployment

The application was deployed on Amazon Web Services (AWS) for accessibility and scalability using Docker containers. 
[Watch AWS Deployed App Video](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

## Challenges Faced

- Time constraints leading to feature adjustments (reduced).
- Addressed technical challenges related to parallel development, integration deployment and performace optimization.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests to contribute to the project.

## License

This project is licensed under the [MIT License](LICENSE).
