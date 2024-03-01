# FROM openjdk:11
# ARG JAR_FILE=target/* .jar
# COPY ${JAR_FILE} spring-boot-aarna-bank-aws-exe.jar
# ENTRYPOINT ["java", "-jar", "/spring-boot-aarna-bank-aws-exe.jar"]

#### Stage 1: Build the application
FROM adoptopenjdk/openjdk11:ubi as build

# Set the current working directory inside the image
WORKDIR /app

# Copy maven executable to the image
COPY mvnw .
COPY .mvn .mvn

# Copy the pom-xml file
COPY pom.xml .

# Make mvnw executable
RUN chmod +x mvnw

# Build all the dependencies in preparation to go offline.
# This is a separate step so the dependencies will be cached unless
# the pom.xml file has changed.
RUN ./mvnw dependency:go-offline -B

# Copy the project source
COPY src src

# Run the Maven wrapper script to package the application (skip tests)
RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

#### Stage 2: A minimal docker image with command to run the app 
FROM adoptopenjdk/openjdk11:ubi

ARG DEPENDENCY=/app/target/dependency

# Copy project dependencies from the build stage
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
 
ENTRYPOINT ["java","-cp","app:app/lib/*","com.app.Application"]
