FROM openjdk:23
VOLUME /tmp
EXPOSE 3000
ARG JAR_FILE=java-todo-app.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]